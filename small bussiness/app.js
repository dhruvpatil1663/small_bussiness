

  
  function createShowCaseContent(){
  // create content
  let div = document.createElement('div');
  div.setAttribute('class', 'container-2');
  div.className = 'showcase-text';
  div.style.textAlign = "left";
  div.style.color = "white";
  let span = document.createElement('span');
  span.appendChild(document.createTextNode('creativity and experience'));
  let h2 = document.createElement('h2');
  h2.appendChild(document.createTextNode('Services to grow your bussiness'));
  let button1 = document.createElement('button');
  button1.setAttribute('class', 'purple-btn')
  button1.appendChild(document.createTextNode('Read more'));
  let button2 = document.createElement('button');
  button2.id = "play-btn";
  button2.appendChild(document.createTextNode('Play'));
  button2.style.padding = "20px 40px";
  button2.style.color = "white";
  button2.style.marginLeft = "5px";
  
  //append to div
  div.appendChild(span);
  div.appendChild(h2);
  div.appendChild(button1);
  div.appendChild(button2);
  
  //append div as child of showcase
  document.getElementById('showcase').appendChild(div);
  } 

setTimeout(createShowCaseContent,2000);
