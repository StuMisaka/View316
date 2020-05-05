<template>
<div class='search'>
  <input type="text" name="" id="">
  <img src="../assets/search.png" alt="">
</div>
</template>

<script>
export default {
  name:'search'
  
}
</script>

<style scoped>
.search{
  margin-top: 3vh;
  margin-bottom: 2vh;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40vw;
  height: 5vh;
  border-radius: 2.5vh;
  border: 1px solid #EEE9E9;
  background-color: white;
}

.search input{
  flex: 0 0 auto;
  width: 85%;
  height: 4vh;
  font-size: 20px;
  border: 0;
  outline: none;
}

.search img{
  height: 35px;
  cursor: pointer;
}
</style>


