# Getting Started

This guide will help you get started with running and developing your personal website.

## Prerequisites

Before you begin, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 16 or later)
- npm (comes with Node.js) or [yarn](https://yarnpkg.com/)

## Running the Development Server

To run the development server:

1. Open a terminal in the project root directory.
2. Install dependencies (if you haven't already):

```bash
npm install
# or
yarn
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to [http://localhost:5173](http://localhost:5173) to see your website.

The development server features hot module replacement, which means most changes you make to the code will be reflected in the browser without needing to refresh the page.

## Building for Production

When you're ready to deploy your website:

1. Build the project:

```bash
npm run build
# or
yarn build
```

2. Preview the production build locally (optional):

```bash
npm run preview
# or
yarn preview
```

## Project Structure

The project follows SvelteKit's file-based routing system:

- `src/routes/+page.svelte` - Home page
- `src/routes/about/+page.svelte` - About page
- `src/routes/resume/+page.svelte` - Resume page
- `src/routes/blog/+page.svelte` - Blog listing page
- `src/routes/blog/[slug]/+page.svelte` - Individual blog post page
- `src/routes/contact/+page.svelte` - Contact page

## Documentation

For more detailed information, check out these guides:

- [Website Guide](./website-guide.md) - General guide for customizing and maintaining your website
- [Blog Management Guide](./blog-guide.md) - Specific guide for adding and managing blog posts

## Troubleshooting

If you encounter any issues:

1. Make sure all dependencies are installed correctly.
2. Check the console for error messages.
3. Try restarting the development server.
4. Clear your browser cache.

If problems persist, refer to the [SvelteKit documentation](https://kit.svelte.dev/docs) or seek help from the [Svelte community](https://svelte.dev/chat).
