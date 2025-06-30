const tinh=document.querySelector("#Tinh")
const kotinh=document.querySelector("#KoTinh")
const klg=document.querySelector("#Kolamgi")
const ketqua=document.querySelector("#Ketqua")
const tuoi=document.querySelector("#Tuoi")

tinh.addEventListener("click",function(){
    ketqua.textContent="Tuổi của bạn là: "+tuoi.value;
})
kotinh.addEventListener("click",function(){
    ketqua.textContent="Tôi không biết tuổi của bạn là bao nhiêu";
})
klg.addEventListener("click",function(){
    alert("Tôi không đã không làm gì cả");
})