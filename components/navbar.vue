<template>
  <nav class="navbar is-white" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <div class="navbar-item">Avocado</div>
      <div class="navbar-burger" data-target="navMenu" @click="toggleMenu" :class="{'is-active': isMenuActive}">
        <span></span>
      </div>
    </div><!-- navbar-brand END -->
    <div class="navbar-menu" id="navMenu" :class="{'is-active': isMenuActive}">
      <div class="navbar-end">
        <nuxt-link to="/" class="navbar-item">トップ</nuxt-link>
        <nuxt-link to="/category" class="navbar-item">Avocadoとは？</nuxt-link>
        <nuxt-link to="/accunt" class="navbar-item">お問い合わせ</nuxt-link>
      </div>
    </div><!-- navbar-menu END -->
  </nav>
</template>

<script>
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