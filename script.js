const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  // Get all price elements
  const prices = document.querySelectorAll('.price');
  
  // Calculate total price
  let totalPrice = 0;
  prices.forEach(price => {
    totalPrice += parseInt(price.textContent);
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