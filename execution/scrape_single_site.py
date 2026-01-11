import os
import json
from litellm import completion
from subprocess import check_output

def scrape_with_vision(url, objective, schema):
    print(f"🚀 Starting visual scrape for: {url}")
    
    # 1. Capture screenshot using a simple Node/Puppeteer bridge or Playwright
    # Para este exemplo, assumimos um helper que salva em .tmp/screenshot.png
    os.system(f"node execution/helpers/capture.js {url}")
    
    screenshot_path = ".tmp/screenshot.png"
    
    # 2. Use LiteLLM with Claude 3.5 Sonnet (Vision)
    with open(screenshot_path, "rb") as image_file:
        response = completion(
            model="anthropic/claude-4-5-sonnet",
            messages=[
                {
                    "role": "user",
                    "content": [
                        {"type": "text", "text": f"Objective: {objective}. Return ONLY a JSON matching this schema: {schema}"},
                        {"type": "image_url", "image_url": {"url": f"data:image/png;base64,{image_file}"}}
                    ],
                }
            ],
        )
    
    # 3. Clean and return data
    data = response.choices[0].message.content
    return json.loads(data)

if __name__ == "__main__":
    # Exemplo de uso pelo Agente
    res = scrape_with_vision(
        "https://example.com", 
        "Extract product name and price", 
        "{'name': 'string', 'price': 'number'}"
    )
    print(json.dumps(res, indent=2))