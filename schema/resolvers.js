const { recipeData, recipeReviewsData } = require("../FakeData");
const _ = require("lodash");

const resolvers = {
  Query: {
    recipes() {
      //make an API call to the database here
      return recipeData;
    },
    recipe: (parent, args) => {
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
};

module.exports = { resolvers };
