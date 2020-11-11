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

// Filter table button
var buttonFilter = d3.select("#filter-btn")

// filter the database and display
buttonFilter.on("click", function () {
    d3.selectAll(".ufoRecord").remove();

    var inputDate = d3.select("#date").property("value");


    console.log(inputDate);

    var filteredData = tableData.filter(sightings => sightings.datetime === inputDate);

    // Print no records found if no records for matching date is found

    if (filteredData.length == 0) {
        d3.select("tbody").html("<h4>No Records Found</h4>");
    };

    console.log(filteredData)
    tableDisplay(filteredData);

});

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








































































































































































































































































































































































































































