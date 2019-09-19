<template>
    <b-container>
      <br />
      
        <b-card-group deck class="text-center">
          <b-card
            v-for="(card,index) in stockArray"
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
            <input type="number" v-model="card.itemsToBuy" />
            <br />
            <hr />
            <b-button variant="success" @click="buy(card)">Buy</b-button>
          </b-card>
        </b-card-group>
      
    </b-container>
</template>
<script>
export default {
  data() {
    return {};
  },
  computed: {
    fourItemsInarr() {
      return this.stockArray.reduce((c, n, i) => {
        if (i % this.stockArray.length === 0) c.push([]);
        c[c.length - 1].push(n);
        return c;
      }, []);
    },
    stockArray: {
      get() {
        return this.$store.getters.stockArray;
      },
      set(value) {}
    }
  },
  methods: {
    buy(card) {
      if (card.itemsToBuy !== 0) {
      }
    }
  },
  beforeCreate() {}
};
</script>
<style scoped>
.b-card-group .b-card {
  max-width: 25%;
}
.card-deck .card {
  max-width: calc(25% - 30px);
}
@media (min-width:20em) {
    .card-deck > .card
    {
        width: 25%;
        flex-wrap: wrap;
        flex: initial; 
        margin: 10px
    }
}

</style>