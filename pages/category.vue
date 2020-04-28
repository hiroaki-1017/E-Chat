<template>
  <members-only>
    <div id="app">
      <a href="/accunt">アカウントページへ</a>
      <div class="item" v-for="product in item" v-bind:key="product.name">
          <p>{{product.name}}</p>
      </div>
    </div>
  </members-only>
</template>
<script>
export default {
    data: {
        item: [
            { name: 'Michel<br>写真' },
            { name: 'Reiji<br>写真' },
            { name: 'Waiyade<br>写真' },
            { name: 'Ojei<br>写真' }
        ]
    },
}
</script>
<style>
@media screen and (max-width: 720px) {

  .item{
    height: 110px;
    width: 180px;
    background-color: #00CDFF;
  }

}

</style>
