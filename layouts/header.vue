<template>
  <div class="min-h-screen bg-gradient-to-tr from-gray-800 to-gray-900 flex flex-col">
    <navbar />
    <div class="min-h-screen flex flex-row w-full">
      <div class="flex flex-auto w-1/2 flex-col items-center justify-center">
        <div class="container mx-auto text-center lg:text-left">
          <h1 class="text-3xl font-semibold text-white w-1/2 mx-auto">
            We build strong and reliable software solutions
          </h1>
          <p class="text-gray-400 text-sm my-4 w-1/2 mx-auto">
            We strongly believe that communication, trust and transparency are the essential elements of successful business relationship. Ready for the journey?
          </p>
          <div class="container space-x-4 mt-8 flex flex-row justify-center w-1/2 mx-auto lg:justify-start">
            <button class="border border-gray-500 rounded py-2 px-8 text-gray-500 hover:border-white hover:text-white transition-colors duration-200 flex flex-row">
              Learn more
            </button>
            <button class="border font-medium border-purple-400 rounded py-2 px-6 text-white bg-purple-400 transition-colors duration-200 flex flex-row group">
              <span class="flex flex-auto items-center">
                Our Projects
              </span>
              <span class="flex flex-initial items-center ml-2 group-hover:ml-4 transition-all duration-200">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z" fill="currentColor" /></svg>
              </span>
            </button>
          </div>
        </div>
      </div>
      <div class="hidden flex-auto w-1/2 lg:flex">
        <img src="~/assets/background.png" class="w-full object-cover" alt="">
      </div>
    </div>
    <solutions />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Navbar from '~/components/navbar.vue'
import Solutions from '~/layouts/solutions.vue'

export default Vue.extend({
  components: {
    Navbar,
    Solutions
  }
})
</script>