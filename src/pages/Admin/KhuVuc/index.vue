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
                    <InputComponent
                        label="Area name..."
                        v-model="addArea.name_area"
                        @keyup="convertToSlug(addArea)"
                        placeholder="Enter the area name..."
                    />
                    <InputComponent
                        label="Area slug..."
                        v-model="addArea.slug_area"
                        placeholder="Enter the area slug..."
                        :disabled="true"
                    />
                    <SelectComponent
                        v-model="addArea.status"
                        label="Status"
                        :options="tinh_trang"
                    />
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
                                <th
                                    class="text-center align-middle text-nowrap"
                                >
                                    #
                                </th>
                                <th
                                    class="text-center align-middle text-nowrap"
                                >
                                    Name Area
                                </th>
                                <th
                                    class="text-center align-middle text-nowrap"
                                >
                                    Slug Area
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
                                v-for="(value, key) in dataKhuVuc"
                                :key="key"
                            >
                                <tr>
                                    <th
                                        class="text-center align-middle text-nowrap"
                                    >
                                        {{ key + 1 }}
                                    </th>
                                    <td class="align-middle text-nowrap">
                                        {{ value.name_area }}
                                    </td>
                                    <td class="align-middle text-nowrap">
                                        {{ value.slug_area }}
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
                                    >
                                        <ModalComponent
                                            color="success"
                                            label="Edit Area"
                                            titleId="edit_area"
                                            @click="
                                                Object.assign(editArea, value); getDataStaff(value);
                                            "
                                        >
                                            <template #modal-header>
                                                <span><b>Edit Area</b></span>
                                            </template>
                                            <template #modal-body>
                                                <InputComponent
                                                    v-model="editArea.name_area"
                                                    @keyup="
                                                        convertToSlug(editArea)
                                                    "
                                                    label="Name area"
                                                    placeholder="Enter the area name..."
                                                />
                                                <InputComponent
                                                    v-model="editArea.slug_area"
                                                    label="Slug area"
                                                    placeholder="Enter the area slug..."
                                                    :disabled="true"
                                                />
                                                <SelectComponent
                                                    v-model="editArea.status"
                                                    label="Status"
                                                    :options="tinh_trang"
                                                />
                                                <label for="" class="mt-2 mb-2 form-label">Add staff</label>
                                                <div class="row">
                                                    <div class="col-2">
                                                        <button class="btn btn-danger" v-on:click="addSkilPercent()" type="button"><i class="fa-solid fa-plus" style="margin-left: 5px"></i></button>
                                                    </div>
                                                    <div class="col-10" id="text_skill">
                                                        <template v-for="(value, index) in array_staff" :key="index">
                                                            <template v-if="index == 0">
                                                                <div class="row">
                                                                    <div class="col-md-9">
                                                                        <select class="form-control" name="" id="" v-model="value.id_admin">
                                                                            <option value="">Please choose staff...</option>
                                                                            <template v-for="(value, key) in optionAdmin.filter((item) =>  item.name_permission.toLowerCase() !== 'admin')" :key="key">
                                                                                <option :value="value.id">{{ value.first_last_name }}</option>
                                                                            </template>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                            </template>
                                                            <template v-else>
                                                                <div class="row mt-2">
                                                                    <div class="col-md-9">
                                                                        <select class="form-control" name="" id="" v-model="value.id_admin">
                                                                            <option value="">Please choose staff...</option>
                                                                            <template v-for="(admin, key) in filteredOptionAdmin(value.id_admin)" :key="key">
                                                                                <option :value="admin.id">{{ admin.first_last_name }}</option>
                                                                            </template>
                                                                        </select>
                                                                    </div>
                                                                    <div class="col-md-1">
                                                                        <button class="btn btn-secondary" style="margin-right: 5px" v-on:click="removeSkill(index)" type="button"><i style="max-width: 10px" class="fa-solid fa-minus"></i></button>
                                                                    </div>
                                                                </div>
                                                            </template>
                                                        </template>
                                                    </div>
                                                </div>
                                            </template>
                                            <template #modal-footer>
                                                <button
                                                    class="btn btn-primary"
                                                    @click="updateKhuVuc()"
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
                                            label="Delete Area"
                                            titleId="delete_area"
                                            @click="
                                                Object.assign(deleteArea, value)
                                            "
                                        >
                                            <template #modal-header>
                                                <span><b>Delete area</b></span>
                                            </template>
                                            <template #modal-body>
                                                Are you sure you want to delete
                                                this
                                                <span class="text-danger"
                                                    ><b
                                                        ><i>{{
                                                            deleteArea.name_area
                                                        }}</i></b
                                                    ></span
                                                >
                                                section?
                                            </template>
                                            <template #modal-footer>
                                                <button
                                                    class="btn btn-danger"
                                                    @click="deleteKhuVuc()"
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
        const array_staff = ref([{id_admin: ""}]);
        const tinh_trang = computed(() => {
            return store.state.tinh_trang;
        });
        const dataKhuVuc = computed(() => {
            return store.state.dataKhuVuc;
        });

        const optionAdmin = computed(() => store.state.dataAdmin.data || []);
        const convertToSlug = (obj) => {
            obj.slug_area = store.getters.toSlug(obj.name_area);
        };

        const getDataStaff = (value) => {
            axios
                .post('admin/khu-vuc/get-data-staff-area', value,'admin')
                .then((res) => {
                    if (res.data.status == 1) {
                        if (res.data.data) {
                            array_staff.value = res.data.data
                            .split(',')
                            .map((value) => ({ id_admin: value.trim() }));
                        } else {
                            array_staff.value = [{ id_admin: "" }];
                        }
                    }
                })
                .catch((res) => {
                    $.each(res.response.data.errors, function(k, v) {
                        Toast('error', v[0]);
                    });
                });
        }

        const addNew = () => {
            axios
                .post("admin/khu-vuc/create", addArea.value,'admin')
                .then((res) => {
                    if (res.data.status == 1) {
                        Toast("success", res.data.message);
                        addArea.value = {};
                        store.dispatch("onFetchKhuVuc");
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

        const changeStatus = (value) => {
            axios
                .post("admin/khu-vuc/change-status", value,'admin')
                .then((res) => {
                    if (res.data.status == 1) {
                        Toast("success", res.data.message);
                        addArea.value = {};
                        store.dispatch("onFetchKhuVuc");
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

        const deleteKhuVuc = () => {
            axios
                .post("admin/khu-vuc/delete", deleteArea.value,'admin')
                .then((res) => {
                    if (res.data.status == 1) {
                        Toast("success", res.data.message);
                        $("#delete_area").modal("hide");
                        addArea.value = {};
                        store.dispatch("onFetchKhuVuc");
                    }
                    else {
                        Toast("error", res.data.message);
                    }
                })
                .catch((res) => {
                    $.each(res.response.data.errors, function (k, v) {
                        Toast("error", v[0]);
                    });
                });
        };

        // const filteredOptionAdmin = (currentIdAdmin) => {
        //     const adminIds = array_staff.value.map((staff) => staff.id_admin);
        //     return optionAdmin.value.filter((item) => !adminIds.includes(item.id) || item.id === currentIdAdmin && item.name_permission.toLowerCase() === 'admin');
        // };
        const filteredOptionAdmin = (currentIdAdmin) => {
            const adminIds = array_staff.value.map((staff) => staff.id_admin);
            return optionAdmin.value.filter((item) => {
                return (!adminIds.includes(item.id) || item.id === currentIdAdmin) && item.name_permission.toLowerCase() !== 'admin';
            });
        };
        const addSkilPercent = () => {
            array_staff.value.push({id_admin: ""});
        }

        const removeSkill = (index) => {
            array_staff.value.splice(index,1);
        }

        const updateKhuVuc = () => {
            editArea.value.list_admin = array_staff.value
                                        .filter((item) => item.id_admin !== '')
                                        .map((admin) => admin.id_admin)
                                        .join(',');
            axios
                .post("admin/khu-vuc/update", editArea.value,'admin')
                .then((res) => {
                    if (res.data.status == 1) {
                        Toast("success", res.data.message);
                        $("#edit_area").modal("hide");
                        addArea.value = {};
                        store.dispatch("onFetchKhuVuc");
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
            store.dispatch("onFetchKhuVuc");
            store.dispatch("onFetchAdmin");
        });
        return {
            tinh_trang,
            dataKhuVuc,
            addArea,
            optionAdmin,
            editArea,
            deleteArea,
            array_staff,
            convertToSlug,
            addNew,
            changeStatus,
            updateKhuVuc,
            deleteKhuVuc,
            addSkilPercent,
            removeSkill,
            filteredOptionAdmin,
            getDataStaff,
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
