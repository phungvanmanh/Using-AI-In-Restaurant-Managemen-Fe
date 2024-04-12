<template>
<div class="card">
    <div class="card-body">
        <h3>Hóa Đơn Bán Hàng</h3>
        <hr />
        <div class="table-responsive">
        <table class="table table-bordered">
            <thead>
                <tr>
                    <td class="align-middle">Từ Ngày</td>
                    <td class="align-middle">
                        <input v-on:change="loadData()" v-model="tk.begin" type="date" class="form-control" />
                    </td>
                    <td class="align-middle">Đến Ngày</td>
                    <td class="align-middle">
                        <input  v-on:change="loadData()" v-model="tk.end" type="date" class="form-control" />
                    </td>
                    <td class="align-middle text-center">
                        <button  v-on:click="loadData()" class="btn btn-primary">Thống Kê</button>
                    </td>
                    <td class="align-middle" colspan="3"><b>Tổng Tiền:</b> {{ formatToVND(tong_tien) }}</td>
                </tr>
                <tr>
                    <th class="align-middle text-center">#</th>
                    <th class="align-middle text-center">Tên Bàn</th>
                    <th class="align-middle text-center">
                        Nhân Viên Thanh Toán
                    </th>
                    <th class="align-middle text-center">
                        Tiền Trước Giảm
                    </th>
                    <th class="align-middle text-center">Phần Trăm Giảm</th>
                    <th class="align-middle text-center">
                        Tổng Tiền Đã Giảm
                    </th>
                    <th class="align-middle text-center">Ghi Chú</th>
                    <th class="align-middle text-center">
                        Chi Tiết Hóa Đơn
                    </th>
                    <th  class="align-middle text-center">Tình Trạng Thanh Toán</th>
                </tr>
            </thead>
            <tbody>
                <template v-for="(value,key) in list" :key="key">
                    <tr>
                        <th class="align-middle text-center">{{ key+1 }}</th>
                        <td class="align-middle text-center">{{value.name_table }}</td>
                        <td class="align-middle text-start">{{ value.first_last_name }}</td>
                        <td class="align-middle text-end">{{ formatToVND(value.tong_tien_truoc_giam) }}</td>
                        <td class="align-middle text-center">{{ value.phan_tram_giam }}</td>
                        <td class="align-middle text-end">{{ formatToVND(value.tien_thuc_nhan) }}</td>
                        <td class="align-middle text-center">
                            <button @click="ghi_chu=value.ghi_chu" type="button" class="btn btn-light" data-bs-toggle="modal" data-bs-target="#ghiChuModal">
                                <i class="fa-solid fa-comment"></i>
                            </button>
                        </td>
                        <td class="align-middle text-center">
                            <button v-on:click="chitietHoaDon(value)" type="button" class="btn btn-primary me-1" data-bs-toggle="modal" data-bs-target="#chiTietModal">
                                <i class="fa-solid fa-circle-info"></i>
                            </button>
                            <!-- <router-link :to="'/admin/bill/' + v.id" target="_blank">
                                    <a type="button" class="btn btn-danger">
                                        <i class="fa-solid fa-file-invoice"></i>
                                    </a>
                                </router-link> -->
                        </td>
                        <td>
                           <p v-if="value.is_done==0">Chưa Thanh Toán</p>
                           <p v-else>Đã Thanh Toán</p>

                        </td>
                    </tr>
                </template>
            </tbody>
        </table>
    </div>
        <div class="modal fade" id="chiTietModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">
                            Chi Tiết Hóa Đơn
                        </h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th class="text-center align-middle">
                                        #
                                    </th>
                                    <th class="text-center align-middle">
                                        Tên Món
                                    </th>
                                    <th class="text-center align-middle">
                                        Số Lượng
                                    </th>
                                    <th class="text-center align-middle">
                                        Đơn Giá
                                    </th>
                                    <th class="text-center align-middle">
                                        Thành Tiền
                                    </th>
                                    <th class="text-center align-middle">
                                        Phần Trăm Giảm
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <template v-for="(value,key) in chi_tiet" :key="key">
                                <tr>
                                    <th class="text-center align-middle">{{ key+1 }}</th>
                                    <td class="align-middle">{{ value.food_name }}</td>
                                    <td class="text-center align-middle">{{ value.so_luong }}</td>
                                    <td class="text-center align-middle">{{formatToVND(value.don_gia)}}</td>
                                    <td class="text-center align-middle">{{ formatToVND(value.thanh_tien) }}</td>
                                    <td class="text-center align-middle">{{ value.phan_tram_giam }} %</td>
                                    
                                </tr>
                            </template>

                            </tbody>
                        </table>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                            Thoát
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="ghiChuModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">
                           Ghi Chú Hoá Đơn
                        </h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        {{ ghi_chu }}
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                            Thoát
                        </button>
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
    onMounted,
} from "vue";
import {
    useStore
} from "vuex";
import axios from "@/axiosConfig";
import Toast from "@/toastConfig";
import $ from "jquery";
export default {
    name: "hoa-don-ban-hang",
    setup() {
        const store = useStore();
        const list = ref([]);
        const ghi_chu = ref("");
        const chi_tiet = ref([]);
        const tk = ref({
            begin: "",
            end: ""
        });
        const tong_tien = ref(0);
        const date = ref("");

        function loadData() {
            axios
                .post("admin/hoa-don/hoa-don", tk.value)
                .then((res) => {
                    list.value = res.data.data;
                    tong_tien.value = res.data.total;
                })
                .catch((res) => {
                    $.each(res.response.data.errors, function (k, v) {
                        Toast("error", v[0]);
                    });
                });
        }

        function chitietHoaDon(payload)
        {
            axios
                .post("admin/hoa-don/chi-tiet-hoa-don", payload)
                .then((res) => {
                    chi_tiet.value = res.data.data;
                    
                })
               
        }
        function formatToVND(number) {
            number = parseInt(number);
            return number.toLocaleString("vi-VN", {
                style: "currency",
                currency: "VND",
            });
        }
        onMounted(() => {
            date.value = new Date();
            const subday = new Date().toISOString().slice(0, 10);
            tk.value.begin = subday;
            tk.value.end = new Date().toISOString().slice(0, 10);
            loadData();

        });

        return {
            store,
            list,
            ghi_chu,
            chi_tiet,
            tong_tien,
            tk,
            date,
            loadData,
            formatToVND,
            chitietHoaDon,
        };
    },
};
</script>

<style></style>
