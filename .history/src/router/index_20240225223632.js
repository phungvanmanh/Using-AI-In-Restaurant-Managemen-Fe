import { createRouter, createWebHistory } from "vue-router";
import AdminMaster from "@/layouts/Admin";
import QuanLyAdmin from "@/pages/Admin/QuanLyAdmin";
import DanhMuc from "@/pages/Admin/DanhMuc";
import KhuVuc from "@/pages/Admin/KhuVuc";
import MonAn from '@/pages/Admin/MonAn';
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
            {
              path: "mon-an",
              component: MonAn,
            },
        ],
    },
]
const router = new createRouter({
    history: createWebHistory(),
    routes,
});
export default router;
