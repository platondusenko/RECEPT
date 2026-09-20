async function getRecipe() {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
    const data = await response.json();
    const recipe = data.meals[0];
  document.getElementById('recept').innerHTML = `
 
    <h2 style="color: #2e39b4; text-align: center; margin-bottom: 30px;">${recipe.strMeal}</h2>
    <img style="border-radius: 12px; float: left; margin-right: 20px; height: 300px; width: 400px; box-shadow: 0 2px 4px rgba(79, 70, 229, 0.2);" src="${recipe.strMealThumb}" width="300" height="200" alt="${recipe.strMeal}">
    <ul style="color: #0F4C81; margin-left: 20px; float: left;  margin-top: 5px; ">
      ${Array.from({ length: 20 }, (_, i) => {
        const ingredient = recipe[`strIngredient${i + 1}`];
        if (ingredient) {
          return `<li>${ingredient} - ${recipe[`strMeasure${i + 1}`]}</li>`;
        }
        return '';
      }).join('')}
    </ul>
          <p style="color: #0F4C81; margin-top: 20px; padding-left: 50px; float: right;  "> <h4 > 👨‍🍳 Поради щодо приготування </h4>
 🧼 Підготуйте всі необхідні інгредієнти.  <br 🥣 Підготуйте посуд та кухонне приладдя.  <br>🔪 Наріжте або підготуйте продукти за потреби.  <br>🍳 Готуйте страву, дотримуючись рецепта.  <br>🧂 Дodайте спеції за власним смаком.  <br>🍽️ Подавайте страву після завершення приготування.</p>
 
`;
}