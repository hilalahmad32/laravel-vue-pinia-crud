import router from '@/router';
import axios from 'axios';
import { defineStore } from 'pinia'

export const useStore = defineStore({
    id: 'contacts',
    state: () => ({
        contacts: [],
        isloading: false,
    }),
    actions: {
        async storeData(data) {
            this.isloading = true;
            // const res = await (await fetch("http://localhost:8000/api/contact", {
            //     method: "POST",
            //     body: JSON.stringify(data),
            // })).json();
            // we can use axios so the fetch method is not method
            const res = await axios.post("http://localhost:8000/api/contact", data)
            if (res.data.success) {
                alert(res.data.message)
                this.isloading = false;
                router.push('/')
                data.name = "";
                data.email = "";
                data.country = "";
                data.number = "";
            } else {
                this.isloading = false;
                alert(res.data.message)
            }

        },

        async getData() {
            this.isloading = true;
            const res = await axios.get("http://localhost:8000/api/contact")
            if (res.data.success) {
                this.isloading = false;

                this.contacts = res.data.contacts
            }
        },
        async deleteData(id) {
            const res = await axios.delete("http://localhost:8000/api/contact/" + id)
            if (res.data.success) {
                alert(res.data.message)
            }
        },

        async updateData(data) {
            this.isloading = true;
            const res = await axios.post("http://localhost:8000/api/contact/" + data.id, data)
            if (res.data.success) {
                alert(res.data.message)
                this.isloading = false;
                router.push('/')
                data.name = "";
                data.email = "";
                data.country = "";
                data.number = "";
            } else {
                this.isloading = false;
                alert(res.data.message)
            }

        },
    }
})