<template>
  <div>
    <!-- ログイン中に表示される画面 -->
    <div v-if="isAuthenticated">
      {{ user.email }}でログイン中です<br>
      <button v-on:click="logout">ログアウト</button><br>
      <a href="/category">カテゴリーページへ</a>
    </div>
    <!-- ログインしていない時に表示される画面 -->
    <div v-else>
      <h1>ワークトークにようこそ</h1>
      メール<br>
      <input type="text" v-model="email"><br>
      パスワード<br>
      <input type="password" v-model="password"><br>
      <div class="Approval">
        <button v-on:click="login" class="login">ログイン</button>
        <button v-on:click="register" class="register">新規登録</button>
        <button v-on:click="googleLogin" class="google"> googleでログイン</button>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from '~/plugins/firebase'
import { mapActions, mapState, mapGetters } from 'vuex'
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  computed: {
    ...mapState(['user']),
    ...mapGetters(['isAuthenticated'])
  },
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      this.setUser(user)
    })
  },
  methods : {
    ...mapActions(['setUser']),
    googleLogin: function(){
      firebase.auth().signInWithRedirect(new firebase.auth.GoogleAuthProvider());
    },
    login() {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
      .then(user => {
        // ログインしたら飛ぶページを指定
        // this.$router.push("/member-page")
      }).catch((error) => {
        alert(error)
      });
    },
    logout() {
      firebase.auth().signOut()
      .then(() => {
        this.setUser(null)
      }).catch((error) => {
        alert(error)
      })
    },
    register() {
      var mailAddress = document.getElementById('mailAddress').value;
      var password = document.getElementById('password').value;
  
      firebase.auth().createUserWithEmailAndPassword(mailAddress, password)
      .catch(function(error) {
      alert('登録できません（' + error.message + '）');
      });
    }
  }
}
</script>
<style scoped>
@media screen and (max-width: 720px){

button {
    display: block;
}

}
</style>