const hotelCategories = [
  {
    name: "Top World",
    img: "./assets/caption (0).jpg",
  },
  {
    name: "Hottest New",
    img: "./assets/caption (1).jpg",
  },
  {
    name: "Family",
    img: "./assets/caption (2).jpg",
  },
  {
    name: "Luxury",
    img: "./assets/caption (3).jpg",
  },
  {
    name: "Out of the Ordinary",
    img: "./assets/caption (4).jpg",
  },
];

const tourPackages = [
  {
    img: "./assets/cap.jpg",
    desc: "Taj Mahal Day Tour from Delhi by Superfast Train - All Inclusive",
    price: 5218,
    rating: 5,
    reviews: 1300,
  },
  {
    img: "./assets/cap (1).jpg",
    desc: "Private Full Day Old and New Delhi City Tour",
    price: 1599,
    rating: 4,
    reviews: 1547,
  },
  {
    img: "./assets/cap (2).jpg",
    desc: "3-Day Private Luxury Golden Triangle Tour to Agra and Jaipur From New Delhi",
    price: 21488,
    rating: 4,
    reviews: 146,
    caption: "Likely to sell out",
  },
  {
    img: "./assets/cap (3).jpg",
    desc: "Private Taj Mahal Tour from Delhi by Car - All Inclusive",
    price: 2525,
    rating: 3,
    reviews: 1714,
  },
  {
    img: "./assets/cap (4).jpg",
    desc: "All Inclusive Private Half-Day Delhi City Tour by Car",
    price: 2441,
    rating: 5,
    reviews: 1398,
  },
  {
    img: "./assets/cap (5).jpg",
    desc: "4 Day Golden Triangle with Ranthambore Tiger Safari Tour from Delhi",
    price: 24103,
    rating: 4,
    reviews: 35,
    caption: "Likely to sell out",
  },
  {
    img: "./assets/cap (6).jpg",
    desc: "All Inclusive Taj Mahal Day Tour from Delhi by Superfast Train",
    price: 4545,
    rating: 5,
    reviews: 2267,
  },
  {
    img: "./assets/cap (7).jpg",
    desc: "Private Half-Day Delhi City Tour Including Entrance Fees",
    price: 5471,
    rating: 2,
    reviews: 423,
  },
  {
    img: "./assets/cap (8).jpg",
    desc: "3-Days Private Luxury Golden Triangle Tour to Agra and Jaipur From New Delhi",
    price: 15739,
    rating: 5,
    reviews: 383,
  },
  {
    img: "./assets/cap (9).jpg",
    desc: "Old Delhi Food and Heritage Walk",
    price: 3703,
    rating: 5,
    reviews: 358,
  },
];

const gliderContent = document.querySelector(".glider");

for (let hotelCategory of hotelCategories) {
  const newCategory = document.createElement("div");
  const categoryHeading = document.createElement("h1");
  const imageContainer = document.createElement("div");
  const categoryImage = document.createElement("img");

  categoryHeading.innerHTML = hotelCategory.name;
  categoryImage.setAttribute("src", hotelCategory.img);
  imageContainer.classList.add("category-image-container");

  imageContainer.appendChild(categoryImage);
  newCategory.appendChild(imageContainer);
  newCategory.appendChild(categoryHeading);
  gliderContent.appendChild(newCategory);
}

window.addEventListener("load", function () {
  new Glider(document.querySelector(".glider"), {
    slidesToShow: 4,
    slidesToScroll: 1,
    draggable: true,
    arrows: {
      prev: ".glider-prev",
      next: ".glider-next",
    },
  });
});

const tourPackagesSectionContainer = document.querySelector(".packages-glider");

for (let tourPackage of tourPackages) {
  const rootPackageContainer = document.createElement("div");
  const packageImage = document.createElement("div");
  const wishlistIconContainer = document.createElement("div");
  const imageContainer = document.createElement("div");
  const imageElement = document.createElement("img");
  const packageDetails = document.createElement("div");
  const packageDescription = document.createElement("p");
  const packageRatingAndReviewsContainer = document.createElement("div");
  const ratings = document.createElement("div");
  const reviews = document.createElement("div");
  const packagePrice = document.createElement("div");

  for (let i = 0; i < tourPackage.rating; i++) {
    const ratingElement = document.createElement("div");
    ratings.appendChild(ratingElement);
  }

  imageElement.setAttribute("src", tourPackage.img);
  wishlistIconContainer.setAttribute("class", "wishlist-container");
  imageContainer.setAttribute("class", "image-container");
  packageImage.setAttribute("class", "package-image");
  packageDescription.setAttribute("class", "package-desc");
  packageRatingAndReviewsContainer.setAttribute(
    "class",
    "pkg-ratings-and-reviews"
  );
  ratings.setAttribute("class", "ratings");
  reviews.setAttribute("class", "reviews");
  packagePrice.setAttribute("class", "package-price");

  wishlistIconContainer.innerHTML = '<i class="fa-regular fa-heart"></i>';
  packageDescription.textContent = tourPackage.desc;
  reviews.textContent = tourPackage.reviews.toLocaleString();
  packagePrice.innerHTML = `from &#8377;${tourPackage.price.toLocaleString()} per adult`;

  imageContainer.appendChild(imageElement);
  packageImage.appendChild(wishlistIconContainer);
  packageImage.appendChild(imageContainer);
  packageRatingAndReviewsContainer.appendChild(ratings);
  packageRatingAndReviewsContainer.appendChild(reviews);
  packageDetails.appendChild(packageDescription);
  packageDetails.appendChild(packageRatingAndReviewsContainer);
  packageDetails.appendChild(packagePrice);
  rootPackageContainer.appendChild(packageImage);
  rootPackageContainer.appendChild(packageDetails);
  tourPackagesSectionContainer.appendChild(rootPackageContainer);
}

window.addEventListener("load", function () {
  new Glider(document.querySelector(".packages-glider"), {
    slidesToShow: 4,
    slidesToScroll: 4,
    draggable: true,
    arrows: {
      prev: ".package-prev",
      next: ".package-next",
    },
  });
});

(async function fetchUsers() {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );

    const usersSection = document.querySelector(".users-section");
    const userList = document.createElement("ul");
    const users = response.data.map((user) => {
      const listItem = document.createElement("li");
      const anchorTag = document.createElement("a");
      anchorTag.textContent = user.username;
      anchorTag.setAttribute("href", `./user.html?id=${user.id}`);
      listItem.appendChild(anchorTag);
      userList.appendChild(listItem);
      return user;
    });
    localStorage.setItem("users", JSON.stringify(users));
    usersSection.appendChild(userList);
  } catch (error) {
    console.log(error)
  }
})();
