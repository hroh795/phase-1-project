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
      var x = document.getElementById("myInput");
      document.getElementById("demo").innerHTML = "You are searching for: " + x.value;
   }

});
