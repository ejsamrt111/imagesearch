<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import home from './components/home.vue'

export default {
  components: {
    'home' : home, 
  },
  data () {
    return {
      
    }
  }
}
</script>

<style>

</style>
