<template >
  <div>
    <div class="bg-dark">
      <v-container class="p-4">
        <h2 class="text-center text-white">Vue(pina) Crud with Laravel</h2>
      </v-container>
    </div>
    <CreateContactVue />
  </div>
</template>
<script>
import CreateContactVue from "@/components/CreateContact.vue";

export default {
  name: "CreateView",
  components: {
    CreateContactVue,
  },
};
</script>
<style>
</style>