const menu = [
    {
      id: 1,
      title: "Tomato Soup",
      category: "veg",
      price: "$5",
      description: "Freshly made soup with handpicked tomatoes.",
      img: "../assets/tomatoSoup.webp",
    },
    {
      id: 2,
      title: "Corn Soup",
      category: "veg",
      price: "$5",
      description: "Freshly made soup with handpicked corns.",
      img: "../assets/cornSoup.webp",
    },
    {
      id: 3,
      title: "Mushroom Soup",
      category: "veg",
      price: "$6",
      description: "Freshly made soup with handpicked mushrooms.",
      img: "../assets/mushroomSoup.webp",
    },
    {
      id: 4,
      title: "Hot n Sour Soup",
      category: "veg",
      price: "$10",
      description: "Freshly made soup with handpicked chilies & vinegar.",
      img: "../assets/hotnsourSoup.webp",
    },
    {
      id: 5,
      title: "Noodles Soup",
      category: "veg",
      price: "$7",
      description: "Freshly made soup with handmade noodles.",
      img: "../assets/noodleSoup.webp",
    },
    {
      id: 6,
      title: "Spinach Soup",
      category: "veg",
      price: "$4",
      description: "Freshly made soup with handpicked spinach.",
      img: "../assets/spinachSoup.webp",
    },
    {
      id: 7,
      title: "Chicken Soup",
      category: "non veg",
      price: "$8",
      description: "Freshly made soup with chicken breasts.",
      img: "../assets/chickenSoup.webp",
    },
    {
      id: 8,
      title: "Chicken Clear Soup",
      category: "non veg",
      price: "$8",
      description: "Freshly made chicken broth soup with chicken breasts.",
      img: "../assets/chickenClearSoup.webp",
    },
    {
      id: 9,
      title: "Chicken Noodle Soup",
      category: "non veg",
      price: "$10",
      description: "Freshly made soup with handmade noodles & chicken breasts.",
      img: "../assets/chickenNoodleSoup.webp",
    },
    {
      id: 10,
      title: "Sweet Corn Chicken Soup",
      category: "non veg",
      price: "$10",
      description: "Freshly made soup with handpicked corns & chicken breasts.",
      img: "../assets/sweetCornChickenSoup.webp",
    },
    {
      id: 11,
      title: "Cream of Chicken Soup",
      category: "non veg",
      price: "$12",
      description: "Freshly made soup with handmade cream & chicken breasts.",
      img: "../assets/creamOfChickenSoup.webp",
    },
];

document.addEventListener("DOMContentLoaded", function () {
  // Function to render menu items
  function renderMenuItem(item) {
    return `
      <div class="bg-primary w-fit border border-black rounded-xl drop-shadow-xl">
        <img src="${item.img}" class="rounded-t-lg aspect-square object-cover object-center" alt="${item.title}">
        <div class="p-4">
          <h5 class="text-base md:text-xl font-bold">${item.title}</h5>
          <h6 class="text-base md:text-lg font-semibold">${item.price}</h6>
          <p class="text-sm md:text-base font-medium">${item.description}</p>
          <p class="text-sm">Category: <span class="capitalize">${item.category}</span></p>
        </div>
      </div>
    `;
  }

  // Function to display filtered menu items
  function displayMenu(filteredMenu) {
    const menuContainer = document.getElementById("menu-items");
    menuContainer.innerHTML = filteredMenu.map(renderMenuItem).join("");
  }

  // Function to filter menu items based on category
  function filterMenu(category) {
    const filteredMenu =
      category === "all" ? menu : menu.filter((item) => item.category === category);
    displayMenu(filteredMenu);
  }

  // Initial rendering of menu
  filterMenu("all");

  // Add click event listeners to filter buttons
  const filterButtons = document.querySelectorAll(".category");
  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const category = this.getAttribute("data-filter");
      filterMenu(category);
    });
  });

  // Add input event listener to search input
  const searchInput = document.getElementById("search-input");
  searchInput.addEventListener("input", function () {
    const searchTerm = this.value.toLowerCase();
    const filteredMenu = menu.filter((item) =>
      item.title.toLowerCase().includes(searchTerm)
    );
    displayMenu(filteredMenu); // Only show filtered items based on search
  });
});
