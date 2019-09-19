<template>
<div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="/">Stock Trader</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="/Portfolio">Portfolio</b-nav-item>
        <b-nav-item href="/Stocks" >Stocks</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item @click="updatePrice">End day</b-nav-item>
          <b-nav-item-dropdown text="Save & Load" >
          <b-dropdown-item href="#">Save</b-dropdown-item>
          <b-dropdown-item href="#">Load</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item disabled >Funds: {{funds}}</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>
<script>
import * as numeral from 'numeral'
export default {
  methods:{
    updatePrice(){
      this.$store.dispatch('updatePrice','EndDay')
    },
  },
  computed: {
      funds: {
        get(){
          return numeral(this.$store.getters.funds).format('0,0') + ' $';
        }
      }
  }
}
</script>
<style scoped>

</style>