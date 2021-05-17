<template>
  <div class="flex flex-col min-h-screen">
    <Navbar />
    <div class="flex-1">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";

export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style></style>
