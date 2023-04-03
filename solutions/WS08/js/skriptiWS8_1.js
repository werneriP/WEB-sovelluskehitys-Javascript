// EX1
function firstButton() {

    var text = '{ "employees" : [' +
        '{ "firstName":"John" , "lastName":"Doe" },' +
        '{ "firstName":"Anna" , "lastName":"Smith" },' +
        '{ "firstName":"Peter" , "lastName":"Jones" } ]}';

    // Convert (string) the data to JSON
    var data = JSON.parse(text);

    // Extract the data from JSON
    var fn1 = data.employees[0].firstName;
    var ln1 = data.employees[0].lastName;

    // Inject the data to #jsondata
    document.getElementById('jsondata').innerHTML = fn1 + " " + ln1;
}

// Create a for loop
function thirdButton() {

    var text = '{ "employees" : [' +
        '{ "firstName":"Carita" , "lastName":"Koodari" },' +
        '{ "firstName":"Leena" , "lastName":"Leipuri" },' +
        '{ "firstName":"Cessi" , "lastName":"CSS Taitaja" }, ' +
        '{ "firstName":"Skripa" , "lastName":"Skriptistailaaja" }, ' +
        '{ "firstName":"Lasse" , "lastName":"LocalStorage" } ]} ';

    // Convert the data to JSON
    var data = JSON.parse(text);

    // Clear the field
    document.getElementById('jsondata').innerHTML = "";

    for (var i = 0; i < data.employees.length; i++) {

        // Extract the data from JSON
        var fn1 = data.employees[i].firstName;
        var ln1 = data.employees[i].lastName;

        // Inject the data to #jsondata
        document.getElementById('jsondata').innerHTML += fn1 + " " + ln1 + "<br>";

    }
}

