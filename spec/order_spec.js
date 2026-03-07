import { handleInput, clearInput } from "./Order.js";

describe("Isaac's Kitchen Ordering", () => {

  beforeEach(() => {
    clearInput();
  });

  it("shows the welcome message", () => {

    const response = handleInput("");

    expect(response[0]).toBe("Welcome to Isaac's Kitchen.");
  });


  it("asks user to choose pizza or burger", () => {

    const response = handleInput("");

    expect(response[2]).toBe("Pizza or Burger?");
  });


  it("accepts pizza choice", () => {

    handleInput(""); // welcome
    const response = handleInput("pizza");

    expect(response[0]).toBe("Great choice!");
  });


  it("asks for size after choosing item", () => {

    handleInput("");
    const response = handleInput("burger");

    expect(response[1]).toBe("What size?");
  });


  it("accepts size selection", () => {

    handleInput("");
    handleInput("pizza");

    const response = handleInput("large");

    expect(response[0]).toBe("Choose a topping:");
  });


  it("asks about drink upsell", () => {

    handleInput("");
    handleInput("pizza");
    handleInput("medium");

    const response = handleInput("pepperoni");

    expect(response[0]).toBe("Would you like a drink?");
  });


  it("completes the order", () => {

    handleInput("");
    handleInput("pizza");
    handleInput("large");
    handleInput("cheese");

    const response = handleInput("coke");

    expect(response[1]).toBe("Thanks for ordering from Isaac's Kitchen!");
  });

});