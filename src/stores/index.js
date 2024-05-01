import { defineStore } from 'pinia';
import Swal from 'sweetalert2';

export const useShoppingStore = defineStore('shopping', {
    state: () =>{
        return {
            products : [
                {
                    id : 1,
                    name : 'Kurumi Tokisaki',
                    price : '100',
                    anime: 'Date a Live',
                    rate: '4.8',
                    image: 'https://i.pinimg.com/564x/6c/03/3d/6c033dd49b4c8f5706d749d389d3a4bb.jpg',
                    location: 'Tokyo, Japan'
                },
                {
                    id : 2,
                    name : 'Frieren',
                    price : '100',
                    anime: 'Sousou no Frieren',
                    rate: '4.8',
                    image: 'https://i.pinimg.com/736x/79/bf/49/79bf491f1d5ff0c626bc17bcfcc23ea5.jpg',
                    location: 'Tokyo, Japan'
                },
                {
                    id : 3,
                    name : 'Ritsu Tainaka',
                    price : '100',
                    anime: 'K-on!',
                    rate: '4.8',
                    image: 'https://i.pinimg.com/564x/81/4d/80/814d8036dba92ae9ed7fa4504d50e037.jpg',
                    location: 'Tokyo, Japan'
                },
                {
                    id : 4,
                    name : 'Gojo & Getou',
                    price : '100',
                    anime: 'Jujutsu Kaisen',
                    rate: '4.8',
                    image: 'https://i.pinimg.com/564x/6c/05/35/6c05359f84f015bcb807e79784cad7a4.jpg',
                    location: 'Tokyo, Japan'
                },
                {
                    id : 5,
                    name : 'Chibi Rei Ayanami',
                    price : '100',
                    anime: 'Evangelion',
                    rate: '4.8',
                    image: 'https://i.pinimg.com/564x/59/2a/09/592a093f88267aa6581bdac003d0c3b4.jpg',
                    location: 'Tokyo, Japan'
                },
                {
                    id : 6,
                    name : 'Makima',
                    price : '100',
                    anime: 'Chainsaw Man',
                    rate: '4.8',
                    image: 'https://i.pinimg.com/564x/c1/09/13/c109135c02fb317b448849cc98bb9ffa.jpg',
                    location: 'Tokyo, Japan'
                },
                {
                    id : 7,
                    name : 'Naruto',
                    price : '100',
                    anime: 'Naruto',
                    rate: '4.8',
                    image: 'https://i.pinimg.com/564x/1b/d2/99/1bd299d6c7cd65468be72794721c9efd.jpg',
                    location: 'Tokyo, Japan'
                },
                {
                    id : 8,
                    name : 'Kuro & Kenma',
                    price : '100',
                    anime: 'Haikyuu',
                    rate: '4.8',
                    image: 'https://i.pinimg.com/564x/8c/81/60/8c8160fffaee5c9a8ae837ebae092d2c.jpg',
                    location: 'Tokyo, Japan'
                },

                
            ],
            cartItems: [],
            searchQuery: '',
            searching :[]
        }
    },
    getters: {
        countCartItems(){
            return this.cartItems.length;
        },
        getCartItems(){
            return this.cartItems;
        },
        buyingTotal(){
            return this.cartItems.reduce((total,item)=> total+(item.price*item.quantity),0)
        }

    },
    actions : {
        addToCart(item) {
            let index = this.cartItems.findIndex(product => product.id === item.id);
            if(index !== -1){
                this.products[index].quantity += 1;
                Swal.fire({
                    title: "Yeay!",
                    text: "Your Item has been saved",
                    imageUrl: "https://i.pinimg.com/originals/17/3f/6e/173f6e2c27e4821abdf5d81054d91572.gif",
                    imageWidth: 400,
                    imageHeight: 200,
                    imageAlt: "Custom image"
                });
            } else{
                item.quantity = 1;
                this.cartItems.push(item);
                Swal.fire({
                    title: "Yeay!",
                    text: "Your Item has been saved",
                    imageUrl: "https://i.pinimg.com/originals/17/3f/6e/173f6e2c27e4821abdf5d81054d91572.gif",
                    imageWidth: 400,
                    imageHeight: 200,
                    imageAlt: "Custom image"
                });
            }
        },
        tambahQty(item){
            let index = this.cartItems.findIndex(product => product.id === item.id);
            if(index !== -1){
                this.cartItems[index].quantity +=1 ;
                Swal.fire({
                    title: "Thank you!",
                    text: "Please check your cart",
                    imageUrl: "https://i.pinimg.com/originals/17/3f/6e/173f6e2c27e4821abdf5d81054d91572.gif",
                    imageWidth: 400,
                    imageHeight: 200,
                    imageAlt: "Custom image"
                });
            }
        },
        kurangQty (item){
            let index = this.cartItems.findIndex(product => product.id === item.id);
            if(index != -1){
                this.cartItems[index].quantity -=1;
                if(this.cartItems[index].quantity === 0){
                    this.cartItems = this.cartItems.filter(product => product.id !== item.id);
                }
                Swal.fire({
                    title: "Yeay!",
                    text: "Please check your cart",
                    imageUrl: "https://i.pinimg.com/originals/17/3f/6e/173f6e2c27e4821abdf5d81054d91572.gif",
                    imageWidth: 400,
                    imageHeight: 200,
                    imageAlt: "Custom image"
                });
            }
        },
        removeFromCart(item){
            this.cartItems = this.cartItems.filter(product => product.id !== item.id);
            Swal.fire({
                title: "Noo!",
                text: "Your item has been removed",
                imageUrl: "https://i.pinimg.com/originals/b4/b1/64/b4b1640525ecadfa1030e6096f3ec842.gif",
                imageWidth: 400,
                imageHeight: 300,
                imageAlt: "Custom image"
            });
        },
        log(){
            console.log("yeay"); //buat cek sesuatu
        },
        search() {
            this.searching = this.products.filter(item =>
                item.name.toLowerCase().includes(this.searchQuery.toLowerCase())
            );
        }
    }
})

