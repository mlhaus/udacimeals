const API_ID = process.env.REACT_APP_API_ID
const APP_KEY = process.env.REACT_APP_APP_KEY

export function fetchRecipes (food = '') {
	food = food.trim()

	//return fetch(`https://api.edamam.com/search?q=${food}&app_id=${APP_ID}&app_key=${APP_KEY}`)
	return fetch(`https://api.edamam.com/search?q=${food}&app_id=01388bd6&app_key=e539e9d37622303d4d9d35e726021644`)
		.then((res) => res.json())
		.then(({ hits }) => hits.map(({ recipe }) => recipe))
}
