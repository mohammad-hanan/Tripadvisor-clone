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

const gliderContent = document.querySelector(".glider");

for (let hotelCategory of hotelCategories) {
  const newCategory = document.createElement("div");
  const categoryHeading = document.createElement("h1");

  const imageContainer = document.createElement("div")
  const categoryImage = document.createElement("img");

  categoryHeading.innerHTML = hotelCategory.name;
  categoryImage.setAttribute("src", hotelCategory.img);
  imageContainer.classList.add('category-image-container')

  imageContainer.appendChild(categoryImage)
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
