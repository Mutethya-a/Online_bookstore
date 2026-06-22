import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useBooksStore = defineStore('books',  {
   state: () => {
      const books = {
    0: {
        id: 1,
        image: "/public/confessionsOfNaiMen.jpg",
        name: "Confessions of Nairobi Men",
        price: 1799,
        description: "Entails the things that men go through and confirms stereotypes around them",
        author: "Joan Thatiah",
        long_description: "Confessions of a Nairobi Man is a viral YA romance and coming-of-age story that explores love, regret, and the agonizing question of 'what if.' The story follows a young man navigating the complexities of relationships, societal expectations, and personal growth in the bustling city of Nairobi. Through a series of heartfelt confessions, the protagonist reveals his innermost thoughts and experiences, shedding light on the challenges faced by men in contemporary society. The narrative delves into themes of vulnerability, self-discovery, and the pursuit of happiness, offering readers a poignant and relatable exploration of the human condition.",
        genre: "Romance",
        rating: 4,    
    },
    1: {
        id: 2,
        image: "/public/havocOfLife.jpg",
        name: "Havoc of Life",
        price: 1499,
        description: "Conflicting issues about life",
        author: "Wanjiru Koinange",
        long_description: "Havoc of Life delves into the complexities and contradictions of modern existence, exploring how individuals navigate the challenges and uncertainties that define their journeys.",
        genre: "Fiction",
        rating: 4
    },
    2: {
        id: 3,
        image: "/public/weShouldAllBeFeminists.jpg",
        name: "We Should All Be Feminists",
        price: 1999,
        description: "An unapologetic declaration of feminine power",
        author: "Chimamanda Ngozi Adichie",
        long_description: "We Should All Be Feminists is a powerful and thought-provoking book that challenges readers to reconsider their understanding of feminism and gender equality.",
        genre: "Non-Fiction",
        rating: 5,
    },
    3: {
        id: 4,
        image: "/public/homebody.jpg",
        name: "Home Body",
        price: 1599,
        description: "An intimate love letter to yourself",
        author: "Rupi Kaur",
        long_description: "Home Body is a collection of poems that celebrate the beauty and complexity of the female experience, offering a deeply personal and relatable exploration of identity, love, and self-acceptance.",
        genre: "Poetry",
        rating: 4,
    },
    4: {
        id: 5,
        image: "/public/itEndsWithUs.png",
        name: "It Ends with Us",
        price: 1899,
        description: "A gripping and emotional novel that explores the complexities of love, abuse, and the courage to break free from toxic relationships.",
        author: "Colleen Hoover",
        long_description: "It Ends with Us is a gripping and emotional novel that explores the complexities of love, abuse, and the courage to break free from toxic relationships.",
        genre: "Romance",
        rating: 4
    },
    5: {
        id: 6,
        image: "/public/naiRobbery.png",
        name: "Nai Robbery",
        price: 1299,
        description: "A thrilling tale of crime and justice in modern Kenya.",
        author: "Empress Ciku",
        long_description: "Nai Robbery is a gripping narrative that delves into the world of crime and justice in contemporary Kenya, exploring the moral complexities and social dynamics that shape the lives of its characters.",
        genre: "Fiction",
        rating: 4
    },
    6: {
        id: 7,
        image: "/public/ourBodiesTheirBattlefields.png",
        name: "Our Bodies, Their Battlefields",
        price: 1599,
        description: "A powerful exploration of the intersection of gender, violence, and politics.",
        author: "Christina Lamb",
        long_description: "Our Bodies, Their Battlefields is a compelling examination of how gender and power dynamics intersect in the context of violence and conflict.",
        genre: "Non-Fiction",
        rating: 5
    },
    7: {
        id: 8,
        image: "/public/theSummerofBrokenRules.png",
        name: "The Summer of Broken Rules",
        price: 1399,
        description: "A coming-of-age story about friendship, loyalty, and the consequences of our choices.",
        author: "K. L Walther",
        long_description: "The Summer of Broken Rules is a compelling narrative that follows the lives of teenagers as they navigate the complexities of friendship and the moral dilemmas they face.",
        genre: "Fiction",
        rating: 4
    },
    8: {
        id: 9,
        image: "/public/thingsWeNeverGotOver.png",
        name: "Things We Never Got Over",
        price: 1799,
        description: "A gripping novel about the complexities of love, loss, and the power of forgiveness.",
        author: "Lucy Score",
        long_description: "Things We Never Got Over is a compelling narrative that explores the emotional depths of human relationships and the journey toward healing and understanding.",
        genre: "Fiction",
        rating: 4
    },
    9: {
        id: 10,
        image: "/public/allYoursPerfects.png",
        name: "All Yours, Perfects",
        price: 1499,
        description: "A heartwarming story about family, identity, and the courage to be true to oneself.",
        author: "Colleen Hoover",
        long_description: "All Yours, Perfects is a touching narrative that explores the complexities of family dynamics and the journey toward self-acceptance.",
        genre: "Fiction",
        rating: 4
    },
    10: {
        id: 11,
        image: "/public/bitterHoney.png",
        name: "Bitter Honey",
        price: 1599,
        description: "A poignant exploration of love, loss, and the bittersweet nature of human relationships.",
        author: "Lola Akinmade",
        long_description: "Bitter Honey is a compelling narrative that delves into the complexities of human relationships and the journey toward healing and understanding.",
        genre: "Fiction",
        rating: 4
    },
    11: {
        id: 12,
        image: "/public/GoodGirlBadBlood.png",
        name: "Good Girl, Bad Blood",
        price: 1699,
        description: "A gripping psychological thriller about the dark side of small-town life and the secrets that can destroy a community.",
        author: "Holly Jackson",
        long_description: "Good Girl, Bad Blood is a compelling narrative that explores the complexities of human nature and the consequences of our actions.",
        genre: "Fiction",
        rating: 4
    }
}
       const selectedBook = ref(null)

       return{
           books,
           selectedBook
       }
   },
   actions:{
       updateSelectedBook (payload) {
           this.selectedBook = payload
       },
   },
   persist: true,
})