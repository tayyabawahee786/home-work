// task 1
  // Track the number of times the mouse hovers over the div
  let hoverCount = 0;
  const hoverDiv = document.getElementById('hoverDiv');

  hoverDiv.addEventListener('mouseover', function() {
    // Increment hover count
    hoverCount++;

    if (hoverCount >= 10) {
      // Show alert
      alert('You are an anonymous user');

      // Change background color of the body to red
      document.body.style.backgroundColor = 'red';
    }
  });
// task 2
// prompt
function addItem() {
    var items = [];
    for (var i = 0; i < 3; i++) {
        var item = prompt("Enter item " + (i + 1) + ":");
        if (item) {
            items.push(item);
        } else {
            alert("Please enter an item.");
            return;
        }
    }
    displayItems(items);
}

function displayItems(items) {
    var itemListDiv = document.getElementById("itemList");
    itemListDiv.innerHTML = "<h2>Items:</h2>";
    var ul = document.createElement("ul");
    items.forEach(function(item) {
        var li = document.createElement("li");
        li.textContent = item;
        ul.appendChild(li);
    });
    itemListDiv.appendChild(ul);
}


