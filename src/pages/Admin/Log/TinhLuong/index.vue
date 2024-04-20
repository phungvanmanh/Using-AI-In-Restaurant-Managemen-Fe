<template>
    <CardComponent :required="false">
        <template #card-header>
            <div class="row">
                <div class="col-xl-4 col-md-4 col-lg-4 col-sm-4 d-flex justify-content-start">
                    <h4 class="d-flex align-items-center"><b>Employee salary</b></h4>
                </div>
                <div class="col-xl-8 col-md-8 col-lg-8 col-sm-8 d-flex justify-content-end">
                    <div class="row">
                        <div class="col-4">
                            <InputComponent v-model="days.begin" label="Begin" type="date"/>
                        </div>
                        <div class="col-4">
                            <InputComponent v-model="days.end" label="End" type="date"/>
                        </div>
                        <div class="col-4 d-flex align-items-center">
                            <button class="btn btn-primary mt-3" @click="getDataLuong()">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </template>
        <template #card-body>
            <TableComponent>
                <template #thead>
                    <tr>
                        <th class="text-center align-middle text-nowrap">#</th>
                        <th class="text-center align-middle text-nowrap">Staffs Full name</th>
                        <th class="text-center align-middle text-nowrap">Number Of Sessions</th>
                        <th class="text-center align-middle text-nowrap">Money/Session</th>
                        <th class="text-center align-middle text-nowrap">Detail</th>
                        <th class="text-center align-middle text-nowrap" style="min-width: 200px;width: 200px;">Rose</th>
                        <th class="text-center align-middle text-nowrap">Total Money</th>
                        <th class="text-center align-middle text-nowrap">Receive Money</th>
                    </tr>
                </template>
                <template #tbody>
                    <template v-for="(value, key) in dataLuong" :key="key">
                        <tr>
                            <th class="text-center align-middle text-nowrap">{{ key + 1 }}</th>
                            <td class="align-middle text-nowrap">{{ value.first_last_name }}</td>
                            <td class="text-center align-middle text-nowrap">{{ value.so_buoi_lam }}</td>
                            <td class="text-center align-middle text-nowrap">{{ value.amount }}</td>
                            <td class="text-center align-middle text-nowrap">
                                <!-- <button class="btn btn-primary">Detail</button> -->
                                <ModalComponent @click="deTal(value)" label="Detal" titleId="Detal" sizeModal="modal-xl">
                                    <template #modal-header>
                                        Detal
                                    </template>
                                    <template #modal-body>
                                        <TableComponent>
                                            <template #thead>
                                                <tr>
                                                    <th class="text-center align-middle text-nowrap">#</th>
                                                    <th class="text-center align-middle text-nowrap">Working Day</th>
                                                    <th class="text-center align-middle text-nowrap">Session</th>
                                                    <th class="text-center align-middle text-nowrap">Timekeeping</th>
                                                </tr>
                                            </template>
                                            <template #tbody>
                                                <template v-for="(value, key) in dataDetal" :key="key">
                                                    <tr data-bs-toggle="collapse" :data-bs-target="'#collapseContent'+ key" aria-expanded="false" aria-controls="collapseContent2">
                                                        <th class="text-center align-middle text-nowrap">{{ key + 1 }}</th>
                                                        <td class="text-center align-middle text-nowrap">{{ value.ngay_lam_viec }}</td>
                                                        <td class="text-center align-middle text-nowrap">
                                                            <template v-if="value.buoi_lam_viec == 0">
                                                                8:00 - 16:00
                                                            </template>
                                                            <template v-if="value.buoi_lam_viec == 1">
                                                                17:00 - 22:00
                                                            </template>
                                                        </td>
                                                        <td class="text-center align-middle text-nowrap">
                                                            <template v-if="value.is_done == 0">
                                                                <b class="text-danger">Not yet clocked</b>
                                                            </template>
                                                            <template v-else>
                                                                <b class="text-success">Time has been scored</b>
                                                            </template>
                                                        </td>
                                                    </tr>
                                                    <tr :id="'collapseContent' + key" class="collapse">
                                                        <td colspan="4">
                                                            <div class="card">
                                                                <div class="card-body">
                                                                    <TableComponent>
                                                                        <template #thead>
                                                                            <tr>
                                                                                <th class="text-center align-middle text-nowrap">#</th>
                                                                                <th class="text-center align-middle text-nowrap">Working Day</th>
                                                                                <th class="text-center align-middle text-nowrap">Session</th>
                                                                                <th class="text-center align-middle text-nowrap">Timekeeping</th>
                                                                            </tr>
                                                                        </template>
                                                                        <template #tbody>
                                                                            <tr>
                                                                                <th class="text-center align-middle text-nowrap">#</th>
                                                                                <th class="text-center align-middle text-nowrap">Working Day</th>
                                                                                <th class="text-center align-middle text-nowrap">Session</th>
                                                                                <th class="text-center align-middle text-nowrap">Timekeeping</th>
                                                                            </tr>
                                                                        </template>
                                                                    </TableComponent>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </template>s
                                            </template>
                                        </TableComponent>
                                    </template>
                                </ModalComponent>
                            </td>
                            <td class="text-center align-middle text-nowrap" style="min-width: 200px;width: 200px;">
                                <template v-if="value.check == true">
                                    <input type="number" v-model="value.hoa_hong" disabled class="form-control"/>
                                </template>
                                <template v-else>
                                    <input type="number" v-model="value.hoa_hong" @change="updateRose(value)" class="form-control"/>
                                </template>
                            </td>
                            <td class="text-center align-middle text-nowrap">{{ value.tong_luong }}</td>
                            <td class="text-center align-middle text-nowrap">
                                <input style="width: 30px;height: 30px;" @click="updateReceive(value)" :checked="value.check" type="checkbox" name="" id="">
                            </td>
                        </tr>
                    </template>
                </template>
            </TableComponent>
        </template>
    </CardComponent>
</template>
<script>
import CardComponent from '@/components/CardComponent.vue';
import TableComponent from '@/components/TableComponent.vue';
import InputComponent from '@/components/InputComponent.vue';
import ModalComponent from '@/components/ModalComponent.vue';
import { onMounted, ref } from 'vue';
import axios from '@/axiosConfig';
import $ from "jquery"
import Toast from "@/toastConfig";
export default {
    name : "luong-component",
    components : {
        CardComponent,
        TableComponent,
        InputComponent,
        ModalComponent
    },
    setup() {
        const dataLuong = ref([]);
        const days = ref({});
        const dataDetal = ref({});
        const getDataLuong = () => {
            axios
                .post('admin/tinh-luong/store', days.value)
                .then((res) => {
                    if(res.data.status === true) {
                        dataLuong.value = res.data.data
                    } else {
                        Toast('error', res.data.message);
                    }
                })
                .catch((res) => {
                    $.each(res.response.data.errors, function(k, v) {
                        Toast('error', v[0]);
                    });
                });
        }

        const updateRose = (value) => {
            axios
                .post('admin/tinh-luong/update-rose', value)
                .then((res) => {
                    if(res.data.status === true) {
                        getDataLuong();
                    }
                })
                .catch((res) => {
                    $.each(res.response.data.errors, function(k, v) {
                        Toast('error', v[0]);
                    });
                });
        }

        const updateReceive = (value) => {
            value.check = !value.check
            axios
                .post('admin/tinh-luong/update-receive', value)
                .then((res) => {
                    if(res.data.status === true) {
                        getDataLuong();
                    }
                })
                .catch((res) => {
                    $.each(res.response.data.errors, function(k, v) {
                        Toast('error', v[0]);
                    });
                });
        }
        
        const deTal = (value) => {
            axios
                .post('admin/tinh-luong/detal', value)
                .then((res) => {
                    if(res.data.status === true) {
                        dataDetal.value = res.data.data
                    }
                })
                .catch((res) => {
                    $.each(res.response.data.errors, function(k, v) {
                        Toast('error', v[0]);
                    });
                });
        }

        onMounted(() => {
        })
        return { dataLuong, days, dataDetal, getDataLuong, updateRose, updateReceive, deTal }
    },
}
</script>