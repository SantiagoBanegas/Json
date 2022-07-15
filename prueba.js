// const lista = document.getElementById("lista");

// fetch("./data.json")
// .then((res) => res.json())
// .then((data) => {
//     data.forEach((element) => {
//         const li = document.createElement("li");
//         li.innerHTML = `
//         <h4>${element.nombre}</h4>
//         <p>${element.precio}</p>
//         <p>Talle: ${element.talle}</p>
//         <hr/>
//         `;

//         lista.append(li);
//     });
// });


// const pedirDatos = async() => {
//     const respuesta = await fetch('./data.json');
//     const data = await respuesta.json();
    
//     data.forEach((element) => {
//                 const li = document.createElement("li");
//                 li.innerHTML = `
//                 <h4>${element.nombre}</h4>
//                 <p>${element.precio}</p>
//                 <p>Talle: ${element.talle}</p>
//                 <hr/>
//                 `;

//                 lista.append(li);
//     });
// };



const pedirDatos = async() => {
    const respuesta = await fetch('./data.json');
    const data = await respuesta.json();

    return data;
}
const carrito = pedirDatos();

carrito.forEach(elemento => console.log(elemento))