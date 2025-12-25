// let url = "https://catfact.ninja/fact";

// fetch(url)
//   .then((res) => {
//     // console.log(res);
//     return res.json();
//   })
//   .then((data) => {
//     console.log("data 1 : ", data);
//     return fetch(url);
//   })
//   .then((res2) => {
//     return res2.json();
//   })
//   .then((data2) => {
//     console.log("data 2", data2.fact);
//   })
//   .catch((e) => {
//     console.log("Erorr :", e);
//   });

// async function getFacts() {
//   try {
//     let res = await fetch(url);
//     let data = await res.json();
//     console.log("data 1 :", data.fact);

//     let res2 = await fetch(url);
//     let data2 = await res2.json();
//     //   console.log(res2);

//     console.log("data 2 :", data2);
//   } catch (e) {
//     console.log("Erorr : ", e);
//   }
//   console.log("bye");
// }

// getFacts();

let url = "https://catfact.ninja/fact";

let btn = document.querySelector("#btn");
let factPara = document.querySelector("#fact");
let errorPara = document.querySelector("#error");
let loadingPara = document.querySelector("#loading");

btn.addEventListener("click", async () => {
  // reset UI
  factPara.innerText = "";
  errorPara.innerText = "";
  loadingPara.innerText = "Loading... ⏳";

  try {
    let res = await fetch(url);

    // HTTP error check
    if (!res.ok) {
      throw new Error(`HTTP Error : ${res.status}`);
    }

    let data = await res.json();

    // show data
    factPara.innerText = data.fact;
  } catch (err) {
    // show error in DOM
    errorPara.innerText = "Something went wrong ❌";
    console.log(err.message);
  } finally {
    // hide loading
    loadingPara.innerText = "";
  }
});

