<template>
  <div class="register">
    <form action="" class="form">
      <p>
        <label>用户名</label><br>
        <input type="text" name="username" minlength="2" maxlength="8" class="input">
      </p>
      <p>
        <label>密码</label><br>
        <input type="password" name="password" maxlength="16" minlength="6" class="input">
      </p>
      <button class="button">
        注册
      </button>
      
    </form>
    <footer class="footer">

    </footer>

  </div>
</template>

<script>
export default {
  name:'login'
}
</script>

<style scoped>
.register{
  display: flex;
  flex-flow: row nowrap;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: #f4f5f6;
}

.register form{
  display: flex;
  flex-flow: column nowrap;
  width: 280px;
  height: 400px;
  padding: 60px;
  background-color: white;
  border-radius: 2px;
  box-shadow: 0 0 25px #CDC9C9;
}

.register form label{
  font-size: 15px;
  color: #8B8989;
}

.register form input{
  width: 280px;
  height: 35px;
  background-color: #f4f5f6;
  outline: none;
  border:1px solid #f4f5f6;
  box-shadow:inset 0 0 2px #CDC9C9;
  font-size: 20px;
}

.register form button{
  margin-top: 50px;
  width:  280px;
  height: 40px;
  color: white;
  font-size: 15px;
  background-color: #1C86EE;
  border: 0;
  box-shadow: 0;
}

</style>