// from data.js
var tableData = data;

var tbody = d3.select("tbody");

// YOUR CODE HERE!

// Table w/ data creation
function BaseTable() {
    tableData.forEach(function(report) {
        // console.log(report);
        var row = tbody.append("tr");

        Object.entries(report).forEach(function([key, value]) {
            // console.log(key, value);

            var cell = row.append("td");
            cell.text(value);
        });
    });
};

BaseTable()

// DateTime Filter Creation
var FilterButton = d3.select("#filter-btn")

var DateFilter = d3.select("#datetime");

var DateInput = d3.event.target.value;

DateFilter.on("change", function() {
    console.log(DateInput);
});

function TableFilter(event) {
    var FilteredData = data.filter(DateInput);

    FilteredData.forEach(function(report) {
        var row = tbody.append("tr");

        Object.entries(report).forEach(function([key, value]) {
            var cell = row.append("td");
            cell.text(value); 
        });
    });
};

FilterButton.on("click", function() {
    console.log("Filter Button Pressed");
    console.log(d3.event.target);

    TableFilter();
});

