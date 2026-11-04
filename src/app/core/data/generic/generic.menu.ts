import { MenuCategory } from '../../models/menu-category.model';
import { MenuItem } from '../../models/menu.model';

/*
|--------------------------------------------------------------------------
| GENERIC MENU CATEGORIES
|--------------------------------------------------------------------------
*/

export const GENERIC_MENU_CATEGORIES: MenuCategory[] = [

  {
    id: 'pizza',
    name: 'Woodfire Stories',
    description: 'Handcrafted pizzas with rich sauces and delicious toppings.',
    image: 'assets/cafes/generic/menu/pizza/category.jpg',
    displayOrder: 1,
    isActive: true
  },

  {
    id: 'burger',
    name: 'Stacked & Loaded',
    description: 'Juicy, loaded burgers made for serious cravings.',
    image: 'assets/cafes/generic/menu/burger/category.jpg',
    displayOrder: 2,
    isActive: true
  },

  {
    id: 'pasta',
    name: 'Twirl & Toss',
    description: 'Creamy and flavorful pasta dishes made fresh.',
    image: 'assets/cafes/generic/menu/pasta/category.jpg',
    displayOrder: 3,
    isActive: true
  },

  {
    id: 'spaghetti',
    name: 'Long Story',
    description: 'Classic spaghetti dishes with rich and comforting flavors.',
    image: 'assets/cafes/generic/menu/spaghetti/category.jpg',
    displayOrder: 4,
    isActive: true
  },

  {
    id: 'nachos',
    name: 'Crunch Society',
    description: 'Crispy nachos loaded with delicious toppings.',
    image: 'assets/cafes/generic/menu/nachos/category.jpg',
    displayOrder: 5,
    isActive: true
  },

  {
    id: 'cheese-balls',
    name: 'Golden Bites',
    description: 'Crispy golden bites filled with cheesy goodness.',
    image: 'assets/cafes/generic/menu/cheese-balls/category.jpg',
    displayOrder: 6,
    isActive: true
  },

  {
    id: 'fries',
    name: 'Crisp Corner',
    description: 'Golden, crispy fries with irresistible flavors.',
    image: 'assets/cafes/generic/menu/fries/category.jpg',
    displayOrder: 7,
    isActive: true
  },

  {
    id: 'bakery',
    name: 'The Bake Table',
    description: 'Freshly baked treats, pastries and desserts.',
    image: 'assets/cafes/generic/menu/bakery/category.jpg',
    displayOrder: 8,
    isActive: true
  },

  {
    id: 'coffee-milk',
    name: 'Velvet Coffee',
    description: 'Smooth, creamy coffee crafted with perfectly steamed milk.',
    image: 'assets/cafes/generic/menu/coffee-milk/category.jpg',
    displayOrder: 9,
    isActive: true
  },

  {
    id: 'coffee-black',
    name: 'Bare Brew',
    description: 'Bold coffee for those who love the pure taste of the bean.',
    image: 'assets/cafes/generic/menu/coffee-black/category.jpg',
    displayOrder: 10,
    isActive: true
  },

  {
    id: 'cold-shakes',
    name: 'Chill & Shake',
    description: 'Cold, creamy shakes made for indulgent moments.',
    image: 'assets/cafes/generic/menu/cold-shakes/category.jpg',
    displayOrder: 11,
    isActive: true
  }

];


/*
|--------------------------------------------------------------------------
| GENERIC MENU ITEMS
|--------------------------------------------------------------------------
*/

export const GENERIC_MENU_ITEMS: MenuItem[] = [

  // ========================================================================
  // PIZZA
  // ========================================================================

  {
    id: 'margherita-muse',
    name: 'Margherita Muse',
    description:
      'Classic tomato sauce, mozzarella and fragrant basil on a freshly baked crust.',
    price: 249,
    image: 'assets/cafes/generic/menu/pizza/margherita-muse.png',
    categoryId: 'pizza',
    isVeg: true,
    isPopular: true,
    isAvailable: true,
    tags: ['classic', 'cheesy', 'basil']
  },

  {
    id: 'garden-glow',
    name: 'Garden Glow',
    description:
      'A colorful mix of fresh vegetables, mozzarella and our signature tomato sauce.',
    price: 299,
    image: 'assets/cafes/generic/menu/pizza/garden-glow.png',
    categoryId: 'pizza',
    isVeg: true,
    isAvailable: true,
    tags: ['vegetarian', 'fresh', 'veggies']
  },

  {
    id: 'paneer-fire',
    name: 'Paneer Fire',
    description:
      'Spiced paneer, onions, peppers and mozzarella layered over a rich tomato base.',
    price: 329,
    image: 'assets/cafes/generic/menu/pizza/paneer-fire.png',
    categoryId: 'pizza',
    isVeg: true,
    isPopular: true,
    isAvailable: true,
    tags: ['paneer', 'spicy', 'loaded']
  },

  {
    id: 'four-cheese-affair',
    name: 'Four Cheese Affair',
    description:
      'A decadent combination of four cheeses for the ultimate creamy, cheesy bite.',
    price: 349,
    image: 'assets/cafes/generic/menu/pizza/four-cheese-affair.png',
    categoryId: 'pizza',
    isVeg: true,
    isAvailable: true,
    tags: ['cheese', 'creamy', 'premium']
  },


  // ========================================================================
  // BURGER
  // ========================================================================

  {
    id: 'classic-bloom',
    name: 'Classic Bloom',
    description:
      'A juicy patty with lettuce, tomato, onion and signature café sauce.',
    price: 199,
    image: 'assets/cafes/generic/menu/burger/classic-bloom.png',
    categoryId: 'burger',
    isVeg: true,
    isAvailable: true,
    tags: ['classic', 'fresh', 'comfort']
  },

  {
    id: 'cheese-crush',
    name: 'Cheese Crush',
    description:
      'A loaded cheesy burger layered with a golden cheese slice and creamy sauce.',
    price: 229,
    image: 'assets/cafes/generic/menu/burger/cheese-crush.png',
    categoryId: 'burger',
    isVeg: true,
    isPopular: true,
    isAvailable: true,
    tags: ['cheesy', 'loaded', 'popular']
  },

  {
    id: 'bb-loaded-stack',
    name: 'BB Loaded Stack',
    description:
      'A towering loaded burger packed with crispy layers, fresh vegetables and signature sauce.',
    price: 299,
    image: 'assets/cafes/generic/menu/burger/bb-loaded-stack.png',
    categoryId: 'burger',
    isVeg: true,
    isAvailable: true,
    tags: ['loaded', 'premium', 'stacked']
  },


  // ========================================================================
  // PASTA
  // ========================================================================

  {
    id: 'cream-cloud-pasta',
    name: 'Cream Cloud Pasta',
    description:
      'Silky creamy pasta tossed with herbs, vegetables and parmesan-style cheese.',
    price: 279,
    image: 'assets/cafes/generic/menu/pasta/cream-cloud-pasta.png',
    categoryId: 'pasta',
    isVeg: true,
    isPopular: true,
    isAvailable: true,
    tags: ['creamy', 'comfort', 'popular']
  },

  {
    id: 'pink-sunset-pasta',
    name: 'Pink Sunset Pasta',
    description:
      'A beautiful blend of creamy white sauce and tangy tomato sauce.',
    price: 299,
    image: 'assets/cafes/generic/menu/pasta/pink-sunset-pasta.png',
    categoryId: 'pasta',
    isVeg: true,
    isAvailable: true,
    tags: ['pink-sauce', 'creamy', 'signature']
  },

  {
    id: 'arrabbiata-rush',
    name: 'Arrabbiata Rush',
    description:
      'Pasta tossed in a bold tomato and chilli sauce with aromatic herbs.',
    price: 259,
    image: 'assets/cafes/generic/menu/pasta/arrabbiata-rush.png',
    categoryId: 'pasta',
    isVeg: true,
    isAvailable: true,
    tags: ['spicy', 'tomato', 'bold']
  },


  // ========================================================================
  // SPAGHETTI
  // ========================================================================

  {
    id: 'midnight-marinara',
    name: 'Midnight Marinara',
    description:
      'Classic spaghetti tossed in a rich tomato marinara sauce with herbs.',
    price: 279,
    image: 'assets/cafes/generic/menu/spaghetti/midnight-marinara.png',
    categoryId: 'spaghetti',
    isVeg: true,
    isPopular: true,
    isAvailable: true,
    tags: ['marinara', 'tomato', 'classic']
  },

  {
    id: 'garlic-herb-strings',
    name: 'Garlic & Herb Strings',
    description:
      'Spaghetti tossed with roasted garlic, herbs, olive oil and fresh seasoning.',
    price: 289,
    image: 'assets/cafes/generic/menu/spaghetti/garlic-herb-strings.png',
    categoryId: 'spaghetti',
    isVeg: true,
    isAvailable: true,
    tags: ['garlic', 'herbs', 'light']
  },


  // ========================================================================
  // NACHOS
  // ========================================================================

  {
    id: 'crunch-fiesta',
    name: 'Crunch Fiesta',
    description:
      'Crispy nachos topped with salsa, cheese, jalapeños and fresh vegetables.',
    price: 229,
    image: 'assets/cafes/generic/menu/nachos/crunch-fiesta.png',
    categoryId: 'nachos',
    isVeg: true,
    isPopular: true,
    isAvailable: true,
    tags: ['crispy', 'cheesy', 'snack']
  },

  {
    id: 'loaded-nacho-night',
    name: 'Loaded Nacho Night',
    description:
      'A generous plate of nachos layered with cheese, salsa, jalapeños and creamy toppings.',
    price: 279,
    image: 'assets/cafes/generic/menu/nachos/loaded-nacho-night.png',
    categoryId: 'nachos',
    isVeg: true,
    isAvailable: true,
    tags: ['loaded', 'cheesy', 'sharing']
  },


  // ========================================================================
  // CHEESE BALLS
  // ========================================================================

  {
    id: 'cheese-bombs',
    name: 'Cheese Bombs',
    description:
      'Crispy golden bites filled with warm, melty cheese.',
    price: 199,
    image: 'assets/cafes/generic/menu/cheese-balls/cheese-bombs.png',
    categoryId: 'cheese-balls',
    isVeg: true,
    isPopular: true,
    isAvailable: true,
    tags: ['cheesy', 'crispy', 'snack']
  },

  {
    id: 'herb-cheese-bites',
    name: 'Herb Cheese Bites',
    description:
      'Golden cheese bites infused with aromatic herbs and crispy seasoning.',
    price: 219,
    image: 'assets/cafes/generic/menu/cheese-balls/herb-cheese-bites.png',
    categoryId: 'cheese-balls',
    isVeg: true,
    isAvailable: true,
    tags: ['cheese', 'herbs', 'crispy']
  },


  // ========================================================================
  // FRIES
  // ========================================================================

  {
    id: 'golden-classic',
    name: 'Golden Classic',
    description:
      'Crispy golden fries seasoned lightly for the perfect classic bite.',
    price: 149,
    image: 'assets/cafes/generic/menu/fries/golden-classic.png',
    categoryId: 'fries',
    isVeg: true,
    isAvailable: true,
    tags: ['classic', 'crispy', 'snack']
  },

  {
    id: 'cheese-drip-fries',
    name: 'Cheese Drip Fries',
    description:
      'Golden fries generously topped with creamy melted cheese.',
    price: 199,
    image: 'assets/cafes/generic/menu/fries/cheese-drip-fries.png',
    categoryId: 'fries',
    isVeg: true,
    isPopular: true,
    isAvailable: true,
    tags: ['cheese', 'loaded', 'popular']
  },

  {
    id: 'peri-peri-rush',
    name: 'Peri Peri Rush',
    description:
      'Crispy fries tossed in a bold and spicy peri peri seasoning.',
    price: 179,
    image: 'assets/cafes/generic/menu/fries/peri-peri-rush.png',
    categoryId: 'fries',
    isVeg: true,
    isAvailable: true,
    tags: ['spicy', 'peri-peri', 'crispy']
  },


  // ========================================================================
  // BAKERY
  // ========================================================================

  {
    id: 'butter-cloud-croissant',
    name: 'Butter Cloud Croissant',
    description:
      'A flaky, buttery croissant baked until perfectly golden.',
    price: 149,
    image: 'assets/cafes/generic/menu/bakery/butter-cloud-croissant.png',
    categoryId: 'bakery',
    isVeg: true,
    isAvailable: true,
    tags: ['croissant', 'buttery', 'breakfast']
  },

  {
    id: 'cafe-veg-puff',
    name: 'Café Veg Puff',
    description:
      'Flaky pastry filled with a warm and flavorful vegetable filling.',
    price: 99,
    image: 'assets/cafes/generic/menu/bakery/cafe-veg-puff.png',
    categoryId: 'bakery',
    isVeg: true,
    isAvailable: true,
    tags: ['puff', 'savory', 'snack']
  },

  {
    id: 'velvet-chocolate-pastry',
    name: 'Velvet Chocolate Pastry',
    description:
      'Soft chocolate sponge layered with smooth chocolate cream.',
    price: 169,
    image: 'assets/cafes/generic/menu/bakery/velvet-chocolate-pastry.png',
    categoryId: 'bakery',
    isVeg: true,
    isPopular: true,
    isAvailable: true,
    tags: ['chocolate', 'dessert', 'popular']
  },

  {
    id: 'red-velvet-cupcake',
    name: 'Red Velvet Cupcake',
    description:
      'Soft red velvet sponge finished with creamy frosting.',
    price: 149,
    image: 'assets/cafes/generic/menu/bakery/red-velvet-cupcake.png',
    categoryId: 'bakery',
    isVeg: true,
    isAvailable: true,
    tags: ['red-velvet', 'cupcake', 'dessert']
  },

  {
    id: 'new-york-cheesecake',
    name: 'New York Cheesecake',
    description:
      'Rich and creamy cheesecake with a smooth classic finish.',
    price: 229,
    image: 'assets/cafes/generic/menu/bakery/new-york-cheesecake.png',
    categoryId: 'bakery',
    isVeg: true,
    isPopular: true,
    isAvailable: true,
    tags: ['cheesecake', 'creamy', 'premium']
  },

  {
    id: 'classic-tiramisu',
    name: 'Classic Tiramisu',
    description:
      'Coffee-soaked layers with creamy mascarpone-style filling and cocoa.',
    price: 249,
    image: 'assets/cafes/generic/menu/bakery/classic-tiramisu.png',
    categoryId: 'bakery',
    isVeg: true,
    isAvailable: true,
    tags: ['tiramisu', 'coffee', 'dessert']
  },


  // ========================================================================
  // COFFEE WITH MILK
  // ========================================================================

  {
    id: 'velvet-cappuccino',
    name: 'Velvet Cappuccino',
    description:
      'Rich espresso balanced with steamed milk and a soft layer of foam.',
    price: 149,
    image: 'assets/cafes/generic/menu/coffee-milk/velvet-cappuccino.png',
    categoryId: 'coffee-milk',
    isVeg: true,
    isPopular: true,
    isAvailable: true,
    tags: ['cappuccino', 'coffee', 'classic']
  },

  {
    id: 'silky-cafe-latte',
    name: 'Silky Café Latte',
    description:
      'Smooth espresso blended with silky steamed milk for a mellow finish.',
    price: 159,
    image: 'assets/cafes/generic/menu/coffee-milk/silky-cafe-latte.jpeg',
    categoryId: 'coffee-milk',
    isVeg: true,
    isAvailable: true,
    tags: ['latte', 'coffee', 'smooth']
  },

  {
    id: 'mocha-melt',
    name: 'Mocha Melt',
    description:
      'Espresso, chocolate and steamed milk combined into a rich mocha.',
    price: 189,
    image: 'assets/cafes/generic/menu/coffee-milk/mocha-melt.png',
    categoryId: 'coffee-milk',
    isVeg: true,
    isPopular: true,
    isAvailable: true,
    tags: ['mocha', 'chocolate', 'coffee']
  },

  {
    id: 'caramel-cloud-latte',
    name: 'Caramel Cloud Latte',
    description:
      'Creamy latte finished with smooth caramel sweetness.',
    price: 199,
    image: 'assets/cafes/generic/menu/coffee-milk/caramel-cloud-latte.png',
    categoryId: 'coffee-milk',
    isVeg: true,
    isAvailable: true,
    tags: ['caramel', 'latte', 'sweet']
  },


  // ========================================================================
  // COFFEE WITHOUT MILK
  // ========================================================================

  {
    id: 'midnight-americano',
    name: 'Midnight Americano',
    description:
      'Bold espresso diluted with hot water for a smooth, full-bodied coffee.',
    price: 129,
    image: 'assets/cafes/generic/menu/coffee-black/midnight-americano.jpeg',
    categoryId: 'coffee-black',
    isVeg: true,
    isAvailable: true,
    tags: ['americano', 'black-coffee', 'bold']
  },

  {
    id: 'espresso-shot',
    name: 'Espresso Shot',
    description:
      'A concentrated shot of rich espresso with a deep aromatic finish.',
    price: 109,
    image: 'assets/cafes/generic/menu/coffee-black/espresso-shot.png',
    categoryId: 'coffee-black',
    isVeg: true,
    isPopular: true,
    isAvailable: true,
    tags: ['espresso', 'strong', 'classic']
  },

  {
    id: 'double-espresso',
    name: 'Double Espresso',
    description:
      'Two rich espresso shots for a stronger and more intense coffee experience.',
    price: 159,
    image: 'assets/cafes/generic/menu/coffee-black/double-espresso.jpeg',
    categoryId: 'coffee-black',
    isVeg: true,
    isAvailable: true,
    tags: ['espresso', 'strong', 'double']
  },


  // ========================================================================
  // COLD SHAKES
  // ========================================================================

  {
    id: 'chocolate-dream',
    name: 'Chocolate Dream',
    description:
      'A thick and creamy chocolate shake made for serious chocolate lovers.',
    price: 199,
    image: 'assets/cafes/generic/menu/cold-shakes/chocolate-dream.jpeg',
    categoryId: 'cold-shakes',
    isVeg: true,
    isPopular: true,
    isAvailable: true,
    tags: ['chocolate', 'shake', 'creamy']
  },

  {
    id: 'cookies-cream',
    name: 'Cookies & Cream',
    description:
      'Creamy vanilla shake blended with crunchy chocolate cookies.',
    price: 219,
    image: 'assets/cafes/generic/menu/cold-shakes/cookies-cream.png',
    categoryId: 'cold-shakes',
    isVeg: true,
    isAvailable: true,
    tags: ['cookies', 'cream', 'shake']
  },

  {
    id: 'strawberry-velvet',
    name: 'Strawberry Velvet',
    description:
      'Smooth strawberry shake with a rich, creamy texture.',
    price: 199,
    image: 'assets/cafes/generic/menu/cold-shakes/strawberry-velvet.jpeg',
    categoryId: 'cold-shakes',
    isVeg: true,
    isAvailable: true,
    tags: ['strawberry', 'fruity', 'shake']
  },

  {
    id: 'caramel-crunch',
    name: 'Caramel Crunch',
    description:
      'Creamy caramel shake finished with crunchy caramel-inspired toppings.',
    price: 229,
    image: 'assets/cafes/generic/menu/cold-shakes/caramel-crunch.png',
    categoryId: 'cold-shakes',
    isVeg: true,
    isAvailable: true,
    tags: ['caramel', 'crunchy', 'shake']
  }

];