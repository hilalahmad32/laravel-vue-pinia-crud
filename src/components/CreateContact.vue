<template >
  <div>
    <v-container>
      <v-row justify="center">
        <v-col xl="6" lg="6" md="6" sm="12">
          <router-link to="/">
            <v-btn text class="my-2" color="secondary"
              >Go Back</v-btn
            ></router-link
          >
          <v-card>
            <v-card-title> Create Form </v-card-title>
            <v-card-subtitle>
              <form style="width: 100%" class="pa-3" @submit.prevent="store()">
                <v-text-field
                  style="width: 100%"
                  outlined
                  v-model="name"
                  label="Enter Your Name"
                ></v-text-field>
                <v-text-field
                  style="width: 100%"
                  outlined
                  v-model="email"
                  label="Enter Your Email"
                ></v-text-field>
                <v-text-field
                  style="width: 100%"
                  outlined
                  v-model="country"
                  label="Enter Your Country"
                ></v-text-field>
                <v-text-field
                  style="width: 100%"
                  outlined
                  v-model="number"
                  label="Enter Your Number"
                ></v-text-field>
                <v-btn type="submit" text color="primary">{{
                  isloading ? "Saving..." : "Save"
                }}</v-btn>
              </form>
            </v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import { mapActions, mapState } from "pinia";
import { useStore } from "@/store";
export default {
  name: "CreateComp",
  data: () => ({
    name: "",
    email: "",
    country: "",
    number: "",
  }),
  computed: {
    ...mapState(useStore, ["isloading"]),
  },
  methods: {
    ...mapActions(useStore, ["storeData"]),
    store() {
      const data = {
        name: this.name,
        email: this.email,
        country: this.country,
        number: this.number,
      };
      this.storeData(data);
    },
  },
};
</script>
<style>
</style>