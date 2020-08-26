<template>
  <nav class="fixed xl:absolute w-full bg-gray-800 xl:bg-transparent xl:py-8 z-50">
    <div class="container flex flex-col mx-auto py-4 px-4 xl:flex-row">
      <div class="flex flex-auto flex-row xl:flex-initial xl:items-center">
        <div class="flex flex-auto items-center text-2xl">
          <span class="font-bold tracking-wider -mt-1 text-white">
            graphix
          </span>
        </div>
        <div class="flex flex-auto justify-end items-center xl:hidden">
          <burger @click=openNavbar :opened=opened />
        </div>
      </div>
      <div class="flex flex-auto mt-4 flex-col list-none xl:flex-row space-y-2 xl:space-y-0 xl:space-x-2 xl:justify-center xl:items-center xl:mt-0 font-medium text-gray-500 text-center" :class="{'hidden xl:flex': !opened}">
        <li class="cursor-pointer hover:text-gray-300 hover:bg-gray-700 xl:hover:bg-transparent px-2 py-1 rounded">
          accueil
        </li>
        <li class="cursor-pointer hover:text-gray-300 hover:bg-gray-700 px-2 py-1 rounded xl:hover:bg-transparent">
          équipe
        </li>
      </div>
      <div class="flex flex-auto flex-col xl:mt-0 xl:items-center list-none mt-4 text-white xl:flex-initial xl:flex-row text-center" :class="{'hidden xl:flex': !opened}">
        <li>
          <button class="bg-purple-400 rounded font-medium py-2 px-8 hover:bg-purple-500 transition-colors duration-200 xl:bg-transparent xl:hover:bg-transparent">
            <a href="https://discord.com/api/oauth2/authorize?client_id=745616349014786109&permissions=2081422583&scope=bot">
              inviter le bot
            </a>
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