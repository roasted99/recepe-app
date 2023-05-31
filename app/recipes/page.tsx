import React from 'react'
import axios from 'axios';
import Link from 'next/link';
import { resolve } from 'path';

async function fetchRecipes() {
  try {
    const response = await axios({
          method: 'GET',
          url: 'https://api.spoonacular.com/recipes/random',
          params: {
            number: '10'
          },
          headers: {
            'x-api-key': process.env.API_KEY
          }
        })

        await new Promise((resolve) => setTimeout(resolve, 1000))
        const recepies = response.data.recipes;
        return recepies;
  } catch (error) {
    return null
  }


}

const RecipePage = async () => {
  const recipes = await fetchRecipes();

  return (
    <div className='mx-6 my-3 text-center'>
        <h1>Explore our recipes!</h1>   
        {recipes ?
        <ul className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
        {recipes.map((recipe) => (
          <li key={recipe.id} className='p-4 border-black rounded group relative'>
            <Link href={`recipes/${recipe.id}`}>
              <div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80'>
                <img src={recipe.image} alt={recipe.title} className='h-full w-full object-cover object-center lg:h-full lg:w-full'/>
              </div>
              <div className=''>
              <h1 className='text-lg'>{recipe.title}</h1>
              <p>Ready In: {recipe.readyInMinutes} mins</p>
              </div>
            </Link>
          </li>
        ))}
      </ul> :
      <h1>Could not get the recipes at this time.</h1>
    }
        
    </div>
  )
}

export default RecipePage