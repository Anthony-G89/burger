$(function(){
    $(".create-form").on("submit", event =>{
        event.preventDefault();
        console.log("HI");
        

        const newBurger ={
            burgerName: $("#userInput").val().trim()
        };

        $.ajax("/api/burgers",{
            type: "POST",
            data: newBurger
        }).then(function(){
            console.log("New Burger added");

            location.reload();
            
        });
    });

    $(".deleteBurgers").on("click", event =>{
        const id = $(this).data("id");

        $.ajax("/api/burgers/" + id,{
            type: "DELETE"
        }).then(
            function(){
                console.log("deleted burger", id);

                location.reload();
                
            }
        );
    });







});