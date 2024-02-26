const filmesCategorias: string[] = ["Comedia", "Drama", "Romance", "Aventura"];
filmesCategorias.push("Terror");



//So pode ser um dos dois string ou numero
const filmesCategoriasUnionType1: string[] | number[] = ["Comedia", "Drama", "Romance", "Aventura"];
const filmesCategoriasUnionType2: string[] | number[] = [1, 2, 3];



// Pode ser String e numero
const filmesCategoriasUnionType3: (string | number)[] = ["Comedia", "Drama", "Romance", "Aventura", 1, 2, 3]


const filmesAnos: Array<number> = [];

for(let ano = 2000; ano <= new Date().getFullYear(); ano ++){
    filmesAnos.push(ano);
}

console.log("\n\n");
console.log("Array so de Numbers")
console.log(filmesAnos);
console.log("\n\n");



//Arrays com Union Type
const filmesAnos2: Array<number | string> = [];

for(let ano = 2000; ano <= new Date().getFullYear(); ano ++){


    /*
     Se o ano for para vou lococar ele dentro do arrau como string
     se o ano for impor colocao como number
    */
    if(ano % 2 == 0){
        filmesAnos2.push(ano.toString());
    }else{
        filmesAnos2.push(ano);
    }
    
}


console.log("Array de union types qiue pode ser number ou string")
console.log(filmesAnos2);