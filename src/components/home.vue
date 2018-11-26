<template>
  <div>
    <div class="body">
        <div class="container">
          <div class="text-center"><br>
            <router-link to="#" class="brand"><h3>ImageSearch</h3></router-link>
          </div>
            <input class="form-control" v-model="string" style="margin-top: 20px"  type="text" v-on:keyup.enter="search" placeholder="Search">
            
            <div class="spinner" v-if="view">
              <div class="bounce1"></div>
              <div class="bounce2"></div>
              <div class="bounce3"></div>
            </div>
            <br>
            <div class="row">
              <div class="col-md-4 image"  v-for="img in res">
                <!-- <router-link v-bind:to="img.pageURL"> -->
                  <div id="outer-box">
                  <clazy-load v-bind:src="img.largeImageURL">
                  <transition name="fade">
                    <img v-img:name v-bind:src="img.largeImageURL" v-b-tooltip.hover v-bind:title="img.tags" class="img-fluid" ></transition><br><br>
                    <transition name="fade" slot="placeholder">
                      <div slot="placeholder">
                        Loading....
                      </div>
                    </transition>
                    <!-- <div id="inner-box">auto                     <p>Views: {{img.views}}</p>
                      <p>Downloads: {{img.downloads}}</p>
                      <p>Likes: {{img.likes}}</p>
                    </div> -->
                    </clazy-load>
                  </div>
                <!-- </router-link> -->
              </div>
            </div>
            <div class="text-center" v-if="show">
                <h2 style="color: #bfbfbf">Search for the pictures you want</h2>
                <img src="https://cdn4.iconfinder.com/data/icons/photo-6/500/130-512.png" class="img-fluid">
            </div>
            <div class="text-center" v-if="display">
                <h2 style="color: #bfbfbf">Images with this combination weren't found</h2>
                <img src="http://sexologiamujer.es/wp-content/uploads/2018/08/frases-de-melancolia.jpg" class="img-fluid">
            </div>
        </div>  
    </div>
  </div>
</template>

<script>
import {key} from './../config.js'
import VuePaginator from 'vuejs-paginator'

export default {
  data () {
    return {
        string : '',
        res: [],
        view: false,
        show: true,
        display: false, 
        query: '',
    }
  }, 
  methods:{
    search: function(){
      this.view = true;
      this.query = 'https://pixabay.com/api/?key=' + key + '&q=' + this.string + '&image_type=photo&per_page=50'
      this.$http.get(this.query).then(response => {
          console.log(response);
          this.res = response.body.hits;
          this.view = false;
          this.show = false;
          this.display = false;
          if (this.res.length == 0){
            this.display = true;
          }
        });
    },
  }
}
</script>

<style>

.body{
  display: block;
  margin: 0 auto;
  font-family: 'PT Sans', sans-serif;
}

.spinner {
  margin: 20px auto 0;
  width: 70px;
  text-align: center;
}

.spinner > div {
  width: 18px;
  height: 18px;
  background-color: rgb(89, 11, 119);

  border-radius: 100%;
  display: inline-block;
  -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
  animation: sk-bouncedelay 1.4s infinite ease-in-out both;
}

.spinner .bounce1 {
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}

.spinner .bounce2 {
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}

@-webkit-keyframes sk-bouncedelay {
  0%, 80%, 100% { -webkit-transform: scale(0) }
  40% { -webkit-transform: scale(1.0) }
}

@keyframes sk-bouncedelay {
  0%, 80%, 100% { 
    -webkit-transform: scale(0);
    transform: scale(0);
  } 40% { 
    -webkit-transform: scale(1.0);
    transform: scale(1.0);
  }
}

.brand{
  color: rgb(89, 11, 119)
}

.brand:hover{
  text-decoration: none;
}
/*
#outer-box {
  display: block;
  position: relative;
}

#outer-box #inner-box {
  background: #181717;
  height: auto;
  width: auto;
  padding: 20px;
  opacity: 0;
  top: 0;
  left: 0;
  text-align: center;
  display: block;
  margin: 20px 80px;
  position: absolute;
  border-radius: 100%;
  transition: opacity .5s;
}

#outer-box #inner-box p {
  color: #fff;
  font-family: 'arial';
  text-align: center;
}

#outer-box:hover #inner-box {
  opacity: .8;
  transition: opacity .5s;
}*/
</style>
