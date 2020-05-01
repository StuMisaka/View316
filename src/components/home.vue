<template>
  <div class="home">
    <header>
      <ul>
        <button type='button' id="button-home"><img src="../assets/home.png" alt=""> 主页</button>
        <button type='button' @click="doAbout"><img src="../assets/about.png" alt="">关于我们</button>
      </ul>
      <ul>
        <div class="account">
          <button type='button'><img src="../assets/account.png" alt="">{{ username }}</button>
          <div class="menu">
            <button type="button" @click="doSet"><img src="../assets/setting.png" alt="">设置</button>  
            <button type="button" @click="doLogout"><img src="../assets/out.png" alt="">登出</button>
          </div>        
        </div>
        <button type='button' @click="doVip"><img src="../assets/vip.png" alt=""> 会员</button>
      </ul>
    </header>
    <main>
      <div class="search">
        <input type="text" name="" id="">
        <img src="../assets/search.png" alt="">
      </div>
      <div class="swiper">
        <img  :src=imgurl alt="" >
      </div>
      <div class="info">
        <div>
          {{this.index + 1}} / {{ this.$store.state.sum }}
        </div>
        <div>
          {{ this.$store.state.images[this.index].origin_name }}
        </div>
      </div>
      <div class="control">
        <button type="button"  @click="doOpenupload"><img src="../assets/upload.png" alt="上传"></button>
        <button type="button" @click='doLast'><img src="../assets/left.png" alt="向右"></button>
        <button type="button" @click="doNext"><img src="../assets/right.png" alt="向左" ></button>
        <button type="button" @click="doRefresh"><img src="../assets/refresh.png" alt="刷新"> </button>
        <button type="button" @click="doDelete"><img src="../assets/delete.png" alt="删除"></button>
      </div>
      <transition name="fade">
        <upload class="upload" v-if="popUpload" @close-upload='doClose'></upload>
      </transition>
      <transition name="fade">
        <tip v-if="isPop" :img=imgSuccess  content='删除成功'></tip>
      </transition>
    </main>
  </div>
</template>

<script>
import tip from './tip.vue'
import upload from './upload.vue'
export default {
  name: 'home',
  components: {
    upload,
    tip
  },
  data() {
    return {
      username:this.$store.state.username,
      index:0,
      popUpload:false,
      isPop:false,
      imgSuccess:require('../assets/success.png')
    }
  },
  computed: {
    imgurl(){
      return this.$store.state.images[this.index].url
    },
    imgname(){
      return this.$store.state.images[this.index].origin_name
    }
  },
  methods: {
    doLogout(){
      this.$store.commit('LOGOUT');
      if(this.$store.state.token == null){
        this.$router.push('/login');
      }
    },
    doSet(){
      alert('后台接口都没有，设置个锤子哟');
    },
    doVip(){
      alert('尚未开放此功能哦')
    },
    doAbout(){
      const a = Math.random();
      if(a > 0.5){
        window.open("https://github.com/StuMisaka");
      }
      else{
        window.open("https://github.com/WillXu24");

      }
    },
    doOpenupload(){
      this.popUpload = true;
    },
    doClose(){
      this.popUpload = false;
    },
    doLast(){
      if(this.index == 0){
        this.index = this.$store.state.sum - 1;
      }
      else{
        this.index -= 1;
      }
    },
    doNext(){
      if(this.index == (this.$store.state.sum -1)){
        this.index = 0;
      }
      else{
        this.index += 1;
      }

    },
    doDelete(){
      let url = './pictures/' + this.$store.state.images[this.index].upload_name
      this.axios.delete(url)
      .then(() => {
        this.$store.commit('DELETE',this.index);
        this.index -= 1;
        this.isPop = true;
        window.setTimeout(() => {
          this.isPop = false;
        }, 800);
      })
      .catch(err => {
        window.console.log(err);
      })
    },
    doRefresh(){
      this.axios.get('./pictures')
      .then(res => {
        this.$store.commit('SET_SUM',res.data.data.length);
        for (let i in res.data.data){
          res.data.data[i].url = "http://49.234.136.73:5050/images/" + res.data.data[i].upload_name;
        }
        this.$store.commit('SET_IMAGES',JSON.stringify(res.data.data));
        window.console.log("更新成功");
      })
      .catch(err => {
        window.console.log(err);
      })
    }
  },
}
</script>

<style scoped>
.home{
  width: 100vw;
  height: 100vh;
  background-color: #EEE9E9;
}

header{
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 8vh;
  background-color: rgba(28, 28, 28, 0.8);
  border: 0;
}

header>ul{
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  width: 50vw;
  height: 100%;
}

#button-home{
  background-color: #7D26CD;
}

header button{
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 1 auto;
  border: 0;
  background-color: rgba(0, 0, 0, 0);
  outline: none;
  color: white;
  font-size: 15px;
  cursor: pointer;
}

header>ul>button{
  width: 120px;
  height: 100%;
}

header>ul>.account{
  flex-flow: column nowrap;
  justify-content: flex-start;
  width: 120px;
}

.account>button{
  color: #EE9A00;
  width: 120px;
  height: 100%;
}

.account .menu>button{
  width: 120px;
  height: 6vh;
  background-color: rgba(28, 28, 28, 0.8);
}

header button:hover{
  background-color: #7D26CD;
}

.account>button:hover{
  background-color: #7D26CD;
}

.account .menu button:hover{
  background-color: #7D26CD;
}

.account:hover>.menu{
  display: block;
}

.menu{
  display: none;
  position: relative;
}

header button img{
  height: 20px;
  width: 20px;
}

main{
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}

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

.swiper{
  display: flex;
  flex-flow: row nowrap;
  align-content: center;
  justify-content: center;
  width: 100vw;
  height: 50vh;  

}

.swiper img{
  max-width: 100vw;
  max-height: 50vh;
  min-width: 20vw;
  min-height: 20vh;
}

.info{
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: rgb(28,28,28);
}

.control{
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 20vh;
  background-color: rgba(0, 0, 0, 0.8);
}

.control button{
  width: 100px;
  height: 10vh;
  border: 1px rgba(28, 28, 28, 0.8) solid ;
  background-color: rgba(0, 0, 0, 0.2);
  outline: none;
  cursor: pointer;
}

.control button img{
  width: 20px;
  height: 20px;
}

.upload{
  position: fixed;
  bottom: 40vh;



}

</style>
