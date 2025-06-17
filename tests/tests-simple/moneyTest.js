import { formatCurrency } from "../../scripts/utils/money.js";

console.log("Test suite: formatCurrency");

console.log("Converts cents into dollars");

if (formatCurrency(2095) === "20.95") {
  console.log("test passed");
} else {
  console.log("test failed");
}

console.log("Works with 0");

if (formatCurrency(0) === "0.00") {
  console.log("test passed");
} else {
  console.log("test failed");
}

console.log("Rounds up to the nearest cent");

if (formatCurrency(2000.5) === "20.01") {
  console.log("test passed");
} else {
  console.log("test failed");
}
