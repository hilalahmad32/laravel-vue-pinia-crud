<template>
  <div>
    <div class="bg-dark">
      <v-container class="p-4">
        <h2 class="text-center text-white">Vue(pina) Crud with Laravel</h2>
      </v-container>
    </div>
    <v-container class="my-3">
      <v-card>
        <div class="d-flex justify-space-between align-center pa-3">
          <v-card-title>Students(0)</v-card-title>
          <router-link to="/create">
            <v-btn text color="success">New</v-btn></router-link
          >
        </div>
      </v-card>
    </v-container>
    <ContactTableVue />
  </div>
</template>

<script>
import ContactTableVue from "@/components/ContactTable.vue";

export default {
  name: "HomeView",
  components: {
    ContactTableVue,
  },
};
</script>

<style >
.bg-dark {
  background-color: rgb(48, 47, 47);
}
a {
  text-decoration: none !important;
}
</style>
