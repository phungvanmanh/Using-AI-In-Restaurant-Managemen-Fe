<template>
<div class="row">
    <div class="col-12">
        <div class="card">
            <div class="card-body">
                <ul class="nav nav-tabs nav-primary mb-0" role="tablist">
                    <li class="nav-item" role="presentation" v-on:click="loadDataBan()">
                        <a class="nav-link active" data-bs-toggle="tab" href="#primaryhome" role="tab" aria-selected="true">
                            <div class="d-flex align-items-center">
                                <div class="tab-icon">
                                    <i class="bx bx-comment-detail font-18 me-1"></i>
                                </div>
                                <div class="tab-title">Tất Cả</div>
                            </div>
                        </a>
                    </li>
                    <template v-for="(value, key) in dataKhuVuc" :key="key">
                        <li class="nav-item" role="presentation" v-on:click="getBanTheoKhuVuc(value)">
                            <a class="nav-link" data-bs-toggle="tab" v-bind:href="'#primaryhome' + key" role="tab" aria-selected="false" tabindex="-1">
                                <div class="d-flex align-items-center">
                                    <div class="tab-icon">
                                        <i class="bx bx-bookmark-alt font-18 me-1"></i>
                                    </div>
                                    <div class="tab-title">
                                        {{ value.name_area }}
                                    </div>
                                </div>
                            </a>
                        </li>
                    </template>
                </ul>
                <div class="tab-content pt-3">
                    <div class="row">
                        <template v-for="(value, key) in dataBan" :key="key">
                            <template v-if="value.status == 1">
                                <div class="col-2">
                                    <div class="card radius-10">
                                        <div class="card-body">
                                            <div class="text-center">
                                                <div class="widgets-icons rounded-circle mx-auto bg-light-primary text-primary mb-3">
                                                    <i class="fa-solid fa-couch"></i>
                                                </div>
                                                <h4 class="my-1">
                                                    {{ value.name_table }}
                                                </h4>
                                                <button v-if="value.is_open_table == 0" @click="openTable(value.id)" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mobanModal">
                                                    Mở Bàn
                                                </button>
                                                <button v-else class="btn btn-success" @click="getIdHoaDon(value.id)" data-bs-toggle="modal" data-bs-target="#mobanModal">
                                                    Thanh Toán
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </template>
                        </template>

                    </div>

                </div>
                <div class="modal fade" id="mobanModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-xl" style="max-width: 100%">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">
                                    Mở Bàn
                                </h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="row">
                                    <div class="col-md-4">
                                        <div class="card">
                                            <div class="card-header">
                                                <h6>Danh sách món ăn</h6>
                                            </div>
                                            <div class="card-body">
                                                <div class="mb-3">
                                                    <div class="table-responsive" style="
                                                                max-height: 450px;
                                                            ">
                                                        <table class="table table-bordered">
                                                            <thead>
                                                                <tr>
                                                                    <th class="align-middle text-center">
                                                                        #
                                                                    </th>
                                                                    <th class="align-middle text-center">
                                                                        Tên
                                                                        Hàng
                                                                    </th>
                                                                    <th class="align-middle text-center">
                                                                        Hình
                                                                        Ảnh
                                                                    </th>
                                                                    <th class="align-middle text-center">
                                                                        Action
                                                                    </th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <template v-for="(value,key) in dataMonAn" :key="key">
                                                                    <tr>
                                                                        <td class="align-middle text-center">{{ key+1 }}</td>
                                                                        <td class="align-middle text-center">{{ value.food_name }}</td>
                                                                        <td class="align-middle text-center">1</td>
                                                                        <td class="align-middle text-center">
                                                                            <button v-on:click="themMonAn(value)" class="btn btn-primary">Thêm</button>
                                                                        </td>
                                                                    </tr>
                                                                </template>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card">
                                            <div class="card-header">
                                                Món ăn sử dụng
                                            </div>
                                            <div class="card-body">
                                                <table class="table table-bordered">
                                                    <thead>
                                                        <tr>
                                                            <th class="text-center align-middle">
                                                                #
                                                            </th>
                                                            <th class="text-center align-middle">
                                                                Tên món ăn
                                                            </th>
                                                            <th class="text-center align-middle">
                                                                Số lượng
                                                            </th>
                                                            <th class="text-center align-middle">
                                                                Đơn giá
                                                            </th>
                                                            <th class="text-center align-middle">
                                                                % giảm giá
                                                            </th>
                                                            <th class="text-center align-middle">
                                                                Thành tiền
                                                            </th>
                                                            <th class="text-center align-middle">
                                                                Ghi chú
                                                            </th>
                                                            <th class="text-center align-middle">
                                                                Action
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <template v-for="(value,key) in list_chi_tiet_ban_hang" :key="key">
                                                            <tr>
                                                                <th class="align-middle">{{ key+ 1 }}</th>
                                                                <td class="align-middle">{{ value.food_name }}</td>
                                                                <td class="align-middle">
                                                                    <input  v-on:change="updateMonAn(value)" v-model="value.so_luong" type="number" class="form-control">
                                                                </td>
                                                                <td class="align-middle">
                                                                    <input  v-on:change="updateMonAn(value)" v-model="value.don_gia" type="number" class="form-control">
                                                                </td>
                                                                <td class="align-middle">
                                                                    <input  v-on:change="updateMonAn(value)" v-model="value.phan_tram_giam" type="number" class="form-control">
                                                                </td>
                                                                <td class="align-middle">
                                                                    <!-- {{formatToVN(value.thanh_tien) }} -->
                                                                    {{  value.thanh_tien }}
                                                                </td>
                                                                <td class="align-middle">
                                                                    <input  v-on:change="updateMonAn(value)" v-model="value.ghi_chu" type="text" class="form-control">
                                                                </td>
                                                                <td class="align-middle">
                                                                    <button v-on:click="deleteChiTiet(value)" class="btn btn-danger">Xóa</button>
                                                                </td>
                                                            </tr>
                                                        </template>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div class="card-footer bg-white text-end">
                                                <div class="row">
                                                    <div class="col-6">
                                                        <textarea class="form-control" cols="30" rows="4"></textarea>
                                                    </div>
                                                    <div class="col-3">
                                                        <img style="width: 100%;" alt="">
                                                    </div>
                                                    <div class="col-3">
                                                        <div class="row">
                                                            <div class="col-6">
                                                                <p><b>Tổng thanh toán:</b></p>
                                                                <p class="mt-3"><b>Phần trăm giảm: </b></p>
                                                                <p><b>Tiền thực thu: </b></p>
                                                            </div>
                                                            <div class="col-6">
                                                                <p><b>{{tong_tien }}</b></p>
                                                                <input type="number" class="form-control">
                                                                <p class="mt-3"><b>{{tien_thuc_thu }}</b>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                                <router-link :to="'/admin/bill/' + id_hoa_don_ban_hang" target="_blank">
                                    <button type="button" class="btn btn-danger">In Hóa Đơn</button>
                                </router-link>

                                <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Thanh Toán</button>
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
    computed,
    onMounted
} from "vue";

import {
    useStore
} from "vuex";
import axios from "@/axiosConfig";
import Toast from "@/toastConfig";
import $ from 'jquery';
export default {
    name: "su-dung-dich-vu",
    components: {},

    setup() {
        const store = useStore();
        const dataBan = computed(() => store.state.dataBan);
        const dataKhuVuc = computed(() => store.state.dataKhuVuc);
        const dataMonAn = computed(() => store.state.dataMonAn);
        const list_chi_tiet_ban_hang = ref([]);
        const loadDataBan = () => {
            store.dispatch("onFetchBan");
        };
        const id_hoa_don_ban_hang = ref('');
        const tong_tien = ref(0);
        const tien_thuc_thu = ref(0);
        const phan_tram_giam_hoa_don=ref(0);
        const hoa_don = ref({});

        const getBanTheoKhuVuc = (v) => {
            // console.log(v.id);
            axios
                .post("admin/su-dung-dich-vu/lay-du-lieu-theo-khu", v)
                .then((res) => {
                    if (res.data.data) {
                        // Kiểm tra xem có dữ liệu trả về không
                        store.commit("fecthBan", res.data.data); // Cập nhật dữ liệu vào store sử dụng mutation
                    } else {
                        Toast("error", "Không có dữ liệu bàn cho khu vực này");
                    }
                });
        };

        const openTable = (id_ban) => {
            var payload = {
                id_ban
            }

            axios
                .post('admin/su-dung-dich-vu/tao-hoa-don', payload)
                .then((res) => {
                    if (res.data.status == 1) {
                        Toast('success', res.data.message);
                        getIdHoaDon(payload.id_ban);
                        store.dispatch("onFetchMonAn");
                        store.dispatch("onFetchBan");
                    }
                })
                .catch((res) => {
                    $.each(res.response.data.errors, function (k, v) {
                        Toast('error', v[0]);
                    });
                });
        }

        const getIdHoaDon = (id_ban) => {
            var payload = {
                id_ban
            }

            axios
                .post('admin/su-dung-dich-vu/get-id-hoa-don', payload)
                .then((res) => {
                    if (res.data.status == 1) {
                        hoa_don.value = res.data.hoa_don;
                        tien_thuc_thu.value = hoa_don.value.tien_thuc_nhan;
                        getChiTietHoaDon(hoa_don.value.id);
                        store.dispatch("onFetchMonAn");
                    }
                })
                .catch((res) => {
                    $.each(res.response.data.errors, function (k, v) {
                        Toast('error', v[0]);
                    });
                });
        }

        const themMonAn = (v) => {
            console.log(hoa_don.value.id, v);

            const payload = {
                'id_hoa_don': hoa_don.value.id,
                'id_mon_an': v.id,
                'don_gia': v.gia_ban,
            };
            axios.post('admin/su-dung-dich-vu/them-mon-an', payload)
                .then((res) => {
                    if (res.data.status) {
                        Toast("success", res.data.message);
                        getIdHoaDon(hoa_don.value.id_ban);
                        getChiTietHoaDon(hoa_don.value.id);
                    }
                    
                })
                .catch((errors) => {
                    const listErrors = errors.response.data.errors;
                    if (listErrors) {
                        Object.values(listErrors).forEach((value) => {
                            Toast("error", 'Thông báo<br>' + value[0]);
                        });
                    } else {
                        console.error('Không có lỗi trả về từ server');
                    }
                });
        };
       
        const getChiTietHoaDon = (id) => {
            const payload = {
                'id_hoa_don': id,
            };
            axios.post('admin/su-dung-dich-vu/get-chi-tiet', payload)
                .then((res) => {
                    list_chi_tiet_ban_hang.value = res.data.data;
                    tong_tien.value = list_chi_tiet_ban_hang.value.map(item => item.thanh_tien || 0).reduce((acc, current) => acc + current, 0);
                })
                .catch((error) => {
                    console.error('Lỗi khi lấy chi tiết hóa đơn:', error);
                    // Xử lý lỗi nếu cần
                });
        };
        // function formatToVN (number) {
        //     number = parseInt(number);
        //     return number.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
        // }
        const updateMonAn = (v) => {
            axios.post('admin/su-dung-dich-vu/update-chi-tiet-ban-hang', v)
                .then((res) => {
                    if (res.data.status) {
                        Toast("success", res.data.message);
                        getIdHoaDon(hoa_don.value.id_ban);
                        getChiTietHoaDon(v.id_hoa_don);
                    }
                    
                })
                .catch((errors) => {
                    const listErrors = errors.response.data.errors;
                    if (listErrors) {
                        Object.values(listErrors).forEach((value) => {
                            Toast("error", 'Thông báo<br>' + value[0]);
                        });
                    } else {
                        console.error('Không có lỗi trả về từ server');
                    }
                });
        };
        const deleteChiTiet = (v) => {
            axios.post('admin/su-dung-dich-vu/xoa-chi-tiet', v)
                .then((res) => {
                    if (res.data.status) {
                        Toast("success", res.data.message);
                        tong_tien.value = res.data.tong_tien;
                        tien_thuc_thu.value = res.data.tong_tien;
                        phan_tram_giam_hoa_don.value = 0;
                        getChiTietHoaDon(hoa_don.value.id);
                    }
                });
        };

        onMounted(() => {
            store.dispatch("onFetchBan");
            store.dispatch("onFetchKhuVuc");
            store.dispatch("onFetchMonAn");
        });

        return {
            store,
            dataBan,
            dataKhuVuc,
            dataMonAn,
            id_hoa_don_ban_hang,
            tong_tien,
            tien_thuc_thu,
            list_chi_tiet_ban_hang,
            loadDataBan,
            getBanTheoKhuVuc,
            openTable,
            getIdHoaDon,
            themMonAn,
            getChiTietHoaDon,
            // formatToVN,
            updateMonAn,
            deleteChiTiet,
        };
    },
};
</script>
