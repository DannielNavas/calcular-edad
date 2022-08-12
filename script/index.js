let date, button, result;

dete = document.getElementById("age");
button = document.getElementById("button");
result = document.getElementById("result");

function userAge (){
    let fechaActual = moment();
    let years = fechaActual.diff(age.value, "years")
    console.log(years)
    if (years < 18){
    
        result.innerHTML = "El usuario tiene " + years + " y es menor de edad";
    }
    else {
        result.innerHTML = "El usuario tiene " + years + " y es mayor de edad";
    }
        
    
}
