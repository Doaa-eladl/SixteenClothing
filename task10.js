window.addEventListener("scroll",function(){
    var nav = document.querySelector("nav");
    var scrollingheader=document.querySelector('.mainheader');
    if (window.innerWidth>767){
    scrollingheader.classList.toggle('scrollingheader',window.scrollY>550);
    nav.classList.toggle("scrollingheader", window.scrollY >550);
    console.log('big screen');}
    else {
    scrollingheader.classList.toggle('scrollingheader',window.scrollY>250);
    nav.classList.toggle("scrollingheader", window.scrollY >250);
    console.log('mob screen');
    }
})

var transbutton1 =document.querySelector('.tranzetionbutton1');
var transbutton2 =document.querySelector('.tranzetionbutton2');
var transbutton3 =document.querySelector('.tranzetionbutton3');
var transection =document.querySelector('.introsection');

transbutton1.classList.add('tranzetionbutton1act')

transbutton1.addEventListener('click', () =>{
    transection.classList.remove('background2')
    transection.classList.remove('background3')
    transbutton2.classList.remove('tranzetionbutton2act')
    transbutton3.classList.remove('tranzetionbutton3act')
    transbutton1.classList.add('tranzetionbutton1act')
});

transbutton2.addEventListener('click', () =>{
    var transection =document.querySelector('.introsection');
    transection.classList.add('background2')
    transbutton2.classList.add('tranzetionbutton2act')
    transbutton3.classList.remove('tranzetionbutton3act')
    transbutton1.classList.remove('tranzetionbutton1act')
    transection.classList.remove('background3')
});

transbutton3.addEventListener('click', () =>{
    var transection =document.querySelector('.introsection');
    transection.classList.add('background3')
    transbutton3.classList.add('tranzetionbutton3act')
    transbutton2.classList.remove('tranzetionbutton2act')
    transbutton1.classList.remove('tranzetionbutton1act')
    transection.classList.remove('background2')
    console.log("done")
});

var hamburger=document.querySelector('.hamburger')
var list=document.querySelector('.listmobview')
hamburger.addEventListener('click',() =>{
    list.classList.toggle('show')
    console.log("done")
})

