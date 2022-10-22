let cad=`<div class="container">
       `
for(arbol of dataSM){
    cad+=`<div class="tarjeta">
            <img src="${arbol.image}" alt="${arbol.name}">
            <div class="cuerpo">
                <h4>${arbol.name}</h4>
                <p>Especie:${arbol.species}</p>                
                <p>Genero:${arbol.gender}</p>
            </div>
        </div>
    `
}
cad+=`</div>
      `       
console.log(cad)
document.getElementById("img").innerHTML=cad

