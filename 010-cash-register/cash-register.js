// Cash Register Challenge:
// Array of objects which hold the denominations and their values
let values = [
  { name: "ONE HUNDRED", val: 100.0 },
  { name: "TWENTY", val: 20.0 },
  { name: "TEN", val: 10.0 },
  { name: "FIVE", val: 5.0 },
  { name: "ONE", val: 1.0 },
  { name: "QUARTER", val: 0.25 },
  { name: "DIME", val: 0.1 },
  { name: "NICKEL", val: 0.05 },
  { name: "PENNY", val: 0.01 }
];

const checkCashRegister = (price, cash, cid) => {
  let cashback = { status: null, change: [] };
  let change = cash - price;

  // CID array into drawer object
  let register = cid.reduce((account, current) => {
      account.total += current[1];
      account[current[0]] = current[1];
      return account;
    },{ total: 0 }
  );

  // Handling exact change
  if (register.total === change) {
    cashback.status = "CLOSED";
    cashback.change = cid;
    return cashback;
  }

  // Handling obvious insufficient funds
  if (register.total < change) {
    cashback.status = "INSUFFICIENT_FUNDS";
    return cashback;
  }

  // Looping through the denomination array
  let changeArray = values.reduce((account, current) => {
    let value = 0;
    // While there is still money of this type in the drawer
    // And while the denomination is larger than the change remaining
    while (register[current.name] > 0 && change >= current.val) {
      change -= current.val;
      register[current.name] -= current.val;
      value += current.val;

      // Round change to the nearest hundreth deals with precision errors
      change = Math.round(change * 100) / 100;
    }
    // Add this denomination to the cashback only if any was used.
    if (value > 0) {
      account.push([current.name, value]);
    }
    return account; // Return the current changeArray
  }, []); // Initial value of empty array for reduce

  // If there are no elements in changeArray or we have leftover change, return
  // the string "Insufficient Funds"
  if (changeArray.length < 1 || change > 0) {
    cashback.status = "INSUFFICIENT_FUNDS";
    return cashback;
  }

  // Here's the change:
  cashback.status = "OPEN";
  cashback.change = changeArray;
  return cashback;
};
