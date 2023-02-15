// OPERADOR ||
console.log(false || {}); // devuelve {} pq "||" indica {} pq la el primer elemento es false perop el segundo no.
console.log("string" || true); // devuelve string pq es el primer elemento.
console.log([] || 100); // devuelve [] (un array vacio) al no tener nada en el primer variable.
console.log(null || "Prueba"); //devuelve prueba, al ver "null" se pasa al siguiente variable que es "prueba"
console.log("" || true); // devuelve true, no hay nada en el "".
console.log(undefined || false); //devuelve false, pq ambos parametros son "false"

// Operador &&
console.log(false && {}); //devuelve un array vacio al ser false uno los dos ya son false.
console.log("string" && true); //devuelve true pq ambos parametros son viables.
console.log([] && 100); //devuelve 100 pq aunque el primer array es vacio, el segundo parametro son un numero (100)
console.log(null && "Prueba"); //devuelve null **
console.log("" && true); //devuelve un string vacio, al ser un parametro. 
console.log(undefined && false); //devuelve false **

// Operador ??
console.log(false ?? {});//devuelve false
console.log("string" ?? true); //devuelve "string" al ser true el segundo parametro.
console.log([] ?? 100); //devuelve [] vacio
console.log(null ?? "Prueba"); // devuelve "prueba" al ser null expresion 1.
console.log("" ?? true); //devuelve string vacio al no ser null ni undefined expresion 1. 
console.log(undefined ?? false); //devuelve false pq expresion 1 es undefined.