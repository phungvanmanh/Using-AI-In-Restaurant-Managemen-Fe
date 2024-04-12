<template>
<div class="container-fulid">
    <div class="row mb-3">
        <div class="col-12 text-end">
            <button class="btn btn-outline-primary px-5 radius-30" data-bs-toggle="modal" data-bs-target="#themMoiModal"><b>Add New</b></button>
        </div>
    </div>
    <div class="row">
        <div class="card border-top border-0 border-4 border-primary">
            <div class="card-header">
                <h5>Supplier List</h5>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th colspan="100%">
                                    <div  class="input-group mb-3"><input  v-on:keyup.enter="searchNhaCungCap()" v-model="search.abc" type="text" class="form-control" placeholder="Enter what you're looking for"><button v-on:click="searchNhaCungCap()" class="btn btn-primary"><i class="fa-solid fa-magnifying-glass"></i></button></div>
                                </th>
                            </tr>
                            <tr>
                                <th class="text-center align-middle text-nowrap"> # </th>
                                <th class="text-center align-middle text-nowrap"> Tax ID </th>
                                <th class="text-center align-middle text-nowrap"> Company Name </th>
                                <th class="text-center align-middle text-nowrap"> Representative </th>
                                <th class="text-center align-middle text-nowrap"> Telephone numberi </th>
                                <th class="text-center align-middle text-nowrap"> Email </th>
                                <th class="text-center align-middle text-nowrap"> Address </th>
                                <th class="text-center align-middle text-nowrap"> Name remembered</th>
                                <th class="text-center align-middle text-nowrap"> Status </th>
                                <th class="text-center align-middle text-nowrap"> Action </th>
                            </tr>
                        </thead>
                        <tbody>
                            <template v-for="(value,key) in dataNhaCungCap" :key="key">
                                <tr>
                                    <th class="text-center align-middle text-nowrap">{{key+1}}</th>
                                    <td class="text-center align-middle text-nowrap">{{value.ma_so_thue}}</td>
                                    <td class="text-center align-middle text-nowrap">{{value.ten_cong_ty}}</td>
                                    <td class="text-center align-middle text-nowrap">{{value.ten_nguoi_dai_dien}}</td>
                                    <td class="text-center align-middle text-nowrap">{{value.so_dien_thoai}}</td>
                                    <td class="text-center align-middle text-nowrap">{{value.email}}</td>
                                    <td class="text-center align-middle text-nowrap"><button v-on:click="dia_chi = value" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#diaChiModal"><i class="fa-solid fa-circle-info"></i></button></td>
                                    <td class="text-center align-middle text-nowrap">{{value.ten_goi_nho}}</td>
                                    <td class="text-center align-middle text-nowrap">

                                        <button @:click="changeStatus(value)" v-if="value.tinh_trang == 1" class="btn btn-success">Activity</button>
                                        <button @:click="changeStatus(value)" v-else class="btn btn-warning">Pause</button>
                                    </td>
                                    <td class="text-center align-middle text-nowrap"><button v-on:click="Object.assign(editNhacungcap,value)" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#capNhatModal" style="width: 100px; margin-right: 4px;">Update</button><button v-on:click="Object.assign(delete_nhacungcap,value)" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#xoaModal" style="width: 100px;">Delete</button></td>
                                </tr>
                            </template>

                        </tbody>
                    </table>
                </div>
                <div class="modal fade" id="capNhatModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-xl">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Vendor updates</h1><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="row">
                                    <div class="row">
                                        <div class="col-4"><label class="form-label">Tax ID</label><input v-model="editNhacungcap.ma_so_thue" type="text" class="form-control" placeholder="Enter your tax ID"></div>
                                        <div class="col-4"><label class="form-label">Company Name</label><input v-model="editNhacungcap.ten_cong_ty" type="text" class="form-control" placeholder="Enter your company name"></div>
                                        <div class="col-4"><label class="form-label">Representative</label><input v-model="editNhacungcap.ten_nguoi_dai_dien" type="text" class="form-control" placeholder="Enter a delegate's name"></div>
                                    </div>
                                    <div class="row">
                                        <div class="col-4"><label class="form-label mt-3">Telephone numberi</label><input v-model="editNhacungcap.so_dien_thoai" type="number" class="form-control" placeholder="Enter your phone number"></div>
                                        <div class="col-4"><label class="form-label mt-3">Email</label><input v-model="editNhacungcap.email" type="email" class="form-control" placeholder="Enter Email"></div>
                                        <div class="col-4"><label class="form-label mt-3">Address</label><input v-model="editNhacungcap.dia_chi" type="email" class="form-control" placeholder="Enter the address"></div>
                                    </div>
                                    <div class="row">
                                        <div class="col-6"><label class="form-label mt-3">Name remembered</label><input v-model="editNhacungcap.ten_goi_nho" type="text" class="form-control" placeholder="Enter a reminiscent name"></div>
                                        <div class="col-6"><label class="form-label mt-3">Status</label><select v-model="editNhacungcap.tinh_trang" class="form-control">
                                                <option value="0">Pause</option>
                                                <option value="1">Activity</option>
                                            </select></div>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer"><button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Thoát</button><button v-on:click="updateNhaCungCap()" type="button" data-bs-dismiss="modal" class="btn btn-primary">Update</button></div>
                        </div>
                    </div>
                </div>
                <div class="modal fade" id="xoaModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Remove a provider</h1><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="alert alert-warning border-0 bg-warning alert-dismissible fade show py-2">
                                    <div class="d-flex align-items-center">
                                        <div class="font-35 text-dark"><i class="bx bx-info-circle"></i></div>
                                        <div class="ms-3">
                                            <h6 class="mb-0 text-dark">Warning</h6>
                                            <div class="text-dark">
                                                <p>Do you want to remove the provider <b>{{ delete_nhacungcap.ten_goi_nho }}</b> hey?</p>
                                                <p><b>Note:</b> This cannot be undone! </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer"><button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Exit</button><button v-on:click="deleteNhaCungCap()" type="button" class="btn btn-danger" data-bs-dismiss="modal">Delete</button></div>
                        </div>
                    </div>
                </div>
                <div class="modal fade" id="diaChiModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Provider Address</h5><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                {{ dia_chi.dia_chi }}
                            </div>
                            <div class="modal-footer"><button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Thoát</button></div>
                        </div>
                    </div>
                </div>
                <div class="modal fade" id="themMoiModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-xl">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Add a new provider</h1><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="row">
                                    <div class="row">
                                        <div class="col-4"><label class="form-label">Tax ID</label><input v-model="addNhaCungCap.ma_so_thue" type="text" class="form-control" placeholder="Enter your tax ID"></div>
                                        <div class="col-4"><label class="form-label">Company Name</label><input v-model="addNhaCungCap.ten_cong_ty" type="text" class="form-control" placeholder="Enter your company name"></div>
                                        <div class="col-4"><label class="form-label">Representative's name</label><input v-model="addNhaCungCap.ten_nguoi_dai_dien" type="text" class="form-control" placeholder="Enter a delegate's name"></div>
                                    </div>
                                    <div class="row">
                                        <div class="col-4"><label class="form-label mt-3">Phone number</label><input v-model="addNhaCungCap.so_dien_thoai" type="number" class="form-control" placeholder="Enter your phone number"></div>
                                        <div class="col-4"><label class="form-label mt-3">Email</label><input v-model="addNhaCungCap.email" type="email" class="form-control" placeholder="Enter Email"></div>
                                        <div class="col-4"><label class="form-label mt-3">Address</label><input v-model="addNhaCungCap.dia_chi" type="email" class="form-control" placeholder="Enter the address"></div>
                                    </div>
                                    <div class="row">
                                        <div class="col-6"><label class="form-label mt-3">TName remembered</label><input v-model="addNhaCungCap.ten_goi_nho" type="text" class="form-control" placeholder="Enter a reminiscent name"></div>
                                        <div class="col-6"><label class="form-label mt-3">Status</label><select v-model="addNhaCungCap.tinh_trang" class="form-control">
                                                <option value="0">Pause</option>
                                                <option value="1">Activity</option>
                                            </select></div>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer"><button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Exit</button><button v-on:click="addNew()" type="button" data-bs-dismiss="modal" class="btn btn-primary">Add New</button></div>
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
import $ from "jquery";
export default {
    name: "nha-cung-cap",
    setup() {
        const store = useStore();
        const status = computed(() => store.state.tinh_trang);
        const dataNhaCungCap = computed(() => store.state.dataNhaCungCap);
        const addNhaCungCap = ref({});
        const editNhacungcap = ref({});
        const delete_nhacungcap = ref({});
        const dia_chi = ref('');
        const search = ref({})


        const addNew = () => {
            axios
                .post("admin/nha-cung-cap/create", addNhaCungCap.value)
                .then((res) => {
                    if (res.data.status == 1) {
                        Toast("success", res.data.message);
                        addNhaCungCap.value = {};
                        store.dispatch("onFetchNhaCungCap");
                    }
                })
                .catch((res) => {
                    $.each(res.response.data.errors, function (k, v) {
                        Toast("error", v[0]);
                    });
                });

        };
        const updateNhaCungCap = () => {
            axios
                .post("admin/nha-cung-cap/update", editNhacungcap.value)
                .then((res) => {
                    if (res.data.status == 1) {
                        Toast("success", res.data.message);
                        $("#edit_category").modal("hide");
                        editNhacungcap.value = {};
                        store.dispatch("onFetchNhaCungCap");
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
                .post("admin/nha-cung-cap/change-status", value)
                .then((res) => {
                    if (res.data.status == 1) {
                        Toast("success", res.data.message);
                        addNhaCungCap.value = {};
                        store.dispatch("onFetchNhaCungCap");
                    }
                })
                .catch((res) => {
                    $.each(res.response.data.errors, function (k, v) {
                        Toast("error", v[0]);
                    });
                });
        };
        const deleteNhaCungCap = () => {
            axios
                .post("admin/nha-cung-cap/delete", delete_nhacungcap.value)
                .then((res) => {
                    if (res.data.status == 1) {
                        Toast("success", res.data.message);
                        $("#delete_category").modal("hide");
                        addNhaCungCap.value = {};
                        store.dispatch("onFetchNhaCungCap");
                    }
                })
                .catch((res) => {
                    $.each(res.response.data.errors, function (k, v) {
                        Toast("error", v[0]);
                    });
                });
        };

        function searchNhaCungCap() {
            axios
                .post('admin/nha-cung-cap/tim-nha-cung-cap', search.value)
                .then((res) => {
                    console.log(res.data.data);
                    store.commit('fecthNhaCungCap', res.data.data);
                });
        }
        onMounted(() => {
            store.dispatch("onFetchNhaCungCap");
        });

        return {
            status,
            addNew,
            dataNhaCungCap,
            addNhaCungCap,
            dia_chi,
            updateNhaCungCap,
            editNhacungcap,
            changeStatus,
            delete_nhacungcap,
            deleteNhaCungCap,
            search,
            searchNhaCungCap,

        };
    },
}
</script>

<style >

</style>
