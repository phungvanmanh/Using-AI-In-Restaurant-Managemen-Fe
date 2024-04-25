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
    <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12">
        <CardComponent>
            <template #card-header>
                <span><b>Add New Area</b></span>
            </template>
            <template #card-body>
                <InputComponent label="Area name..." v-model="addArea.name_area" @keyup="convertToSlug(addArea)" placeholder="Enter the area name..." />
                <InputComponent label="Area slug..." v-model="addArea.slug_area" placeholder="Enter the area slug..." :disabled="true" />
                <SelectComponent v-model="addArea.status" label="Status" :options="tinh_trang" />
            </template>
            <template #card-footer>
                <button class="btn btn-primary float-end" @click="addNew()">
                    Add news
                </button>
            </template>
        </CardComponent>
    </div>
    <div class="col-xl-9 col-lg-9 col-md-9 col-sm-12">
        <CardComponent :required="false">
            <template #card-header>
                <span><b>List Area</b></span>
            </template>
            <template #card-body>
                <TableComponent>
                    <template #thead>
                        <tr>
                            <th class="text-center align-middle text-nowrap">
                                #
                            </th>
                            <th class="text-center align-middle text-nowrap">
                                Name Area
                            </th>
                            <th class="text-center align-middle text-nowrap">
                                Slug Area
                            </th>
                            <th class="text-center align-middle text-nowrap">
                                Status
                            </th>
                            <th class="text-center align-middle text-nowrap">
                                Action
                            </th>
                        </tr>
                    </template>
                    <template #tbody>
                        <template v-for="(value, key) in dataKhuVuc" :key="key">
                            <tr>
                                <th class="text-center align-middle text-nowrap">
                                    {{ key + 1 }}
                                </th>
                                <td class="align-middle text-nowrap">
                                    {{ value.name_area }}
                                </td>
                                <td class="align-middle text-nowrap">
                                    {{ value.slug_area }}
                                </td>
                                <td class="text-center align-middle text-nowrap">
                                    <template v-if="value.status == 1">
                                        <button class="btn btn-outline-info" @click="changeStatus(value)" style="width: 120px">
                                            Hiển Thị
                                        </button>
                                    </template>
                                    <template v-else>
                                        <button class="btn btn-outline-danger" @click="changeStatus(value)" style="width: 120px">
                                            Tạm Đóng
                                        </button>
                                    </template>
                                </td>
                                <td class="text-center align-middle text-nowrap">
                                    <ModalComponent color="success" label="Edit Area" titleId="edit_area" @click="
                                                Object.assign(editArea, value)
                                            ">
                                        <template #modal-header>
                                            <span><b>Edit Area</b></span>
                                        </template>
                                        <template #modal-body>
                                            <InputComponent v-model="editArea.name_area" @keyup="
                                                        convertToSlug(editArea)
                                                    " label="Name area" placeholder="Enter the area name..." />
                                            <InputComponent v-model="editArea.slug_area" label="Slug area" placeholder="Enter the area slug..." :disabled="true" />
                                            <SelectComponent v-model="editArea.status" label="Status" :options="tinh_trang" />
                                        </template>
                                        <template #modal-footer>
                                            <button class="btn btn-primary" @click="updateKhuVuc()">
                                                Update
                                            </button>
                                            <button class="btn btn-secondary" data-bs-dismiss="modal">
                                                Close
                                            </button>
                                        </template>
                                    </ModalComponent>
                                    <ModalComponent color="danger" label="Delete Area" titleId="delete_area" @click="
                                                Object.assign(deleteArea, value)
                                            ">
                                        <template #modal-header>
                                            <span><b>Delete area</b></span>
                                        </template>
                                        <template #modal-body>
                                            Are you sure you want to delete
                                            this
                                            <span class="text-danger"><b><i>{{
                                                            deleteArea.name_area
                                                        }}</i></b></span>
                                            section?
                                        </template>
                                        <template #modal-footer>
                                            <button class="btn btn-danger" @click="deleteKhuVuc()">
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
</div>
</template>

<script>
import CardComponent from "@/components/CardComponent.vue";
import InputComponent from "@/components/InputComponent.vue";
import SelectComponent from "@/components/SelectComponent.vue";
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
export default {
    name: "khu-vuc",
    components: {
        CardComponent,
        InputComponent,
        SelectComponent,
        TableComponent,
        ModalComponent,
    },
    setup() {
        const store = useStore();
        const addArea = ref({});
        const editArea = ref({});
        const deleteArea = ref({});
        const tinh_trang = computed(() => {
            return store.state.tinh_trang;
        });
        const dataKhuVuc = computed(() => {
            return store.state.dataKhuVuc;
        });

        const convertToSlug = (obj) => {
            obj.slug_area = store.getters.toSlug(obj.name_area);
        };

        const addNew = () => {
            axios
                .post("admin/khu-vuc/create", addArea.value)
                .then((res) => {
                    if (res.data.status == 1) {
                        Toast("success", res.data.message);
                        addArea.value = {};
                        store.dispatch("onFetchKhuVuc");
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
                .post("admin/khu-vuc/change-status", value)
                .then((res) => {
                    if (res.data.status == 1) {
                        Toast("success", res.data.message);
                        addArea.value = {};
                        store.dispatch("onFetchKhuVuc");
                    }
                })
                .catch((res) => {
                    $.each(res.response.data.errors, function (k, v) {
                        Toast("error", v[0]);
                    });
                });
        };

        const updateKhuVuc = () => {
            axios
                .post("admin/khu-vuc/update", editArea.value)
                .then((res) => {
                    if (res.data.status == 1) {
                        Toast("success", res.data.message);
                        $("#edit_area").modal("hide");
                        addArea.value = {};
                        store.dispatch("onFetchKhuVuc");
                    }
                })
                .catch((res) => {
                    $.each(res.response.data.errors, function (k, v) {
                        Toast("error", v[0]);
                    });
                });
        };

        const deleteKhuVuc = () => {
            axios
                .post("admin/khu-vuc/delete", deleteArea.value)
                .then((res) => {
                    if (res.data.status == 1) {
                        Toast("success", res.data.message);
                        $("#delete_area").modal("hide");
                        addArea.value = {};
                        store.dispatch("onFetchKhuVuc");
                    }
                })
                .catch((res) => {
                    $.each(res.response.data.errors, function (k, v) {
                        Toast("error", v[0]);
                    });
                });
        };

        onMounted(() => {
            store.dispatch("onFetchKhuVuc");
        });
        return {
            tinh_trang,
            dataKhuVuc,
            addArea,
            editArea,
            deleteArea,
            convertToSlug,
            addNew,
            changeStatus,
            updateKhuVuc,
            deleteKhuVuc,
        };
    },
};
</script>

<style>
.spinner {
    width: 70.4px;
    height: 70.4px;
    --clr: rgb(247, 197, 159);
    --clr-alpha: rgb(247, 197, 159, .1);
    animation: spinner 1.6s infinite ease;
    transform-style: preserve-3d;
}

.spinner>div {
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
