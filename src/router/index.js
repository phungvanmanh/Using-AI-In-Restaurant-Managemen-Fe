import { createRouter, createWebHistory } from "vue-router";
import AdminMaster from "@/layouts/Admin";
import QuanLyAdmin from "@/pages/Admin/QuanLyAdmin";
import ChuyenMuc from "@/pages/Admin/ChuyenMuc";
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
            path: "chuyen-muc",
            component: ChuyenMuc,
        },
        {
          path: "mon-an",
          component: MonAn,
      },
    ],
  },
];

const router = new createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
