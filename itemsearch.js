let products= {
    data: [
        {
            productName:"Rabri",
            category:"Dessert",
            image:"rabri.jpg"
        },
        {
            productName:"Kashmiri Dum Aloo",
            category:"Veg",
            image:"kashmiri dum aloo.jpg",
        },
        {
            productName:"Ghewar",
            category:"Dessert",
            image:"ghewar.jpg",
        },
        {
            productName:"Mutter Paneer",
            category:"Veg",
            image:"mutter paneer.jpg",
        },
        {
            productName:"Kullu Trout Fish",
            category:"NonVeg",
            image:"kullu trout fish.jpg",
        },
        {
            productName:"Shawarma",
            category:"NonVeg",
            image:"shawarma.jpg",
        },
        {
     
            productName:"Malai Kofta",
            category:"Veg",
            image:"malai kofta.jpg",
        },
        {
            productName:"Besan Kachori",
            category:"Veg",
            image:"besan kachori.jpg",
        },
        {
            productName:"Chicken Tikka Masala",
            category:"NonVeg",
            image:"chicken tikka.jpg",
        },
        {
            productName:"Rajma Chawal",
            category:"Veg",
            image:"rajma chawal.jpg",
        },
        {
            productName:"Sarson Da Saag",
            category:"Veg",
            image:"sarson da saag.jpg",
        },
        {
            productName:"Makki Ki Roti",
            category:"veg",
            image:"makki ki roti.jpg",
        },
        {
            productName:"Murg Makhani",
            category:"NonVeg",
            image:"murg makhani.jpg",
        },
        {
            productName:"Nihari Gosht",
            category:"Non-Veg",
            image:"nihari gosht.jpg",
        },
        {
            productName:"Chole Bhature",
            category:"Veg",
            image:"chole bhature.jpg",
        },
        {
            productName:"Paneer Paratha",
    
            category:"Veg",
            image:"paneer paratha.jpg",
        },
        {
            productName:"Zunka Bhakri",
            category:"Veg",
            image:"zunka bhakri.jpg",
        },
        {
            productName:"Karanji",
            category:"Dessert",
            image:"karanji.jpg",
        },
        {
            productName:"Shrikhand",
            category:"Dessert",
            image:"shrikhand.jpg"
        },
        {
            productName:"Bebinca",
            category:"Dessert",
            image:"bebinca.jpg",
        },
        {
            productName:"Machcher Jhol",
            category:"NonVeg",
            image:"machcher jhol.jpg",
        },
        
        ]
};

 
  for (let i of products.data) {
    //Create Card
    let card = document.createElement("div");
    //Card should have category and should stay hidden initially
    card.classList.add("card", i.category, "hide");
    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //container
    let container = document.createElement("div");
    container.classList.add("container");
    //product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
    //price
    let price = document.createElement("h6");

    container.appendChild(price);
    card.appendChild(container);
    document.getElementById("products").appendChild(card);
  }
  //parameter passed from button (Parameter same as category)
  function filterProduct(value) {
    //Button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      //check if value equals innerText
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
    //select all cards
    let elements = document.querySelectorAll(".card");
    //loop through all cards
    elements.forEach((element) => {
      //display all cards on 'all' button click
      if (value == "all") {
        element.classList.remove("hide");
      } else {
        //Check if element contains category class
        if (element.classList.contains(value)) {
          //display element based on category
          element.classList.remove("hide");
        } else {
          //hide other elements
          element.classList.add("hide");
        }
      }
    });
  }
  //Search button click
  document.getElementById("search").addEventListener("click", () => {
    //initializations
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
    //loop through all elements
    elements.forEach((element, index) => {
      //check if text includes the search value
      if (element.innerText.includes(searchInput.toUpperCase())) {
        //display matching card
        cards[index].classList.remove("hide");
      } else {
        //hide others
        cards[index].classList.add("hide");
      }
    });
  });
  //Initially display all products
  window.onload = () => {
    filterProduct("all");
  };