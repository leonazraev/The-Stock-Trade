<template>
<div>
  <b-container class="padding-top" v-if="show">
    <h1 class="center">Registeration</h1>
    <hr />
    <b-form @submit="onSubmit" @reset="onReset">
      <b-form-group id="firstname" label="First name:" label-for="firstname">
        <b-form-input
          id="firstname"
          v-model="userData.FirstName"
          required
          placeholder="Enter first name"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="lastname" label="Last name:" label-for="lastname">
        <b-form-input
          id="lastname"
          v-model="userData.LastName"
          required
          placeholder="Enter last name"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="funds" label="Funds:" label-for="funds" description="The funds are in USD">
        <b-form-input
          id="funds"
          v-model="userData.portfolio.funds"
          type="number"
          required
          placeholder="How many funds do you want to buy?"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="email"
        label="Email:"
        label-for="email"
        description="We'll never share your email with anyone else."
      >
        <b-form-input id="email" v-model="userData.email" type="email" required placeholder="Email"></b-form-input>
      </b-form-group>
      <b-form-group id="password" label="Password:" label-for="password">
        <b-form-input
          id="password"
          v-model="userData.password"
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
      userData: {
        email: "",
        password: "",
        FirstName: "",
        LastName: "",
        portfolio: {
          myStock: {
          },
          funds: null
        }
      },
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      this.$http
        .post(
          "Users.json",
          JSON.stringify(this.userData)
        )
        .then(
          Response => {
            console.log(Response);
            this.$router.push('Login')

          },
          error => {
            console.log(error);
          }
        );
    },
    onReset(evt) {
      evt.preventDefault();
      this.userData.email = "";
      this.userData.password = "";
      this.userData.FirstName = "";
      this.userData.LastName = "";
      this.userData.portfolio.funds = null;
    }
  },
  computed: {
    btnColor() {
      if (
        this.userData.email === "" ||
        this.userData.password === "" ||
        this.userData.FirstName === "" ||
        this.userData.LastName === "" ||
        this.userData.portfolio.funds === null ||
        this.userData.portfolio.funds === ''
      )
        return "danger";
      else return "success";
    },
    show(){
      console.log(this.$store.getters.show)
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