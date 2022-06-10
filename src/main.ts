import { createApp } from "vue";
import { createPinia } from "pinia";
import PrimeVue from 'primevue/config';
import { initializeApp } from "firebase/app"

import Button from "primevue/button";
import InputText from "primevue/inputtext";
import Divider from "primevue/divider";
import Password from "primevue/password";
import Calendar from "primevue/calendar";
import Sidebar from 'primevue/sidebar';
import ToastService from 'primevue/toastservice';
import "primevue/resources/themes/saga-blue/theme.css"
import "primevue/resources/primevue.min.css"
import "primeicons/primeicons.css"

import App from "./App.vue";
import { i18n } from './lang'
import router from "./router";
import { getAuth } from "firebase/auth";

initializeApp({
    apiKey: "AIzaSyBMun7Tlq0vuDG4k25GQdXh716t-1AwJvY",
    authDomain: "gfamily-40b6e.firebaseapp.com",
    databaseURL: "https://gfamily-40b6e.firebaseapp.com",
    projectId: "gfamily-40b6e",
    storageBucket: "gfamily-40b6e.appspot.com",
    messagingSenderId: "79293193359",
    appId: "1:79293193359:web:b5e370625d39894e35a4fa",
    measurementId: "G-0Z1DMMLLHZ"
});

const auth = getAuth();

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(PrimeVue);
app.use(i18n);
app.use(ToastService)

app.mount("#app");
app.component("Button", Button).component("Sidebar", Sidebar).component("InputText", InputText)
    .component("Divider", Divider).component("Password", Password).component("Calendar", Calendar)
