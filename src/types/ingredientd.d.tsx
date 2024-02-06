interface Ingredient {
    name: { singular: string,
            plural: string 
    };
    quantity: number;
    unit: string;
    category: string;
    clarification?: string;
}
export default Ingredient