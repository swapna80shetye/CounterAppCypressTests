/// <reference types="cypress" />

import { refreshPage } from "./refresh-page";
import { increaseCounter } from "./increase-counter";
import { recyclePage } from "./recycle-page";
import { loginPage } from "./login-page";
import { decreaseCount } from "./decrease-counter";

describe("Tests Counter App", () => {
  it("Opens the application", () => {
    loginPage();
  });

  it("Refresh the page", () => {
    refreshPage();
  });

  //Add counter in the first row upto 4 and check the cart items value at the top should be 1
  it("Increase counter in a row ", () => {
    //increase counter in first row
    increaseCounter(2, 3, 1);
    //increase counter in second row
    increaseCounter(3, 5, 2);
  });

  it("Reduce counter in the first row upto 0", () => {
    //reduce the counter in first row
    decreaseCount(2, 2, 1);
  });

  //Recycle page button is enabled only after deleting all the rows
  it("Recycle the page", () => {
    recyclePage();
  });
});
