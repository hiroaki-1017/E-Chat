<template>
  <members-only>
    <div id="app">
      <a href="/accunt">アカウントページへ</a>
      <workcategory />
    </div>
  </members-only>
</template>

<script>

import workcategory from "@/components/workcategory.vue";

export default {
  components: {
    workcategory,
  }
    
}
</script>

<style>
@media screen and (max-width: 720px) {


}

</style>
