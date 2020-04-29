<template>
<transition name='fade'>
  <div class="tip">
    <img :src=img alt="">
    {{ content }}
  </div>
</transition>
</template>

<script>
export default {
  name:'tip',
  props:['img','content']
  
}
</script>

<style scoped>

.tip{
  display: flex;
  position: fixed;
  flex: row nowrap;
  padding: 15px 80px 15px 80px;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  border-radius: 5px;
  box-shadow: 0 0 2px #f4f5f6;
  background: #f4f5f6;
}

.tip img{
  width: 25px;
  height: 25px;
  margin-right: 15px;
}

</style>