let base_url2 = "https://api.tvmaze.com/shows"
let dataContainer2 = document.getElementById("data-container")
fetch(base_url2)
.then(response => response.json())
.then(datas2 => {
   console.log(datas2)
   datas2.forEach(datas => { 
   dataContainer2.innerHTML = `
   <div class="card col-3" style="width: 18rem;">
    <img src="${datas.image.original}" class="card-img-top" alt="...">
   </div>
   <div class="card col-3" style="width: 18rem;">
   <div class="card-body">
   <h5 class="card-title">${datas.name}</h5>
    <p class="card-text">${datas.premiered}</p>
  </div>
  <ul class="list-group list-group-flush" style="margin: 35px;">
    <li class="list-group-item">IMDB Rating: ${datas.rating.average}</li>
    <li class="list-group-item">Genre: ${datas.genres}</li>
    <li class="list-group-item">Language: ${datas.language}</li>
  </ul>
  <div class="card-body" style="display: flex; width: max-content;margin: auto;">
    <a href="./index.html" class="btn btn-primary" style= "margin: 2px 2px;">Go to Website</a>
     <a href="./index2.html?${datas.id}" class="btn btn-primary" style= "margin: 2px 2px; background-color: 198754;">Go to Detail</a> 
  </div>
</div>`});
})