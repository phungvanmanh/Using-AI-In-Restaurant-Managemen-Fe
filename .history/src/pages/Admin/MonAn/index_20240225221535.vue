<template>
<div>
    <div class="row">
        <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12">
            <CardComponentVue>
                <template #card-header>
                    <span><b>Dish</b></span>
                </template>
                <template #card-body>
                    <InputComponentVue label="Food's name" v-model="addMonAn.food_name" placeholder=" Enter food's name...">
                    </InputComponentVue>
                    <InputComponentVue label="Price" placeholder="Enter price..." v-model="addMonAn.price">
                    </InputComponentVue>
                    <SelectComponentVue v-model="addMonAn.status" label="Tình Trạng" :options="tinhTrang"></SelectComponentVue>
                    <SelectComponentVue v-model="addMonAn.id_category" label="Category" :options="id_danhmuc"></SelectComponentVue>

                </template>
                <template #card-footer>
                    <button class="btn btn-primary float-end" @click="createMonAn()">Add New</button>
                </template>
            </CardComponentVue>
        </div>
        <div class="col-xl-9 col-lg-9 col-md-9 col-sm-12">
            <CardComponentVue :required="0">
                <template #card-header>
                    <b> List of dishes</b>
                </template>
                <template #card-body>
                    <TableComponentVue>
                        <template #thead>
                            <tr>
                                <th class="text-center align-middle text-nowrap">#</th>
                                <th class="text-center align-middle text-nowrap">Food's name</th>
                                <th class="text-center align-middle text-nowrap">Price</th>
                                <th class="text-center align-middle text-nowrap">Tình Trạng</th>
                                <th class="text-center align-middle text-nowrap">Category</th>
                                <th class="text-center align-middle text-nowrap">Action</th>
                            </tr>
                        </template>
                        <template #tbody>
                            <template v-for="(value,index) in dataMonAn" :key="index">
                                <tr>
                                    <td class="text-center align-middle text-nowrap">{{ index +1 }}</td>
                                    <td class="text-center align-middle text-nowrap">{{ value.food_name }}</td>
                                    <td class="text-center align-middle text-nowrap">{{ value.price }}</td>
                                    <td class="text-center align-middle text-nowrap">
                                        <template v-if="value.status==1">
                                            <button @click="changeStatus(value)" class="btn btn-success">Hiển thị</button>
                                        </template>
                                        <template v-else>
                                            <button @click="changeStatus(value)" class="btn btn-info">Tạm Tắt</button>
                                        </template>
                                    </td>
                                    <td class="text-center align-middle text-nowrap">{{ value.id_category }}</td>
                                    <td class="text-center align-middle text-nowrap">
                                        <ModalComponentVue titleId="edit_monan" color="info" label="Edit Dish" @click="Object.assign(editMonAn,value)">
                                            <template #modal-header>Chỉnh Sửa</template>
                                            <template #modal-body>
                                                <InputComponentVue label="Food's name" v-model="editMonAn.food_name" placeholder=" Enter food's name...">
                                                </InputComponentVue>
                                                <InputComponentVue label="Price" placeholder="Enter price..." v-model="editMonAn.price">
                                                </InputComponentVue>
                                                <SelectComponentVue v-model="editMonAn.status" label="Tình Trạng" :options="tinhTrang"></SelectComponentVue>
                                                <SelectComponentVue v-model="editMonAn.id_category" label="Category" :options="id_danhmuc"></SelectComponentVue>
                                            </template>
                                            <template #modal-footer>
                                                <button style="margin-right: 10px;" @click="updateMonAn()" class="btn btn-primary">Update</button>
                                                <button class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                                            </template>
                                        </ModalComponentVue>
                                        <ModalComponentVue class="text-center" titleId="xoaMonAn" @click="Object.assign(deletemonan,value)" color="danger" label="Delete Dish">
                                            <template #modal-header>Xóa Món</template>
                                            <template #modal-body>
                                                Bạn có chắc chắn muốn xóa <span><b><i class="text-danger">{{ deletemonan.food_name }}</i></b></span> ra khỏi danh sách hay không?
                                            </template>
                                            <template #modal-footer>
                                                <button class="btn btn-success" @click="deleteMonAn()">Accept</button>
                                                <button class="btn btn-danger" data-bs-dismiss="modal">Close</button>

                                            </template>
                                        </ModalComponentVue>
                                    </td>
                                </tr>
                            </template>
                        </template>
                    </TableComponentVue>
                </template>
            </CardComponentVue>
        </div>
    </div>
</div>
</template>

<script>
import CardComponentVue from '@/components/CardComponent.vue'
import InputComponentVue from '@/components/InputComponent.vue'
import SelectComponentVue from '@/components/SelectComponent.vue'
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
import TableComponentVue from '@/components/TableComponent.vue'
import ModalComponentVue from '@/components/ModalComponent.vue'
export default {
    name: "mon-an",
    components: {
        CardComponentVue,
        InputComponentVue,
        SelectComponentVue,
        TableComponentVue,
        ModalComponentVue,

    },
    setup() {
        const store = useStore();
        const addMonAn = ref({});
        const editMonAn = ref({});
        const deletemonan = ref({});
        const id_danhmuc = computed(() => {
            reutrn store.state.dataDanhMuc;
        })
        const tinhTrang = computed(() => store.state.tinh_trang);

        function createMonAn() {
            axios
                .post('admin/mon-an/create', addMonAn.value)
                .then((res) => {
                    if (res.data.status == true) {
                        Toast('success', res.data.message);
                        addMonAn.value = {};
                        store.dispatch("onFetchMonAn"); //call api store == onFetchChuyenMuc
                    }
                })
                .catch((res) => {
                    $.each(res.response.data.errors, function (k, v) {
                        Toast('error', v[0]);
                    });
                });
        }

        function updateMonAn() {
            axios
                .post('admin/mon-an/update', editMonAn.value)
                .then((res) => {
                    if (res.data.status == true) {
                        Toast('success', res.data.message);
                        $('#edit_monan').modal('toggle');
                        editMonAn.value = {};
                        store.dispatch("onFetchMonAn"); //call api store == onFetchChuyenMuc
                    }
                })
                .catch((res) => {
                    $.each(res.response.data.errors, function (k, v) {
                        Toast('error', v[0]);
                    });
                });
        }

        function changeStatus(value) {
            axios
                .post('admin/mon-an/change-status', value)
                .then((res) => {
                    if (res.data.status == true) {
                        Toast('success', res.data.message);
                        store.dispatch("onFetchMonAn"); //call api store == onFetchChuyenMuc
                    }
                })
                .catch((res) => {
                    $.each(res.response.data.errors, function (k, v) {
                        Toast('error', v[0]);
                    });
                });
        }
        function deleteMonAn(value) {
            axios
                .post('admin/mon-an/delete', value)
                .then((res) => {
                    if (res.data.status == 1) {
                        Toast('success', res.data.message);
                        store.dispatch("onFetchMonAn"); //call api store == onFetchChuyenMuc
                    }
                })
                .catch((res) => {
                    $.each(res.response.data.errors, function (k, v) {
                        Toast('error', v[0]);
                    });
                });
        }
        const dataMonAn = computed(() => store.state.dataMonAn);

        onMounted(() => {
            store.dispatch("onFetchMonAn");
        })

        return {
            tinhTrang,
            addMonAn,
            editMonAn,
            deletemonan,
            id_danhmuc,
            dataMonAn,
            createMonAn,
            changeStatus,
            updateMonAn,
            deleteMonAn,
        }

    }

}
</script>
