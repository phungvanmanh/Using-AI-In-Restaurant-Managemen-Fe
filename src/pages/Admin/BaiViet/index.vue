<template lang="">
<div class="container-fuild">
    <div class="row mb-3">
        <div class="col-12 text-end"><button class="btn btn-outline-primary px-5 radius-30" data-bs-toggle="modal" data-bs-target="#themMoiModal"><b>Add New</b></button></div>
    </div>
    <div class="modal fade" id="themMoiModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Add a new post</h1><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="row">
                            <div class="col-4"><label class="form-label">Headline</label><input v-model="addBaiViet.tieu_de_bai_viet" @keyup="convertToSlug(addBaiViet)" type="text" class="form-control" placeholder="Nhập Tiêu Đề"></div>
                            <div class="col-4"><label class="form-label">Slug Headline</label><input v-model="addBaiViet.slug_bai_viet" type="text" disabled="" class="form-control" placeholder="Nhập Slug Tiêu Đề"></div>
                            <div class="col-4"><label class="form-label">Image</label><input v-model="addBaiViet.hinh_anh_bai_viet" type="text" class="form-control" placeholder="Nhập Hình Ảnh"></div>
                        </div>
                        <div class="row">
                            <div class="col-6"><label class="form-label mt-3">Short description</label><input v-model="addBaiViet.mo_ta_ngan_bai_viet" type="text" class="form-control" placeholder="Nhập Mô Tả Ngắn"></div>
                            <div class="col-6"><label class="form-label mt-3">Article Categories </label>
                                <select v-model="addBaiViet.id_chuyen_muc_bai_viet" class="form-select mb-3">
                                    <template v-for="(value,key) in dataChuyenMucBaiViet" :key="key">
                                        <option v-if="value.tinh_trang ==1" v-bind:value="value.id">{{value.ten_chuyen_muc}}</option>
                                    </template>
                                </select>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-6"><label class="form-label mt-3">Detailed description</label><textarea v-model="addBaiViet.mo_ta_chi_tiet_bai_viet" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea></div>
                            <div class="col-6"><label class="form-label mt-3">Status</label><select v-model="addBaiViet.tinh_trang" class="form-control">
                                    <option value="0">Pause</option>
                                    <option value="1">Activity</option>
                                </select></div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer"><button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Exit</button><button v-on:click="addNew()" type="button" class="btn btn-primary" data-bs-dismiss="modal">Add New</button></div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="card border-top border-0 border-4 border-primary">
            <div class="card-header">
                <h5>Article listing</h5>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th colspan="100%">
                                    <div class="input-group mb-3"><input  v-on:keyup.enter="searchBaiViet()" v-model="search.abc" type="text" class="form-control" placeholder="Nhập thông tin cần tìm"><button v-on:click="searchBaiViet()" class="btn btn-primary"><i class="fa-solid fa-magnifying-glass"></i></button></div>
                                </th>
                            </tr>
                            <tr>
                                <th class="text-center align-middle text-nowrap"> # </th>
                                <th class="text-center align-middle text-nowrap"> Headline </th>
                                <th class="text-center align-middle text-nowrap"> Image </th>
                                <th class="text-center align-middle text-nowrap"> Short descriptio </th>
                                <th class="text-center align-middle text-nowrap"> Detailed description </th>
                                <th class="text-center align-middle text-nowrap">Article Categories</th>
                                <th class="text-center align-middle text-nowrap"> Status</th>
                                <th class="text-center align-middle text-nowrap"> Action </th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr v-for="(value,key) in dataBaiViet" :key="key">
                                <td class="text-center align-middle text-nowrap"> {{key+1}} </td>
                                <td class="text-center align-middle text-nowrap">{{value.tieu_de_bai_viet}}</td>
                                <td class="text-center align-middle text-nowrap"><img v-bind:src="value.hinh_anh_bai_viet" height="50" alt=""></td>
                                <td class="text-center align-middle text-nowrap">{{value.mo_ta_ngan_bai_viet}}</td>
                                <td class="text-center align-middle text-nowrap"><button v-on:click="mo_ta_chi_tiet_bai_viet = value" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#moTaChiTietModal"><i class="fa-solid fa-circle-info"></i></button></td>
                                <td class="text-center align-middle text-nowrap"> {{value.ten_chuyen_muc}}</td>
                                <td class="text-center align-middle text-nowrap">
                                    <button v-if="value.tinh_trang == 1" class="btn btn-success">Activity</button>
                                    <button v-else class="btn btn-warning">Pause</button>
                                </td>
                                <td class="text-center align-middle text-nowrap">
                                    <button v-on:click="Object.assign(editBaiViet, value)" class="btn btn-info" style="width: 100px; margin-right: 4px;" data-bs-toggle="modal" data-bs-target="#capNhatModal">Cập
                                        Nhật</button>
                                    <button  v-on:click="Object.assign(deleteBaiViet, value)" class="btn btn-danger" style="width: 100px;" data-bs-toggle="modal" data-bs-target="#xoaModal">Xóa</button>
                                </td>

                            </tr>

                        </tbody>
                    </table>
                </div>
                <div class="modal fade" id="capNhatModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-xl">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Article Updates</h1><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="row">
                                    <div class="row">
                                        <div class="col-4"><label class="form-label">Headline</label><input v-model="editBaiViet.tieu_de_bai_viet" @keyup="convertToSlug(editBaiViet)" type="text" class="form-control" placeholder="Nhập Tiêu Đề"></div>
                                        <div class="col-4"><label class="form-label">Slug Headline</label><input v-model="editBaiViet.slug_bai_viet" type="text" disabled="" class="form-control" placeholder="Nhập Slug Tiêu Đề"></div>
                                        <div class="col-4"><label class="form-label">Image</label><input v-model="editBaiViet.hinh_anh_bai_viet" type="text" class="form-control" placeholder="Nhập Hình Ảnh"></div>
                                    </div>
                                    <div class="row">
                                        <div class="col-6"><label class="form-label mt-3">Short description</label><input v-model="editBaiViet.mo_ta_ngan_bai_viet" type="text" class="form-control" placeholder="Nhập Mô Tả Ngắn"></div>
                                        <div class="col-6"><label class="form-label mt-3">Article Categories </label>
                                            <select v-model="editBaiViet.id_chuyen_muc_bai_viet" class="form-select mb-3">
                                                <template v-for="(value,key) in dataChuyenMucBaiViet" :key="key">
                                                    <option v-if="value.tinh_trang ==1" v-bind:value="value.id">{{value.ten_chuyen_muc}}</option>
                                                </template>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-6"><label class="form-label mt-3">Detailed description</label><textarea v-model="editBaiViet.mo_ta_chi_tiet_bai_viet" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea></div>
                                        <div class="col-6"><label class="form-label mt-3">Status</label><select v-model="editBaiViet.tinh_trang" class="form-control">
                                                <option value="0">Pause</option>
                                                <option value="1">Activity</option>
                                            </select></div>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer"><button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Exit</button><button v-on:click="updateBaiViet()" type="button" data-bs-dismiss="modal" class="btn btn-primary">Update</button></div>
                        </div>
                    </div>
                </div>
                <div class="modal fade" id="xoaModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Delete a post</h1><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="alert alert-warning border-0 bg-warning alert-dismissible fade show py-2">
                                    <div class="d-flex align-items-center">
                                        <div class="font-35 text-dark"><i class="bx bx-info-circle"></i></div>
                                        <div class="ms-3">
                                            <h6 class="mb-0 text-dark">Warning</h6>
                                            <div class="text-dark">
                                                <p>Do you want to delete the Post <b>{{deleteBaiViet.tieu_de_bai_viet}}</b> hey no?</p>
                                                <p><b>Note:</b> This cannot be undone! </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer"><button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Exit</button><button v-on:click="delete_baiviet()" type="button" class="btn btn-danger" data-bs-dismiss="modal">Delete</button></div>
                        </div>
                    </div>
                </div>
                <div class="modal fade" id="moTaChiTietModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Detailed description</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                {{ mo_ta_chi_tiet_bai_viet.mo_ta_chi_tiet_bai_viet }}
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Exit</button>
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
    name: "bai-viet",
    setup() {
        const store = useStore();
        const status = computed(() => store.state.tinh_trang);
        const addBaiViet = ref({});
        const editBaiViet = ref({});
        const deleteBaiViet = ref({});
        const mo_ta_chi_tiet_bai_viet = ref('');
        const search = ref({});
        const dataBaiViet = computed(() => {
            return store.state.dataBaiViet;
        });
        const dataChuyenMucBaiViet = computed(() => {
            return store.state.dataChuyenMucBaiViet;
        });
        const addNew = () => {
            axios
                .post("admin/bai-viet/tao-bai-viet", addBaiViet.value)
                .then((res) => {
                    if (res.data.status == 1) {
                        Toast("success", res.data.message);
                        addBaiViet.value = {};
                        store.dispatch("onFetchBaiViet");
                    }
                })
                .catch((res) => {
                    $.each(res.response.data.errors, function (k, v) {
                        Toast("error", v[0]);
                    });
                });

        };

        const updateBaiViet = () => {
            axios
                .post("admin/bai-viet/update", editBaiViet.value)
                .then((res) => {
                    if (res.data.status == 1) {
                        Toast("success", res.data.message);
                        $("#edit_area").modal("hide");
                        editBaiViet.value = {};
                        store.dispatch("onFetchBaiViet");
                    }
                })
                .catch((res) => {
                    $.each(res.response.data.errors, function (k, v) {
                        Toast("error", v[0]);
                    });
                });
        };
        const delete_baiviet = () => {
            axios
                .post("admin/bai-viet/delete", deleteBaiViet.value)
                .then((res) => {
                    if (res.data.status == 1) {
                        Toast("success", res.data.message);
                        $("#delete_area").modal("hide");
                        store.dispatch("onFetchBaiViet");
                    }
                })
                .catch((res) => {
                    $.each(res.response.data.errors, function (k, v) {
                        Toast("error", v[0]);
                    });
                });
        };

        const convertToSlug = (obj) => {
            obj.slug_bai_viet = store.getters.toSlug(obj.tieu_de_bai_viet);
        };
        function searchBaiViet() {
            axios
                .post('admin/bai-viet/tim-bai-viet', search.value)
                .then((res) => {
                    console.log(res.data.data);
                    store.commit('fecthBaiViet', res.data.data);
                });
        }
        onMounted(() => {
            store.dispatch("onFetchBaiViet");
            store.dispatch("onFetchChuyenMucBaiViet");
        });
        return {
            status,
            addBaiViet,
            addNew,
            convertToSlug,
            dataBaiViet,
            mo_ta_chi_tiet_bai_viet,
            dataChuyenMucBaiViet,
            editBaiViet,
            updateBaiViet,
            deleteBaiViet,
            delete_baiviet,
            searchBaiViet,
            search,
            
        };
    },
}
</script>

<style lang="">

</style><style>
.btn-outline-primary {
    position: relative;
}

.btn-outline-primary::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    background-color: rgba(163, 113, 163, 0.5);
    /* Màu của hiệu ứng xoay tròn */
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s, transform 0.3s;
    /* Transition cho opacity và transform */
    border-radius: 50%;
}

.btn-outline-primary:hover::before {
    opacity: 1;
    transform: scale(1.2);
    /* Phóng to lên 120% khi rê chuột vào */
}
</style>
