const fetchUserDetails = async () => {
  try {
    const params = new URLSearchParams(window.location.search);
    const userId = params.get("postId");
    console.log(userId);
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    );
    const userDetailData = await response.json();
    console.log(userDetailData);
    displayUserDetails(userDetailData);
  } catch (error) {
    console.error("Kullanıcı postlarını alırken hata oluştu: ", error);
  }
};

const displayUserDetails = (userDetail) => {
  const detailsContainer = document.getElementById("detailsContainer");
  userDetail.forEach((user) => {
    const userDetailCard = `
<div class="col-6 col-md-4 col-lg-3 mb-3 mx-4">
    <div class="card h-100" style="width: 18rem;">
  <div class="card-body ">
    <h5 class="card-title">${user.title}</h5>
    <div class="user-details">
    <p class="card-text">${user.body}</p>
   
    <p class="card-text">${user.id}</p></div>
    </div>
</div>
</div>

`;
    detailsContainer.innerHTML += userDetailCard;
  });
};

window.onload = () => {
  fetchUserDetails();
};
