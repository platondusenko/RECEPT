async function getRecipe() {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
    const data = await response.json();
    const recipe = data.meals[0];
  document.getElementById('recept').innerHTML = `
    <h2>${recipe.strMeal}</h2>
    <img src="${recipe.strMealThumb}" alt="${recipe.strMeal}">
    <h3>Ingredients:</h3>
    <p>${recipe.strInstructions}</p>
  `;
}