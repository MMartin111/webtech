
$(document).ready(function () {
    $("#content").load("html/default.html");

    $("#homeButton").click(function () {
        $("#content").load("html/default.html");
    });


    $("#manufacturerButton").click(function () {
        $("#content").load("html/manufacturer.html",function () {
            initManufacturers();
        });
    });

    $("#carButton").click(function () {
        $("#content").load("html/car.html",function () {
            initCars();
        });
    });
});