document.addEventListener('DOMContentLoaded',()=>{

//더보기
const list = document.querySelectorAll('.list>li')
const listText = document.querySelectorAll('.list>li>ul')
const listArrow = document.querySelectorAll('.list>li>div>span:last-child')

// if(list.clientHeight>listText.clientHeight){
//         for(let i=0; i<list.length; i++){
//         list[i].addEventListener('click',function(){
//             listText[i].style.height='auto'
//             listArrow[i].style.transform='rotate(90deg)'
//         });

//     }
// }

    let z=1;
    for(let i=0; i<list.length; i++){
    list[i].addEventListener('click',function(){

        if(z==1){
            listText[i].style.maxHeight='500px'
            listArrow[i].style.transform='rotate(90deg)'
            z++;
        }else if(z==2){
            listText[i].style.maxHeight='0'
            listArrow[i].style.transform='rotate(0)'
            z=1;
        }
    // if(list[i].clientHeight>listText[i].clientHeight){
    //     listText[i].style.height='auto'
    //     listArrow[i].style.transform='rotate(90deg)'
    // }else if(100<listText[i].clientHeight){
    //         listText[i].style.height='0'
    //         listArrow[i].style.transform='rotate(0)'
    //     }
    })
    }





























})//end