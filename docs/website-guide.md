# Personal Website Guide

This guide explains how to customize and maintain your personal website built with SvelteKit and DaisyUI.

## Table of Contents

1. [Project Structure](#project-structure)
2. [Customizing Pages](#customizing-pages)
3. [Navigation](#navigation)
4. [Styling with DaisyUI](#styling-with-daisyui)
5. [Deployment](#deployment)
6. [Adding New Pages](#adding-new-pages)

## Project Structure

The website follows SvelteKit's file-based routing system. Here's an overview of the project structure:

```
/
├── src/
│   ├── app.css                # Global CSS
│   ├── app.html               # HTML template
│   ├── lib/                   # Shared components and utilities
│   └── routes/                # Pages and routes
│       ├── +layout.svelte     # Main layout (includes navbar and footer)
│       ├── +page.svelte       # Home page
│       ├── about/
│       │   └── +page.svelte   # About page
│       ├── resume/
│       │   └── +page.svelte   # Resume page
│       ├── blog/
│       │   ├── +page.svelte   # Blog listing page
│       │   └── [slug]/        # Dynamic route for individual blog posts
│       │       └── +page.svelte
│       └── contact/
│           └── +page.svelte   # Contact page
├── static/                    # Static assets (images, fonts, etc.)
└── docs/                      # Documentation
```

## Customizing Pages

### Home Page

The home page is defined in `src/routes/+page.svelte`. It includes:

- A hero section with a welcome message
- Featured content section with cards

To customize the home page:

1. Edit the text in the hero section to introduce yourself
2. Update the featured content cards with your projects or highlights
3. Modify the call-to-action buttons to link to relevant pages

Example:

```svelte
<div class="hero min-h-screen bg-base-200">
  <div class="hero-content text-center">
    <div class="max-w-md">
      <h1 class="text-5xl font-bold">John Doe</h1>
      <p class="py-6">Full-stack developer specializing in web applications and cloud architecture.</p>
      <div class="flex justify-center gap-4">
        <a href="/about" class="btn btn-primary">About Me</a>
        <a href="/blog" class="btn btn-secondary">Read My Blog</a>
      </div>
    </div>
  </div>
</div>
```

### About Page

The about page (`src/routes/about/+page.svelte`) is where you can share information about yourself. Customize:

- Your profile picture
- Personal introduction
- Skills and expertise
- Interests and hobbies

### Resume Page

The resume page (`src/routes/resume/+page.svelte`) displays your professional experience and skills. Update:

- Work experience
- Education
- Skills
- Certifications
- Contact information

### Contact Page

The contact page (`src/routes/contact/+page.svelte`) includes a contact form and your contact information. Customize:

- Email address
- Phone number
- Location
- Social media links
- Office hours (if applicable)

**Note:** The contact form is currently set up as a frontend-only demo. To make it functional, you'll need to add server-side handling for form submissions.

## Navigation

The navigation bar is defined in `src/routes/+layout.svelte`. It includes links to all main pages and is displayed on every page.

To customize the navigation:

1. Update the site title:

```svelte
<div class="navbar-center">
  <a href="/" class="btn btn-ghost text-xl">Your Name</a>
</div>
```

2. Modify the navigation links:

```svelte
<ul tabindex="0" class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
  <li><a href="/">Home</a></li>
  <li><a href="/about">About</a></li>
  <li><a href="/resume">Resume</a></li>
  <li><a href="/blog">Blog</a></li>
  <li><a href="/contact">Contact</a></li>
  <!-- Add or remove links as needed -->
</ul>
```

The footer is also defined in `src/routes/+layout.svelte`. Update the footer links and copyright information as needed.

## Styling with DaisyUI

This website uses [DaisyUI](https://daisyui.com/), a component library for Tailwind CSS. DaisyUI provides pre-styled components that you can use to build your website.

### Changing the Theme

The theme is configured in `src/app.css`:

```css
@plugin "daisyui" {
  themes: dark --default;
}
```

You can change the theme by modifying this configuration. DaisyUI offers several built-in themes:

- `light`
- `dark`
- `cupcake`
- `bumblebee`
- `emerald`
- `corporate`
- `synthwave`
- `retro`
- `cyberpunk`
- And [many more](https://daisyui.com/docs/themes/)

To change the theme, update the configuration:

```css
@plugin "daisyui" {
  themes: cupcake --default;
}
```

You can also define multiple themes and allow users to switch between them. See the [DaisyUI documentation](https://daisyui.com/docs/themes/) for more information.

### Using DaisyUI Components

DaisyUI provides a wide range of components that you can use in your website. Here are some examples:

- Buttons: `btn`, `btn-primary`, `btn-secondary`, etc.
- Cards: `card`, `card-body`, `card-title`, etc.
- Forms: `form-control`, `input`, `textarea`, etc.
- Alerts: `alert`, `alert-info`, `alert-success`, etc.

For a complete list of components and their usage, refer to the [DaisyUI documentation](https://daisyui.com/components/).

## Deployment

To deploy your website, you have several options:

### Building for Production

First, build your website for production:

```bash
npm run build
```

This will create a production-ready version of your website in the `build` directory.

### Deployment Options

1. **Static Hosting** (GitHub Pages, Netlify, Vercel, etc.):

   - For static hosting, you can use the adapter-static:

   ```bash
   npm install -D @sveltejs/adapter-static
   ```

   - Update `svelte.config.js`:

   ```javascript
   import adapter from '@sveltejs/adapter-static';

   export default {
     kit: {
       adapter: adapter({
         // Options
         pages: 'build',
         assets: 'build',
         fallback: 'index.html',
         precompress: false
       })
     }
   };
   ```

2. **Node.js Hosting** (Heroku, DigitalOcean, etc.):

   - For Node.js hosting, use the adapter-node:

   ```bash
   npm install -D @sveltejs/adapter-node
   ```

   - Update `svelte.config.js`:

   ```javascript
   import adapter from '@sveltejs/adapter-node';

   export default {
     kit: {
       adapter: adapter()
     }
   };
   ```

3. **Serverless Hosting** (Vercel, Netlify Functions, etc.):

   - For serverless hosting, use the appropriate adapter:

   ```bash
   npm install -D @sveltejs/adapter-vercel
   # or
   npm install -D @sveltejs/adapter-netlify
   ```

   - Update `svelte.config.js` accordingly.

## Adding New Pages

To add a new page to your website:

1. Create a new directory in `src/routes/` with the name of your page (e.g., `projects`).
2. Create a `+page.svelte` file in that directory.
3. Add your page content.
4. Add a link to the page in the navigation bar.

Example:

```bash
mkdir -p src/routes/projects
touch src/routes/projects/+page.svelte
```

Then edit `src/routes/projects/+page.svelte`:

```svelte
<script>
  // Your script here
</script>

<div class="prose max-w-none">
  <h1 class="text-4xl font-bold mb-6">My Projects</h1>

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <!-- Project cards -->
    <div class="card bg-base-100 shadow-xl">
      <figure><img src="https://placehold.co/600x400" alt="Project 1" /></figure>
      <div class="card-body">
        <h2 class="card-title">Project 1</h2>
        <p>Description of project 1.</p>
        <div class="card-actions justify-end">
          <a href="https://github.com/yourusername/project1" class="btn btn-primary">View on GitHub</a>
        </div>
      </div>
    </div>

    <!-- Add more project cards as needed -->
  </div>
</div>
```

Finally, add a link to the navigation in `src/routes/+layout.svelte`:

```svelte
<ul tabindex="0" class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
  <li><a href="/">Home</a></li>
  <li><a href="/about">About</a></li>
  <li><a href="/resume">Resume</a></li>
  <li><a href="/projects">Projects</a></li> <!-- New link -->
  <li><a href="/blog">Blog</a></li>
  <li><a href="/contact">Contact</a></li>
</ul>
```

---

For more information on how to manage blog posts, see the [Blog Management Guide](./blog-guide.md).
