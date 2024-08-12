<script setup>
// FIXME：后端数据先不写，测试数据
const ztbData = [
  {data: "[招投标信息公开]", name: "浙江理工大学科技与艺术学院2024年招生宣传广告项目中标结果公告", time: "2024-07-13"},
  {data: "[招投标信息公开]", name: "浙江理工大学科技与艺术学院2024年招生宣传广告项目中标结果公告", time: "2024-07-13"},
  {data: "[招投标信息公开]", name: "浙江理工大学科技与艺术学院2024年招生宣传广告项目中标结果公告", time: "2024-07-13"},
  {data: "[招投标信息公开]", name: "浙江理工大学科技与艺术学院2024年招生宣传广告项目中标结果公告", time: "2024-07-13"},
  {data: "[招投标信息公开]", name: "浙江理工大学科技与艺术学院2024年招生宣传广告项目中标结果公告", time: "2024-07-13"},
  {data: "[招投标信息公开]", name: "浙江理工大学科技与艺术学院2024年招生宣传广告项目中标结果公告", time: "2024-07-13"},
]
</script>

<template>
  <div class="content">
    <ul v-for="data in ztbData">
      <li>
        <p>{{ data.data }}</p>
        <a href="javascript:;">{{ data.name }}</a>
        <span>{{ data.time }}</span>
      </li>
    </ul>
  </div>

  <!-- FIXME: 分页器一共有多少条数据，每页展示多少数据，需要和后端交互 -->
  <el-pagination class="pagination" background layout="prev, pager, next" :total="100" prev-text="上页" next-text="下页"/>
</template>

<style scoped>
.content {
  width: 1200px;
  padding: 20px 0;
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 50px;
}

.content ul li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 50px;
  border-bottom: 1px solid #cccccc;
  font-size: 16px;
  height: 50px;
}

.content ul li p {
  font-weight: bold;
}

.content ul li a {
  text-decoration: none;
  color: #333333;
  margin-left: -450px;
  transition-duration: 0.3s;
}

.content ul li a:hover {
  transform: translateX(20px);
  color: red;
}

.content ul li span {
  background-color: #7e7e80;
  color: #ffffff;
  font-size: 14px;
  height: 25px;
  line-height: 25px;
}

.pagination {
  width: 1200px;
  height: 100px;
  margin: 0 auto;
  margin-top: 20px;
  display: flex;
  justify-content: center;
}
</style>