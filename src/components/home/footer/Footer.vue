<script setup>

</script>

<template>
  <div class="footer">
    <div class="footer-bot">
      <div>
      <p>招生电话</p>
      <p>0575-82001777</p>
      <P>院长书记信箱</P>
      <p>ky@zstu.edu.cn</p>
      </div>

      <div>
      <p>Copyright(c)2021</p>
      <p>浙江理工大学科技与艺术学院</p>
      <p>学院地址:</p>
      <p>杭州湾上虞经济技术开发区抗阳大道58号</p>
      </div>

      <div>
      <p>邮编</p>
      <p>312369</p>
      <p>传真</p>
      <p>0575-82978000</p>
      </div>

    </div>

    <div class="footer-raw">
      <a href="javascript:;">—厚德致远·博学敦行—</a>
    </div>

  </div>
</template>

<style scoped>

.footer {
  background-color: #ebebeb;
  height: 300px;
  width: 100%;
}

.footer .footer-bot {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 1200px;
  height: 191px;
  margin: 0 auto;
  font-size: 14px;
  padding-top: 50px;
  line-height: 30px;
  border-bottom: 1px solid #cccccc;
  padding-bottom: 0;
}

.footer .footer-raw a{
  display: flex;
  justify-content: center;
  align-items: center;
  color: #333333;
  text-decoration: none;
  margin-top: 20px;
}

.footer .footer-raw a:hover {
  color: red;
}
</style>