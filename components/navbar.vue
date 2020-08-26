<template>
  <nav class="fixed w-full bg-gray-800">
    <div class="container flex flex-col mx-auto py-4 px-4">
      <div class="flex flex-auto flex-row">
        <div class="flex flex-auto items-center text-2xl">
          <span class="font-bold tracking-wider -mt-1 text-white">
            graphix
          </span>
        </div>
        <div class="flex flex-auto justify-end items-center">
          <burger @click=openNavbar :opened=opened />
        </div>
      </div>
      <div class="flex flex-auto mt-4 flex-col list-none space-y-2 font-medium text-gray-500" :class="{'hidden': !opened}">
        <li class="cursor-pointer hover:text-gray-300 hover:bg-gray-700 px-2 py-1 rounded">
          home
        </li>
        <li class="cursor-pointer hover:text-gray-300 hover:bg-gray-700 px-2 py-1 rounded">
          services
        </li>
        <li class="cursor-pointer hover:text-gray-300 hover:bg-gray-700 px-2 py-1 rounded">
          technology
        </li>
        <li class="cursor-pointer hover:text-gray-300 hover:bg-gray-700 px-2 py-1 rounded">
          case studies
        </li>
        <li class="cursor-pointer hover:text-gray-300 hover:bg-gray-700 px-2 py-1 rounded">
          about
        </li>
      </div>
      <div class="flex flex-auto flex-col list-none mt-4 text-white" :class="{'hidden': !opened}">
        <li>
          <button class="bg-purple-400 rounded font-medium py-2 px-8 hover:bg-purple-500 transition-colors duration-200">
            hire us
          </button>
        </li>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'
import Burger from '~/components/burger.vue'

export default Vue.extend({
  components: {
    Burger
  },
  data: () => ({
    opened: false
  }),
  methods: {
    openNavbar: function (): void {
      this.opened = !this.opened
    }
  }
})
</script>