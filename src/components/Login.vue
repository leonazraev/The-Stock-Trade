<template >
  <div>
    <b-container class="padding-top" v-if="show">
      <h1 class="center">Login</h1>
      <hr />
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group id="email" label="Email:" label-for="email">
          <b-form-input id="email" v-model="user.email" type="email" required placeholder="Email"></b-form-input>
        </b-form-group>
        <b-form-group id="password" label="Password:" label-for="password">
          <b-form-input
            id="password"
            v-model="user.password"
            type="password"
            required
            placeholder="Password"
          ></b-form-input>
        </b-form-group>
        <b-button type="submit" :variant="btnColor">Submit</b-button>
        <b-button type="reset" variant="outline-primary">Reset</b-button>
      </b-form>
    </b-container>
    <b-container class="padding-top" v-else>
      <h1 class="center">You already login!</h1>
    </b-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      if (this.user.email !== "" && this.user.password !== "")
        this.$store.dispatch("getUserFromDB", this.user);
    },
    onReset(evt) {
      evt.preventDefault();
      this.user.password = "";
      this.user.email = "";
    }
  },
  computed: {
    btnColor() {
      if (this.user.email === "" || this.user.password === "") return "danger";
      else return "success";
    },
    show() {
      return this.$store.getters.show;
    }
  }
};
</script>
<style scoped>
.padding-top {
  padding-top: 50px;
}
.center {
  align-items: center;
  text-align: center;
}
</style>