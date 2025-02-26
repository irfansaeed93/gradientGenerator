let  gradientbox = document.getElementById('gradientbox');
let  generatebtn= document.getElementById('generatebtn');
let copyCode = document.getElementById('copybtn');


// console.log(copyCode);

// event listener for the gradient button

document.getElementById('generatebtn').addEventListener('click', function() {

    let randomColor1 = Math.floor(Math.random()*16777215).toString(16);
    let randomColor2 = Math.floor(Math.random()*16777215).toString(16);


    gradientbox.style.background = `linear-gradient(180deg, #${randomColor1}, #${randomColor2})`;
    document.getElementById('code_input').value = `linear-gradient(180deg, #${randomColor1}, #${randomColor2})`;

});  

 

// event listener for the copy button

document.getElementById('copybtn').addEventListener('click', function(){
    let copyText = document.getElementById("code_input");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
    alert("Copied the text: " + copyText.value);

}); 

