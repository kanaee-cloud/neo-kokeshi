<template>
    <div class="container mx-auto mt-10  bg-opacity-95 p-2">
        <table class= "border-accent card-container text-opacity-90 border-4 text-white w-full ">
            <thead>
                <th colspan="5" class="text-right text-white text-opacity-75">Transaction ID : A22</th>
            </thead>
            <thead>
                <th>No</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total Price</th>
            </thead>
            <tr v-for="item in data.getCartItems">
                <td class="text-right">{{++i}}</td>
                <td>{{item.name}}</td>
                <td class="text-right">${{item.price}}</td>
                <td class="text-right">{{item.quantity}}</td>
                <td class="text-right">${{item.quantity * item.price}}</td>
            </tr>
            <tr>
                <td class="text-center font-semibold" colspan="4">Buying Total</td>
                <td class="text-right font-semibold">${{data.buyingTotal}}</td>
            </tr>
        </table>
    </div>
</template>
<script setup>
import router from "../router";
import { useShoppingStore } from "../stores";
let i = 0;
const data = useShoppingStore();
console.log(data.cartItems.length);
if(data.cartItems.length == 0){
    router.push("/");
}
</script>