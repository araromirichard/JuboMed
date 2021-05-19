/* eslint-disable prettier/prettier */
<template>
  <nav
    id="navbar"
    class="px-4 py-4 sm:py-6 bg-primary shadow sm:bg-primary sm:shadow-none sm:fixed top-0 w-full z-50"
  >
    <div
      class="container mx-auto flex flex-col sm:flex-row items-center justify-between"
    >
      <div class="w-full flex flex-row items-center justify-between">
        <div class="text-gray-700 logo">
          <router-link to="/">
            <img
              src="@/assets/whitelogo.png"
              class="object-contain max-h-16 sm:max-h-24 sm:inline"
            />
          </router-link>
        </div>
        <div class="text-white">
          <button v-show="!isVisible" class="sm:hidden" @click="toggle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-7 w-7"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
          <button v-show="isVisible" class="sm:hidden" @click="toggle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-7 w-7"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>

      <div
        class="mt-4 sm:mt-0 w-full sm:space-x-4 sm:block text-lg text-white"
        :class="{ hidden: !isVisible }"
      >
        <NavbarLinks to="/" label="Home" />
        <NavbarLinks to="/about-us" label="About" />
        <NavbarLinks to="/services" label="Services" />
        <NavbarLinks to="/fees" label="Fees" />
        <NavbarLinks to="/transactional-details" label="Transational Details" />
        <NavbarLinks to="/contact-us" label="Contact" />

        <Dropdown class="invisible sm:visible" />
      </div>

      <div class="sm:items-left text-right text-gray-500 flex justify-end">
        <Localisation />
      </div>
    </div>
  </nav>
</template>

<script>
import Dropdown from "@/components/includes/Dropdown";
import NavbarLinks from "@/components/layouts/NavbarLinks.vue";
import { useToggle } from "@/composables/useToggle";
import Localisation from "@/components/includes/Localisation";

export default {
  components: {
    Dropdown,
    NavbarLinks,
    Localisation,
  },

  props: {},

  setup() {
    let { isVisible, toggle } = useToggle();

    return {
      isVisible,
      toggle,
    };
  },
};
</script>

<style></style>
