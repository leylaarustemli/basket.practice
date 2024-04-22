const btn = document.getElementsByClassName("btn-primary");
const say = document.getElementById("say");
const table = document.getElementById("tbody");
let basket = JSON.parse(localStorage.getItem("basket"));

if (localStorage.getItem("basket") == null) {
  localStorage.setItem("basket", JSON.stringify([]));
}

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function (e) {
    e.preventDefault();
    let name = btn[i].previousElementSibling.previousElementSibling.innerText;
    let img = btn[i].parentElement.previousElementSibling.getAttribute("src");
    let id = btn[i].parentElement.parentElement.getAttribute("data-id");
    let basket = JSON.parse(localStorage.getItem("basket"));
    let target = basket.find((e) => {
      if (e.id == id) {
        return e;
      }
    });
    if (target == undefined) {
      basket.push({ image: img, name: name, id: id, count: 1 });
    } else {
      target.count++;
    }
    localStorage.setItem("basket", JSON.stringify(basket));
    counter();
  });
}
function counter() {
  if (localStorage.getItem("basket") != null) {
    let basket = JSON.parse(localStorage.getItem("basket"));
    let sum = 0;
    for (let i = 0; i < basket.length; i++) {
      sum += basket[i].count;
    }
    say.innerText = sum;
  }
}
counter();

for (let i = 0; i < basket.length; i++) {
  table.innerHTML += `<tr>
        <td><img 
        src="${basket[i].image}"
        width="100px"
        
      /></td>
        <td>${basket[i].name}</td>
        <td>${basket[i].count}</td>
      </tr>`;
}
