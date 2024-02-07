import Recipe from "../types/recipe.d";

let recipes: Recipe[] = [

    {
        id: 1,
        name: 'tikka masala vegetariano',
        tagline: 'curry estilo indio de papas y garbanzos',
        ingredients: [
            {
                name: {
                    singular: 'garbanzo',
                    plural: 'garbanzos'
                },
                quantity: 1,
                unit: 'lata',
                category: ''
            },
            {
                name: {
                    singular: 'papa',
                    plural: 'papas'
                },
                quantity: 2,
                unit: 'unidad',
                category: ''
            },
            {
                name: {
                    singular: 'coliflor',
                    plural: 'coliflores'
                },
                quantity: 1,
                unit: 'unidad',
                category: ''
            },
            {
                name: {
                    singular: 'cebolla',
                    plural: 'cebollas'
                },
                quantity: 1,
                unit: 'unidad',
                category: ''
            },
            {
                name: {
                    singular: 'gengibre',
                    plural: 'gengibres'
                },
                quantity: 10,
                unit: 'cm',
                category: ''
            },
            {
                name: {
                    singular: 'cilantro',
                    plural: 'cilantros'
                },
                quantity: 1,
                unit: 'manojo',
                category: ''
            },
            {
                name: {
                    singular: 'lata de tomate',
                    plural: 'lata de tomates'
                },
                quantity: 1,
                unit: 'lata',
                category: ''
            },
            {
                name: {
                    singular: 'leche de coco',
                    plural: 'leches de coco'
                },
                quantity: 200,
                unit: 'ml',
                category: ''
            },
            {
                name: {
                    singular: 'almendra',
                    plural: 'almendras'
                },
                quantity: 50,
                unit: 'gr.',
                category: ''
            },
            {
                name: {
                    singular: 'limón',
                    plural: 'limones'
                },
                quantity: 1,
                unit: 'unidad',
                category: ''
            },
            {
                name: {
                    singular: 'chile',
                    plural: 'chiles'
                },
                quantity: 1,
                unit: 'unidad',
                category: ''
            },
            {
                name: {
                    singular: 'ajo',
                    plural: 'ajos'
                },
                quantity: 2,
                unit: 'dientes',
                category: ''
            },

            {
                name: {
                    singular: 'pimineta de cayena',
                    plural: 'pimineta de cayena'
                },
                quantity: 1,
                unit: 'cdita.',
                category: ''
            },
            {
                name: {
                    singular: 'paprika',
                    plural: 'paprika'
                },
                quantity: 1,
                unit: 'cda.',
                category: ''
            },
            {
                name: {
                    singular: 'garam masala',
                    plural: 'garam masala'
                },
                quantity: 2,
                unit: 'cdita.',
                category: ''
            }, //en la receta original estaban separados los ingredientes de la pasta de tikka masala, yo los uní. Me parece que es mejor para luego hacer la lista de compras
        ],
        primaryIngredient: 'vegetales',
        secondaryIngredient: 'tomates',
        portions: 4, // esta receta hay que testearla para ver las porciones, le dejo 4 por ahora
        difficulty: 'Muy fácil',
        prepTime: 20, //hacemos esta distinción? hay recetas que no prepara en 15 min y las deja en el horno o estufa por 1 hora... Sof: por mí sí, esto hay que testear en esta receta
        totalTime: 20,
        img: 'https://source.unsplash.com/eEWlcfydzQ4', // esto no va, para esta está bien la foto de cocina a distancia
        imgThumb: 'https://source.unsplash.com/eEWlcfydzQ4',
        type: 'guiso',
        cuisine: ['india'],
        method: [
            'Hacer la pasta de curry procesando el chile, el ajo, la mitad del jengibre, la pimienta de cayena, la paprika, el garam masala, un tercio del cilantro, la mitad de las almendras, 2 cucharadas del jugo de los tomates y 2 cucharadas de aceite de oliva. Reservar. Si no lo quieres picante, no le agregues el chile.', //quiero poner el tip de rallar el jengibre congelado, pero no sé dónde
            'Picar los tallos de cilantro, la cebolla y rallar la otra mitad del jengibre (ver tip). Cortar las papas en trozos grandes y trocear el coliflor. En una sartén a fuego medio-alto, calentar aceite y luego agregar los tallos de cilantro, la cebolla y el jengibre y cocinar durante unos 10 minutos hasta que estén suaves y ligeramente dorados. Agregar las flores de coliflor, la lata de garbanzos escurrida y la papa. Luego agregar la pasta de tikka masala. Revolver bien para integrar y salpimentar. Agregar los tomates, rompiéndolos con las manos y la leche de coco. Cuando hierva, bajar el fuego a medio-bajo, tapar y cocinar lento durante 20 minutos, luego retirar la tapa y cocinar por otros 5 minutos más hasta que reduzca la salsa.',
            'Servir y terminar con el resto de las almendras y las hojas de cilantro. Agregar un gajo de limón. Queda muy bien con unas cucharadas de yogur natural también.',
        ],
        tips: [''],
        //dietary requirement tags
        isVegan: true,
        isDairyFree: true,
        isVegetarian: true,
        isGlutenFree: true,
        isSpicy: true,

        //time management tags
        isQuickAndEasy: true,
        isBudgetFriendly: true,
        isBatchCooking: false,

        //health tags
        isLowCarb: false,
        isHighProtein: false,
        isLowCalorie: true,
        isHeartHealthy: true,
        isMainDish: true,
        isDessert: false,
        isSideDish: true,
        isSpringDish: false,
        isSummerDish: false,
        isAutumnDish: false,
        isWinterDish: false,
        saves: 0,
    },
    {
        id: 1,
        name: 'tikka masala vegetariano',
        tagline: 'curry estilo indio de papas y garbanzos',
        ingredients: [
            {
                name: {
                    singular: 'garbanzo',
                    plural: 'garbanzos'
                },
                quantity: 1,
                unit: 'lata',
                category: ''
            },
            {
                name: {
                    singular: 'papa',
                    plural: 'papas'
                },
                quantity: 2,
                unit: 'unidad',
                category: ''
            },
            {
                name: {
                    singular: 'coliflor',
                    plural: 'coliflores'
                },
                quantity: 1,
                unit: 'unidad',
                category: ''
            },
            {
                name: {
                    singular: 'cebolla',
                    plural: 'cebollas'
                },
                quantity: 1,
                unit: 'unidad',
                category: ''
            },
            {
                name: {
                    singular: 'gengibre',
                    plural: 'gengibres'
                },
                quantity: 10,
                unit: 'cm',
                category: ''
            },
            {
                name: {
                    singular: 'cilantro',
                    plural: 'cilantros'
                },
                quantity: 1,
                unit: 'manojo',
                category: ''
            },
            {
                name: {
                    singular: 'lata de tomate',
                    plural: 'lata de tomates'
                },
                quantity: 1,
                unit: 'lata',
                category: ''
            },
            {
                name: {
                    singular: 'leche de coco',
                    plural: 'leches de coco'
                },
                quantity: 200,
                unit: 'ml',
                category: ''
            },
            {
                name: {
                    singular: 'almendra',
                    plural: 'almendras'
                },
                quantity: 50,
                unit: 'gr.',
                category: ''
            },
            {
                name: {
                    singular: 'limón',
                    plural: 'limones'
                },
                quantity: 1,
                unit: 'unidad',
                category: ''
            },
            {
                name: {
                    singular: 'chile',
                    plural: 'chiles'
                },
                quantity: 1,
                unit: 'unidad',
                category: ''
            },
            {
                name: {
                    singular: 'ajo',
                    plural: 'ajos'
                },
                quantity: 2,
                unit: 'dientes',
                category: ''
            },

            {
                name: {
                    singular: 'pimineta de cayena',
                    plural: 'pimineta de cayena'
                },
                quantity: 1,
                unit: 'cdita.',
                category: ''
            },
            {
                name: {
                    singular: 'paprika',
                    plural: 'paprika'
                },
                quantity: 1,
                unit: 'cda.',
                category: ''
            },
            {
                name: {
                    singular: 'garam masala',
                    plural: 'garam masala'
                },
                quantity: 2,
                unit: 'cdita.',
                category: ''
            }, //en la receta original estaban separados los ingredientes de la pasta de tikka masala, yo los uní. Me parece que es mejor para luego hacer la lista de compras
        ],
        primaryIngredient: 'vegetales',
        secondaryIngredient: 'tomates',
        portions: 4, // esta receta hay que testearla para ver las porciones, le dejo 4 por ahora
        difficulty: 'Muy fácil',
        prepTime: 20, //hacemos esta distinción? hay recetas que no prepara en 15 min y las deja en el horno o estufa por 1 hora... Sof: por mí sí, esto hay que testear en esta receta
        totalTime: 20,
        img: 'https://source.unsplash.com/eEWlcfydzQ4', // esto no va, para esta está bien la foto de cocina a distancia
        imgThumb: 'https://source.unsplash.com/eEWlcfydzQ4',
        type: 'guiso',
        cuisine: ['india'],
        method: [
            'Hacer la pasta de curry procesando el chile, el ajo, la mitad del jengibre, la pimienta de cayena, la paprika, el garam masala, un tercio del cilantro, la mitad de las almendras, 2 cucharadas del jugo de los tomates y 2 cucharadas de aceite de oliva. Reservar. Si no lo quieres picante, no le agregues el chile.', //quiero poner el tip de rallar el jengibre congelado, pero no sé dónde
            'Picar los tallos de cilantro, la cebolla y rallar la otra mitad del jengibre (ver tip). Cortar las papas en trozos grandes y trocear el coliflor. En una sartén a fuego medio-alto, calentar aceite y luego agregar los tallos de cilantro, la cebolla y el jengibre y cocinar durante unos 10 minutos hasta que estén suaves y ligeramente dorados. Agregar las flores de coliflor, la lata de garbanzos escurrida y la papa. Luego agregar la pasta de tikka masala. Revolver bien para integrar y salpimentar. Agregar los tomates, rompiéndolos con las manos y la leche de coco. Cuando hierva, bajar el fuego a medio-bajo, tapar y cocinar lento durante 20 minutos, luego retirar la tapa y cocinar por otros 5 minutos más hasta que reduzca la salsa.',
            'Servir y terminar con el resto de las almendras y las hojas de cilantro. Agregar un gajo de limón. Queda muy bien con unas cucharadas de yogur natural también.',
        ],
        tips: [''],
        //dietary requirement tags
        isVegan: true,
        isDairyFree: true,
        isVegetarian: true,
        isGlutenFree: true,
        isSpicy: true,

        //time management tags
        isQuickAndEasy: true,
        isBudgetFriendly: true,
        isBatchCooking: false,

        //health tags
        isLowCarb: false,
        isHighProtein: false,
        isLowCalorie: true,
        isHeartHealthy: true,
        isMainDish: true,
        isDessert: false,
        isSideDish: true,
        isSpringDish: false,
        isSummerDish: false,
        isAutumnDish: false,
        isWinterDish: false,
        saves: 0,
    },
    {
        id: 1,
        name: 'tikka masala vegetariano',
        tagline: 'curry estilo indio de papas y garbanzos',
        ingredients: [
            {
                name: {
                    singular: 'garbanzo',
                    plural: 'garbanzos'
                },
                quantity: 1,
                unit: 'lata',
                category: ''
            },
            {
                name: {
                    singular: 'papa',
                    plural: 'papas'
                },
                quantity: 2,
                unit: 'unidad',
                category: ''
            },
            {
                name: {
                    singular: 'coliflor',
                    plural: 'coliflores'
                },
                quantity: 1,
                unit: 'unidad',
                category: ''
            },
            {
                name: {
                    singular: 'cebolla',
                    plural: 'cebollas'
                },
                quantity: 1,
                unit: 'unidad',
                category: ''
            },
            {
                name: {
                    singular: 'gengibre',
                    plural: 'gengibres'
                },
                quantity: 10,
                unit: 'cm',
                category: ''
            },
            {
                name: {
                    singular: 'cilantro',
                    plural: 'cilantros'
                },
                quantity: 1,
                unit: 'manojo',
                category: ''
            },
            {
                name: {
                    singular: 'lata de tomate',
                    plural: 'lata de tomates'
                },
                quantity: 1,
                unit: 'lata',
                category: ''
            },
            {
                name: {
                    singular: 'leche de coco',
                    plural: 'leches de coco'
                },
                quantity: 200,
                unit: 'ml',
                category: ''
            },
            {
                name: {
                    singular: 'almendra',
                    plural: 'almendras'
                },
                quantity: 50,
                unit: 'gr.',
                category: ''
            },
            {
                name: {
                    singular: 'limón',
                    plural: 'limones'
                },
                quantity: 1,
                unit: 'unidad',
                category: ''
            },
            {
                name: {
                    singular: 'chile',
                    plural: 'chiles'
                },
                quantity: 1,
                unit: 'unidad',
                category: ''
            },
            {
                name: {
                    singular: 'ajo',
                    plural: 'ajos'
                },
                quantity: 2,
                unit: 'dientes',
                category: ''
            },

            {
                name: {
                    singular: 'pimineta de cayena',
                    plural: 'pimineta de cayena'
                },
                quantity: 1,
                unit: 'cdita.',
                category: ''
            },
            {
                name: {
                    singular: 'paprika',
                    plural: 'paprika'
                },
                quantity: 1,
                unit: 'cda.',
                category: ''
            },
            {
                name: {
                    singular: 'garam masala',
                    plural: 'garam masala'
                },
                quantity: 2,
                unit: 'cdita.',
                category: ''
            }, //en la receta original estaban separados los ingredientes de la pasta de tikka masala, yo los uní. Me parece que es mejor para luego hacer la lista de compras
        ],
        primaryIngredient: 'vegetales',
        secondaryIngredient: 'tomates',
        portions: 4, // esta receta hay que testearla para ver las porciones, le dejo 4 por ahora
        difficulty: 'Muy fácil',
        prepTime: 20, //hacemos esta distinción? hay recetas que no prepara en 15 min y las deja en el horno o estufa por 1 hora... Sof: por mí sí, esto hay que testear en esta receta
        totalTime: 20,
        img: 'https://source.unsplash.com/eEWlcfydzQ4', // esto no va, para esta está bien la foto de cocina a distancia
        imgThumb: 'https://source.unsplash.com/eEWlcfydzQ4',
        type: 'guiso',
        cuisine: ['india'],
        method: [
            'Hacer la pasta de curry procesando el chile, el ajo, la mitad del jengibre, la pimienta de cayena, la paprika, el garam masala, un tercio del cilantro, la mitad de las almendras, 2 cucharadas del jugo de los tomates y 2 cucharadas de aceite de oliva. Reservar. Si no lo quieres picante, no le agregues el chile.', //quiero poner el tip de rallar el jengibre congelado, pero no sé dónde
            'Picar los tallos de cilantro, la cebolla y rallar la otra mitad del jengibre (ver tip). Cortar las papas en trozos grandes y trocear el coliflor. En una sartén a fuego medio-alto, calentar aceite y luego agregar los tallos de cilantro, la cebolla y el jengibre y cocinar durante unos 10 minutos hasta que estén suaves y ligeramente dorados. Agregar las flores de coliflor, la lata de garbanzos escurrida y la papa. Luego agregar la pasta de tikka masala. Revolver bien para integrar y salpimentar. Agregar los tomates, rompiéndolos con las manos y la leche de coco. Cuando hierva, bajar el fuego a medio-bajo, tapar y cocinar lento durante 20 minutos, luego retirar la tapa y cocinar por otros 5 minutos más hasta que reduzca la salsa.',
            'Servir y terminar con el resto de las almendras y las hojas de cilantro. Agregar un gajo de limón. Queda muy bien con unas cucharadas de yogur natural también.',
        ],
        tips: [''],
        //dietary requirement tags
        isVegan: true,
        isDairyFree: true,
        isVegetarian: true,
        isGlutenFree: true,
        isSpicy: true,

        //time management tags
        isQuickAndEasy: true,
        isBudgetFriendly: true,
        isBatchCooking: false,

        //health tags
        isLowCarb: false,
        isHighProtein: false,
        isLowCalorie: true,
        isHeartHealthy: true,
        isMainDish: true,
        isDessert: false,
        isSideDish: true,
        isSpringDish: false,
        isSummerDish: false,
        isAutumnDish: false,
        isWinterDish: false,
        saves: 0,
    },
    {
        id: 1,
        name: 'tikka masala vegetariano',
        tagline: 'curry estilo indio de papas y garbanzos',
        ingredients: [
            {
                name: {
                    singular: 'garbanzo',
                    plural: 'garbanzos'
                },
                quantity: 1,
                unit: 'lata',
                category: ''
            },
            {
                name: {
                    singular: 'papa',
                    plural: 'papas'
                },
                quantity: 2,
                unit: 'unidad',
                category: ''
            },
            {
                name: {
                    singular: 'coliflor',
                    plural: 'coliflores'
                },
                quantity: 1,
                unit: 'unidad',
                category: ''
            },
            {
                name: {
                    singular: 'cebolla',
                    plural: 'cebollas'
                },
                quantity: 1,
                unit: 'unidad',
                category: ''
            },
            {
                name: {
                    singular: 'gengibre',
                    plural: 'gengibres'
                },
                quantity: 10,
                unit: 'cm',
                category: ''
            },
            {
                name: {
                    singular: 'cilantro',
                    plural: 'cilantros'
                },
                quantity: 1,
                unit: 'manojo',
                category: ''
            },
            {
                name: {
                    singular: 'lata de tomate',
                    plural: 'lata de tomates'
                },
                quantity: 1,
                unit: 'lata',
                category: ''
            },
            {
                name: {
                    singular: 'leche de coco',
                    plural: 'leches de coco'
                },
                quantity: 200,
                unit: 'ml',
                category: ''
            },
            {
                name: {
                    singular: 'almendra',
                    plural: 'almendras'
                },
                quantity: 50,
                unit: 'gr.',
                category: ''
            },
            {
                name: {
                    singular: 'limón',
                    plural: 'limones'
                },
                quantity: 1,
                unit: 'unidad',
                category: ''
            },
            {
                name: {
                    singular: 'chile',
                    plural: 'chiles'
                },
                quantity: 1,
                unit: 'unidad',
                category: ''
            },
            {
                name: {
                    singular: 'ajo',
                    plural: 'ajos'
                },
                quantity: 2,
                unit: 'dientes',
                category: ''
            },

            {
                name: {
                    singular: 'pimineta de cayena',
                    plural: 'pimineta de cayena'
                },
                quantity: 1,
                unit: 'cdita.',
                category: ''
            },
            {
                name: {
                    singular: 'paprika',
                    plural: 'paprika'
                },
                quantity: 1,
                unit: 'cda.',
                category: ''
            },
            {
                name: {
                    singular: 'garam masala',
                    plural: 'garam masala'
                },
                quantity: 2,
                unit: 'cdita.',
                category: ''
            }, //en la receta original estaban separados los ingredientes de la pasta de tikka masala, yo los uní. Me parece que es mejor para luego hacer la lista de compras
        ],
        primaryIngredient: 'vegetales',
        secondaryIngredient: 'tomates',
        portions: 4, // esta receta hay que testearla para ver las porciones, le dejo 4 por ahora
        difficulty: 'Muy fácil',
        prepTime: 20, //hacemos esta distinción? hay recetas que no prepara en 15 min y las deja en el horno o estufa por 1 hora... Sof: por mí sí, esto hay que testear en esta receta
        totalTime: 20,
        img: 'https://source.unsplash.com/eEWlcfydzQ4', // esto no va, para esta está bien la foto de cocina a distancia
        imgThumb: 'https://source.unsplash.com/eEWlcfydzQ4',
        type: 'guiso',
        cuisine: ['india'],
        method: [
            'Hacer la pasta de curry procesando el chile, el ajo, la mitad del jengibre, la pimienta de cayena, la paprika, el garam masala, un tercio del cilantro, la mitad de las almendras, 2 cucharadas del jugo de los tomates y 2 cucharadas de aceite de oliva. Reservar. Si no lo quieres picante, no le agregues el chile.', //quiero poner el tip de rallar el jengibre congelado, pero no sé dónde
            'Picar los tallos de cilantro, la cebolla y rallar la otra mitad del jengibre (ver tip). Cortar las papas en trozos grandes y trocear el coliflor. En una sartén a fuego medio-alto, calentar aceite y luego agregar los tallos de cilantro, la cebolla y el jengibre y cocinar durante unos 10 minutos hasta que estén suaves y ligeramente dorados. Agregar las flores de coliflor, la lata de garbanzos escurrida y la papa. Luego agregar la pasta de tikka masala. Revolver bien para integrar y salpimentar. Agregar los tomates, rompiéndolos con las manos y la leche de coco. Cuando hierva, bajar el fuego a medio-bajo, tapar y cocinar lento durante 20 minutos, luego retirar la tapa y cocinar por otros 5 minutos más hasta que reduzca la salsa.',
            'Servir y terminar con el resto de las almendras y las hojas de cilantro. Agregar un gajo de limón. Queda muy bien con unas cucharadas de yogur natural también.',
        ],
        tips: [''],
        //dietary requirement tags
        isVegan: true,
        isDairyFree: true,
        isVegetarian: true,
        isGlutenFree: true,
        isSpicy: true,

        //time management tags
        isQuickAndEasy: true,
        isBudgetFriendly: true,
        isBatchCooking: false,

        //health tags
        isLowCarb: false,
        isHighProtein: false,
        isLowCalorie: true,
        isHeartHealthy: true,
        isMainDish: true,
        isDessert: false,
        isSideDish: true,
        isSpringDish: false,
        isSummerDish: false,
        isAutumnDish: false,
        isWinterDish: false,
        saves: 0,
    },
    {
        id: 1,
        name: 'tikka masala vegetariano',
        tagline: 'curry estilo indio de papas y garbanzos',
        ingredients: [
            {
                name: {
                    singular: 'garbanzo',
                    plural: 'garbanzos'
                },
                quantity: 1,
                unit: 'lata',
                category: ''
            },
            {
                name: {
                    singular: 'papa',
                    plural: 'papas'
                },
                quantity: 2,
                unit: 'unidad',
                category: ''
            },
            {
                name: {
                    singular: 'coliflor',
                    plural: 'coliflores'
                },
                quantity: 1,
                unit: 'unidad',
                category: ''
            },
            {
                name: {
                    singular: 'cebolla',
                    plural: 'cebollas'
                },
                quantity: 1,
                unit: 'unidad',
                category: ''
            },
            {
                name: {
                    singular: 'gengibre',
                    plural: 'gengibres'
                },
                quantity: 10,
                unit: 'cm',
                category: ''
            },
            {
                name: {
                    singular: 'cilantro',
                    plural: 'cilantros'
                },
                quantity: 1,
                unit: 'manojo',
                category: ''
            },
            {
                name: {
                    singular: 'lata de tomate',
                    plural: 'lata de tomates'
                },
                quantity: 1,
                unit: 'lata',
                category: ''
            },
            {
                name: {
                    singular: 'leche de coco',
                    plural: 'leches de coco'
                },
                quantity: 200,
                unit: 'ml',
                category: ''
            },
            {
                name: {
                    singular: 'almendra',
                    plural: 'almendras'
                },
                quantity: 50,
                unit: 'gr.',
                category: ''
            },
            {
                name: {
                    singular: 'limón',
                    plural: 'limones'
                },
                quantity: 1,
                unit: 'unidad',
                category: ''
            },
            {
                name: {
                    singular: 'chile',
                    plural: 'chiles'
                },
                quantity: 1,
                unit: 'unidad',
                category: ''
            },
            {
                name: {
                    singular: 'ajo',
                    plural: 'ajos'
                },
                quantity: 2,
                unit: 'dientes',
                category: ''
            },

            {
                name: {
                    singular: 'pimineta de cayena',
                    plural: 'pimineta de cayena'
                },
                quantity: 1,
                unit: 'cdita.',
                category: ''
            },
            {
                name: {
                    singular: 'paprika',
                    plural: 'paprika'
                },
                quantity: 1,
                unit: 'cda.',
                category: ''
            },
            {
                name: {
                    singular: 'garam masala',
                    plural: 'garam masala'
                },
                quantity: 2,
                unit: 'cdita.',
                category: ''
            }, //en la receta original estaban separados los ingredientes de la pasta de tikka masala, yo los uní. Me parece que es mejor para luego hacer la lista de compras
        ],
        primaryIngredient: 'vegetales',
        secondaryIngredient: 'tomates',
        portions: 4, // esta receta hay que testearla para ver las porciones, le dejo 4 por ahora
        difficulty: 'Muy fácil',
        prepTime: 20, //hacemos esta distinción? hay recetas que no prepara en 15 min y las deja en el horno o estufa por 1 hora... Sof: por mí sí, esto hay que testear en esta receta
        totalTime: 20,
        img: 'https://source.unsplash.com/eEWlcfydzQ4', // esto no va, para esta está bien la foto de cocina a distancia
        imgThumb: 'https://source.unsplash.com/eEWlcfydzQ4',
        type: 'guiso',
        cuisine: ['india'],
        method: [
            'Hacer la pasta de curry procesando el chile, el ajo, la mitad del jengibre, la pimienta de cayena, la paprika, el garam masala, un tercio del cilantro, la mitad de las almendras, 2 cucharadas del jugo de los tomates y 2 cucharadas de aceite de oliva. Reservar. Si no lo quieres picante, no le agregues el chile.', //quiero poner el tip de rallar el jengibre congelado, pero no sé dónde
            'Picar los tallos de cilantro, la cebolla y rallar la otra mitad del jengibre (ver tip). Cortar las papas en trozos grandes y trocear el coliflor. En una sartén a fuego medio-alto, calentar aceite y luego agregar los tallos de cilantro, la cebolla y el jengibre y cocinar durante unos 10 minutos hasta que estén suaves y ligeramente dorados. Agregar las flores de coliflor, la lata de garbanzos escurrida y la papa. Luego agregar la pasta de tikka masala. Revolver bien para integrar y salpimentar. Agregar los tomates, rompiéndolos con las manos y la leche de coco. Cuando hierva, bajar el fuego a medio-bajo, tapar y cocinar lento durante 20 minutos, luego retirar la tapa y cocinar por otros 5 minutos más hasta que reduzca la salsa.',
            'Servir y terminar con el resto de las almendras y las hojas de cilantro. Agregar un gajo de limón. Queda muy bien con unas cucharadas de yogur natural también.',
        ],
        tips: [''],
        //dietary requirement tags
        isVegan: true,
        isDairyFree: true,
        isVegetarian: true,
        isGlutenFree: true,
        isSpicy: true,

        //time management tags
        isQuickAndEasy: true,
        isBudgetFriendly: true,
        isBatchCooking: false,

        //health tags
        isLowCarb: false,
        isHighProtein: false,
        isLowCalorie: true,
        isHeartHealthy: true,
        isMainDish: true,
        isDessert: false,
        isSideDish: true,
        isSpringDish: false,
        isSummerDish: false,
        isAutumnDish: false,
        isWinterDish: false,
        saves: 0,
    },
    {
        id: 1,
        name: 'tikka masala vegetariano',
        tagline: 'curry estilo indio de papas y garbanzos',
        ingredients: [
            {
                name: {
                    singular: 'garbanzo',
                    plural: 'garbanzos'
                },
                quantity: 1,
                unit: 'lata',
                category: ''
            },
            {
                name: {
                    singular: 'papa',
                    plural: 'papas'
                },
                quantity: 2,
                unit: 'unidad',
                category: ''
            },
            {
                name: {
                    singular: 'coliflor',
                    plural: 'coliflores'
                },
                quantity: 1,
                unit: 'unidad',
                category: ''
            },
            {
                name: {
                    singular: 'cebolla',
                    plural: 'cebollas'
                },
                quantity: 1,
                unit: 'unidad',
                category: ''
            },
            {
                name: {
                    singular: 'gengibre',
                    plural: 'gengibres'
                },
                quantity: 10,
                unit: 'cm',
                category: ''
            },
            {
                name: {
                    singular: 'cilantro',
                    plural: 'cilantros'
                },
                quantity: 1,
                unit: 'manojo',
                category: ''
            },
            {
                name: {
                    singular: 'lata de tomate',
                    plural: 'lata de tomates'
                },
                quantity: 1,
                unit: 'lata',
                category: ''
            },
            {
                name: {
                    singular: 'leche de coco',
                    plural: 'leches de coco'
                },
                quantity: 200,
                unit: 'ml',
                category: ''
            },
            {
                name: {
                    singular: 'almendra',
                    plural: 'almendras'
                },
                quantity: 50,
                unit: 'gr.',
                category: ''
            },
            {
                name: {
                    singular: 'limón',
                    plural: 'limones'
                },
                quantity: 1,
                unit: 'unidad',
                category: ''
            },
            {
                name: {
                    singular: 'chile',
                    plural: 'chiles'
                },
                quantity: 1,
                unit: 'unidad',
                category: ''
            },
            {
                name: {
                    singular: 'ajo',
                    plural: 'ajos'
                },
                quantity: 2,
                unit: 'dientes',
                category: ''
            },

            {
                name: {
                    singular: 'pimineta de cayena',
                    plural: 'pimineta de cayena'
                },
                quantity: 1,
                unit: 'cdita.',
                category: ''
            },
            {
                name: {
                    singular: 'paprika',
                    plural: 'paprika'
                },
                quantity: 1,
                unit: 'cda.',
                category: ''
            },
            {
                name: {
                    singular: 'garam masala',
                    plural: 'garam masala'
                },
                quantity: 2,
                unit: 'cdita.',
                category: ''
            }, //en la receta original estaban separados los ingredientes de la pasta de tikka masala, yo los uní. Me parece que es mejor para luego hacer la lista de compras
        ],
        primaryIngredient: 'vegetales',
        secondaryIngredient: 'tomates',
        portions: 4, // esta receta hay que testearla para ver las porciones, le dejo 4 por ahora
        difficulty: 'Muy fácil',
        prepTime: 20, //hacemos esta distinción? hay recetas que no prepara en 15 min y las deja en el horno o estufa por 1 hora... Sof: por mí sí, esto hay que testear en esta receta
        totalTime: 20,
        img: 'https://source.unsplash.com/eEWlcfydzQ4', // esto no va, para esta está bien la foto de cocina a distancia
        imgThumb: 'https://source.unsplash.com/eEWlcfydzQ4',
        type: 'guiso',
        cuisine: ['india'],
        method: [
            'Hacer la pasta de curry procesando el chile, el ajo, la mitad del jengibre, la pimienta de cayena, la paprika, el garam masala, un tercio del cilantro, la mitad de las almendras, 2 cucharadas del jugo de los tomates y 2 cucharadas de aceite de oliva. Reservar. Si no lo quieres picante, no le agregues el chile.', //quiero poner el tip de rallar el jengibre congelado, pero no sé dónde
            'Picar los tallos de cilantro, la cebolla y rallar la otra mitad del jengibre (ver tip). Cortar las papas en trozos grandes y trocear el coliflor. En una sartén a fuego medio-alto, calentar aceite y luego agregar los tallos de cilantro, la cebolla y el jengibre y cocinar durante unos 10 minutos hasta que estén suaves y ligeramente dorados. Agregar las flores de coliflor, la lata de garbanzos escurrida y la papa. Luego agregar la pasta de tikka masala. Revolver bien para integrar y salpimentar. Agregar los tomates, rompiéndolos con las manos y la leche de coco. Cuando hierva, bajar el fuego a medio-bajo, tapar y cocinar lento durante 20 minutos, luego retirar la tapa y cocinar por otros 5 minutos más hasta que reduzca la salsa.',
            'Servir y terminar con el resto de las almendras y las hojas de cilantro. Agregar un gajo de limón. Queda muy bien con unas cucharadas de yogur natural también.',
        ],
        tips: [''],
        //dietary requirement tags
        isVegan: true,
        isDairyFree: true,
        isVegetarian: true,
        isGlutenFree: true,
        isSpicy: true,

        //time management tags
        isQuickAndEasy: true,
        isBudgetFriendly: true,
        isBatchCooking: false,

        //health tags
        isLowCarb: false,
        isHighProtein: false,
        isLowCalorie: true,
        isHeartHealthy: true,
        isMainDish: true,
        isDessert: false,
        isSideDish: true,
        isSpringDish: false,
        isSummerDish: false,
        isAutumnDish: false,
        isWinterDish: false,
        saves: 0,
    },
    {
        id: 1,
        name: 'tikka masala vegetariano',
        tagline: 'curry estilo indio de papas y garbanzos',
        ingredients: [
            {
                name: {
                    singular: 'garbanzo',
                    plural: 'garbanzos'
                },
                quantity: 1,
                unit: 'lata',
                category: ''
            },
            {
                name: {
                    singular: 'papa',
                    plural: 'papas'
                },
                quantity: 2,
                unit: 'unidad',
                category: ''
            },
            {
                name: {
                    singular: 'coliflor',
                    plural: 'coliflores'
                },
                quantity: 1,
                unit: 'unidad',
                category: ''
            },
            {
                name: {
                    singular: 'cebolla',
                    plural: 'cebollas'
                },
                quantity: 1,
                unit: 'unidad',
                category: ''
            },
            {
                name: {
                    singular: 'gengibre',
                    plural: 'gengibres'
                },
                quantity: 10,
                unit: 'cm',
                category: ''
            },
            {
                name: {
                    singular: 'cilantro',
                    plural: 'cilantros'
                },
                quantity: 1,
                unit: 'manojo',
                category: ''
            },
            {
                name: {
                    singular: 'lata de tomate',
                    plural: 'lata de tomates'
                },
                quantity: 1,
                unit: 'lata',
                category: ''
            },
            {
                name: {
                    singular: 'leche de coco',
                    plural: 'leches de coco'
                },
                quantity: 200,
                unit: 'ml',
                category: ''
            },
            {
                name: {
                    singular: 'almendra',
                    plural: 'almendras'
                },
                quantity: 50,
                unit: 'gr.',
                category: ''
            },
            {
                name: {
                    singular: 'limón',
                    plural: 'limones'
                },
                quantity: 1,
                unit: 'unidad',
                category: ''
            },
            {
                name: {
                    singular: 'chile',
                    plural: 'chiles'
                },
                quantity: 1,
                unit: 'unidad',
                category: ''
            },
            {
                name: {
                    singular: 'ajo',
                    plural: 'ajos'
                },
                quantity: 2,
                unit: 'dientes',
                category: ''
            },

            {
                name: {
                    singular: 'pimineta de cayena',
                    plural: 'pimineta de cayena'
                },
                quantity: 1,
                unit: 'cdita.',
                category: ''
            },
            {
                name: {
                    singular: 'paprika',
                    plural: 'paprika'
                },
                quantity: 1,
                unit: 'cda.',
                category: ''
            },
            {
                name: {
                    singular: 'garam masala',
                    plural: 'garam masala'
                },
                quantity: 2,
                unit: 'cdita.',
                category: ''
            }, //en la receta original estaban separados los ingredientes de la pasta de tikka masala, yo los uní. Me parece que es mejor para luego hacer la lista de compras
        ],
        primaryIngredient: 'vegetales',
        secondaryIngredient: 'tomates',
        portions: 4, // esta receta hay que testearla para ver las porciones, le dejo 4 por ahora
        difficulty: 'Muy fácil',
        prepTime: 20, //hacemos esta distinción? hay recetas que no prepara en 15 min y las deja en el horno o estufa por 1 hora... Sof: por mí sí, esto hay que testear en esta receta
        totalTime: 20,
        img: 'https://source.unsplash.com/eEWlcfydzQ4', // esto no va, para esta está bien la foto de cocina a distancia
        imgThumb: 'https://source.unsplash.com/eEWlcfydzQ4',
        type: 'guiso',
        cuisine: ['india'],
        method: [
            'Hacer la pasta de curry procesando el chile, el ajo, la mitad del jengibre, la pimienta de cayena, la paprika, el garam masala, un tercio del cilantro, la mitad de las almendras, 2 cucharadas del jugo de los tomates y 2 cucharadas de aceite de oliva. Reservar. Si no lo quieres picante, no le agregues el chile.', //quiero poner el tip de rallar el jengibre congelado, pero no sé dónde
            'Picar los tallos de cilantro, la cebolla y rallar la otra mitad del jengibre (ver tip). Cortar las papas en trozos grandes y trocear el coliflor. En una sartén a fuego medio-alto, calentar aceite y luego agregar los tallos de cilantro, la cebolla y el jengibre y cocinar durante unos 10 minutos hasta que estén suaves y ligeramente dorados. Agregar las flores de coliflor, la lata de garbanzos escurrida y la papa. Luego agregar la pasta de tikka masala. Revolver bien para integrar y salpimentar. Agregar los tomates, rompiéndolos con las manos y la leche de coco. Cuando hierva, bajar el fuego a medio-bajo, tapar y cocinar lento durante 20 minutos, luego retirar la tapa y cocinar por otros 5 minutos más hasta que reduzca la salsa.',
            'Servir y terminar con el resto de las almendras y las hojas de cilantro. Agregar un gajo de limón. Queda muy bien con unas cucharadas de yogur natural también.',
        ],
        tips: [''],
        //dietary requirement tags
        isVegan: true,
        isDairyFree: true,
        isVegetarian: true,
        isGlutenFree: true,
        isSpicy: true,

        //time management tags
        isQuickAndEasy: true,
        isBudgetFriendly: true,
        isBatchCooking: false,

        //health tags
        isLowCarb: false,
        isHighProtein: false,
        isLowCalorie: true,
        isHeartHealthy: true,
        isMainDish: true,
        isDessert: false,
        isSideDish: true,
        isSpringDish: false,
        isSummerDish: false,
        isAutumnDish: false,
        isWinterDish: false,
        saves: 0,
    },
    {
        id: 1,
        name: 'tikka masala vegetariano',
        tagline: 'curry estilo indio de papas y garbanzos',
        ingredients: [
            {
                name: {
                    singular: 'garbanzo',
                    plural: 'garbanzos'
                },
                quantity: 1,
                unit: 'lata',
                category: ''
            },
            {
                name: {
                    singular: 'papa',
                    plural: 'papas'
                },
                quantity: 2,
                unit: 'unidad',
                category: ''
            },
            {
                name: {
                    singular: 'coliflor',
                    plural: 'coliflores'
                },
                quantity: 1,
                unit: 'unidad',
                category: ''
            },
            {
                name: {
                    singular: 'cebolla',
                    plural: 'cebollas'
                },
                quantity: 1,
                unit: 'unidad',
                category: ''
            },
            {
                name: {
                    singular: 'gengibre',
                    plural: 'gengibres'
                },
                quantity: 10,
                unit: 'cm',
                category: ''
            },
            {
                name: {
                    singular: 'cilantro',
                    plural: 'cilantros'
                },
                quantity: 1,
                unit: 'manojo',
                category: ''
            },
            {
                name: {
                    singular: 'lata de tomate',
                    plural: 'lata de tomates'
                },
                quantity: 1,
                unit: 'lata',
                category: ''
            },
            {
                name: {
                    singular: 'leche de coco',
                    plural: 'leches de coco'
                },
                quantity: 200,
                unit: 'ml',
                category: ''
            },
            {
                name: {
                    singular: 'almendra',
                    plural: 'almendras'
                },
                quantity: 50,
                unit: 'gr.',
                category: ''
            },
            {
                name: {
                    singular: 'limón',
                    plural: 'limones'
                },
                quantity: 1,
                unit: 'unidad',
                category: ''
            },
            {
                name: {
                    singular: 'chile',
                    plural: 'chiles'
                },
                quantity: 1,
                unit: 'unidad',
                category: ''
            },
            {
                name: {
                    singular: 'ajo',
                    plural: 'ajos'
                },
                quantity: 2,
                unit: 'dientes',
                category: ''
            },

            {
                name: {
                    singular: 'pimineta de cayena',
                    plural: 'pimineta de cayena'
                },
                quantity: 1,
                unit: 'cdita.',
                category: ''
            },
            {
                name: {
                    singular: 'paprika',
                    plural: 'paprika'
                },
                quantity: 1,
                unit: 'cda.',
                category: ''
            },
            {
                name: {
                    singular: 'garam masala',
                    plural: 'garam masala'
                },
                quantity: 2,
                unit: 'cdita.',
                category: ''
            }, //en la receta original estaban separados los ingredientes de la pasta de tikka masala, yo los uní. Me parece que es mejor para luego hacer la lista de compras
        ],
        primaryIngredient: 'vegetales',
        secondaryIngredient: 'tomates',
        portions: 4, // esta receta hay que testearla para ver las porciones, le dejo 4 por ahora
        difficulty: 'Muy fácil',
        prepTime: 20, //hacemos esta distinción? hay recetas que no prepara en 15 min y las deja en el horno o estufa por 1 hora... Sof: por mí sí, esto hay que testear en esta receta
        totalTime: 20,
        img: 'https://source.unsplash.com/eEWlcfydzQ4', // esto no va, para esta está bien la foto de cocina a distancia
        imgThumb: 'https://source.unsplash.com/eEWlcfydzQ4',
        type: 'guiso',
        cuisine: ['india'],
        method: [
            'Hacer la pasta de curry procesando el chile, el ajo, la mitad del jengibre, la pimienta de cayena, la paprika, el garam masala, un tercio del cilantro, la mitad de las almendras, 2 cucharadas del jugo de los tomates y 2 cucharadas de aceite de oliva. Reservar. Si no lo quieres picante, no le agregues el chile.', //quiero poner el tip de rallar el jengibre congelado, pero no sé dónde
            'Picar los tallos de cilantro, la cebolla y rallar la otra mitad del jengibre (ver tip). Cortar las papas en trozos grandes y trocear el coliflor. En una sartén a fuego medio-alto, calentar aceite y luego agregar los tallos de cilantro, la cebolla y el jengibre y cocinar durante unos 10 minutos hasta que estén suaves y ligeramente dorados. Agregar las flores de coliflor, la lata de garbanzos escurrida y la papa. Luego agregar la pasta de tikka masala. Revolver bien para integrar y salpimentar. Agregar los tomates, rompiéndolos con las manos y la leche de coco. Cuando hierva, bajar el fuego a medio-bajo, tapar y cocinar lento durante 20 minutos, luego retirar la tapa y cocinar por otros 5 minutos más hasta que reduzca la salsa.',
            'Servir y terminar con el resto de las almendras y las hojas de cilantro. Agregar un gajo de limón. Queda muy bien con unas cucharadas de yogur natural también.',
        ],
        tips: [''],
        //dietary requirement tags
        isVegan: true,
        isDairyFree: true,
        isVegetarian: true,
        isGlutenFree: true,
        isSpicy: true,

        //time management tags
        isQuickAndEasy: true,
        isBudgetFriendly: true,
        isBatchCooking: false,

        //health tags
        isLowCarb: false,
        isHighProtein: false,
        isLowCalorie: true,
        isHeartHealthy: true,
        isMainDish: true,
        isDessert: false,
        isSideDish: true,
        isSpringDish: false,
        isSummerDish: false,
        isAutumnDish: false,
        isWinterDish: false,
        saves: 0,
    },


    // {
    //     id: 2,
    //     name: 'guiso de garbanzos y acelgas',
    //     tagline: 'curry indio de garbanzos',
    //     ingredients: [
    //         {
    //             name: 'garbanzos',
    //             quantity: 1,
    //             unit: 'lata'
    //         },
    //         {
    //             name: 'leche de coco',
    //             quantity: 1,
    //             unit: 'lata'
    //         },
    //         {
    //             name: 'caldo de verduras',
    //             quantity: 500,
    //             unit: 'ml'
    //         },
    //         {
    //             name: 'cebolla',
    //             quantity: 1,
    //             unit: undefined,
    //         },
    //         {
    //             name: 'ajo',
    //             quantity: 2,
    //             unit: 'dientes'
    //         },
    //         {
    //             name: 'jengibre',
    //             quantity: 3,
    //             unit: 'cm'
    //         },
    //         {
    //             name: 'chile',
    //             quantity: 1,
    //             unit: undefined,
    //         },
    //         {
    //             name: 'cúrcuma',
    //             quantity: 1,
    //             unit: 'cda.'
    //         },
    //         {
    //             name: 'comino',
    //             quantity: 1,
    //             unit: 'cdita.'
    //         },
    //         {
    //             name: 'acelgas',
    //             quantity: 200,
    //             unit: 'gr.'
    //         },


    //     ],
    //     portions: 4, // para más adelante. Podríamos preguntarle al usuario cuántas personas son y ajustar los ingredientes
    //     difficulty: 'Muy fácil',
    //     prepTime: 20, //hacemos esta distinción? hay recetas que no prepara en 15 min y las deja en el horno o estufa por 1 hora...
    //     totalTime: 60,
    //     img: 'https://source.unsplash.com/ReySmTMcKEQ', // busca imágenes en unsplash.com identifica el id en la url de la imágen y pégalo 
    //     type: 'guiso',
    //     cuisine: ['india'],
    //     method: [
    //         'Picar la cebolla y el chile, y rallar el ajo y el jengibre (ver tip). En una cacerola a fuego medio calentar unas cucharadas de aceite y agregar la cebolla, el ajo, el chile y el jengibre. Salpimentar y saltear por unos minutos y luego agregar las especias, saltear por un minuto más.',
    //         'Agregar los garbanzos escurridos y cocinar por 5-7 minutos hasta que se tuesten un poco. Agregar el caldo, la leche de coco y las pencas de las acelgas cortadas.Dejar a fuego medio-bajo por 30 minutos y revolver de vez en cuando. Si requiere más agua, agregar.',
    //         'Agregar las hojas de acelgas cortadas y dejar a fuego medio por unos minutos más para que se ablanden un poquito. Servir con yogurt, cilantro y/o menta (obviar el yogurt para un plato vegano).',
    //     ],
    //     //dietary requirement tags
    //     isVegan: true,
    //     isDairyFree: true,
    //     isVegetarian: true,
    //     isGlutenFree: true,
    //     isSpicy: true,

    //     //time management tags
    //     isQuickAndEasy: true,
    //     isBudgetFriendly: true,
    //     isBatchCooking: false,

    //     //health tags
    //     isLowCarb: true,
    //     isHighProtein: false,
    //     isLowCalorie: true,
    //     isHeartHealthy: true,
    // },

    // {
    //     id: 3,
    //     name: 'Berenjenas con cous cous',
    //     tagline: 'Una receta rápida y deliciosa',
    //     ingredients: [
    //         {
    //             name: 'berenjenas',
    //             quantity: 2,
    //             unit: undefined,
    //         },
    //         {
    //             name: 'cebolla morada',
    //             quantity: 1,
    //             unit: undefined,
    //         },
    //         {
    //             name: 'ajo',
    //             quantity: 1,
    //             unit: 'diente'
    //         },
    //         {
    //             name: 'tomates',
    //             quantity: 2,
    //             unit: undefined,
    //         },
    //         {
    //             name: 'alcaparras',
    //             quantity: 1,
    //             unit: 'cda.'
    //         },
    //         {
    //             name: 'aceitunas verdes',
    //             quantity: 8,
    //             unit: undefined,
    //         },
    //         {
    //             name: 'cous cous',
    //             quantity: 120,
    //             unit: 'gr.'
    //         },
    //         {
    //             name: 'tomillo seco',
    //             quantity: 1,
    //             unit: 'cda.'
    //         },
    //         {
    //             name: 'perejil',
    //             quantity: 1,
    //             unit: 'puñado'
    //         },
    //         {
    //             name: 'almendras',
    //             quantity: 30,
    //             unit: 'gr.'
    //         },

    //     ],
    //     portions: 2, // yo calculé que era para 2
    //     difficulty: 'Muy fácil',
    //     prepTime: 20,
    //     totalTime: 60,//Sof: esto también hay que probar
    //     img: 'https://source.unsplash.com/k2ZCm7LCj8E',
    //     type: 'guiso',
    //     cuisine: 'árabe',
    //     method: [
    //         'Tostar las almendras en una placa a horno a 150 grados o en un sartén a fuego bajo hasta que empiecen a desprender su aroma. Una vez tostadas, dejas enfriar y picar. Reservar para decorar. Mientras las almendras se tuestan, cortar la berenjena en pedazos de 3 cm y dorar en una sartén a fuego fuerte con aceite de oliva con el tomillo por 5 minutos. Salpimentar.',
    //         'Picar finamente la cebolla y el ajo y cortar los tomates en trozos. Una vez que la berenjena está dorada, agregar la cebolla y el ajo. Continuar cocinando por 2 minutos. Si es necesario, agregar un poco más de aceite de oliva. Agregar las alcaparras y las aceitunas y una chorrito de vinagre de vino. Continuar cocinando hasta que se evapore el vinagre y luego agregar los tomates y bajar el fuego. Cocinar por 15 minutos o hasta que la berenjena y el tomate estés bien cremosos.',
    //         'Mientras, poner el cuscus en un bowl, agregar un poco de sal y echar 180 ml de agua hirviendo. Dejar tapado por 5 minutos hasta que el cuscus haya absorbido el agua. Luego revolverlo con un tenedor para separar los granos y agregar perejil y un chorrito de aceite de oliva. Salpimentar la mezcla de la sartén. Servir el cuscus en un plato hondo y servir arriba las berenjenas. Agregar perejil fresco y las almendras.',
    //     ],
    //     //dietary requirement tags
    //     isVegan: true,
    //     isDairyFree: true,
    //     isVegetarian: true,
    //     isGlutenFree: false,
    //     isSpicy: false,

    //     //time management tags
    //     isQuickAndEasy: true,
    //     isBudgetFriendly: true,
    //     isBatchCooking: false,

    //     //health tags
    //     isLowCarb: false,
    //     isHighProtein: false,
    //     isLowCalorie: true,
    //     isHeartHealthy: true,
    // },
    
    // {
    //     id: 9,
    //     name: 'Risotto de Setas',
    //     tagline: 'Risotto cremoso y reconfortante con una mezcla de setas y queso parmesano',
    //     ingredients: [
    //         { name: 'arroz arborio', quantity: 1, unit: 'taza' },
    //         { name: 'setas variadas', quantity: 200, unit: 'g, picadas' },
    //         { name: 'cebolla', quantity: 1, unit: 'mediana, picada finamente' },
    //         { name: 'ajo', quantity: 2, unit: 'dientes, picados' },
    //         { name: 'vino blanco', quantity: 1, unit: 'taza' },
    //         { name: 'caldo de verduras', quantity: 4, unit: 'tazas, caliente' },
    //         { name: 'queso parmesano', quantity: 1/2, unit: 'taza, rallado' },
    //         { name: 'mantequilla', quantity: 2, unit: 'cucharadas' },
    //         { name: 'aceite de oliva', quantity: 1, unit: 'cucharada' },
    //         { name: 'perejil fresco', quantity: 2, unit: 'cucharadas, picado' },
    //         { name: 'sal', quantity: 1, unit: 'pizca' },
    //         { name: 'pimienta negra', quantity: 1, unit: 'pizca' },
    //     ],
    //     portions: 4,
    //     difficulty: 'Moderado',
    //     prepTime: 15,
    //     totalTime: 30,
    //     img: 'https://source.unsplash.com/kcA-c3f_3FE',
    //     type: 'Arroz',
    //     cuisine: 'Italiana',
    //     method: [
    //         'En una sartén grande, calienta el aceite de oliva y saltea la cebolla hasta que esté transparente.',
    //         'Añade el ajo y las setas picadas, cocinando hasta que estén doradas.',
    //         'Añade el arroz arborio y cocina por 2 minutos, luego vierte el vino blanco y cocina hasta que se evapore.',
    //         'Comienza a agregar el caldo de verduras poco a poco, revolviendo constantemente hasta que el arroz esté cremoso y al dente.',
    //         'Incorpora la mantequilla, el queso parmesano rallado y el perejil fresco. Mezcla bien.',
    //         'Sazona con sal y pimienta al gusto. Sirve caliente y disfruta de este risotto de setas reconfortante.'
    //     ],
    //     isVegan: false,
    //     isDairyFree: false,
    //     isVegetarian: true,
    //     isGlutenFree: true,
    //     isSpicy: false,
    //     isQuickAndEasy: false,
    //     isBudgetFriendly: false,
    //     isBatchCooking: false,
    //     isLowCarb: false,
    //     isHighProtein: false,
    //     isLowCalorie: false,
    //     isHeartHealthy: false
    // },
    // {
    //     id: 10,
    //     name: 'Ensalada de Frutas Frescas',
    //     tagline: 'Una explosión de frescura con una variedad de frutas de temporada',
    //     ingredients: [
    //         { name: 'fresas', quantity: 1, unit: 'taza, cortadas en rodajas' },
    //         { name: 'uvas', quantity: 1, unit: 'taza, sin semillas y cortadas por la mitad' },
    //         { name: 'kiwi', quantity: 2, unit: 'pelados y cortados en rodajas' },
    //         { name: 'piña', quantity: 1, unit: 'taza, cortada en trozos' },
    //         { name: 'arándanos', quantity: 1, unit: 'taza' },
    //         { name: 'menta fresca', quantity: 1, unit: 'manojo, picado finamente' },
    //         { name: 'miel', quantity: 2, unit: 'cucharadas' },
    //         { name: 'jugo de limón', quantity: 1, unit: 'cucharada' },
    //         { name: 'nueces', quantity: 1/2, unit: 'taza, tostadas y picadas' },
    //         { name: 'yogur natural', quantity: 1, unit: 'taza' },
    //     ],
    //     portions: 4,
    //     difficulty: 'Fácil',
    //     prepTime: 15,
    //     totalTime: 15,
    //     img: 'https://source.unsplash.com/UC0HZdUitWY',
    //     type: 'Ensalada',
    //     cuisine: 'Internacional',
    //     method: [
    //         'En un tazón grande, combina las fresas, uvas, kiwi, piña y arándanos.',
    //         'Añade la menta fresca picada y mezcla suavemente.',
    //         'En un tazón pequeño, combina la miel y el jugo de limón para hacer el aderezo.',
    //         'Rocía el aderezo sobre la ensalada de frutas y mezcla cuidadosamente para cubrir todas las frutas.',
    //         'Añade las nueces tostadas y mezcla nuevamente.',
    //         'Sirve la ensalada en platos individuales sobre una cama de yogur natural.',
    //         'Decora con hojas de menta fresca y disfruta de esta refrescante ensalada de frutas frescas.'
    //     ],
    //     isVegan: false,
    //     isDairyFree: false,
    //     isVegetarian: true,
    //     isGlutenFree: true,
    //     isSpicy: false,
    //     isQuickAndEasy: true,
    //     isBudgetFriendly: true,
    //     isBatchCooking: false,
    //     isLowCarb: false,
    //     isHighProtein: false,
    //     isLowCalorie: true,
    //     isHeartHealthy: true
    // },
    // {
    //     id: 11,
    //     name: 'Pollo al Curry con Coco',
    //     tagline: 'Delicioso pollo marinado en una salsa de curry y leche de coco',
    //     ingredients: [
    //         { name: 'pechugas de pollo', quantity: 4, unit: 'medianas, cortadas en trozos' },
    //         { name: 'aceite de coco', quantity: 2, unit: 'cucharadas' },
    //         { name: 'cebolla', quantity: 1, unit: 'mediana, picada finamente' },
    //         { name: 'ajo', quantity: 3, unit: 'dientes, picados' },
    //         { name: 'jengibre fresco', quantity: 1, unit: 'cucharada, rallado' },
    //         { name: 'pimiento rojo', quantity: 1, unit: 'grande, cortado en tiras' },
    //         { name: 'calabacín', quantity: 1, unit: 'mediano, cortado en rodajas' },
    //         { name: 'curry en polvo', quantity: 2, unit: 'cucharaditas' },
    //         { name: 'cúrcuma', quantity: 1, unit: 'cucharadita' },
    //         { name: 'leche de coco', quantity: 1, unit: 'lata' },
    //         { name: 'tomate', quantity: 1, unit: 'grande, picado' },
    //         { name: 'cilantro fresco', quantity: 2, unit: 'cucharadas, picado' },
    //         { name: 'sal', quantity: 1, unit: 'al gusto' },
    //         { name: 'pimienta negra', quantity: 1, unit: 'al gusto' },
    //     ],
    //     portions: 4,
    //     difficulty: 'Moderado',
    //     prepTime: 20,
    //     totalTime: 40,
    //     img: 'https://source.unsplash.com/MqT0asuoIcU',
    //     type: 'Pollo',
    //     cuisine: 'Asiática',
    //     method: [
    //         'En una sartén grande, calienta el aceite de coco a fuego medio.',
    //         'Añade la cebolla, el ajo y el jengibre rallado, y saltea hasta que estén dorados.',
    //         'Añade el pollo y cocina hasta que se dore por todos lados.',
    //         'Incorpora el curry en polvo, la cúrcuma y mezcla bien para que el pollo quede bien impregnado de especias.',
    //         'Añade el pimiento rojo, el calabacín y el tomate picado. Cocina por unos minutos hasta que las verduras estén tiernas.',
    //         'Vierte la leche de coco, sazona con sal y pimienta, y cocina a fuego lento durante 15-20 minutos.',
    //         'Espolvorea cilantro fresco antes de servir. Sirve sobre arroz o acompañado de naan.',
    //         'Disfruta de este delicioso pollo al curry con coco, lleno de sabores asiáticos.'
    //     ],
    //     isVegan: false,
    //     isDairyFree: true,
    //     isVegetarian: false,
    //     isGlutenFree: true,
    //     isSpicy: true,
    //     isQuickAndEasy: false,
    //     isBudgetFriendly: false,
    //     isBatchCooking: false,
    //     isLowCarb: false,
    //     isHighProtein: true,
    //     isLowCalorie: false,
    //     isHeartHealthy: false
    // },
    // {
    //     id: 12,
    //     name: 'Pasta Pesto Vegetariana',
    //     tagline: 'Pasta con una mezcla fresca de pesto casero y verduras coloridas',
    //     ingredients: [
    //         { name: 'pasta', quantity: 400, unit: 'g' },
    //         { name: 'espinacas frescas', quantity: 2, unit: 'tazas' },
    //         { name: 'tomates cherry', quantity: 1, unit: 'taza, cortados por la mitad' },
    //         { name: 'queso parmesano', quantity: 1/2, unit: 'taza, rallado' },
    //         { name: 'piñones', quantity: 1/4, unit: 'taza, tostados' },
    //         { name: 'ajo', quantity: 2, unit: 'dientes' },
    //         { name: 'aceite de oliva virgen extra', quantity: 1/2, unit: 'taza' },
    //         { name: 'albahaca fresca', quantity: 1, unit: 'manojo' },
    //         { name: 'jugo de limón', quantity: 1, unit: 'cucharada' },
    //         { name: 'sal', quantity: 1, unit: 'al gusto' },
    //         { name: 'pimienta negra', quantity: 1, unit: 'al gusto' },
    //     ],
    //     portions: 4,
    //     difficulty: 'Fácil',
    //     prepTime: 15,
    //     totalTime: 25,
    //     img: 'https://source.unsplash.com/89R4F3MWjBY',
    //     type: 'Pasta',
    //     cuisine: 'Italiana',
    //     method: [
    //         'Cocina la pasta en agua con sal según las instrucciones del paquete. Reserva un poco de agua de cocción antes de escurrir.',
    //         'En una licuadora, combina espinacas, tomates cherry, queso parmesano, piñones, ajo, aceite de oliva, albahaca fresca y jugo de limón. Tritura hasta obtener un pesto suave.',
    //         'En una sartén grande, calienta el pesto a fuego medio. Agrega la pasta cocida y mezcla bien, añadiendo un poco de agua de cocción de la pasta si es necesario.',
    //         'Sazona con sal y pimienta al gusto. Cocina por unos minutos hasta que la pasta esté bien cubierta con la salsa.',
    //         'Sirve la pasta pesto en platos individuales. Espolvorea con más queso parmesano y piñones tostados.',
    //         'Disfruta de esta deliciosa pasta pesto vegetariana, llena de sabores frescos y vibrantes.'
    //     ],
    //     isVegan: false,
    //     isDairyFree: false,
    //     isVegetarian: true,
    //     isGlutenFree: false,
    //     isSpicy: false,
    //     isQuickAndEasy: false,
    //     isBudgetFriendly: true,
    //     isBatchCooking: false,
    //     isLowCarb: false,
    //     isHighProtein: false,
    //     isLowCalorie: false,
    //     isHeartHealthy: false
    // },
   
];

export default recipes 
