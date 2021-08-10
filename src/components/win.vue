<template>
  <div id="win" v-bind="show()">
      <div v-show="count == 15">
        <img src="../../images/cup.jpg">
      </div>
      
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name:'win',
    computed: mapState(['count']),
    methods: {
        show() {
            var el = document.getElementById('win')
            if(this.$store.state.count == 15){
                el.style.display = "block";
            }
        }
    }
    
        
    
}
</script>

<style >
#win {
    height: 880px;
    width: 1890px;
    display: none;
}
 #win img {
    height: 880px;
    width: 100%;
    
 }

</style>