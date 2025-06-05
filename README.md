# Company Researcher

A small React + TypeScript web application for collecting information about companies. Users can enter a company name, the app sends the request to a configured webhook and shows the resulting report in a Markdown-friendly display. The interface includes a dark mode toggle and animated loading messages.

## Features

- **Vite + React + TypeScript** project structure.
- **TailwindCSS** styling with optional dark mode.
- Markdown rendering of the webhook response using `react-markdown` and `remark-gfm`.
- Dynamic loading messages while awaiting a response.
- Easy configuration of the webhook endpoint.

## Project Structure

```
├── index.html                # Application entry point
├── src/
│   ├── App.tsx               # Main component
│   ├── components/           # UI components
│   ├── hooks/                # Custom React hooks
│   ├── services/             # API helpers
│   ├── config/               # Application configuration
│   └── index.css             # TailwindCSS imports
└── ...
```

## Getting Started

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Start the development server**

   ```bash
   npm run dev
   ```

   Vite will serve the app at `http://localhost:5173` by default.

## Building for Production

Run the build script to generate a production-ready bundle in the `dist` folder:

```bash
npm run build
```

Preview the production build locally with:

```bash
npm run preview
```

## Linting

Use ESLint to check the codebase:

```bash
npm run lint
```

## Configuration

The webhook URL used to fetch company data is defined in [`src/config/api.ts`](src/config/api.ts):

```ts
export const API_CONFIG = {
  WEBHOOK_URL: 'https://n8.ngnc.co.uk/webhook-test/1a830376-1355-42a5-9fc0-fb1b9bc4d1fe',
} as const;
```

Update this value if you need to send requests to a different endpoint.

## License

This project is provided without a specific license. Adapt it to your needs.

