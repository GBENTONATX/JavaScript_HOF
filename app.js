console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function plus(number){
    return (plusNumber) => {
    return plusNumber + number; 
    }
}
    
const plus15 = plus(15); 
console.log(plus15(10));

//Display Guide for Excercises 2-6

let users = [
    {
      name: "Frodo",
      age: 50,
      score: 85,
      isActive: false,
    },
    {
      name: "Sam",
      age: 38,
      score: 94,
      isActive: true,
    },
    {
      name: "Merry",
      age: 36,
      score: 82,
      isActive: true,
    },
    {
      name: "Pippin",
      age: 26,
      score: 77,
      isActive: false,
    },
  ];

  //Exercise 2 


  users.forEach((element)=>{
    console.log(element.name);
  });


  //Exercise 3 

  const mappedUsers = users.map((element, index, arr) => {
    return {
        name: element.name, 
        score: element.score
    }
  });
  console.log(mappedUsers);

  

  //Exercise 4

  const filteredUsers = users.filter((element, index, arr) => {
    if (element.isActive == true){
        return true;
    }

    return false; 
  });
  console.log(filteredUsers);
  

  //Exercise 5 : SORT 

users.sort((a,b) => {

    if (b.score > a.score){
    return 1;
    }
    else if (a.score > b.score){
        return -1;
    } else { 
        return 0;
    }
    
});

console.log(users);

//Exercise 6 :Reduce 


users.reduce((prev,curr) => {
    console.log("Previous Value:", prev);
    return prev + curr.score;
}, 0); 
console.log(reducedUser); 


//Sum up the ages of the users 
// 0 
// prev + current => "prev"
//0 + 50 =>
//50 + 38 =>
//88 + 36 =>
//124 + 26 => 150