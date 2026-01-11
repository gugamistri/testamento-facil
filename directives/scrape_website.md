# SOP: Scraping & Visual Extraction

## Objective
Extract structured data from any URL while bypassing common bot detection and avoiding complex CSS selector maintenance.

## Inputs
- `url`: The target website.
- `objective`: What specific data we need (e.g., "Price of the product", "Fish species list").
- `schema`: A JSON structure or Zod schema for the output.

## Execution Steps
1. Run `execution/scrape_single_site.py` with the URL.
2. The script will use Puppeteer to take a screenshot and capture the accessibility tree.
3. The screenshot is sent to **Claude 4.5 Sonnet (Vision)** via LiteLLM.
4. The model returns a JSON that matches the requested schema.

## Error Handling
- If blocked by Cloudflare: Retry once with `puppeteer-extra-plugin-stealth`.
- If data is missing: Update the `objective` to be more specific and rerun.