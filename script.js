// Select Elements
let allBtns = document.querySelectorAll('.buttons button');
let results = document.querySelector('.results > span');
let theInput = document.getElementById('ths-input')

allBtns.forEach(btn => {
  btn.addEventListener('click', (e)=> {
    if(e.target.classList.contains("check-item")){
      checkItem();
    }

    if(e.target.classList.contains("add-item")){
      addItem();
    }

    if(e.target.classList.contains("delete-item")){
      deleteItem();
    }

    if(e.target.classList.contains("show-item")){
      showItem();
    }

  });

});
function sowMessageRessults(){
    results.innerHTML = 'Input cant be empty';
}

function checkItem() {
  let valueInput = theInput.value;
  if(valueInput !== ""){
    if(localStorage.getItem(valueInput)){
      results.innerHTML = `Found Local Storage item Called <span>${valueInput}</span>`;
    }else{
      results.innerHTML = `No Local Storage item with the name <span>${valueInput}</span>`;
    }
  }else{
    sowMessageRessults()
  }
  
}

function addItem() {
  let valueInput = theInput.value;
  if(valueInput !== ""){
    localStorage.setItem(valueInput, 'test')
    results.innerHTML = `Local Storage item <span>${valueInput}</span> Added`;
    valueInput =  '';
  }else{  
    sowMessageRessults()
  }
  
}

function deleteItem() {
  let valueInput = theInput.value;
  if(valueInput !== ""){
    if(localStorage.getItem(valueInput)){
      localStorage.removeItem(valueInput);
      results.innerHTML = `Local Storage item Called <span>${valueInput}</span> Deleted`;
      valueInput =  '';
    }else{
      results.innerHTML = `No Local Storage item with the name <span>${valueInput}</span>`;
    }
  }else{  
    sowMessageRessults()
  }
}

function showItem() {
  if(localStorage.length){
    results.innerHTML = '';
    for(let [key,value] of Object.entries(localStorage)) {
      results.innerHTML += `<span class='keys'>${key}</span>`
    }
  }else{  
    results.innerHTML = 'Local Storage Is Empty';
  }
}

