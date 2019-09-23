<template>
   <b-container class="padding-top">
    <br />

    <b-card-group deck class="text-center">
      <b-card
        v-for="(card,index) in currentArr"
        :key="index"
        :title="card.name"
        :img-src="card.img"
        img-alt="Image"
        img-top
        tag="article"
      >
        <b-card-text>
          Price: {{card.price}}
          <br />
          Quantity: {{card.stock}}
        </b-card-text>
        <br />
        <hr />
        <b-button variant="danger" @click="sell(card)">Sell</b-button>
      </b-card>
    </b-card-group>
  </b-container>
</template>
<script>
export default {
    computed: {
        currentArr: {
            get(){
                return this.$store.getters.mystockArray;
            }
        }
    },
    methods: {
        sell(arg) {
            this.$store.dispatch('sellItem',arg);
            //console.log('this.$store.getters.mystockArray',this.$store.getters.mystockArray);
            //console.log('this.currentArr',this.currentArr)
        }
    }
}
</script>
<style scoped>
.b-card-group .b-card {
  max-width: 25%;
}
.card-deck .card {
  max-width: calc(25% - 30px);
}
@media (min-width: 20em) {
  .card-deck > .card {
    width: 25%;
    flex-wrap: wrap;
    flex: initial;
    margin: 10px;
  }
}
.padding-top {
  padding-top: 50px;;
}
</style>