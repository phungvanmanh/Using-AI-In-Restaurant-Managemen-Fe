<template>
<div class="container-fulid">
    <div class="row">
        <div class="col-4">
            <div class="card">
                <div class="card-header">
                    <h5 class="pt-3"><b>Add an article category</b></h5>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-12">
                            <label for="">Article Category Name</label>
                            <input @keyup="convertToSlug(addChuyenMucBaiViet)" v-model="addChuyenMucBaiViet.ten_chuyen_muc" type="text" class="form-control mt-2">
                        </div>
                    </div>
                    <div class="row mt-2">
                        <div class="col-12">
                            <label for="">Slug Article Categories</label>
                            <input v-model="addChuyenMucBaiViet.slug_chuyen_muc" disabled type="text" class="form-control mt-2">
                        </div>
                    </div>
                    <div class="row mt-2">
                        <div class="col-12">
                            <label for="">Status</label>
                            <select v-model="addChuyenMucBaiViet.tinh_trang" name="" id="" class="form-control mt-2">
                                <option value="1">Display</option>
                                <option value="0">Pause</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="card-footer text-end">
                    <button v-on:click="addNew()" class="btn btn-primary">Add New</button>
                </div>
            </div>
        </div>
        <div class="col-8">
            <div class="card border-top border-0 border-4 border-primary">
                <div class="card-header">
                    <h5 class="pt-3"><b>Article category list</b></h5>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th colspan="100%">
                                        <div class="input-group mb-3">
                                            <input type="text" class="form-control">
                                            <button class="btn btn-primary">
                                                <i class="fa-solid fa-magnifying-glass"></i>
                                            </button>
                                        </div>
                                    </th>
                                </tr>
                                <tr>
                                    <th class="text-center align-middle text-nowrap">
                                        #
                                    </th>
                                    <th class="text-center align-middle text-nowrap">
                                        Article Category Name
                                    </th>
                                    <th class="text-center align-middle text-nowrap">
                                        Slug Article Categories
                                    </th>
                                    <th class="text-center align-middle text-nowrap">
                                        Status
                                    </th>
                                    <th class="text-center align-middle text-nowrap">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(value,key) in dataChuyenMucBaiViet" :key="key">
                                    <th class="text-center align-middle text-nowrap">{{key+1}}</th>
                                    <td class="text-center align-middle text-nowrap">{{value.ten_chuyen_muc}}</td>
                                    <td class="text-center align-middle text-nowrap">{{value.slug_chuyen_muc}}</td>
                                    <td class="text-center align-middle text-nowrap">
                                        <button @click="changeStatus(value)"  v-if="value.tinh_trang == 1" class="btn btn-success">Display</button>
                                        <button   @click="changeStatus(value)"  v-else class="btn btn-warning">Pause</button>
                                    </td>
                                    <td class="text-center align-middle text-nowrap"><button v-on:click="Object.assign(editChuyenMucBaiViet,value)"  class="btn btn-info" data-bs-toggle="modal" data-bs-target="#capNhatModal" style="width: 100px; margin-right: 4px;">Update</button><button v-on:click="Object.assign(deletechuyenmucbaiviet,value)" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#xoaModal" style="width: 100px;">Delete</button></td>
                                </tr>

                            </tbody>
                        </table>
                    </div>

                    <div class="modal fade" id="capNhatModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-lg">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Update Article Categories</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div class="row">
                                        <div class="col-12">
                                            <label for="">Article Category Name</label>
                                            <input v-model="editChuyenMucBaiViet.ten_chuyen_muc" type="text" class="form-control mt-2">
                                        </div>
                                    </div>
                                    <div class="row mt-2">
                                        <div class="col-12">
                                            <label for=""> Slug Article Categories</label>
                                            <input  v-model="editChuyenMucBaiViet.slug_chuyen_muc" disabled type="text" class="form-control mt-2">
                                        </div>
                                    </div>
                                    <div class="row mt-2">
                                        <div class="col-12">
                                            <label for="">Status</label>
                                            <select  v-model="editChuyenMucBaiViet.tinh_trang" class="form-control mt-2">
                                                <option value="1">Display</option>
                                                <option value="0">Pause</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Exit</button>
                                    <button @click="updateChuyenMucBaiViet()" data-bs-dismiss="modal" type="button" class="btn btn-primary">Update</button>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal fade" id="xoaModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Delete an article category</h1>
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
                                                    <p>Do you want to delete <b>{{ deletechuyenmucbaiviet.ten_chuyen_muc }}</b> hey?</p>
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
                                    <button v-on:click="delete_chuyenmucbaiviet()" type="button" class="btn btn-danger" data-bs-dismiss="modal">Delete</button>
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
    name: "chuyen-muc-bai-viet",
    setup() {
        const store = useStore();
        const status = computed(() => store.state.tinh_trang);
        const addChuyenMucBaiViet = ref({});
        const editChuyenMucBaiViet = ref({});
        const deletechuyenmucbaiviet = ref({});

        const dataChuyenMucBaiViet = computed(() => {
            return store.state.dataChuyenMucBaiViet;
        });

        function convertToSlug(obj) {
            obj.slug_chuyen_muc = store.getters.toSlug(obj.ten_chuyen_muc);
        }

        const addNew = () => {
            axios
                .post("admin/chuyen-muc-bai-viet/create", addChuyenMucBaiViet.value)
                .then((res) => {
                    if (res.data.status == 1) {
                        Toast("success", res.data.message);
                        addChuyenMucBaiViet.value = {};
                        store.dispatch("onFetchChuyenMucBaiViet");
                    }
                })
                .catch((res) => {
                    $.each(res.response.data.errors, function (k, v) {
                        Toast("error", v[0]);
                    });
                });

        };
        const updateChuyenMucBaiViet = () => {
            axios
                .post("admin/chuyen-muc-bai-viet/update", editChuyenMucBaiViet.value)
                .then((res) => {
                    if (res.data.status == 1) {
                        Toast("success", res.data.message);
                        // $("#edit_category").modal("hide");
                        editChuyenMucBaiViet.value = {};
                        store.dispatch("onFetchChuyenMucBaiViet");
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
                .post("admin/chuyen-muc-bai-viet/status", value)
                .then((res) => {
                    if (res.data.status == 1) {
                        Toast("success", res.data.message);
                        addChuyenMucBaiViet.value = {};
                        store.dispatch("onFetchChuyenMucBaiViet");
                    }
                })
                .catch((res) => {
                    $.each(res.response.data.errors, function (k, v) {
                        Toast("error", v[0]);
                    });
                });
        };
        const delete_chuyenmucbaiviet = () => {
            axios
                .post("admin/chuyen-muc-bai-viet/delete", deletechuyenmucbaiviet.value)
                .then((res) => {
                    if (res.data.status == 1) {
                        Toast("success", res.data.message);
                        // $("#delete_category").modal("hide");
                        deletechuyenmucbaiviet.value = {};
                        store.dispatch("onFetchChuyenMucBaiViet");
                    }
                })
                .catch((res) => {
                    $.each(res.response.data.errors, function (k, v) {
                        Toast("error", v[0]);
                    });
                });
        };
        onMounted(() => {
            store.dispatch("onFetchChuyenMucBaiViet");
        });
        return {
            dataChuyenMucBaiViet,
            addChuyenMucBaiViet,
            editChuyenMucBaiViet,
            delete_chuyenmucbaiviet,
            deletechuyenmucbaiviet,
            addNew,
            updateChuyenMucBaiViet,
            status,
            convertToSlug,
            changeStatus,
        };
    },
}
</script>

<style >

</style>
