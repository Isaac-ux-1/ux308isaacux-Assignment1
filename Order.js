let currentState = welcoming;

let order = {
  item: "",
  size: "",
  topping: "",
  drink: ""
};

export function handleInput(sInput) {
  return currentState(sInput);
}

export function clearInput(){
  currentState = welcoming;
}

function welcoming() {

  let aReturn = [];
  currentState = choosingItem;

  aReturn.push("Welcome to Isaac's Kitchen.");
  aReturn.push("What would you like to order today?");
  aReturn.push("Pizza or Burger?");

  return aReturn;
}

function choosingItem(sInput) {

  let aReturn = [];
  let input = sInput.toLowerCase();

  if(input.includes("pizza") || input.includes("burger")){

    order.item = input.includes("pizza") ? "pizza" : "burger";

    currentState = choosingSize;

    aReturn.push(`Great choice!`);
    aReturn.push("What size would you like?");
    aReturn.push("Pizza: small medium large | Burger: single double");

  } else {

    aReturn.push("Please choose pizza or burger.");

  }

  return aReturn;
}

function choosingSize(sInput){

  let aReturn = [];
  let input = sInput.toLowerCase();

  if(["small","medium","large","single","double"].includes(input)){

    order.size = input;
    currentState = choosingTopping;

    aReturn.push(`${input} ${order.item} selected.`);
    aReturn.push("Choose a topping:");
    aReturn.push("pepperoni, cheese, mushroom, bacon, lettuce");

  } else {

    aReturn.push("Please choose a valid size.");

  }

  return aReturn;
}

function choosingTopping(sInput){

  let aReturn = [];
  let input = sInput.toLowerCase();

  if(["pepperoni","cheese","mushroom","bacon","lettuce"].includes(input)){

    order.topping = input;
    currentState = upsellDrink;

    aReturn.push(`${input} added.`);
    aReturn.push("Would you like a drink?");
    aReturn.push("coke, sprite, water");

  } else {

    aReturn.push("Please choose a topping.");

  }

  return aReturn;
}

function upsellDrink(sInput){

  let aReturn = [];
  let input = sInput.toLowerCase();

  if(["coke","sprite","water"].includes(input)){
    order.drink = input;
    aReturn.push(`${input} added to your order.`);
  } else {
    aReturn.push("No drink added.");
  }

  currentState = anotherItem;

  aReturn.push("Would you like another item? (yes or no)");

  return aReturn;
}

function anotherItem(sInput){

  let aReturn = [];

  if(sInput.toLowerCase().startsWith("y")){

    currentState = choosingItem;
    aReturn.push("What else would you like?");
    aReturn.push("Pizza or Burger?");

  } else {

    currentState = welcoming;

    aReturn.push(`Your order: ${order.size} ${order.item} with ${order.topping}${order.drink ? " and a " + order.drink : ""}.`);
    aReturn.push("Thanks for ordering from Isaac's Kitchen!");

  }

  return aReturn;
}
