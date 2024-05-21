<template>
<div class="loader">
    <div class="modelViewPort">
        <div class="eva">
            <div class="head">
                <div class="eyeChamber">
                    <div class="eye"></div>
                    <div class="eye"></div>
                </div>
            </div>
            <div class="body">
                <div class="hand"></div>
                <div class="hand"></div>
                <div class="scannerThing"></div>
                <div class="scannerOrigin"></div>
            </div>
        </div>
    </div>
</div>
<div class="page-content">
    <div class="row">
        <div class="card">
            <div class="card-header">
                <div class="row">
                    <div class="col-md-6 col-sm-12 mb-2 mb-md-0">Danh Sách Hóa Đơn Nhập Kho</div>
                    <div class="col-md-6 col-sm-12 text-md-end">
                        <button class="btn btn-success" @click="exportExcel()">
                            Export Excel
                        </button>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <td class="align-middle">Từ Ngày</td>
                                <td class="align-middle">
                                    <input v-model="tk.begin" type="date" class="form-control" />
                                </td>
                                <td class="align-middle">Đến Ngày</td>
                                <td class="align-middle">
                                    <input v-on:change="loadData()" v-model="tk.end" type="date" class="form-control" />
                                </td>
                                <td class="align-middle text-center" colspan="3">
                                    <button v-on:click="loadData()" class="btn btn-primary">
                                        Thống Kê
                                    </button>
                                </td>
                            </tr>
                            <tr class="text-center align-middle">
                                <th>#</th>
                                <th>Mã Hóa Đơn</th>
                                <th>Nhà Cung Cấp</th>
                                <th>Ghi Chú</th>
                                <th>Chi Tiết Hóa Đơn</th>
                                <th>Nhân Viên</th>
                                <th>Tổng Tiền</th>
                            </tr>
                        </thead>
                        <tbody>
                            <template v-for="(value, key) in list" :key="key">
                                <tr>
                                    <th class="text-center align-middle">
                                        {{ key + 1 }}
                                    </th>
                                    <td class="text-center align-middle">
                                        {{ value.ma_hoa_don }}
                                    </td>
                                    <td class="align-middle">
                                        {{ value.ten_cong_ty }}
                                    </td>
                                    <td class="text-center align-middle">
                                        <i @click="ghi_chu = value.ghi_chu" class="fa-solid fa-notes-medical fa-2x text-info" data-bs-toggle="modal" data-bs-target="#ghiChuModal"></i>
                                    </td>
                                    <td class="text-center align-middle">
                                        <i v-on:click="chitietHoaDonNhapKho(value)" class="fa-solid fa-circle-info fa-2x text-success" data-bs-toggle="modal" data-bs-target="#chiTietModal"></i>
                                    </td>
                                    <td class="align-middle">
                                        {{ value.first_last_name }}
                                    </td>
                                    <td class="text-end align-middle">
                                        {{ formatToVND(value.tong_tien) }}
                                    </td>
                                </tr>
                            </template>
                        </tbody>
                    </table>
                </div>
                <div class="modal fade" id="ghiChuModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Ghi Chú</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                {{ ghi_chu }}
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal fade" id="chiTietModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-xl">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Chi Tiết Hóa Đơn</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="table-responsive">
                                    <table class="table table-bordered">
                                        <thead>
                                            <tr class="text-center">
                                                <th>#</th>
                                                <th>Tên Nguyên Liệu</th>
                                                <th>Ngày</th>
                                                <th>Số Lượng</th>
                                                <th>Đơn Giá</th>
                                                <th>Thành Tiền</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <template v-for="(value, key) in chi_tiet" :key="key">
                                                <tr>
                                                    <th class="text-center">{{ key + 1 }}</th>
                                                    <td>{{ value.ten_nguyen_lieu }}</td>
                                                    <td class="text-center">{{ value.ngay }}</td>
                                                    <td class="text-center">{{ value.so_luong }}</td>
                                                    <td class="text-end">{{ formatToVND(value.don_gia) }}</td>
                                                    <td class="text-end">{{ formatToVND(value.thanh_tien) }}</td>
                                                </tr>
                                            </template>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


</template>

<script>
import {
    ref,
    // computed,
    // onMounted,
} from "vue";
import {
    useStore
} from "vuex";
import axios from "@/axiosConfig";
import Toast from "@/toastConfig";
import $ from "jquery";
import {
    apiUrl
} from "@/globals";
export default {
    name: "hoa-don-nhap-kho",
    setup() {
        const store = useStore();
        const list = ref([]);
        const ghi_chu = ref("");
        const chi_tiet = ref([]);
        const tk = ref({
            begin: "",
            end: "",
        });
        const tong_tien = ref(0);
        const token = JSON.parse(window.localStorage.getItem('admin'))?.access_token;

        function formatToVND(number) {
            number = parseInt(number);
            return number.toLocaleString("vi-VN", {
                style: "currency",
                currency: "VND",
            });
        }

        function loadData() {
            axios
                .post("admin/nhap-kho/data-hoa-don-nhap-kho", tk.value,'admin')
                .then((res) => {
                    list.value = res.data.data;
                    tong_tien.value = res.data.tong_tien;
                })
                .catch((res) => {
                    $.each(res.response.data.errors, function (k, v) {
                        Toast("error", v[0]);
                    });
                });
        }

        function chitietHoaDonNhapKho(payload) {
            axios
                .post("admin/nhap-kho/data-chi-tiet-hoa-don-nhap-kho", payload,'admin')
                .then((res) => {
                    chi_tiet.value = res.data.data;
                });
        }

        const exportExcel = () => {
            fetch(apiUrl + "api/admin/nhap-kho/export", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`,
                    },
                    body: JSON.stringify({
                        data: list.value.map((item) => ({
                            ma_hoa_don: item.ma_hoa_don,
                        })),
                    }),
                })
                .then((response) => {
                    if (!response.ok) {
                        // When the response is not ok, log the whole response for debugging
                        console.error("Response:", response);
                        throw new Error(`HTTP status ${response.status}`);
                    }
                    const contentType = response.headers.get("content-type");
                    if (contentType && contentType.indexOf("application/json") !== -1) {
                        return response.json(); // Handle JSON response
                    }
                    return response.blob();
                })
                // .then((blob) => {
                    .then((data) => {
                    // Check if the data is a JSON object with a status
                    if (data && data.status === 0) {
                        Toast("error", data.message);
                        return; // Exit early if there is an error
                    }
                    const downloadUrl = window.URL.createObjectURL(data);
                    const link = document.createElement("a");
                    link.href = downloadUrl;
                    link.setAttribute("download", "hoadonnhapkho.xlsx");
                    document.body.appendChild(link);
                    link.click();
                    link.remove(); // This is the same as 'document.body.removeChild(link)'
                    window.URL.revokeObjectURL(downloadUrl);
                })
                .catch((error) => {
                    console.error("Download error:", error);
                });
        };

        return {
            store,
            list,
            ghi_chu,
            tk,
            tong_tien,
            loadData,
            formatToVND,
            chitietHoaDonNhapKho,
            chi_tiet,
            exportExcel,
        };
    },
};
</script>

<style>

</style>
