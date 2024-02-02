interface Ingredient {
    name: { singular: string,
            plural: string 
    };
    quantity: number;
    unit: string;
    category: string;
    substitution?: {
        name: {
            singular: string,
            plural: string,
        },
        quantity: number,
        unit: string,
        category: string;
    }
}
export default Ingredient