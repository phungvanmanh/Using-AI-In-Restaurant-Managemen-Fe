<template>
<div class="nav-container primary-menu">
    <div class="mobile-topbar-header">
        <h5 class="logo-text">
            <span class="text-danger">
                <b style="font-size: 20px;">Restaurant Food</b>
            </span>
        </h5>
        <div class="toggle-icon ms-auto">
            <i class="bx bx-arrow-to-left"></i>
        </div>
    </div>
    <nav class="navbar navbar-expand-xl w-100">
        <ul class="navbar-nav justify-content-start flex-grow-1 gap-1">
            <li class="nav-item dropdown" v-if="checkIncludePermission(['107', '117', '120'])">
                <a href="javascript:;" class="nav-link dropdown-toggle dropdown-toggle-nocaret" data-bs-toggle="dropdown">
                    <div class="parent-icon">
                        <i class="fa-solid fa-user-tie"></i>
                    </div>
                    <div class="menu-title">Admin</div>
                </a>
                <ul class="dropdown-menu">
                    <li v-if="hasPermission('107')">
                        <router-link to="/admin">
                            <a class="dropdown-item"><i class="bx bx-right-arrow-alt"></i>Account Management</a>

                        </router-link>
                    </li>
                    <li v-if="hasPermission('117')">
                        <router-link to="/admin/lich-lam-viec">
                            <a class="dropdown-item"><i class="bx bx-right-arrow-alt"></i>Work schedule</a>

                        </router-link>
                    </li>
                    <li v-if="hasPermission('120')">
                        <router-link to="/admin/tinh-luong">
                            <a class="dropdown-item"><i class="bx bx-right-arrow-alt"></i>Employee salary</a>

                        </router-link>
                    </li>

                </ul>
            </li>
         
            <li class="nav-item" v-if="hasPermission('108')">
                <router-link to="/admin/khach-hang" >
                    <a class="nav-link">
                        <div class="parent-icon">
                            <i class="fa-solid fa-user-tie"></i>
                        </div>
                        <div class="menu-title">Client</div>
                    </a>
                </router-link>
            </li>
            <li class="nav-item" v-if="hasPermission('109')">
                <router-link to="/admin/quyen">
                    <a class="nav-link">
                        <div class="parent-icon">
                            <i class="fa-solid fa-user-lock"></i>
                        </div>
                        <div class="menu-title">Permission</div>
                    </a>
                </router-link>
            </li>
            <li class="nav-item dropdown" v-if="checkIncludePermission(['111', '113'])">
                <a href="javascript:;" class="nav-link dropdown-toggle dropdown-toggle-nocaret" data-bs-toggle="dropdown">
                    <div class="parent-icon">
                        <i class="fa-solid fa-memory"></i>
                    </div>
                    <div class="menu-title">Area management</div>
                </a>
                <ul class="dropdown-menu">
                    <li v-if="hasPermission('111')">
                        <router-link to="/admin/khu-vuc">
                            <a class="dropdown-item"><i class="bx bx-right-arrow-alt"></i>Area</a>

                        </router-link>
                    </li>
                    <li v-if="hasPermission('113')">
                        <router-link to="/admin/ban">
                            <a class="dropdown-item"><i class="bx bx-right-arrow-alt"></i>Table</a>

                        </router-link>
                    </li>

                </ul>
            </li>
            
            <li class="nav-item" v-if="hasPermission('114')">
                <router-link to="/admin/nha-cung-cap">
                    <a class="nav-link">
                        <div class="parent-icon">
                            <i class="fa-solid fa-warehouse"></i>
                        </div>
                        <div class="menu-title">Suppliers</div>
                    </a>
                </router-link>
            </li>
            <li class="nav-item dropdown" v-if="checkIncludePermission(['119', '121', '122'])">
                <a href="javascript:;" class="nav-link dropdown-toggle dropdown-toggle-nocaret" data-bs-toggle="dropdown">
                    <div class="parent-icon">
                        <i class="fa-solid fa-house"></i>
                    </div>
                    <div class="menu-title">Warehouse management</div>
                </a>
                <ul class="dropdown-menu">
                    <li v-if="hasPermission('125')">
                        <router-link to="/admin/ton-kho-nguyen-lieu">
                            <a class="dropdown-item"><i class="bx bx-right-arrow-alt"></i>Inventory</a>

                        </router-link>
                    </li>
                    <li v-if="hasPermission('121')">
                        <router-link to="/admin/nhap-kho">
                            <a class="dropdown-item"><i class="bx bx-right-arrow-alt"></i>Enter warehouse</a>

                        </router-link>
                    </li>
                    <li v-if="hasPermission('122')">
                        <router-link to="/admin/hoa-don-nhap-kho">
                            <a class="dropdown-item"><i class="bx bx-right-arrow-alt"></i>Warehouse Invoice</a>

                        </router-link>
                    </li>

                </ul>
            </li>
        
            <li class="nav-item dropdown" v-if="checkIncludePermission(['115', '116'])">
                <a href="javascript:;" class="nav-link dropdown-toggle dropdown-toggle-nocaret" data-bs-toggle="dropdown">
                    <div class="parent-icon">
                        <i class="fa-solid fa-calendar-day"></i>
                    </div>
                    <div class="menu-title">Event</div>
                </a>
                <ul class="dropdown-menu">
                    <li v-if="hasPermission('115')">
                        <router-link to="/admin/chuyen-muc-bai-viet">
                            <a class="dropdown-item"><i class="bx bx-right-arrow-alt"></i>Article Categories</a>

                        </router-link>
                    </li>
                    <li v-if="hasPermission('116')">
                        <router-link to="/admin/bai-viet">
                            <a class="dropdown-item"><i class="bx bx-right-arrow-alt"></i>Article</a>
                        </router-link>
                    </li>
                </ul>
            </li>
            <li class="nav-item dropdown" v-if="checkIncludePermission(['128', '118', '123'])">
                <a href="javascript:;" class="nav-link dropdown-toggle dropdown-toggle-nocaret" data-bs-toggle="dropdown">
                    <div class="parent-icon">
                        <i class="fa-brands fa-salesforce"></i>
                    </div>
                    <div class="menu-title">Sales Manager</div>
                </a>
                <ul class="dropdown-menu">
                    <li v-if="hasPermission('128')">
                        <router-link to="/admin/su-dung-dich-vu">
                            <a class="dropdown-item"><i class="bx bx-right-arrow-alt"></i>Use of the service</a>

                        </router-link>
                    </li>
                    <li v-if="hasPermission('118')">
                        <router-link to="/admin/hoa-don-ban-hang">
                            <a class="dropdown-item"><i class="bx bx-right-arrow-alt"></i>Sales invoice</a>

                        </router-link>
                    </li>
                    <li v-if="hasPermission('123')">
                        <router-link to="/admin/ma-giam-gia">
                            <a class="dropdown-item"><i class="bx bx-right-arrow-alt"></i>Code Voucher</a>

                        </router-link>
                    </li>

                </ul>
            </li>
            <li class="nav-item dropdown" v-if="checkIncludePermission(['119', '110', '112'])">
                <a href="javascript:;" class="nav-link dropdown-toggle dropdown-toggle-nocaret" data-bs-toggle="dropdown">
                    <div class="parent-icon">
                        <i class="fa-solid fa-bowl-food"></i>
                    </div>
                    <div class="menu-title">Food Management</div>
                </a>
                <ul class="dropdown-menu">
                    <li v-if="hasPermission('119')">
                        <router-link to="/admin/nguyen-lieu">
                            <a class="dropdown-item"><i class="bx bx-right-arrow-alt"></i>Material</a>

                        </router-link>
                    </li>
                    <li v-if="hasPermission('110')">
                        <router-link to="/admin/danh-muc">
                            <a class="dropdown-item"><i class="bx bx-right-arrow-alt"></i>Food Categories</a>

                        </router-link>
                    </li>
                    <li v-if="hasPermission('112')">
                        <router-link to="/admin/mon-an">
                            <a class="dropdown-item"><i class="bx bx-right-arrow-alt"></i>Dish</a>

                        </router-link>
                    </li>

                </ul>
            </li>
            <li class="nav-item dropdown" v-if="checkIncludePermission(['127'])">
                <a href="javascript:;" class="nav-link dropdown-toggle dropdown-toggle-nocaret" data-bs-toggle="dropdown">
                    <div class="parent-icon">
                        <i class="fa-solid fa-clock-rotate-left"></i>
                    </div>
                    <div class="menu-title">Log</div>
                </a>
                <ul class="dropdown-menu">
                    <li v-if="hasPermission('127')">
                        <router-link to="/admin/lich-su-thanh-toan">
                            <a class="dropdown-item"><i class="bx bx-right-arrow-alt"></i>Material</a>
                        </router-link>
                    </li>
                </ul>
            </li>
            <li class="nav-item dropdown" v-if="checkIncludePermission(['124','126'])">
                <a href="javascript:;" class="nav-link dropdown-toggle dropdown-toggle-nocaret" data-bs-toggle="dropdown">
                    <div class="parent-icon">
                        <i class="fa-solid fa-chart-line"></i>
                    </div>
                    <div class="menu-title">Statistics</div>
                </a>
                <ul class="dropdown-menu">
                    <li v-if="hasPermission('124')">
                        <router-link to="/admin/thong-ke">
                            <a class="dropdown-item"><i class="bx bx-right-arrow-alt"></i>Statistics</a>
                        </router-link>
                    </li>
                    <li v-if="hasPermission('126')">
                        <router-link to="/admin/doanh-thu">
                            <a class="dropdown-item"><i class="bx bx-right-arrow-alt"></i>Turnover</a>
                        </router-link>
                    </li>

                </ul>
            </li>
           
        </ul>
    </nav>
</div>
</template>

<script>
// import axios from '@/axiosConfig';
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
export default {
    name: "admin-menu",
    setup() {
        const store = useStore();
        const id_quyen = computed(() => store.state.dataPemission || []);
        const hasPermission = (permissionId) => {
            const permissionStrings = id_quyen.value.map(String);
            const result = permissionStrings?.includes(permissionId.toString());
            // console.log(`Checking permission for ${permissionId}: ${result}`);
            return result;
        };

        const checkIncludePermission = (list) => {
            const permissionStrings = id_quyen.value.map(String);
            const hasAnyPermission = list.some(value => permissionStrings.includes(value));
            return hasAnyPermission;
        };
        
        onMounted(() => {
            store.dispatch("onFetchPemission");
        });

        return { id_quyen, hasPermission, checkIncludePermission }
    }
};
</script>
