<template>
    <div class="row">
        <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12">
            <CardComponent>
                <template #card-header>
                    <span><b>Add Permission</b></span>
                </template>
                <template #card-body>
                    <InputComponent label="Name Permission" v-model="addQuyen.name_permission"/>
                    <SelectComponent label="Status" v-model="addQuyen.status" :options="status"/>
                    <InputComponent label="Enter the amount" v-model="addQuyen.amount" type="number"/>
                </template>
                <template #card-footer>
                    <button class="btn btn-inverse-primary float-end" @click="addNew()">Add news</button>
                </template>
            </CardComponent>
        </div>
        <div class="col-xl-5 col-lg-5 col-md-5 col-sm-12">
            <CardComponent :required="false">
                <template #card-header>
                    <span><b>List Of Permission</b></span>
                </template>
                <template #card-body>
                    <TableComponent>
                        <template #thead>
                            <tr>
                                <th class="text-center align-middle text-nowrap">
                                    <button class="btn btn-inverse-danger">
                                        Delete
                                    </button>
                                </th>
                                <th class="text-center align-middle text-nowrap">Name Permission</th>
                                <th class="text-center align-middle text-nowrap">Saraly</th>
                                <th class="text-center align-middle text-nowrap">Action</th>
                            </tr>
                        </template>
                        <template #tbody>
                            <template v-for="(value, key) in dataQuyen" :key="key">
                                <tr>
                                    <td class="text-center align-middle text-nowrap">
                                        <input type="checkbox" :id="'checkbox-' + key">
                                    </td>
                                    <td class="align-middle text-nowrap">{{ value.name_permission }}</td>
                                    <td class="align-middle text-nowrap">{{ fortmatNumber(value.amount) }} VND </td>
                                    <td class="text-center align-middle text-nowrap">
                                        <button class="btn btn-success me-2">Grant of Permission</button>
                                        <ModalComponent color="info" titleId="edit_quyen" label="Edit" @click="Object.assign(editQuyen, value)">
                                            <template #modal-header>
                                                <span><b>Edit Permission</b></span>
                                            </template>
                                            <template #modal-body>
                                                <InputComponent label="Name Permission" v-model="editQuyen.name_permission"/>
                                                <SelectComponent label="Status" v-model="editQuyen.status" :options="status"/>
                                                <InputComponent label="Enter the amount" v-model="editQuyen.amount" type="number"/>
                                            </template>
                                            <template #modal-footer>
                                                <button class="btn btn-primary" @click="updateQuyen()">
                                                    Update
                                                </button>
                                                <button class="btn btn-secondary" data-bs-dismiss="modal">
                                                    Close
                                                </button>
                                            </template>
                                        </ModalComponent>
                                        <ModalComponent color="danger" titleId="delete_quyen" label="Delete" @click="Object.assign(deletePermission, value)">
                                            <template #modal-header>
                                                <span><b>Delete Permission</b></span>
                                            </template>
                                            <template #modal-body>
                                                <div role="alert" class="alert alert-primary">
                                                    Are you sure you want to remove this: <b class="text-danger">{{ deletePermission.name_permission }}</b> permission?
                                                </div>
                                            </template>
                                            <template #modal-footer>
                                                <button class="btn btn-danger" @click="deleteQuyen()">
                                                    Delete
                                                </button>
                                                <button class="btn btn-secondary" data-bs-dismiss="modal">
                                                    Close
                                                </button>
                                            </template>
                                        </ModalComponent>
                                    </td>
                                </tr>
                            </template>
                        </template>
                    </TableComponent>
                </template>
            </CardComponent>
        </div>
        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
            <CardComponent>
                <template #card-header>
                    <span><b>Separation of Powers</b></span>
                </template>
                <template #card-body>
                    <div class="row">
                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <CheckBoxComponent id="checkbox-1" label="Tạo mới tài khoản"/>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <CheckBoxComponent id="checkbox-1" label="Xem danh sách"/>
                        </div>
                    </div>
                </template>
                <template #card-footer>
                    <div class="text-center">
                        <button class="btn btn-inverse-primary" style="width: 95%;">Update Decentralization</button>
                    </div>
                </template>
            </CardComponent>
        </div>
    </div>
</template>

<script>
import CardComponent from "@/components/CardComponent.vue";
import InputComponent from "@/components/InputComponent.vue";
import CheckBoxComponent from "@/components/CheckBoxComponent.vue";
import TableComponent from "@/components/TableComponent.vue";
import SelectComponent from "@/components/SelectComponent.vue";
import ModalComponent from '@/components/ModalComponent.vue';
import { computed, onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import axios from '@/axiosConfig';
import Toast from "@/toastConfig";
import $ from "jquery";
export default {
    name: "quyen-admin",
    components: {
        CardComponent,
        InputComponent,
        CheckBoxComponent,
        TableComponent,
        SelectComponent,
        ModalComponent
    },
    setup() {
        const store = useStore();
        const status = computed(() => store.state.tinh_trang);
        const addQuyen = ref({});
        const editQuyen = ref({});
        const deletePermission = ref({});
        const dataQuyen = computed(() => store.state.dataQuyen);
        const addNew = () => {
            axios
                .post('admin/quyen/create', addQuyen.value,'admin')
                .then((res) => {
                    if (res.data.status == 1) {
                        Toast('success', res.data.message);
                    }else {
                        Toast("error", res.data.message);
                    }
                })
                .catch((res) => {
                    $.each(res.response.data.errors, function(k, v) {
                        Toast('error', v[0]);
                    });
                });
        }
        
        const updateQuyen = () => {
            axios
                .post('admin/quyen/update', editQuyen.value,'admin')
                .then((res) => {
                    if (res.data.status == 1) {
                        Toast('success', res.data.message);
                        $("#edit_quyen").modal("hide");
                    }else {
                        Toast("error", res.data.message);
                    }
                })
                .catch((res) => {
                    $.each(res.response.data.errors, function(k, v) {
                        Toast('error', v[0]);
                    });
                });
        }

        const deleteQuyen = () => {
            axios
                .post('admin/quyen/delete', deletePermission.value,'admin')
                .then((res) => {
                    if (res.data.status == 1) {
                        Toast('success', res.data.message);
                        $("#delete_quyen").modal("hide");
                    }else {
                        Toast("error", res.data.message);
                    }
                })
                .catch((res) => {
                    $.each(res.response.data.errors, function(k, v) {
                        Toast('error', v[0]);
                    });
                });
        }

        const fortmatNumber = (number) => {
            return  new Intl.NumberFormat('vi-VN').format(
                number,
            )
        }
 
        onMounted(() => {
            store.dispatch("onFetchQuyen");
        })

        return { status, dataQuyen, addQuyen, editQuyen, deletePermission, addNew, updateQuyen, deleteQuyen,fortmatNumber };
    },
};
</script>

<style></style>
