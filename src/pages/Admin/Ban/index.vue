<template>
   <div class="cube-loader">
  <div class="cube-top"></div>
  <div class="cube-wrapper">
    <span class="cube-span" style="--i:0"></span>
    <span class="cube-span" style="--i:1"></span>
    <span class="cube-span" style="--i:2"></span>
    <span class="cube-span" style="--i:3"></span>
  </div>
</div>
    <div class="row mt-4">
        <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12">
            <CardComponent>
                <template #card-header>
                    <span><b>Add New Table</b></span>
                </template>
                <template #card-body>
                    <InputComponent
                        label="Name table"
                        placeholder="Enter the name table..." @keyup="convertToSlug(addTable)" v-model="addTable.name_table"
                    />
                    <InputComponent
                        label="Slug table"
                        :disabled="true" v-model="addTable.slug_table"
                    />
                    <SelectComponent label="Area" :options="area"  v-model="addTable.id_area"/>
                    <SelectComponent label="Status" :options="status"  v-model="addTable.status"/>
                </template>
                <template #card-footer>
                    <button class="btn btn-primary float-end" @click="addNew()">Add news</button>
                </template>
            </CardComponent>
        </div>
        <div class="col-xl-9 col-lg-9 col-md-9 col-sm-12">
            <CardComponent :required="false">
                <template #card-header>
                    <span><b>List of table</b></span>
                </template>
                <template #card-body>
                    <TableComponent>
                        <template #thead>
                            <tr>
                                <th colspan="100%">
                                    <div class="input-group mb-3"><input v-on:keyup.enter="searchBan()" v-model="search.abc"   type="text" class="form-control" placeholder="Nhập thông tin cần tìm"><button v-on:click="searchBan()" class="btn btn-primary"><i class="fa-solid fa-magnifying-glass"></i></button></div>
                                </th>
                            </tr>
                            <tr>
                                <th class="text-center align-middle text-nowrap">#</th>
                                <th class="text-center align-middle text-nowrap">Name Table</th>
                                <th class="text-center align-middle text-nowrap">Slug Table</th>
                                <th class="text-center align-middle text-nowrap">Area</th>
                                <th class="text-center align-middle text-nowrap">Status</th>
                                <th class="text-center align-middle text-nowrap">Action</th>
                            </tr>
                        </template>
                        <template #tbody>
                            <template v-for="(value, key) in dataBan" :key="key">
                                <tr>
                                    <th class="text-center align-middle text-nowrap">{{ key +1 }}</th>
                                    <td class="align-middle text-nowrap">{{ value.name_table }}</td>
                                    <td class="align-middle text-nowrap">{{ value.slug_table }}</td>
                                    <td class="align-middle text-nowrap">{{ value.name_area }}</td>
                                    <td class="text-center align-middle text-nowrap">
                                        <template v-if="value.status == 1">
                                            <button class="btn btn-outline-info" @click="changeStatus(value)"
                                                style="width: 120px">
                                                Hiển Thị
                                            </button>
                                        </template>
                                        <template v-else>
                                            <button class="btn btn-outline-danger" @click="changeStatus(value)"
                                                style="width: 120px">
                                                Tạm Đóng
                                            </button>
                                        </template>
                                    </td>
                                    <td class="text-center align-middle text-nowrap">
                                        <ModalComponent color="success" label="Edit Table" titleId="edit_table"
                                            @click="Object.assign(editTable, value)">
                                            <template #modal-header>
                                                <span><b>Edit Table</b></span>
                                            </template>
                                            <template #modal-body>
                                                <InputComponent v-model="editTable.name_table"
                                                    @keyup="convertToSlug(editTable)" label="Name table"
                                                    placeholder="Enter the table name..." />
                                                <InputComponent v-model="editTable.slug_table" label="Slug table" :disabled="true" />
                                                <SelectComponent label="Area" :options="area"  v-model="editTable.id_area"/>
                                                <SelectComponent label="Status" :options="status"  v-model="editTable.status"/>
                                            </template>
                                            <template #modal-footer>
                                                <button class="btn btn-primary" @click="updateBan()">
                                                    Update
                                                </button>
                                                <button class="btn btn-secondary" data-bs-dismiss="modal">
                                                    Close
                                                </button>
                                            </template>
                                        </ModalComponent>
                                        <ModalComponent color="danger" label="Delete Table" titleId="delete_table"
                                            @click="Object.assign(deleteTable, value)">
                                            <template #modal-header>
                                                <span><b>Delete Table</b></span>
                                            </template>
                                            <template #modal-body>
                                                Are you sure you want to delete this
                                                <span class="text-danger"><b><i>{{ deleteTable.name_table}}</i></b></span>
                                                section?
                                            </template>
                                            <template #modal-footer>
                                                <button class="btn btn-danger" @click="deleteBan()">
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
import TableComponent from '@/components/TableComponent.vue';
import ModalComponent from '@/components/ModalComponent.vue';
import { ref, computed, onMounted } from "vue";
import { useStore } from "vuex";
import axios from "@/axiosConfig";
import Toast from "@/toastConfig";
import $ from "jquery";
export default {
    name: "ban-component",
    components: {
        CardComponent,
        InputComponent,
        SelectComponent,
        TableComponent,
        ModalComponent
    },
    setup() {
        const store = useStore();
        const area = computed(() =>
            store.state.dataKhuVuc
                .filter((item) => item.status == 1)
                .map((item) => ({
                    text: item.name_area,
                    value: item.id,
                    tinh_trang: item.status,
                }))
        );
        const dataBan = computed(() => store.state.dataBan);
        const status = computed(() => store.state.tinh_trang);
        const addTable = ref({});
        const editTable = ref({});
        const search = ref({});
        const deleteTable = ref({});

        const convertToSlug = (obj) => {
            obj.slug_table = store.getters.toSlug(obj.name_table);
        };

        const addNew = () => {
            axios
                .post("admin/ban/create", addTable.value)
                .then((res) => {
                    if (res.data.status == 1) {
                        Toast("success", res.data.message);
                        addTable.value = {};
                        store.dispatch("onFetchBan");
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
                .post("admin/ban/change-status", value)
                .then((res) => {
                    if (res.data.status == 1) {
                        Toast("success", res.data.message);
                        addTable.value = {};
                        store.dispatch("onFetchBan");
                    }
                })
                .catch((res) => {
                    $.each(res.response.data.errors, function (k, v) {
                        Toast("error", v[0]);
                    });
                });
        };

        const updateBan = () => {
            axios
                .post("admin/ban/update", editTable.value)
                .then((res) => {
                    if (res.data.status == 1) {
                        Toast("success", res.data.message);
                        $("#edit_table").modal("hide");
                        addTable.value = {};
                        store.dispatch("onFetchBan");
                    }
                })
                .catch((res) => {
                    $.each(res.response.data.errors, function (k, v) {
                        Toast("error", v[0]);
                    });
                });
        };

        const deleteBan = () => {
            axios
                .post("admin/ban/delete", deleteTable.value)
                .then((res) => {
                    if (res.data.status == 1) {
                        Toast("success", res.data.message);
                        $("#delete_table").modal("hide");
                        addTable.value = {};
                        store.dispatch("onFetchBan");
                    }
                })
                .catch((res) => {
                    $.each(res.response.data.errors, function (k, v) {
                        Toast("error", v[0]);
                    });
                });
        };
        function searchBan() {
            axios
                .post('admin/ban/tim-ban', search.value)
                .then((res) => {
                    console.log(res.data.data);
                    store.commit('fecthBan', res.data.data);
                });
        }
        onMounted(() => {
            store.dispatch("onFetchKhuVuc");
            store.dispatch("onFetchBan");
        });
        return { search,area, status, dataBan, addTable, editTable, deleteTable, convertToSlug, addNew, changeStatus, updateBan, deleteBan ,searchBan};
    },
};
</script>

<style>
.cube-loader {
  position: relative;
    /* u can choose any size */
  width: 75px;
  height: 75px;
  transform-style: preserve-3d;
  transform: rotateX(-30deg);
  animation: animate 4s linear infinite;
}

@keyframes animate {
  0% {
    transform: rotateX(-30deg) rotateY(0);
  }

  100% {
    transform: rotateX(-30deg) rotateY(360deg);
  }
}

.cube-loader .cube-wrapper {
  position: absolute;
  width: 100%;
  height: 100%;
    /* top: 0;
    left: 0; */
  transform-style: preserve-3d;
}

.cube-loader .cube-wrapper .cube-span {
  position: absolute;
  width: 100%;
  height: 100%;
    /* top: 0;
    left: 0; */
    /* width 75px / 2 = 37.5px */
  transform: rotateY(calc(90deg * var(--i))) translateZ(37.5px);
/* Gradiente amarillo */
  background: linear-gradient(to bottom,
              hsl(60, 100%, 25.1%) 0%,
              hsl(60, 100%, 32.06%) 5.5%,
              hsl(60, 100%, 36.88%) 12.1%,
              hsl(60, 100%, 40.7%) 19.6%,
              hsl(60, 100%, 43.88%) 27.9%,
              hsl(60, 100%, 46.58%) 36.6%,
              hsl(60, 100%, 48.91%) 45.6%,
              hsl(60, 100%, 50.91%) 54.6%,
              hsl(60, 100%, 52.62%) 63.4%,
              hsl(60, 100%, 54.08%) 71.7%,
              hsl(60, 100%, 55.29%) 79.4%,
              hsl(60, 100%, 56.28%) 86.2%,
              hsl(60, 100%, 57.04%) 91.9%,
              hsl(60, 100%, 57.59%) 96.3%,
              hsl(60, 100%, 57.93%) 99%,
              hsl(60, 100%, 58.04%) 100%);
}

.cube-top {
  position: absolute;
  width: 75px;
  height: 75px;
  background: hsl(320, 2%, 24%) 0%;
    /* width 75px / 2 = 37.5px */
  transform: rotateX(90deg) translateZ(37.5px);
  transform-style: preserve-3d;
}

.cube-top::before {
  content: '';
  position: absolute;
    /* u can choose any size */
  width: 75px;
  height: 75px;
  background: hsl(0, 0%, 0%) 19.6%;
  transform: translateZ(-90px);
  filter: blur(10px);
  box-shadow: 0 0 10px #323232,
        0 0 20px hsl(63, 42%, 41%) 19.6%,
        0 0 30px #323232,
        0 0 40px hsl(70, 42%, 41%) 19.6%;
}
</style>
