<script setup>
import {onMounted, ref} from 'vue';
import * as echarts from "echarts";
import {cloption} from "./clchart.js";
import {fwoption} from "./fwchart.js";

const activeName = ref('first')

onMounted(() => {
  const elchart = echarts.init(document.querySelector(".clchart"));
  elchart.setOption(cloption);

  const fwchart = echarts.init(document.querySelector(".fwchart"));
  fwchart.setOption(fwoption);
});

</script>

<template>
  <div class="custom-body">

    <el-card shadow="hover" class="left">

      <div class="left-top">
        <div class="card-content">
          <img src="../../../public/images/wbdt/20191202105549501.png" alt="1">
          <div class="card-text">
            <div class="content-li">有<span>949</span>人访问</div>
            <div class="content-li-span"><span>0</span>人收藏</div>
            <el-button type="primary" class="button">开始办理</el-button>
          </div>
        </div>
      </div>

      <div class="clchart"></div>
      <div class="fwchart"></div>

    </el-card>

    <el-card shadow="hover" class="right">
      <div class="title">网站群建设申请</div>
      <div class="zgbm">主管部门： <span>宣传部（教师工作部）</span></div>

      <el-tabs v-model="activeName" class="tabs">
        <el-tab-pane label="服务说明" name="first">服务说明</el-tab-pane>
        <el-tab-pane label="注意事项" name="second">注意事项</el-tab-pane>
      </el-tabs>

    </el-card>

  </div>
</template>

<style scoped>
.custom-body {
  width: 1200px;
  margin: 0 auto;
  height: 630px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.left {
  height: 620px;
  width: 30%;
  margin-top: 10px;
  margin-bottom: 10px;
}

.right {
  height: 620px;
  width: 65%;
  margin-top: 10px;
  margin-bottom: 10px;
}

.left-top {
  border-bottom: 1px solid #cccccc;
  padding-bottom: 10px;
}

.card-content {
  display: flex;
  position: relative;
}

.card-text {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.content-li {
  margin-left: 20px;
}

.content-li-span{
  margin-left: 20px;
}

.content-li span {
  color: red;
}

.content-li-span span {
  color: red;
}

.button {
  position: absolute;
  right: 0;
  top: 0;
}

.left-top img {
  width: 75px;
  height: 75px;
}

.clchart {
  width: 100%;
  height: 250px;
  border-bottom: 1px solid #cccccc;
  padding-bottom: 10px;
}

.fwchart {
  width: 100%;
  height: 250px;
}

.title {
  width: 100%;
  text-align: center;
  font-size: 16px;
  color: #111111;
  line-height: 40px;
}

.zgbm {
  font-size: 14px;
}

.zgbm span {
  color: #6e6e6e;
}

</style>