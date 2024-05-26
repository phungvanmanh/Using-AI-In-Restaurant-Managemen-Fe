<template>
    <section id="invoice">
        <div class="container">
            <div class="text-center">
                <img
                    width="0"
                    src="https://trangchudulich.com/wp-content/uploads/2023/11/logo-img.png"
                    alt=""
                />
            </div>
            <div class="text-center border-top border-bottom my-5 py-3">
                <h2 class="display-5 fw-bold">Invoice payment</h2>
                <p class="m-0">
                    Table : <b class="text-danger">{{ hoa_don.name_table }}</b
                    >, Date: <b class="text-danger">{{ date }}</b>
                </p>
            </div>
            <div class="table-responsive">
                <table class="table border my-5">
                    <thead>
                        <tr class="bg-primary-subtle">
                            <th scope="col" class="text-center">#</th>
                            <th scope="col">Foof Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Percentage decrease</th>
                            <th scope="col">Into Money</th>
                        </tr>
                    </thead>
                    <tbody>
                        <template
                            v-for="(value, key) in list_chi_tiet_ban_hang"
                            :key="key"
                        >
                            <tr>
                                <th style="width: 70px;" scope="row" class="text-center">
                                    {{ key + 1 }}
                                </th>
                                <td style="width: 120px;">{{ value.food_name }}</td>
                                <td style="width: 120px;">{{ formatToVND(value.price) }}</td>
                                <td style="width: 70px;">{{ value.so_luong }}</td>
                                <td style="width: 120px;">{{ value.phan_tram_giam }}</td>
                                <td style="width: 150px;">{{ formatToVND(value.thanh_tien) }}</td>
                            </tr>
                        </template>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colspan="4"></td>
                            <td class="">Total bill</td>
                            <td>{{ formatToVND(hoa_don.tong_tien_truoc_giam) }}</td>
                        </tr>
                        <tr>
                            <td colspan="4"></td>
                            <td class="" style="max-width: 120px; min-width: 120px;">Percentage decrease</td>
                            <td>{{ hoa_don.phan_tram_giam }} %</td>
                        </tr>
                        <tr>
                            <td colspan="4"></td>
                            <td class="text-primary fw-bold">
                                Total Payment
                            </td>
                            <td class="text-primary fw-bold">
                                {{ formatToVND(hoa_don.tien_thuc_nhan) }}
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
            <div class="d-md-flex justify-content-between my-5">
                <div>
                    <h5 class="fw-bold my-4">Contact Us</h5>
                    <ul class="list-unstyled">
                        <li>
                            <iconify-icon
                                class="social-icon text-primary fs-5 me-2"
                                icon="ic:baseline-email"
                                style="vertical-align: text-bottom"
                            ></iconify-icon>
                            Food Restaurant
                        </li>
                        <li>
                            <iconify-icon
                                class="social-icon text-primary fs-5 me-2"
                                icon="mdi:location"
                                style="vertical-align: text-bottom"
                            ></iconify-icon>
                            204 Núi Thành,Hoà Cường Bắc,Đà Nẵng
                        </li>
                        <li>
                            <iconify-icon
                                class="social-icon text-primary fs-5 me-2"
                                icon="solar:phone-bold"
                                style="vertical-align: text-bottom"
                            ></iconify-icon>
                            0397757013
                        </li>
                        <li>
                            <iconify-icon
                                class="social-icon text-primary fs-5 me-2"
                                icon="ic:baseline-email"
                                style="vertical-align: text-bottom"
                            ></iconify-icon>
                            tronglinhluong@gmail.com
                        </li>
                    </ul>
                </div>
                <div>
                    <h5 class="fw-bold my-4">Payment Information</h5>
                    <ul class="list-unstyled">
                        <li>
                            <span class="fw-semibold">Account No: </span>
                            0397757013
                        </li>
                        <li>
                            <span class="fw-semibold">Account Name: </span>
                            Lương Trọng Linh
                        </li>
                        <li>
                            <span class="fw-semibold">Bank Name: </span> MB Bank
                        </li>
                    </ul>
                </div>
                <template v-if="required == true">
                    <slot name="image" />
                </template>
            </div>
            <div id="footer-bottom">
                <div class="container border-top">
                    <div class="row mt-3">
                        <div class="col-md-6 copyright">
                            <p>
                                © 2024 Duy Tân.
                                <a
                                    href="#"
                                    target="_blank"
                                    class="text-decoration-none text-black-50"
                                    >Terms &amp; Support</a
                                >
                            </p>
                        </div>
                        <div class="col-md-6 text-md-end">
                            <p>
                                Design By:
                                <a
                                    href="https://templatesjungle.com/"
                                    target="_blank"
                                    class="text-decoration-none text-black-50"
                                    >Linh-Full-Stack</a
                                >
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import {
    ref,
    onMounted,
} from "vue";
import { useStore } from "vuex";
import axios from "@/axiosConfig";
import Toast from "@/toastConfig";
import $ from "jquery";
import { useRoute } from "vue-router";
export default {
    name: "bill-thanh-toan",
    props : {
        id : {
            type : Number,
            required: false
        },
        required : {
            type : Boolean,
            default : false,
        }
    },
    setup(props) {
        const store = useStore();
        const route = useRoute();
        const id_hoa_don_ban_hang = route.params.id_hoa_don_ban_hang || props.id;
        
        const list_chi_tiet_ban_hang = ref([]);
        const hoa_don = ref({});
        const date = ref("");

        const getData = () => {
            const payload = {
                id_hoa_don_ban_hang,
            };
            axios
                .post('admin/hoa-don/data-bill', payload,'admin')
                .then((res) => {
                    if (res.data.status == 1) {
                        hoa_don.value = res.data.hoa_don;
                        console.log(hoa_don.value);
                        list_chi_tiet_ban_hang.value = res.data.data;
                    }else {
                        Toast("error", res.data.message);
                    }
                })
                .catch((res) => {
                    $.each(res.response.data.errors, function(k, v) {
                        Toast('error', v[0]);
                    });
                });
 
        };
        function formatToVND(number) {
            number = parseInt(number);
            return number.toLocaleString("vi-VN", {
                style: "currency",
                currency: "VND",
            });
        }
        onMounted(() => {
            getData();
            date.value = new Date().toISOString().slice(0, 10);
        });
        return {
            id_hoa_don_ban_hang,
            list_chi_tiet_ban_hang,
            hoa_don,
            store,
            date,
            getData,
            formatToVND,
        };
    },
};
</script>

<style></style>
