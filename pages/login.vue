<template>
  <div>
    <!-- ログイン中に表示される画面 -->
    <div v-if="isAuthenticated">
      <br />
      <workcategory />
    </div>
    <!-- ログインしていない時に表示される画面 -->
    <div class="userInfo" v-else>
      <img class="mainlogo" src="~/assets/logo.png" />
      <br />
      <form class="googleBotton" @submit.prevent="onSubmit">
        <button type="submit" v-on:click="googleLogin" class="google">
          <img src="~/assets/google.png" class="img-fluid" width="75%" />
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import firebase from "~/plugins/firebase";
import { mapActions, mapState, mapGetters } from "vuex";
import workcategory from "@/components/workcategory.vue";

export default {

  components: {
    workcategory,
  },
  methods: {
    onSubmit() {
      const provider = new this.$firebase.auth.GoogleAuthProvider()
      this.$fireAuth.signInWithRedirect(provider)
    }
  }
};
</script>
<style scoped>
@media screen and (max-width: 720px) {
  .mainlogo {
    height: 50px;
    margin: 30px 0px 90px 0px;
  }

  button {
    display: block;
    color: #ffff;
    background-color: #00cdff;
    padding: 5px 70px;
    border-radius: 7px;
    outline: 0;
    border: none;
    margin: auto;
  }

  .google {
    background-color: #FFFF;
  }

  input {
    text-align: left;
    padding: 3px 25px;
    border-radius: 7px;
    border: solid 0.7px #b8b8b8;
  }

  .userInfo {
    text-align: center;
  }

  .loginWith {
    margin-bottom: 40px;
  }

  .login,.register,.googleBotton {
    margin-bottom: 25px;
  }

  .mail {
    margin-bottom: 20px;
  }

  .pass {
    margin-bottom: 50px;
  }

  .loginTitle {
    margin-top: 30px;
    margin-bottom: 50px;
    text-align: center;
    font-weight: 700;
    color: #00cdff;
    font-size: 22px;
  }
}

.mainlogo {
    height: 50px;
    margin: 30px 0px 90px 0px;
  }

  button {
    display: block;
    color: #ffff;
    background-color: #00cdff;
    padding: 5px 70px;
    border-radius: 7px;
    outline: 0;
    border: none;
    margin: auto;
  }

  .google {
    background-color: #FFFF;
  }

  input {
    text-align: left;
    padding: 3px 25px;
    border-radius: 7px;
    border: solid 0.7px #b8b8b8;
  }

  .userInfo {
    text-align: center;
  }

  .loginWith {
    margin-bottom: 40px;
  }

  .login,.register,.googleBotton {
    margin-bottom: 25px;
  }

  .mail {
    margin-bottom: 20px;
  }

  .pass {
    margin-bottom: 50px;
  }

  .loginTitle {
    margin-top: 30px;
    margin-bottom: 50px;
    text-align: center;
    font-weight: 700;
    color: #00cdff;
    font-size: 22px;
  }
</style>
