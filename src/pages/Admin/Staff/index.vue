<template>
    <div class="row">
        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <CardComponent :required="false">
                <template #card-header>
                    <div
                        class="row d-flex justify-content-between align-items-center"
                    >
                        <div class="col">
                            <span><b>List of Staff</b></span>
                        </div>
                        <div class="col text-end">
                            <!-- Popup Staff add -->
                            <ModalComponent
                                color="primary"
                                label="Add news"
                                titleId="add_news"
                                sizeModal="modal-lg"
                            >
                                <template #modal-header>
                                    <span><b>Add news Staff</b></span>
                                </template>
                                <template #modal-body>
                                    <div
                                        class="row d-flex justify-content-between align-items-center"
                                    >
                                        <div class="col">
                                            <InputComponent
                                                v-model="addStaff.ho_ten"
                                                
                                                label="First and last name"
                                                placeholder="Enter your first and last name..."
                                            />
                                        </div>
                                        <div class="col">
                                            <InputComponent
                                                v-model="addStaff.so_dien_thoai"
                                                
                                                label="Phone number"
                                                placeholder="(999) 999-9999"
                                                
                                            />
                                        </div>
                                    </div>
                                    <div
                                        class="row d-flex justify-content-between align-items-center"
                                    >
                                        <div class="col">
                                            <InputComponent
                                                v-model="addStaff.ngay_sinh"
                                                label="Date of birth"
                                                type="date"
                                            />
                                        </div>
                                        <div class="col">
                                            <InputComponent
                                                v-model="addStaff.email"
                                                label="Email"
                                                type="email"
                                                placeholder="example@gmail.com"
                                                
                                            />
                                        </div>
                                    </div>
                                    <!-- <InputComponent
                                        v-model="addStaff.password"
                                        label="Password"
                                        type="text"
                                        placeholder="Enter your password..."
                                    /> -->
                                    <div
                                        class="row d-flex justify-content-between align-items-center"
                                    >
                                        <!-- <div class="col">
                                            <SelectComponent
                                                label="Permission"
                                                
                                            />
                                        </div> -->
                                        <InputComponent
                                        v-model="addStaff.ma_nv"
                                        
                                        label="Code Staff"
                                        type="text"
                                    />
                                        <div class="col">
                                            <SelectComponent
                                                v-model="addStaff.status"
                                                label="Status"
                                                :options="tinh_trang"
                                            />
                                        </div>
                                    </div>
                                </template>
                                <template #modal-footer>
                                    <button
                                        class="btn btn-primary" 
                                        @click="addNew()"
                                    >
                                        Add new
                                    </button>
                                    <button
                                        class="btn btn-secondary"
                                        data-bs-dismiss="modal"
                                    >
                                        Close
                                    </button>
                                </template>
                            </ModalComponent>
                            <!-- Popup Staff add -->
                        </div>
                    </div>
                </template>
                <template #card-body>
                        
                    <TableComponent>
                        <template #thead>
                            <tr>
                                <th
                                    class="text-center align-middle text-nowrap"
                                >
                                    #
                                </th>
                                <th
                                    class="text-center align-middle text-nowrap"
                                >
                                    Name
                                </th>
                                <th
                                    class="text-center align-middle text-nowrap"
                                >
                                    Phone Number
                                </th>
                                <th
                                    class="text-center align-middle text-nowrap"
                                >
                                    Date Birth
                                </th>
                                <th
                                    class="text-center align-middle text-nowrap"
                                >
                                    Email
                                </th>
                                <th
                                    class="text-center align-middle text-nowrap"
                                >
                                    Code Staff
                                </th>
                                <th
                                    class="text-center align-middle text-nowrap"
                                >
                                    Status
                                </th>
                                <th
                                    class="text-center align-middle text-nowrap"
                                >
                                    Action
                                </th>
                            </tr>
                        </template>
                        <!-- Display Staff Data  -->
                        <template #tbody>
                            <template v-for="(value, key) in dataStaff" :key="key">
                            <tr>
                                <th
                                        class="text-center align-middle text-nowrap"
                                    >
                                        {{ key + 1 }}
                                    </th>
                                    <td class="align-middle text-nowrap">
                                        {{ value.ho_ten }}
                                    </td>
                                    <td class="align-middle text-nowrap">
                                        {{ value.so_dien_thoai }}
                                    </td>
                                    <td class="align-middle text-nowrap">
                                        {{ value.ngay_sinh }}
                                    </td>
                                    <td class="align-middle text-nowrap">
                                        {{ value.email }}
                                    </td>
                                    <td class="align-middle text-nowrap">
                                        {{ value.ma_nv }}
                                    </td>
                                    <td
                                        class="text-center align-middle text-nowrap"
                                    >
                                        <template v-if="value.status == 1">
                                            <button
                                                class="btn btn-outline-info"
                                                @click="changeStatus(value)"
                                                style="width: 120px"
                                            >
                                                Hiển Thị
                                            </button>
                                        </template>
                                        <template v-else>
                                            <button
                                                class="btn btn-outline-danger"
                                                @click="changeStatus(value)"
                                                style="width: 120px"
                                            >
                                                Tạm Đóng
                                            </button>
                                        </template>
                                    </td>
                                    <td
                                        class="text-center align-middle text-nowrap"
                                    >
                                    <ModalComponent
                                            color="success"
                                            label="Edit Staff"
                                            titleId="edit_staff"
                                            @click="
                                                Object.assign(editStaff, value)
                                            "
                                        >
                                            <template #modal-header>
                                                <span><b>Edit Staff</b></span>
                                            </template>
                                            <template #modal-body>
                                                <InputComponent
                                                    v-model="editStaff.ho_ten"
                                                    
                                                    label="Name area"
                                                    placeholder="Enter the area name..."
                                                />
                                                <InputComponent
                                                    v-model="editStaff.so_dien_thoai"
                                                    label="Phone Number"
                                                    placeholder="Enter the Phone Number..."
                                                />
                                                <InputComponent
                                                    v-model="editStaff.ngay_sinh"
                                                    label="Date of Birth"
                                                    type = "date"
                                                    placeholder="Enter the Date of Birth..."
                                                />
                                                <InputComponent
                                                    v-model="editStaff.email"
                                                    label="Email"
                                                    placeholder="Enter the Email..."
                                                />
                                                <InputComponent
                                                    v-model="editStaff.ma_nv"
                                                    label="Code Staff"
                                                    placeholder="Enter the Code Staff..."
                                                />
                                            </template>
                                            <template #modal-footer>
                                                <button
                                                    class="btn btn-primary"
                                                    @click="updateStaff()"
                                                >
                                                    Update
                                                </button>
                                                <button
                                                    class="btn btn-secondary"
                                                    data-bs-dismiss="modal"
                                                >
                                                    Close
                                                </button>
                                            </template>
                                    </ModalComponent>
                                    <ModalComponent
                                            color="danger"
                                            label="Delete Staff"
                                            titleId="delete_staff"
                                            @click="
                                                Object.assign(deleteStaff, value)
                                            "
                                        >
                                            <template #modal-header>
                                                <span><b>Delete Staff</b></span>
                                            </template>
                                            <template #modal-body>
                                                Are you sure you want to delete
                                                this
                                                <span class="text-danger"
                                                    ><b
                                                        ><i>{{
                                                            deleteStaff.ho_va_ten
                                                        }}</i></b
                                                    ></span
                                                >
                                                section?
                                            </template>
                                            <template #modal-footer>
                                                <button
                                                    class="btn btn-danger"
                                                    @click="deleteNhanVien()"
                                                >
                                                    Delete
                                                </button>
                                                <button
                                                    class="btn btn-secondary"
                                                    data-bs-dismiss="modal"
                                                >
                                                    Close
                                                </button>
                                            </template>
                                    </ModalComponent>
                                    </td>
                            </tr>
                            </template>
                        </template>
                        <!-- Display Staff Data  -->
                    </TableComponent>
                        
                </template>
            </CardComponent>
        </div>
    </div>
</template>

<script>
import CardComponent from "@/components/CardComponent.vue";
import InputComponent from "@/components/InputComponent.vue";
import SelectComponent from "@/components/SelectComponent.vue";
import TableComponent from "@/components/TableComponent.vue";
import ModalComponent from "@/components/ModalComponent.vue";
import { ref, computed, onMounted } from "vue";
import { useStore } from "vuex";
import axios from "@/axiosConfig";
import Toast from "@/toastConfig";
import $ from "jquery";
export default {
    name: "nhan-vien",
    components: {
        CardComponent,
        InputComponent,
        TableComponent,
        SelectComponent,
        ModalComponent,
    },
    setup() {
        const store = useStore();
        const addStaff = ref({});
        const editStaff = ref({});
        const deleteStaff = ref({});
        const tinh_trang = computed(() => {
            return store.state.tinh_trang;
        });
        const dataStaff = computed(() => {
            return store.state.dataStaff;
        });

        // const convertToSlug = (obj) => {
        //     obj.slug_staff = store.getters.toSlug(obj.name_staff);
        // }

        const addNew = () => {
            axios
                .post("admin/staff/create", addStaff.value)
                .then((res) => {
                    if (res.data.status == 1) {
                        Toast("success", res.data.message);
                        addStaff.value = {};
                        store.dispatch("onFetchStaff");
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
                .post("admin/staff/change-status", value)
                .then((res) => {
                    if (res.data.status == 1) {
                        Toast("success", res.data.message);
                        addStaff.value = {};
                        store.dispatch("onFetchStaff");
                    }
                })
                .catch((res) => {
                    $.each(res.response.data.errors, function (k, v) {
                        Toast("error", v[0]);
                    });
                });
        };

        const updateStaff = () => {
            axios
                .post("admin/staff/update", editStaff.value)
                .then((res) => {
                    if (res.data.status == 1) {
                        Toast("success", res.data.message);
                        $("#edit_staff").modal("hide");
                        addStaff.value = {};
                        store.dispatch("onFetchStaff");
                    }
                })
                .catch((res) => {
                    $.each(res.response.data.errors, function (k, v) {
                        Toast("error", v[0]);
                    });
                });
        };

        const deletenNhanVien = () => {
            axios
                .post("admin/staff/delete", deleteStaff.value)
                .then((res) => {
                    if (res.data.status == 1) {
                        Toast("success", res.data.message);
                        $("#delete_staff").modal("hide");
                        addStaff.value = {};
                        store.dispatch("onFetchStaff");
                    }
                })
                .catch((res) => {
                    $.each(res.response.data.errors, function (k, v) {
                        Toast("error", v[0]);
                    });
                });
        };

        onMounted(() => {
            store.dispatch("onFetchStaff");
        });
        return {
            tinh_trang,
            dataStaff,
            addStaff,
            editStaff,
            deleteStaff,
            // convertToSlug,
            addNew,
            changeStatus,
            updateStaff,
            deletenNhanVien,
        };
    },
};
</script>

<style></style>
