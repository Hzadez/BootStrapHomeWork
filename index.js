let base_url = "https://api.tvmaze.com/shows"
let dataContainer = document.getElementById("data-container")
fetch(base_url)
.then(response => response.json())
.then(datas => {
   console.log(datas)
   datas.forEach(data => { 
   dataContainer.innerHTML += `
   <div class="card col-3" style="width: 18rem;">
   <div class="card-body">
   <h5 class="card-title">${data.name}</h5>
   <img src="${data.image.medium}" class="card-img-top" alt="...">
    <p class="card-text">${data.premiered}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">IMDB Rating: ${data.rating.average}</li>
    <li class="list-group-item">Genre: ${data.genres}</li>
    <li class="list-group-item">Language: ${data.language}</li>
  </ul>
  <div class="card-body" style="display: flex; width: max-content;margin: auto;">
    <a href="./index.html" class="btn btn-primary" style= "margin: 2px 2px;">Go to Website</a>
     <a href="./index2.html?${data.id}" class="btn btn-primary" style= "margin: 2px 2px; background-color: 198754;">Go to Detail</a> 
  </div>
</div>`});
})