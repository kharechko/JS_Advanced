let search = document.querySelector('.search');
let movie_name =  document.querySelector('input');
let container = document.querySelector('.container')
let count = 0;

search.addEventListener('click', function() {
  container.innerHTML = ''
  let film = new XMLHttpRequest();
  film.open('GET', `http://www.omdbapi.com/?s=${movie_name.value}&apikey=13bbebf7`);
  film.send()
    film.onreadystatechange = function() {
      let answer = film.responseText;
      answer = JSON.parse(answer);
       for(let i = 0; i < answer.Search.length; i++) {
        count++
        let id = answer.Search[i].imdbID;
        let div = `<div  class='movie-card'>
              <img src='${answer.Search[i].Poster}  alt='${answer.Search[i].Title}' class='movie-sml-img'> 
              <h5>${answer.Search[i].Title}</h5>
              <p>${answer.Search[i].Type}</p>
              <p>${answer.Search[i].Year}</p>
              <button type='button' class='btn show-btn text-light' onclick="${showMore(id)}"  data-toggle="modal" data-target='#modal${count}'>more details</button>
              </div>`;
          container.innerHTML += div;     
         }
       }
   })
  


function showMore(id) {
 let detail = new XMLHttpRequest();
  detail.open('GET',` http://www.omdbapi.com/?plot=full&i=${id}&apikey=13bbebf7`, false);
  detail.send();
  let res = detail.responseText;
  res = JSON.parse(res);
  let ratings = res.Ratings;
  let mark = '';
    for(let  names of ratings) {
       mark += Object.values(names).join(' ') + ' ';
    }
  let modal = `<div class="modal fade" id="modal${count}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
       <div class="modal-dialog modal-lg modal-dialog2" role="document">
         <div class="modal-content modal-content2">
          <div>
            <div id="modal-body" class='p-3'>
             <div class='row'>
              <div class='col-md-4'>
                <img src='${res.Poster}' alt='poster' style='min-height: 600px; max-width: 400px'> 
             </div>
             <div class='col-md-8'> 
              <h2 class='text-center bold'>${res.Title}</h2>
               <br>
               <ul class='list-group bg-light'>
                 <li class='list-group-item borderless'>${res.Year}  ${res.Genre}</li>
                 <li class='list-group-item borderless'>${res.Plot}</li>
                 <li class='list-group-item borderless'><strong> Written by: </strong> ${res.Writer}</li>
                 <li class='list-group-item borderless'><strong> Directed by: </strong> ${res.Director}</li>
                 <li class='list-group-item borderless'><strong> Starring: </strong>${res.Actors}</li>
                 <li class='list-group-item borderless'><strong> BoxOffice: </strong> ${res.BoxOffice}</li>
                 <li class='list-group-item borderless'><strong> Awards: </strong>${res.Awards}</li>
                 <li class='list-group-item borderless'><strong> Ratings: </strong>${mark} </li>
               </ul>
              </div>
             </div>  
            </div>
           </div
           </div>
          </div>`

     container.innerHTML += modal;
   }
  
  

