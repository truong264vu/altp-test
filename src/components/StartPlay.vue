
<template>
  <div id="start">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <!-- <div class="tutorial">
          <p>Chúng tôi có tất cả 15 câu hỏi .<br>
          Bạn có : <br>
          - 30 giây để trả lời mỗi câu hỏi <br>
                    - 2 quyền trợ giúp <br>
                   - 1 quyền dừng chơi</p>
      </div> -->
      <div class="startGame">
            <input type="submit" id="OnStart" value="Bắt đầu" @mousedown.once="hideScreenStart()">         
      </div>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'
export default {
    name: 'StartPlay',
    // computed: mapGetters(['TIME_OUT']),
    methods: {
        hideScreenStart() {
            document.getElementById("OnStart").onclick = function () {
                document.getElementById("start").style.display = 'none';
            };      
          
        },
        timeOut() 
              {
                  
                setInterval(() => {
                    this.$store.state.questions[this.$store.state.count].timeAnswer--;
                    if(this.$store.state.questions[this.$store.state.count].timeAnswer <= 0){
                        location.reload()
                        alert('Hết thời gian')         
                    }
                    if( this.$store.state.questions[this.$store.state.count].timeAnswer < 10 ) 
                    this.$store.state.questions[this.$store.state.count].timeAnswer
                    = '0' + this.$store.state.questions[this.$store.state.count].timeAnswer;
                },1000)
              }
            
                
    }
        
    
}
</script>

<style scoped>
    #start .startGame {
         width: 1890px;
          height: 880px;
        background: url(../../images/dolar.jpg) no-repeat ;
        background-size: 100% 100%;
    }
    .hide{
        display: none;
    }
    #start .startGame input {
          position: absolute;
          font-size: 30px;
          background: rgb(69, 138, 218);
          color: rgb(231, 245, 244);
          left: 42%;
          top: 46%;
          height: 100px;
          width: 15%;
          border: 5px solid rgb(235, 232, 238);
          border-radius:40px ;
          font-weight: 1000;
    }
    #start .startGame input:hover {

        background: rgb(43, 101, 167);
        cursor: pointer;
    }

    @media (max-width: 1600px) {


    #start .startGame {
        width: 1600px;
        height: 880px;
        background: url(../../images/dolar.jpg) no-repeat ;
        background-size: 100% 100%;
    }
        #start .startGame input {
          left: 42%;
          top: 60%;
          height: 90px;
          width: 15%;
          border: 3px solid blueviolet;
          border-radius:40px ;
    }
    }

    @media (max-width: 1400px) {


    #start .startGame {
        width: 1400px;
        height: 880px;
        background: url(../../images/dolar.jpg) no-repeat ;
        background-size: 100% 100%;
    }
        #start .startGame input {
          left: 42%;
          top: 60%;
          height: 90px;
          width: 14%;
          border: 3px solid blueviolet;
          border-radius:40px ;
    }
    }

    @media (min-width: 900px) and (max-width: 1100px) {

    #start .startGame {
        width: 1100px;
        height: 880px;
        background: url(../../images/dolar.jpg) no-repeat ;
        background-size: 100% 100%;
    }
        #start .startGame input {
          left: 40%;
          top: 60%;
          height: 90px;
          width: 20%;
          border: 3px solid blueviolet;
          border-radius:40px ;
    }
    }

    @media (max-width: 900px) {
    /* #start {
                transform: rotate(90deg);
    } */

    #start .startGame { 
        margin-left: 464px;
        width: 764px;
        height: 354px;
        background: url(../../images/dolar.jpg) no-repeat ;
        background-size: 790px auto;

    }
        #start .startGame input {
          left: 60%;
          top: 70%;
          height: 70px;
          width: 20%;
          border: 3px solid blueviolet;
          border-radius:40px ;
          background: rgb(83, 59, 187);
    }
    }

</style>
