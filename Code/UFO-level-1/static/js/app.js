// from data.js
var tableData = data;

console.log(tableData.length);

var tbody = d3.select("tbody");

// For Date Colleciton Use
var DateToFilter = [];

// Table w/ data creation
function BaseTable() {
    tableData.forEach(function(report) {
        //console.log(report);
        var row = tbody.append("tr");

        Object.entries(report).forEach(function([key, value]) {
            //console.log(key, value);
            var cell = row.append("td");
            cell.text(value);
        });
    });
};

BaseTable();

// Filter Button Selection
var FilterButton = d3.select("#filter-btn");

// Datetime Collection
var DateFilter = d3.select("#datetime");

// Reset Table Button Collection
var ResetButton = d3.select("#reset-btn");

// Filter Form Selection
var Form = d3.select("#form");

// Create Filtered Table Function
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

// Collect Date to Filter
function AppendFilterDate(event) {
    DateToFilter = [];

    var newDate = d3.event.target.value;

    DateToFilter.push(newDate);

    return DateToFilter;
};

// Table Reset Function
function ResetTable(event) {
    var tableRows = d3.selectAll("tr");
    var tableCells = d3.selectAll("td");

    tableRows.remove();
    tableCells.remove();

    BaseTable();
    console.log("Reset Table");
};

//Form Submit Function
function FormSubmit(event) {
    d3.event.preventDefault();
    console.log("REFRESH STOPPED");

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

// Reset Button Event
ResetButton.on("click", ResetTable)

// Date Collection Event
DateFilter.on("change", AppendFilterDate);

// Filter Button Event
FilterButton.on("click", handleChange);

// Form Submit
Form.on("submit", FormSubmit);
