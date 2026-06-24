import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUsersStore = defineStore('users',  {
   state: () => {
        const users= {
            0:{
                id: 1,
                firstname: "Joy",
                lastname: "Njeri",
                email: "joynjeri@example.com",
                phone: "0712345678",
                location: "Nakuru",
                adress: "123, Koinange Street"
            },
            1:{
                id: 2,
                firstname: "Mary",
                lastname: "Ladoe",
                email: "maryladoe@example.com",
                phone: "0711223344",
                location: "Nairobi",
                adress: "133, Tom Mboya Street"
            },
            2:{
                id: 3,
                firstname: "Dan",
                lastname: "Mambo",
                email: "danmambo@example.com",
                phone: "071345689",
                location: "Mombasa",
                adress: "Nyali"
            },
            3:{
                id: 4,
                firstname: "Kiriinya",
                lastname: "Elvis",
                email: "kiriinyaelvis@example.com",
                phone: "0700998877",
                location: "Meru",
                adress: "t room"
            },
            4:{
                id: 5,
                firstname: "James",
                lastname: "Nzioka",
                email: "jamesnzioka@example.com",
                phone: "0734567890",
                location: "Kisumu",
                adress: "144, Victoria"
            },
            5:{
                id: 6,
                firstname: "Mike",
                lastname: "Simon",
                email: "mikesimon@example.com",
                phone: "0707987654",
                location: "Makueni",
                adress: "123, Salama"
            }

        }

        return{
            users
        }
   },
   actions:{
    
           
       },
   
   persist: true,
})