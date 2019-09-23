<template>
  <b-container class="padding-top">
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
        <input type="number" :value="card.itemToBuy" @input="updateArr(card, $event)" />
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
    stockArray: {
      get() {
        for (let i = 0; i < this.$store.getters.stockArray.length; i++) {
          console.log("Stocks", this.$store.getters.stockArray[i]);
        }
        return this.$store.getters.stockArray;
      },
      set(value) {}
    },
    myPortfolio() {
      return this.$store.getters.myPortfolio;
    }
  },
  methods: {
    buy(card) {
      let obj = {
        stock: card.itemsToBuy,
        price: card.price,
        name: card.name,
        img: card.img,
        index: card.index
      };
      if (card.itemsToBuy !== 0) {
        console.log(this.myPortfolio);
        this.$store.dispatch("addItem", obj).then(arg => {
          if (arg === false) {
            if (this.myPortfolio === null) this.makeToast("warning");
            else this.makeToast("danger");
          }

          if (arg === true) this.makeToast("success");
        });
      }
    },
    updateArr(card, b) {
      card.itemsToBuy = b.target.value;
      this.$store.dispatch("updateArr", card);
    },
    makeToast(variant = null) {
      let toast;
      if (variant === "success") toast = "You successfully buy the stock!";
      else if (variant === "danger") toast = "you dont have enough money!";
      else if (variant === "warning") toast = "please register or log in first";
      this.$bvToast.toast(toast, {
        title: ` ${variant || "default"}`,
        variant: variant,
        toaster: 'b-toaster-top-center',
        solid: true
      });
    }
  }
};
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
  padding-top: 50px;
}
</style>