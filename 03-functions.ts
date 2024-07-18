

//void= como valor de retorno no regresa nada, a pesar de parecer lo mismo que undefined, significa que explicitamente en la funcion no existe "return"
//en javascript toda funcion regresa undefined
//es la principal diferencia aunque en el codigo esto sea totalmente indiferente.

//En TypeScript se aconseja que siempre tengamos el modo estricto, lo mas posible(se ve en el archivo tsconfig.json)
//se aconseja no aceptar el tipo de dato any por defecto y asignarle un tipo, en caso contrario escribirlo explicitamente
//function addNumbers( a:any , b:any ){
function addNumbers( a:number , b:number ){
    return a+b;

}

addNumbers(1,2);

export{}