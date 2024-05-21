<template>
    <div class="row mt-4">
    <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Món Đã Gọi</button>
</div>
    <div class="row mt-4 text-center">
    <div class="col-12" style="margin-left: 20px;color: blue;"> <h5>Món Ăn Nổi Bậc</h5></div>
   
</div>
<Menu>
    <template #content>
        <hr>
        <template v-for="(value, index) in dataMonNoiBac" :key="index">

            <div class="col">

                <div class="card" style="max-width: 300px; ">
                    <div class="face face1">
                        <div class="content">
                            <div class="icon">
                                <img style="
                                            width: 100%;
                                            height: 100%;
                                        " :src="value.image" alt="" />
                            </div>
                        </div>
                    </div>
                    <div class="face face2">
                        <div class="content">
                            <h3>{{ value.food_name }}</h3>
                            <p>
                                <b style="color: red;">{{ formatToVN(value.price) }}</b></p>
                            <div class="col text-center">
                                <button class="btn btn-primary" @click="themMonAn(value)">
                                    Add
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </template>
    </template>
</Menu>

<div class="row mt-4">
    <div class="col-12 text-center" style="margin-left: 20px; color: blue;"> <h5>Menu</h5></div>
   
</div>
<Menu>
    <template #content>
        <hr>
        <template v-for="(value, index) in data" :key="index">

            <div class="col">

                <div class="card" style="max-width: 300px; ">
                    <div class="face face1">
                        <div class="content">
                            <div class="icon">
                                <img style="
                                            width: 100%;
                                            height: 100%;
                                        " :src="value.image" alt="" />
                            </div>
                        </div>
                    </div>
                    <div class="face face2">
                        <div class="content">
                            <h3>{{ value.food_name }}</h3>
                            <p>
                                <b style="color: red;">{{ formatToVN(value.price) }}</b></p>
                            <div class="col text-center">
                                <button class="btn btn-primary" @click="themMonAn(value)">
                                    Add
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </template>
    </template>
</Menu>


<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Món Đã Gọi</h1>
                <button v-on:click="getChiTietHoaDon()" type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="table-responsive">
                    <table class="table table-bordered">
                        <thead class="text-center">
                            <tr>
                                <th>#</th>
                                <th>Tên Món</th>
                                <th>Số lượng</th>
                                <th>Đơn Giá</th>
                                <th>Thành Tiền</th>
                                
                            </tr>
                        </thead>
                        <tbody class="text-center">
                            <template v-for="(value,key) in list_chi_tiet_ban_hang" :key="key">
                                <tr>
                                <th>{{ key+1 }}</th>
                                <td>{{ value.food_name }}</td>
                                <td>
                                    <input type="number" disabled v-model="value.so_luong" class="form-control">
                                </td>
                                <td>{{value.don_gia}}đ</td>
                                <td>{{ formatToVN(value.thanh_tien) }}</td>
                            </tr>
                            </template>
                           
                        </tbody>
                        <tfoot>
                            <tr >
                                <th colspan="4" class="text-end"> Tổng tiền</th>
                                <td>
                                   <b style="color: red">{{ formatToVN(tong_tien) }}</b> 
                                </td>
                            </tr>

                        </tfoot>
                    </table>
                </div>

            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Menu from "@/pages/Admin/Menu";
import {
    onMounted,
    ref
} from 'vue';
// import { useRouter } from 'vue-router';
import $ from "jquery"
import axios from "@/axiosConfig";
import Toast from "@/toastConfig";
export default {
    name: "mon-an-customer",
    components: {
        Menu
    },
    setup() {
        const data = ref([]);
        const parts = window.location.href.split("/");
        const id_hoa_don = parts[parts.length - 1].split('?')[0];
        const url = new URL(window.location.href);
        const token = url.searchParams.get('token');
        const list_chi_tiet_ban_hang = ref([]);
        const tong_tien = ref(0);
        const khach_hang = ref({});
        const dataMonNoiBac =ref([]);
        // const token = router.query.token;
        const getMonAn = () => {
            axios
                .get('get-data-mon-an/' + token)
                .then((res) => {
                    console.log(res.data.status);
                    if (res.data.status === false) {
                        window.location.href = "/";
                    }
                    data.value = res.data.data;
                });
        }
        const themMonAn = (value) => {
            var payload = {
                'id_mon_an': value.id,
                'id_hoa_don': id_hoa_don,
            }
            axios
                .post('them-mon-an', payload)
                .then((res) => {
                    if (res.data.status == 1) {
                        Toast('success', res.data.message);
                    }
                    getChiTietHoaDon();
                })
                .catch((res) => {
                    $.each(res.response.data.errors, function (k, v) {
                        Toast('error', v[0]);
                    });
                });
        }
        const getChiTietHoaDon = () => {
            const payload = {
                'id_hoa_don': id_hoa_don,
            };
            axios
                .post("admin/su-dung-dich-vu/get-chi-tiet", payload, )
                .then((res) => {
                    list_chi_tiet_ban_hang.value = res.data.data;
                    console.log(list_chi_tiet_ban_hang.value)
                    khach_hang.value = res.data.kh;
                    tong_tien.value = list_chi_tiet_ban_hang.value
                        .map((item) => item.thanh_tien || 0)
                        .reduce((acc, current) => acc + current, 0);
                })
                
                .catch((error) => {
                    console.error("Lỗi khi lấy chi tiết hóa đơn:", error);
                    // Xử lý lỗi nếu cần
                });
        };
        const getMonAnNoiBac = () => {
            axios
                .get('get-mon-an-pho-bien') 
                .then(response => {
                    dataMonNoiBac.value = response.data.data;
                    console.log( response.data.data);
                })
            
                .catch(error => {
                    console.error('Error fetching reviews:', error);
                });
        };
        function formatToVN (number) {
            number = parseInt(number);
            return number.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
        }
        onMounted(() => {
            getMonAn();
            getChiTietHoaDon();
            getMonAnNoiBac();
        })
        return {
            data,
            themMonAn,
            list_chi_tiet_ban_hang,
            getChiTietHoaDon,
            khach_hang,
            tong_tien,
            dataMonNoiBac,
            getMonAnNoiBac,
            formatToVN
        }
    },
    // data() {
    //     return {
    //         id: null,
    //         token: null,
    //     };
    // },
    // mounted() {
    //     // Lấy thông tin ID và token từ URL
    //     const id = this.$route.params.id;
    //     const token = this.$route.query.token;

    //     // Lưu thông tin vào data
    //     this.id = id;
    //     this.token = token;
    //     localStorage.setItem('customer', token)
    //     // Kiểm tra xác thực token ở đây nếu cần
    // },
};
</script>

<style scoped>
body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    background: #333;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: sans-serif;
    background-color: #f1f1f1;
}

.container {
    max-width: 100%;
    /* Sử dụng chiều rộng tối đa của body */
    margin: 0 auto;
    /* Căn giữa container */
    display: flex;
    justify-content: space-around;
    /* Chia đều các phần tử trong container */
    align-items: center;
    flex-wrap: wrap;
    /* Cho phép các item trên cùng 1 hàng */
}

.container .card {
    position: relative;
    border-radius: 10px;
    width: 100%;
}

.container .card .icon {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #f00;
    transition: 0.7s;
    z-index: 1;
}

.container .card:nth-child(1) .icon {
    background: #e07768;
}

.container .card:nth-child(2) .icon {
    background: #6eadd4;
}

.container .card:nth-child(3) .icon {
    background: #4aada9;
}

.container .card .icon .fa {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 80px;
    transition: 0.7s;
    color: #fff;
}

i {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 80px;
    transition: 0.7s;
    color: #fff;
}

.container .card .face {
    width: 300px;
    height: 200px;
    transition: 0.5s;
}

.container .card .face.face1 {
    position: relative;
    background: #333;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    transform: translateY(100px);
}

.container .card:hover .face.face1 {
    background: #ff0057;
    transform: translateY(0px);
}

.container .card .face.face1 .content {
    opacity: 1;
    transition: 0.5s;
}

.container .card:hover .face.face1 .content {
    opacity: 1;
}

.container .card .face.face1 .content i {
    max-width: 100px;
}

.container .card .face.face2 {
    position: relative;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    box-sizing: border-box;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8);
    transform: translateY(-100px);
}

.container .card:hover .face.face2 {
    transform: translateY(0);
}

.container .card .face.face2 .content p {
    margin: 0;
    padding: 0;
    text-align: center;
    color: #414141;
}

.container .card .face.face2 .content h3 {
    margin: 0 0 10px 0;
    padding: 0;
    color: #fff;
    font-size: 24px;
    text-align: center;
    color: #414141;
}

.container a {
    text-decoration: none;
    color: #414141;
}

@keyframes blink {
    0% {
        opacity: 1;
    }

    50% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

.blinking {
    animation: blink 1s linear infinite;
}

body {
    font-family: 'Play', sans-serif;
}

body:after {
    display: table;
    position: absolute;
    right: 0;
    bottom: 0
}

body:after {
    display: table;
    position: absolute;
    right: 0;
    bottom: 0
}

#dp_menu {
    padding: 12px;
    position: relative;
    z-index: 999;
    /* Thiết lập z-index cao hơn */
}

#dp_menu button {
    display: table;
    border: none;
    padding: 0;
    cursor: pointer;
    border-radius: 7px;
    overflow: hidden;
}

#dp_menu button span {
    display: block;
    padding: 12px;
    float: left;
    width: 172px;
    background: #0086C5;
    color: #FFF;
}

#dp_menu button:before {
    content: "\2261";
    display: table;
    width: 24px;
    padding: 12px;
    font-weight: bold;
    background: #B60101;
    color: #FFF;
    float: right
}

#dp_menu:before,
#dp_menu:after,
#dp_menu ul:before,
#dp_menu ul:after {
    content: " ";
    clear: both;
    display: block;
    width: 0;
    height: 0
}

#dp_menu ul,
#dp_menu li {
    margin: 0;
    padding: 0;
    list-style: none
}

#dp_menu ul {
    position: absolute;
    width: 200px;
    background: #CCC;
}

#dp_menu li {
    display: block;
    padding: 9px;
    border-top: 1px solid #f6f6f6;
    border-bottom: 1px solid #999;
    text-align: center
}

#dp_menu.show button {
    border-radius: 7px 7px 0 0;
}

#dp_menu.show button:before {
    content: "\0058";
}

#dp_menu .sub-menu {
    display: none
}

#dp_menu button {
    display: table;
    border: none;
    padding: 0;
    cursor: pointer;
    border-radius: 7px;
    overflow: hidden;
}

#dp_menu button span {
    display: block;
    padding: 12px;
    float: left;
    width: 172px;
    background: #0086C5;
    color: #FFF;
}

#dp_menu button:before {
    content: "\2261";
    display: table;
    width: 24px;
    padding: 12px;
    font-weight: bold;
    background: #B60101;
    color: #FFF;
    float: right
}

#dp_menu:before,
#dp_menu:after,
#dp_menu ul:before,
#dp_menu ul:after {
    content: " ";
    clear: both;
    display: block;
    width: 0;
    height: 0
}

#dp_menu ul,
#dp_menu li {
    margin: 0;
    padding: 0;
    list-style: none
}

#dp_menu ul {
    position: absolute;
    width: 200px;
    background: #CCC;
}

#dp_menu li {
    display: block;
    padding: 9px;
    border-top: 1px solid #f6f6f6;
    border-bottom: 1px solid #999;
    text-align: center
}

#dp_menu.show button {
    border-radius: 7px 7px 0 0;
}

#dp_menu.show button:before {
    content: "\0058";
}

#dp_menu .sub-menu {
    display: none
}
</style>
