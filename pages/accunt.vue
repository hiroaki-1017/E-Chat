<template>
  <div>
    <!-- ログイン中に表示される画面 -->
    <div v-if="isAuthenticated">
      <button v-on:click="logout">ログアウト</button>
      <br />
      <div class="container">
        <div class="userName">
          <p>りりあ</p>
        </div>
        <div class="profileIcon row">
          <img src="~/assets/riria.png" class="col-4 profileImg img-fluid" width="80" />
          <nuxt-link to="/accuntchange" class="col-7 col-offset-1">
            <div class="profileEdit">
              <p>プロフィールを編集</p>
            </div>
          </nuxt-link>
        </div>
        <div class="profileText">
          <p>新米消防士です。何かと教えていただきたいです</p>
        </div>
        <div class="koukoku"></div>
      </div>
    </div>
    <!-- ログインしていない時に表示される画面 -->
    <div v-else>
      <p>ログインしてください</p>
    </div>
  </div>
</template>

<script>
import firebase from "~/plugins/firebase";
import { mapActions, mapState, mapGetters } from "vuex";
export default {
  fetch({ store }) {
    store.commit("resetMenu");
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
    }
  }
};
</script>

<style>
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

.userName {
  font-size: 1.4rem;
  text-align: center;
  font-weight: 600;
}

.profileIcon {
  align-items: center;
  margin-top: 18px;
}

.profileEdit {
  border: solid 1px #999999;
  border-radius: 7px;
  height: 35px;
}

.profileEdit p {
  font-size: 0.8rem;
  font-weight: 550;
  text-align: center;
  margin-top: 6px;
  color: #999999;
}

.profileText {
  margin-top: 20px;
  text-align: center;
}

.profileText p {
  font-size: 0.8rem;
  font-weight: 550;
}

.koukoku {
  background-color: #999999;
  height: 160px;
  width: 100%;
  margin-top: 70px;
}
</style>