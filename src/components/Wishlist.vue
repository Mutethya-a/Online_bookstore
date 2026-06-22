<script setup>
import { ref } from 'vue'

const books = ref([
    {
        id: 1,
        name: "The Havoc Of Choice",
        price: 1799,
        image: "/public/havocOfLife.jpg"
    },
    {
        id: 2,
        name: "Confessions of Nairobi Men",
        price: 1999,
        image: "/public/confessionsOfNaiMen.jpg"
    },
    {
        id: 3,
        name: "We should all be Feminists",
        price: 1699,
        image: "/public/weShouldAllBeFeminists.jpg"
    },
    {
        id: 4,
        name: "Home Body",
        price: 1499,
        image: "/public/homebody.jpg"
    }
])

function buy(book){
    cartStore.updateCart(book)
     router.push('/cart')
}

function remove(book){
    books.value = books.value.filter(b => b.id !== book.id)
}
</script>

<template>
    <v-container max-width="100%" class="bg-secondary">
        <v-row>
            <v-col>
                <div class="text-display-medium mb-12 mt-12 text-center">Wishlist</div>
            </v-col>
        </v-row>
        <v-row>
            <v-col md="3" v-for="book in books" :key="book.id">
                <v-card height="100%" class="h-100 d-flex flex-column" width=250>
                    <v-img :src="book.image" height="250px" class="mt-3" ></v-img>
                    <v-card-title>{{ book.name }}</v-card-title>
                    <v-card-subtitle>{{ book.price }}</v-card-subtitle>
                    <v-card-actions  class="d-flex flex-column align-start">
                    <v-btn @click="buy(book)" class="bg-primary" variant="elevated" >Add to Cart</v-btn>
                    <v-btn @click="remove(book)" class="bg-secondary" variant="elevated" >Remove from Wishlist</v-btn>
                </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>