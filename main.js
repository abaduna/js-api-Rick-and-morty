const apiRick=async(pagina)=>{
    let url ="https://rickandmortyapi.com/api/character/?page="+pagina
    const api = await fetch(url)
    const  data = await api.json()
    
    divRes = document.querySelector("#resultado")
    divRes.innerHTML = ""
    data.results.map(item=>{
        divItem =document.createElement("div")
        divItem.innerHTML=`
        <div class="card sombra" style="width: 18rem;">
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
    
    divRes2 = document.getElementById("resultado2")
    divRes2.innerHTML = ""
    data2.results.map(item=>{
        divItem2 =document.createElement("div")
        divItem2.innerHTML=`<div class="card sombra" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${item.name}</h5>
          <h6 class="card-subtitle mb-2 text-body-secondary">Es de la dimension ${item.dimension}  </h6>
          <p class="card-text">Es del tipo ${item.type}</p>
          
        </div>
      </div>`
        
        divRes2.appendChild(divItem2)
    })
}
apiepisodios =async(pagina3)=>{
    let url = "https://rickandmortyapi.com/api/episode?page="+pagina3
    const api = await fetch(url)
    const data2 = await api.json()
    console.log(data2)
    divRes2 = document.getElementById("resultado3")
    divRes2.innerHTML = ""
    data2.results.map(item=>{
        divItem2 =document.createElement("div")
        divItem2.innerHTML=`<div class="card sombra" style="width: 18rem;">
        <div class="card-body">
          <h2 class="card-title">El nombre del episodio es <Br> <b>${item.name} </b></h2>
          <h6 class="card-subtitle mb-2 text-body-secondary">se estreno  ${item.air_date} </h6>
          
          
        </div>
      </div>`
        
    divRes2.appendChild(divItem2)
    })
}

// const buscarPersonaje=(persoanje)=>{
  
//   setTimeout( buscarEnLaAPI(persoanje),1000)
 
// }
const buscarEnLaAPI=async()=>{
  const  persoanje2 = document.getElementById("input-peronsajes").value
  console.log(persoanje2)
    let url =`https://rickandmortyapi.com/api/character/?page=2&name=${persoanje2}`
    const api = await fetch(url)
    let data = {}
    data = await api.json()
    console.log(data)
    divRes2 = document.getElementById("persoanjes")
    divRes2.innerHTML = ""
    if (data.info.count >1) {
      console.log("no da error")
      data.results.map(item=>{
        divItem2 =document.createElement("div")
        divItem2.innerHTML=`
      <div class="card centarhijo sombra" style="width: 18rem;">
        <div class="card-body">
          <h2 class="card-title ">El nombre del persoanje <Br> <b>${item.name} </b></h2>
          <h6 class="card-subtitle mb-2 text-body-secondary">su especie  ${item.species} </h6>
          <img src="${item.image}" class="card-img-top" alt="...">
          
        </div>
      </div>`
        
    divRes2.appendChild(divItem2)
    })
    } else  {
      console.log("error")
    //   divRes2 = document.getElementById("persoanjes")
    //   divItem2 =document.createElement("div")
    //     divItem2.innerHTML=`
    //   <div class="card centarhijo sombra" style="width: 18rem;">
    //     <div class="card-body">
    //       <h2 class="card-title ">El nombre del persoanje <Br> <b>NO se encuentra </b></h2>
        
          
    //     </div>
    //   </div>`
        
    // divRes2.appendChild(divItem2)
    }

}
apiepisodios(1)
apilocation(1)
apiRick(1)
