<template>
  <nav class="fixed lg:absolute w-full bg-gray-800 lg:bg-transparent">
    <div class="container flex flex-col mx-auto py-4 px-4 lg:flex-row">
      <div class="flex flex-auto flex-row lg:flex-initial lg:items-center">
        <div class="flex flex-auto items-center text-2xl">
          <span class="font-bold tracking-wider -mt-1 text-white">
            graphix
          </span>
        </div>
        <div class="flex flex-auto justify-end items-center lg:hidden">
          <burger @click=openNavbar :opened=opened />
        </div>
      </div>
      <div class="flex flex-auto mt-4 flex-col list-none lg:flex-row space-y-2 lg:space-y-0 lg:space-x-2 lg:justify-center lg:items-center lg:mt-0 font-medium text-gray-500" :class="{'hidden lg:flex': !opened}">
        <li class="cursor-pointer hover:text-gray-300 hover:bg-gray-700 lg:hover:bg-transparent px-2 py-1 rounded">
          home
        </li>
        <li class="cursor-pointer hover:text-gray-300 hover:bg-gray-700 px-2 py-1 rounded lg:hover:bg-transparent">
          services
        </li>
        <li class="cursor-pointer hover:text-gray-300 hover:bg-gray-700 px-2 py-1 rounded lg:hover:bg-transparent">
          technology
        </li>
        <li class="cursor-pointer hover:text-gray-300 hover:bg-gray-700 px-2 py-1 rounded lg:hover:bg-transparent">
          case studies
        </li>
        <li class="cursor-pointer hover:text-gray-300 hover:bg-gray-700 px-2 py-1 rounded lg:hover:bg-transparent">
          about
        </li>
      </div>
      <div class="flex flex-auto flex-col lg:mt-0 lg:items-center list-none mt-4 text-white lg:flex-initial lg:flex-row" :class="{'hidden lg:flex': !opened}">
        <li>
          <button class="bg-purple-400 rounded font-medium py-2 px-8 hover:bg-purple-500 transition-colors duration-200 lg:bg-transparent lg:hover:bg-transparent">
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