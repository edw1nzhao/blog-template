<script>
  // You can add your data or imports here
</script>

<div class="hero min-h-screen bg-base-200">
  <div class="hero-content text-center">
    <div class="max-w-md">
      <h1 class="text-5xl font-bold">Welcome to My Site</h1>
      <p class="py-6">This is a personal website template. You can customize this content with your own information.</p>
      <div class="flex justify-center gap-4">
        <a href="/about" class="btn btn-primary">About Me</a>
        <a href="/blog" class="btn btn-secondary">Read My Blog</a>
      </div>
    </div>
  </div>
</div>

<div class="divider my-8">Featured Content</div>

<div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
  <div class="card bg-base-100 shadow-xl">
    <figure><img src="https://placehold.co/600x400" alt="Placeholder" /></figure>
    <div class="card-body">
      <h2 class="card-title">Project 1</h2>
      <p>You can showcase your projects or work here.</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary">Learn More</button>
      </div>
    </div>
  </div>

  <div class="card bg-base-100 shadow-xl">
    <figure><img src="https://placehold.co/600x400" alt="Placeholder" /></figure>
    <div class="card-body">
      <h2 class="card-title">Project 2</h2>
      <p>Add details about your experience and skills.</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary">Learn More</button>
      </div>
    </div>
  </div>

  <div class="card bg-base-100 shadow-xl">
    <figure><img src="https://placehold.co/600x400" alt="Placeholder" /></figure>
    <div class="card-body">
      <h2 class="card-title">Project 3</h2>
      <p>Share your achievements and accomplishments.</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary">Learn More</button>
      </div>
    </div>
  </div>
</div>

<style lang="postcss">
  @reference "tailwindcss";
  :global(html) {
    background-color: theme(--color-gray-100);
  }
</style>
