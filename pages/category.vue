<template>
  <members-only>
    <div id="app">
      <a href="/accunt">アカウントページへ</a>
      <div class="mainCategory" v-for="(item, key) in categoryItem" :key="key">
        <div class="category">
          {{item.name}}
        </div>
      </div>
    </div>
  </members-only>
</template>
<script>
export default {
  el: '#app',
  data: {
    categoryItem: [
      {name: '公務員'}
    ]
  }
}
</script>
<style>
@media screen and (max-width: 720px) {

  .category{
    height: 110px;
    width: 180px;
    background-color: #00CDFF;
  }

}

</style>
