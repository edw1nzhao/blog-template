<script lang="ts">
  import { blogPosts, type BlogPost } from './posts/index';

  // Filter and search functionality
  let searchQuery = "";
  let selectedCategory = "All";

  $: filteredPosts = blogPosts.filter((post: BlogPost) => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Get unique categories
  $: categories = ["All", ...new Set(blogPosts.map((post: BlogPost) => post.category))];
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
              {#each [...new Set(blogPosts.flatMap((post: BlogPost) => post.tags))] as tag}
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
