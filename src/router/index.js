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
import LoginCustomer from "@/pages/Customer/Login"
import ThongKe from "@/pages/Admin/ThongKe";
import TonKhoNguyenLieu from "@/pages/Admin/TonKhoNguyenLieu";
// import Test123 from "@/pages/Admin/Test123";
import DoanhThu from "@/pages/Admin/DoanhThu";
const routes = [
    {
        path: "/admin/login",
        name: "login",
        component: Login,
    },
    {
        path: "/login",
        component: LoginCustomer,
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
                meta: { permissions: ['107'] },
            },
            {
                path: "khach-hang",
                component: KhachHang,
                meta: { permissions: ['108'] },
            },
            {
                path: "quyen",
                component: Quyen,
                meta: { permissions: ['109'] },
            },
            {
                path: "danh-muc",
                component: DanhMuc,
                meta: { permissions: ['110'] },
            },
            {
                path: "khu-vuc",
                component: KhuVuc,
                meta: { permissions: ['111'] },
            },
            {
                path: "mon-an",
                component: MonAn,
                meta: { permissions: ['112'] },
            },
            {
                path: "ban",
                component: Ban,
                meta: { permissions: ['113'] },
            },
            {
                path: "nha-cung-cap",
                component: NhaCungCap,
                meta: { permissions: ['114'] },
            },
            {
                path: "chuyen-muc-bai-viet",
                component: ChuyenMucBaiViet,
                meta: { permissions: ['115'] },
            },
            {
                path: "bai-viet",
                component: BaiViet,
                meta: { permissions: ['116'] },
            },
            {
                path: "lich-lam-viec",
                component: LichLamViec,
                meta: { permissions: ['117'] },
            },
            {
                path: "su-dung-dich-vu",
                component: SuDungDichVu,
                meta: { permissions: ['128'] },
            },
            {
                path: "hoa-don-ban-hang",
                component: HoaDonBanHang,
                meta: { permissions: ['118'] },
            },
            {
                path: "nguyen-lieu",
                component: NguyenLieu,
                meta: { permissions: ['119'] },
            },
            {
                path: "lich-su-thanh-toan",
                component: LichSuThanhToan,
                meta: { permissions: ['127'] },
            },
            {
                path: "tinh-luong",
                component: TinhLuong,
                meta: { permissions: ['120'] },
            },
            {
                path: "nhap-kho",
                component: NhapKho,
                meta: { permissions: ['121'] },
            },
            {
                path: "hoa-don-nhap-kho",
                component: HoaDonNhapKho,
                meta: { permissions: ['122'] },
            },
            {
                path:"ma-giam-gia",
                component:MaGiamGia,
                meta: { permissions: ['123'] },
            },
            {
                path:"thong-ke",
                component:ThongKe,
                meta: { permissions: ['124'] },
            },
            {
                path:"ton-kho-nguyen-lieu",
                component:TonKhoNguyenLieu,
                meta: { permissions: ['125'] },
            },
            {
                path:"doanh-thu",
                component:DoanhThu,
                meta: { permissions: ['126'] },
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

router.beforeEach(async (to, from, next) => {
    const adminToken = JSON.parse(localStorage.getItem("admin"))?.access_token;

    // Redirect to admin login if not authenticated
    if (to.matched.some(record => record.meta.requiresAuth) && !adminToken) {
        next("/admin/login");
        return;
    }

    // Fetch permissions if route requires authentication
    if (to.matched.some(record => record.meta.requiresAuth)) {
        await store.dispatch("onFetchPemission");
        const permissions = to.meta.permissions || [];
        const hasPermission = permissions.every(permission => store.getters.hasPermission(permission));
        
        if (!hasPermission) {
            next("/admin/lich-lam-viec");
            return;
        }
    }

    // Update token and fetch user information if authenticated
    if (adminToken) {
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
