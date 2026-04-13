function show_img1(){
    document.querySelector(".img1").style.visibility="visible"
    document.querySelector(".img2").style.visibility="hidden"
    document.querySelector(".img3").style.visibility="hidden"
}
function show_img2(){
    document.querySelector(".img2").style.visibility="visible"
    document.querySelector(".img1").style.visibility="hidden"
    document.querySelector(".img3").style.visibility="hidden"
}
function show_img3(){
    document.querySelector(".img3").style.visibility="visible"
    document.querySelector(".img1").style.visibility="hidden"
    document.querySelector(".img2").style.visibility="hidden"
}