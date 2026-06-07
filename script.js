let foodItems = JSON.parse(localStorage.getItem('foodItems')) || [];

// 2. Select the form and other elements from your HTML
const calorieForm = document.getElementById('calorie-form');
const foodInput = document.getElementById('food-name');
const calorieInput = document.getElementById('calories');
const itemList = document.getElementById('food-list');

// 3. Add an event listener to handle form submission
calorieForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevents the page from refreshing

    // Get the values
    const foodName = foodInput.value;
    const calories = parseInt(calorieInput.value);

    // Create an object
    const newItem = {
        id: Date.now(),
        name: foodName,
        calories: calories
    };

    // Add array and update the screen
    foodItems.push(newItem);
    localStorage.setItem('foodItems', JSON.stringify(foodItems));
    renderItems();

    // Clear the inputs
    calorieForm.reset();
});

function resetItems() {
    foodItems = [];
    localStorage.setItem('foodItems', JSON.stringify(foodItems));
    renderItems();
}

function deleteItem(index) {
    foodItems.splice(index, 1);
    localStorage.setItem('foodItems', JSON.stringify(foodItems));
    renderItems();
}

function renderItems() {
    itemList.innerHTML = ''; // Clear existing list
    let totalCalories = 0;

    foodItems.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'flex justify-between p-2 border-b';
        div.innerHTML = `
            <span>${item.name}</span>
            <span>${item.calories} kcal</span>
            <button class="bg-red-500 text-white p-1 rounded" onclick="deleteItem(${index})">Delete</button>
        `;
        itemList.appendChild(div);
        totalCalories += parseInt(item.calories, 10);
    });

    const totalCaloriesElement = document.getElementById('total-calories');
    totalCaloriesElement.innerText = `Total: ${totalCalories}`;
}

document.getElementById('reset-btn').addEventListener('click', resetItems);

renderItems();