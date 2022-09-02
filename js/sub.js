document.addEventListener('DOMContentLoaded',()=>{
    
    const mouseOver = document.querySelectorAll('.rank_title')
    let rankWrapImges = document.querySelectorAll('.rank_under_wrap')
    let rankImgShow = document.querySelectorAll('.rank_lefimg')
    //let rankImgShow = document.querySelectorAll('.rank_img_show')
    
    const color01s = document.querySelectorAll('.color-01');
    const colorBlack = document.querySelectorAll('.colorBlack');
    const color02s = document.querySelectorAll('.color-02');
    const color03s = document.querySelectorAll('.color-03');
    const color04s = document.querySelectorAll('.color-04');
    const color05s = document.querySelectorAll('.color-05');
    const productImgs = document.querySelectorAll('.product ')                                                                                                                                                                                                                                                                                                                                                                                              
    const productFlex = document.querySelectorAll('.product_sub_imgs .select > div ')                                                                                                                                                                                                                                                                                                                                                                                              
    //const productImg = document.querySelector('.product ')                                                                                                                                                                                                                                                                                                                                                                                              
    const text = document.querySelectorAll('.product_text')                                                                                                                                                                                                                                                                                                                                                                                              


    color01s.forEach(function(color01, index){
    color01.addEventListener('mouseover',function(){
        productImgs[index].src = productImgs[index].src.replace('_02.jpg','_01.jpg')
    })
    color01.addEventListener('mouseout',function(){
        productImgs[index].src = productImgs[index].src.replace('_01.jpg','_02.jpg')
    })
    })
    color02s.forEach(function(color02, index){
    color02.addEventListener('mouseover',function(){
        productImgs[index].src = productImgs[index].src.replace('_02.jpg','_02.jpg')
    })
    color02.addEventListener('mouseout',function(){
        productImgs[index].src = productImgs[index].src.replace('_02.jpg','_02.jpg')
    })
    })
    color03s.forEach(function(color03, index){
    color03.addEventListener('mouseover',function(){
        productImgs[index].src = productImgs[index].src.replace('_02.jpg','_03.jpg')
    })
    color03.addEventListener('mouseout',function(){
        productImgs[index].src = productImgs[index].src.replace('_03.jpg','_02.jpg')
    })
    })
    color04s.forEach(function(color04, index){
    color04.addEventListener('mouseover',function(){
        productImgs[index].src = productImgs[index].src.replace('_02.jpg','_04.jpg')
    })
    color04.addEventListener('mouseout',function(){
        productImgs[index].src = productImgs[index].src.replace('_04.jpg','_02.jpg')
    })
    })
    color05s.forEach(function(color05, index){
    color05.addEventListener('mouseover',function(){
        productImgs[index].src = productImgs[index].src.replace('_02.jpg','_05.jpg')
    })
    color05.addEventListener('mouseout',function(){
        productImgs[index].src = productImgs[index].src.replace('_05.jpg','_02.jpg')
    })
    })

   

   
    
const wrapSkip = document.querySelector('#wrap_size')
const wrapAll = document.querySelector('#wrap_all')
const prImgs = document.querySelectorAll('.pr')    
const productImg = document.querySelector('img.product ')    
const explane = document.querySelectorAll('.none')

var selectSecond = document.querySelector('.on_1');
var selectThird = document.querySelector('.on_2');
//let i =1;
    wrapSkip.addEventListener("click",function(){
            for(let i=0; i<prImgs.length;i++ ){
                
                prImgs[i].style.width = "270.8px";
                prImgs[i].style.height = "270.8px";
                prImgs[i].style.overflow = "hidden";
                wrapSkip.style.display = "none";
                wrapAll.style.display = "flex";
            }
            
            for(let i=0; i<prImgs.length;i++ ){
            prImgs[i].addEventListener('mouseover',function(){
                explane[i].style.display='block'
            })
            }
            for(let i=0; i<prImgs.length;i++ ){
            prImgs[i].addEventListener('mouseout',function(){
                explane[i].style.display='none'
            })
            }
            
    })
    wrapAll.addEventListener("click",function(){
            for(let i=0; i<prImgs.length; i++ ){ 
            prImgs[i].style.width = "338px";
            prImgs[i].style.height = "420px";

            wrapAll.style.display = "none";
            wrapSkip.style.display = "flex";
        
                }
            for(let i=0; i<prImgs.length;i++ ){
            prImgs[i].addEventListener('mouseover',function(){
                explane[i].style.display='none'
            })
        }
            
    })

    window.addEventListener('scroll', () => { 
        console.log(window.scrollX, window.scrollY);
    });


   
const category = document.querySelectorAll('.categoryImg')
const allSun = document.querySelectorAll('.container .pr')
const cateye = document.querySelectorAll('.container .cateye')
const tint = document.querySelectorAll('.tint')
const sircle = document.querySelectorAll('.sircle')
const squar = document.querySelectorAll(' .squar') 

   
    category[0].addEventListener('click',function(){
        
        for(let pi = 0; pi<allSun.length; pi++){
                allSun[pi].style.display='none'
            allSun[pi].style.display='block'
        }
        
    })
    category[1].addEventListener('click',function(){
        
        for(let pi = 0; pi<allSun.length; pi++){
            allSun[pi].style.display='none'
        }
        for(let pi = 0; pi<cateye.length; pi++){
            cateye[pi].style.display='block'
        }
        
    })
    category[2].addEventListener('click',function(){
        for(let pi = 0; pi<allSun.length; pi++){
            allSun[pi].style.display='none'
        }
        for(let pi = 0; pi<tint.length; pi++){
            tint[pi].style.display='block'
        }
    })
    category[3].addEventListener('click',function(){
        for(let pi = 0; pi<allSun.length; pi++){
            allSun[pi].style.display='none'
        }
        for(let pi = 0; pi<sircle.length; pi++){
            sircle[pi].style.display='block'
        }
    })
    category[4].addEventListener('click',function(){
        for(let pi = 0; pi<allSun.length; pi++){
            allSun[pi].style.display='none'
        }
        for(let pi = 0; pi<squar.length; pi++){
            squar[pi].style.display='block'
        }

    })

    














     


})//end