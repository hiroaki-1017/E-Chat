<template>
  <members-only>
    <div id="app">
      <workcategory />
    </div>
  </members-only>
</template>

<script>

import workcategory from "@/components/workcategory.vue";

export default {
  components: {
    workcategory,
  },

  fetch ({store}) {
    store.commit('resetMenu')
  }
    
}
</script>

<style>
@media screen and (max-width: 720px) {


}

</style>
