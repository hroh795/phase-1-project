addEventListener('DOMContentLoaded', (event) => {

   const title = document.getElementById("title")
   
   title.addEventListener("click", addSecondTitle)

   function addSecondTitle () {
      title.innerHTML = "Cute Cats Are Cute!"
   }

});
