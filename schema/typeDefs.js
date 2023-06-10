const { gql } = require("apollo-server");

const typeDefs = gql`
  type Recipe {
    id: ID!
    title: String!
    description: String!
    createdAt: String!
    originalURL: String!
    ingredients: [Ingredients!]!
    dietaryRestrictions: DietaryRestrictions!
    relatedRecipes: [Recipe]
    recipeInstruction: [RecipeInstruction]
  }

  type RecipeInstruction {
    id: ID!
    title: String!
    instructions: String!
    isDifficult: Boolean!
  }

  type Ingredients {
    name: String!
    quantity: String!
  }

  type RecipeReview {
    id: ID!
    recipeId: ID!
    rating: Int!
    comment: String!
    date: String!
    userId: ID!
  }

  type Query {
    recipes: [Recipe!]!
    recipe(id: ID!): Recipe!
    recipeReviews: [RecipeReview!]!
    recipeReview(rating: Int!): RecipeReview!
  }

  enum DietaryRestrictions {
    VEGETARIAN
    NON_VEGETARIAN
  }
`;

module.exports = { typeDefs };
