<template>
  <div class="upload">
    <h1>上传图片</h1>
    <div class="file">
      <label for="file"><img src="../assets/plus.png" alt=""></label>
      <div class="preview" v-if="isPreview">
        <img :src="imgbase64" alt="">
        <button type="button" class="cancel" @click="cancelFile"><img src="../assets/cancel.png" alt=""></button>
      </div>
      <input type="file" accept="image/*" multiple="false" name="file" id="file" @change='setFile' :value="valOfInput">
    </div>
    <button type="button" class="submit" @click='doUpload'>开始上传</button>
    <img src="../assets/close.png" alt="" class="close" @click='doClose'>
    <tip :img=imgSuccess  content='上传成功！'></tip>
  </div>
</template>

<script>
import tip from './tip'
export default {
  name:'upload',
  components:{
    tip

  },
  data() {
    return {
      isPreview:false,
      file:null,
      imgbase64:null,
      valOfInput:"",
      imgSuccess:require('../assets/success.png')
    }
  },
  methods: {
    setFile(event){
      this.file = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(this.file);
      reader.onload = ((event) => {
        this.imgbase64 = event.target.result;
        this.isPreview = true;
      })
      this.valOfInput = "";
    },
    cancelFile(){
      this.isPreview = false;
      this.file = null;
      this.imgbase64 = null;
    },
    doClose(){
      this.$emit('close-upload');
    },
    doUpload(){
      let params = new FormData();
      params.append('file',this.file,this.file.name);
      this.axios.post('./pictures',params,{
        headers:{}
      })
      .then(res => {
        this.cancelFile();
        window.console.log(res);
      })
      .catch(err => {
        window.console.log(err);
      })

    },
    test(event){
      window.console.log(event);
    }
  },
}
</script>

<style scoped>
.upload{
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;
  width: 550px;
  height: 40vh;
  padding: 0 25px 0 25px;
  background-color: rgba(28, 28, 28, 0.8);
  border-radius: 15px;
}

.upload h1{
  font-size: 35px;
  color: white;
}

.upload span img{
  width: 50px;
}

.file{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 100px;
  border: 2px dashed #EEE9E9;
}

.file label img{
  width: 50px;
  cursor: pointer;
}

.preview,
.preview>img{
  position: absolute;
  width: 200px;
  height: 100px;
}

.preview button{
  position: absolute;
  bottom: 0;
  display: none;
  width: 200px;
  height: 40px;
  border: 0;
  background-color: rgba(28, 28, 28, 0.8);
  outline: none;
  cursor: pointer;
  
}

.preview button img{
  width: 25px;
}

.preview:hover button{
  display: block;
}

.file input{
  position: absolute;
  width: 0;
  height: 0;
  cursor: pointer;
}

.upload .submit{
  margin-bottom: 50px;
  width: 150px;
  height: 50px;
  background-color: #7D26CD;
  color: white;
  border: 0;
  outline: none;
  cursor: pointer;
}

.upload .close{
  position: absolute;
  right: 10px;
  width: 35px;
  height: 35px;
  cursor: pointer;
}

</style>