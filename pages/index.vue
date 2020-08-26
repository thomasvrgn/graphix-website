<template>
  <div>
    <Header />
    <Clients />
    <Technologies />
    <Informations />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from '~/layouts/header.vue'
import Clients from '~/layouts/clients.vue'
import Technologies from '~/layouts/technologies.vue'
import Informations from '~/layouts/informations.vue'

export default Vue.extend({
  components: {
    Header,
    Clients,
    Technologies,
    Informations
  }
})
</script>
