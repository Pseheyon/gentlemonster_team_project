    document.addEventListener('DOMContentLoaded',()=>{
    

//    rank

const mouseOver = document.querySelectorAll('.rank_title')
let rankWrapImges = document.querySelectorAll('.rank_under_wrap')
let rankImgShow = document.querySelectorAll('.rank_lefimg')
var  allMouseOver = document.querySelector('.rank')
let rankWrapImge = document.querySelectorAll('.rank_under_wrap')
let rankImg = document.querySelectorAll('.rank_lefimg')

    
//rank
    for(let i=0; i<mouseOver.length;i++ ){
        mouseOver[i].addEventListener("mouseover",function(){
            for(let pi=0; pi<rankWrapImges.length; pi++){
            rankWrapImges[pi].classList.add('hidden')}
            rankWrapImges[i].classList.remove('hidden')
           
            for(let pi=0; pi<rankImgShow.length; pi++){
            rankImgShow[pi].classList.add('hidden')
            }
            rankImgShow[i].classList.remove('hidden')
            rankImgShow[i].classList.add('rank_img_show')        
        })
    }

    // allMouseOver.addEventListener('mouseout',function(){

    //     rankWrapImges[3].classList.remove('hidden');
    //     rankImgShow[3].classList.remove('hidden')

    //     rankWrapImges[3].classList.add('rank_show')
    //     rankImgShow[3].classList.add('rank_img_show')  
    // })
 
      
    //     for(let i=0; i<mouseOver.length;i++ ){
    //     mouseOver[i].addEventListener("mouseout",function(){
    //         rankWrapImges[i].classList.remove('rank_show');
    //         rankImgShow[i].classList.remove('rank_img_show')

    //         rankWrapImges[i].classList.add('hidden');
    //         rankImgShow[i].classList.add('hidden')
   
    //     })
    // }
    

//      collabo
const col =document.querySelectorAll('.col')
let minWidth =document.querySelectorAll('.min')
const colAll =document.querySelector('.collabo_wrap')

var colQuarter = document.querySelectorAll('.collabo_wrap li')

    for(let i=0; i<col.length;i++ ){
        col[i].addEventListener("mouseover",function(){

            minWidth[i].classList.remove('min')
            minWidth[i].classList.add('active')

        })
    }
    colQuarter.forEach(function(col){
    colAll.addEventListener('mouseover',function(){
        col.removeAttribute('style');
    })
    colAll.addEventListener('mouseout',function(){
        col.style.width ='25%';
        
    })

    })

    for(let i=0; i<col.length;i++ ){
        col[i].addEventListener("mouseout",function(){
            minWidth[i].classList.remove('active')
            minWidth[i].classList.add('min')
            
        })
    }


window.addEventListener('scroll', () => { 
    console.log( window.scrollY);
  });

// header

const header = document.querySelector('header')

    window.addEventListener('scroll',function(){
        if(this.scrollY > window.innerHeight/2){
            header.style.backgroundColor ='black'            
        }else if(0 <= this.scrollY >= 100){
            header.style.backgroundColor ='none'          
        }
    })

let move1 = document.querySelector('.move1')
    let move2 = document.querySelector('.move2')
    let see1 = document.querySelectorAll('.see .move1')
    let move3 = document.querySelector('.move3')
    let move4 = document.querySelector('.move4')
    let move6 = document.querySelector('.move6')
    let move7 = document.querySelector('.move7')
    let move8 = document.querySelector('.move8')
    let move9 = document.querySelector('.move9')

    window.addEventListener('load', () => {
        let movething = -252
        let i = 1
        

       setInterval(function () {
            
            setTimeout(function () {
                
                if (i == 1) {
                    move1.style.right = movething + 'px'
                    if(movething == -2016){
                        
                        
                    }
                i++
                }else if (i == 2) {
                    move2.style.right = movething + 'px'
                i++
                }else if (i == 3) {
                    move3.style.bottom = movething + 'px'
                    i++
                }else if (i == 4) {
                    move6.style.bottom = movething + 'px'
                    i++
                }else if (i == 5) {
                    move9.style.left = movething + 'px'
                    i++
                }else if (i == 6) {
                    move8.style.left = movething + 'px'
                    i++
                }else if (i == 7) {
                    move7.style.top = movething + 'px'
                    i++
                }else if (i == 8) {
                    move4.style.top = movething + 'px'
                    movething += -252
                   i=1
                }
               
            }, 800)
                if(movething == -2016){
                    movething = 0
                    i=1
                }
        }, 100)
    })

//setInterval()

    

    

    

















})//end

