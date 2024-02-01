const person ={
    fullName: "Virat Kohli",
    age : 36,
    occupation: "Cricket Player",
    
};

function personDetails(person){
    for (const details in person) {
        console.log(`${details} : ${person[details]}`);
    }
}

personDetails(person);