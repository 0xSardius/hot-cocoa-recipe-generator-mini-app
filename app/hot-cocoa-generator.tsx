"use client";

import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// Define ingredient types and their corresponding recipes
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
];

export default function HotCocoaGenerator() {
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
  const [recipe, setRecipe] = useState<(typeof RECIPES)[0] | null>(null);

  const generateRecipe = () => {
    const matchingRecipe = RECIPES.find((recipe) =>
      recipe.ingredients.some((ingredient) =>
        selectedIngredients.includes(ingredient)
      )
    );
    setRecipe(matchingRecipe || RECIPES[0]);
  };

  return (
    <div className="min-h-screen bg-pink-100 p-8 font-pixel">
      <div className="max-w-2xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-pink-800 pixel-text">
            Hot Cocoa Generator
          </h1>
          <p className="text-pink-600">
            Create your perfect cup of hot cocoa by selecting ingredients below!
          </p>
        </div>

        {/* Instructions */}
        <Card className="border-4 border-pink-300 bg-white/80 backdrop-blur">
          <CardContent className="p-6">
            <h2 className="text-xl font-bold text-pink-800 mb-2">
              How to Use:
            </h2>
            <p className="text-pink-600">
              1. Select your favorite ingredients from the list below
              <br />
              2. Click &quot;Generate Recipe&quot; to get your perfect hot cocoa
              recipe
              <br />
              3. Follow the recipe and enjoy your delicious drink!
            </p>
          </CardContent>
        </Card>

        {/* Ingredient Selection */}
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
                    onCheckedChange={(checked) => {
                      setSelectedIngredients(
                        checked
                          ? [...selectedIngredients, key]
                          : selectedIngredients.filter((i) => i !== key)
                      );
                    }}
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
              disabled={selectedIngredients.length === 0}
            >
              Generate Recipe
            </Button>
          </CardContent>
        </Card>

        {/* Recipe Display */}
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
      </div>

      <style jsx>{`
        @font-face {
          font-family: "Pixel";
          src: url("/pixel-font.woff2") format("woff2");
        }
      `}</style>
      <style global jsx>{`
        .font-pixel {
          font-family: "Pixel", system-ui, sans-serif;
        }

        .pixel-text {
          text-shadow: 2px 2px 0 #fcd5ce;
        }

        .pixel-button {
          image-rendering: pixelated;
          box-shadow: 3px 3px 0 #fcd5ce;
        }

        .animate-fade-in {
          animation: fadeIn 0.5s ease-in;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
