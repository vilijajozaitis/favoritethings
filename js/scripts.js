


// document.getElementById("favorite-things").addEventListener("submit", function(event){
// alert("hello!")

// event.preventDefault();

// });

$(document).ready(function(){
    $("#favorite-things").submit(function(){

       
       
        var color = $("input#color").val();
        var food = $("input#food").val();
        var animal = $("input#animal").val();
       

        alert("I love " + color + ", " + food + ", and " + animal +"!")

        var array = [color, food, animal]

        alert(array)

        array.forEach(element => {
            alert(element)
            
        });
       
        event.preventDefault();
    
    })
    
});