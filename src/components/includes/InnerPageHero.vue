<template>
  <div class="relative sm:pt-32 z-0 sm:h-96">
    <img class="h-full w-full object-cover" :src="imageUrl" />
    <div class="absolute inset-0 bg-black opacity-50"></div>
    <div
      class="absolute inset-0 bg-gradient-to-t from-red-300 opacity-50"
    ></div>
    <div class="absolute inset-0">
      <div
        class="container mx-auto px-4 sm:px-0 text-white h-full w-full flex flex-col items-center justify-center sm:justify-end text-2xl sm:text-5xl"
      >
        <div class="mb-4 sm:mb-8 text-center">{{ title }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imageUrl: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style></style>
