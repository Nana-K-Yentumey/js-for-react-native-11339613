# js-for-react-native-11339613 - TASK 4

# Student ID: 11339613

##EXPLANATION:

## TASK 1:

    The JavaScript function, **processArray**, takes an array of numbers as input (**args**). It creates an empty array called **outcome**. 
    
    It then iterates over each number in the input array using a **for...of** loop. 
    
    If the number is even, it squares the number and pushes it into the **outcome** array. 
    
    If the number is odd, it multiplies it by 3 and pushes it into the **outcome** array. 
    
    Finally, it returns the **outcome** array.


## TASK 2:

    The JavaScript function, **formatArrayStrings**, takes in two arrays: **stringArray** and **numberArray**. 
    
    It iterates over both arrays simultaneously, using the index **i** to access each element. 
    
    For each pair of elements, it checks if the corresponding number in **numberArray** is even (**num % 2 === 0**). 
    
    If it is, it pushes the uppercase version of the string (**str.toUpperCase()**) into the **result** array. 
    
    If the number is odd, it pushes the lowercase version of the string (**str.toLowerCase()**) into the **result** array. 
    
    Finally, it returns the **result** array. 
    
    This function is used to format the strings in **stringArray** based on the corresponding numbers in **numberArray**.


## TASK 3:

    This JavaScript function **createUserProfiles** takes two arrays as input: **originalNames** and **modifiedNames**. 
    
    It creates an array of user profiles by iterating over the **originalNames** array and using the corresponding element from the **modifiedNames** array. 
    
    Each user profile is an object with properties **originalName**, **modifiedName**, and **id**. 
    
    The **id** is the index of the element in the array plus 1. The function returns the array of user profiles.