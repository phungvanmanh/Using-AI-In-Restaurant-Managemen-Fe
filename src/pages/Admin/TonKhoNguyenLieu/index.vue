<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">
                        <h5>Inventory</h5>
                    </div>
                    <div class="card-body text-center">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th text-center align-middle text-nowrap>#</th>
                                    <th text-center align-middle text-nowrap>Material name</th>
                                    <th text-center align-middle text-nowrap>Original number</th>
                                    <th text-center align-middle text-nowrap>Existing Quantity</th>
                                    <th text-center align-middle text-nowrap>Date</th>
                                    <th text-center align-middle text-nowrap>Action</th>
    
                                </tr>
                            </thead>
                            <tbody>
                                <template v-for="(value,key) in data_TonKho" :key="key" >
                                    <tr text-center align-middle text-nowrap>
                                    <th>
                                        {{ key+1 }}
                                    </th>
                                    <td text-center align-middle text-nowrap>{{ value.ten_nguyen_lieu }}</td>
                                    <td text-center align-middle text-nowrap>{{ value.so_luong }}</td>
                                    <td text-center align-middle text-nowrap>{{ value.so_luong_ton }}</td>
                                    <td text-center align-middle text-nowrap>{{ value.ngay }}</td>
                                    <td text-center align-middle text-nowrap>
                                        <button v-on:click="Object.assign(editTonKho,value)" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#exampleModal">Cập Nhật</button>
                                    </td>
                                </tr>
                                </template>
                               
    
                            </tbody>
                        </table>
                        <!-- Modal -->
                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="exampleModalLabel">Update Existing Quantity</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <label for="">Existing Quantity</label>
                                        <input  v-model="editTonKho.so_luong_ton" type="number" name="" id="" class="form-control">
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Exit</button>
                                        <button v-on:click="updateTonKho()" type="button" data-bs-dismiss="modal" class="btn btn-primary">Save</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </template>
    
    <script>
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
        name: 'ton-kho-nguyen-lieu',
        setup() {
            const store = useStore();
            const editTonKho = ref({});
    
            const data_TonKho = computed(() => {
                return store.state.dataTonKho;
            });
            const updateTonKho = () => {
                axios
                    .post("admin/ton-kho/update-ton-kho", editTonKho.value,'admin')
                    .then((res) => {
                        if (res.data.status == 1) {
                            Toast("success", res.data.message);
                            store.dispatch("onFetchTonKho");
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
            onMounted(() => {
                store.dispatch("onFetchTonKho");
            });
            return {
                
                store,
                data_TonKho,
                editTonKho,
                updateTonKho,
            }
        }
    }
    </script>
    
    <style >
    .low-stock {
        background-color: red;
    }
    
    </style>