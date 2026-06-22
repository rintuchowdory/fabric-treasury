---
key: files/d0cb9082-2a98-4c6a-b6c1-c62e53949d88/outputs/fabric-treasury-complete-setup.md
indexed_at: 2026-06-22T23:01:10.335500+00:00
---
# Fabric Treasury - Complete Project Setup

**The liquidity layer for AI agents and global treasury, powering autonomous commerce at code speed.**

---

## Project Structure

Copy each file below to your `fabric-treasury-starter` directory following this structure:

```
fabric-treasury-starter/
├── .gitignore
├── .github/
│   └── workflows/
│       ├── ci.yml
│       └── deploy-pages.yml
├── docs/
│   ├── README.md
│   └── api.md
├── src/
│   ├── api/
│   │   ├── client.ts
│   │   └── treasury.ts
│   ├── index.html
│   ├── main.ts
│   └── main.css
├── package.json
├── README.md
├── tsconfig.json
└── vite.config.js
```

---

## File Contents

### `.gitignore`

```
node_modules/
.env
.env.local
.env.*.local
dist/
build/
.DS_Store
*.log
.vscode/
.idea/
.coverage/
.nyc_output/
*.swp
*.swo
~*
```

### `package.json`

```json
{
  "name": "fabric-treasury",
  "version": "0.1.0",
  "type": "module",
  "description": "The liquidity layer for AI agents and global treasury, powering autonomous commerce at code speed.",
  "main": "dist/index.js",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "test": "vitest",
    "lint": "eslint src --ext .ts,.js",
    "format": "prettier --write src/"
  },
  "dependencies": {
    "axios": "^1.6.0"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "eslint": "^8.50.0",
    "prettier": "^3.0.0",
    "typescript": "^5.2.0",
    "vite": "^5.0.0",
    "vitest": "^1.0.0"
  }
}
```

### `vite.config.js`

```javascript
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 3000,
    host: true
  },
  build: {
    outDir: 'dist',
    sourcemap: true
  },
  define: {
    __DEV__: JSON.stringify(process.env.NODE_ENV !== 'production')
  }
});
```

### `tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "resolveJsonModule": true,
    "declaration": true,
    "declarationMap": true,
    "sourceMap": true
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

### `README.md`

```markdown
# Fabric Treasury

The liquidity layer for AI agents and global treasury, powering autonomous commerce at code speed.

## Quick Start

\`\`\`bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
\`\`\`

## Environment Variables

Create a \`.env.local\` file:

\`\`\`
VITE_API_URL=https://api.fabric.treasury/v1
VITE_API_TOKEN=your_bearer_token_here
\`\`\`

## GitHub Pages Deployment

This project is configured to deploy automatically to GitHub Pages on push to \`main\`.
```

### `src/index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="The liquidity layer for AI agents and global treasury, powering autonomous commerce at code speed.">
  <title>Fabric Treasury</title>
  <link rel="stylesheet" href="./main.css">
</head>
<body>
  <div id="app" class="container">
    <header>
      <h1>Fabric Treasury</h1>
      <p class="subtitle">The liquidity layer for AI agents and global treasury, powering autonomous commerce at code speed.</p>
    </header>
    
    <main>
      <section class="features">
        <div class="feature">
          <h3>🏦 Treasury Management</h3>
          <p>Create and manage treasury accounts with full control over reserves.</p>
        </div>
        <div class="feature">
          <h3>🌐 Global Coverage</h3>
          <p>Support for international payment flows and settlement across regions.</p>
        </div>
        <div class="feature">
          <h3>⚡ Code Speed</h3>
          <p>Execute transactions at the speed of code with AI agent integration.</p>
        </div>
      </section>

      <section class="cta">
        <p>Ready to integrate Fabric into your AI agents?</p>
        <button class="btn-primary">Get Started with API</button>
      </section>
    </main>

    <footer>
      <p>&copy; 2025 Fabric Treasury. Powering autonomous commerce.</p>
    </footer>
  </div>

  <script type="module" src="./main.ts"></script>
</body>
</html>
```

### `src/main.ts`

```typescript
import './main.css';
import { treasuryAPI } from './api/treasury';

declare global {
  interface Window {
    treasuryAPI: typeof treasuryAPI;
  }
}

// Make API available globally for testing
window.treasuryAPI = treasuryAPI;

// Initialize app
function initApp() {
  const button = document.querySelector('.btn-primary');
  if (button) {
    button.addEventListener('click', () => {
      console.log('API Documentation: See docs/api.md');
      window.location.href = './docs/api.md';
    });
  }
}

// Run when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
```

### `src/main.css`

```css
:root {
  --bg-dark: #0f172a;
  --bg-darker: #0a0f1a;
  --text-primary: #f8fafc;
  --text-secondary: #cbd5e1;
  --accent: #3b82f6;
  --accent-hover: #2563eb;
  --border: #1e293b;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  background-color: var(--bg-dark);
  color: var(--text-primary);
  line-height: 1.6;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

header {
  text-align: center;
  margin-bottom: 4rem;
  padding: 2rem 0;
}

h1 {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-decoration: none;
}

.subtitle {
  font-size: 1.25rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto;
}

main {
  margin-bottom: 4rem;
}

.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.feature {
  padding: 2rem;
  border: 1px solid var(--border);
  border-radius: 12px;
  background: rgba(15, 23, 42, 0.5);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.feature:hover {
  border-color: var(--accent);
  background: rgba(59, 130, 246, 0.05);
}

.feature h3 {
  font-size: 1.5rem;
  margin-bottom: 0.75rem;
  color: var(--text-primary);
}

.feature p {
  color: var(--text-secondary);
  font-size: 0.95rem;
}

.cta {
  text-align: center;
  padding: 3rem 2rem;
  border-radius: 12px;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%);
  border: 1px solid var(--border);
}

.cta p {
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
}

.btn-primary {
  padding: 0.75rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  background: var(--accent);
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background: var(--accent-hover);
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(59, 130, 246, 0.3);
}

footer {
  text-align: center;
  padding: 2rem 0;
  border-top: 1px solid var(--border);
  color: var(--text-secondary);
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  h1 {
    font-size: 2.5rem;
  }

  .container {
    padding: 1rem;
  }

  header {
    margin-bottom: 2rem;
    padding: 1rem 0;
  }
}
```

### `src/api/client.ts`

```typescript
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://api.fabric.treasury/v1';

class APIClient {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: API_BASE_URL,
      headers: {
        'Content-Type': 'application/json'
      }
    });

    // Add authorization header if token is available
    const token = import.meta.env.VITE_API_TOKEN;
    if (token) {
      this.client.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
  }

  public get<T = any>(url: string, config?: AxiosRequestConfig) {
    return this.client.get<T>(url, config);
  }

  public post<T = any>(url: string, data?: any, config?: AxiosRequestConfig) {
    return this.client.post<T>(url, data, config);
  }

  public put<T = any>(url: string, data?: any, config?: AxiosRequestConfig) {
    return this.client.put<T>(url, data, config);
  }

  public delete<T = any>(url: string, config?: AxiosRequestConfig) {
    return this.client.delete<T>(url, config);
  }
}

export const apiClient = new APIClient();
export default apiClient;
```

### `src/api/treasury.ts`

```typescript
import apiClient from './client';

export interface TreasuryAccount {
  id: string;
  name: string;
  currency: string;
  balance: number;
  type: 'operational' | 'reserve' | 'settlement';
  createdAt: string;
  updatedAt: string;
}

export interface CardIssueRequest {
  accountId: string;
  type?: 'virtual' | 'physical';
}

export const treasuryAPI = {
  // Create a new treasury account
  async create(name: string, currency: string, type: 'operational' | 'reserve' | 'settlement' = 'operational'): Promise<TreasuryAccount> {
    const { data } = await apiClient.post('/api/v1/treasury/accounts', {
      name,
      currency,
      type
    });
    return data;
  },

  // Get treasury account by ID
  async get(id: string): Promise<TreasuryAccount> {
    const { data } = await apiClient.get(`/api/v1/treasury/accounts/${id}`);
    return data;
  },

  // Issue a card for the account
  async issueCard(accountId: string, cardType: 'virtual' | 'physical' = 'virtual'): Promise<any> {
    const { data } = await apiClient.post(`/api/v1/treasury/accounts/${accountId}/cards`, {
      type: cardType
    });
    return data;
  }
};
```

### `docs/README.md`

```markdown
# Fabric Treasury

**The liquidity layer for AI agents and global treasury, powering autonomous commerce at code speed.**

## Overview

Fabric is a sophisticated platform designed to enable AI agents to manage liquidity, execute transactions, and control global treasuries with the precision and speed required for autonomous commerce operations.

## Key Features

- **Treasury Management** - Create and manage treasury accounts with full control over reserves
- **IBAN Integration** - Seamless IBAN management for multi-currency operations
- **AI-Agent Ready** - Built for autonomous systems to integrate and execute trades
- **Fast Execution** - Code-speed transaction processing
- **Global Coverage** - Support for international payment flows and settlement

## Getting Started

\`\`\`bash
npm install
npm run dev
\`\`\`

See [API Documentation](./api.md) for integration details.

## Architecture

Fabric is built as a modern TypeScript application with:

- REST API client for treasury operations
- Vite for fast development and optimized production builds
- GitHub Pages for documentation hosting
- GitHub Actions for continuous integration and deployment
```

### `docs/api.md`

```markdown
# Fabric Treasury API Documentation

## Base URL

\`\`\`
https://api.fabric.treasury/v1
\`\`\`

## Authentication

All requests require an \`Authorization\` header with a Bearer token:

\`\`\`
Authorization: Bearer {token}
\`\`\`

## Treasury Endpoints

### Create Treasury Account

**POST** \`/api/v1/treasury/accounts\`

Create a new treasury account.

\`\`\`typescript
{
  "name": string,
  "currency": string,
  "type": "operational" | "reserve" | "settlement"
}
\`\`\`

### Get Treasury Account

**GET** \`/api/v1/treasury/accounts/{id}\`

Retrieve account details and balance.

### Issue Card

**POST** \`/api/v1/treasury/accounts/{id}/cards\`

Issue a virtual or physical card tied to the treasury account.

## IBAN Endpoints

### Register IBAN

**POST** \`/api/v1/iban/register\`

Register an IBAN for the treasury account.

\`\`\`typescript
{
  "accountId": string,
  "iban": string,
  "accountHolder": string
}
\`\`\`

### Get IBAN

**GET** \`/api/v1/iban/{id}\`

Retrieve IBAN details.

## Error Handling

All errors follow standard HTTP status codes:

- \`400\` - Bad Request
- \`401\` - Unauthorized
- \`403\` - Forbidden
- \`404\` - Not Found
- \`500\` - Internal Server Error

Error responses include a \`message\` field with details.
```

### `.github/workflows/ci.yml`

```yaml
name: CI/CD

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main, develop]

jobs:
  test:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version: [18.x, 20.x]
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: ${{ matrix.node-version }}
      - run: npm ci
      - run: npm run lint
      - run: npm run test

  build:
    runs-on: ubuntu-latest
    needs: test
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20.x
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-artifact@v4
        with:
          name: dist
          path: dist/

  deploy:
    runs-on: ubuntu-latest
    needs: build
    if: github.ref == 'refs/heads/main'
    permissions:
      pages: write
      id-token: write
    steps:
      - uses: actions/download-artifact@v4
        with:
          name: dist
      - uses: actions/upload-pages-artifact@v2
        with:
          path: '.'
      - uses: actions/deploy-pages@v2
```

### `.github/workflows/deploy-pages.yml`

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
    paths:
      - 'src/**'
      - 'docs/**'
      - 'package.json'
      - 'vite.config.js'

jobs:
  deploy:
    runs-on: ubuntu-latest
    permissions:
      pages: write
      id-token: write
      contents: read
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - uses: actions/setup-node@v4
        with:
          node-version: '20.x'
          cache: 'npm'

      - run: npm ci
      - run: npm run build

      - uses: actions/upload-pages-artifact@v2
        with:
          path: './dist'

      - uses: actions/deploy-pages@v2
```

---

## Setup Instructions

1. **Download this file** and copy all file contents into your `fabric-treasury-starter` directory
2. **Create folders**: `mkdir -p src/api docs .github/workflows`
3. **Create each file** with the content from above sections
4. **Install dependencies**: `npm install`
5. **Push to GitHub**:
   ```bash
   cd fabric-treasury-starter
   git add .
   git commit -m "Initial commit: Fabric Treasury scaffolding with Vite, API client, and GitHub Actions CI/CD"
   git push origin main
   ```

Done! 🚀
