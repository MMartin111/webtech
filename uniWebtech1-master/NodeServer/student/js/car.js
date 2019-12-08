
function carsTable() {

    $.getJSON('cars', function (data) {
        var table = $('<table class="table" id="carTable"></table>');
        $(table).append('<tr><th>Name</th><th>Consumption</th><th>Color</th><th>Manufacturer</th><th>Available</th><th>Year</th><th>Horsepower</th></tr>');
        $.each(data, function (key, value) {
            var row =  $('<tr></tr>');
            var nameCell = $('<td>' + value.name + '</td>');
            var consumptionCell = $('<td>' + value.consumption + '</td>');
            var colorCell = $('<td>' + value.color + '</td>');
            var manufacturerCell = $('<td>' + value.manufacturer + '</td>');
            var availableCell = $('<td>' + value.available + '</td>');
            var yearCell = $('<td>' + value.year + '</td>');
            var horsepowerCell = $('<td>' + value.horsepower + '</td>');

            $(row).append(nameCell);
            $(row).append(nameCell);
            $(row).append(consumptionCell);
            $(row).append(colorCell);
            $(row).append(manufacturerCell);
            $(row).append(availableCell);
            $(row).append(yearCell);
            $(row).append(horsepowerCell);
            $(table).append(row);
        })
        $("#content").append(table)
    });
}0


function initCars() {

    carsTable();
    $('#carForm').submit(function (e) {
        e.preventDefault();
        $.ajax({
            url:'/addCar',
            type:'post',
            data:$('#carForm').serialize(),
            success:function () {
                $("input[type=text],textarea").val("");
                $("input[type=number],textarea").val("");
                $("#content").load("html/car.html",function () {
                    initCars();
                });
            },
            error: function (e) {
                alert("Car already exists.")
            }
        })
    })
}