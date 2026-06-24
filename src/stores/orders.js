import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useOrdersStore = defineStore('orders',  {
   state: () => {
        const orders= {
        0: {
            id: 1,
            customerId: 2,
            bookId: 3,
            quantity: 1,
            totalPaid: 1800,
            status: "Pending"
        },
        1: {
            id: 2,
            customerId: 3,
            bookId: 4,
            quantity: 7,
            totalPaid: 1700,
            status: "Processing"
        },
        2: {
            id: 3,
            customerId: 4,
            bookId: 5,
            quantity: 6,
            totalPaid: 300,
            status: "Fullfilled"
        },
        3: {
            id: 4,
            customerId: 5,
            bookId: 6,
            quantity: 3,
            totalPaid: 1900,
            status: "Pending"
        },
        4: {
            id: 5,
            customerId: 1,
            bookId: 2,
            quantity: 5,
            totalPaid: 1600,
            status: "Processing"
        },
        5: {
            id: 6,
            customerId: 6,
            bookId: 7,
            quantity: 3,
            totalPaid: 1000,
            status: "Pending"
        }
        }

        return{
            orders
        }
   },
   actions:{

   },
   persist: true,
})