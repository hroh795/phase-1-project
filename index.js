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


function myFunction() {
   document.getElementById("demo").innerHTML = "Hello World";
 }
});
