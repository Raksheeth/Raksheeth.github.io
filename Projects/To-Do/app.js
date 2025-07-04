let addButton = document.getElementById('add-button');
let list = document.getElementById('list');
let item = document.getElementById('activity');

addButton.addEventListener('click', () => {
    if(item.value!==''){
        let rowItem = document.createElement('tr');

    // First column: list item
    let listItem = document.createElement('td');
    rowItem.classList.add('row-list');
    listItem.classList.add('list-item');
    listItem.innerText = item.value;   

    // Second column: delete button
    let deleteCell = document.createElement('td');
    let deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-button');
    deleteButton.innerText = 'X';
    deleteCell.appendChild(deleteButton);

    // Append both td's to the tr
    rowItem.appendChild(listItem);
    rowItem.appendChild(deleteCell);
    list.appendChild(rowItem);

    // Toggle strike-through on click
    let count = 0;
    listItem.addEventListener('click', () => {
        count % 2 == 0
            ? listItem.style.textDecoration = 'line-through'
            : listItem.style.textDecoration = 'none';
        count++;
    });

    // Delete row on button click
    deleteButton.addEventListener('click', () => {
        list.removeChild(rowItem);
    });
    }
    // Clear input
    item.value = "";
});
