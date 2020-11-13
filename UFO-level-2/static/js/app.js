// from data.js
var tableData = data;

// YOUR CODE HERE!

// select tags and assign them to a variable
var tbody = d3.select("tbody");
var buttonFilter = d3.select("#buttonFilter")
var buttonClear = d3.select("#buttonClear")

// Create a function to create table rows and cells filled with data
function showTableInfo(tableInfo) {
    tableInfo.forEach(incident => {
        console.log(incident);

        // Append one table row 
        var row = tbody.append("tr").attr("class", "incident");

        // Log each incident report value
        Object.entries(incident).forEach(([key, value]) => {
            console.log(key, value);

            // Append a cell per incident report value
            var cell = row.append("td");

            // Add each cell text value
            cell.text(value);
        });
    });
}

// Create a function to filter data by multiple 
function createFilter(tableInfo) {

    // Assign form fields to variables
    var inputDateElement = d3.select("#inputDate");
    var inputCityElement = d3.select("#inputCity");
    var inputStateElement = d3.select("#inputState");
    var inputCountryElement = d3.select("#inputCountry");
    var inputShapeElement = d3.select("#inputShape");

    // Assign values of form elements to variables
    var inputDateValue = inputDateElement.property("value");
    var inputCityValue = inputCityElement.property("value");
    var inputStateValue = inputStateElement.property("value");
    var inputCountryValue = inputCountryElement.property("value");
    var inputShapeValue = inputShapeElement.property("value");

    // Assign values of checked radio button to a variable.
    //var radioChecked = d3.select('input[name="inlineRadioOptions"]:checked').node().value

    //Check if Or radio button is checked, filter using 'or' operator        

    var finalFiltered = tableInfo.filter(incident => incident.datetime === inputDateValue || incident.city.toLowerCase() === inputCityValue.toLowerCase() ||
        incident.state.toLowerCase() === inputStateValue.toLowerCase() || incident.country.toLowerCase() === inputCountryValue.toLowerCase() ||
        incident.shape.toLowerCase() === inputShapeValue.toLowerCase())

    console.log(finalFiltered)
    // Return values from filter
    return finalFiltered

    // // If And radio button is checked, filter fields using 'And' operator and return values.
    // else {


    //     if (inputDateValue !== "") {
    //         var dateFiltered = tableInfo.filter(incident => incident.datetime === inputDateValue);
    //     }
    //     else { var dateFiltered = tableInfo }

    //     if (inputCityValue !== "") {
    //         var cityFiltered = dateFiltered.filter(incident => incident.city.toLowerCase() === inputCityValue.toLowerCase());
    //     }
    //     else { var cityFiltered = dateFiltered }

    //     if (inputStateValue !== "") {
    //         var stateFiltered = cityFiltered.filter(incident => incident.state.toLowerCase() === inputStateValue.toLowerCase());
    //     }
    //     else { var stateFiltered = cityFiltered }

    //     if (inputCountryValue !== "") {
    //         var countryFiltered = stateFiltered.filter(incident => incident.country.toLowerCase() === inputCountryValue.toLowerCase());
    //     }
    //     else { var countryFiltered = stateFiltered }

    //     if (inputShapeValue !== "") {
    //         var finalFiltered = countryFiltered.filter(incident => incident.shape.toLowerCase() === inputShapeValue.toLowerCase());
    //     }
    //     else { var finalFiltered = countryFiltered }


    //     return finalFiltered
    // };
}

// Display all data before filtering it
showTableInfo(tableData)


// If filter button is click, filter data
buttonFilter.on("click", function () {
    d3.selectAll(".incident").remove();

    var filteredData = createFilter(tableData)

    console.log(filteredData);

    showTableInfo(filteredData)

})

// When clear button is clicked, remove rows and clear all filter form fields
buttonClear.on("click", function () {
    d3.selectAll(".incident").remove();
    d3.select("#inputDate").property("value", "")
    d3.select("#inputCity").property("value", "")
    d3.select("#inputState").property("value", "")
    d3.select("#inputCountry").property("value", "")
    d3.select("#inputShape").property("value", "")

    showTableInfo(tableData)


})
s