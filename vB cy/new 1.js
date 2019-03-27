function lol(){

var si= document.querySelector('#spellit')
var go = document.querySelector('#nextword')
var q=document.querySelector('#beedefs > p').innerText
var inp= document.querySelector('#guessWord')

var a = q.replace(/"/g,"").toLowerCase()
inp.value=(text2num(a))
si.click()
go.click()
//localStorage.setItem('po',localStorage.getItem('po')+1)
//if(document.querySelector('#bee_complete').style.visibility!="hidden"){document.querySelector('#bee_complete > div.actions > button').click()}
}

function text2num(a){
//	var cd=5
//if(localStorage.getItem('po')>=150){localStorage.setItem('po',0);return 7878;}
switch(a){
case 'com': return "compromise"; break;
case 'bac': return "bacteria"; break;
case 'dis': return "dispersion"; break;
case 'acc': return "acceptance"; break;
case 'rel': return "relationship"; break;
case 'ref': return 'referral'; break;
case 'sci': return "scientific"; break;
case 'pal': return "palace"; break;
case 'cav': return "cavalry"; break;
case 'dec': return "declaration"; break;



}


}

setInterval(lol,200)
setTimeout(function(){document.querySelector('#bee_complete > div.actions > button').click()},5000)
window.confirm=function(){return true;}
//window.open('javascript:window.confirm= function(){return true;}','_top')
var s = document.createElement('script');
s.innerHTML = "window.confirm= function(){return true;}"
document.body.appendChild(s);
document.body.insertAdjacentHTML('afterbegin','<div id="over" style="background-color: black; color:white; z-index: 999999;display:block;height:100%;top: 0; left: 0;right: 0;bottom: 0;position:fixed"></div>');
document.getElementById('over').innerText=document.getElementsByClassName('points')[0].innerText
document.body.style.display="none"