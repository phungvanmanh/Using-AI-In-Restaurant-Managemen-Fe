<template>
     <header>
        <div class="topbar d-flex align-items-center">
            <nav class="navbar navbar-expand">
                <div class="topbar-logo-header">
                    <div class="">
                        <img style="width: 120px; border-radius: 50%;" src="../../assets/images/bg1.jpg" class="logo-icon" alt="logo icon">

                    </div>
                    <div class="">
                        <h4 class="logo-text">
                            <span class="text-danger">
                                <b>Restaurant Food</b>
                            </span>
                        </h4>
                    </div>
                </div>
                <div class="mobile-toggle-menu"><i class='bx bx-menu'></i></div>
                <div class="search-bar flex-grow-1">
                    <div class="position-relative search-bar-box">
                       <!-- ? <input type="text" class="form-control search-control" placeholder="Type to search..."> -->
                        <!-- <span class="position-absolute top-50 search-show translate-middle-y"><i
                                class='bx bx-search'></i></span>
                        <span class="position-absolute top-50 search-close translate-middle-y"><i
                                class='bx bx-x'></i></span> -->
                    </div>
                </div>
                
                <div class="user-box dropdown">
                    <a class="d-flex align-items-center nav-link dropdown-toggle dropdown-toggle-nocaret" href="#"
                        role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="../../assets/images/avatars/avatar-2.png" class="user-img" alt="user avatar">
                        <div class="user-info ps-3">
                            <p class="user-name mb-0">{{ admin.first_last_name }}</p>
                            <p class="designattion mb-0">{{ admin.name_permission }}</p>
                        </div>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-end">
                      
                        <li><a class="dropdown-item" href="javascript:;" @click="logout()"><i
                                    class='bx bx-log-out-circle'></i><span>Logout</span></a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </header>
</template>
<script>
import axios from "@/axiosConfig";
import Toast from "@/toastConfig";
import $ from "jquery";
// import { useRouter } from 'vue-router';kk
import { computed } from 'vue';
import { useStore } from 'vuex';
  
export default {
    name: 'admin-header',
    setup() {
        // const router = useRouter();
        const logout = async () => {
            try {
                const response = await axios.post('admin/logout');
                if(response.data.status === 1) {
                    localStorage.removeItem('admin');
                    // router.push({ name: 'login' })
                    setInterval(() => {
                            window.location.href = "/admin/login";
                        }, 1000);
                        Toast("success", response.data.message);
                }
            } catch (error) {
                $.each(error.response.data.errors, function (k, v) {
                    Toast("error", v[0]);
                });
            }
        };
        const store = useStore();
        const admin = computed(()=> store.state.dataUser)
        return {
            logout,
            admin
        }
    }
}
</script>
<style>
.topbar{
    background-color: rgb(110, 110, 155);
}
</style>