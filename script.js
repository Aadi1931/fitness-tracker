// Motivation Quote
const quotes = [
  "Push yourself, because no one else will.",
  "No pain, no gain 💪",
  "Your body can stand almost anything.",
  "Success starts with self-discipline."
];

if (document.getElementById("quote")) {
  document.getElementById("quote").innerText =
    quotes[Math.floor(Math.random() * quotes.length)];
}

// Workouts
function addWorkout() {
  let workout = document.getElementById("workout").value;
  let duration = document.getElementById("duration").value;

  if (!workout || !duration) return;

  let workouts = JSON.parse(localStorage.getItem("workouts")) || [];
  workouts.push({ workout, duration });
  localStorage.setItem("workouts", JSON.stringify(workouts));

  displayWorkouts();
}

function displayWorkouts() {
  let list = document.getElementById("workoutList");
  if (!list) return;
  list.innerHTML = "";

  let workouts = JSON.parse(localStorage.getItem("workouts")) || [];
  workouts.forEach(w =>
    list.innerHTML += `<li>🏋️ ${w.workout} – ${w.duration} min</li>`
  );
}
displayWorkouts();

// Meals
function addMeal() {
  let meal = document.getElementById("meal").value;
  let calories = document.getElementById("calories").value;

  if (!meal || !calories) return;

  let meals = JSON.parse(localStorage.getItem("meals")) || [];
  meals.push({ meal, calories });
  localStorage.setItem("meals", JSON.stringify(meals));

  displayMeals();
}

function displayMeals() {
  let list = document.getElementById("mealList");
  if (!list) return;
  list.innerHTML = "";

  let meals = JSON.parse(localStorage.getItem("meals")) || [];
  meals.forEach(m =>
    list.innerHTML += `<li>🥗 ${m.meal} – ${m.calories} kcal</li>`
  );
}
displayMeals();

// Progress
if (document.getElementById("workoutCount")) {
  let workouts = JSON.parse(localStorage.getItem("workouts")) || [];
  let meals = JSON.parse(localStorage.getItem("meals")) || [];

  document.getElementById("workoutCount").innerText =
    "🏋️ Total Workouts: " + workouts.length;

  let totalCalories = meals.reduce((sum, m) => sum + Number(m.calories), 0);
  document.getElementById("calorieCount").innerText =
    "🔥 Calories Consumed: " + totalCalories;
}
