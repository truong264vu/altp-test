import Vuex from 'vuex'
import Vue from 'vue'
// import helpQuestion from './modules/help'
// import  questionModules from './modules/question'

Vue.use(Vuex)

const storeData = {
        state: {
            // timeAnswer: 11 ,
            totalPoint: 30,
            count:11,
            questions : [
               {
                   question : 'Việt Nam nằm ở châu lục nào? ',
                   answer: ['A. Châu á' , 'B. Châu Âu ', 'C. Châu Mỹ', 'D. Châu Phi'],
                   point: '100' ,
                   correct: 0 ,
                   help: 'A' ,
                   choose: null,
                   timeAnswer: 30 ,

               },
               {
                   question : 'Từ ngữ nào dưới đây không mang nghĩa “thuốc chữa bệnh”?',
                   answer: ['A. Thuốc kháng sinh' , 'B. Thuốc ho', 'C. Thuốc tẩy giun', 'D. Thuốc lào'],
                   point: '200' ,
                   correct: 3,
                   help: 'D' ,
                   choose: null,
                   timeAnswer: 30 ,

    
               },
               {
                   question : 'Ngôn ngữ nào được nhiều quốc gia sử dụng chính thức nhất ?',
                   answer: ['A. Tiếng Anh','B. Tiếng Đức', 'C. Tiếng Tây Ban Nha','D. Tiếng Pháp,'],
                   point: '300' ,
                   correct: 2,
                   help: 'C' ,
                   choose: null,
                   timeAnswer: 30 
    
               },
               {
                   question : 'Việt Nam có bao nhiêu tỉnh?',
                   answer: [ 'A. 62', 'B. 61', 'C. 63', 'D. 64'],
                   point: '500' ,
                   correct: 2 ,
                   help: 'C' ,
                   choose: null,
                   timeAnswer: 30 
               },
               {
                question : 'Loại vitamin nào mà cơ thể con người có thể tự tổng hợp được nhờ ánh sáng Mặt Trời? ',
                answer: ['A. Vitamin A' , 'B. Vitamin B', 'C. Vitamin C', 'D. Vitamin D'],
                point: '1000' ,
                correct: '3',
                help: 'D' ,
                choose: null,
                timeAnswer: 30 
 
            },
            {
                question : 'Đâu là tên một loại chợ?',
                answer: ['A. Ếch' , 'B. Cóc', 'C. Nhái', 'D. Thằn lằn'],
                point: '2000',
                correct: 1,
                help: 'B' ,
                choose: null,
                timeAnswer: 30 
 
            },
            {
                question : 'khi gặp Thúy Kiều , Kim Trọng trao cho vật gì làm tin ?',
                answer: ['A. Dải yếm' , 'B. Miếng Lụa', 'C. Chiếc châm cài tóc', 'D. Chiếc khăn hồng'],
                point: '3000' ,
                correct: 3,
                help: 'D' ,
                choose: null,
                timeAnswer: 30 
 
            },
            {
                question : 'Loại nước giải khát nào chứa Canxi và Sắt?',
                answer: ['A. CoCa' , 'B. Pepsi', 'C. Cafe', 'D. Sinh tố'],
                point: '8000' ,
                correct: 2,
                help: 'C',
                choose: null,
                timeAnswer: 30 
 
            },
            {
                question : 'Vào lúc nửa đêm đồng hồ bất chợt gõ 13 tiếng, chuyện gì xảy ra?',
                answer: ['A. Có ma' , 'B. Chuyện xấu sẽ đến', 'C. Ngày tận thế', 'D. Mang đồng hồ đi sửa'],
                point: '16,000' ,
                correct: 3,
                help: 'D',
                choose: null,
                timeAnswer: 30 
 
            },
            {
                question : 'Việt Nam có bao nhiêu di sản văn hóa thế giới ?',
                answer: ['A. 6 di sản' , 'B. 7 di sản', 'C. 8 di sản', 'D. 9 di sản'],
                point: '32,000' ,
                correct: 1,
                help: 'B' ,
                choose: null,
                timeAnswer: 30 
 
            },
            {
                question : 'Trong 10 năm liên tiếp bất kì, có thể có tối đa bao nhiêu ngày?',
                answer: ['A. 3651' , 'B. 3652', 'C. 3653', 'D. 3654'],
                point: '64,000' ,
                correct: 3,
                help: 'D' ,
                choose: null,
                timeAnswer: 30 
 
            },
            {
                question : 'Theo thần thoại, loài vật nào có khả năng hồi sinh từ đống tro tàn?',
                answer: ['A.Phượng Hoàng' , 'B.Sư Tử', 'C.Ba Ba', 'D.Thuồng Luồng'],
                point: '125,000',
                correct: 0,
                help: '0' ,
                choose: null,
                timeAnswer: 30 
 
            },
            {
                question : 'Viên là thủ đô của nước nào?',
                answer: ['A.Pháp' , 'B.Áo', 'C.Ý', 'D.Nga'],
                point: '250,000' ,
                correct: 1,
                help: 'B' ,
                choose: null,
                timeAnswer: 30 
 
            },
            {
                question : 'Tìm số tiếp theo của dãy sau: 5 25 29 85 89 ?',
                answer: ['  A.146' , 'B.145', 'C.144', 'D.147'],
                point: '500,000' ,
                correct: 1,
                help: 'B' ,
                choose: null,
                timeAnswer: 30 
 
            },
            {
                question : 'Haiku là thể thơ truyền thống của nước nào?',
                answer: ['A. Nhật Bản' , 'B. Mông Cổ', 'C. Trung Quốc', ' D. Hàn Quốc'],
                point: '1,000,000' ,
                correct: 0,
                help: 'A' ,
                choose: null,
                timeAnswer: 30 
 
            },
           ]
        },
        getters: {
            // diem tren navbar
            TOTAL(state) { 
                     if(state.questions[state.count].choose == state.questions[state.count].correct){
                             setTimeout(() => {
                               state.totalPoint = state.questions[state.count].point 
                                return state.totalPoint ;
                             }, 3000);}
            },
            
        
        
          
            
        
    
    
    },


        mutations: {
            
            COUNT_UP(state)  {
                    state.count = state.count + 1;
            },
            COUNT_DOWN(state)  {
                state.count = state.count - 1;
                
            },           
            HELP_100(state) {
                
                if(state.questions[state.count].correct == 0){
                    state.questions[state.count].answer  = state.questions[state.count].answer.filter( (answerIndex)  => {
                        return answerIndex[0] == state.questions[state.count].help })
                        console.log((state.questions[state.count].answer).splice(1,0,'','',''))
                                     
                }              
                else if(state.questions[state.count].correct == 1){
                        state.questions[state.count].answer  = state.questions[state.count].answer.filter( (answerIndex)  => {
                            return answerIndex[0] == state.questions[state.count].help })
                            console.log((state.questions[state.count].answer).splice(0 ,0,'') 
                                    && (state.questions[state.count].answer).splice(2 ,0,'',''))
                         }
                else if(state.questions[state.count].correct == 2) {
                           state.questions[state.count].answer  = state.questions[state.count].answer.filter( (answerIndex)  => {
                                return answerIndex[0] == state.questions[state.count].help })
                                    console.log((state.questions[state.count].answer).splice(0 ,0,'','') 
                                    && (state.questions[state.count].answer).splice(3 ,0,''))
                                }
                else {
                    state.questions[state.count].answer  = state.questions[state.count].answer.filter( (answerIndex)  => {
                        return answerIndex[0] == state.questions[state.count].help })
                            console.log((state.questions[state.count].answer).splice(0 ,0,'','','') )
                }
                
              },
            HELP_50(state,RanDom,addAnswer) {
                addAnswer = state.questions[state.count].answer.filter( (answerIndex)  => {
                    return answerIndex[0] !== state.questions[state.count].help })
                    console.log(addAnswer)
                RanDom =  Math.floor(Math.random() * 3)
                //cau1
                //lay ra dap an sai => lay ra chu so dau tien cua dap an , sap xep dap an vao tung o cho dung vi tri khi bi hien len .
                // RanDom dung de check vi tri va sap xep no dung vi tri
                if(state.questions[state.count].correct == 0){
                    state.questions[state.count].answer  = state.questions[state.count].answer.filter( (answerIndex)  => {
                        return answerIndex[0] == state.questions[state.count].help })
                        if(RanDom == 0) {
                            console.log((state.questions[state.count].answer).splice(1,0,addAnswer[0],'','') && (RanDom)) //phai goi de khai bao RanDom
                        }
                        else if(RanDom == 1) {
                            console.log((state.questions[state.count].answer).splice(1,0,'',addAnswer[1],'') && (RanDom)) 
                        }
                        else if(RanDom == 2) {
                            console.log((state.questions[state.count].answer).splice(1,0,'','',addAnswer[2]) && (RanDom)) 
                        }
                        
                         
                        
                }   
                //cau2
                else if(state.questions[state.count].correct == 1){
                    state.questions[state.count].answer  = state.questions[state.count].answer.filter( (answerIndex)  => {
                        return answerIndex[0] == state.questions[state.count].help })
                            if(RanDom == 0) {
                                console.log((state.questions[state.count].answer).splice(0 ,0,addAnswer[0]) 
                                && (state.questions[state.count].answer).splice(2 ,0,'','') && (RanDom))
                            }
                            else if(RanDom == 1) {
                                console.log((state.questions[state.count].answer).splice(0 ,0,'') 
                                && (state.questions[state.count].answer).splice(2 ,0,addAnswer[1],'') && (RanDom)) 
                            }
                            else if(RanDom == 2) {
                                console.log((state.questions[state.count].answer).splice(0 ,0,'') 
                                && (state.questions[state.count].answer).splice(2 ,0,'',addAnswer[2]) && (RanDom))
                            }
                     }
                     //cau3
                else if(state.questions[state.count].correct == 2) {
                       state.questions[state.count].answer  = state.questions[state.count].answer.filter( (answerIndex)  => {
                            return answerIndex[0] == state.questions[state.count].help })
                            if(RanDom == 0) {
                                console.log((state.questions[state.count].answer).splice(0 ,0,addAnswer[0],'') 
                                && (state.questions[state.count].answer).splice(3 ,0,'') && (RanDom))
                            }
                            else if(RanDom == 1) {
                                console.log((state.questions[state.count].answer).splice(0 ,0,'',addAnswer[1]) 
                                && (state.questions[state.count].answer).splice(3 ,0,'') && (RanDom))
                            }
                            else if(RanDom == 2) {
                                console.log((state.questions[state.count].answer).splice(0 ,0,'','') 
                                && (state.questions[state.count].answer).splice(3 ,0,addAnswer[2]) && (RanDom))
                            }
                        }
                else {
                state.questions[state.count].answer  = state.questions[state.count].answer.filter( (answerIndex)  => {
                    return answerIndex[0] == state.questions[state.count].help })
                    if(RanDom == 0) {
                        console.log((state.questions[state.count].answer).splice(0 ,0,addAnswer[0],'','') )
                    }
                    else if(RanDom == 1) {
                        console.log((state.questions[state.count].answer).splice(0 ,0,'',addAnswer[1],'') )
                    }
                    else if(RanDom == 2) {
                        console.log((state.questions[state.count].answer).splice(0 ,0,'','',addAnswer[2]) )
                    }
    
            }
            
              },

          
            STOP_GAME(state) {
                state.totalPoint
                alert('Bạn sẽ ra về với số tiền là $' + state.totalPoint )
                location.reload()
            }
                    
                   
                      
            //     }
            //     else{
            //         console.log('a')
            //     }
                    
            // },
            // isActive: questions[count].choose == index,
            //     NotisActive: questions[count].choose !== index ,
            //     isCorrect: questions[count].choose == index && questions[count].correct == index ,
            //     notIsCorrect: questions[count].choose == index && questions[count].correct !== index ,
            // CHECK_ANSWER(state,evt) {
            //     state.questions[state.count].answer = state.questions[state.count].answer.map((answer1)=>{
            //         let el = evt.target
            //         if(answer1[0] == state.questions[state.count].help){                      
            //                     setTimeout(() => {
            //                     el.classList.remove('show-delete')
            //                     }, 3000)
            //                 }
            //                 return state.questions[state.count].answer;
                    
            //     })
            // }
                
        }
}
            
    


const store = new Vuex.Store(storeData)
export default store