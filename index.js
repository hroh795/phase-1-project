addEventListener('DOMContentLoaded', (event) => {

   const title = document.getElementById("title")
   const titleDiv = document.getElementById("titleDiv")
   const more = document.getElementById("more")

   
   title.addEventListener("click", addSecondTitle)

   function addSecondTitle () {
      title.innerHTML = "Cute Cats Are Cute!"
   }

   more.addEventListener("mouseover", meow)

   let imgURL;
   
   
   function meow(){
      const img = document.createElement("img")
      fetch("http://localhost:3000/cats")
      .then(function (response){
         return response.json();
      })
      .then(function(data){
         let meow = document.createElement("div")
         meow.innerHTML = "meow"
         titleDiv.appendChild(meow)
      })
   }
});
