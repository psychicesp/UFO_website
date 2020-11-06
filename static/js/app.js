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
// datetime.on("change", function () {
//     var inputDate = d3.event.target.value
//     console.log(inputDate)
// })
function datetimeFilter(entry) {
    return entry.datetime == inputDate
}

//Filter Button:
var filter = d3.select('#filter-btn')
filter.on("click", function () {
    d3.event.preventDefault()
    d3.selectAll("tr").remove()
    inputDate = datetime.property("value")
    tableData = data.filter(datetimeFilter)
    buildTable(tableData)
})




