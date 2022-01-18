/*  JS-04 Arrays and Loops

Exercise #2
Write a JavaScript program to construct the following pattern, using a nested for loop.

*  
* *  
* * *  
* * * *  
* * * * *

*/


let asterisco = ""
for (let i=1; i<=5; i++){
    for (let j=1; j<=1; j++){
        asterisco += " *" // que es lo mismo que asterisco = asterisco + "*" | se guarda en la variable asterisco cada "asterisco" y se va concatenando el nuevo asterisco dado por el for.
        console.log(asterisco);
    }
}
