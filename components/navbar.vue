<template>
  <nav class="navbar is-white" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <div class="navbar-burger" data-target="navMenu" @click="$store.commit('toggleMenu')" :class="{'is-active': $store.state.isMenuActive}">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div><!-- navbar-brand END -->
    <div class="navbar-menu" id="navMenu" :class="{'is-active': $store.state.isMenuActive}">
      <div class="navbar-end">
        <nuxt-link to="/login" class="navbar-item">ログイン</nuxt-link>
        <nuxt-link to="/category" class="navbar-item">トークルーム選択</nuxt-link>
        <nuxt-link to="/accunt" class="navbar-item">マイページ</nuxt-link>
      </div>
    </div><!-- navbar-menu END -->
  </nav>
</template>

<style>
@media screen and (max-width: 720px) {
  .navbar-burger {
    height: 50px;
  }

  .navbar-burger span {
    height: 2.5px;/*線の太さ*/
    width: 25px;/*長さ*/
    margin-right: 10px;
  }

  .navbar-menu {
    width: 100%;
    background-color: #00CDFF;
  }

  .navbar-item {
    color: #FFFF;
    font-weight: 600;
    text-align: center;
    margin: 15px 0 ;
  }
}

.navbar-burger {
    height: 50px;
  }

  .navbar-burger span {
    height: 2.5px;/*線の太さ*/
    width: 25px;/*長さ*/
    margin-right: 10px;
  }

  .navbar-menu {
    width: 100%;
    background-color: #00CDFF;
  }

  .navbar-item {
    color: #FFFF;
    font-weight: 600;
    text-align: center;
    margin: 15px 0 ;
  }
</style>

<script>
import 'bulma/css/bulma.css';

export default {
  data: () => {
    return {isMenuActive: false}
  },
  methods: {
    toggleMenu () {
      this.isMenuActive = !this.isMenuActive
    }
  }
}
</script>