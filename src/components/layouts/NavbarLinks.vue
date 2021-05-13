<template>
  <router-link
    class="block sm:inline-block sm:px-2 py-2 uppercase hover:text-secondary transition-colors duration-300"
    :to="to"
    >{{ label }}</router-link
  >
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
  },
};
</script>

<style></style>
