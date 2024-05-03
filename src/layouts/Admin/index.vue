<template>
    <div class="wrapper">
        <div class="header-wrapper">
            <headerVue></headerVue>
            <menuVue></menuVue>
        </div>
        <div class="page-wrapper" style="background-color: bisque">
            <div class="page-content">
                <router-view></router-view>
            </div>
        </div>
        <div class="overlay toggle-icon"></div>
        <a href="javaScript:;" class="back-to-top"
            ><i class="bx bxs-up-arrow-alt"></i
        ></a>
        <footerVue></footerVue>
    </div>
</template>
<script>
import headerVue from "./header.vue";
import menuVue from "./menu.vue";
import footerVue from "./footer.vue";
import "perfect-scrollbar/dist/perfect-scrollbar";
import "../../assets/js/app.js";
// import { onMounted } from 'vue';
// import { useStore } from 'vuex';
// import { useStore } from 'vuex';
export default {
    name: "admin-master",
    components: {
        headerVue,
        menuVue,
        footerVue,
    },
    // setup() {
    //     const store = useStore();
    //     onMounted(() => {
    //         store.dispatch("onFetchUserLogin");
    //     })
    // }
};
</script>
<style scoped>
@import "../../assets/plugins/simplebar/css/simplebar.css";
@import "../../assets/plugins/perfect-scrollbar/css/perfect-scrollbar.css";
@import "../../assets/css/bootstrap.min.css";
@import "../../assets/css/bootstrap-extended.css";
@import "../../assets/css/app.css";
@import "../../assets/css/icons.css";
@import "../../assets/css/dark-theme.css";
@import "../../assets/css/semi-dark.css";
@import "../../assets/css/header-colors.css";
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap");
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css");
body {
    margin: 0;
    padding: 0;
    background-color: bisque;
}

.page-wrapper {
    height: 100vh; /* Chiều cao của page-wrapper là 100% chiều cao của viewport */
}

table {
    font-family: arial !important;
    max-width: 100% !important;
    background-color: transparent !important;
    border-collapse: collapse !important;
    border-spacing: 0 !important;
}
.table {
    width: 100% !important;
    margin-bottom: 20px !important;
}
.table-responsive .dropdown,
.table-responsive .btn-group,
.table-responsive .btn-group-vertical {
    position: static !important;
}
.modal {
    overflow-y: auto !important;
}
div.dataTables_scrollBody.dropdown-visible {
    overflow: visible !important;
}
table.dataTable thead th,
tbody td th {
    white-space: nowrap;
}

select {
    height: auto !important;
}

.dataTables_wrapper {
    font-family: Roboto !important;
    font-size: 14px !important;
    position: relative !important;
    clear: both;
    zoom: 1;
}
.dropdown-item {
    cursor: pointer;
}

</style>