const infoCleaner = (arr) => {
    if (!Array.isArray(arr)) {
        throw new Error("Input parameter must be an array");
    }

    if (arr.length === 0) {
        throw new Error("Input array must have at least one element");
    }

    return arr.map((recipe) => {
        return {
            name: recipe.name,
            image: recipe.image,
            plate_resume: recipe.plate_resume,
            health_score: recipe.health_score,
            step_to_step: recipe.step_to_step,
            created: false,
        };
    });
};

module.exports = {
    infoCleaner,
};


// const infoCleaner = (array) => {
//   // Verifica si la entrada es un arreglo
//   if (Array.isArray(array)) {
//     // Usa map() solo si es un arreglo válido
//     return array.map((element) => {
//       return {
//         name: element.name,
//         image: element.image,
//         plate_resume: element.plate_resume,
//         health_score: element.health_score,
//         step_to_step: element.step_to_step,
//         created: false,
//       };
//     });
//   } else {
//     // Maneja el caso cuando la entrada no es un arreglo
//     console.error("Error: input is not an array");
//     return [];
//   }
// };