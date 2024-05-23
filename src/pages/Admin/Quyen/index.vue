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
        <div class="col-xl-9 col-lg-9 col-md-9 col-sm-12">
            <CardComponent :required="false">
                <template #card-header>
                    <span><b>List Of Permission</b></span>
                </template>
                <template #card-body>
                    <TableComponent>
                        <template #thead>
                            <tr>
                                <th class="text-center align-middle text-nowrap">
                                    #
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
                                     {{ key+1 }}
                                    </td>
                                    <td class="align-middle text-nowrap">{{ value.name_permission }}</td>
                                    <td class="align-middle text-nowrap">{{ fortmatNumber(value.amount) }} VND </td>
                                    <td class="text-center align-middle text-nowrap">
                                        <button class="btn btn-success me-2" data-bs-toggle="modal" data-bs-target="#exampleModal" @click="Object.assign(editQuyen, value); getPhanQuyenDetail(value.list_id_function)">Grant of Permission</button>
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
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Functions</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <template v-for="(value, key) in list_phan_quyen" :key="key">
                            <div class="col-md-3">
                                <div class="form-check">
                                    <input class="form-check-input" v-model="array_quyen" type="checkbox" v-bind:value="value.id" v-bind:id="'quyen_' + value.id">
                                    <label class="form-check-label" v-bind:for="'quyen_' +  value.id">{{ value.ten_chuc_nang }}</label>
                                </div>
                            </div>
                        </template>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" v-on:click="phanQuyen()">Save</button>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CardComponent from "@/components/CardComponent.vue";
import InputComponent from "@/components/InputComponent.vue";
// import CheckBoxComponent from "@/components/CheckBoxComponent.vue";
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
        // CheckBoxComponent,
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
        const array_quyen = ref([]);
        const list_phan_quyen = ref([]);

        const addNew = () => {
            axios
                .post('admin/quyen/create', addQuyen.value,'admin')
                .then((res) => {
                    if (res.data.status == 1) {
                        Toast('success', res.data.message);
                        addQuyen.value = {};
                        store.dispatch("onFetchQuyen");
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
                        store.dispatch("onFetchQuyen");
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
                        store.dispatch("onFetchQuyen");
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

        const loadDataQuyen = () => {
            axios
                .get('admin/quyen/get-data-chuc-nang')
                .then((res) => {
                    list_phan_quyen.value  =  res.data.data;
                });
        }

        const getPhanQuyenDetail = (list_rule) => {
            if (list_rule) {
                if ( list_rule.indexOf(","))
                    array_quyen.value = list_rule.split(",");
                else {
                    array_quyen.value.push(list_rule);
                }
            } else {
                array_quyen.value = [];
            }
        }

        const phanQuyen = () => {
            var payload = {
                'id_quyen'          : editQuyen.value.id,
                'list_phan_quyen'   : array_quyen.value,
            };
            axios
                .post('admin/quyen/phan-quyen', payload)
                .then((res) => {
                    if(res.data.status) {
                        Toast("success", res.data.message);
                        $('#exampleModal').modal('hide');
                        store.dispatch("onFetchQuyen");
                    } else {
                        Toast("error", res.data.message);
                    }
                })
                .catch((res) => {
                    $.each(res.response.data.errors, function (k, v) {
                        Toast("error", v[0]);
                    });
                });
        }
 
        onMounted(() => {
            store.dispatch("onFetchQuyen");
            loadDataQuyen();
        })

        return { status, dataQuyen, list_phan_quyen, addQuyen, editQuyen, array_quyen, deletePermission, addNew, updateQuyen, deleteQuyen,fortmatNumber, getPhanQuyenDetail, phanQuyen };
    },
};
</script>

<style></style>
