<template>
<div >
  <b-navbar toggleable="lg" type="dark" variant="info" class="navbar fixed-top navbar-light">
    <b-navbar-brand href="/#/" @click="changeFixedTop">Stock Trader</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="/#/Register" @click="changeClassFixedEmpty">Registration</b-nav-item>
        <b-nav-item href="/#/Login" @click="changeClassFixedEmpty">Login</b-nav-item>
        <b-nav-item href="/#/Portfolio" @click="changeClassFixedEmpty">Portfolio</b-nav-item>
        <b-nav-item href="/#/Stocks" @click="changeClassFixedEmpty">Stocks</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item @click="updatePrice">End day</b-nav-item>
          <b-nav-item-dropdown text="Save & Load" >
          <b-dropdown-item href="saveData">Save</b-dropdown-item>
          <b-dropdown-item href="loadData">Load</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item disabled link-classes="text-dark">Funds: {{funds}}</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>
<script>
import * as numeral from 'numeral'
export default {
  data(){
    return {
      fixedClass: "navbar fixed-top navbar-light",
      emptyClass: "",
      swithcClass: "navbar fixed-top navbar-light"
      
    }
  },
  methods:{
    updatePrice(){
      this.$store.dispatch('updatePrice','EndDay')
    },
    changeFixedTop(){
      this.swithcClass = this.fixedClass;
    },
    changeClassFixedEmpty(){
      this.swithcClass = this.emptyClass;
    },
    saveData(){
      
    },
    loadData(){

    }
  },
  computed: {
      funds: {
        get(){
          return numeral(this.$store.getters.funds).format('0,0') + ' $';
        }
      },
      compfixedClass(){
        console.log(this.swithcClass)
        return this.swithcClass;
      }
  }
}
</script>
<style scoped>

</style>