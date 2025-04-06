export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  image: string;
  tags: string[];
  featured?: boolean;
}

// This file exports an array of blog posts
export const blogPosts: BlogPost[] = [
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
  },
  {
    id: 3,
    slug: "responsive-design-principles",
    title: "Responsive Design Principles",
    excerpt: "Discover the key principles of responsive design to create websites that work on any device.",
    content: `
      <p>Responsive design is an approach to web design that makes your web pages look good on all devices. In this post, we'll explore the key principles of responsive design.</p>

      <h2>Fluid Grids</h2>
      <p>Instead of using fixed-width layouts, responsive design uses relative units like percentages to create fluid grids that can adapt to different screen sizes.</p>

      <pre><code>.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.column {
  width: 33.33%;
  float: left;
  padding: 0 15px;
}</code></pre>

      <h2>Flexible Images</h2>
      <p>Images should also be flexible to ensure they don't overflow their containers on smaller screens.</p>

      <pre><code>img {
  max-width: 100%;
  height: auto;
}</code></pre>

      <h2>Media Queries</h2>
      <p>Media queries allow you to apply different styles based on the device characteristics, such as screen width, height, or orientation.</p>

      <pre><code>/* Styles for screens smaller than 768px */
@media (max-width: 768px) {
  .column {
    width: 100%;
    float: none;
  }
}</code></pre>

      <h2>Mobile-First Approach</h2>
      <p>Start designing for mobile devices first, then progressively enhance the design for larger screens. This ensures your website works well on all devices.</p>

      <pre><code>/* Base styles for mobile */
.element {
  font-size: 16px;
  padding: 10px;
}

/* Enhanced styles for larger screens */
@media (min-width: 768px) {
  .element {
    font-size: 18px;
    padding: 20px;
  }
}</code></pre>

      <p>By following these principles, you can create websites that provide an optimal viewing experience across a wide range of devices, from mobile phones to desktop computers.</p>
    `,
    date: "February 28, 2025",
    category: "Design",
    image: "https://placehold.co/800x450",
    tags: ["Responsive", "Design", "CSS"]
  }
];
