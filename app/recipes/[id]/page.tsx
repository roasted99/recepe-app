import React from 'react'
import axios from 'axios'

const recipeDetail = ({ params }) => {

const recipe = async function fetchRecipe() {
    try {
      const response = await axios({
            method: 'GET',
            url: `https://api.spoonacular.com/recipes/${params.id}`,
            headers: {
              'x-api-key': process.env.API_KEY
            }
          })
  
          await new Promise((resolve) => setTimeout(resolve, 1000))
  
          const recepie = response.data.recipes;
          return recepie;
    } catch (error) {
      return null
    }
  
  
  }
  return (
    <div>
      <h1>{recipe.title}</h1>  

      <p>{recipe.summary}</p>
    </div>
  )
}

export default recipeDetail