<template>
  <div>
    <Header />
    <Clients />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from '~/layouts/header.vue'
import Clients from '~/layouts/clients.vue'

export default Vue.extend({
  components: {
    Header,
    Clients
  }
})
</script>
