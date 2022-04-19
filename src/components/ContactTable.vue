<template>
  <div>
    <v-container class="my-3">
      <div v-if="isloading">Loading.....</div>
      <div v-else>
        <table style="width: 100%">
          <thead>
            <tr style="width: 100%">
              <th class="text-left">Id</th>
              <th class="text-left">Name</th>
              <th class="text-left">Email</th>
              <th class="text-left">Country</th>
              <th class="text-left">Number</th>
              <th class="text-left">Edit</th>
              <th class="text-left">Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr
              style="width: 100%"
              v-for="(contact, index) in contacts"
              :key="index"
            >
              <td class="text-left pa-3">{{ index + 1 }}</td>
              <td class="text-left pa-3">{{ contact.name }}</td>
              <td class="text-left pa-3">{{ contact.email }}</td>
              <td class="text-left pa-3">{{ contact.country }}</td>
              <td class="text-left pa-3">{{ contact.number }}</td>
              <td class="text-left pa-3">
                <router-link :to="`/update/${contact.id}`">
                  <v-btn color="success" text>Edit</v-btn></router-link
                >
              </td>
              <td class="text-left">
                <v-btn color="error" text @click="deletedata(contact.id)"
                  >Delete</v-btn
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </v-container>
  </div>
</template>
<script>
import { mapActions, mapState } from "pinia";
import { useStore } from "@/store";
export default {
  name: "tabelComp",
  computed: {
    ...mapState(useStore, ["contacts", "isloading"]),
  },
  methods: {
    ...mapActions(useStore, ["getData", "deleteData"]),
    // ...mapActions(useStore, []),
    deletedata(id) {
      this.deleteData(id);
      //   i will take a time to fetch the data
      this.getData();
    },
  },
  mounted() {
    this.getData();
  },
};
</script>
<style>
</style>