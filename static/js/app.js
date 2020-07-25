// import the data from data.js
const tableData = data;

// Reference the HTML table using d3 (tell JS to look for the <tbody> tags in the HTML)
var tbody = d3.select("tbody");

// Build function to iterate through the UFO data and put into table
function buildTable(data) {
    // Clear the table of data
    tbody.html("");
    
    // Loop through each object in the data
    data.forEach((dataRow) => {
        // Append a row to the table body (tells JavaScript to find the <tbody> tag within the HTML and add a table row ("tr"))
        let row = tbody.append("tr");
        
        // Loop through each field in the dataRow
        Object.values(dataRow).forEach((val) => {
            // Append each value of the object to a cell in the table
            let cell = row.append("td");
            cell.text(val);
            }
        );
	});

}