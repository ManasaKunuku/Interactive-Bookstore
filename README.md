# The Reading Room — Interactive Bookstore

A responsive React bookstore assignment built with Vite, React Router, Context API, and CSS.

## Features
- Home page with featured books
- Book listing with search, category filters, and sorting
- Individual book detail pages
- Shopping cart with quantity controls and remove action
- Cart persistence using localStorage
- Checkout form with basic validation and demo order confirmation
- Responsive layout for desktop, tablet, and mobile

## Tech stack
- React 18
- Vite
- React Router
- React Context API
- Lucide React icons
- CSS

## Run locally
1. Install Node.js (LTS).
2. Extract this project and open the folder in VS Code.
3. Open Terminal in VS Code.
4. Run:

   ```bash
   npm install
   npm run dev
   ```

5. Open the local URL shown in the terminal (usually `http://localhost:5173`).

## Production build
```bash
npm run build
npm run preview
```

The production-ready website is generated in the `dist` folder.

## GitHub submission
Create a public GitHub repository, then run these commands from the project folder:

```bash
git init
git add .
git commit -m "Create interactive bookstore application"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/interactive-bookstore.git
git push -u origin main
```

Replace the remote URL with your own GitHub repository URL.

## Deployment
For Render Static Site:
- Build command: `npm install && npm run build`
- Publish directory: `dist`

For a client-side React Router app, add a rewrite rule:
- Source: `/*`
- Destination: `/index.html`
- Action: Rewrite

## Notes
Checkout is a front-end demo. It validates the delivery form and shows an order confirmation, but it does not connect to a payment gateway or backend order service.
