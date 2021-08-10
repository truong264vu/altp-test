<template>

  <div id="app">
  <meta name="viewport" content="width=device-width, initial-scale=1">

   <div class="win"><win /></div>
   <div class="bodyApp"><bodyApp /></div>
   <div class="start"><StartPlay /></div>

  </div>
</template>

<script>
import { mapState } from 'vuex'
import bodyApp from './components/bodyApp'
import win from './components/win'
import StartPlay from './components/StartPlay'
export default {
  name: 'App',
  components: { bodyApp , win , StartPlay},
  computed: 
    mapState(['count'])
  
}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  text-decoration: none;
  list-style: none;
  width: 100%;
  height: 100%;
  background-size: 100%;
  max-width: 1880px;
  max-height: 880px;
}
#app .win{
  position:absolute;
  z-index: 2;
  left: 15px;
}
#app .bodyApp{
  position:absolute;
  z-index:1;
}
#app .start {
  position:absolute;
  /* top: -10px; */
  left: 10px;
  z-index: 3;
}

/* @media (min-width: 100px) and (max-width: 1800px) {
    #app {
      transform: rotate(90deg);
      /* width: 20%;
      height: 880px;
      background-size: 100% 550px;
      max-width: 1880px;
      max-height: 880px; */

@media  (max-width: 900px) {
  .bodyApp {
    transform: rotate(90deg);
  }
   
  .start {
        transform: rotate(90deg);
    }
}

</style> 