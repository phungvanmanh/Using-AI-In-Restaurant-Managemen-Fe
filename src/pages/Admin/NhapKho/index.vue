<template>
    <div class="page-content">
        <div class="row">
            <div class="col-5">
                <div class="card">
                    <div class="card-header">List of ingredients</div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-bordered">
                                <thead>
                                    <tr>
                                        <th colspan="100%">
                                            <div class="input-group mb-3">
                                                <input
                                                v-on:keyup.enter="searchNguyenLieu()" v-model="search.abc"
                                                    type="text"
                                                    class="form-control"
                                                    placeholder="Enter what you're looking for"
                                                /><button
                                                @click="searchNguyenLieu()"
                                                    class="btn btn-primary"
                                                >
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
                                        Name of raw materials
                                        </th>
                                        <th
                                            class="text-center align-middle text-nowrap"
                                        >
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <template
                                        v-for="(value, key) in dataNguyenLieu"
                                        :key="key"
                                    >
                                        <tr v-if="value.tinh_trang == 1">
                                            <th
                                                class="text-center align-middle text-nowrap"
                                            >
                                                {{ key + 1 }}
                                            </th>
                                            <td
                                                class="align-middle text-nowrap"
                                            >
                                                {{ value.ten_nguyen_lieu }}
                                            </td>
                                            <th
                                                class="text-center align-middle text-nowrap"
                                            >
                                                <button
                                                    v-on:click="
                                                        addNguyenLieu(value)
                                                    "
                                                    class="btn btn-primary"
                                                >
                                                    Add
                                                </button>
                                            </th>
                                        </tr>
                                    </template>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-7">
                <div class="card">
                    <div class="card-header">Inventory List</div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-bordered">
                                <thead>
                                    <tr>
                                        <th
                                            class="text-center align-middle text-nowrap"
                                        >
                                            #
                                        </th>
                                        <th
                                            class="text-center align-middle text-nowrap"
                                        >
                                        Name of raw materials
                                        </th>
                                        <th
                                            class="text-center align-middle text-nowrap"
                                        >
                                            Amount
                                        </th>
                                        <th
                                            class="text-center align-middle text-nowrap"
                                        >
                                            Price
                                        </th>
                                        <th
                                            class="text-center align-middle text-nowrap"
                                        >
                                            Into Money
                                        </th>
                                        <th
                                            class="text-center align-middle text-nowrap"
                                        >
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <template
                                        v-for="(value, key) in dataNhapKho"
                                        :key="key"
                                    >
                                        <tr>
                                            <th
                                                class="text-center align-middle text-nowrap"
                                            >
                                                {{ key + 1 }}
                                            </th>
                                            <td
                                                class="align-middle text-nowrap"
                                            >
                                                {{ value.ten_nguyen_lieu }}
                                            </td>
                                            <td
                                                class="text-center align-middle text-nowrap"
                                            >
                                                <input
                                                    type="text"
                                                    v-model="value.so_luong"
                                                    v-on:change="
                                                        updateNhapKho(value)
                                                    "
                                                    class="form-control"
                                                />
                                            </td>
                                            <td
                                                class="text-center align-middle text-nowrap"
                                            >
                                                <input
                                                    type="text"
                                                    v-model="value.gia"
                                                    v-on:change="
                                                        updateNhapKho(value)
                                                    "
                                                    class="form-control"
                                                />
                                            </td>
                                            <td
                                                class="text-center align-middle text-nowrap"
                                            >
                                                {{
                                                    formatToVND(
                                                        value.thanh_tien
                                                    )
                                                }}
                                            </td>
                                            <td
                                                class="text-center align-middle text-nowrap"
                                            >
                                                <i
                                                    class="fa-solid fa-trash fa-2x text-danger"
                                                    v-on:click="
                                                        deleteNguyenLieu(value)
                                                    "
                                                ></i>
                                            </td>
                                        </tr>
                                    </template>
                                    <tr>
                                        <td colspan="5">
                                            <label for="" class="mb-2"
                                                >Choose a provider</label
                                            ><select
                                                v-model="
                                                    nhap_kho.id_nha_cung_cap
                                                "
                                                name=""
                                                class="form-control"
                                                id=""
                                            >
                                                <template
                                                    v-for="(
                                                        value, key
                                                    ) in dataNhaCungCap"
                                                    :key="key"
                                                >
                                                    <option
                                                        v-bind:value="value.id"
                                                    >
                                                        {{ value.ten_cong_ty }}
                                                    </option>
                                                </template>
                                            </select>
                                        </td>
                                        <td colspan="1">
                                            <label for="" class="mb-2"
                                                ><b>Total Money</b></label
                                            >
                                            <p class="text-danger">
                                                {{
                                                    formatToVND(tong_tien)
                                                }}&nbsp;
                                            </p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="6">
                                            <label for="" class="mb-2"
                                                >Import Warehouse Notes</label
                                            ><textarea
                                                v-model="nhap_kho.ghi_chu"
                                                cols="30"
                                                rows="4"
                                                class="form-control"
                                            ></textarea>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="row">
                            <div class="col-lg-12 text-end">
                                <button
                                    v-on:click="createHoaDonNhapKho()"
                                    class="btn btn-primary"
                                >
                                Warehousing
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="center">
    <div class="wave"></div>
    <div class="wave"></div>
    <div class="wave"></div>
    <div class="wave"></div>
    <div class="wave"></div>
    <div class="wave"></div>
    <div class="wave"></div>
    <div class="wave"></div>
    <div class="wave"></div>
    <div class="wave"></div>
</div>
    </div>
</template>

<script>
import { ref, computed, onMounted } from "vue";
import { useStore } from "vuex";
import axios from "@/axiosConfig";
import Toast from "@/toastConfig";
import $ from "jquery";
export default {
    name: "nhap-kho",
    setup() {
        const store = useStore();
        const dataNguyenLieu = computed(() => {
            return store.state.dataNguyenLieu;
        });
        const dataNhaCungCap = computed(() => {
            return store.state.dataNhaCungCap;
        });
        const tinh_trang = computed(() => {
            return store.state.tinh_trang;
        });
        const dataNhapKho = ref([]);
        const search =ref({});
        const tong_tien = ref("");
        const nhap_kho = ref({
            id_nha_cung_cap: 0,
            ghi_chu: "",
        });
        
        function addNguyenLieu(value) {
            axios
                .post("admin/nhap-kho/them-nguyen-lieu", value, 'admin')
                .then((res) => {
                    if (res.data.status == true) {
                        Toast("success", res.data.message);
                        getDataNhapKho();
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

        function getDataNhapKho() {
            axios.get("admin/nhap-kho/lay-du-lieu",'admin')
                .then((res) => {
                    dataNhapKho.value = res.data.data;
                    tong_tien.value = dataNhapKho.value.reduce((total, item) => {
                        return total + item.thanh_tien;
                    }, 0);
                });
        }

        function formatToVND(number) {
            return number.toLocaleString("vi-VN", {
                style: "currency",
                currency: "VND",
            });
        }

        function updateNhapKho(value) {
            axios
                .post("admin/nhap-kho/cap-nhat-nhap-kho", value, 'admin')
                .then((res) => {
                    if (res.data.status == true) {
                        Toast("success", res.data.message);
                        getDataNhapKho();
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
        function deleteNguyenLieu(value) {
            const payload={
                id:value.id
            }
            axios
                .post("admin/nhap-kho/xoa-nhap-kho", payload, 'admin') // Sửa lại dòng này
                .then((res) => {
                    if (res.data.status == true) {
                        Toast("success", res.data.message);
                        getDataNhapKho();
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
        const createHoaDonNhapKho = () => {
            const payload = {
                'list'              : dataNhapKho.value,
                'id_nha_cung_cap'   : nhap_kho.value.id_nha_cung_cap,
                'ghi_chu'           : nhap_kho.value.ghi_chu,
                'tong_tien'         : tong_tien.value,
            }
            axios
                .post("admin/nhap-kho/tao-hoa-don-nhap-kho", payload, 'admin')
                .then((res) => {
                    if (res.data.status == true) {
                        Toast("success", res.data.message);
                        dataNhapKho.value = [];
                        tong_tien.value = 0;
                        nhap_kho.value = {
                            id_nha_cung_cap: 0,
                            ghi_chu: null,
                        };
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
        function searchNguyenLieu() {
            axios
                .post('admin/nguyen-lieu/tim-nguyen-lieu', search.value,'admin')
                .then((res) => {
                    console.log(res.data.data);
                    store.commit('fecthNguyenLieu', res.data.data);
                });
        }
        onMounted(() => {
            store.dispatch("onFetchNguyenLieu");
            store.dispatch("onFetchNhaCungCap");
            getDataNhapKho();
        });

        return {
            store,
            dataNguyenLieu,
            tinh_trang,
            addNguyenLieu,
            dataNhaCungCap,
            getDataNhapKho,
            dataNhapKho,
            tong_tien,
            formatToVND,
            updateNhapKho,
            deleteNguyenLieu,
            nhap_kho,
            createHoaDonNhapKho,
            searchNguyenLieu,
            search,
        };
    },
};
</script>

<style>
.center {
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.wave {
  width: 90px;
  height: 20px;
  background: linear-gradient(45deg, cyan, #fff);
  margin: 10px;
  animation: wave 1s linear infinite;
  border-radius: 20px;
}

.wave:nth-child(2) {
  animation-delay: 0.1s;
}

.wave:nth-child(3) {
  animation-delay: 0.2s;
}

.wave:nth-child(4) {
  animation-delay: 0.3s;
}

.wave:nth-child(5) {
  animation-delay: 0.4s;
}

.wave:nth-child(6) {
  animation-delay: 0.5s;
}

.wave:nth-child(7) {
  animation-delay: 0.6s;
}

.wave:nth-child(8) {
  animation-delay: 0.7s;
}

.wave:nth-child(9) {
  animation-delay: 0.8s;
}

.wave:nth-child(10) {
  animation-delay: 0.9s;
}

@keyframes wave {
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(1);
  }

  100% {
    transform: scale(0);
  }
}

</style>
