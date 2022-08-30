import { CustomError } from "../error/CustomError";
import { recipe, recipeOutput } from "../model/Recipe";
import { BaseDatabase } from "./BaseDatabase";



export class RecipeDatabase extends BaseDatabase {

    private TABLE = "Cookenu_recipes"

    public createRecipe = async (recipe: recipe) => {
        try {
            await RecipeDatabase.connection
                .insert({
                    id: recipe.id,
                    title: recipe.title,
                    description: recipe.description,
                    author_id: recipe.authorId
                })
                .into(this.TABLE);
        } catch (error: any) {
            throw new CustomError(400, error.message);
        }
    };

    public getRecipe = async (id: string): Promise<recipeOutput> => {

        try {

            const result = await RecipeDatabase.connection(this.TABLE)
                .select("id", "title", "description", "created_at")
                .where("id", "like", id)

            return result[0]

        } catch (error:any) {
            throw new CustomError(400, error.message)
        }

    }


    public getAllRecipes = async (): Promise<recipeOutput[]> => {

        try {

            const result = await RecipeDatabase.connection(this.TABLE)
                .select("id", "title", "description", "created_at")

            return result

        } catch (error:any) {
            throw new CustomError(400, error.message)
        }

    }


}