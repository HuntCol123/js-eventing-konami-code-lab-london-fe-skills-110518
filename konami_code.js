const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  let index = 0;  
  // Write your JavaScript code inside the init() function
  function onKeyDownHandler (e) {
    console.log(e);
    const key = parseInt(e.detail || e.which);
    console.log(key);
    
    if (key === code[index]){
      index++;
    
  if (index === alphabet.length) {
      alert("Hurray!");  
    
    index = 0;
  }
    } else {index = 0;}
  
  document.body.addEventListener('keydown', onKeyDownHandler)
  
  
}
}

init();

