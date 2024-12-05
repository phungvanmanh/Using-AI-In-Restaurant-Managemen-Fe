<template>
<div class="row">
    <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12">
        <CardComponentVue>
            <template #card-header>
                <span><b>Dish</b></span>
            </template>
            <template #card-body>
                <InputComponentVue label="Food's name" v-model="addMonAn.food_name" placeholder=" Enter food's name...">
                </InputComponentVue>
                <InputComponentVue label="Price" type="number" placeholder="Enter price..." v-model="addMonAn.price">
                </InputComponentVue>
                <InputComponentVue label="Image" placeholder="Enter Image..." v-model="addMonAn.image">
                </InputComponentVue>
                <SelectComponentVue v-model="addMonAn.status" label="Tình Trạng" :options="tinhTrang"></SelectComponentVue>
                <SelectComponentVue v-model="addMonAn.id_category" label="Category" :options="id_danhmuc"></SelectComponentVue>
            </template>
            <template #card-footer>
                <button class="btn btn-primary float-end" @click="createMonAn()">
                    Add New
                </button>
            </template>
        </CardComponentVue>
    </div>
    <div class="col-xl-9 col-lg-9 col-md-9 col-sm-12">
        <CardComponentVue :required="false">
            <template #card-header>
                <b> List of dishes</b>
            </template>
            <template #card-body>
                <TableComponentVue>

                    <template #thead>
                        <tr>
                            <th colspan="100%">
                                <div class="input-group mb-3">
                                    <input v-on:keyup.enter="searchMonAn()" v-model="search.abc" type="text" class="form-control" placeholder="Enter what you're looking for" /><button v-on:click="searchMonAn()" class="btn btn-primary">
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
                                Food's name
                            </th>
                            <th class="text-center align-middle text-nowrap">
                                Price
                            </th>
                            <th class="text-center align-middle text-nowrap">
                                Image
                            </th>
                            <th class="text-center align-middle text-nowrap">
                                Status
                            </th>
                            <th class="text-center align-middle text-nowrap">
                                Category
                            </th>
                            <th class="text-center align-middle text-nowrap">
                                Action
                            </th>
                        </tr>
                    </template>
                    <template #tbody>
                        <template v-for="(value, index) in dataMonAn" :key="index">
                            <tr>
                                <td class="text-center align-middle text-nowrap">
                                    {{ index + 1 }}
                                </td>
                                <td class="text-center align-middle text-nowrap">
                                    {{ value.food_name }}
                                </td>
                                <td class="text-center align-middle text-nowrap">
                                    {{ formatToVN(value.price) }}
                                </td>
                                <td class="text-center align-middle text-nowrap">
                                    <img v-bind:src="value.image" height="50" width="50" alt="">
                                </td>
                                <td class="text-center align-middle text-nowrap">
                                    <template v-if="value.status == 1">
                                        <button @click="changeStatus(value)" class="btn btn-success">
                                          Display
                                        </button>
                                    </template>
                                    <template v-else>
                                        <button @click="changeStatus(value)" class="btn btn-info">
                                            Pause
                                        </button>
                                    </template>
                                </td>
                                <td class="text-center align-middle text-nowrap">
                                    {{ value.name_category }}
                                </td>
                                <td class="text-center align-middle text-nowrap">
                                    <ModalComponentVue titleId="edit_monan" color="info" label="Edit Dish" @click="
                                                Object.assign(editMonAn, value)
                                            ">
                                        <template #modal-header>Edit</template>
                                        <template #modal-body>
                                            <InputComponentVue label="Food's name" v-model="
                                                        editMonAn.food_name
                                                    " placeholder=" Enter food's name...">
                                            </InputComponentVue>
                                            <InputComponentVue label="Price" placeholder="Enter price..." v-model="editMonAn.price">
                                            </InputComponentVue>
                                            <SelectComponentVue v-model="editMonAn.status" label="Tình Trạng" :options="tinhTrang"></SelectComponentVue>
                                            <SelectComponentVue v-model="
                                                        editMonAn.id_category
                                                    " label="Category" :options="id_danhmuc"></SelectComponentVue>
                                        </template>
                                        <template #modal-footer>
                                            <button style="margin-right: 10px" @click="updateMonAn()" class="btn btn-primary">
                                                Update
                                            </button>
                                            <button class="btn btn-danger" data-bs-dismiss="modal">
                                                Close
                                            </button>
                                        </template>
                                    </ModalComponentVue>
                                    <ModalComponentVue titleId="xoa_mon_an" @click="
                                                Object.assign(
                                                    deletemonan,
                                                    value
                                                )
                                            " color="danger" label="Delete Dish">
                                        <template #modal-header>Delete Food</template>
                                        <template #modal-body>
                                            Are you sure you want to delete
                                            <span><b><i class="text-danger">{{
                                                                deletemonan.food_name
                                                            }}</i></b></span>
                                            off the list or not?
                                        </template>
                                        <template #modal-footer>
                                            <button class="btn btn-success" @click="deleteMonAn()">
                                                Accept
                                            </button>
                                            <button class="btn btn-danger" data-bs-dismiss="modal">
                                                Close
                                            </button>
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
</template>

<script>
import CardComponentVue from "@/components/CardComponent.vue";
import InputComponentVue from "@/components/InputComponent.vue";
import SelectComponentVue from "@/components/SelectComponent.vue";
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
import TableComponentVue from "@/components/TableComponent.vue";
import ModalComponentVue from "@/components/ModalComponent.vue";
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
        const search = ref({});
        const deletemonan = ref({});
        const id_danhmuc = computed(() => {
            return store.state.dataDanhMuc
                .filter((item) => item.status == 1)
                .map((item) => ({
                    text: item.name_category,
                    value: item.id,
                    tinh_trang: item.status,
                }));
        });
        const tinhTrang = computed(() => store.state.tinh_trang);

        function createMonAn() {
            axios
                .post("admin/mon-an/create", addMonAn.value,'admin')
                .then((res) => {
                    if (res.data.status == true) {
                        Toast("success", res.data.message);
                        addMonAn.value = {};
                        store.dispatch("onFetchMonAn"); //call api store == onFetchChuyenMuc
                    }else {
                        Toast("error", res.data.message);
                    }
                })
                .catch((res) => {
                    $.each(res.response.data.errors, function (k, v) {
                        Toast("error", v[0]);
                    });
                });
        }

        function updateMonAn() {
            axios
                .post("admin/mon-an/update", editMonAn.value,'admin')
                .then((res) => {
                    if (res.data.status == true) {
                        Toast("success", res.data.message);
                        $("#edit_monan").modal("toggle");
                        editMonAn.value = {};
                        store.dispatch("onFetchMonAn"); //call api store == onFetchChuyenMuc
                    }else {
                        Toast("error", res.data.message);
                    }
                })
                .catch((res) => {
                    $.each(res.response.data.errors, function (k, v) {
                        Toast("error", v[0]);
                    });
                });
        }

        function changeStatus(value) {
            axios
                .post("admin/mon-an/change-status", value,'admin')
                .then((res) => {
                    if (res.data.status == true) {
                        Toast("success", res.data.message);
                        store.dispatch("onFetchMonAn"); //call api store == onFetchChuyenMuc
                    }else {
                        Toast("error", res.data.message);
                    }
                })
                .catch((res) => {
                    $.each(res.response.data.errors, function (k, v) {
                        Toast("error", v[0]);
                    });
                });
        }

        function deleteMonAn() {
            console.log(deletemonan.value);
            axios
                .post("admin/mon-an/delete", deletemonan.value,'admin')
                .then((res) => {
                    if (res.data.status == 1) {
                        Toast("success", res.data.message);
                        store.dispatch("onFetchMonAn"); //call api store == onFetchChuyenMuc
                        $("#xoa_mon_an").modal('hide');
                    }else {
                        Toast("error", res.data.message);
                    }
                })
                .catch((res) => {
                    $.each(res.response.data.errors, function (k, v) {
                        Toast("error", v[0]);
                    });
                });
        }

        function searchMonAn() {
            axios
                .post('admin/mon-an/tim-mon', search.value,'admin')
                .then((res) => {
                    console.log(res.data.data);
                    store.commit('fecthMonAn', res.data.data);
                });
        }
        const dataMonAn = computed(() => store.state.dataMonAn);
        function formatToVN (number) {
            number = parseInt(number);
            return number.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
        }

        onMounted(() => {
            store.dispatch("onFetchMonAn");
            store.dispatch("onFetchDanhMuc");
        });

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
            searchMonAn,
            search,
            formatToVN
        };
    },
};
</script>
