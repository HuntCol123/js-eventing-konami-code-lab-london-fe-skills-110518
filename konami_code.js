const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  let index =0;  
  // Write your JavaScript code inside the init() function
  function onKeyDownHandler (e) {
    console.log(e);
    const key = parseInt(e.detail || e.which);
    console.log(key);
    
    if (key ===code[0]){
      index++;
    }
  }
  
  
  document.body.addEventListener('keydown', onKeyDownHandler)
  
  
}

init();




// desired order: 38, 38, 40, 40, 37, 39, 37, 39, 66, 65