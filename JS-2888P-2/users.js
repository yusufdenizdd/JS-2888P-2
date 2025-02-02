async function getData() {
  let data;
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/");

    data = await response.json();
    console.log(data);
    getCards(data);
  } catch (err) {
    console.log("Bir hata oluştu: " + err);
  }
}

function getCards(users) {
  const container = document.createElement("div");
  container.classList.add("container");
  document.body.appendChild(container);
  const row = document.createElement("div");
  row.classList.add("row");
  container.appendChild(row);
  users.forEach((user) => {
    const col = document.createElement("div");
    col.classList.add("col-12", "col-md-6", "col-lg-4", "col-xl-3", "g-5");
    let card = `
<div class="card h-100 pb-5" style="width: 18rem; position: relative;">
  <div class="card-body pb-5">
    <h5 class="card-title">Temel Bilgiler <i class="fa-solid fa-user"></i> </h5>
    <p class="card-text">id:${user.id} <br />name:${user.name}<br />username: ${user.username}</p>
    <h5 class="card-title">Adres Bilgileri <i class="fa-solid fa-location-dot"></i></h5>
    <p class="card-text">${user.address.street} sokak, ${user.address.suite} apartman.</p>
    <h5 class="card-title">Şirket Bilgileri <i class="fa-solid fa-building"></i></h5> 
    <p class="card-text">Şirket Adı:${user.company.name} <br />Slogan:${user.company.catchPhrase}</p>
    <h5 class="card-title">İletişim Bilgileri <i class="fa-solid fa-phone"></i></h5> 
    <p class="card-text">Email:${user.email} <br />Website:${user.website}<br />Telefon Numarası: ${user.phone}</p>
    <div style="position: absolute; bottom: 0;">
    <h5 class="card-title">Postlara Git <i class="fa-solid fa-signs-post"></i></h5> 
    <p class="card-text"> <a class="btn btn-primary mb-2" href="posts.html?userId=${user.id}" role="button"
      >Kullanıcının Postlarını Gör</a
    ></p>
    </div>
  </div>
</div>`;
    col.innerHTML = card;

    row.appendChild(col);
  });
}

window.onload = () => {
  getData();
};
