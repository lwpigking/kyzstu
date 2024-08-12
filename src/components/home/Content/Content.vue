<script setup>

</script>

<template>
  <div class="tab">
    <ul>
      <li><img src="../../../public/images/tab/x01.jpg" alt="x01"></li>
      <li><img src="../../../public/images/tab/x02.jpg" alt="x02"></li>
      <li><img src="../../../public/images/tab/x03.jpg" alt="x03"></li>
      <li><img src="../../../public/images/tab/x04.jpg" alt="x04"></li>
    </ul>
  </div>

  <div class="ul-content">
    <ul>
      <li>

        <div>
          <b>[科艺要闻]</b>
          <a href="#">学院党委书记陈德虎带队慰问在本部的学生军训教官和田径队参训队员</a>
          <span>01-25</span>
        </div>

        <div>
          <b>[科艺要闻]</b>
          <a href="#">校党委副书记缪鲁加一行来我院调研指导工作</a>
          <span>01-25</span>
        </div>

        <div>
          <b>[科艺要闻]</b>
          <a href="#">我院“杭州湾数字智能产业学院”成功入选省级重点支持现代产业学院建设点名单</a>
          <span>01-25</span>
        </div>

        <div>
          <b>[科艺要闻]</b>
          <a href="#">浙江理工大学科技与艺术学院召开2023年度二级单位分类评价述职大会</a>
          <span>01-25</span>
        </div>

        <div>
          <b>[科艺要闻]</b>
          <a href="#">科艺学院召开虞理共进挂职干部座谈会</a>
          <span>01-25</span>
        </div>

        <div>
          <b>[科艺要闻]</b>
          <a href="#">深圳软通动力信息技术有限公司来院调研</a>
          <span>01-25</span>
        </div>

        <div>
          <b>[科艺要闻]</b>
          <a href="#">位居独立学院第一！我院荣获第四十二届浙江省高等学校体育科学论文一等奖一...</a>
          <span>01-25</span>
        </div>

        <div>
          <b>[科艺要闻]</b>
          <a href="#">新突破，我院获“中行杯”第十四届浙江省大学生职业规划大赛银奖！</a>
          <span>01-25</span>
        </div>

      </li>
    </ul>
  </div>
</template>

<style scoped>
.tab {
  width: 1200px;
  margin: 0 auto;
}

.tab ul{
  display: flex;
  justify-content: space-around;
  padding: 10px;
}

.tab ul li {
  list-style: none;
}

.tab ul li img {
  width: 289px;
  height: auto;
  opacity: 0.7;
  cursor: pointer;
  transition-duration: 0.3s;
}

.tab ul li img:hover {
  opacity: 1;
}

.ul-content {
  width: 1200px;
  margin: 0 auto;
}

.ul-content ul li {
  list-style: none;
  height: 300px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
}

.ul-content ul li div{
  font-size: 14px;
  line-height: 24px;
  height: 53px;
  border-bottom: 1px solid #ccc;
  padding-top: 5px;
  display: flex;
}

.ul-content ul li div a{
  text-decoration: none;
  color: #333333;
  width: 360px;
  transition-duration: 0.3s;
}

.ul-content ul li div b {
  width: 113px;
}

.ul-content ul li div span {
  width: 70px;
  margin-left: 30px;
}

.ul-content ul li div a:hover {
  color: red;
  transform: translateX(20px);
}
</style>