---
slug: deployment
category: operations
generatedAt: 2026-01-19T19:16:24.775Z
relevantFiles:
  - docker-compose.frontend.yml
  - docker-compose.prod.yml
  - docker-compose.yml
  - apps/api/Dockerfile
  - apps/web/Dockerfile
---

# How do I deploy this project?

## Deployment

### Docker

This project includes Docker configuration.

```bash
docker build -t app .
docker run -p 3000:3000 app
```
