function banner(){
    let p= document.querySelector('imgb')
    if(p="/img/imghome/18.png"){
        document.querySelector('imgb').src="image2.jpg"
    }else{
        document.querySelector('imgb').src="/img/imghome/18.png"
    }
}


setInterval(cambio(),3000)
