import { createRouter, createWebHistory } from "vue-router";
import AdminMaster from "@/layouts/Admin";
// import Customer from "@/layouts/Customer";
import BootStrap from "@/layouts/Boststrap";
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


const routes = [
    // {
    //     path: "/",
    //     component: Customer,
    //     children: [
    //         {
    //             path: 'payment',
    //             component: PayMent,
    //         },
    //     ]
    // },
    {
        path: "/",
        component: BootStrap,
        children: [
            {
                path: '',
                component: TrangChu,
            },
        ]
    },
    {
        path: "/",
        component:BootStrap ,
        children: [
            {
                path: 'mon-an/:id_ban/:id_hoa_don',
                component: MonAnCustomer,
            },
        ]
    },
    {
        path: "/login",
        name: "login",
        component: Login,
    },
    {
        path: "/admin",
        component: BootStrap,
        meta: { requiresAuth: true },
        children: [
            {
                path:"bill-thanh-toan/:id_hoa_don_ban_hang",
                component:BillThanhToan,
            }
        ]
    },
    {
        path: "/admin",
        component: AdminMaster,
        meta: { requiresAuth: true },
        children: [
            {
                path: "test",
                component: Test,
            },
            {
                path: "quan-ly",
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
                path:"nguyen-lieu",
                component:NguyenLieu,
            },
            {
                path:"lich-su-thanh-toan",
                component:LichSuThanhToan,
            },
            {
                path:"tinh-luong",
                component:TinhLuong,
            },
            {
                path:"nhap-kho",
                component:NhapKho,
            },
            {
                path:"hoa-don-nhap-kho",
                component:HoaDonNhapKho,
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
// Tạo và cấu hình router
const router = createRouter({
    history: createWebHistory(),
    base: process.env.BASE_URL,
    routes, // Sử dụng mảng `routes` đã khai báo
});

// Sử dụng hook beforeEach để kiểm soát quyền truy cập
router.beforeEach((to, from, next) => {
    const isLoggedIn = localStorage.getItem('admin') !== null;

    if (isLoggedIn && to.path === '/login') {
        // Thay đổi '/dashboard' bằng đường dẫn bạn muốn chuyển hướng người dùng đã đăng nhập
        next('/admin/lich-lam-viec');
        return; // Đảm bảo không thực hiện các điều kiện kiểm tra tiếp theo
    }
    
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!isLoggedIn) {
            // Nếu yêu cầu xác thực nhưng không tìm thấy token đăng nhập
            next('/login');
        } else {
            // Người dùng đã đăng nhập
            updateTokenAndFetchUser();
            next();
        }
    } else {
        next();
    }
});

function updateTokenAndFetchUser() {
    const token = JSON.parse(localStorage.getItem('admin'))?.access_token;
    store.dispatch('updateTokenAdmin', token);
    store.dispatch("onFetchUserLogin");
}

export default router;
