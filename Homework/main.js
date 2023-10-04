const shopItems = [
    {
      id: 1,
      name: "Air Max 97",
      price: 130.0,
      about:
        "The design of the shoe is commonly thought to be inspired by the bullet trains of Japan, but the design was inspired by mountain bikes. ",
      category: "shoes",
    },
    {
      id: 2,
      name: "Adidas NMD R1",
      price: 128,
      about:
        "New-wave classics, with a timeless vintage design: men’s NMD R1 gear is the ultimate go-anywhere shoe. Vibrant styles and soft cushioning will have you gliding through life, wherever it may take you.",
      category: "shoes",
    },
    {
      id: 3,
      name: "Gucci Oversize T-shirt with Interlocking G",
      price: 580,
      about:
        "The now recognizable oversize Gucci T-shirt continues to evolve with each new collection, the Interlocking G print is influenced by an '80s design from the archives. Streetwear continues to be a defining feature of Gucci's collections and is often juxtaposed by tailored separates.",
      category: "shirts",
    },
    {
      id: 4,
      name: "Nike Sportswear Club",
      price: 18.97,
      about:
        "The Nike Sportswear Club T-Shirt is made with our everyday cotton fabric and a classic fit for a familiar feel right out of the bag. An embroidered Futura logo on the chest provides a signature Nike look.",
      category: "shirts",
    },
    {
      id: 5,
      name: "Spanx Flare Jeans, Vintage Indigo",
      price: 148,
      about:
        "These 70s inspired flare jeans are the perfect wear everywhere with anything style. Designed with premium stretch denim, high-rise coverage and hidden core shaping technology, this jean puts a new twist on a retro silhouette.",
      category: "pants",
    },
    {
      id: 6,
      name: "Bonobos Premium Stretch Jeans",
      price: 69,
      about:
        "Resilient stretch denim made incredibly soft. Yes, jeans can be unbelievably comfortable.",
      category: "pants",
    },
  ];
  
  function displayShopItems(items) {
    items.forEach((item) => {
      console.log("=======================================");
      console.log(`Name: \t ${item.name}`);
      console.log(`Price: \t ${item.price}`);
      console.log(`About: \t ${item.about}`);
      console.log(`Category: ${item.category}`);
      console.log("=======================================");
    });
  }
  
  displayShopItems(shopItems);



//   Question 2:
// Write a function that parses through the below object and displays all of their
// favorite food dishes as shown:

function displayFavFoods(f) {
    for (const key in f) {
        if (f.hasOwnProperty(key)) {
            const value = f[key];
            console.log(`${key} contains:`);
            if (Array.isArray(value)) {
                value.forEach(val => console.log(val));
            } else if (typeof value === 'object') {
                displayFavFoods(value);
            } else {
                console.log(value);
            }
        }
    }
}

const hwPerson = {
    pizza: ["Deep Dish", "South Side Thin Crust"],
    tacos: "Anything not from Taco bell",
    burgers: "Portillos Burgers",
    ice_cream: ["Chocolate", "Vanilla", "Oreo"],
    shakes: {
        oberwise: "Chocolate",
        dunkin: "Vanilla",
        culvers: "All of them",
        mcDonalds: "Sham-rock-shake",
        cupids_candies: "Chocolate Malt"
    }
};

displayFavFoods(hwPerson);

console.log(displayFavFoods(hwPerson));






//   Complete 3 Codewars problems using JavaScript, start with ones you have already solved in python.  Paste a link here to the 3 questions you completed

//   1: https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/train/javascript
  
function repeatStr (n, s) {
    if (n < 1) {
      return "";
    }
    return s.repeat(n);
  }


//   2: https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/train/javascript
  
function evenOrOdd(number) {
    if (number % 2 === 0) {
        return "Even";
    }   else {
        return "Odd";
    }
}

console.log(evenOrOdd(4));
console.log(evenOrOdd(7));

//   3:https://www.codewars.com/kata/5265326f5fda8eb1160004c8/train/javascript

function numberToString(number) {
    return number.toString();
  }
  
  console.log(numberToString(123));   
  console.log(numberToString(999));   
  console.log(numberToString(-100)); 
  
  