let currentState = welcoming;

let order = {
  item:"",
  size:"",
  topping:"",
  drink:""
};

export function handleInput(sInput){
  return currentState(sInput);
}

export function clearInput(){
  currentState = welcoming;
}

function welcoming(){

  let aReturn = [];

  currentState = choosingItem;

  aReturn.push("Welcome to Isaac's Kitchen.");
  aReturn.push("What would you like to order?");
  aReturn.push("Pizza or Burger?");

  return aReturn;

}

function choosingItem(sInput){

  let aReturn=[];
  let input = sInput.toLowerCase();

  if(input.includes("pizza") || input.includes("burger")){

    order.item = input.includes("pizza") ? "pizza" : "burger";

    currentState = choosingSize;

    aReturn.push("Great choice!");
    aReturn.push("What size?");
    aReturn.push("small medium large");

  } else {

    aReturn.push("Please choose pizza or burger.");

  }

  return aReturn;

}

function choosingSize(sInput){

  let aReturn=[];
  let input = sInput.toLowerCase();

  if(["small","medium","large"].includes(input)){

    order.size = input;

    currentState = choosingTopping;

    aReturn.push("Choose a topping:");
    aReturn.push("pepperoni cheese mushroom bacon");

  } else {

    aReturn.push("Please choose small medium or large.");

  }

  return aReturn;

}

function choosingTopping(sInput){

  let aReturn=[];
  let input = sInput.toLowerCase();

  order.topping = input;

  currentState = upsellDrink;

  aReturn.push("Would you like a drink?");
  aReturn.push("coke sprite water");

  return aReturn;

}

function upsellDrink(sInput){

  let aReturn=[];
  let input = sInput.toLowerCase();

  if(["coke","sprite","water"].includes(input)){
    order.drink = input;
  }

  currentState = welcoming;

  aReturn.push(`Your order: ${order.size} ${order.item} with ${order.topping}${order.drink ? " and " + order.drink : ""}.`);
  aReturn.push("Thanks for ordering from Isaac's Kitchen!");

  return aReturn;

}