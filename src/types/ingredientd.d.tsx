interface Ingredient {
    name: { singular: string,
            plural: string 
    };
    quantity: number;
    unit: string;
    substitution?: {
        name: {
            singular: string,
            plural: string,
        },
        quantity: number,
        unit: string,
    }
}
export default Ingredient