document.addEventListener('DOMContentLoaded',()=>{

 

  //reset header cart
  


    const lnb = document.querySelector('.lnb')

    const header =document.querySelector('header')
    const  Dropheader= document.querySelector('.lnb_sub')
    header.addEventListener('mouseover',function(){  
        Dropheader.style.opacity='1';
        Dropheader.style.height='auto';
        Dropheader.style.padding="30px 20px";
        
     })   

    header.addEventListener('mouseout',function(){ 
        Dropheader.style.opacity='1';
        Dropheader.style.height='0px';
         Dropheader.style.padding="0";
    })
   

    const cartBtn= document.querySelector('.cart_btn')
    const closeBtn= document.querySelector('.close_btn')
    var wing = document.querySelector('.wing_banner')
    var cover =document.querySelector('.cover')
   
    cartBtn.addEventListener('click',function(){
        wing.style.right='0px';
        cover.style.backgroundColor='rgba(0, 0, 0, 0.6)';
        cover.style.display='block';
        cover.style.height='500%';
    })
    cartBtn.addEventListener('mouseover',function(){
        Dropheader.style.opacity='1';
        Dropheader.style.height='0px';
         Dropheader.style.padding="0";
    })
    closeBtn.addEventListener('click',function(){
        wing.style.right='-720px';
        cover.style.backgroundColor='rgba(0, 0, 0, 0.0)';
        cover.style.display='none';
    })



})//end