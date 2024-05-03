<template>
<div data-v-636591ba="" class="page-content">
    <div class="spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
    <div class="row mt-4">
        <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12">
            <div class="card">
                <div class="card-header"><span><b>Add Mã Giảm Giá Giá</b></span></div>
                <div class="card-body">
                    <div class="mb-2"><label class="form-label">Tên Mã</label><input v-model="addMaGiamGia.ma_giam_gia" type="text" class="form-control" name="" placeholder="nhập tên mã..."></div>
                    <div class="mb-2"><label class="form-label">Món Giảm</label><select v-model="addMaGiamGia.id_mon" class="form-select" aria-label=".form-select-sm example">
                            <template v-for="(value,key) in dataMonAn" :key="key">
                                <option v-if="value.status ==1" v-bind:value="value.id">{{value.food_name}}</option>
                            </template>
                        </select></div>
                    <div class="mb-2"><label class="form-label">Phần trăm giảm</label><input v-model="addMaGiamGia.phan_tram_giam" type="number" class="form-control" name="" placeholder="nhập phần trăm giảm..."></div>
                    <div class="mb-2"><label class="form-label">Ngày Bắt Đầu</label><input v-model="addMaGiamGia.ngay_bat_dau" type="date" class="form-control" name="" placeholder=""></div>
                    <div class="mb-2"><label class="form-label">Ngày Kết Thúc</label><input v-model="addMaGiamGia.ngay_ket_thuc" type="date" class="form-control" name="" placeholder=""></div>

                    <div class="mb-2"><label class="form-label">Status</label><select v-model="addMaGiamGia.status" class="form-select" aria-label=".form-select-sm example">
                            <option value="1">Hiển Thị</option>
                            <option value="0">Tạm Đóng</option>
                        </select></div>
                </div>
                <div class="card-footer"><button v-on:click="addNew()" class="btn btn-primary float-end"> Add news </button></div>
            </div>
        </div>
        <div class="col-xl-9 col-lg-9 col-md-9 col-sm-12">
            <div class="card">
                <div class="card-header"><span><b>List Mã Giảm Giá</b></span></div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th class="text-center align-middle text-nowrap"> # </th>
                                    <th class="text-center align-middle text-nowrap"> Mã Giảm </th>
                                    <th class="text-center align-middle text-nowrap"> Tên Món</th>
                                    <th class="text-center align-middle text-nowrap"> Phần Trăm Giảm</th>
                                    <th class="text-center align-middle text-nowrap"> Ngày Bắt Đầu</th>
                                    <th class="text-center align-middle text-nowrap"> Ngày Kết Thú</th>
                                    <th class="text-center align-middle text-nowrap"> Status </th>
                                    <th class="text-center align-middle text-nowrap"> Action </th>
                                </tr>
                            </thead>
                            <tbody>
                                <template v-for="(value,key) in dataMaGiamGia" :key="key">
                                    <tr>
                                        <th class="text-center align-middle text-nowrap">{{ key+1 }}</th>
                                        <td class="align-middle text-nowrap">{{ value.ma_giam_gia }}</td>
                                        <td class="align-middle text-nowrap">{{value.food_name}}</td>
                                        <td class="align-middle text-nowrap">{{value.phan_tram_giam}}%</td>
                                        <td class="align-middle text-nowrap">{{value.ngay_bat_dau}}</td>
                                        <td class="align-middle text-nowrap">{{ value.ngay_ket_thuc }}</td>
                                        <td class="text-center align-middle text-nowrap">
                                            <button @click="changeStatus(value)" v-if="value.status == 1" class="btn btn-outline-info" style="width: 120px;"> Hiển Thị </button>
                                            <button @click="changeStatus(value)" v-else class="btn btn-warning">Tạm Tắt</button>

                                        </td>
                                        <td class="text-center align-middle text-nowrap"><button v-on:click="Object.assign(editMaGiamGia,value)" type="button" class="me-2 btn btn-success" data-bs-toggle="modal" data-bs-target="#editmodal">Edit</button>
                                            <button v-on:click="Object.assign(deletemagiamgia,value)" type="button" class="me-2 btn btn-danger" data-bs-toggle="modal" data-bs-target="#xoamodal">Delete</button>
                                        </td>
                                    </tr>
                                </template>

                            </tbody>
                        </table>
                        <div class="modal fade" id="editmodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-lg">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="exampleModalLabel">Update Mã Giảm Giá</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="card">
                                            <div class="card-header"><span><b>Add Mã Giảm Giá Giá</b></span></div>
                                            <div class="card-body">
                                                <div class="mb-2"><label class="form-label">Tên Mã</label><input v-model="editMaGiamGia.ma_giam_gia" type="text" class="form-control" name="" placeholder="nhập tên mã..."></div>
                                                <div class="mb-2"><label class="form-label">Món Giảm</label><select v-model="editMaGiamGia.id_mon" class="form-select" aria-label=".form-select-sm example">
                                                        <option disabled="" value="">Please choose...</option>
                                                        <template v-for="(value,key) in dataMonAn" :key="key">
                                                            <option v-if="value.status ==1" v-bind:value="value.id">{{value.food_name}}</option>
                                                        </template>
                                                    </select></div>
                                                <div class="mb-2"><label class="form-label">Phần trăm giảm</label><input v-model="editMaGiamGia.phan_tram_giam" type="number" class="form-control" name="" placeholder="nhập phần trăm giảm..."></div>
                                                <div class="mb-2"><label class="form-label">Ngày Bắt Đầu</label><input v-model="editMaGiamGia.ngay_bat_dau" type="date" class="form-control" name="" placeholder=""></div>
                                                <div class="mb-2"><label class="form-label">Ngày Kết Thúc</label><input v-model="editMaGiamGia.ngay_ket_thuc" type="date" class="form-control" name="" placeholder=""></div>

                                                <div class="mb-2"><label class="form-label">Status</label><select v-model="editMaGiamGia.status" class="form-select" aria-label=".form-select-sm example">
                                                        <option value="1">Hiển Thị</option>
                                                        <option value="0">Tạm Đóng</option>
                                                    </select></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Exit</button>
                                        <button v-on:click="updateMaGiamGia()" data-bs-dismiss="modal" type="button" class="btn btn-primary">Update</button>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal fade" id="xoamodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="exampleModalLabel">Delete Mã Giảm Giá</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="alert alert-warning border-0 bg-warning alert-dismissible fade show py-2">
                                            <div class="d-flex align-items-center">
                                                <div class="font-35 text-dark"><i class="bx bx-info-circle"></i>
                                                </div>
                                                <div class="ms-3">
                                                    <h6 class="mb-0 text-dark">Warning</h6>
                                                    <div class="text-dark">
                                                        <p>Do you want to delete <b>{{ deletemagiamgia.ma_giam_gia }}</b> hey?</p>
                                                        <p>
                                                            <b>Note:</b> This cannot be undone!
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Exit</button>
                                        <button v-on:click="delete_magiamgia()" type="button" class="btn btn-danger" data-bs-dismiss="modal">Delete</button>
                                    </div>
                                </div>
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
} from 'vue';
import {
    useStore
} from "vuex";
import axios from '@/axiosConfig';
import Toast from '@/toastConfig';
import $ from 'jquery';
export default {
    name: 'ma-giam-gia',
    setup() {
        const store = useStore();
        const addMaGiamGia = ref({});
        const editMaGiamGia = ref({});
        const deletemagiamgia = ref({});


        const dataMonAn = computed(() => {
            return store.state.dataMonAn;
        });
        const dataMaGiamGia = computed(() => {
            return store.state.dataMaGiamGia;
        });
        const status = computed(() => store.state.tinh_trang);
        const addNew = () => {
            axios
                .post("admin/ma-giam-gia/tao-ma-giam-gia", addMaGiamGia.value)
                .then((res) => {
                    if (res.data.status == 1) {
                        Toast("success", res.data.message);
                        addMaGiamGia.value = {};
                        // store.dispatch("onFetchChuyenMucBaiViet");
                    }
                })
                .catch((res) => {
                    $.each(res.response.data.errors, function (k, v) {
                        Toast("error", v[0]);
                    });
                });

        };
        const changeStatus = (value) => {
            axios
                .post("admin/ma-giam-gia/doi-trang-thai", value)
                .then((res) => {
                    if (res.data.status == 1) {
                        Toast("success", res.data.message);
                        addMaGiamGia.value = {};
                        store.dispatch("onFetchMaGiamGia");
                    }
                })
                .catch((res) => {
                    $.each(res.response.data.errors, function (k, v) {
                        Toast("error", v[0]);
                    });
                });
        };
        const updateMaGiamGia = () => {
            axios
                .post("admin/ma-giam-gia/update-ma-giam-gia", editMaGiamGia.value)
                .then((res) => {
                    if (res.data.status == 1) {
                        Toast("success", res.data.message);
                        $("#edit_category").modal("hide");
                        editMaGiamGia.value = {};
                        store.dispatch("onFetchMaGiamGia");
                    }
                })
                .catch((res) => {
                    $.each(res.response.data.errors, function (k, v) {
                        Toast("error", v[0]);
                    });
                });
        };
        const delete_magiamgia = () => {
            axios
                .post("admin/ma-giam-gia/xoa-ma-giam-gia", deletemagiamgia.value)
                .then((res) => {
                    if (res.data.status == 1) {
                        Toast("success", res.data.message);
                        // $("#delete_category").modal("hide");
                        deletemagiamgia.value = {};
                        store.dispatch("onFetchMaGiamGia");
                    }
                })
                .catch((res) => {
                    $.each(res.response.data.errors, function (k, v) {
                        Toast("error", v[0]);
                    });
                });
        };
        onMounted(() => {
            store.dispatch("onFetchMonAn");
            store.dispatch("onFetchMaGiamGia");

        });

        return {
            store,
            addMaGiamGia,
            addNew,
            dataMonAn,
            dataMaGiamGia,
            changeStatus,
            status,
            updateMaGiamGia,
            editMaGiamGia,
            deletemagiamgia,
            delete_magiamgia

        }
    }

}
</script>

<style >

</style>
