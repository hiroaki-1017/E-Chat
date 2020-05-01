<template>
  <div>
    <!-- ログイン中に表示される画面 -->
    <div v-if="isAuthenticated">
      <button v-on:click="logout">ログアウト</button>
      <br />
      <div class="container">
        <!-- 名前変更 -->
        <div class="edituser row">
          <div class="userNameEdit col-3">
            <p>名前</p>
          </div>
          <div class="nameEdit col-9"></div>
        </div>
        <div class="profileIcon row">
          <img src="~/assets/riria.png" class="col-4 profileImg img-fluid" width="80" />
          <div class="profileImgEdit col-7 col-offset-1">
            <p>プロフィール写真を更新</p>
          </div>
        </div>
        <div class="row">
          <div class="textEdit col-5 col-offset-7">
            <p>紹介テキスト</p>
          </div>
        </div>
        <div class="profileTextEdit"></div>

        <div class="change">
          <nuxt-link to="/accunt">
            <div class="changeBottun">
              <p>更新</p>
            </div>
          </nuxt-link>
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

.edituser {
  align-items: center;
}

.userNameEdit {
  font-size: 0.9rem;
  font-weight: 550;
  color: #999999;
}

.nameEdit {
  width: 85%;
  height: 25px;
  border-radius: 6px;
  border: solid 0.8px #999999;
}

.profileIcon {
  align-items: center;
  margin-top: 18px;
}

.profileImgEdit {
  height: 35px;
}

.profileImgEdit p {
  font-size: 0.8rem;
  font-weight: 550;
  text-align: center;
  margin-top: 6px;
  color: #999999;
}

.textEdit p {
  font-size: 0.9rem;
  font-weight: 550;
  color: #999999;
}

.profileTextEdit {
  margin-top: 20px;
  margin: auto;
  width: 90%;
  height: 90px;
  border-radius: 6px;
  border: solid 0.8px #999999;
}

.change {
  margin-top: 50px;
}

.changeBottun {
  background: #00cdff;
  width: 30%;
  margin: auto;
  border-radius: 6px;
  padding: 3px 0 3px 0;
}

.change p {
  text-align: center;
  font-size: 1.1rem;
  font-weight: 550;
  color: #ffff;
}

.koukoku {
  background-color: #999999;
  height: 160px;
  width: 100%;
  margin-top: 70px;
}
</style>