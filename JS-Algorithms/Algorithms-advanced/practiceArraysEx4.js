/*Create a program that loops over the 2 arrays; if there are any common courses print them out to the console.*/

function compareArrays (array1,array2){
    for (let i=0; i<array1.length; i++){
        for (let j = 0; j < array2.length; j++) {
            if(array1[i] == array2[j]){
                console.log("El elemento repetido en los dos arreglos es:"+array2[i]);
            }else{console.log("No hay elementos repetidos en los arreglos");
            }          
        }
    }
}

var student1Courses = ['Math', 'English', 'Programming'];
var student2Courses = ['Geography', 'Spanish', 'Programming'];

compareArrays(student1Courses,student2Courses);