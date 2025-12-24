// 1️⃣ Promise kya hota hai?

// Answer:
// Promise ek object hai jo future me complete hone wale task ko represent karta hai.

// 👉 3 states hoti hain:

// Pending

// Fulfilled

// Rejected

// 2️⃣ Promise kyun use karte hain?

// Answer:

// Asynchronous code handle karne ke liye

// Callback hell avoid karne ke liye

// Clean & readable code ke liye

// callback hell etle function ni andar function banav banav karvi to tene call backe hell kevay

let h1 = document.querySelector("h1");

function saveToDB(data) {
  return new Promise((resolve, reject) => {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) {
      resolve("success : data was saved");
    } else {
      reject("Failure : week connection");
    }
  });
}

// saveToDB("kiran")
//   .then((result) => {
//     console.log("result of promise :", result);
//     console.log("data 1 saved");
//     return saveToDB("lalit");
//   })
//   .then((result) => {
//     console.log("result of promise :", result);
//     console.log("data 2 saved");
//   })
//   .catch((error) => {
//     console.log("Erorr of promise : ", error);

//     console.log("week conection");
//   });

function colorChange(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      h1.style.color = color;
      resolve("color changed");
    }, delay);
  });
}

colorChange("red", 1000)
  .then(() => {
    console.log("red color was completed");
    return colorChange("blue", 1000);
  })
  .then(() => {
    console.log("blue color was completed");
    return colorChange("yellow", 2000);
  })
  .then(() => {
    console.log("yellow color was completed");
    return colorChange("green", 2000);
  })
  .then(() => {
    console.log("green color was completed");
  });
