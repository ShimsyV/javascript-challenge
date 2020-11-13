// from data.js
var tableData = data;
console.log(tableData);

//Get a reference to the table body
var tbody = d3.select("tbody");

// UFO Sighting values for each column
tableData.forEach(function (ufoSighting) {
    console.log(ufoSighting);
    // Append one table row `tr` for each UFO Sighting object
    var row = tbody.append("tr");

    // Use `Object.entries` to console.log each UFO Sighting value
    Object.entries(ufoSighting).forEach(function ([key, value]) {
        console.log(key, value);
        // Append a cell to the row for each value
        var cell = row.append("td");
        cell.text(value);
    });
});

// // function to display UFO sightings
// function tableDisplay(ufoSightings) {
//     var tbody = d3.select("tbody");
//     ufoSightings.forEach((ufoRecord) => {
//         var row = tbody.append("tr");
//         Object.entries(ufoRecord).forEach(([key, value]) => {
//             var cell = row.append("td");
//             cell.html(value);
//         });
//     });
// };

// clear the table for new data
function deleteTbody() {
    d3.select("tbody")
        .selectAll("tr").remove()
        .selectAll("td").remove();
};

// Select the button
var button = d3.select("#filter-btn");
button.on("click", function () {

    tbody.html("");

    // Select the input date, state, shape and get the raw HTML nodes
    var inputElement = d3.select("#input");
    // Get the value property of the input date, state, shape
    var inputValue = inputElement.property("value");
    // console.log input value
    // console.log(inputValue);
    // Filter Data with datetime equal to input value
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue ||
        sighting.city === inputValue ||
        sighting.state === inputValue ||
        sighting.country === inputValue ||
        sighting.shape === inputValue);
    // console.log filter values
    console.log(filteredData);


    filteredData.forEach(function (selections) {

        console.log(selections);
        // Append one table row `tr` for each UFO Sighting object
        var row = tbody.append("tr");
        // Use `Object.entries` to console.log each UFO Sighting value
        Object.entries(selections).forEach(function ([key, value]) {
            console.log(key, value);
            // Append a cell to the row for each value
            var cell = row.append("td");
            cell.text(value);
        });
    });

});

// Clear filter button
var buttonClear = d3.select("#clear-btn")

// clear the inputs
buttonClear.on("click", function () {
    d3.event.preventDefault();
    deleteTbody();

    // Display table data
    // tableDisplay(tableData)
    console.log(tableData)
});