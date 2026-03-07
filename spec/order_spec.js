import { handleInput, clearInput } from "../Order.js"

describe("Isaac's Kitchen Ordering", () => {

  beforeEach(()=>{
    clearInput();
  });

  it("shows welcome message", () => {

    const result = handleInput("");

    expect(result[0]).toContain("Welcome to Isaac's Kitchen");

  });

  it("accepts pizza order", () => {

    handleInput("");
    const result = handleInput("pizza");

    expect(result[0]).toContain("Great choice");

  });

  it("accepts size", () => {

    handleInput("");
    handleInput("pizza");
    const result = handleInput("large");

    expect(result[0]).toContain("pizza");

  });

  it("accepts topping", () => {

    handleInput("");
    handleInput("pizza");
    handleInput("large");

    const result = handleInput("pepperoni");

    expect(result[0]).toContain("added");

  });

  it("accepts drink upsell", () => {

    handleInput("");
    handleInput("pizza");
    handleInput("large");
    handleInput("pepperoni");

    const result = handleInput("coke");

    expect(result[0]).toContain("added");

  });

});