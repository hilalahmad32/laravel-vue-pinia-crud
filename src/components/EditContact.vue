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
            <v-card-title> Update Form </v-card-title>
            <v-card-subtitle>
              <form
                style="width: 100%"
                class="pa-3"
                @submit.prevent="updatedata()"
              >
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
                  isloading ? "Updating..." : "Update"
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
import axios from "axios";
import { mapActions } from "pinia";
import { useStore } from "@/store";
export default {
  name: "EditComp",
  data: () => ({
    id: "",
    name: "",
    email: "",
    country: "",
    number: "",
  }),
  methods: {
    ...mapActions(useStore, ["updateData"]),
    updatedata() {
      const data = {
        id: this.$route.params.id,
        name: this.name,
        email: this.email,
        country: this.country,
        number: this.number,
      };
      this.updateData(data);
    },
  },
  async mounted() {
    const res = await axios.put(
      `http://localhost:8000/api/contact/${this.$route.params.id}`
    );
    this.name = res.data.contacts.name;
    this.email = res.data.contacts.email;
    this.country = res.data.contacts.country;
    this.number = res.data.contacts.number;
  },
};
</script>
<style>
</style>