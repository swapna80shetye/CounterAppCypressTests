/// <reference types="cypress" />

import { refreshPage } from "./refresh-page";
import { increaseCounter } from "./increase-counter";
import { recyclePage } from "./recycle-page";
import { loginPage } from "./login-page";
import { decreaseCount } from "./decrease-counter";
import { deleteRow } from "./delete-row";

describe("Tests Counter App", () => {
  it("Opens the application", () => {
    loginPage();
  });

  it("Refresh the page", () => {
    refreshPage();
  });

  //Recycle page button is not enabled and therefore the following test should fail
  it("Recycle the page", () => {
    recyclePage();
  });

  //Add counter in the first row upto 4 and check the cart items value at the top should be 1
  it("Increase counter in one row ", () => {
    increaseCounter(5);
  });
  /*
  //Add counter in the second row upto 2 and check the cart item value at the top should be 2
  it("Add counter in another row upto 2", () => {
    increaseCounter(3, 3);
  });
  */

  it("Reduce counter in the first row upto 1", () => {
    decreaseCount();
  });

  it("Delete the row", () => {
    deleteRow();
  });
});
