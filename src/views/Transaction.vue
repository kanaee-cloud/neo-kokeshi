<template>
    <div class="container mt-10 bg-white bg-opacity-95 p-2">
        <table class= "border-black text-opacity-90 border-4 text-black w-full ">
            <thead>
                <th colspan="5" class="text-right text-black text-opacity-75">Transction ID : A22</th>
            </thead>
            <thead>
                <th>#</th>
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
const i = 0;
const data = useShoppingStore();
console.log(data.cartItems.length);
if(data.cartItems.length == 0){
    router.push("/");
}
</script>