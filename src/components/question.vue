<template>
  <div class="question">
          <!-- <link rel='stylesheet' href='https://cdn.rawgit.com/t4t5/sweetalert/v0.2.0/lib/sweet-alert.css'> -->

          <h1>Câu {{count+1}} : {{questions[count].question}} </h1>

                     
              <li 
                v-for="(nameAnswer,index) in questions[count].answer" 
                :key="index"
                 @click="showDelete($event)"   
                :class="{
                    choosed: questions[count].choose == index,
                }"
                @mousedown="questions[count].choose = index"
                         
                >
                 
               {{nameAnswer}}
             </li>
            
        
    </div>
</template>

<script>
import swal from 'sweetalert';
import {mapMutations, mapState} from 'vuex' 
export default {
    name: 'question',
    computed: mapState(['questions','count','totalPoint']),
    // mounted() {
     
    //   let recaptchaScript = document.createElement('script')
    //   recaptchaScript.setAttribute('src', 'https://cdn.rawgit.com/t4t5/sweetalert/v0.2.0/lib/sweet-alert.min.js')
    //   document.head.appendChild(recaptchaScript)
    
    // },
    methods:{
        ...mapMutations(['TOTAL_POINT','STOP_GAME']),  
        showDelete (evt) {
        let el = evt.target
        if(this.$store.state.questions[this.$store.state.count].choose
         == this.$store.state.questions[this.$store.state.count].correct){
             // hiện đáp án đúng
                {
                    setTimeout(() => {
                    el.classList.add('true') 
                }, 2000)
                setTimeout(() => {       
                 alert("Đúng rồi !", {
                    className: "acb",
                })
                     this.$store.state.count  =  this.$store.state.count + 1                          
                },3000)
                }
        }
        //hiện đáp án sai
                else {
                    setTimeout(() => {
                    el.classList.add('false')
                    swal('Sai rồi !', 'đán án : ' + this.$store.state.questions[this.$store.state.count].answer[this.$store.state.questions[this.$store.state.count].correct])
                   
                }, 2000)
                setTimeout(() => {
                    
                     location.reload()
                },5000)
                }
      },
    } 
 }   
</script>

<style scoped>

.question h1 {

    border-radius:50px;
    background: darkblue;
    color: white;
    line-height: 100px;
    width: 80%;
    height: 160px;
    padding: 30px;
    margin: 120px auto ;
    
    
}

@media (hover: hover) {
 
    .question li:hover {
    background: green;
    cursor: pointer;
} 
}
.isCorrect {
    background: rgb(190, 190, 30);

}
.question .choosed {
    background: rgb(118, 150, 56);
}
.question .true {
    background: rgb(125, 226, 43);
}
.question .false {
    background: red;
}

.question  li  {

    display: inline-block;
    color: white;
    background: rgb(131, 36, 199);
    vertical-align:top;
    height: 60px;
    width: 32%;
    margin: 20px 20px;
    font-size: 23px;
    border-radius: 15px;
    border:  2px solid white;  
    line-height: 60px;
    list-style: none;
    


}

.correct {
    background: rgb(51, 25, 6);
}
.swal-modal {
  background-color: rgba(63,255,106,0.69);
  border: 3px solid white;
}

@media (max-width: 1600px) {

.question h1 {

    border-radius:40px;
    background: rgb(29, 29, 165);
    color: white;
    line-height: 80px;
    font-size: 25px;
    width:70%;
    height: 160px;
    padding: 30px;
    margin: 20px auto;
    
  
}
.question li  {
    line-height: 50px;
    text-align: center;
    font-size: 25px;
    height:50px;
    width: 350px;
    border-radius: 10px;
    border:  2px solid white; 

}
}
@media (max-width: 900px) {
    .question h1 {

    border-radius:20px;
    background: rgb(29, 29, 165);
    color: white;
    line-height: 20px;
    font-size: 14px;
    width:80%;
    height: 60px;
    padding: 10px;
    margin: 2px auto;
    
  
}
.question li  {
    display: inline-block;
    text-align: center;
    height: 28px;
    width: 150px;
    border-radius: 10px;
    border:  2px solid white; 
    font-size: 15px;
    line-height: 28px;
    text-decoration: none;
    list-style: none;
    margin: 10px;

}

}

 @media (min-width: 900px) and (max-width: 1100px) { 
     .question li  {
    display: inline-block;
    text-align: center;
    height:50px;
    width: 220px;
    border-radius: 10px;
    border:  2px solid white; 
    font-size: 22px;
    line-height: 50px;
    text-decoration: none;
    list-style: none;

}

 }
  @media (min-width: 1100px) and (max-width: 1400px) { 
     .question li  {
    display: inline-block;
    text-align: center;
    height:50px;
    width: 320px;
    border-radius: 10px;
    border:  2px solid white; 
    font-size: 22px;
    line-height: 50px;
    text-decoration: none;
    list-style: none;
    margin: 10px 20px;

}
  }
</style>