<script setup>

import Top from "../../home/top/Top.vue";
import Footer from "../../home/footer/Footer.vue";

import {useRouter} from "vue-router";
const router = useRouter();
const navigateTo = (route) => {
  router.push(route)
}
</script>

<template>

  <Top/>

  <div class="top">
    <div class="img-top">
      <img src="../../../public/images/bksjy/txx.jpg" alt="txx">
    </div>
    <div class="lmcc">
      <div class="yil">学科专业</div>
      <div class="daq">专业介绍</div>
    </div>

    <div class="daww">
      <div class="wwz">当前位置</div>
      <div class="ww11z">
        <div>
          <a href="javascript:;" @click="navigateTo('/home')">官网首页</a>
          >>
          <a href="javascript:;" @click="navigateTo('/xkzy')">学科专业</a>
          >>
          <a href="javascript:;">专业介绍</a>
          >>
          <a href="javascript:;">正文</a>
        </div>
      </div>
    </div>
  </div>

  <div class="conth3">信息与控制学院</div>
  <!-- FIXME: 点击数读取数据库，先不做 -->
  <div class="data">时间: 2020-07-08 作者:  点击: [4054]</div>
  <div class="content">
    <p class="head">电子信息工程（普通类）</p>
    <p>培养目标：培养具备设计、开发、应用和集成电子设备和信息系统的基本型工程技术人才。</p>
    <p>核心课程：电路原理、模拟电子技术A、单片机原理与应用、信号与系统、电子测量技术、电子系统设计等。</p>
    <p class="head">计算机科学与技术（普通类）</p>
    <p>培养目标：培养能将计算机原件、硬件组合，从事计算机系统设计、开发及应用、教学、管理、服务等相关专业的应用型高级工程技术人才。</p>
    <p>核心课程：面向对象程序设计、数据结构与算法、计算机组成原理、操作系统、数据库原理与应用A、软件工程A等。</p>
    <p class="head">自动化（普通类）</p>
    <p>培养目标：培养具备电工技术、电子技术、控制理论、自动检测技术与仪表、电气控制技术、计算机技术与应用、网络技术等较宽广领域的工程技术基础和一定的专业知识，能在工业过程控制、运动控制、电气自动化系统、检测与自动化仪表、信息处理、管理与决策等领域从事研究、开发、运行与管理等方面工作的应用型工程技术人才。</p>
    <p>核心课程：电路原理、模拟电子技术、数字电子技术、自动控制原理、单片机原理与应用、过程控制系统等。</p>
    <p class="head">通信工程（普通类）</p>
    <p>培养目标：培养具备电子技术、计算机应用技术、通信工程技术等基础知识和基本技能，具有较强的技术应用能力和工程实践能力，能在电子、通信和计算机等高新技术应用领域从事设计、研究、生产管理和技术维护等工作，具有工程师基本素质的应用型工程技术人才。</p>
    <p>核心课程：C程序设计基础、电路原理、模拟电子技术A、数字电子技术信号与系统、通信原理A、数字信号处理A。</p>
  </div>

  <Footer/>

</template>

<style scoped>
.top img {
  width: 100%;
  height: 650px;
}

.top .lmcc {
  width: 1200px;
  margin: 0 auto;
  margin-top: -180px;
  height: 180px;
  color: #ffffff;
}

.top .lmcc .yil {
  font-size: 28px;
  position: relative;
  height: 40px;
  font-weight: bold;
  line-height: 40px;
  padding-top: 20px;
}

.top .daww {
  font-size: 14px;
  line-height: 30px;
  margin-top: -80px;
  color: #ffffff;
  margin-left: 1200px;
}

.top .daww a {
  text-decoration: none;
  color: #ffffff;
}

.conth3 {
  margin-top: 100px;
  font-size: 24px;
  font-weight: bold;
  line-height: 40px;
  text-align: center;
  padding: 20px 0;
}

.data {
  width: 1200px;
  margin: 0 auto;
  text-align: center;
  border-bottom: 1px solid #cccccc;
  padding-bottom: 10px;
}

.content {
  width: 1200px;
  line-height: 35px;
  padding-top: 20px;
  margin: 0 auto;
  margin-bottom: 50px;

}

.content p {
  line-height: 180%;
  text-indent: 2em;
  font-size: 14pt;
}

.content .head {
  font-weight: bold;
}
</style>