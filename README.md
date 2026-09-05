# Delulu

It's just a bookmarklet as a prank turns any webpage into absolute chaos. Makes the page wobble, replaces images with 🗿, adds 🚨 to buttons and links, and displays a fake “YOUR BROWSER HAS BEEN ABSOLUTELY COOKED BY Praneel23o” warning for 3.5 seconds. to end this just reload the page
# steps to use
- Create a bookmark of any website
- Edit it and put
  ```
  javascript:(()=>{if(window.__chaos)return;window.__chaos=1;document.body.style.overflow='hidden';const s=document.createElement('style');s.textContent='*{animation:chaos .35s infinite alternate!important}@keyframes chaos{from{transform:rotate(-2deg) scale(.98)}to{transform:rotate(2deg) scale(1.02)}}';document.head.appendChild(s);document.querySelectorAll('img').forEach(i=>{i.dataset.old=i.src;i.src='data:image/svg+xml,'+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><text x="50%" y="55%" text-anchor="middle" font-size="100">🗿</text></svg>')});document.querySelectorAll('button,a').forEach(e=>{if(e.innerText.trim())e.innerText='🚨 '+e.innerText+' 🚨'});const d=document.createElement('div');d.innerHTML='⚠️ YOUR BROWSER HAS BEEN<br>ABSOLUTELY COOKED BY Praneel23o⚠️';Object.assign(d.style,{position:'fixed',inset:'0',zIndex:'999999',display:'grid',placeItems:'center',background:'#000',color:'#0f0',font:'bold 5vw monospace',textAlign:'center'});document.body.appendChild(d);setTimeout(()=>d.remove(),3500)})()
  ```
- Now click on that bookmark on it,
# Here is a tutorial to help:
https://hackclub.enterprise.slack.com/files/U0BFASPH7CH/F0C0MGLN5CY/screen_recording_2026-09-05_133622.mp4
