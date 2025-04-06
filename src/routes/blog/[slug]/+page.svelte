<script lang="ts">
  import { page } from '$app/stores';
  import { blogPosts, type BlogPost } from '../posts/index';

  // Get the current slug from the URL
  $: slug = $page.params.slug;

  // Find the blog post that matches the slug
  $: post = blogPosts.find((post: BlogPost) => post.slug === slug);
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
