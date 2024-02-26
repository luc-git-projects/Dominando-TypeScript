let admin: boolean = true;

admin = Boolean(0);
console.log(`Número 0 do tipo number convertido para booleano: ${admin}`);

admin = Boolean(1);
console.log(`Número 1 do tipo number convertido para booleano: ${admin}`);

admin = Boolean("");
console.log(`String vazia sendo convertida para booleano: ${admin}`);

admin = Boolean(null);
console.log(`null sendo convertido para booleano: ${admin}`);

admin = Boolean(-1);
console.log(`Número -1 do tipo number convertido para booleano: ${admin}`);

admin = Boolean(2);
console.log(`Número 2 do tipo number convertido para booleano: ${admin}`);

let senha = "1234";
let senhaSegura = true;


//Para senha ser segura seu tamanho tem que ser mairo do que 8
senhaSegura = senha.length > 8
console.log(`A senha ${senha} tem tamanho ${senha.length} ela é segura? ${senhaSegura}`);



// Da erro estou tentando atribuir um Boolean objeto a um primitivo
//admin = new Boolean(1);


