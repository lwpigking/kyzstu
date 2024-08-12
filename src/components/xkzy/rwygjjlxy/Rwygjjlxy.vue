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

  <div class="conth3">人文与国际交流学院</div>
  <!-- FIXME: 点击数读取数据库，先不做 -->
  <div class="data">时间: 2020-07-08 作者:  点击: [4054]</div>
  <div class="content">
    <p class="head">法学（普通类）</p>
    <p>培养目标：本专业立足区域，贴近行业，培养职业道德好，专业基础扎实，政策水平高，具有较强的创新能力和社会适应能力的高素质法律专门人才。学生应系统掌握法学理论知识，熟悉我国法律和党的相关政策，具有较强的法律实务能力，能够胜任国家机关、企事业单位和社会团体，特别是立法机关、行政机关、审判机关、检察机关、仲裁机构、律师和企业法律服务机构，从事相关法律工作的高级应用型人才。</p>
    <p>核心课程：法理学、宪法学、中国法制史、民法总论、刑法学（含总论、分论）、行政法学、经济法学、民事诉讼法学、刑事诉讼法。</p>
    <p class="head">公共事业管理（普通类）</p>
    <p>培养目标：本专业培养掌握现代公共管理理论，具备公共管理的基本素质和能力，能熟练运用先进的管理技术与方法，在行政管理部门、公共事业单位、社会团体和企业从事管理工作的德智体美全面发展、基础扎实、适应性强、学习能力强、具有较强创新创业能力及较高情商的应用型人才。</p>
    <p>核心课程：政治学概论、公共事业管理、管理学原理、组织行为学、公共部门人力资源管理、公共政策分析、公共经济学。</p>
    <p class="head">酒店管理（普通类）</p>
    <p>培养目标：本专业培养适应现代酒店业发展需要，德、智、体、美全面发展，具有良好的人文与科学素养，具备扎实的经济学和管理学基础知识，系统掌握现代酒店管理的专业知识，具备国际化视野、创新实践精神、现代服务意识和团队协作精神等职业素养，具有酒店经营管理能力和英语应用能力，能在国际酒店管理集团和高星级酒店从事服务、营销、管理、咨询等岗位工作的高素质应用型人才。</p>
    <p>核心课程：酒店管理概论、酒店服务心理学、酒店英语、酒店客户关系管理、酒店市场营销、酒店旅游电子商务、旅游学概论、旅游消费者行为学、酒店职业礼仪、餐饮管理、前厅与客房管理、节事活动策划与管理、旅游目的地管理。</p>
    <p class="head">英语（普通类）</p>
    <p>培养目标：根据《高等学校英语专业英语教学大纲》的要求，本专业以培养德、智、体、美全面发展、适应21世纪经济全球化以及我国社会主义市场经济发展需要的英语类人才为主要目的，旨在培养出专业基本功扎实，具有国际视野，跨文化交际能力强，知识面较为宽广，具有较强的实践能力、开拓精神和团队精神，能够在外事、经贸、文化交流、新闻媒体、教育、旅游以及信息情报部门等企事业单位从事翻译、教学、研究、外事、外经、外贸、行政管理工作的复合型高级外语应用人才。</p>
    <p>核心课程：基础英语1--4、英语听力1--2、英语口语1--4、英语写作1--2、英语阅读1--4、高级英语1--2、笔译1-2、口译1--2、英语语法、英语语音。</p>
    <p class="head">日语（普通类）</p>
    <p>培养目标：本专业培养具备较系统的日语语言知识和基本的日本文化、商务日语等方面的知识，能在外事、经贸、文化、新闻、旅游等企事业部门从事翻译、管理方面工作的日语应用型人才。</p>
    <p>核心课程：初级日语阅读、初级日语会话、中级日语阅读、中级日语会话、高级日语阅读、商务日语听说、翻译、口译、日本文化、日语写作等。</p>
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