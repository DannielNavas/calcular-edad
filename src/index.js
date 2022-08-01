let inputName = document.getElementById("name");
let button = document.getElementById("submit");
let result = document.getElementById("result");
function getName() {
    console.log(inputName.value);
    // if (inputName.value !== "") {
    //     result.innerHTML = `
    // <h1>Hello ${inputName.value}</h1>`;
    // } else {
    //     result.innerHTML = `
    // <p style="color: red">Este campo es obligatorio</p>`;
    // }
    let age = getAgeUser(inputName.value);
    let mayorEdad = usuarioMayorEdad(age);
    result.innerHTML = `La fecha es: ${mayorEdad}`;
}

function getAgeUser(fechadeNacimientoUsuario) {
    let result = moment(fechadeNacimientoUsuario)
        .add(1, "days")
        .format("DD/MM/YYYY");
    return result;
}
function usuarioMayorEdad(edadUsuario) {
    return "si";
}
