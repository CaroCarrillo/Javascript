/* JS-05 Conditions and Expressions

Exercise #1
You have a list of names: var names = ["Maria", "Antony", "Joy", "Juan"]*/

var names = ["Maria", "Antony", "Joy", "Juan"]

/*
Part 1
Write a function to insert a name to the end of the list. Add your own name to the end of the list.*/

names.push("Carolina");
console.log(names)

/*
Part 2
Write a function that takes in a name and checks if the list has that name. It should return back a boolean - true/false.*/

function findName(find){
    for(let i = 0; i < names.length; i++){
        if (find === names[i]){
            return true;
        }
    }
    return false;
}
console.log(findName("Carolina"));
// o hacer esto más fácil con console.log(names.includes("Carolina"));

/*
Part 3
Write a function that takes in a list of names. This function should compare the list taken into the names list you currently have. The function should pass back an array with the names that are in both lists.*/


function compareList (newNames = ["Isay", "Carolina", "Pepito", "Rogelio"]){
    let listNames = [];
    for(let i = 0; i < names.length; i++){
        for(let j = 0; j < newNames.length; j++){
            if (names[i] === newNames[j]){
                listNames.push(names[i]);
            }
        }
    }
    return listNames
}
console.log(compareList());


/*easier code
function easyImplementation(newNames = ["Isay", "Carolina", "Pepito", "Rogelio"]){
    let listNames = []; 
    for(let i = 0; i < names.length; i++){
        if(newNames.includes(names[i])){
            listNames.push(names[i])
        }
    }
    return listNames
}
console.log(easyImplementation());
/*


/*
Part 4
Write a function that takes in a list of names and returns a list of Integers with the length of the names in the same order as received. Hint use the push function
*/

function namesLength(newnames = ["Isay", "Carolina", "Pepito", "Rogelio"]){
    let emptyList = [];
    for(let i = 0; i < newnames.length; i++){//length itera sobre el arreglo
        emptyList.push(newnames[i].length);//length devuelve la longitud de cada elemento del arreglo
    }
    return emptyList;
}
console.log(namesLength());