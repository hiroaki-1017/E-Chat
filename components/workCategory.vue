<template>
  <div class="categoryItem">
      <div v-for="elem in list" v-bind:key="elem.name">
          <p>{{elem.name}}</p>
      </div>
  </div>
</template>


<script>
import Vue from 'vue'

export default ({
data: {
    list : [
        {name: '公務員'},
        {name: '美容'},
    ]
}
  
})
</script>


<style>

.categoryItem{
    height: 110px;
    width: 180px;
    background-color: #00CDFF;
}

</style>