import { defineStore } from "pinia";
import Swal from "sweetalert2";
if(localStorage.getItem('cart') == null){
  const isian = [];
  localStorage.setItem('cart',isian);
}
const localCart = localStorage.getItem('cart');
export const useShoppingStore = defineStore("shopping", {
  state: () => {
    return {
      products: [
        {
          id: 1,
          name: "Kurumi Tokisaki",
          price: "120",
          anime: "Date a Live",
          rate: "4.3",
          image:
            "https://i.pinimg.com/564x/6c/03/3d/6c033dd49b4c8f5706d749d389d3a4bb.jpg",
          location: "Tokyo, Japan",
          description:
            'Introducing Kurumi Tokisaki from the anime <strong class="text-accent">Date a Live</strong>. This figure beautifully captures Kurumi\'s intense presence as she prepares to shoot.',
        },
        {
          id: 2,
          name: "Frieren",
          price: "200",
          anime: "Sousou no Frieren",
          rate: "4.9",
          image:
            "https://i.pinimg.com/736x/79/bf/49/79bf491f1d5ff0c626bc17bcfcc23ea5.jpg",
          location: "Tokyo, Japan",
          description:
            'Meet Frieren, the protagonist from the anime <strong class="text-accent">Sousou no Frieren</strong>. This exquisite figure encapsulates Frieren\'s serene yet powerful presence, depicting her in a moment of determination.',
        },
        {
          id: 3,
          name: "Ritsu Tainaka",
          price: "150",
          anime: "K-on!",
          rate: "4.4",
          image:
            "https://i.pinimg.com/564x/81/4d/80/814d8036dba92ae9ed7fa4504d50e037.jpg",
          location: "Tokyo, Japan",
          description:
            'Meet Ritsu Tainaka, the spirited drummer from the popular anime <strong class="text-accent">K-On!</strong> This figure beautifully captures Ritsu\'s lively personality and love for music.',
        },
        {
          id: 4,
          name: "Gojo & Getou",
          price: "400",
          anime: "Jujutsu Kaisen",
          rate: "4.6",
          image:
            "https://i.pinimg.com/564x/6c/05/35/6c05359f84f015bcb807e79784cad7a4.jpg",
          location: "Tokyo, Japan",
          description:
            'Step into the world of <strong class="text-accent">Jujutsu Kaisen</strong> with this breathtaking figure featuring Gojo & Getou locked in a fierce battle stance.',
        },
        {
          id: 5,
          name: "Chibi Rei Ayanami",
          price: "220",
          anime: "Evangelion",
          rate: "4.5",
          image:
            "https://i.pinimg.com/564x/59/2a/09/592a093f88267aa6581bdac003d0c3b4.jpg",
          location: "Tokyo, Japan",
          description:
            'Delight in the adorable charm of Chibi Rei Ayanami from the legendary anime <strong class="text-accent">Evangelion</strong>. This figure presents Rei in a cute chibi-style rendition.',
        },
        {
          id: 6,
          name: "Makima",
          price: "300",
          anime: "Chainsaw Man",
          rate: "4.7",
          image:
            "https://i.pinimg.com/564x/c1/09/13/c109135c02fb317b448849cc98bb9ffa.jpg",
          location: "Tokyo, Japan",
          description:
            'Enter the world of <strong class="text-accent">Chainsaw Man</strong> with the captivating figure of Makima. This figure brilliantly captures Makima\'s enigmatic allure and commanding presence.',
        },
        {
          id: 7,
          name: "Naruto & Sasuke",
          price: "450",
          anime: "Naruto",
          rate: "4.8",
          image:
            "https://i.pinimg.com/564x/1b/d2/99/1bd299d6c7cd65468be72794721c9efd.jpg",
          location: "Tokyo, Japan",
          description:
            'Embark on a journey with the iconic ninjas Naruto and Sasuke from the legendary anime <strong class="text-accent">Naruto</strong>. This intricately crafted figure pack captures the dynamic duo in a fierce battle stance.',
        },
        {
          id: 8,
          name: "Kuro & Kenma",
          price: "550",
          anime: "Haikyuu",
          rate: "4.75",
          image:
            "https://i.pinimg.com/564x/8c/81/60/8c8160fffaee5c9a8ae837ebae092d2c.jpg",
          location: "Tokyo, Japan",
          description:
            'Immerse yourself in the thrilling world of volleyball with Kuro & Kenma from the adrenaline-fueled anime <strong class="text-accent">Haikyuu</strong>. This figure set perfectly encapsulates the dynamic duo\'s camaraderie.',
        },
        {
          id: 9,
          name: "Levi Ackerman",
          price: "500",
          anime: "Attack on Titan",
          rate: "4.95",
          image:
            "https://i.pinimg.com/564x/4b/05/be/4b05beddcfc35cb5619718854c60671e.jpg",
          location: "Tokyo, Japan",
          description:
            'Immerse yourself in the thrilling world of volleyball with Kuro & Kenma from the adrenaline-fueled anime <strong class="text-accent">Haikyuu</strong>. This figure set perfectly encapsulates the dynamic duo\'s camaraderie.',
        },
        {
          id: 10,
          name: "Izuku Midoriya",
          price: "350",
          anime: "My Hero Academia",
          rate: "4.75",
          image:
            "https://i.pinimg.com/564x/a3/8a/47/a38a47e8232d2cca7ee8465c7ad77cb3.jpg",
          location: "Tokyo, Japan",
          description:
            'Immerse yourself in the thrilling world of volleyball with Kuro & Kenma from the adrenaline-fueled anime <strong class="text-accent">Haikyuu</strong>. This figure set perfectly encapsulates the dynamic duo\'s camaraderie.',
        },
      ],
      cartItems: localCart.length != 0 ? JSON.parse(localStorage.getItem('cart')) : [],
      selectedItem: "",
      searchQuery: "",
      searching: [],
    };
  },
  getters: {
    countCartItems() {
      return this.cartItems.length;
    },
    getCartItems() {
      // console.log(localStorage.getItem('cart'))
      // console.log(JSON.parse(localStorage.getItem('cart')))
      return this.cartItems;
    },
    buyingTotal() {
      return this.cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0,
      );
    },
  },
  actions: {
    addToCart(item) {
      let index = this.cartItems.findIndex((product) => product.id === item.id);
      if (index !== -1) {
        console.log(index);
        this.cartItems[index].quantity += 1;
        localStorage.setItem('cart', JSON.stringify(this.cartItems));
        Swal.fire({
          title: "Yeay!",
          text: "Your Item has been added",
          imageUrl:
            "https://i.pinimg.com/originals/17/3f/6e/173f6e2c27e4821abdf5d81054d91572.gif",
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: "Custom image",
        });
      } else {
        console.log(index);
        item.quantity = 1;
        this.cartItems.push(item);
        localStorage.setItem('cart', JSON.stringify(this.cartItems));
        Swal.fire({
          title: "Yeay!",
          text: "Your Item has been saved",
          imageUrl:
            "https://i.pinimg.com/originals/17/3f/6e/173f6e2c27e4821abdf5d81054d91572.gif",
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: "Custom image",
        });
      }
    },
    tambahQty(item) {
      let index = this.cartItems.findIndex((product) => product.id === item.id);
      if (index !== -1) {
        this.cartItems[index].quantity += 1;
        localStorage.setItem('cart', JSON.stringify(this.cartItems));
      }
    },
    kurangQty(item) {
      let index = this.cartItems.findIndex((product) => product.id === item.id);
      if (index != -1) {
        this.cartItems[index].quantity -= 1;
        localStorage.setItem('cart', JSON.stringify(this.cartItems));
        if (this.cartItems[index].quantity === 0) {
          this.cartItems = this.cartItems.filter(
            (product) => product.id !== item.id,
          );
          localStorage.setItem('cart', JSON.stringify(this.cartItems));
        }
      }
    },
    removeFromCart(item) {
      this.cartItems = this.cartItems.filter(
        (product) => product.id !== item.id,
      );
      localStorage.setItem('cart', JSON.stringify(this.cartItems));
      Swal.fire({
        title: "Noo!",
        text: "Your item has been removed",
        imageUrl:
          "https://i.pinimg.com/originals/b4/b1/64/b4b1640525ecadfa1030e6096f3ec842.gif",
        imageWidth: 400,
        imageHeight: 300,
        imageAlt: "Custom image",
      });
    },
    log() {
      console.log(this.selectedItem.id); //buat cek sesuatu
    },
    search() {
      this.searching = this.products.filter((item) =>
        item.name.toLowerCase().includes(this.searchQuery.toLowerCase()),
      );
    },
    detail(item) {
      localStorage.setItem('detail',JSON.stringify(item));
      const getDetLocal = JSON.parse(localStorage.getItem('detail'));
      this.selectedItem = getDetLocal;
      console.log(item);
      console.log(getDetLocal);
    },
  }
});
