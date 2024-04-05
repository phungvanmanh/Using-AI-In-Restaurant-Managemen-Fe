import { createRouter, createWebHistory } from "vue-router";
import AdminMaster from "@/layouts/Admin";
import Test from "@/pages/Admin/QuanLyAdmin/index1.vue";
import Admin from "@/pages/Admin/QuanLyAdmin";
import KhachHang from "@/pages/Admin/KhachHang";
import Quyen from "@/pages/Admin/Quyen";
import DanhMuc from "@/pages/Admin/DanhMuc";
import KhuVuc from "@/pages/Admin/KhuVuc";
import MonAn from "@/pages/Admin/MonAn";
import Ban from "@/pages/Admin/Ban";
import LichLamViec from "@/pages/Staff/LichLamViec";
import Login from "@/pages/Login";
const routes = [
    {
        path: "/login",
        name: "login",
        component: Login,
    },
    {
        path: "/",
        component: AdminMaster,
        meta: { requiresAuth: true },
        children: [
            {
                path: "",
                component: Test,
            },
            {
                path: "admin",
                name: "admin",
                component: Admin,
            },
            {
                path: "khach-hang",
                component: KhachHang,
            },
            {
                path: "quyen",
                component: Quyen,
            },
            {
                path: "danh-muc",
                component: DanhMuc,
            },
            {
                path: "khu-vuc",
                component: KhuVuc,
            },
            {
                path: "mon-an",
                component: MonAn,
            },
            {
                path: "ban",
                component: Ban,
            },
            {
                path: "lich-lam-viec",
                component: LichLamViec,
            },
        ],
    },
    {
        path: "/nhan-vien",
        component: AdminMaster,
        children: [
            {
                path: "lich-lam-viec",
                component: LichLamViec,
            },
        ],
    },
];
const loggedIn = () => {
    return localStorage.getItem('admin') !== null;
};

// Tạo và cấu hình router
const router = createRouter({
    history: createWebHistory(),
    routes, // Sử dụng mảng `routes` đã khai báo
});

// Sử dụng hook beforeEach để kiểm soát quyền truy cập
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth) && !loggedIn()) { // Gọi hàm `loggedIn()`
        next('/login');
    } else {
        next();
    }
});

export default router;
