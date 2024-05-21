function formBtn() {
     
    let inputText = document.getElementById('formInput').value;
    let inputText2 = document.getElementById('formInput2').value;
    let inputText3 = document.getElementById('formInput3').value;
    let inputText4 = document.getElementById('formInput4').value;


  
 localStorage.setItem("useName", inputText);
 /*   if(inputText === '' || inputText2 === '' || inputText3 === '' || inputText4 === '')
    {
        alert('Please fill in all input fields')
        
    
    } else {
       window.location.href = "form2.html";
    }*/

    const out = inputText === '' || inputText2 === '' || inputText3 === '' || inputText4 === '' ?  alert('Please fill in all input fields') : window.location.href = "form2.html";

    if(inputText.length > 8) {
        inputText = inputText.slice(0, 8);
        inputText.disabled = true;
        console.log(inputText)
    }
  

}

function formBtn2() {
     
    let inputText = document.getElementById('formInput').value;
    let inputText2 = document.getElementById('formInput2').value;
    let inputText3 = document.getElementById('formInput3').value;
    let inputText4 = document.getElementById('formInput4').value;
   
  console.log(inputText)
   

 /*   if(inputText === '' || inputText2 === '' || inputText3 === '' || inputText4 === '')
    {
        alert('Please fill in all input fields')
        
    
    } else {
       window.location.href = "form2.html";
    }*/

    const out = inputText === '' || inputText2 === '' || inputText3 === '' || inputText4 === '' ?  alert('Please fill in all input fields') : window.location.href = "form3.html";
  
}

function formBtn3() {
     
    let inputText = document.getElementById('formText').value;
    let inputText2 = document.getElementById('formText2').value;
    
  console.log(inputText)
   

  if(inputText === '' || inputText2 === '')
    {
        alert('Please fill in all input fields')
      }    
     else if(inputText !== inputText2) {
        alert('Password doesn\'t match')
  
    } else if (inputText.length < 8 || inputText2.length < 8 ) {
        alert('Paasword must be atleast 8 characters.')
    }
    
    else {
       window.location.href = "support.html";
    }

   
    
}
