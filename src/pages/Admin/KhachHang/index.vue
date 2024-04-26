<template>
    
    <div class="row">
        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <CardComponent :required="false">
                <template #card-header>
                    <div
                        class="row d-flex justify-content-between align-items-center"
                    >
                        <div class="col">
                            <span><b>List of User</b></span>
                        </div>
                        <div class="col text-end">
                            <!-- Popup KhachHang add -->
                            <ModalComponent
                                color="primary"
                                label="Add news"
                                titleId="add_news"
                                sizeModal="modal-lg"
                            >
                                <template #modal-header>
                                    <span><b>Add news User</b></span>
                                </template>
                                <template #modal-body>
                                    <div
                                        class="row d-flex justify-content-between align-items-center"
                                    >
                                        <div class="col">
                                            <InputComponent
                                                
                                                label="First and last name"
                                                placeholder="Enter your first and last name..."
                                            />
                                        </div>
                                        <div class="col">
                                            <InputComponent
                                                
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
                                                label="Date of birth"
                                                type="date"
                                            />
                                        </div>
                                        <div class="col">
                                            <InputComponent
                                                label="Email"
                                                type="email"
                                                placeholder="example@gmail.com"
                                                
                                            />
                                        </div>
                                    </div>
                                    <!-- <InputComponent
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
                                        
                                        label="Code KhachHang"
                                        type="text"
                                    />
                                        <div class="col">
                                            <SelectComponent
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
                            <!-- Popup KhachHang add -->
                        </div>
                    </div>
                </template>
                <template #card-body>
                        
                    <TableComponent>
                        <template #thead>
                            <tr>
                                    <th colspan="100%">
                                        <div class="input-group mb-3">
                                            <input
                                                type="text"
                                                class="form-control"
                                                placeholder="Nhập thông tin cần tìm"
                                            /><button  class="btn btn-primary">
                                                <i
                                                    class="fa-solid fa-magnifying-glass"
                                                ></i>
                                            </button>
                                        </div>
                                    </th>
                                </tr>
                            <tr>
                                <th
                                    class="text-center align-middle text-nowrap"
                                >
                                    #
                                </th>
                                <th
                                    class="text-center align-middle text-nowrap"
                                >
                                    Tên Khách Hàng
                                </th>
                                <th
                                    class="text-center align-middle text-nowrap"
                                >
                                    Email
                                </th>
                                <th
                                    class="text-center align-middle text-nowrap"
                                >
                                    Số điện thoại
                                </th>
                                <th
                                    class="text-center align-middle text-nowrap"
                                >
                                    Ngày sinh
                                </th>
                                <th
                                    class="text-center align-middle text-nowrap"
                                >
                                    Rank
                                </th>
                                <th
                                    class="text-center align-middle text-nowrap"
                                >
                                    Lịch sử
                                </th>
                                <th
                                    class="text-center align-middle text-nowrap"
                                >
                                    Điểm
                                </th>
                                <th
                                    class="text-center align-middle text-nowrap"
                                >
                                    Action
                                </th>
                            </tr>
                        </template>
                        <!-- Display KhachHang Data  -->
                        <template #tbody>
                            <template v-for="(value, key) in dataKhachHang" :key="key">
                            <tr>
                                <th
                                        class="text-center align-middle text-nowrap"
                                    >
                                        {{ key + 1 }}
                                    </th>
                                    <td class="align-middle text-nowrap">
                                        {{ value.ten_khach_hang }}
                                    </td>
                                    <td class="align-middle text-nowrap">
                                        {{ value.email_khach_hang }}
                                    </td>
                                    <td class="align-middle text-nowrap">
                                        {{ value.so_dien_thoai }}
                                    </td>
                                    <td class="align-middle text-nowrap">
                                        {{ value.DateofBirth }}
                                    </td>
                                    <td class="align-middle text-nowrap">
                                        {{ value.rank_khach_hang }}
                                    </td>
                                    <td class="align-middle text-nowrap">
                                        {{ value.history_khach_hang }}
                                    </td>
                                    <td class="align-middle text-nowrap">
                                        {{ value.score_khach_hang }}
                                    </td>
                                    <!-- <td
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
                                    </td> -->
                                    <td
                                        class="text-center align-middle text-nowrap"
                                    >
                                    <!-- Edit KhachHang -->
                                    <ModalComponent
                                            color="success"
                                            label="Edit KhachHang"
                                            titleId="edit_KhachHang"
                                            @click="
                                                Object.assign(editKhachHang, value)
                                            "
                                        >
                                            <template #modal-header>
                                                <span><b>Edit KhachHang</b></span>
                                            </template>
                                            <template #modal-body>
                                                <InputComponent
                                                    
                                                    label="Name area"
                                                    placeholder="Enter the area name..."
                                                />
                                                <InputComponent
                                                    label="Phone Number"
                                                    placeholder="Enter the Phone Number..."
                                                />
                                                <InputComponent
                                                    label="Date of Birth"
                                                    type = "date"
                                                    placeholder="Enter the Date of Birth..."
                                                />
                                                <InputComponent
                                                    label="Email"
                                                    placeholder="Enter the Email..."
                                                />
                                                <InputComponent
                                                    label="Code KhachHang"
                                                    placeholder="Enter the Code KhachHang..."
                                                />
                                            </template>
                                            <template #modal-footer>
                                                <button
                                                    class="btn btn-primary"
                                                    @click="updateKhachHang()"
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
                                    <!-- Edit KhachHang -->

                                    <!-- Delete KhachHang -->
                                    <ModalComponent
                                            color="danger"
                                            label="Delete KhachHang"
                                            titleId="delete_KhachHang"
                                            @click="
                                                Object.assign(deleteKhachHang, value)
                                            "
                                        >
                                            <template #modal-header>
                                                <span><b>Delete KhachHang</b></span>
                                            </template>
                                            <template #modal-body>
                                                Are you sure you want to delete
                                                this
                                                <span class="text-danger"
                                                    ><b
                                                        ><i>{{
                                                            deleteKhachHang.ten_khach_hang
                                                        }}</i></b
                                                    ></span
                                                >
                                                section?
                                            </template>
                                            <template #modal-footer>
                                                <button
                                                    class="btn btn-danger"
                                                    @click="deleteUser()"
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
                                    <!-- Delete KhachHang -->

                                    </td>
                            </tr>
                            </template>
                        </template>
                        <!-- Display KhachHang Data  -->
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
    name: "khach-hang",
    components: {
        CardComponent,
        InputComponent,
        TableComponent,
        SelectComponent,
        ModalComponent,
    },
    setup() {
        const store = useStore();
        const addKhachHang = ref({});
        const deleteKhachHang = ref({});
        // const tinh_trang = computed(() => {
        //     return store.state.tinh_trang;
        // });
        const dataKhachHang = computed(() => {
            return store.state.dataKhachHang;
        });


        const changeStatus = (value) => {
            axios
                .post("admin/KhachHang/change-status", value)
                .then((res) => {
                    if (res.data.status == 1) {
                        Toast("success", res.data.message);
                        addKhachHang.value = {};
                        store.dispatch("onFetchKhachHang");
                    }
                })
                .catch((res) => {
                    $.each(res.response.data.errors, function (k, v) {
                        Toast("error", v[0]);
                    });
                });
        };


        const deleteUser = () => {
            axios
                .post("admin/khach-hang/delete", deleteKhachHang.value)
                .then((res) => {
                    if (res.data.status == 1) {
                        Toast("success", res.data.message);
                        $("#delete_KhachHang").modal("hide");
                        addKhachHang.value = {};
                        store.dispatch("onFetchKhachHang");
                    }
                })
                .catch((res) => {
                    $.each(res.response.data.errors, function (k, v) {
                        Toast("error", v[0]);
                    });
                });
        };

        onMounted(() => {
            store.dispatch("onFetchKhachHang");
        });
        return {
            // tinh_trang,
            dataKhachHang,
            addKhachHang,
            deleteKhachHang,
            changeStatus,
            deleteUser,
        };
    },
};
</script>

<style></style>
