<template>
  <InnerPageHero imageUrl="/images/meeting.jpg" title="Contact Us" />

  <div class="container mx-auto py-8 sm:py-12 px-4 sm:px-0 text-xl font-medium">
    <div class="grid sm:grid-cols-3 sm:gap-4">
      <div><span class="text-gray-500"> Address: </span>Lorem ipsum.</div>
      <div><span class="text-gray-500"> Phone: </span>+234567789</div>
      <div><span class="text-gray-500"> Email: </span>mediation@test.com</div>
    </div>

    <div class="mt-8 sm:mt-16 grid sm:grid-cols-2 gap-8 sm:gap-12">
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253722.28580326386!2d3.480325106047301!3d6.469544001251263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x99bbd09613c265b3!2sChurch%20of%20God%20Mission%20(CGMi)%20LIVINGSPRINGS!5e0!3m2!1sen!2sng!4v1621424013446!5m2!1sen!2sng"
          class="w-full"
          height="450"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
      <form class="p-6 bg-gray-300 shadow rounded space-y-4" action="">
        <div>
          <input
            type="text"
            placeholder="Enter Your Name"
            class="px-4 py-2 w-full rounded bg-gray-100 border focus:border-info focus:outline-none"
            required
          />
          <!-- <span class="text-red-600 text-sm">The error message</span> -->
        </div>
        <div>
          <input
            type="email"
            placeholder="Enter Your Email"
            class="px-4 py-2 w-full rounded bg-gray-100 border focus:border-info focus:outline-none"
            required
          />
          <!-- <span class="text-red-600 text-sm">The error message</span> -->
        </div>
        <div>
          <input
            type="phone"
            placeholder="Enter Your Phone Number"
            class="px-4 py-2 w-full rounded bg-gray-100 border focus:border-info focus:outline-none"
            required
          />
          <!-- <span class="text-red-600 text-sm">The error message</span> -->
        </div>
        <div>
          <textarea
            placeholder="Enter Message"
            class="px-4 py-2 w-full rounded bg-gray-100 border focus:border-info focus:outline-none"
            rows="5"
            required
          >
          </textarea>
          <!-- <span class="text-red-600 text-sm">The error message</span> -->
        </div>

        <!-- <div class="px-4 py-2 bg-red-700 text-white rounded">
          Lorem ipsum dolor sit amet.
        </div> -->
        <!-- <div class="px-4 py-2 bg-success text-white rounded">
          Lorem ipsum dolor sit amet.
        </div> -->

        <button
          class="px-4 py-2 sm:px-6 rounded bg-red-700 text-white focus:outline-none"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import InnerPageHero from "@/components/includes/InnerPageHero.vue";

export default {
  components: {
    InnerPageHero,
  },
};
</script>

<style></style>
