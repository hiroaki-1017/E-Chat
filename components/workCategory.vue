<template>
  <div class="container">
    <div class="row">
        <div class="col-6" v-for="elem in products" :key="elem.name">
            <div class="categoryItem">
                <div class="categoryImg"></div>
                <p class="categoryText">{{elem.name}}</p>
            </div>
        </div>
    </div>
  </div>
</template>


<script>
import Vue from "vue";

export default {
  data() {
    return {
      products: [
        { name: "公務員" },
        { name: "美容" },
        { name: "公務員" },
        { name: "美容" },
        { name: "公務員" },
        { name: "美容" },
        { name: "公務員" },
        { name: "美容" },
        { name: "公務員" },
        { name: "美容" },
        { name: "公務員" },
        { name: "美容" },
      ]
    };
  }
};
</script>


<style>

@media screen and (max-width: 720px) {

.row {
    padding: 20px;
}

.categoryItem {
  height: 80px;
  background-color: #00cdff;
  margin-bottom: 30px;
  border-radius: 10px;
  display: flex;
}

.categoryImg {
  height: 45px;
  width: 45px;
  margin: 18px 0 0 10px;
  background: url("~@/assets/main-visual.png");
  background-size: cover;
}

.categoryText {
  color: #FFFF;
  font-weight: 500;
  text-align: right;
  margin: 26px 0 0 20px;
}

}
</style>