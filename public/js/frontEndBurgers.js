$(document).ready(function () {

    $(".create-form").on("submit", event => {
        event.preventDefault();

        const newBurger = {
            burgerName: $("#userInput").val().trim()
        };
        if(!newBurger.burgerName){
           return alert("please enter a burger");
            
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function () {
            alert("New Burger added");

            location.reload();

        });
    });

    $(".devoured").on("click", function(event) {
        event.preventDefault();
        
        const id = $(this).data("id");
        const foodNowDevoured = $(this).data("foodNowDevoured");

        const nowDevoured = {
            devoured: true
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: nowDevoured
        }).then(function () {
            console.log("Burger is now devoured" + foodNowDevoured);

            location.reload();

        });
    });

    $(".deleteBurgers").on("click", function (event) {
        event.preventDefault();
        
        const id = $(this).data("id");

        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(
            function () {
                console.log("deleted burger", id);

                location.reload();

            }
        );
    });


});