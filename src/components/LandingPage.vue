<script setup>

</script>

<template>
   <v-container max-width="100%">
        <v-row>
            <v-col>
                <v-carousel cycle>
                    <v-carousel-item src="/book1.jpg" cover></v-carousel-item>
                    <v-carousel-item src="/book2.jpg" cover></v-carousel-item>
                    <v-carousel-item src="/book3.jpg" cover></v-carousel-item>
                    <v-carousel-item src="/book4.jpg" cover></v-carousel-item>
                </v-carousel>
            </v-col>
        </v-row>
   </v-container>

<!-- About us -->
 <v-container class="bg-secondary" max-width="100%">
    <v-row>
        <v-col>
            <div class="text-display-medium mb-12">Welcome to Somora</div>
            <div class="text-title-large font-weight-light text-medium-empasis mb-8">
                Welcome to Somora, your destination for discovering a wide range of books that cater to every kind of reader. Whether you are an avid book lover or someone looking for your next great read, our collection is carefully curated to provide engaging, inspiring, and entertaining stories from various genres and authors.
            </div>
            <div class="text-title-large font-weight-light text-medium-empasis mb-8">From fiction and history to romance and horror, Somora offers something for everyone. We believe that every reader deserves access to books they love, which is why we strive to provide a diverse selection that sparks imagination, expands knowledge, and creates unforgettable reading experiences. Whatever you're looking for, you'll find it at Somora.</div>
        </v-col>
    </v-row>
 </v-container>

 <!-- Bestsellers -->
<v-container max-width="100%" max-height="100%">
    <v-row>
        <v-col md="3">
            <v-card height="100%">
                <v-img src="/public/havocOfLife.jpg" cover></v-img>
                <v-card-title>The Havoc Of Choice</v-card-title>
                <v-card-subtitle>ksh 1799</v-card-subtitle>
                <v-btn @click="buy(book)" class="bg-primary">Add to Cart</v-btn>
            </v-card>
        </v-col>
        <v-col md="3">
            <v-card height="100%">
                <v-img src="/public/confessionsOfNaiMen.jpg" cover></v-img>
                <v-card-title>Confessions of Nairobi Men</v-card-title>
                <v-card-subtitle>ksh 1999</v-card-subtitle>
                <v-btn @click="buy(book)" class="bg-primary">Add to Cart</v-btn>
            </v-card>
        </v-col>
        <v-col md="3">
            <v-card height="100%">
                <v-img src="/public/weShouldAllBeFeminists.jpg" cover></v-img>
                <v-card-title>We should all be Feminists</v-card-title>
                <v-card-subtitle>ksh 1699</v-card-subtitle>
                <v-btn @click="buy(book)" class="bg-primary">Add to Cart</v-btn>
            </v-card>
        </v-col>
        <v-col md="3">
            <v-card height="100%">
                <v-img src="/public/homebody.jpg" cover></v-img>
                <v-card-title>Home Body</v-card-title>
                <v-card-subtitle>ksh 1499</v-card-subtitle>
                <v-btn @click="buy(book)" class="bg-primary" variant="elevated">Add to Cart</v-btn>
            </v-card>
        </v-col>
        <v-col></v-col>
    </v-row>
</v-container>

<!-- Footer -->
  <v-container class="bg-primary" max-width="100%">
    <v-row>
        <v-col>
            <div align="center">
                <router-link to="/">
                    <v-img src="/public/logo3.png" width="50%" height="50%" ></v-img>
                </router-link>

                <p> Copyright Somora Online Book Store &copy; 2026</p>
            </div>
        </v-col>
        <v-col md="4" >
            <div class="text-center">
                <p>Follow us on:</p>
                <v-icon icon="mdi-instagram"></v-icon>
                <v-icon icon="mdi-twitter"></v-icon>
                <v-icon icon="mdi-facebook"></v-icon>
            </div>
        </v-col>
        <v-col md="4">
            <div class="text-center">
                <p> Contact Us:</p>
                <p>Email: info@somoraonline.com</p>
                <p>Phone: 254712345789</p>
            </div>
        </v-col>
    </v-row>
  </v-container>
</template>