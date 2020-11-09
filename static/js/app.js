// from data.js
var tableData = Object.assign(data);

var tbody = d3.select('tbody')

function buildTable(tdata) {
    tdata.forEach((datum) => {
        var row = tbody.append("tr");
        Object.entries(datum).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
}
buildTable(tableData)

// datetime Form:
var datetime = d3.select("#datetime")
function datetimeFilter(entry) {
    return entry.datetime == inputDate
}

// city Form:
var city = d3.select("#city")
function cityFilter(entry) {
    return entry.city == inputCity
}

// state Form:
var state = d3.select("#state")

function stateFilter(entry) {
    return entry.state == inputState
}

// country Form:
var country = d3.select("#country")
function countryFilter(entry) {
    return entry.country == inputCountry
}

// shape Form:
var shape = d3.select("#shape")
function shapeFilter(entry) {
    return entry.shape == inputShape
}

//Build initial table
buildTable(tableData)


//Filter Button to rebuild table based on entered filters:
var filter = d3.select('#filter-btn')
filter.on("click", function () {
    d3.event.preventDefault()
    if (datetime.property("value")){
        inputDate = datetime.property("value")
        tableData = tableData.filter(datetimeFilter)
    }
    if (city.property("value")){
        inputCity = city.property("value")
        tableData = tableData.filter(cityFilter)
    }
    if (state.property("value")){
        inputState = state.property("value")
        tableData = tableData.filter(stateFilter)
    }
    if (country.property("value")){
        inputCountry = country.property("value")
        tableData = tableData.filter(countryFilter)
    }
    if (shape.property("value")){
        inputShape = shape.property("value")
        tableData = tableData.filter(shapeFilter)
    }
    d3.selectAll("td").remove()
    inputDate = datetime.property("value")
    buildTable(tableData)
    tableData = data
})




