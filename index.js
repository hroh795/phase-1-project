addEventListener('DOMContentLoaded', (event) => {

   const title = document.getElementById("title")
   const titleDiv = document.getElementById("titleDiv")
   const more = document.getElementById("more")

   
   title.addEventListener("click", addSecondTitle)

   function addSecondTitle () {
      title.innerHTML = "Cute Cats Are Cute!"
   }

   more.addEventListener("mouseover", meow)
   
   function meow(){
   
         const meow = document.createElement("div")
         meow.setAttribute("id", "meow");
         meow.innerHTML = "meow"
         titleDiv.appendChild(meow)
   }

   document.getElementById("enter").addEventListener("click", myFunction)

   function myFunction(){
      const x = document.getElementById("myInput").value;
      const img = document.createElement("img")
      document.getElementById("demo").append(img)
      
      fetch("http://localhost:3000/cats")
      .then(function (response) {
         return response.json();
      })
      .then(function (data) {
         const breedName = data.find(cat =>cat.breed ===x)
         const index =data.indexOf(breedName);
         img.src = data[index].image
      });
   }
})

const log = document.getElementById('demo')

document.getElementById("myInput").addEventListener("keydown", logKey)

function logKey(e) {
   log.textContent += `cats can move ${e.code}`
}