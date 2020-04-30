<template>
  <members-only>
    <div v-if="isAuthenticated">
      <div id="app">
      <workcategory />
    </div>
    </div>
    <!-- ログインしていない時に表示される画面 -->
    <div v-else>
      <p>ログインしてください</p>
    </div>
  </members-only>
</template>

<script>

import workcategory from "@/components/workcategory.vue";
import firebase from '~/plugins/firebase'
import { mapActions, mapState, mapGetters } from 'vuex'

export default {
  components: {
    workcategory,
  },

  fetch ({store}) {
    store.commit('resetMenu')
  },

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
    }
  }
    
}
</script>

<style>
@media screen and (max-width: 720px) {


}

</style>
