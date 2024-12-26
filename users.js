const fetchUsers = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const userData = await response.json();
    console.log(userData);
    displayUsers(userData);
  } catch (error) {
    console.error("Kullanıcıları yüklerken bir hata oluştu", error);
  }
};

const displayUsers = (users) => {
  const container = document.getElementById("user-cards");
  users.forEach((user) => {
    container.innerHTML += `
    <div class="col-6 col-md-4 col-lg-3 mb-3 mx-4">
    <div class="card h-100" style="width: 18rem;">
  <div class="card-body ">
    <h5 class="card-title">${user.name}</h5>
    <div class="user-details">
    <p class="card-text"><i class="me-2 fa-solid fa-user"></i>${user.username}</p>
    <p class="card-text"><i class="me-2 fa-solid fa-location-dot"></i>${user.address.city},${user.address.street}</p>
    <p class="card-text"><i class="me-2 fa-solid fa-building"></i>${user.company.name}</p>
    <p class="card-text"><i class="me-2 fa-solid fa-envelope"></i>${user.email}</p>
    <p class="card-text"><i class="me-2 fa-solid fa-phone"></i>${user.phone}</p>
    </div>
    <a href="posts.html?postId=${user.id}" class="mt-2 btn btn-primary">View Profile</a>
  </div>
</div>
</div>
`;
  });
};

document.getElementById("searchForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const userIdInput = Number(document.getElementById("searchInput").value);
  if (userIdInput >= 1 && userIdInput <= 10) {
    window.location.href = `posts.html?postId=${userIdInput}`;
  } else {
    alert("input değeri 1 ile 10 arasında olmalı");
  }
});
window.onload = () => {
  fetchUsers();
  document.getElementById("searchInput").value = "";
};
