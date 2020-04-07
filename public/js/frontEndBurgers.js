$(document).ready(function () {
    $(".create-form").on("submit", event => {
        event.preventDefault();

        const newBurger = {
            burgerName: $("#userInput").val().trim()
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function () {
            console.log("New Burger added");

            location.reload();

        });
    });

    $(".devoured").on("click", event => {
        const id = $(this).data("id");
        const foodNowDevoured = $(this).data("foodNowDevoured");

        const nowDevoured = {
            devoured: foodNowDevoured
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: nowDevoured
        }).then(function () {
            console.log("Burger is now devoured" + foodNowDevoured);

            location.reload();

        });
    });

    $(".deleteBurgers").on("click", event => {
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