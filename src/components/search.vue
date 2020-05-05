<template>
<div class='search'>
  <input type="text" name="" id="" v-model="searchKey">
  <img src="../assets/search.png" alt="" @click="doSearch">
</div>
</template>

<script>
export default {
  name:'search',
  data() {
    return {
      searchKey:""
    }
  },
  methods: {
    doSearch(){
      for(let i = 0;i <= this.$store.state.images.length;i++){
        if(this.$store.state.images[i]){
          if(this.searchKey == this.$store.state.images[i].origin_name){
            this.$emit("sendIndex",i);
          }
        }
      }
    }
  },
  
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


