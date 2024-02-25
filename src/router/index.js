import { createRouter, createWebHistory } from "vue-router";
import AdminMaster from "@/layouts/Admin";
import QuanLyAdmin from "@/pages/Admin/QuanLyAdmin";
import DanhMuc from "@/pages/Admin/DanhMuc";
import KhuVuc from "@/pages/Admin/KhuVuc";
const routes = [
    {
        path: "/",
        component: AdminMaster,
        children: [
            {
                path: "",
                component: QuanLyAdmin,
            },
            {
                path: "danh-muc",
                component: DanhMuc,
            },
            {
                path: "khu-vuc",
                component: KhuVuc,
            },
        ],
    },
];

const router = new createRouter({
    history: createWebHistory(),
    routes,
});
export default router;
