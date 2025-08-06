interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 20,
  location: 'New York',
};

const student2: Student = {
  firstName: 'Jane',
  lastName: 'Smith',
  age: 22,
  location: 'Los Angeles',
};

const studentsList: Student[] = [student1, student2];

// Function to render the table
function renderTable(students: Student[]): void {
  // Create table element
  const table = document.createElement('table');
  const headerRow = document.createElement('tr');
  
  // Create headers
  const headerFirstName = document.createElement('th');
  headerFirstName.textContent = 'First Name';
  const headerLocation = document.createElement('th');
  headerLocation.textContent = 'Location';
  
  headerRow.appendChild(headerFirstName);
  headerRow.appendChild(headerLocation);
  table.appendChild(headerRow);
  
  // Append student rows
  students.forEach(student => {
    const row = document.createElement('tr');
    
    const cellFirstName = document.createElement('td');
    cellFirstName.textContent = student.firstName;
    
    const cellLocation = document.createElement('td');
    cellLocation.textContent = student.location;
    
    row.appendChild(cellFirstName);
    row.appendChild(cellLocation);
    table.appendChild(row);
  });
  
  // Append table to the body
  document.body.appendChild(table);
}

// Call the function to render the table
renderTable(studentsList);