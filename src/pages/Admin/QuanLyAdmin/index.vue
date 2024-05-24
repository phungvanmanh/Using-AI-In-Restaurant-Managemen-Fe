<template>
    <div class="spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
    <div class="row mt-4">
        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <CardComponent :required="false">
                <template #card-header>
                    <div
                        class="row d-flex justify-content-between align-items-center"
                    >
                        <div class="col">
                            <span><b>List of Admin</b></span>
                        </div>
                        <div class="col text-end">
                            <button
                                class="btn btn-success me-2"
                                @click="exportData"
                            >
                                Export Excel
                            </button>
                            <ModalComponent
                                color="primary"
                                label="Add news"
                                titleId="add_news"
                                sizeModal="modal-lg"
                            >
                                <template #modal-header>
                                    <span><b>Add news admin</b></span>
                                </template>
                                <template #modal-body>
                                    <div
                                        class="row d-flex justify-content-between align-items-center"
                                    >
                                        <div class="col">
                                            <InputComponent
                                                v-model="
                                                    addAmin.first_last_name
                                                "
                                                label="First and last name"
                                                placeholder="Enter your first and last name..."
                                            />
                                        </div>
                                        <div class="col">
                                            <InputComponent
                                                v-model="addAmin.email"
                                                label="Email"
                                                type="email"
                                                placeholder="example@gmail.com"
                                            />
                                        </div>
                                    </div>
                                    <div
                                        class="row d-flex justify-content-between align-items-center"
                                    >
                                        <div class="col">
                                            <InputComponent
                                                v-model="addAmin.phone_number"
                                                label="Phone number"
                                                placeholder="(999) 999-9999"
                                            />
                                        </div>
                                        <div class="col">
                                            <InputComponent
                                                v-model="addAmin.date_birth"
                                                label="Date of birth"
                                                type="date"
                                            />
                                        </div>
                                    </div>
                                    <InputComponent
                                        v-model="addAmin.password"
                                        label="Password"
                                        type="text"
                                        placeholder="Enter your password..."
                                    />
                                    <div
                                        class="row d-flex justify-content-between align-items-center"
                                    >
                                        <div class="col">
                                            <SelectComponent
                                                label="Permission"
                                                :options="dataQuyen"
                                                v-model="addAmin.id_permission"
                                            />
                                        </div>
                                        <div class="col">
                                            <SelectComponent
                                                label="Status"
                                                :options="status"
                                                v-model="addAmin.status"
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
                                    First And Last Name
                                </th>
                                <th
                                    class="text-center align-middle text-nowrap"
                                >
                                    Email
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
                                    Permission
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
                        <template #tbody>
                            <template
                                v-for="(value, key) in dataAdmin"
                                :key="key"
                            >
                                <tr>
                                    <th
                                        class="text-center align-middle text-nowrap"
                                    >
                                        {{ key + 1 }}
                                    </th>
                                    <td class="align-middle text-nowrap">
                                        {{ value.first_last_name }}
                                    </td>
                                    <td class="align-middle text-nowrap">
                                        {{ value.email }}
                                    </td>
                                    <td
                                        class="text-center align-middle text-nowrap"
                                    >
                                        {{ value.phone_number }}
                                    </td>
                                    <td
                                        class="text-center align-middle text-nowrap"
                                    >
                                        {{ DateFormat(value.date_birth) }}
                                    </td>
                                    <td class="align-middle text-nowrap">
                                        {{ value.name_permission }}
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
                                                Display
                                            </button>
                                        </template>
                                        <template v-else>
                                            <button
                                                class="btn btn-outline-danger"
                                                @click="changeStatus(value)"
                                                style="width: 120px"
                                            >
                                                Pause 
                                            </button>
                                        </template>
                                    </td>
                                    <td
                                        class="text-center align-middle text-nowrap"
                                        style="width: 200px"
                                    >
                                        <div class="btn-group">
                                            <button
                                                type="button"
                                                class="btn btn-primary dropdown-toggle dropdown-toggle-nocaret"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                <i
                                                    class="fas fa-edit"
                                                    style="margin-left: 20%"
                                                ></i>
                                            </button>
                                            <ul class="dropdown-menu">
                                                <li>
                                                    <a
                                                        class="dropdown-item"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#passwordModal"
                                                        @click="
                                                            user.id = value.id
                                                        "
                                                        >Đổi mật khẩu</a
                                                    >
                                                </li>
                                                <li>
                                                    <a
                                                        class="dropdown-item"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#editModal"
                                                        @click="
                                                            Object.assign(
                                                                edit,
                                                                value
                                                            )
                                                        "
                                                        >Update</a
                                                    >
                                                </li>
                                                <li>
                                                    <a
                                                        class="dropdown-item"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#deleteModal"
                                                        @click="
                                                            Object.assign(
                                                                del,
                                                                value
                                                            )
                                                        "
                                                        >Delete</a
                                                    >
                                                </li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                            </template>
                        </template>
                    </TableComponent>
                </template>
            </CardComponent>
        </div>
    </div>
    <div
        class="modal fade"
        id="passwordModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">
                        Change Password
                    </h1>
                    <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                        @click="user.password = ''"
                    ></button>
                </div>
                <div class="modal-body">
                    <InputComponent
                        label="New Password"
                        v-model="user.password"
                    />
                </div>
                <div class="modal-footer">
                    <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                        @click="user.password = ''"
                    >
                        Close
                    </button>
                    <button
                        type="button"
                        class="btn btn-primary"
                        @click="changPassword()"
                    >
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    </div>
    <div
        class="modal fade"
        id="editModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">
                        Update Personnel
                    </h1>
                    <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    ></button>
                </div>
                <div class="modal-body">
                    <div
                        class="row d-flex justify-content-between align-items-center"
                    >
                        <div class="col">
                            <InputComponent
                                v-model="edit.first_last_name"
                                label="First and last name"
                                placeholder="Enter your first and last name..."
                            />
                        </div>
                        <div class="col">
                            <InputComponent
                                v-model="edit.email"
                                label="Email"
                                type="email"
                                placeholder="example@gmail.com"
                            />
                        </div>
                    </div>
                    <div
                        class="row d-flex justify-content-between align-items-center"
                    >
                        <div class="col">
                            <InputComponent
                                v-model="edit.phone_number"
                                label="Phone number"
                                placeholder="(999) 999-9999"
                            />
                        </div>
                        <div class="col">
                            <InputComponent
                                v-model="edit.date_birth"
                                label="Date of birth"
                                type="date"
                            />
                        </div>
                    </div>
                    <div
                        class="row d-flex justify-content-between align-items-center"
                    >
                        <div class="col">
                            <SelectComponent
                                label="Permission"
                                :options="dataQuyen"
                                v-model="edit.id_permission"
                            />
                        </div>
                        <div class="col">
                            <SelectComponent
                                label="Status"
                                :options="status"
                                v-model="edit.status"
                            />
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                    >
                        Close
                    </button>
                    <button
                        type="button"
                        class="btn btn-primary"
                        @click="updateUser()"
                    >
                    Confirm
                    </button>
                </div>
            </div>
        </div>
    </div>
    <div
        class="modal fade"
        id="deleteModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">
                        Delete Personnel
                    </h1>
                    <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    ></button>
                </div>
                <div class="modal-body">
                    Are you sure you want to delete this
                    <span class="text-danger"
                        ><b
                            ><i>{{ del.first_last_name }}</i></b
                        ></span
                    >!
                </div>
                <div class="modal-footer">
                    <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                    >
                        Close
                    </button>
                    <button
                        type="button"
                        class="btn btn-primary"
                        @click="deleteUser()"
                    >
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CardComponent from "@/components/CardComponent.vue";
import InputComponent from "@/components/InputComponent.vue";
import SelectComponent from "@/components/SelectComponent.vue";
import TableComponent from "@/components/TableComponent.vue";
import ModalComponent from "@/components/ModalComponent.vue";
import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";
import axios from "@/axiosConfig";
import Toast from "@/toastConfig";
import $ from "jquery";
import { apiUrl } from "@/globals";
export default {
    name: "quan-ly-admin",
    components: {
        CardComponent,
        InputComponent,
        TableComponent,
        SelectComponent,
        ModalComponent,
    },
    setup() {
        const store = useStore();
        const addAmin = ref({});
        const user = ref({});
        const edit = ref({});
        const del = ref({});
        const status = computed(() => store.state.tinh_trang);
        const dataQuyen = computed(() =>
            store.state.dataQuyen
                .filter((item) => item.status == 1)
                .map((item) => ({
                    text: item.name_permission,
                    value: item.id,
                    tinh_trang: item.status,
                }))
        );
        const token = JSON.parse(window.localStorage.getItem('admin'))?.access_token;
        const dataAdmin = computed(() => store.state.dataAdmin.data);

        const DateFormat = (value) => {
            const dateString = value;

            // Tách các thành phần của ngày từ chuỗi
            const dateParts = dateString.split("-");
            const day = dateParts[2];
            const month = dateParts[1];
            const year = dateParts[0];

            // Tạo chuỗi định dạng "yyyy-mm-dd"
            const formattedDate = `${day}-${month}-${year}`;

            return formattedDate;
        };

        const addNew = () => {
            axios
                .post("admin/create", addAmin.value, 'admin')
                .then((res) => {
                    if (res.data.status == 1) {
                        Toast("success", res.data.message);
                        $("#add_news").modal("hide");
                        store.dispatch("onFetchQuyen");
                        store.dispatch("onFetchAdmin");
                        addAmin.value = {};
                    } else {
                        Toast("error", res.data.message);
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
                .post("admin/change-status", value, 'admin')
                .then((res) => {
                    if (res.data.status == 1) {
                        Toast("success", res.data.message);
                        addAmin.value = {};
                        store.dispatch("onFetchQuyen");
                        store.dispatch("onFetchAdmin");
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

        const exportData = () => {
            fetch(apiUrl + "api/admin/export", {
                    method: "GET",
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Content-Type": "application/json"
                    }
                })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error("Network response was not ok");
                    }
                    // Check if the response is JSON
                    const contentType = response.headers.get("content-type");
                    if (contentType && contentType.indexOf("application/json") !== -1) {
                        return response.json(); // Handle JSON response
                    }
                    return response.blob(); // Handle blob response
                })
                .then((data) => {
                    // Check if the data is a JSON object with a status
                    if (data && data.status === 0) {
                        Toast("error", data.message);
                        return; // Exit early if there is an error
                    }

                    // If data is a blob, proceed with the download
                    const downloadUrl = window.URL.createObjectURL(data);
                    const link = document.createElement("a");
                    link.href = downloadUrl;
                    link.setAttribute("download", "admins.xlsx");
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                    window.URL.revokeObjectURL(downloadUrl);
                })
                .catch((error) => {
                    console.error("Download error:", error);
                });

            // có ssl thì dùng
            // axios
            //     .get("admin/export")
            //     .then((response) => {
            //         const data = response.data;
            //         console.log(data); // Xem thông tin
            //         const link = document.createElement("a");
            //         link.href = data.url;
            //         link.setAttribute("download", "admins.xlsx"); // Có thể bỏ qua nếu bạn không muốn set tên file
            //         document.body.appendChild(link);
            //         link.click();
            //         document.body.removeChild(link);
            //     })
            //     .catch((error) => {
            //         console.error("Error:", error);
            //     });
        };

        const changPassword = () => {
            axios
                .post("admin/change-password", user.value, 'admin')
                .then((res) => {
                    if (res.data.status == 1) {
                        $("#passwordModal").modal("hide");
                        user.value.password = "";
                        Toast("success", res.data.message);
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
        const updateUser = () => {
            axios
                .post("admin/update-user", edit.value, 'admin')
                .then((res) => {
                    if (res.data.status == 1) {
                        $("#editModal").modal("hide");
                        Toast("success", res.data.message);
                        store.dispatch("onFetchQuyen");
                        store.dispatch("onFetchAdmin");
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
            console.log(user.value);
            axios
                .post("admin/delete-user", del.value, 'admin')
                .then((res) => {
                    if (res.data.status == 1) {
                        $("#deleteModal").modal("hide");
                        Toast("success", res.data.message);
                        store.dispatch("onFetchQuyen");
                        store.dispatch("onFetchAdmin");
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

        onMounted(() => {
            store.dispatch("onFetchQuyen");
            store.dispatch("onFetchAdmin");
        });

        return {
            user,
            status,
            dataQuyen,
            dataAdmin,
            addAmin,
            edit,
            del,
            DateFormat,
            addNew,
            changeStatus,
            exportData,
            changPassword,
            updateUser,
            deleteUser,
        };
    },
};
</script>

<style>
.spinner {
    width: 70.4px;
    height: 70.4px;
    --clr: rgb(247, 197, 159);
    --clr-alpha: rgb(247, 197, 159, 0.1);
    animation: spinner 1.6s infinite ease;
    transform-style: preserve-3d;
}

.spinner > div {
    background-color: var(--clr-alpha);
    height: 100%;
    position: absolute;
    width: 100%;
    border: 3.5px solid var(--clr);
}

.spinner div:nth-of-type(1) {
    transform: translateZ(-35.2px) rotateY(180deg);
}

.spinner div:nth-of-type(2) {
    transform: rotateY(-270deg) translateX(50%);
    transform-origin: top right;
}

.spinner div:nth-of-type(3) {
    transform: rotateY(270deg) translateX(-50%);
    transform-origin: center left;
}

.spinner div:nth-of-type(4) {
    transform: rotateX(90deg) translateY(-50%);
    transform-origin: top center;
}

.spinner div:nth-of-type(5) {
    transform: rotateX(-90deg) translateY(50%);
    transform-origin: bottom center;
}

.spinner div:nth-of-type(6) {
    transform: translateZ(35.2px);
}

@keyframes spinner {
    0% {
        transform: rotate(45deg) rotateX(-25deg) rotateY(25deg);
    }

    50% {
        transform: rotate(45deg) rotateX(-385deg) rotateY(25deg);
    }

    100% {
        transform: rotate(45deg) rotateX(-385deg) rotateY(385deg);
    }
}
</style>
