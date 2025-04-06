<script>
  // You can add your data or imports here
  let formData = {
    name: "",
    email: "",
    subject: "",
    message: ""
  };

  let formSubmitted = false;
  let formError = false;

  function handleSubmit() {
    // This is a placeholder for form submission logic
    // In a real application, you would send this data to a server

    if (formData.name && formData.email && formData.message) {
      formSubmitted = true;
      formError = false;

      // Reset form after submission
      setTimeout(() => {
        formData = {
          name: "",
          email: "",
          subject: "",
          message: ""
        };
        formSubmitted = false;
      }, 3000);
    } else {
      formError = true;
    }
  }
</script>

<div class="prose max-w-none">
  <h1 class="text-4xl font-bold mb-6">Contact Me</h1>

  <div class="flex flex-col md:flex-row gap-8">
    <div class="md:w-1/2">
      <p class="text-xl mb-6">
        I'd love to hear from you! Whether you have a question, a project idea, or just want to say hello,
        feel free to reach out using the contact form or through any of the methods listed below.
      </p>

      {#if formSubmitted}
        <div class="alert alert-success mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Your message has been sent successfully! I'll get back to you soon.</span>
        </div>
      {/if}

      {#if formError}
        <div class="alert alert-error mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Please fill out all required fields (name, email, and message).</span>
        </div>
      {/if}

      <form on:submit|preventDefault={handleSubmit} class="mb-8">
        <div class="form-control mb-4">
          <label class="label">
            <span class="label-text">Name *</span>
          </label>
          <input
            type="text"
            placeholder="Your name"
            class="input input-bordered w-full"
            bind:value={formData.name}
            required
          />
        </div>

        <div class="form-control mb-4">
          <label class="label">
            <span class="label-text">Email *</span>
          </label>
          <input
            type="email"
            placeholder="Your email"
            class="input input-bordered w-full"
            bind:value={formData.email}
            required
          />
        </div>

        <div class="form-control mb-4">
          <label class="label">
            <span class="label-text">Subject</span>
          </label>
          <input
            type="text"
            placeholder="Subject"
            class="input input-bordered w-full"
            bind:value={formData.subject}
          />
        </div>

        <div class="form-control mb-6">
          <label class="label">
            <span class="label-text">Message *</span>
          </label>
          <textarea
            class="textarea textarea-bordered h-32"
            placeholder="Your message"
            bind:value={formData.message}
            required
          ></textarea>
        </div>

        <button type="submit" class="btn btn-primary">Send Message</button>
      </form>
    </div>

    <div class="md:w-1/2">
      <div class="card bg-base-200 mb-6">
        <div class="card-body">
          <h2 class="card-title text-2xl mb-4">Contact Information</h2>

          <div class="flex items-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>your.email@example.com</span>
          </div>

          <div class="flex items-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>+1 (123) 456-7890</span>
          </div>

          <div class="flex items-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>City, Country</span>
          </div>

          <h3 class="font-semibold text-lg mb-3">Connect with me:</h3>
          <div class="flex gap-4">
            <a href="#" class="btn btn-circle btn-outline">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a href="#" class="btn btn-circle btn-outline">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a href="#" class="btn btn-circle btn-outline">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
            <a href="#" class="btn btn-circle btn-outline">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
              </svg>
            </a>
            <a href="#" class="btn btn-circle btn-outline">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current">
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div class="card bg-base-200">
        <div class="card-body">
          <h2 class="card-title text-2xl mb-4">Office Hours</h2>
          <div class="overflow-x-auto">
            <table class="table">
              <tbody>
                <tr>
                  <td>Monday - Friday</td>
                  <td>9:00 AM - 5:00 PM</td>
                </tr>
                <tr>
                  <td>Saturday</td>
                  <td>10:00 AM - 2:00 PM</td>
                </tr>
                <tr>
                  <td>Sunday</td>
                  <td>Closed</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p class="mt-4 text-sm">All times are in [Your Time Zone]</p>
        </div>
      </div>
    </div>
  </div>
</div>
