const elemento: HTMLHeadElement | null =  document.querySelector("h2");

let db: string | null = "mysql, 127.0.0.1, password";

db = null;


//Variavel undefined
let minhaVariavel: string | undefined;

if(new Date().getDate() === 15){
    minhaVariavel = "hoje é o dia 15";
}