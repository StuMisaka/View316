<template>
  <div class="login">
    <form>
      <p>
        <label>用户名</label><br>
        <input type="text" name="username" minlength="2" maxlength="8" :class="inputBorder[0]" v-model="user.username">
        <label class="tip" :class="isTip[0]">请输入用户名哦</label>
      </p>
      <p>
        <label>密码</label><br>
        <input type="password" name="password" maxlength="16" minlength="6" class="input-password" :class="inputBorder[1]" v-model="user.password">
        <label class="tip" :class="isTip[1]">喵，还没有输入密码呢</label>
      </p>
      <button :class="buttonColor" type="button" @click="doLogin">
        登录
      </button>      
    </form>
    <footer>

    </footer>
    <transition name='fade'>
      <div class='pop-up' v-if='isPop'>
        <img src="../assets/error.png" alt="">
        用户名或密码错误哦
      </div>

    
    </transition>
   

  </div>
</template>

<script>
export default {
  name:'login',
  data() {
    return {
      user:{
        username:'',
        password:''
      },
      isPop:false,
      isTip:["tip-hidden","tip-hidden"],
      buttonColor:'button-before-color',
      inputBorder:['input-before-border','input-before-border']
    }
  },
  methods: {
    doLogin(){
      this.changeButtonColor();
      if(this.checkInput()){
        this.axios.post('/login',JSON.stringify(this.user))
        .then(res => {
          window.console.log(res);
          if(res.data.success){
            this.$store.commit('SET_TOKEN',res.data.data);
            this.$store.commit('SET_USER',this.user.username);
            this.$router.push('./home');
          }
          else{
            this.popError();
          }
        })
        .catch(err => {
          window.console.log(err);
        });

      }
    },
    changeButtonColor(){
      this.buttonColor = "button-after-color";
      window.setTimeout(() => {
        this.buttonColor = "button-before-color";
      },100)
    },
    checkInput(){
      if(!this.user.username){
        this.inputBorder[0] = "input-after-border";
        this.isTip[0] = "tip-visible";
      }
      else{
        this.inputBorder[0] = "input-before-border";
        this.isTip[0] = "tip-hidden";
      }
      if(!this.user.password){
        this.inputBorder[1] = "input-after-border";
        this.isTip[1] = "tip-visible";
      }
      else{
        this.inputBorder[1] = "input-before-border";
        this.isTip[1] = "tip-hidden";
      }
      if(this.user.username && this.user.password){
        return true
      }
    },
    popError(){
      this.isPop = true;
      window.setTimeout(() => {
        this.isPop = false;
      },800)
    }
  },
}
</script>

<style scoped>
.login{
  display: flex;
  flex-flow: row nowrap;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: #f4f5f6;
}

.login form{
  display: flex;
  flex-flow: column nowrap;
  width: 280px;
  height: 400px;
  padding: 60px;
  background-color: white;
  border-radius: 2px;
  box-shadow: 0 0 25px #CDC9C9;
}

.login form label{
  font-size: 15px;
  color: #8B8989;
}

.login form input{
  padding-left: 10px;
  width: 280px;
  height: 35px;
  background-color: #f4f5f6;
  outline: none;
  border-radius: 5px;
  box-shadow:inset 0 0 2px #CDC9C9;
  font-size: 20px;
  
}

.login form .input-password{
  letter-spacing: 4px;
}

.login form .tip{
  font-size: 13px;
  color: #FF6347;

}

.tip-visible{
  visibility:visible;
}

.tip-hidden{
  visibility:hidden;

}

.input-before-border{
  border:1px solid #f4f5f6;
}

.input-after-border{
  border:1px solid #FF6347;
}

.login form button{
  margin-top: 50px;
  width:  280px;
  height: 40px;
  color: white;
  font-size: 15px;
  border: 0;
  box-shadow: 0;
  outline: none;
  cursor: pointer;
}

.button-before-color{
  background-color: #FF6347;
}

.button-after-color{
  background-color: #FF4040;
}

.pop-up{
  display: flex;
  position: fixed;
  flex: row nowrap;
  width: 280px;
  height: 50px;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  border-radius: 5px;
  box-shadow: 0 0 2px #f4f5f6;
  background: #f4f5f6;
}

.pop-up img{
  width: 25px;
  height: 25px;
  margin-right: 15px;
}

</style>