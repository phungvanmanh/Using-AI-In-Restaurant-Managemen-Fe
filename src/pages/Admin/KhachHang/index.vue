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
                            <button class="btn btn-success" @click="exportExcel()">Export Excel</button>
                        </div>
                    </div>
                </template>
                <template #card-body>
                        
                    <TableComponent>
                        <template #thead>
                            <tr>
                                    <th colspan="100%">
                                        <div class="input-group mb-3">
                                            <input v-on:keyup.enter="searchKhachHang()" v-model="search.abc"
                                                type="text"
                                                class="form-control"
                                                placeholder="Nhập thông tin cần tìm"
                                            /><button  v-on:click="searchKhachHang()" class="btn btn-primary">
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
                                    Name Customer
                                </th>
                                <th
                                    class="text-center align-middle text-nowrap"
                                >
                                    Email
                                </th>
                                <th
                                    class="text-center align-middle text-nowrap"
                                >
                                   Phone
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
                                        {{ value.email }}
                                    </td>
                                    <td class="align-middle text-nowrap">
                                        {{ value.so_dien_thoai }}
                                    </td>
                                    
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
                                                    v-model="editKhachHang.ten_khach_hang"
                                                    label="Name area"
                                                    placeholder="Enter the area name..."
                                                />
                                                <InputComponent
                                                    v-model="editKhachHang.email"
                                                    label="Phone Number"
                                                    placeholder="Enter the Phone Number..."
                                                />
                                                <InputComponent
                                                    v-model="editKhachHang.so_dien_thoai"
                                                    label="Email"
                                                    placeholder="Enter the Email..."
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
import TableComponent from "@/components/TableComponent.vue";
import ModalComponent from "@/components/ModalComponent.vue";
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
import { apiUrl } from "@/globals";
export default {
    name: "khach-hang",
    components: {
        CardComponent,
        InputComponent,
        TableComponent,
        ModalComponent,
    },
    setup() {

        const store = useStore();
        const addKhachHang = ref({});
        const deleteKhachHang = ref({});
        const tinh_trang = computed(() => {
            return store.state.tinh_trang;
        });
        const token = JSON.parse(window.localStorage.getItem('admin'))?.access_token;

        const search = ref({});

        const dataKhachHang = computed(() => {
            return store.state.dataKhachHang;
        });
        const editKhachHang = ref({});

        const changeStatus = (value) => {
            axios
                .post("admin/khach-hang/change-status", value,'admin')
                .then((res) => {
                    if (res.data.status == 1) {
                        Toast("success", res.data.message);
                        store.dispatch("onFetchKhachHang");
                    }else {
                        Toast("error", res.data.message);
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
                .post("admin/khach-hang/delete", deleteKhachHang.value,'admin')
                .then((res) => {
                    if (res.data.status == 1) {
                        Toast("success", res.data.message);
                        $("#delete_KhachHang").modal("hide");
                        store.dispatch("onFetchKhachHang");
                    }else {
                        Toast("error", res.data.message);
                    }
                })
                .catch((res) => {
                    $.each(res.response.data.errors, function (k, v) {
                        Toast("error", v[0]);
                    });
                });
        };

        const updateKhachHang = () => {
            axios
                .post("admin/khach-hang/update", editKhachHang.value,'admin')
                .then((res) => {
                    if (res.data.status == 1) {
                        Toast("success", res.data.message);
                        $("#edit_KhachHang").modal('hide');
                        store.dispatch("onFetchKhachHang");
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

        const exportExcel = () => {
            // fetch(apiUrl + "api/admin/khach-hang/export")
            fetch(apiUrl + "api/admin/khach-hang/export", {
                    method: "GET",
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Content-Type": "application/json"
                    }
                })
                .then((response) => {
                    if (!response.ok) {
                        // When the response is not ok, log the whole response for debugging
                        console.error("Response:", response);
                        throw new Error(`HTTP status ${response.status}`);
                    }
                    const contentType = response.headers.get("content-type");
                    if (contentType && contentType.indexOf("application/json") !== -1) {
                        return response.json(); // Handle JSON response
                    }
                    return response.blob();
                })
                // .then((blob) => {
                    .then((data) => {
                    // Check if the data is a JSON object with a status
                    if (data && data.status === 0) {
                        Toast("error", data.message);
                        return; // Exit early if there is an error
                    }
                    const downloadUrl = window.URL.createObjectURL(data);
                    const link = document.createElement("a");
                    link.href = downloadUrl;
                    link.setAttribute("download", "khachhang.xlsx");
                    document.body.appendChild(link);
                    link.click();
                    link.remove(); // This is the same as 'document.body.removeChild(link)'
                    window.URL.revokeObjectURL(downloadUrl);
                })
                .catch((error) => {
                    console.error("Download error:", error);
                });
        };
        function searchKhachHang() {
            axios
                .post('admin/khach-hang/search-khach-hang', search.value,'admin')
                .then((res) => {
                    console.log(res.data.data);
                    store.commit('fecthKhachHang', res.data.data);
                });
        }

        onMounted(() => {
            store.dispatch("onFetchKhachHang");
        });
        return {
            tinh_trang,
            dataKhachHang,
            addKhachHang,
            deleteKhachHang,
            editKhachHang,
            updateKhachHang,
            changeStatus,
            deleteUser,
            exportExcel,
            searchKhachHang,
            search,
        };
    },
};
</script>

<style></style>
