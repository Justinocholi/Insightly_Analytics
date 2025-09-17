<template>
  <div id="app">
    <AppHeader />
    <div class="dashboard-layout">
      <AppSidebar />
      <main>
      <router-view />
      </main>
    </div>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import AppSidebar from './components/AppSidebar.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppSidebar,
    AppFooter
  }
}
</script>
