const apiRick=async(pagina)=>{
    let url ="https://rickandmortyapi.com/api/character/?page="+pagina
    const api = await fetch(url)
    const  data = await api.json()
    
    divRes = document.querySelector("#resultado")
    divRes.innerHTML = ""
    data.results.map(item=>{
        divItem =document.createElement("div")
        divItem.innerHTML=`
        <div class="card" style="width: 18rem;">
  <img src="${item.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${item.name}</h5>
    <p class="card-text">Es de la especie ${item.species}.</p>
    <p class="card-text">Es del genero ${item.gender == "Male"? "hombre" :"mujer"}.</p>
    <p class="card-text"> ${item.status == "Alive"?"esta vivo" :"esta muerto" }.</p>
  </div>
</div>
        `
        divRes.appendChild(divItem)
    })

}
apilocation =async(pagina2)=>{
    let url = "https://rickandmortyapi.com/api/location?page="+pagina2
    const api = await fetch(url)
    const data2 = await api.json()
    console.log(data2)
    divRes2 = document.getElementById("resultado2")
    divRes2.innerHTML = ""
    data2.results.map(item=>{
        divItem2 =document.createElement("div")
        divItem2.innerHTML=`<div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${item.name}</h5>
          <h6 class="card-subtitle mb-2 text-body-secondary">Es de la dimension ${item.dimension}  </h6>
          <p class="card-text">Es del tipo ${item.type}</p>
          
        </div>
      </div>`
        
        divRes2.appendChild(divItem2)
    })
}
apilocation(1)
apiRick(1)
//<p class="card-text"> ${item.gender == "Male" ?"femenino"}</p>