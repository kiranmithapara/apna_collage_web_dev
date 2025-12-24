let h1 = document.querySelector("h1");
let btn = document.querySelector("button");
let p = document.querySelector("p");
let img = document.querySelector("img");
// btn.addEventListener("click", async () => {
//   let fact = await getFact();
//   p.innerText = fact;
// });

let url = "https://catfact.ninja/fact";

let url2 = "https://dog.ceo/api/breeds/image/random";

// async function getFact() {
//   try {
//     let res = await axios.get(url);
//     // axios librari no use kari ne data leva ma aave to tene feach na karvo pade and jeson mathi js ma pan na feravo pade
//     return res.data.fact;
//   } catch (e) {
//     console.log("Error :", e);
//     return "No Fact Found";
//   }
// }

btn.addEventListener("click", async () => {
  let link = await getImg();

  img.setAttribute("src", link);

  // img.src = link;

  img.style.display = "flex";
});

async function getImg() {
  try {
    let res = await axios.get(url2);

    return res.data.message;
  } catch (e) {
    return "No Image Found";
    console.log("Erorr : ", e);
  }
}
getImg();
