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
          
            <li class="nav-item dropdown">
                <a href="javascript:;" class="nav-link dropdown-toggle dropdown-toggle-nocaret" data-bs-toggle="dropdown">
                    <div class="parent-icon">
                        <i class="fa-solid fa-user-tie"></i>
                    </div>
                    <div class="menu-title">Admin</div>
                </a>
                <ul class="dropdown-menu">
                    <li>
                        <router-link to="/admin">
                            <a class="dropdown-item"><i class="bx bx-right-arrow-alt"></i>Account Management</a>

                        </router-link>
                    </li>
                    <li>
                        <router-link to="/admin/lich-lam-viec">
                            <a class="dropdown-item"><i class="bx bx-right-arrow-alt"></i>Work schedule</a>

                        </router-link>
                    </li>
                    <li>
                        <router-link to="/admin/tinh-luong">
                            <a class="dropdown-item"><i class="bx bx-right-arrow-alt"></i>Employee salary</a>

                        </router-link>
                    </li>

                </ul>
            </li>
         
            <li class="nav-item">
                <router-link to="/admin/khach-hang">
                    <a class="nav-link">
                        <div class="parent-icon">
                            <i class="fa-solid fa-user-tie"></i>
                        </div>
                        <div class="menu-title">Client</div>
                    </a>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link to="/admin/quyen">
                    <a class="nav-link">
                        <div class="parent-icon">
                            <i class="fa-solid fa-user-lock"></i>
                        </div>
                        <div class="menu-title">Permission</div>
                    </a>
                </router-link>
            </li>
            <li class="nav-item dropdown">
                <a href="javascript:;" class="nav-link dropdown-toggle dropdown-toggle-nocaret" data-bs-toggle="dropdown">
                    <div class="parent-icon">
                        <i class="fa-solid fa-memory"></i>
                    </div>
                    <div class="menu-title">Area management</div>
                </a>
                <ul class="dropdown-menu">
                    <li>
                        <router-link to="/admin/khu-vuc">
                            <a class="dropdown-item"><i class="bx bx-right-arrow-alt"></i>Area</a>

                        </router-link>
                    </li>
                    <li>
                        <router-link to="/admin/ban">
                            <a class="dropdown-item"><i class="bx bx-right-arrow-alt"></i>Table</a>

                        </router-link>
                    </li>

                </ul>
            </li>
            
            <li class="nav-item">
                <router-link to="/admin/nha-cung-cap">
                    <a class="nav-link">
                        <div class="parent-icon">
                            <i class="fa-solid fa-warehouse"></i>
                        </div>
                        <div class="menu-title">Suppliers</div>
                    </a>
                </router-link>
            </li>
            <li class="nav-item dropdown">
                <a href="javascript:;" class="nav-link dropdown-toggle dropdown-toggle-nocaret" data-bs-toggle="dropdown">
                    <div class="parent-icon">
                        <i class="fa-solid fa-house"></i>
                    </div>
                    <div class="menu-title">Warehouse management</div>
                </a>
                <ul class="dropdown-menu">
                    <li>
                        <router-link to="/admin/nhap-kho">
                            <a class="dropdown-item"><i class="bx bx-right-arrow-alt"></i>Enter warehouse</a>

                        </router-link>
                    </li>
                    <li>
                        <router-link to="/admin/hoa-don-nhap-kho">
                            <a class="dropdown-item"><i class="bx bx-right-arrow-alt"></i>Warehouse Invoice</a>

                        </router-link>
                    </li>

                </ul>
            </li>

            
            <li class="nav-item">
                <router-link to="/admin/bai-viet">
                    <a class="nav-link">
                        <div class="parent-icon">
                            <i class="fa-solid fa-book"></i>
                        </div>
                        <div class="menu-title">Article</div>
                    </a>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link to="/admin/chuyen-muc-bai-viet">
                    <a class="nav-link">
                        <div class="parent-icon">
                            <i class="fa-solid fa-book-open-reader"></i>
                        </div>
                        <div class="menu-title">Article Categories</div>
                    </a>
                </router-link>
            </li>

            <li class="nav-item dropdown">
                <a href="javascript:;" class="nav-link dropdown-toggle dropdown-toggle-nocaret" data-bs-toggle="dropdown">
                    <div class="parent-icon">
                        <i class="fa-solid fa-house"></i>
                    </div>
                    <div class="menu-title">Sales Manager</div>
                </a>
                <ul class="dropdown-menu">
                    <li>
                        <router-link to="/admin/su-dung-dich-vu">
                            <a class="dropdown-item"><i class="bx bx-right-arrow-alt"></i>Use of the service</a>

                        </router-link>
                    </li>
                    <li>
                        <router-link to="/admin/hoa-don-ban-hang">
                            <a class="dropdown-item"><i class="bx bx-right-arrow-alt"></i>Sales invoice</a>

                        </router-link>
                    </li>

                </ul>
            </li>

           
            <li class="nav-item dropdown">
                <a href="javascript:;" class="nav-link dropdown-toggle dropdown-toggle-nocaret" data-bs-toggle="dropdown">
                    <div class="parent-icon">
                        <i class="fa-solid fa-house"></i>
                    </div>
                    <div class="menu-title">Food Management</div>
                </a>
                <ul class="dropdown-menu">
                    <li>
                        <router-link to="/admin/nguyen-lieu">
                            <a class="dropdown-item"><i class="bx bx-right-arrow-alt"></i>Material</a>

                        </router-link>
                    </li>
                    <li>
                        <router-link to="/admin/danh-muc">
                            <a class="dropdown-item"><i class="bx bx-right-arrow-alt"></i>Food Categories</a>

                        </router-link>
                    </li>
                    <li>
                        <router-link to="/admin/mon-an">
                            <a class="dropdown-item"><i class="bx bx-right-arrow-alt"></i>Dish</a>

                        </router-link>
                    </li>

                </ul>
            </li>
            <li class="nav-item dropdown">
                <a href="javascript:;" class="nav-link dropdown-toggle dropdown-toggle-nocaret" data-bs-toggle="dropdown">
                    <div class="parent-icon">
                        <i class="fa-solid fa-house"></i>
                    </div>
                    <div class="menu-title">Log</div>
                </a>
                <ul class="dropdown-menu">
                    <li>
                        <router-link to="/admin/lich-su-thanh-toan">
                            <a class="dropdown-item"><i class="bx bx-right-arrow-alt"></i>Material</a>
                        </router-link>
                    </li>
                   

                </ul>
            </li>
        </ul>
    </nav>
</div>
</template>

<script>
export default {
    name: "admin-menu",

};
</script>
