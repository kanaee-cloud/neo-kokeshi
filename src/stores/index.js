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
                    location: 'Tokyo, Japan',
                    description :"Introducing Kurumi Tokisaki from the anime <strong class=\"text-accent\">Date a Live</strong>. This figure beautifully captures Kurumi's intense presence as she prepares to shoot, with intricate details and a captivating pose that draws you in. Rated 4.8, fans will appreciate the meticulous attention to detail, from her flowing hair to the intensity of her gaze. Every aspect of Kurumi is faithfully recreated, making her a standout addition to any collection. Display her proudly to add a touch of Tokyo, Japan, to your space and evoke the thrilling world of <strong class=\"text-accent\">Date a Live</strong>."
                },
                {
                    id : 2,
                    name : 'Frieren',
                    price : '100',
                    anime: 'Sousou no Frieren',
                    rate: '4.8',
                    image: 'https://i.pinimg.com/736x/79/bf/49/79bf491f1d5ff0c626bc17bcfcc23ea5.jpg',
                    location: 'Tokyo, Japan',
                    description : "Meet Frieren, the protagonist from the anime <strong class=\"text-accent\">Sousou no Frieren</strong>. This exquisite figure encapsulates Frieren's serene yet powerful presence, depicting her in a moment of determination. With a rating of 4.8, this figure is highly acclaimed by fans for its attention to detail and faithful representation of the character. From the intricate design of her elegant attire to the subtle nuances of her expression, every aspect of Frieren is beautifully captured. Display this figure proudly in your collection and immerse yourself in the captivating world of <strong class=\"text-accent\">Sousou no Frieren</strong> bringing a touch of Tokyo, Japan, into your space."
                },
                {
                    id : 3,
                    name : 'Ritsu Tainaka',
                    price : '100',
                    anime: 'K-on!',
                    rate: '4.8',
                    image: 'https://i.pinimg.com/564x/81/4d/80/814d8036dba92ae9ed7fa4504d50e037.jpg',
                    location: 'Tokyo, Japan',
                    description : "Meet Ritsu Tainaka, the spirited drummer from the popular anime <strong class=\"text-accent\">K-On!</strong> This figure beautifully captures Ritsu's lively personality and love for music. With a rating of 4.8, fans can expect nothing less than perfection in this rendition. From her iconic drumsticks to her mischievous grin, every detail is meticulously crafted, ensuring a faithful representation of the character. Display Ritsu proudly in your collection to not only celebrate the joy of <strong class=\"text-accent\">K-On!</strong> but also to bring a piece of Tokyo, Japan, into your own space. Let her vibrant energy brighten up your surroundings and inspire your love for music."
                },
                {
                    id : 4,
                    name : 'Gojo & Getou',
                    price : '100',
                    anime: 'Jujutsu Kaisen',
                    rate: '4.8',
                    image: 'https://i.pinimg.com/564x/6c/05/35/6c05359f84f015bcb807e79784cad7a4.jpg',
                    location: 'Tokyo, Japan',
                    description: "Step into the world of <strong class=\"text-accent\">Jujutsu Kaisen</strong> with this breathtaking figure featuring Gojo & Getou locked in a fierce battle stance. This dynamic portrayal perfectly encapsulates the tension and power of their confrontation. With a remarkable rating of 4.8, this figure promises exceptional detail and craftsmanship. From Gojo's iconic blindfold, radiating his overwhelming presence, to Getou's menacing aura, every aspect is meticulously sculpted, immersing you in the heart of the action. Display this piece proudly in your collection to not only celebrate the thrilling world of <strong class=\"text-accent\">Jujutsu Kaisen</strong> but also to bring a piece of Tokyo, Japan, into your own space. Let the clash between these two powerful sorcerers ignite your imagination and fuel your love for the series."
                },
                {
                    id : 5,
                    name : 'Chibi Rei Ayanami',
                    price : '100',
                    anime: 'Evangelion',
                    rate: '4.8',
                    image: 'https://i.pinimg.com/564x/59/2a/09/592a093f88267aa6581bdac003d0c3b4.jpg',
                    location: 'Tokyo, Japan',
                    description : "Delight in the adorable charm of Chibi Rei Ayanami from the legendary anime <strong class=\"text-accent\">Evangelion</strong>. This figure presents Rei in a cute chibi-style rendition, capturing her iconic character in a whole new light. With a remarkable rating of 4.8, this figure boasts exceptional quality and attention to detail. From her distinct blue hair to her enigmatic expression, every aspect is faithfully recreated, inviting you to relive your favorite moments from the series. Whether you're a die-hard <strong class=\"text-accent\">Evangelion</strong> fan or simply love collecting charming figures, Chibi Rei Ayanami is a must-have addition to your collection. Display her proudly and infuse your space with the captivating allure of Tokyo, Japan, through this endearing piece."
                },
                {
                    id : 6,
                    name : 'Makima',
                    price : '100',
                    anime: 'Chainsaw Man',
                    rate: '4.8',
                    image: 'https://i.pinimg.com/564x/c1/09/13/c109135c02fb317b448849cc98bb9ffa.jpg',
                    location: 'Tokyo, Japan',
                    description:"Enter the world of <strong class=\"text-accent\">Chainsaw Man</strong> with the captivating figure of Makima. This figure brilliantly captures Makima's enigmatic allure and commanding presence. With a stellar rating of 4.8, fans can expect nothing short of excellence in this rendition. From her piercing gaze to the intricate details of her outfit, every aspect of Makima is meticulously crafted, immersing you in the dark and thrilling world of the series. Whether you're a devoted fan of <strong class=\"text-accent\">Chainsaw Man</strong> or simply appreciate finely crafted figures, Makima is an essential addition to your collection. Display her proudly and let her presence infuse your space with the essence of Tokyo, Japan, through this captivating and commanding piece."
                },
                {
                    id : 7,
                    name : 'Naruto',
                    price : '100',
                    anime: 'Naruto',
                    rate: '4.8',
                    image: 'https://i.pinimg.com/564x/1b/d2/99/1bd299d6c7cd65468be72794721c9efd.jpg',
                    location: 'Tokyo, Japan',
                    description : "Embark on a journey with the iconic ninjas Naruto and Sasuke from the legendary anime <strong class=\"text-accent\">Naruto</strong>. This intricately crafted figure pack captures the dynamic duo in a fierce battle stance, showcasing their indomitable spirits and unwavering determination. With a stellar rating of 4.8, fans can expect exceptional quality and attention to detail. From Naruto's iconic orange jumpsuit to Sasuke's intense gaze, every aspect is faithfully recreated, resonating with both lifelong fans and newcomers to the series. Display Naruto and Sasuke proudly in your collection to feel the energy and inspiration of their characters, and bring a touch of Tokyo, Japan, into your space with this dynamic and enduring symbol of friendship and rivalry."
                },
                {
                    id : 8,
                    name : 'Kuro & Kenma',
                    price : '100',
                    anime: 'Haikyuu',
                    rate: '4.8',
                    image: 'https://i.pinimg.com/564x/8c/81/60/8c8160fffaee5c9a8ae837ebae092d2c.jpg',
                    location: 'Tokyo, Japan',
                    description :"Immerse yourself in the thrilling world of volleyball with Kuro & Kenma from the adrenaline-fueled anime <strong class=\"text-accent\">Haikyuu</strong>. This figure set perfectly encapsulates the dynamic duo's camaraderie and competitive spirit in action-packed poses that capture the essence of their characters. With a stellar rating of 4.8, fans can expect exceptional quality and attention to detail in this rendition. From Kuro's intense focus as a seasoned player to Kenma's calculating gaze as the strategic mind of the team, every aspect is faithfully recreated, allowing you to feel the pulse of the game. Whether you're a die-hard fan of <strong class=\"text-accent\">Haikyuu</strong> or simply appreciate finely crafted figures, Kuro & Kenma are must-have additions to your collection. Display them proudly and bring the excitement of the volleyball court into your space, along with a touch of Tokyo, Japan, through this dynamic figure set. Let their presence inspire you to reach for your goals and pursue excellence, just like they do on the court."
                },

                
            ],
            cartItems: [],
            detail:'',
            searchQuery: '',
            searching :[]
        }
    },
    getters: {
        countCartItems(){
            return this.cartItems.length;
        },
        totalCartQuantity(){
            return this.cartItems.reduce((totalQty,item)=> totalQty+item.quantity,0);
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
                console.log(index)
                this.cartItems[index].quantity += 1;
                Swal.fire({
                    title: "Yeay!",
                    text: "Your Item has been added",
                    imageUrl: "https://i.pinimg.com/originals/17/3f/6e/173f6e2c27e4821abdf5d81054d91572.gif",
                    imageWidth: 400,
                    imageHeight: 200,
                    imageAlt: "Custom image"
                });
            } else{
                console.log(index)
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
            console.log(this.detail.length); //buat cek sesuatu
        },
        search() {
            this.searching = this.products.filter(item =>
                item.name.toLowerCase().includes(this.searchQuery.toLowerCase())
            );
        },
        detail(item){
            this.detail = item;
            console.log(this.detail.id);
            return ;
        }
    }
})

