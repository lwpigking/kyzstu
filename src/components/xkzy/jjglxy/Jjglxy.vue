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

  <div class="conth3">经济管理学院（创业学院）</div>
  <!-- FIXME: 点击数读取数据库，先不做 -->
  <div class="data">时间: 2020-07-08 作者:  点击: [4054]</div>
  <div class="content">
    <p class="head">国际经济与贸易（普通类）</p>
    <p>培养目标：掌握马克思主义经济学、国际经济、国际贸易的基本理论和基本知识，具有较宽的理论基础、具有独立的理论分析和实务操作能力。英语具有熟练的听、说、读、写等方面的能力；掌握一定的工程技术基础，并能用计算机从事涉外经济工作。</p>
    <p>核心课程：经济学、统计学管理学、会计学、管理信息系统等课程。</p>
    <p class="head">经济学（普通类）</p>
    <p>培养目标：掌握经济学基本原理和国际经济、国际商务的专业知识和技能，了解国内外经济发展的历史、现状和趋势，以及经济政策法规和惯例，熟悉本学科及相关学科的新发展，具有较强的分析和解决贸易等经济领域实际问题的能力。</p>
    <p>核心课程：微观经济学、宏观经济学、国际贸易、国际金融、管理学、产业经济学、区域经济学、货币银行学、财政学、国际商法、计量经济学、国际贸易实务、国际结算、会计学、统计学、制度经济学、发展经济学等课程。</p>
    <p class="head">会计学（普通类）</p>
    <p>培养目标：熟悉国家有关方针、政策、法规和国际惯例，具备会计、财务管理和审计实务的实际操作能力，能熟练地借助计算机完成对会计信息的处理和分析，掌握会计学的定性、定量分析方法，具有综合运用会计信息进行财务分析、决策、解决实际问题的能力。</p>
    <p>核心课程：管理学、经济学、金融学 掌握经济学、金融学、管理学、会计学、财务管理和审计实务的基本理论和基础知识等课程。</p>
    <p class="head">工商管理（普通类）</p>
    <p>培养目标：掌握工商管理的基本理论和基本知识，具备利用会计报表做财务分析、独立进行市场调研、预测与决策、工商企事业管理和商贸经营业务能力；较熟练掌握英语，具有较高的读、听能力和一定的说、写、译能力，能阅读本专业的外文文献；熟练地掌握计算机基础知识和基本技能，具有运用计算机知识解决实际问题能力。</p>
    <p>核心课程：微观经济学、管理学、会计学、管理信息系统、组织行为学、生产运作管理、企业战略管理等课程。</p>
    <p class="head">人力资源管理（普通类）</p>
    <p>培养目标：学习管理学、经济学及人力资源管理方面的基本理论和基本知识，接受人力资源方法和技巧的专门训练，具有分析和解决人力资源管理问题的能力。</p>
    <p>核心课程：管理学、微观经济学、组织行为学、绩效管理、薪酬管理、人员素质测评等课程。</p>
    <p class="head">市场营销（普通类）</p>
    <p>培养目标：具备一定的经济学、心理学、数学基础和工程技术基础，掌握市场营销、管理学和工商管理的基本理论和基本知识，掌握营销方法与技巧，具有市场研究与营销策划、开拓市场与组织市场营销活动的能力，能熟练地应用专业软件、阅读专业英语文献资料。</p>
    <p>核心课程：管理学、营销管理、市场分析、消费者行为学、销售管理、营销策划等课程。</p>
    <p class="head">电子商务（普通类）</p>
    <p>培养目标：本专业培养适应经济发展需要，具有扎实的经济管理理论及信息技术基础知识，突出的专业技能，从事电子商务领域中科研、开发与应用的复合型人才。通过系统的学习，能够熟练地应用现代信息技术，对企业从事电子商务活动提出解决方案，能在企事业单位、金融机构、科研院所等部门从事电子商务系统分析、设计、开发、实施、管理等工作。</p>
    <p>核心课程：英语Ⅳ、高等数学B、计算机应用基础、C程序设计基础、毛泽东思想和中国特色社会主义理论体系概论、管理信息系统、管理运筹学、数据库原理与应用、网络营销、电子商务系统分析与设计</p>
    <p class="head">信息管理与信息系统（普通类）</p>
    <p>培养目标：培养掌握系统思想、信息系统分析与设计方法及信息管理等方面的知识与能力，能在企事业单位、信息技术单位和政府部门从事计算机应用、信息管理及信息系统分析、设计、实施管理和评价，从事网络管理、开发、经营、技术支持等方面工作的应用型专业人才。</p>
    <p>核心课程：数据结构、管理信息系统、数据库原理与应用、Web开发技术、信息系统分析设计与实现等。</p>

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