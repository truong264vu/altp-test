<template>
  <div class="point">
      <div  >
            <p v-bind="TOTAL">  
                Tiền :  
               $ {{                        
                 totalPoint
                }} 
                
                
            </p>
            
         
           
        </div>
        
  </div>
</template>

<script>
// import result from './resutl.vue'
import {mapGetters, mapState} from 'vuex' 
// import {mapMutations} from 'vuex'
export default {
    name: 'point',
    // components: {result},
    computed:{ ...mapState(['questions','totalPoint','count']),
              ...mapGetters(['TOTAL']) },
    // methods: { ...mapMutations(['TOTAL']) ,
    //       totalP(){
            
       
      
            
    // },}
}
</script>

<style scoped>

.point p {
  color:white;
  font-size: 25px;
}
@media (min-width: 100px) and (max-width: 900px) {
  .point p {
  color:white;
  font-size: 20px;
}
}
</style>