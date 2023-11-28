const Btn=document.getElementById('btn');

Btn.addEventListener('click',() =>{
  const textBtn=document.getElementById('text');
  if(textBtn.textContent=='ボタンをクリックしてください'){

  setTimeout(()=>{
    textBtn.textContent='ボタンをクリックしました';
  },2000);
  } else {
   setTimeout(()=>{
    textBtn.textContent='ボタンをクリックしてください';
   },2000);
  }
});