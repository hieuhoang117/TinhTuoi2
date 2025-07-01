const tinh=document.querySelector("#Tinh")
const kotinh=document.querySelector("#KoTinh")
const klg=document.querySelector("#Kolamgi")
const ketqua=document.querySelector("#Ketqua")
const tuoi=document.querySelector("#Tuoi")
const lc=document.querySelector("#lloichuc")
const nhanlc=document.querySelector("#nhanloichuc")
const yt=document.querySelector("#yt")



tinh.addEventListener("click",function(){
    ketqua.textContent="Tuổi của bạn là: "+tuoi.value;
})
kotinh.addEventListener("click",function(){
    ketqua.textContent="Tôi không biết tuổi của bạn là bao nhiêu";
})
klg.addEventListener("click",function(){
    alert("Tôi đã không làm gì cả");
})
nhanlc.addEventListener("click",function(){
    const so=Math.floor(Math.random()*4)+1
    if(so==1){
        lc.textContent="Nếu còn sao không nói";
        yt.src="https://www.youtube.com/embed/CJ9qe4fzA18?si=D81rxx0lZWrF4H_0";
        yt.style.visibility="visible";
    }
    else if(so==2){
        lc.textContent="Bạn suốt đời không xứng";
        yt.src="https://www.youtube.com/embed/ghE_M2st53U?si=DrHXFUbkv9Le14-8";
        yt.style.visibility="visible";
    }
    else if(so==3){
        
        lc.textContent="BAKA BAKA BAKA BAKA";
        yt.src="https://www.youtube.com/embed/dcaF4lIeX-I?si=Xn_HLTEGUcZEI76V";
        yt.style.visibility="visible";
    }
    else{
        
        lc.textContent="Đành vậy thôi chứ sao giờ";
        yt.src="https://www.youtube.com/embed/OrDB4jpA1g8?si=gm3ny8ilg1V-fLpI";
        yt.style.visibility="visible";
    }
    
    
})