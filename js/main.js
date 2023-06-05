setInterval(() => {
  const graduationTime = new Date('6/21/2023');
  const startExamTime = new Date('5/29/2023');
  const endExamTime = new Date('6/13/2023');
  const currentDate = new Date();

  let timeForGrad = graduationTime.getTime() - currentDate.getTime();
  let timeForStart = startExamTime.getTime() - currentDate.getTime();
  let timeForEnd = endExamTime.getTime() - currentDate.getTime();
  let messages = {
    beforeStart: `
      <div class="message h1">
      يلا عشان تخلص امتحانات بقا 
  </div>
  <div class="time h3">
  ${Math.floor(timeForStart / (30 * 24 * 60 * 60 * 1000))} M : ${Math.floor((timeForStart / (24 * 60 * 60 * 1000)))} D : ${Math.floor((timeForStart / (60 * 60 * 1000)) % 24)} H : ${Math.floor((timeForStart / (1000 * 60)) % 60)} M : ${Math.floor((timeForStart / 1000) % 60)} S 
  (total => ${Math.floor(timeForStart / (24 * 60 * 60 * 1000))} Days)</div>
      `,
    beforeEnd: `
      <div class="message h1">
      &#129396 &#128543; &#128543;&#128543; فاضل دول عشان تخلص امتحانات خليك جدع وكمل
  </div>
  <div class="time h3">
  ${Math.floor(timeForEnd / (30 * 24 * 60 * 60 * 1000))} M : ${Math.floor((timeForEnd / (24 * 60 * 60 * 1000)))} D : ${Math.floor((timeForEnd / (60 * 60 * 1000)) % 24)} H : ${Math.floor((timeForEnd / (1000 * 60)) % 60)} M : ${Math.floor((timeForEnd / 1000) % 60)} S 
  (total => ${Math.floor(timeForEnd / (24 * 60 * 60 * 1000))} Days)</div>
  `,
    beforeGrad: `
      <div class="message h1">
      خلص مشروعك يلا
  </div>
  <div class="time h3">
  ${Math.floor(timeForGrad / (30 * 24 * 60 * 60 * 1000))} M : ${Math.floor((timeForGrad / (24 * 60 * 60 * 1000)))  % 30} D : ${Math.floor((timeForGrad / (60 * 60 * 1000)) % 24)} H : ${Math.floor((timeForGrad / (1000 * 60)) % 60)} M : ${Math.floor((timeForGrad / 1000) % 60)} S 
  (total => ${Math.floor(timeForGrad / (24 * 60 * 60 * 1000))} Days)</div>
  `,
    graduated: `
  <div class="h1">
  يولا يا يخريييييج
  </div>
  `
  }


  if (timeForStart > 0) {
    document.getElementById('before-exam').innerHTML = messages.beforeStart
  } else if (timeForEnd > 0) {
    document.getElementById('before-exam').innerHTML = messages.beforeEnd
    document.getElementById('after-exam').innerHTML = messages.beforeGrad

  }
  else if (timeForGrad > 0) {
    document.getElementById('after-exam').innerHTML = `<h2>&#128131;&#128131;&#128131;&#128131; خلصنا امتحاناااااااااااااااااااااااااااااااات</h2> `
    document.getElementById('before-exam').innerHTML = messages.beforeGrad
  }else{
    document.getElementById('before-exam').innerHTML = messages.graduated

  }
}, 1000);


