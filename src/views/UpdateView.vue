<template >
  <div>
    <div class="bg-dark">
      <v-container class="p-4">
        <h2 class="text-center text-white">Vue(pina) Crud with Laravel</h2>
      </v-container>
    </div>
    <EditContactVue />
  </div>
</template>
<script>
import EditContactVue from "@/components/EditContact.vue";

export default {
  name: "UpdateView",
  components: {
    EditContactVue,
  },
};
</script>
<style>
</style>