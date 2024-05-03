import { createRouter, createWebHistory } from "vue-router";
import AdminMaster from "@/layouts/Admin";
import BootStrap from "@/layouts/Boststrap";
import Admin from "@/pages/Admin/QuanLyAdmin";
import KhachHang from "@/pages/Admin/KhachHang";
import Quyen from "@/pages/Admin/Quyen";
import DanhMuc from "@/pages/Admin/DanhMuc";
import KhuVuc from "@/pages/Admin/KhuVuc";
import MonAn from "@/pages/Admin/MonAn";
import Ban from "@/pages/Admin/Ban";
import LichLamViec from "@/pages/Staff/LichLamViec";
import Login from "@/pages/Login";
import NhaCungCap from "@/pages/Admin/NhaCungCap";
import ChuyenMucBaiViet from "@/pages/Admin/ChuyenMucBaiViet";
import BaiViet from "@/pages/Admin/BaiViet";
import SuDungDichVu from "@/pages/Admin/SuDungDichVu";
import store from "@/store";
import MonAnCustomer from "@/pages/Customer/MonAn";
import HoaDonBanHang from "@/pages/Admin/HoaDonBanHang";
import BillThanhToan from "@/pages/Admin/BillThanhToan";
import NguyenLieu from "@/pages/Admin/NguyenLieu";
import TrangChu from "@/pages/TrangChu";
// import PayMent from "@/pages/Admin/Payment";
import LichSuThanhToan from "@/pages/Admin/Log/LichSuThanhToan";
import TinhLuong from "@/pages/Admin/Log/TinhLuong";
import NhapKho from "@/pages/Admin/NhapKho";
import HoaDonNhapKho from "@/pages/Admin/HoaDonNhapKho";
import MaGiamGia from "@/pages/Admin/MaGiamGia";
import ForgotPassword from "@/pages/Admin/ForgotPassword"
import ChangePassword from "@/pages/Admin/ChangePassword"
const routes = [
    {
        path: "/admin/login",
        name: "login",
        component: Login,
    },
    {
        path: "/admin/forgot-password",
        name: "forgotpassword",
        component: ForgotPassword,
    },
    {
        path: "/change-password/:uuid",
        name: "changepassword",
        component: ChangePassword,
    },
    {
        path: "/",
        component: BootStrap,
        children: [
            {
                path: "",
                component: TrangChu,
            },
            {
                path: "mon-an/:id_ban/:id_hoa_don",
                component: MonAnCustomer,
            },
        ],
    },
    {
        path: "/admin",
        component: AdminMaster,
        meta: { requiresAuth: true },
        children: [
            {
                path: "",
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
                path: "nha-cung-cap",
                component: NhaCungCap,
            },
            {
                path: "chuyen-muc-bai-viet",
                component: ChuyenMucBaiViet,
            },
            {
                path: "bai-viet",
                component: BaiViet,
            },
            {
                path: "lich-lam-viec",
                component: LichLamViec,
            },
            {
                path: "su-dung-dich-vu",
                component: SuDungDichVu,
            },
            {
                path: "hoa-don-ban-hang",
                component: HoaDonBanHang,
            },
            {
                path: "nguyen-lieu",
                component: NguyenLieu,
            },
            {
                path: "lich-su-thanh-toan",
                component: LichSuThanhToan,
            },
            {
                path: "tinh-luong",
                component: TinhLuong,
            },
            {
                path: "nhap-kho",
                component: NhapKho,
            },
            {
                path: "hoa-don-nhap-kho",
                component: HoaDonNhapKho,
            },
            {
                path:"ma-giam-gia",
                component:MaGiamGia,
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
    {
        path: "/admin",
        component: BootStrap,
        meta: { requiresAuth: true },
        children: [
            {
                path: "bill-thanh-toan/:id_hoa_don_ban_hang",
                component: BillThanhToan,
            },
        ],
    },
];
// Tạo và cấu hình router
const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    const adminToken = JSON.parse(localStorage.getItem("admin"))?.access_token;

    // Kiểm tra nếu người dùng đã có token 'admin' và cố gắng truy cập vào /admin/login, chuyển hướng họ đến /admin
    if (adminToken && to.path === "/admin/login") {
        next("/admin");
        return;
    }

    // Nếu một route yêu cầu xác thực và token 'admin' không tồn tại, chuyển hướng đến /admin/login
    if (to.matched.some(record => record.meta.requiresAuth) && !adminToken) {
        next("/admin/login");
        return;
    }

    // Kiểm tra nếu người dùng đã đăng nhập và đang cố gắng truy cập một trang cần xác thực
    if (adminToken && to.matched.some(record => record.meta.requiresAuth)) {
        // Gọi hàm cập nhật token và tải thông tin người dùng
        updateTokenAndFetchUser();
    }

    next();
});

function updateTokenAndFetchUser() {
    const token = JSON.parse(localStorage.getItem('admin'))?.access_token;
    store.dispatch('updateTokenAdmin', token);
    store.dispatch("onFetchUserLogin");
}

export default router;
