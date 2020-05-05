<template>
  <div id="app">
    <router-link to='/'></router-link>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  },
  data() {
    return {
      
    }
  },
}
</script>

<style>
body{
  margin: 0;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

</style>
