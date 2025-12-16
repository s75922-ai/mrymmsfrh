// 1. Define Multi-Dimensional Array studentData)
// Format: [Name (String), Credit Hour (Number), Current GPA (Number)]
const studentData = [
    ["Ali Bin Ahmad", 15, 3.75],
    ["Bala A/L Muthu", 12, 3.40],
    ["Siti Nurhaliza", 18, 4.00],
    ["Wong Mei Ling", 10, 3.50],
    ["David Lee", 15, 2.95]
];


// 2. Create function to measure dean list eligibility using conditional statement
function checkDeanList(gpa) {
    if (gpa >= 3.50) {
        return "Dean's List Eligible";
    } else {
        return "Not Dean's List Eligible";
    }
}

// -- AI ASSISTED CODE START --
// Logic updated for DOM manipulation (using getElementById and innerHTML).
// Form submission handler added and enabled to push new data and re-render results.
/**
 * Function to render the student data array to the output area.
 */
function renderResults() {
    // Target the output container
    const outputDiv = document.getElementById('resultsOutput');
    let outputHTML = "<h2>Section 03 Result (All Records)</h2>"; // Changed title slightly

    // 3. Create Looping (for loop) to iterate through student data
    for (let i = 0; i < studentData.length; i++) {
        const student = studentData[i];
        const name = student[0];
        const gpa = student[2];
        
        // Get the eligibility status string
        const status = checkDeanList(gpa);
        
        // Determine the CSS class based on eligibility
        const statusClass = (status === "Dean's List Eligible") ? 'eligible' : 'not-eligible';

        // Build the HTML for one student record
        outputHTML += "<div>";
        outputHTML += "<b>Name:</b> " + name + "<br>";
        outputHTML += "<b>Current GPA:</b> " + gpa.toFixed(2) + "<br>"; 
        outputHTML += "<b>Status:</b> <span class='" + statusClass + "'>" + status + "</span><br>";
        outputHTML += "<hr>";
        outputHTML += "</div>";
    }

    // Insert the generated HTML into the output container
    outputDiv.innerHTML = outputHTML;
}

// Initial call to display the hardcoded data when the script loads
renderResults();

// --- Event Handler for Form Submission ---
document.getElementById('addStudentRecordForm').addEventListener('submit', function(event) {
    // 1. Prevent the default form submission (which causes a page reload)
    event.preventDefault();
    
    // 2. Get and validate values from the form inputs
    const name = document.getElementById('studentName').value;
    // Use Number() to ensure these values are stored as numbers, not strings
    const hours = Number(document.getElementById('creditHours').value);
    const gpa = Number(document.getElementById('currentGPA').value);
    
    // Basic validation check (optional, but good practice)
    if (name && !isNaN(hours) && !isNaN(gpa)) {
        // 3. Add the new student record to the global studentData array
        studentData.push([name, hours, gpa]);
        
        // 4. Re-render the results list to show the new student immediately
        renderResults();
        
        // 5. Clear the form for the next entry
        event.target.reset();
    } else {
        alert("Please enter valid data for all fields.");
    }
    // -- AI ASSISTED CODE END --
});