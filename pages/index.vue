<template>
  <div>
    <Header />
    <Clients />
    <Technologies />
    <Informations />
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from '~/layouts/header.vue'
import Clients from '~/layouts/clients.vue'
import Technologies from '~/layouts/technologies.vue'
import Informations from '~/layouts/informations.vue'
import Footer from '~/layouts/footer.vue'

export default Vue.extend({
  components: {
    Header,
    Clients,
    Technologies,
    Informations,
    Footer
  },
  mounted: function () {
    this.$store.dispatch('apiFetching/fetchAPI')
  }
})
</script>
