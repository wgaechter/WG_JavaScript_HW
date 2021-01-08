// from data.js
var tableData = data;

console.log(tableData.length);

var tbody = d3.select("tbody");

var DateToFilter = [];

// YOUR CODE HERE!

// Table w/ data creation
tableData.forEach(function(report) {
    //console.log(report);
    var row = tbody.append("tr");

    Object.entries(report).forEach(function([key, value]) {
        //console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
    });
});

// DateTime Filter Creation
var FilterButton = d3.select("#filter-btn")

var DateFilter = d3.select("#datetime");

// var DateInput = d3.event.target.value;

function handleChange(event) {

    console.log("Filter Button Pressed");
    console.log(DateToFilter);

    var DateFiltering = DateToFilter;

    function filterDate(sighting) {
        return sighting.datetime == DateFiltering;
    };

    var FilteredData = tableData.filter(filterDate);

    var tableRows = d3.selectAll("tr");
    var tableCells = d3.selectAll("td");

    tableRows.remove();
    tableCells.remove();

    console.log(FilteredData.length);

    FilteredData.forEach(function(update) {
        console.log(update);
        var row = tbody.append("tr");

        Object.entries(update).forEach(function([key, value]) {
            console.log(key, value);
            var cell = row.append("td");
            cell.text(value); 
        });
    });
};

function AppendFilterDate(event) {
    DateToFilter = [];

    var newDate = d3.event.target.value;

    DateToFilter.push(newDate);

    return DateToFilter;
};

DateFilter.on("change", AppendFilterDate);

FilterButton.on("click", handleChange);
