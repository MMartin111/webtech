
function manufacturersTable() {

    $.getJSON('manufacturers', function (data) {
        var table = $('<table class="table" id="manufacturerTable"></table>');
        $(table).append('<tr><th>Name</t    h><th>Country</th><th>Founded</th></tr>');
        $.each(data, function (key, value) {
            var row =  $('<tr></tr>');
            var nameCell = $('<td id="manufacturersId" onclick="openCars(' +
                "'" +
                value.name +
                "'" +
                ')">' + value.name + '</td>');
            var countryCell = $('<td>' + value.country + '</td>');
            var foundedCell = $('<td>' + value.founded + '</td>');

            $(row).append(nameCell);
            $(row).append(countryCell);
            $(row).append(foundedCell);
            $(table).append(row);
        })
        $("#content").append(table)
    });
}


function initManufacturers() {

    manufacturersTable();

    $('#manufacturerForm').submit(function(e){
        e.preventDefault();
        $.ajax({
            url:'/addManufacturers',
            type:'post',
            data:$('#manufacturerForm').serialize(),
            success:function(){
                $("input[type=text], textarea").val("");
                $("#content").load("html/manufacturer.html",function () {
                    initManufacturers();
                });
            },
            error: function(e) {
                alert("Manufacturer already exists");
            }
        });
    });
}

function openCars(manufacturer) {
    document.cookie="name=" + manufacturer;
    $.getJSON("manufacturer", function (data) {
        var table = $('<table class="table" id=carsTable></table>');
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
        });
        $("#content").append("<div class=\"Text\">\n" +
            "You can see the list of " + manufacturer +" cars:\n" +
            "</div>")
        $("#content").append(table)
    }).error(function (data) {
        console.log(data);
    })
}