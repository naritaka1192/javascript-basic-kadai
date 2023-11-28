const pushBtn= document.getElementById('btn');

pushBtn.addEventListener('click',()=>{

const textBtn=document.getElementById('text');

if(textBtn.textContent=='ボタンをクリックしてください'){
      textBtn.textContent='ボタンをクリックしました';
    }else if(textBtn.textContent=='ボタンをクリックしました'){
      textBtn.textContent='ボタンをクリックしてください';
    }})