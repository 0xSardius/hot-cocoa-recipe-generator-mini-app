"use client";

import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const INGREDIENTS = {
  marshmallows: "fluffy marshmallows",
  whippedCream: "whipped cream",
  chocolate: "chocolate shavings",
  cinnamon: "ground cinnamon",
  caramel: "caramel sauce",
  peppermint: "crushed peppermint",
};

const RECIPES = [
  {
    name: "Classic Comfort",
    ingredients: ["marshmallows", "whippedCream"],
    instructions:
      "Heat milk until steaming. Add cocoa powder and sugar, stir well. Top with whipped cream and marshmallows.",
  },
  {
    name: "Chocolate Lover's Dream",
    ingredients: ["chocolate", "whippedCream"],
    instructions:
      "Heat milk until steaming. Mix in cocoa powder and sugar. Add chocolate shavings into the hot mixture. Top with whipped cream and extra chocolate shavings.",
  },
  {
    name: "Peppermint Paradise",
    ingredients: ["peppermint", "whippedCream"],
    instructions:
      "Heat milk until steaming. Add cocoa powder, sugar, and crushed peppermint. Stir until dissolved. Top with whipped cream and sprinkle with extra peppermint.",
  },
  {
    name: "Caramel Delight",
    ingredients: ["caramel", "whippedCream"],
    instructions:
      "Heat milk until steaming. Add cocoa powder and sugar. Stir in caramel sauce. Top with whipped cream and drizzle with extra caramel.",
  },
  {
    name: "Spiced Wonder",
    ingredients: ["cinnamon", "marshmallows"],
    instructions:
      "Heat milk until steaming. Add cocoa powder, sugar, and a pinch of cinnamon. Top with marshmallows and dust with extra cinnamon.",
  },
  {
    name: "Triple Chocolate Bliss",
    ingredients: ["chocolate", "marshmallows", "whippedCream"],
    instructions:
      "Heat milk until steaming. Mix in cocoa powder, sugar, and half of the chocolate shavings. Top with whipped cream, marshmallows, and remaining chocolate shavings.",
  },
  {
    name: "Cinnamon Caramel Swirl",
    ingredients: ["cinnamon", "caramel", "whippedCream"],
    instructions:
      "Heat milk until steaming. Add cocoa powder, sugar, and a pinch of cinnamon. Stir in half of the caramel sauce. Top with whipped cream and drizzle with remaining caramel.",
  },
  {
    name: "Peppermint Chocolate Chip",
    ingredients: ["peppermint", "chocolate", "marshmallows"],
    instructions:
      "Heat milk until steaming. Add cocoa powder, sugar, and crushed peppermint. Stir in chocolate shavings. Top with marshmallows and a sprinkle of crushed peppermint.",
  },
  {
    name: "S'mores Sensation",
    ingredients: ["marshmallows", "chocolate", "cinnamon"],
    instructions:
      "Heat milk until steaming. Add cocoa powder, sugar, and a pinch of cinnamon. Stir in half of the chocolate shavings. Top with marshmallows and remaining chocolate shavings.",
  },
  {
    name: "Salted Caramel Dream",
    ingredients: ["caramel", "chocolate", "whippedCream"],
    instructions:
      "Heat milk until steaming. Add cocoa powder and sugar. Stir in caramel sauce and chocolate shavings. Top with whipped cream and a drizzle of caramel.",
  },
  {
    name: "Cinnamon Peppermint Twist",
    ingredients: ["cinnamon", "peppermint"],
    instructions:
      "Heat milk until steaming. Add cocoa powder, sugar, a pinch of cinnamon, and crushed peppermint. Stir well and enjoy the unique flavor combination.",
  },
  {
    name: "Caramel Cinnamon Delight",
    ingredients: ["caramel", "cinnamon"],
    instructions:
      "Heat milk until steaming. Add cocoa powder and sugar. Stir in caramel sauce and a pinch of cinnamon for a warm, comforting drink.",
  },
  {
    name: "Peppermint Caramel Surprise",
    ingredients: ["peppermint", "caramel"],
    instructions:
      "Heat milk until steaming. Add cocoa powder and sugar. Stir in caramel sauce and crushed peppermint for a unique sweet and minty combination.",
  },
  {
    name: "Chocolate Cinnamon Bliss",
    ingredients: ["chocolate", "cinnamon"],
    instructions:
      "Heat milk until steaming. Add cocoa powder, sugar, and a pinch of cinnamon. Stir in chocolate shavings for a rich, spiced chocolate experience.",
  },
  {
    name: "Marshmallow Caramel Cloud",
    ingredients: ["marshmallows", "caramel"],
    instructions:
      "Heat milk until steaming. Add cocoa powder and sugar. Stir in caramel sauce and top with a cloud of marshmallows for a sweet, gooey treat.",
  },
  {
    name: "Chocolate Peppermint Patty",
    ingredients: ["chocolate", "peppermint"],
    instructions:
      "Heat milk until steaming. Add cocoa powder, sugar, and crushed peppermint. Stir in chocolate shavings for a refreshing chocolate mint flavor.",
  },
  {
    name: "Quadruple Delight",
    ingredients: ["chocolate", "marshmallows", "whippedCream", "caramel"],
    instructions:
      "Heat milk until steaming. Add cocoa powder and sugar. Stir in chocolate shavings and caramel sauce. Top with whipped cream and marshmallows. Drizzle with extra caramel.",
  },
  {
    name: "Spiced Peppermint Dream",
    ingredients: ["cinnamon", "peppermint", "whippedCream", "marshmallows"],
    instructions:
      "Heat milk until steaming. Add cocoa powder, sugar, a pinch of cinnamon, and crushed peppermint. Stir well. Top with whipped cream and marshmallows.",
  },
  {
    name: "Chocolate Caramel Cinnamon Swirl",
    ingredients: ["chocolate", "caramel", "cinnamon", "whippedCream"],
    instructions:
      "Heat milk until steaming. Add cocoa powder, sugar, and a pinch of cinnamon. Stir in chocolate shavings and caramel sauce. Top with whipped cream and a caramel drizzle.",
  },
  {
    name: "Ultimate Hot Cocoa",
    ingredients: [
      "chocolate",
      "marshmallows",
      "whippedCream",
      "caramel",
      "cinnamon",
      "peppermint",
    ],
    instructions:
      "Heat milk until steaming. Add cocoa powder, sugar, a pinch of cinnamon, and crushed peppermint. Stir in chocolate shavings and caramel sauce. Top with whipped cream and marshmallows. Finish with a sprinkle of cinnamon and a drizzle of caramel.",
  },
  {
    name: "Marshmallow Peppermint Cloud",
    ingredients: ["marshmallows", "peppermint"],
    instructions:
      "Heat milk until steaming. Add cocoa powder, sugar, and crushed peppermint. Top with marshmallows and a sprinkle of crushed peppermint for a minty, fluffy treat.",
  },
  {
    name: "Whipped Cream Cinnamon Swirl",
    ingredients: ["whippedCream", "cinnamon"],
    instructions:
      "Heat milk until steaming. Add cocoa powder, sugar, and a pinch of cinnamon. Top with a generous swirl of whipped cream and dust with extra cinnamon.",
  },
  {
    name: "Peppermint Whip",
    ingredients: ["whippedCream", "peppermint"],
    instructions:
      "Heat milk until steaming. Add cocoa powder, sugar, and crushed peppermint. Top with whipped cream and garnish with additional crushed peppermint for a refreshing finish.",
  },
];

export default function HotCocoaGenerator() {
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
  const [recipe, setRecipe] = useState<(typeof RECIPES)[0] | null>(null);

  const generateRecipe = () => {
    if (selectedIngredients.length < 2) return;

    // Step 1: Find exact matches (same ingredients, same count)
    const exactMatches = RECIPES.filter((recipe) => {
      if (recipe.ingredients.length !== selectedIngredients.length)
        return false;
      return selectedIngredients.every((ing) =>
        recipe.ingredients.includes(ing)
      );
    });

    if (exactMatches.length > 0) {
      const randomIndex = Math.floor(Math.random() * exactMatches.length);
      setRecipe(exactMatches[randomIndex]);
      return;
    }

    // Step 2: Find recipes that contain all selected ingredients (but may have extras)
    const containingMatches = RECIPES.filter((recipe) =>
      selectedIngredients.every((ing) => recipe.ingredients.includes(ing))
    ).sort((a, b) => a.ingredients.length - b.ingredients.length); // Sort by fewest total ingredients

    if (containingMatches.length > 0) {
      // Get the smallest valid recipes (ones with minimal extra ingredients)
      const minLength = containingMatches[0].ingredients.length;
      const bestContainingMatches = containingMatches.filter(
        (recipe) => recipe.ingredients.length === minLength
      );
      const randomIndex = Math.floor(
        Math.random() * bestContainingMatches.length
      );
      setRecipe(bestContainingMatches[randomIndex]);
      return;
    }

    // Step 3: Find partial matches (missing some ingredients)
    const scoredMatches = RECIPES.map((recipe) => {
      const matchingCount = recipe.ingredients.filter((ing) =>
        selectedIngredients.includes(ing)
      ).length;

      return {
        recipe,
        score: matchingCount / recipe.ingredients.length, // Prioritize recipes where matched ingredients are a larger percentage
        matchingCount,
      };
    })
      .filter(({ matchingCount }) => matchingCount > 0)
      .sort((a, b) => {
        // First sort by matching ingredient count
        if (b.matchingCount !== a.matchingCount) {
          return b.matchingCount - a.matchingCount;
        }
        // Then by score (percentage of recipe matched)
        if (b.score !== a.score) {
          return b.score - a.score;
        }
        // Finally prefer smaller recipes
        return a.recipe.ingredients.length - b.recipe.ingredients.length;
      });

    if (scoredMatches.length > 0) {
      // Get all recipes with the same best matching count
      const bestMatchCount = scoredMatches[0].matchingCount;
      const bestMatches = scoredMatches.filter(
        (match) => match.matchingCount === bestMatchCount
      );
      const randomIndex = Math.floor(Math.random() * bestMatches.length);
      setRecipe(bestMatches[randomIndex].recipe);
      return;
    }

    setRecipe(null);
  };

  const toggleIngredient = (ingredient: string, checked: boolean) => {
    setSelectedIngredients((prev) =>
      checked ? [...prev, ingredient] : prev.filter((i) => i !== ingredient)
    );
    setRecipe(null);
  };

  return (
    <div className="min-h-screen bg-pink-100 p-8 font-pixel">
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-pink-800 pixel-text">
            Hot Cocoa Generator
          </h1>
          <p className="text-pink-600">
            Create your perfect cup of hot cocoa by selecting ingredients below!
          </p>
        </div>

        <Card className="border-4 border-pink-300 bg-white/80 backdrop-blur">
          <CardContent className="p-6">
            <h2 className="text-xl font-bold text-pink-800 mb-2">
              How to Use:
            </h2>
            <p className="text-pink-600">
              1. Select 2 or more of your favorite ingredients from the list
              below
              <br />
              2. Click the &quot;Generate Recipe&quot; button
              <br />
              3. Follow the recipe and enjoy your delicious drink!
            </p>
          </CardContent>
        </Card>

        {recipe && (
          <Card className="border-4 border-pink-300 bg-white/80 backdrop-blur animate-fade-in">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-pink-800 mb-4">
                {recipe.name}
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-pink-700">You&apos;ll need:</h3>
                  <ul className="list-disc list-inside text-pink-600">
                    <li>2 cups milk</li>
                    <li>2 tablespoons cocoa powder</li>
                    <li>2 tablespoons sugar</li>
                    {recipe.ingredients.map((ingredient) => (
                      <li key={ingredient}>
                        {INGREDIENTS[ingredient as keyof typeof INGREDIENTS]}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-pink-700">Instructions:</h3>
                  <p className="text-pink-600">{recipe.instructions}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        <Card className="border-4 border-pink-300 bg-white/80 backdrop-blur">
          <CardContent className="p-6">
            <h2 className="text-xl font-bold text-pink-800 mb-4">
              Select Your Ingredients:
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(INGREDIENTS).map(([key, label]) => (
                <div key={key} className="flex items-center space-x-2">
                  <Checkbox
                    id={key}
                    checked={selectedIngredients.includes(key)}
                    onCheckedChange={(checked) =>
                      toggleIngredient(key, checked as boolean)
                    }
                    className="border-pink-400 data-[state=checked]:bg-pink-500"
                  />
                  <label htmlFor={key} className="text-pink-700 cursor-pointer">
                    {label}
                  </label>
                </div>
              ))}
            </div>
            <Button
              onClick={generateRecipe}
              className="w-full mt-6 bg-pink-500 hover:bg-pink-600 text-white pixel-button"
              disabled={selectedIngredients.length < 2}
            >
              Generate Recipe
            </Button>
          </CardContent>
        </Card>

        {selectedIngredients.length === 1 && (
          <Card className="border-4 border-pink-300 bg-white/80 backdrop-blur animate-fade-in">
            <CardContent className="p-6 text-center">
              <p className="text-pink-600">
                Please select at least one more ingredient to generate a recipe!
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
