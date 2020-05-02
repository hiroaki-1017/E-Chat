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
      <div class="mail">
        <input type="text" placeholder="メールアドレス" v-model="email" />
      </div>
      <div class="pass">
        <input type="password" placeholder="パスワード" v-model="password" />
      </div>
      <div class="login">
        <button v-on:click="login">ログイン</button>
      </div>
      <p class="loginWith">You can also login with …</p>
      <div class="register">
        <button v-on:click="register">新規登録</button>
      </div>
      <div class="googleBotton">
        <button v-on:click="googleLogin" class="google">
          <img src="~/assets/google.png" class="img-fluid" width="75%" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "~/plugins/firebase";
import { mapActions, mapState, mapGetters } from "vuex";
import workcategory from "@/components/workcategory.vue";

export default {
  
  fetch ({store}) {
    store.commit('resetMenu')
  },

  components: {
    workcategory,
  },
  data() {
    return {
      email: "",
      password: ""
    };
  },
  computed: {
    ...mapState(["user"]),
    ...mapGetters(["isAuthenticated"])
  },
  mounted() {
    firebase.auth().onAuthStateChanged(user => {
      this.setUser(user);
    });
  },
  methods: {
    ...mapActions(["setUser"]),
    googleLogin: function() {
      firebase
        .auth()
        .signInWithRedirect(new firebase.auth.GoogleAuthProvider());
    },
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(user => {
          // ログインしたら飛ぶページを指定
          // this.$router.push("/member-page")
        })
        .catch(error => {
          alert(error);
        });
    },
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.setUser(null);
        })
        .catch(error => {
          alert(error);
        });
    },
    register() {
      var mailAddress = document.getElementById("mailAddress").value;
      var password = document.getElementById("password").value;

      firebase
        .auth()
        .createUserWithEmailAndPassword(mailAddress, password)
        .catch(function(error) {
          alert("登録できません（" + error.message + "）");
        });
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