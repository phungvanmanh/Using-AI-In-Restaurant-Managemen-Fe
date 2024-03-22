<template>
    <div class="nav-container primary-menu">
        <div class="mobile-topbar-header">
            <div>
                <img
                    src="../../assets/images/logo-icon.png"
                    class="logo-icon"
                    alt="logo icon"
                />
            </div>
            <div>
                <h4 class="logo-text">
                    <span class="text-danger">
                        <b>Duy Tân</b>
                    </span>
                </h4>
            </div>
            <div class="toggle-icon ms-auto">
                <i class="bx bx-arrow-to-left"></i>
            </div>
        </div>
        <nav class="navbar navbar-expand-xl w-100">
            <ul class="navbar-nav justify-content-start flex-grow-1 gap-1">
                <li class="nav-item dropdown">
                    <a
                        href="javascript:;"
                        class="nav-link dropdown-toggle dropdown-toggle-nocaret"
                        data-bs-toggle="dropdown"
                    >
                        <div class="parent-icon">
                            <i class="bx bx-home-circle"></i>
                        </div>
                        <div class="menu-title">Dashboard</div>
                    </a>
                    <ul class="dropdown-menu">
                        <li>
                            <a class="dropdown-item" href="index.html"
                                ><i class="bx bx-right-arrow-alt"></i>Default</a
                            >
                        </li>
                        <li>
                            <a class="dropdown-item" href="index2.html"
                                ><i class="bx bx-right-arrow-alt"></i
                                >Alternate</a
                            >
                        </li>
                        <li>
                            <a class="dropdown-item" href="index3.html"
                                ><i class="bx bx-right-arrow-alt"></i
                                >Graphical</a
                            >
                        </li>
                    </ul>
                </li>
                <li class="nav-item">
                    <router-link to="/admin">
                        <a class="nav-link">
                            <div class="parent-icon">
                                <i class="bx bx-cookie"></i>
                            </div>
                            <div class="menu-title">Admin</div>
                        </a>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/staff">
                        <a class="nav-link">
                            <div class="parent-icon">
                                <i class="bx bx-cookie"></i>
                            </div>
                            <div class="menu-title">Staff</div>
                        </a>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/khach-hang">
                        <a class="nav-link">
                            <div class="parent-icon">
                                <i class="bx bx-cookie"></i>
                            </div>
                            <div class="menu-title">Khách Hàng</div>
                        </a>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/quyen">
                        <a class="nav-link">
                            <div class="parent-icon">
                                <i class="bx bx-cookie"></i>
                            </div>
                            <div class="menu-title">Permission</div>
                        </a>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/danh-muc">
                        <a class="nav-link">
                            <div class="parent-icon">
                                <i class="bx bx-cookie"></i>
                            </div>
                            <div class="menu-title">Category</div>
                        </a>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/mon-an">
                        <a class="nav-link">
                            <div class="parent-icon">
                                <i class="bx bx-cookie"></i>
                            </div>
                            <div class="menu-title">Dish</div>
                        </a>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/khu-vuc">
                        <a class="nav-link">
                            <div class="parent-icon">
                                <i class="bx bx-cookie"></i>
                            </div>
                            <div class="menu-title">Area</div>
                        </a>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/ban">
                        <a class="nav-link">
                            <div class="parent-icon">
                                <i class="bx bx-cookie"></i>
                            </div>
                            <div class="menu-title">Table</div>
                        </a>
                    </router-link>
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
