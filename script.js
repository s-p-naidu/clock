var date=new Date();
var hoursec=date.getHours()%12*60*60;
var minsec=date.getMinutes()*60;
var sec=date.getSeconds();
var hourdeg=hoursec/120;
var secdeg=sec*6;
var mindeg=minsec/10;
const secframe=document.getElementById("secframe");
const minframe=document.getElementById("minframe");
const hourframe=document.getElementById("hourframe");
const amorpm=document.getElementById('amorpm');
if(date.getHours()>=12)amorpm.innerText="PM";
else amorpm.innerText="AM";

if(secdeg==0)secdeg=360;
if(mindeg==0)mindeg=360;
if(hourdeg==0)hourdeg=360;
createkeyframes(secdeg,secdeg+360,'s');
secframe.style.animation='rotateframes 60s linear infinite';
createkeyframes(mindeg,mindeg+360,'m');
minframe.style.animation='rotateframem 3600s linear infinite';
createkeyframes(hourdeg,hourdeg+360,'h');
hourframe.style.animation='rotateframeh 43200s linear infinite';

function createkeyframes(fromdeg,todeg,specific){
    let keyframes=`
    @keyframes rotateframe${specific}{
       from{
       transform:rotate(${fromdeg}deg);
       }
       to{
       transform:rotate(${todeg}deg);
       }
    }
    `;
    let style=document.createElement('style');
    style.innerHTML=keyframes;
    document.head.appendChild(style);
}

