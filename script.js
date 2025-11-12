const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  // Get all price elements
  const prices = document.querySelectorAll('.price'); // Changed from '.price' to '.prices'
  
  // Calculate total price
  let totalPrice = 0;
  prices.forEach(price => {
    // Ensure to parse the price correctly
    totalPrice += parseFloat(price.textContent); // Use parseFloat if prices can be decimal
  });

  // Create a new row with total price
  const table = prices[0].closest('table');
  const newRow = document.createElement('tr');
  const newCell = document.createElement('td');
  newCell.colSpan = 2; // Span across both columns
  newCell.textContent = `Total Price: ${totalPrice}`;
  newRow.appendChild(newCell);
  table.appendChild(newRow);
};

getSumBtn.addEventListener("click", getSum);