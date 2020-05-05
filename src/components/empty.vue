<template>
  <div class="empty">
    <img src="../assets/empty.png" alt="">
    <p>空空如也～</p>
    <p>快来上传一张图片吧</p>

  </div>
</template>

<script>
export default {
  name:'empty',

}
</script>

<style scoped>
.empty{
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
}

.empty p{
  margin: 5px;
  font-size: 25px;
  color: #1C1C1C;
}

.empty img{
  width: 200px;
  height: 200px;
}


</style>