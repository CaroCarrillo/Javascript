/**
 * Exercise 1:
 * We want to check if a string is empty.
 * If a string is not empty, we want to print
 * out the first character of that string.
 * If a string is empty, print out a text saying
 * "This string is empty" */

function checkEmptyString(str) {
    if(str == ""){
        alert("This string is empty");
    }else{
        alert("The first character of this string is: "+str[0]);
    }
}

// Example test, should return a
checkEmptyString("carolina");


/**
 * Exercise 2:
 * We want to compare two strings and check if
 * they are the same - case insensitive.
 * Return a boolean - true if the two strings are
 * the same, and false if they are not*/ 

function checkTwoStringsSame(str1, str2) {
    if (str1.toLowerCase() === str2.toLowerCase()){
        alert(true);
    }else {
        alert(false);
    }
}

// Example test, should return true
checkTwoStringsSame("String2", "string1");