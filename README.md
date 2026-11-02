# Merto Solutions website

Interactive portfolio for Merto Solutions: AI automation, data engineering, agentic AI, RAG, ML, cloud, React and design.
Built with React 18, Vite and Framer Motion.

## Run locally
```bash
npm install
npm run dev
```

## Docker
```bash
docker build -t merto-site .
docker run -p 8080:80 merto-site   # http://localhost:8080
```

## Deploy
Pushing to `main` builds and publishes to GitHub Pages via `.github/workflows/deploy.yml`.

Edit links, services and copy in `src/data.js`.
