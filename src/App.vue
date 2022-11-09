<template>
  <div class="flex justify-center my-2">
    <div class="flex gap-4 font-bold">
      <RouterLink to="/" class="bg-gray-300 px-4 py-1 rounded-md">Home</RouterLink> |
      <RouterLink :to="{name: 'About'}" class="bg-gray-300 px-4 py-1 rounded-md">About</RouterLink> | 
      <RouterLink :to="{name: 'Jobs'}" class="bg-gray-300 px-4 py-1 rounded-md">Jobs</RouterLink>
    </div>
  </div>
  <RouterView/>
  <Footer/>
</template>

<script>
import Footer from "./components/Footer.vue"
import jobs from "./views/jobs.vue"
export default {
  name: "App",
  components: {Footer, jobs}
}

</script>