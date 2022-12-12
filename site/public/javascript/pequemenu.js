let pato=document.getElementById('menu')
let paro=document.getElementById('menuPequeño')
pato.addEventListener('click',(e) => {
   
   if(paro.style.display=="none"){
    paro.style.display="flex"
   }else{
    paro.style.display="none"
   }
   
})