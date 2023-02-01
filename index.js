addEventListener('DOMContentLoaded', (event) => {

   const title = document.getElementById("title")
   const titleDiv = document.getElementById("titleDiv")
   const more = document.getElementById("more")
   const button = document.getElementById("clickcat")

   
   title.addEventListener("click", addSecondTitle)

   function addSecondTitle () {
      title.innerHTML = "Cute Cats Are Cute!"
   }

   more.addEventListener("mouseover", meow)
   
   function meow(){
   
         let meow = document.createElement("div")
         meow.innerHTML = "meow"
         titleDiv.appendChild(meow)
   }

   function myFunction(){
      var x = document.getElementById("myInput").value;
      let img = document.createElement("img")
      document.getElementById("demo").append(img)
      
      fetch("http://localhost:3000/cats")
      .then(function (response) {
         return response.json();
      })
      .then(function (data) {
         console.log('x',x)
         let breedName = data.find(cat =>cat.breed ===x)
         console.log(breedName)
         let index =data.indexOf(breedName);
         console.log(index)
         img.src = data[index].image
      });
   }

   document.getElementById("myInput").addEventListener("search", myFunction)

})
