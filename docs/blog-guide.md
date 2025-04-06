# Blog Management Guide

This guide explains how to add, manage, and link blog posts in your personal website built with SvelteKit and DaisyUI.

## Table of Contents

1. [Blog Structure Overview](#blog-structure-overview)
2. [Creating a New Blog Post](#creating-a-new-blog-post)
3. [Blog Post Metadata](#blog-post-metadata)
4. [Linking Blog Posts](#linking-blog-posts)
5. [Adding Images and Media](#adding-images-and-media)
6. [Customizing the Blog List Page](#customizing-the-blog-list-page)
7. [Advanced Features](#advanced-features)

## Blog Structure Overview

The blog system uses SvelteKit's file-based routing to organize blog posts. Here's the structure:

```
src/
└── routes/
    ├── blog/
    │   ├── +page.svelte        # Main blog listing page
    │   ├── [slug]/             # Dynamic route for individual blog posts
    │   │   └── +page.svelte    # Template for individual blog posts
    │   └── posts/              # Directory to store blog post data
    │       └── index.js        # Exports all blog posts data
```

## Creating a New Blog Post

### Step 1: Set Up the Blog Post Structure (if not already done)

First, you need to create the necessary files for individual blog posts if they don't exist yet:

1. Create a dynamic route folder for individual blog posts:

```bash
mkdir -p src/routes/blog/[slug]
```

2. Create a template for individual blog posts:

```bash
touch src/routes/blog/[slug]/+page.svelte
```

3. Create a directory to store blog post data:

```bash
mkdir -p src/routes/blog/posts
```

4. Create an index file to export all blog posts:

```bash
touch src/routes/blog/posts/index.js
```

### Step 2: Create the Blog Post Template

Edit `src/routes/blog/[slug]/+page.svelte` to create a template for individual blog posts:

```svelte
<script>
  import { page } from '$app/stores';
  import { blogPosts } from '../posts/index.js';

  // Get the current slug from the URL
  $: slug = $page.params.slug;

  // Find the blog post that matches the slug
  $: post = blogPosts.find(post => post.slug === slug);
</script>

{#if post}
  <article class="prose max-w-none">
    <h1 class="text-4xl font-bold mb-6">{post.title}</h1>

    <div class="flex items-center gap-4 mb-8">
      <div class="badge badge-primary">{post.category}</div>
      <div class="text-sm opacity-70">{post.date}</div>
    </div>

    {#if post.image}
      <img src={post.image} alt={post.title} class="w-full rounded-lg mb-8" />
    {/if}

    <div class="content">
      {@html post.content}
    </div>

    {#if post.tags && post.tags.length > 0}
      <div class="flex flex-wrap gap-2 mt-8">
        {#each post.tags as tag}
          <div class="badge badge-outline">{tag}</div>
        {/each}
      </div>
    {/if}
  </article>
{:else}
  <div class="alert alert-error">
    <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    <span>Blog post not found!</span>
  </div>
{/if}

<div class="flex justify-between mt-12">
  <a href="/blog" class="btn btn-outline">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
    </svg>
    Back to Blog
  </a>
</div>
```

### Step 3: Create the Blog Posts Data File

Edit `src/routes/blog/posts/index.js` to store your blog posts data:

```javascript
// This file exports an array of blog posts
export const blogPosts = [
  {
    id: 1,
    slug: "getting-started-with-web-development",
    title: "Getting Started with Web Development",
    excerpt: "Learn the basics of HTML, CSS, and JavaScript to kickstart your web development journey.",
    content: `
      <p>Web development is an exciting field that allows you to create interactive websites and applications. This post will guide you through the basics of HTML, CSS, and JavaScript.</p>

      <h2>HTML: The Structure</h2>
      <p>HTML (HyperText Markup Language) provides the basic structure of sites. It's what you use to put text on a page, add images or videos, create hyperlinks, etc.</p>

      <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;My First Web Page&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Hello, World!&lt;/h1&gt;
    &lt;p&gt;This is my first web page.&lt;/p&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre>

      <h2>CSS: The Style</h2>
      <p>CSS (Cascading Style Sheets) is used to style the HTML elements. It's what makes websites look good.</p>

      <pre><code>body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  color: #333;
}

h1 {
  color: #0066cc;
}</code></pre>

      <h2>JavaScript: The Functionality</h2>
      <p>JavaScript adds interactivity to your website. It allows you to create features like sliders, pop-ups, form validations, and much more.</p>

      <pre><code>// Simple JavaScript example
document.getElementById('demo').innerHTML = 'Hello, JavaScript!';</code></pre>

      <p>With these three technologies, you can build amazing websites and applications. Keep learning and practicing!</p>
    `,
    date: "April 1, 2025",
    category: "Web Development",
    image: "https://placehold.co/800x450",
    tags: ["HTML", "CSS", "JavaScript"]
  },
  {
    id: 2,
    slug: "power-of-modern-frameworks",
    title: "The Power of Modern Frameworks",
    excerpt: "Explore how modern frameworks like React, Vue, and Svelte can improve your development workflow.",
    content: `
      <p>Modern JavaScript frameworks have revolutionized the way we build web applications. In this post, we'll explore some of the most popular frameworks and how they can improve your development workflow.</p>

      <h2>React: A Component-Based Library</h2>
      <p>React, developed by Facebook, is a JavaScript library for building user interfaces. It allows you to create reusable UI components and manage state efficiently.</p>

      <pre><code>function Welcome() {
  return &lt;h1&gt;Hello, React!&lt;/h1&gt;;
}

ReactDOM.render(
  &lt;Welcome /&gt;,
  document.getElementById('root')
);</code></pre>

      <h2>Vue: The Progressive Framework</h2>
      <p>Vue.js is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable.</p>

      <pre><code>&lt;div id="app"&gt;
  {{ message }}
&lt;/div&gt;

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})</code></pre>

      <h2>Svelte: The Compiler</h2>
      <p>Svelte is a radical new approach to building user interfaces. Whereas traditional frameworks like React and Vue do the bulk of their work in the browser, Svelte shifts that work into a compile step that happens when you build your app.</p>

      <pre><code>&lt;script&gt;
  let name = 'world';
&lt;/script&gt;

&lt;h1&gt;Hello {name}!&lt;/h1&gt;</code></pre>

      <p>Each framework has its strengths and use cases. The best one for you depends on your project requirements and personal preferences.</p>
    `,
    date: "March 15, 2025",
    category: "Frameworks",
    image: "https://placehold.co/800x450",
    tags: ["React", "Vue", "Svelte"]
  }
  // Add more blog posts here
];
```

### Step 4: Update the Blog Listing Page

Now, update the blog listing page (`src/routes/blog/+page.svelte`) to use the blog posts data and link to individual posts:

```svelte
<script>
  import { blogPosts } from './posts/index.js';

  // Filter and search functionality
  let searchQuery = "";
  let selectedCategory = "All";

  $: filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Get unique categories
  $: categories = ["All", ...new Set(blogPosts.map(post => post.category))];
</script>

<div class="prose max-w-none">
  <h1 class="text-4xl font-bold mb-6">Blog</h1>

  <div class="flex flex-col md:flex-row gap-8">
    <div class="md:w-3/4">
      <!-- Search and Filter -->
      <div class="flex flex-col md:flex-row gap-4 mb-8">
        <div class="form-control flex-grow">
          <div class="input-group">
            <input
              type="text"
              placeholder="Search articles..."
              class="input input-bordered w-full"
              bind:value={searchQuery}
            />
            <button class="btn btn-square">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>

        <select class="select select-bordered" bind:value={selectedCategory}>
          {#each categories as category}
            <option value={category}>{category}</option>
          {/each}
        </select>
      </div>

      <!-- Blog Posts -->
      {#if filteredPosts.length > 0}
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          {#each filteredPosts as post}
            <div class="card bg-base-100 shadow-xl">
              <figure>
                <img src={post.image} alt={post.title} />
              </figure>
              <div class="card-body">
                <div class="flex justify-between items-center mb-2">
                  <span class="badge badge-primary">{post.category}</span>
                  <span class="text-sm opacity-70">{post.date}</span>
                </div>
                <h2 class="card-title">{post.title}</h2>
                <p>{post.excerpt}</p>
                <div class="flex flex-wrap gap-2 mt-2 mb-4">
                  {#each post.tags as tag}
                    <div class="badge badge-outline">{tag}</div>
                  {/each}
                </div>
                <div class="card-actions justify-end">
                  <a href={`/blog/${post.slug}`} class="btn btn-primary">Read More</a>
                </div>
              </div>
            </div>
          {/each}
        </div>
      {:else}
        <div class="alert alert-info">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <span>No blog posts found matching your criteria. Try adjusting your search or filters.</span>
        </div>
      {/if}

      <!-- Pagination -->
      <div class="flex justify-center mt-8">
        <div class="join">
          <button class="join-item btn">«</button>
          <button class="join-item btn btn-active">1</button>
          <button class="join-item btn">2</button>
          <button class="join-item btn">3</button>
          <button class="join-item btn">4</button>
          <button class="join-item btn">»</button>
        </div>
      </div>
    </div>

    <div class="md:w-1/4">
      <div class="sticky top-4">
        <!-- Categories -->
        <div class="card bg-base-200 mb-6">
          <div class="card-body">
            <h2 class="card-title text-xl">Categories</h2>
            <div class="flex flex-col gap-2 mt-2">
              {#each categories.filter(cat => cat !== "All") as category}
                <button
                  class="btn btn-sm {selectedCategory === category ? 'btn-primary' : 'btn-ghost'} justify-start"
                  on:click={() => selectedCategory = category}
                >
                  {category}
                </button>
              {/each}
            </div>
          </div>
        </div>

        <!-- Popular Tags -->
        <div class="card bg-base-200 mb-6">
          <div class="card-body">
            <h2 class="card-title text-xl">Popular Tags</h2>
            <div class="flex flex-wrap gap-2 mt-2">
              {#each [...new Set(blogPosts.flatMap(post => post.tags))] as tag}
                <div class="badge badge-primary">{tag}</div>
              {/each}
            </div>
          </div>
        </div>

        <!-- Newsletter Signup -->
        <div class="card bg-base-200">
          <div class="card-body">
            <h2 class="card-title text-xl">Subscribe to Newsletter</h2>
            <p class="text-sm mb-4">Get the latest articles and resources sent straight to your inbox.</p>
            <div class="form-control">
              <input type="email" placeholder="Your email" class="input input-bordered mb-2" />
              <button class="btn btn-primary">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```

## Blog Post Metadata

Each blog post should include the following metadata:

- `id`: A unique identifier for the blog post
- `slug`: A URL-friendly version of the title (used in the URL)
- `title`: The title of the blog post
- `excerpt`: A short summary of the blog post
- `content`: The full content of the blog post (HTML format)
- `date`: The publication date
- `category`: The category of the blog post
- `image`: The URL of the featured image
- `tags`: An array of tags related to the blog post

Example:

```javascript
{
  id: 3,
  slug: "responsive-design-principles",
  title: "Responsive Design Principles",
  excerpt: "Discover the key principles of responsive design to create websites that work on any device.",
  content: `
    <p>Responsive design is an approach to web design that makes your web pages look good on all devices. In this post, we'll explore the key principles of responsive design.</p>

    <!-- More content here -->
  `,
  date: "February 28, 2025",
  category: "Design",
  image: "https://placehold.co/800x450",
  tags: ["Responsive", "Design", "CSS"]
}
```

## Linking Blog Posts

To link to a blog post, use the post's slug in the URL:

```svelte
<a href={`/blog/${post.slug}`} class="btn btn-primary">Read More</a>
```

This will navigate to the individual blog post page using the dynamic route (`[slug]`).

## Adding Images and Media

### Images in Blog Posts

For images in your blog posts, you have several options:

1. **External Images**: Use URLs from external sources (like in the examples above).

2. **Local Images**: Store images in the `static` folder and reference them:

```javascript
{
  // ...
  image: "/blog-images/my-image.jpg",
  // ...
  content: `
    <p>Some text...</p>
    <img src="/blog-images/another-image.jpg" alt="Description" />
    <p>More text...</p>
  `
}
```

To use local images:

1. Create a folder for blog images:

```bash
mkdir -p static/blog-images
```

2. Add your images to this folder.

3. Reference them with paths starting from the `static` folder (which becomes the root in the built site).

### Other Media

You can include other media like videos, audio, or embedded content in the `content` field:

```javascript
content: `
  <p>Check out this video:</p>
  <div class="video-container">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID" frameborder="0" allowfullscreen></iframe>
  </div>
  <p>More content...</p>
`
```

## Customizing the Blog List Page

### Changing the Layout

You can modify the layout of the blog list page by editing `src/routes/blog/+page.svelte`. For example, you might want to change from a grid to a list view:

```svelte
<!-- List view instead of grid -->
{#if filteredPosts.length > 0}
  <div class="flex flex-col gap-6">
    {#each filteredPosts as post}
      <div class="card card-side bg-base-100 shadow-xl">
        <figure class="w-1/3">
          <img src={post.image} alt={post.title} />
        </figure>
        <div class="card-body w-2/3">
          <h2 class="card-title">{post.title}</h2>
          <p>{post.excerpt}</p>
          <div class="card-actions justify-end">
            <a href={`/blog/${post.slug}`} class="btn btn-primary">Read More</a>
          </div>
        </div>
      </div>
    {/each}
  </div>
{/if}
```

### Adding Featured Posts

You might want to highlight certain posts as featured:

```javascript
// In src/routes/blog/posts/index.js
export const blogPosts = [
  {
    id: 1,
    // ...
    featured: true
  },
  // ...
];
```

Then in your blog list page:

```svelte
<!-- Featured posts section -->
{#if blogPosts.some(post => post.featured)}
  <div class="mb-12">
    <h2 class="text-3xl font-bold mb-6">Featured Posts</h2>
    <div class="carousel w-full">
      {#each blogPosts.filter(post => post.featured) as post, i}
        <div id={`slide${i}`} class="carousel-item relative w-full">
          <img src={post.image} class="w-full" alt={post.title} />
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href={`#slide${i === 0 ? blogPosts.filter(p => p.featured).length - 1 : i - 1}`} class="btn btn-circle">❮</a>
            <a href={`#slide${i === blogPosts.filter(p => p.featured).length - 1 ? 0 : i + 1}`} class="btn btn-circle">❯</a>
          </div>
          <div class="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
            <h3 class="text-xl font-bold">{post.title}</h3>
            <p class="mb-2">{post.excerpt}</p>
            <a href={`/blog/${post.slug}`} class="btn btn-primary btn-sm">Read More</a>
          </div>
        </div>
      {/each}
    </div>
  </div>
{/if}
```

## Advanced Features

### Adding Markdown Support

For easier content writing, you might want to use Markdown instead of HTML. You'll need to install a Markdown parser like `marked`:

```bash
npm install marked
```

Then update your blog post template:

```svelte
<script>
  import { page } from '$app/stores';
  import { blogPosts } from '../posts/index.js';
  import { marked } from 'marked';

  $: slug = $page.params.slug;
  $: post = blogPosts.find(post => post.slug === slug);

  // Convert Markdown to HTML
  $: content = post ? marked(post.content) : '';
</script>

{#if post}
  <article class="prose max-w-none">
    <!-- ... -->
    <div class="content">
      {@html content}
    </div>
    <!-- ... -->
  </article>
{/if}
```

And store your content as Markdown:

```javascript
{
  // ...
  content: `
# Heading 1

This is a paragraph with **bold** and *italic* text.

## Heading 2

- List item 1
- List item 2
- List item 3

[Link text](https://example.com)

![Image alt text](https://example.com/image.jpg)
  `
}
```

### Adding Comments

To add a comments section to your blog posts, you can integrate a third-party service like Disqus:

1. Sign up for Disqus and get your shortname.

2. Create a Disqus component (`src/lib/components/Disqus.svelte`):

```svelte
<script>
  export let url = '';
  export let identifier = '';
  export let title = '';

  import { onMount } from 'svelte';

  onMount(() => {
    window.disqus_config = function() {
      this.page.url = url;
      this.page.identifier = identifier;
      this.page.title = title;
    };

    const d = document, s = d.createElement('script');
    s.src = 'https://YOUR_SHORTNAME.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
  });
</script>

<div id="disqus_thread"></div>
```

3. Add it to your blog post template:

```svelte
<script>
  // ...
  import Disqus from '$lib/components/Disqus.svelte';
</script>

{#if post}
  <article class="prose max-w-none">
    <!-- ... -->
  </article>

  <div class="mt-12">
    <h2 class="text-2xl font-bold mb-6">Comments</h2>
    <Disqus
      url={`https://yourdomain.com/blog/${post.slug}`}
      identifier={post.slug}
      title={post.title}
    />
  </div>
{/if}
```

### Adding Pagination

For better performance with many blog posts, implement pagination:

1. Update `src/routes/blog/+page.svelte`:

```svelte
<script>
  // ...
  let currentPage = 1;
  let postsPerPage = 6;

  $: paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  $: totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  function goToPage(page) {
    if (page >= 1 && page <= totalPages) {
      currentPage = page;
      window.scrollTo(0, 0);
    }
  }
</script>

<!-- Use paginatedPosts instead of filteredPosts in the loop -->
{#each paginatedPosts as post}
  <!-- ... -->
{/each}

<!-- Pagination controls -->
<div class="flex justify-center mt-8">
  <div class="join">
    <button class="join-item btn" on:click={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>«</button>
    {#each Array(totalPages) as _, i}
      <button
        class="join-item btn {currentPage === i + 1 ? 'btn-active' : ''}"
        on:click={() => goToPage(i + 1)}
      >
        {i + 1}
      </button>
    {/each}
    <button class="join-item btn" on:click={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages}>»</button>
  </div>
</div>
```

---

This guide covers the basics of adding and managing blog posts in your SvelteKit website. You can extend and customize it further based on your specific needs.
