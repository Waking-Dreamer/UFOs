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

// Create function to handle end used clicking on button to filter
function handleClick() {
    // select the very first element that matches selector string: “#datetime”
    // By chaining .property("value"); to the d3.select function, we’re telling D3 not only to look for where our date 
    // values are stored on the webpage, but to actually grab that information and hold it in the “date” variable.
    let date = d3.select("#datetime").property("value");
    // Set a default filter and save it to a new variable
    let filteredData = tableData;
    // Use an if statement to check if a date was entered and filter the data using that date
    if (date) {
        // Apply `filter` to the table data to only keep the rows where the `datetime` value matches the filter value
        filteredData = filteredData.filter(row => row['datetime'] === date);
    };

    // Rebuild the table using the filtered data. If no date was entered, then filteredData will just be the orignal tableData.
    buildTable(filteredData);
};

// Listens for when a click occurs on the webpage
// Our selector string contains the id for another HTML tag. We’ll assign a unique id to a button element in the HTML called “filter-btn”. It’ll be included in the button tags we
// create for the filter button. We’re linking our code directly to the filter button. By adding .on("click", handleClick);, we’re telling D3 to execute our handleClick() function
// when the button with an id of filter-btn is clicked.
d3.selectAll("#filter-btn").on("click", handleClick);

// Call buildTable function so the table loads when the webpage does
// Will create a basic table filled with row upon row of unfiltered data pulled straight from our array
buildTable(tableData);