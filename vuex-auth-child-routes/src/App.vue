<template>
  <div id="app">
    <loading :active.sync="loading"></loading>
    <b-container>
      <navigation-logged v-if="isLogged" />
      <navigation-guest v-else />
      <router-view/>
    </b-container>
  </div>
</template>

<script>
import NavigationLogged from '@/components/navigations/Logged'
import NavigationGuest from '@/components/navigations/Guest'
import { mapState } from 'vuex'
// El loader se puede importar como componente o como plugin
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'

export default {
  components: {
    NavigationLogged,
    NavigationGuest,
    Loading
  },
  computed: {
    ...mapState('authModule', ['isLogged']),
    ...mapState(['loading'])
  }
}
</script>
