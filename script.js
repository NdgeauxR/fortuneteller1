/**
 * 
 * @param {string} name 
 * @param {number} age 
 * @returns {string} 
 */
function fortuneTeller(name, age) {
  
  
  if (
    !name ||
    typeof name !== "string" ||
    name.trim().length === 0 ||
    typeof age !== "number" ||
    isNaN(age) ||
    age <= 0
  ) {
    return "Invalid input. Please provide a valid name (text) and a positive age (number).";
  }

  
  let nameFortunes = []; 
  let ageFortunePart = ""; 

  
  const nameLower = name.toLowerCase(); 

  if (name.length > 7) {
    nameFortunes.push("You will get married soon");
  } else if (name.length < 5) {
    nameFortunes.push("you will get married at age 35");
  } else {
    
    nameFortunes.push("You will win the lottery");
  }

  
  if (nameLower.startsWith("r")) {
    nameFortunes.push("You will be the first millionaire in your family");
  }

  
  if (nameLower.includes("i")) {
    nameFortunes.push("You will have a baby boy");
  }

  
  let combinedNameFortune = "";
  if (nameFortunes.length === 0) {
    combinedNameFortune = "You will purchase a new car."; 
  } else if (nameFortunes.length === 1) {
    combinedNameFortune = nameFortunes[0] + ".";
  } else {
    
    const lastFortune = nameFortunes.pop(); 
    combinedNameFortune =
      nameFortunes.join(", ") + ", and " + lastFortune + ".";
  }

  
  if (age < 12) {
    ageFortunePart = "You were born with superpowers.";
  } else if (age <= 17) {
    
    ageFortunePart = "You will buy a new pet.";
  } else if (age <= 25) {
    
    ageFortunePart = "You will experience a once in a lifetime event.";
  } else if (age <= 40) {
    
    ageFortunePart = "You were born to travel abroad.";
  } else if (age <= 60) {
    
    ageFortunePart = "Your wisdom will guide you to your destint.";
  } else {
    
    ageFortunePart = "You are a lover of simple things.";
  }

  
  ageFortunePart =
    ageFortunePart.charAt(0).toUpperCase() + ageFortunePart.slice(1);


  
  return `${name}, your future holds interesting possibilities!\n\n🔮 Based on your name: ${combinedNameFortune}\n\n✨ Based on your age: ${ageFortunePart}`;
}



console.log("--- Fortune Teller ---");


const userNameInput = prompt(
  "Welcome to the Fortune Teller! Please enter your name:"
);


let userAgeInput = null;
if (userNameInput !== null && userNameInput.trim() !== "") {
  userAgeInput = prompt(
    `Thank you, ${userNameInput}! Now, please enter your age:`
  );
} else if (userNameInput !== null) {
  console.log("A name is required to get a fortune.");
}



if (userNameInput === null || userAgeInput === null) {
  console.log("Fortune telling cancelled. You must provide both name and age.");
} else {
  
  const userAge = parseInt(userAgeInput);

  
  if (isNaN(userAge) || userAge <= 0) {
    console.log(
      `Invalid age entered ('${userAgeInput}'). Please enter a positive whole number for age next time.`
    );
  } else {
    
    const fortune = fortuneTeller(userNameInput.trim(), userAge); 


    console.log("\n--------------------");
    console.log(fortune);
    console.log("--------------------");
  }
}

console.log("--- End of Fortune Teller ---");
