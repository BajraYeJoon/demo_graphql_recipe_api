const recipeData = [
  {
    id: "1",
    title: "Delicious Chocolate Cake",
    description:
      "Indulge in the rich and moist chocolate cake that will satisfy your sweet tooth.",
    createdAt: "2023-01-15T08:30:00.000Z",
    originalURL: "https://example.com/chocolate-cake",
    dietaryRestrictions: "NON_VEGETARIAN",
    ingredients: [
      {
        name: "Flour",
        quantity: "2 cups",
      },
      {
        name: "Sugar",
        quantity: "1.5 cups",
      },
      {
        name: "Cocoa powder",
        quantity: "1/2 cup",
      },
      {
        name: "Eggs",
        quantity: "3",
      },
      {
        name: "Butter",
        quantity: "1/2 cup",
      },
      {
        name: "Milk",
        quantity: "1 cup",
      },
    ],
  },
  {
    id: "2",
    title: "Spicy Chicken Tacos",
    description:
      "Enjoy these mouthwatering chicken tacos filled with a perfect blend of spices and toppings.",
    createdAt: "2023-02-22T15:45:00.000Z",
    originalURL: "https://example.com/chicken-tacos",
    dietaryRestrictions: "NON_VEGETARIAN",
    ingredients: [
      {
        name: "Chicken",
        quantity: "500g",
      },
      {
        name: "Tortillas",
        quantity: "8",
      },
      {
        name: "Spices",
        quantity: "To taste",
      },
      {
        name: "Salsa",
        quantity: "1/2 cup",
      },
      {
        name: "Guacamole",
        quantity: "1/2 cup",
      },
    ],
  },
  {
    id: "3",
    title: "Refreshing Fruit Smoothie",
    description:
      "Beat the summer heat with this delicious and healthy fruit smoothie packed with vitamins and antioxidants.",
    createdAt: "2023-03-10T11:00:00.000Z",
    originalURL: "https://example.com/fruit-smoothie",
    dietaryRestrictions: "VEGETARIAN",
    ingredients: [
      {
        name: "Bananas",
        quantity: "2",
      },
      {
        name: "Strawberries",
        quantity: "1 cup",
      },
      {
        name: "Blueberries",
        quantity: "1/2 cup",
      },
      {
        name: "Yogurt",
        quantity: "1 cup",
      },
      {
        name: "Honey",
        quantity: "2 tablespoons",
      },
    ],
  },
  {
    id: "4",
    title: "Creamy Garlic Pasta",
    description:
      "Savor the creamy and garlicky goodness of this delectable pasta dish that will leave you craving for more.",
    createdAt: "2023-04-05T19:20:00.000Z",
    originalURL: "https://example.com/garlic-pasta",
    dietaryRestrictions: "VEGETARIAN",
    ingredients: [
      {
        name: "Pasta",
        quantity: "8 ounces",
      },
      {
        name: "Garlic",
        quantity: "4 cloves",
      },
      {
        name: "Heavy cream",
        quantity: "1 cup",
      },
      {
        name: "Parmesan cheese",
        quantity: "1/2 cup",
      },
      {
        name: "Parsley",
        quantity: "1/4 cup",
      },
    ],
  },
  {
    id: "5",
    title: "Homestyle Chicken Curry",
    description:
      "Experience the authentic flavors of this homestyle chicken curry, made with a blend of aromatic spices and served with rice.",
    createdAt: "2023-05-17T14:10:00.000Z",
    originalURL: "https://example.com/chicken-curry",
    dietaryRestrictions: "NON_VEGETARIAN",
    ingredients: [
      {
        name: "Chicken",
        quantity: "800g",
      },
      {
        name: "Onion",
        quantity: "1 large",
      },
      {
        name: "Tomato",
        quantity: "2 medium",
      },
      {
        name: "Ginger",
        quantity: "1 tablespoon",
      },
      {
        name: "Garlic",
        quantity: "4 cloves",
      },
      {
        name: "Spices",
        quantity: "To taste",
      },
      {
        name: "Coconut milk",
        quantity: "1 cup",
      },
    ],
  },
];

const recipeReviewsData = [
  {
    id: "1",
    recipeId: "1",
    userId: "123",
    rating: 4,
    comment:
      "This chocolate cake was absolutely delicious! It was moist, rich, and had the perfect amount of chocolate flavor. Highly recommended!",
    date: "2023-06-01",
  },
  {
    id: "2",
    recipeId: "1",
    userId: "456",
    rating: 5,
    comment:
      "I made this chocolate cake for my son's birthday, and it was a huge hit! Everyone loved it, and it was so easy to follow the recipe. Will definitely make it again!",
    date: "2023-05-20",
  },
  {
    id: "3",
    recipeId: "2",
    userId: "789",
    rating: 4,
    comment:
      "These chicken tacos were deliciously spicy! The blend of spices and toppings was perfect. I'll be making them again for Taco Tuesday!",
    date: "2023-05-15",
  },
  {
    id: "4",
    recipeId: "3",
    userId: "123",
    rating: 1,
    comment:
      "The fruit smoothie was refreshing and packed with flavors. It was a great way to start my day. Loved it!",
    date: "2023-05-10",
  },
  {
    id: "5",
    recipeId: "4",
    userId: "456",
    rating: 3,
    comment:
      "The creamy garlic pasta was heavenly! The garlic flavor was just right, and the creaminess was out of this world. Definitely a new favorite!",
    date: "2023-04-25",
  },
];

const receipeInstructions = [
  {
    id: "1",
    title: "Simple Pancakes",
    instructions: [
      "In a large bowl, whisk together the flour, sugar, baking powder, and salt.",
      "In a separate bowl, whisk together the milk, eggs, and melted butter.",
      "Pour the wet ingredients into the dry ingredients and stir until just combined.",
      "Heat a lightly oiled griddle or frying pan over medium heat.",
      "Pour approximately 1/4 cup of batter onto the griddle for each pancake.",
      "Cook until bubbles form on the surface, then flip and cook until golden brown.",
      "Serve the pancakes warm with your favorite toppings.",
    ],
    isDifficulty: false,
  },
  {
    id: "2",
    title: "Spaghetti Bolognese",
    instructions: [
      "Heat olive oil in a large skillet over medium heat.",
      "Add chopped onions, minced garlic, and ground beef to the skillet.",
      "Cook until the beef is browned and onions are softened.",
      "Stir in tomato paste, crushed tomatoes, and a dash of salt and pepper.",
      "Simmer the sauce on low heat for about 30 minutes.",
      "Meanwhile, cook spaghetti according to package instructions.",
      "Drain the spaghetti and toss with the Bolognese sauce.",
      "Serve hot with grated Parmesan cheese on top.",
    ],
    isDifficulty: true,
  },
  {
    id: "3",
    title: "Caesar Salad",
    instructions: [
      "In a large bowl, combine chopped romaine lettuce, croutons, and Parmesan cheese.",
      "In a separate small bowl, whisk together olive oil, lemon juice, minced garlic, Dijon mustard, and Worcestershire sauce.",
      "Pour the dressing over the lettuce mixture and toss to coat evenly.",
      "Add freshly ground black pepper to taste.",
      "Garnish with additional Parmesan cheese and serve immediately.",
    ],
    isDifficulty: false,
  },
  {
    id: "4",
    title: "Chocolate Chip Cookies",
    instructions: [
      "Preheat the oven to 350°F (175°C) and line a baking sheet with parchment paper.",
      "In a mixing bowl, cream together softened butter, white sugar, and brown sugar until light and fluffy.",
      "Beat in eggs and vanilla extract.",
      "In a separate bowl, combine flour, baking soda, and salt.",
      "Gradually add the dry ingredients to the butter mixture and mix until just combined.",
      "Stir in chocolate chips.",
      "Drop rounded tablespoons of dough onto the prepared baking sheet.",
      "Bake for 8-10 minutes or until golden brown.",
      "Allow cookies to cool on the baking sheet for a few minutes, then transfer to a wire rack to cool completely.",
    ],
    isDifficulty: true,
  },
];

module.exports = { recipeData, recipeReviewsData, receipeInstructions };
