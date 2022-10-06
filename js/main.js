const hexCInput=document.getElementById('hexCInp');
const rcInput=document.getElementById('RCInput');
const gcInput=document.getElementById('GCInput');
const bcInput=document.getElementById('BCInput');
const rrInput=document.getElementById('RrInput');
const grInput=document.getElementById('GrInput');
const brInput=document.getElementById('BrInput');
const hexInput=document.getElementById('hexInput');
const rInput=document.getElementById('RInput');
const gInput=document.getElementById('GInput');
const bInput=document.getElementById('BInput');
const inArr=Array.from(document.querySelectorAll('#rgbThexGO input'));


const hexCOut =document.getElementById('hexCOut');
const rgbCOut=document.getElementById('rgbCOut');
const rangeColBox=document.getElementById('range-color-box');
const colorBox=document.getElementById('color-box');
const rgbColBox=document.getElementById('rgb-color-box');
const randomVal=document.getElementById('randomValuePara')


function randompickerbtn() {
  const num='0123456789abcdef';
    let color="#";
    for(let i=0; i<6; i++){
        color=color+num[Math.floor(Math.random()*16)];
    };
    randomVal.textContent=color;
}

function hexFindbtn() {
  const hex=hexInput.value;
  colorBox.style.backgroundColor=hex;
}

function RGBFindbtn() {
  const r=rInput.value;
  const g=gInput.value;
  const b=bInput.value;
  const color=`rgb(${r}, ${g}, ${b})`;
  rgbColBox.style.backgroundColor=color;
}

function RangeSelector() {
  const r=rrInput.value;
  const g=grInput.value;
  const b=brInput.value;
  const color=`rgb(${r}, ${g}, ${b})`;
  console.log(color);
  rangeColBox.style.backgroundColor=color;
}

function hexConvbtn() {
 const hexVal=hexCInput.value;
 const r=parseInt(hexVal.slice(0, 2), 16);
 const g=parseInt(hexVal.slice(2, 4), 16);
 const b=parseInt(hexVal.slice(4, 6), 16);
 const reg=/[0-9A-Fa-f]{6}/g;
  if(reg.test(hexVal) && hexVal.length==6){
    hexCOut.textContent=`rgb(${r}, ${g}, ${b})`;
  }else{
    hexCOut.textContent='Enter a valid 6 digit HexCode';
  }

 hexCInput.addEventListener('focus',()=>{
    hexCInput.value="";
    hexCOut.textContent="";
  })
}

function rgbConvbtn() { 
let r=(+rcInput.value).toString(16);
let g=(+gcInput.value).toString(16);
let b=(+bcInput.value).toString(16);

r = r.length==1? '0'+r : r;
g = g.length==1? '0'+g : g;
b = b.length==1? '0'+b : b;

rgbCOut.textContent=`#${r}${g}${b}`;

inArr.forEach((el)=>{
  el.addEventListener('focus', ()=>{
    rgbCOut.textContent='';
  })
})
  
}
