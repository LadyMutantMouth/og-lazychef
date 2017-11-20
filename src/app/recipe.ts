export class Recipe {
    id: number;
    author_id: number;
    recipeName: string;
    author: string;
    description: string;
    created_at: string;
    updated_at: string;
    mainImage?: URL;
    rating?: number;
    ingredients: [
        {
            id: number;
            amount: string;
            ingName: string;
            image?: URL;
        }
    ];
    prepStep: string;
    cookSteps: [
        {
            id: number;
            instruction: string;
            timer?: boolean;
            time?: string;
        }
    ]
}
