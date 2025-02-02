async function getData(userId) {
  let data;
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    );

    data = await response.json();
    console.log(data);
    getCards(data);
  } catch (err) {
    console.log("Bir hata oluştu: " + err);
  }
}

function getCards(posts) {
  let container = document.querySelector(".container");
  if (!container) {
    container = document.createElement("div");
    container.classList.add("container");
    document.body.appendChild(container);
  } else {
    container.innerHTML = "";
  }

  const row = document.createElement("div");
  row.classList.add("row");
  container.appendChild(row);
  posts.forEach((post) => {
    const col = document.createElement("div");
    col.classList.add("col-12", "col-md-6", "col-lg-4", "col-xl-3", "g-5");
    let card = `
  <div class="card h-100" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title"> ${post.title} </h5>
      <p class="card-text">${post.body}</p>
    </div>
  </div>`;
    col.innerHTML = card;

    row.appendChild(col);
  });
}

const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get("userId");
console.log(myParam);
window.onload = () => {
  let userId = myParam;

  if (!userId || isNaN(userId) || userId < 1 || userId > 10) {
    userId = prompt("Lütfen 1 ile 10 arasında bir userId giriniz:");

    if (!userId || isNaN(userId) || userId < 1 || userId > 10) {
      alert("Hatalı giriş! Lütfen 1 ile 10 arasında bir sayı giriniz.");
      throw new Error("Geçersiz userId girildi, işlem iptal edildi.");
    }

    window.location.href = `${window.location.pathname}?userId=${userId}`;
  } else {
    getData(userId);
  }
};
