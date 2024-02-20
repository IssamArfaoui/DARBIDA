

// cancel

let icon = document.getElementById('cancel');
let cancel = document.getElementsByTagName('p')

icon.addEventListener('click',function() {
    cancel[0].style.display='none'
    icon.style.display='none';
})


// T-shirt
//  1
let image1 = document.getElementById('img1');

image1.addEventListener( 'mouseover', function(){
    img1.src = 'images/prd-1/UNIQLO FRa.png';
})
image1.addEventListener( 'mouseout', function(){
    img1.src = 'images/prd-1/UNIQLO FR.png'
})

// 2

let image2 = document.getElementById('img2')
image2.addEventListener( 'mouseover', function(){
    img2.src = 'images/prd-2/hhh2.png'
})
image2.addEventListener( 'mouseout', function(){
    img2.src = 'images/prd-2/hh.png'
})

// 3
let image3 = document.getElementById('img3')

image3.addEventListener( 'mouseover', function(){
    img3.src = 'images/prd-3/dd.png'
})
image3.addEventListener( 'mouseout', function(){
    img3.src = 'images/prd-3/d.png'
})
// 3-1
let image31 = document.getElementById('img31')

image31.addEventListener( 'mouseover', function(){
    image31.src = 'images/prd-3-1/pp.png'
})
image31.addEventListener( 'mouseout', function(){
    image31.src = 'images/prd-3-1/ppp.png'
})

//// Hodies

//  1
let image4 = document.getElementById('img4')
image4.addEventListener( 'mouseover', function(){
    img4.src = 'images/prd-4/22.png'
    
})
image4.addEventListener( 'mouseout', function(){
    img4.src = 'images/prd-4/02.png'
})


// 2
let image5 = document.getElementById('img5')

image5.addEventListener( 'mouseover', function(){
    img5.src = 'images/prd-5/vvv.png'
})
image5.addEventListener( 'mouseout', function(){
    img5.src = 'images/prd-5/dd (1).png'
})


let menu = document.getElementsByClassName('menu') ;
let b = document.getElementsByClassName('b') ;
let span = document.getElementById('span');

menu[0].addEventListener('click',function() {
    if (span.classList.toggle('toggle')) {
        span.style.cssText=`
        display: block;
        transition: .8s;
        `
        b[0].style.cssText=`
        transform: rotate(45deg);
        top: 10px;
        transition: .8s;
        `
        b[1].style.cssText=`
        opacity: 0;
        transition: .8s;
        `
        b[2].style.cssText=`
        transform: rotate(-45deg);
        top: 10px;
        transition: .8s;
        `
    }
    else {
        span.style.cssText=`
        transition: .8s;
        `
        b[1].style.cssText=`
        transition: .8s;
        `
        b[0].style.cssText=`
        transition: .8s;
        `
        b[2].style.cssText=`
        transition: .8s;
        `
    }
})

let link = document.getElementsByClassName('link');
let sub = document.getElementsByClassName('sub');
let sub1 = document.getElementById('sub1');
let sub2 = document.getElementById('sub2');


link[1].addEventListener('click',function() {
    if (link[1].classList.toggle('open')) {
        sub[0].style.cssText=`       
        display :block;
        `
        sub1.style.cssText=`       
        transform: rotate(90deg);
        transition : .3s;
        `
    }
    else {
        sub[0].style.display='';
        sub1.style.cssText=`       
        transition : .3s;
        `
    }
})
link[2].addEventListener('click',function() {
    if (link[2].classList.toggle('open')) {
        sub[1].style.cssText=`       
        display :block;
        `
        sub2.style.cssText=`       
        transform: rotate(90deg);
        transition : .3s;
        `
    }
    else {
        sub[1].style.display='';
        sub2.style.cssText=`       
        transition : .3s;
        `
    }
 
})


















