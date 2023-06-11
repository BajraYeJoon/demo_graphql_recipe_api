const { recipeData, recipeReviewsData } = require("../FakeData");
const _ = require("lodash");

const resolvers = {
  Query: {
    recipes() {
      //make an API call to the database here
      return recipeData;
    },
    recipe: (parent, args, context, info) => {
      const { id } = args;
      const recipe = _.find(recipeData, { id });
      return recipe;
    },

    //reviewDatae
    recipeReviews: () => {
      return recipeReviewsData;
    },
    recipeReview: (parent, args) => {
      const { rating } = args;
      const review = _.find(recipeReviewsData, { rating });
      return review;
    },
  },

  Mutation: {
    addRecipe: (parent, args) => {
      const recipe = args.input;
      if (recipeData.length === 0) {
        recipe.id = "1"; // Assign the ID as "1" for the first recipe
      } else {
        const lastId = recipeData[recipeData.length - 1].id;
        recipe.id = String(Number(lastId) + 1);
      }
      recipeData.push(recipe);
      return recipe;
    },

    updateRecipeTitle: (parent, args) => {
      const { id, newTitle } = args.input;
      let recipeUpdate;
      recipeData.forEach((recipe) => {
        if (recipe.id === id) {
          recipe.title = newTitle;
          recipeUpdate = recipe;
        }
      });
      return recipeUpdate;
    },

    deleteRecipe: (parent, args) => {
      const { id } = args;
      _.remove(recipeData, (recipe) => recipe.id === id);
      return null;
    },
  },
};

module.exports = { resolvers };
