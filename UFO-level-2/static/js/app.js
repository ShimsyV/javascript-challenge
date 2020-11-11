// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// print the data from data.js
// console.log(data);

// loop through data and log each object
// Create a function to display UFO sightings
function tableDisplay(sightings) {
    sightings.forEach(ufoRecord => {
        console.log(ufoRecord);

        // Use d3 to append one table row `tr` for each ufo sighting report object
        var row = tbody.append("tr");

        // use object entries to log each ufo report value
        Object.entries(ufoRecord).forEach(([key, value]) => {
            console.log(key, value);

            // Use d3 to append 1 cell per ufo report value 
            var cell = row.append("td");

            // Use d3 to update each cell's text with ufo report values 
            cell.text(value);

        })

    })

}

// Display table data
tableDisplay(tableData)

// Clear filter button
var buttonClear = d3.select("#clear-btn")

// clear the inputs
buttonClear.on("click", function () {
    d3.selectAll(".ufoRecord").remove();
    d3.select("#date").property("value", "")
    d3.select("#city").property("value", "")
    d3.select("#state").property("value", "")
    d3.select("#country").property("value", "")
    d3.select("#shape").property("value", "")


    // Display table data
    tableDisplay(tableData)

})

// Filter table button
var button = d3.select("#filter-btn");
button.on("click", function () {

    tbody.html(" ");

    d3.selectAll(".ufoRecord").remove();

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

    // display message if no records found
    if (filteredData.length == 0) {
        d3.select("tbody")
            .append("tr")
            .append("td")
            .attr("colspan", 7)
            .html("<h4>No Records Found</h4>");
    };

    // display the database
    console.log(filteredData);
    tableDisplay(filteredData);
});