<template>
    <div>
        <navigateion-bar></navigateion-bar>
        <transition name="slide">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
import NavigateionBar from './components/NavigationBar.vue'
    export default {
        components: {
            NavigateionBar
        },
        beforeCreate(){
           this.$store.dispatch("LoadDB");
          this.$store.dispatch('loadStockDB');
          console.log(this.$store.getters.slidesList)
        },
    }
</script>

<style scoped>
.slide-enter {
}
.slide-enter-active {
  animation: slide-in 0.5s ease-out forwards;

  /*to mix transition and animation transition: 1s; */
}

.slide-move {
    transition: transform 0.5s;
    
}
@keyframes slide-in {
  from {
    transform: translateY(20px);
  }
  to {
    transform: translateY(0);
  }
}
@keyframes slide-out {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(20px);
  }
}
</style>
