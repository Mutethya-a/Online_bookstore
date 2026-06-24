<template>
  <v-container>
    <h1 class="text-h5 mb-4">My Profile</h1>

    <v-row>
      <!-- Basic info -->
      <v-col cols="12">
        <v-card class="pa-4">
          <v-row align="center">
            <v-col cols="auto">
              <v-avatar size="80" color="primary">
              </v-avatar>
            </v-col>

            <v-col>
              <div class="text-h6">{{ user.name }}</div>
              <div class="text-body-2">{{ user.email }}</div>
            </v-col>

            <v-col cols="auto">
              <v-btn color="secondary">Edit</v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-col>

      
      <v-col cols="12">
        <v-card class="pa-4">
          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field v-model="user.name" label="Full Name"></v-text-field>
            </v-col>

            <v-col cols="12" sm="6">
              <v-text-field v-model="user.email" label="Email"></v-text-field>
            </v-col>

            <v-col cols="12" sm="6">
              <v-text-field v-model="user.phone" label="Phone"></v-text-field>
            </v-col>

            <v-col cols="12" sm="6">
              <v-text-field v-model="user.address" label="Address"></v-text-field>
            </v-col>
          </v-row>

          <v-btn color="primary" @click="saveChanges">Save Changes</v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Profile",

  data() {
    return {
      user: {
        name: "Mutethya Nzioka",
        email: "mutethya.nzioka@example.com",
        phone: "+254 712 345 678",
        address: "Nairobi, Kenya"
      }
    };
  },
};
</script>