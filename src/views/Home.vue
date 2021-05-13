<template>
  <div class="relative">
    <Hero />
    <Cards />
  </div>
</template>

<script>
import Hero from "@/views/Hero";
import Cards from "@/components/includes/Cards.vue";

export default {
  name: "Home",

  components: {
    Hero,
    Cards,
  },
};
</script>
