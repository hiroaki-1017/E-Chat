<template>
  <members-only>
    <div id="app">
      <workcategory />
    </div>
    <!-- ログインしていない時に表示される画面 -->
  </members-only>
</template>

<script>
import workcategory from "@/components/workcategory.vue";
import firebase from "~/plugins/firebase";
import { mapActions, mapState, mapGetters } from "vuex";

export default {
  components: {
    workcategory,
  },
};
</script>

<style>
@media screen and (max-width: 720px) {
}
</style>
