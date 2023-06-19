const nam=document.querySelector("#CName")
const num=document.querySelector("#CNum")
const mm=document.querySelector("#MM")
const yy=document.querySelector("#YY")
const cvc=document.querySelector("#CVC")
const ER1 = document.querySelector("#holdername")
const ER2 = document.querySelector("#cardnumber")
const ER3 = document.querySelector("#MMYY")
const ER4 = document.querySelector("#CV")
const add = document.querySelector("#before")
const reload=document.querySelector("#after")
const TH =document.querySelector(".thanks")
const log =document.querySelector("#cardinfo")
const newnum=document.createElement("h1")
const newnam=document.createElement("p")
const newmm=document.createElement("p")
const newyy=document.createElement("p")
const newcvc=document.createElement("p")
add.addEventListener("click",() =>  {
holdername()
cardnumber()
MMYY()
CVC()
thank()
chageinfo()
});
reload.addEventListener("click",()=>{
    location.reload()
})

function holdername()
{ER1.style.display="none";
    if (nam.value=="")
    {ER1.style.display="block";}
}
function cardnumber()
{ER2.style.display="none"
    const s=String(num.value);
    const l=s.length;
    if ((num.value=="")||(l!=16))
   { ER2.style.display="block"}
}

function MMYY()
{ER3.style.display="none"
    if((mm.value=="")||(mm.value<=0)||(mm.value>12)||(yy.value=="")||(yy.value<=22)||(yy.value>27))
       {ER3.style.display="block"}
}

function CVC()
{ER4.style.display="none"
    if((cvc.value>=1000)||(cvc.value<100)||(cvc.value==""))
    { ER4.style.display="block"}
}

function thank()
{
holdername()
cardnumber()
MMYY()
CVC()
    if((ER1.style.display!="block")&&(ER2.style.display!="block")&&(ER3.style.display!="block")&&(ER4.style.display!="block"))
   {log.style.display="none"
    TH.style.display="block"}
}

function chageinfo() {
    if (
      ER1.style.display !== "block" &&
      ER2.style.display !== "block" &&
      ER3.style.display !== "block" &&
      ER4.style.display !== "block"
    ) {
      var newNum = document.createElement("h1");
      newNum.textContent = num.value;
      var newName = document.createElement("p");
      newName.textContent = nam.value;
      var newMM = document.createElement("p");
      newMM.classList.add("m");
      newMM.textContent = mm.value;
      var newYY = document.createElement("p");
      newYY.classList.add("y");
      newYY.textContent = yy.value;
      var newCVC = document.createElement("p");
      newCVC.textContent = cvc.value;
  
      var oldNum = document.getElementById("oldNum");
      var oldName = document.getElementById("name");
      var oldMM = document.querySelector(".m");
      var oldYY = document.querySelector(".y");
      var oldCVC = document.getElementById("oldcvc");
  
      oldNum.parentNode.replaceChild(newNum, oldNum);
      oldName.parentNode.replaceChild(newName, oldName);
      oldMM.parentNode.replaceChild(newMM, oldMM);
      oldYY.parentNode.replaceChild(newYY, oldYY);
      oldCVC.parentNode.replaceChild(newCVC, oldCVC);
    }
  }
  