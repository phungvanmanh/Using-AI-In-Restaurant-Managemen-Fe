<template>
<div class="row mb-4">
    <div class="loader2">
        <div id="first">
            <div id="second">
                <div id="third">
                </div>
            </div>
        </div>
    </div>
</div>

<div class="row">
    <div class="card">
        <div class="card-body">
            <ul class="nav nav-tabs nav-primary mb-0" role="tablist">
                <li class="nav-item" role="presentation" v-on:click="loadDataBan()">
                    <a class="nav-link active" data-bs-toggle="tab" href="#primaryhome" role="tab" aria-selected="true">
                        <div class="d-flex align-items-center">
                            <div class="tab-icon">
                                <i class="bx bx-comment-detail font-18 me-1"></i>
                            </div>
                            <div class="tab-title">All</div>
                        </div>
                    </a>
                </li>
                <template v-for="(value, key) in dataKhuVuc" :key="key">
                    <template v-if="value.status==1">
                        <template v-if="user.name_permission.toLowerCase() === 'admin'">
                            <li class="nav-item" role="presentation" v-on:click="getBanTheoKhuVuc(value)">
                                <a class="nav-link" data-bs-toggle="tab" v-bind:href="'#primaryhome' + key" role="tab" aria-selected="false" tabindex="-1">
                                    <div class="d-flex align-items-center">
                                        <div class="tab-icon">
                                            <i class="bx bx-bookmark-alt font-18 me-1"></i>
                                        </div>
                                        <div class="tab-title">{{ value.name_area }}</div>
                                    </div>
                                </a>
                            </li>
                        </template>
                        <template v-else>
                            <template v-if="value.list_admin?.split(',').includes(user.id.toString())">
                                <li class="nav-item" role="presentation" v-on:click="getBanTheoKhuVuc(value)">
                                    <a class="nav-link" data-bs-toggle="tab" v-bind:href="'#primaryhome' + key" role="tab" aria-selected="false" tabindex="-1">
                                        <div class="d-flex align-items-center">
                                            <div class="tab-icon">
                                                <i class="bx bx-bookmark-alt font-18 me-1"></i>
                                            </div>
                                            <div class="tab-title">{{ value.name_area }}</div>
                                        </div>
                                    </a>
                                </li>
                            </template>
                        </template>
                    </template>
                </template>
            </ul>
            <div class="tab-content pt-3">
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
                    <template v-for="(value, key) in dataBan" :key="key">
                        <template v-if="value.status == 1">
                            <template v-if="user.name_permission.toLowerCase() === 'admin'">
                                <div class="col">
                                    <div class="card radius-10">
                                        <div class="card-body">
                                            <div class="text-center">
                                                <div class="widgets-icons rounded-circle mx-auto bg-light-primary text-primary mb-3">
                                                    <i class="fa-solid fa-couch"></i>
                                                </div>
                                                <h4 class="my-1">{{ value.name_table }}</h4>
                                                <template v-if="value.is_open_table == 0">
                                                    <button @click="activityView = true; openTable(value.id);" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mobanModal">
                                                        Open table
                                                    </button>
                                                </template>
                                                <template v-else>
                                                    <button class="btn btn-secondary me-2" data-bs-toggle="modal" data-bs-target="#qrModal" @click="generateQRCode(value.id)">
                                                        QR Login
                                                    </button>
                                                    <button class="btn btn-success me-2" @click="getIdHoaDon(value.id)" data-bs-toggle="modal" data-bs-target="#mobanModal">
                                                        Payment
                                                    </button>
                                                    <button  v-on:click="closeTableId.id_ban=value.id;getIdHoaDon(value.id);"  class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#closeModal">Close Table</button>
                                                </template>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </template>
                            <template v-else>
                                <template v-if="user.list_khu?.split(',').includes(value.id_area.toString())">
                                    <div class="col">
                                        <div class="card radius-10">
                                            <div class="card-body">
                                                <div class="text-center">
                                                    <div class="widgets-icons rounded-circle mx-auto bg-light-primary text-primary mb-3">
                                                        <i class="fa-solid fa-couch"></i>
                                                    </div>
                                                    <h4 class="my-1">{{ value.name_table }}</h4>
                                                    <template v-if="value.is_open_table == 0">
                                                        <button @click="activityView = true; openTable(value.id);" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mobanModal">
                                                            Open table
                                                        </button>
                                                    </template>
                                                    <template v-else>
                                                        <button class="btn btn-secondary me-2" data-bs-toggle="modal" data-bs-target="#qrModal" @click="generateQRCode(value.id)">
                                                            QR Login
                                                        </button>
                                                        <button class="btn btn-success me-2" @click="getIdHoaDon(value.id)" data-bs-toggle="modal" data-bs-target="#mobanModal">
                                                            Payment
                                                        </button>
                                                        <button  v-on:click="closeTableId.id_ban=value.id;getIdHoaDon(value.id);"  class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#closeModal">Close Table</button>
                                                    </template>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </template>
                            </template>
                        </template>
                    </template>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="mobanModal" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true" data-bs-backdrop="static" data-bs-keyboard="false">
        <div class="modal-dialog modal-xl" style="max-width: 100%">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel"> Open table</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <template v-if="activityView === true">
                        <div class="row mt-2">
                            <div class="col-6">

                            </div>
                            <div class="col-3">
                                <!-- <label style="margin-bottom: 10px;" for=""><b style="color: blue;">Gộp Bàn</b></label> -->
                                <SelectComponent v-model="id_ban_chuyen" label="Table pooling" :options="dataBanChuyen" />
                            </div>
                            <div class="col-3">
                                <button v-on:click="gopBan()" style="margin-top: 30px;" class="btn btn-primary">Confirm</button>
                            </div>

                        </div>
                        <div class="row mt-3">
                            <div class="col-lg-4">
                                <div class="card">
                                    <div class="card-header">
                                        <h6>List of dishes</h6>
                                    </div>

                                    <div class="card-body">

                                        <div class="mb-3">
                                            <div class="table-responsive" style="max-height: 450px;">
                                                <table class="table table-bordered">
                                                    <thead>
                                                        <tr>
                                                            <th colspan="100%">
                                                                <div class="input-group mb-3"><input v-on:keyup.enter="searchMonAn()" v-model="search.abc" type="text" class="form-control" placeholder="nhập món ăn cần tìm"><button @click="searchMonAn()" class="btn btn-primary"><i class="fa-solid fa-magnifying-glass"></i></button></div>
                                                            </th>
                                                        </tr>
                                                        <tr>
                                                            <th class="align-middle text-center">#</th>
                                                            <th class="align-middle text-center">Row name</th>
                                                            <th class="align-middle text-center">Image</th>
                                                            <th class="align-middle text-center">Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <template v-for="(value, key) in dataMonAn" :key="key">
                                                            <tr>
                                                                <td class="align-middle text-center">{{ key + 1 }}</td>
                                                                <td class="align-middle text-center">{{ value.food_name }}</td>
                                                                <td class="text-center align-middle text-nowrap"><img v-bind:src="value.image" width="100" height="100" alt=""></td>
                                                                <td class="align-middle text-center">
                                                                    <button v-on:click="themMonAn(value)" class="btn btn-primary">Add</button>
                                                                </td>
                                                            </tr>
                                                        </template>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-8">
                                <div class="card">
                                    <div class="card-header">Food used</div>
                                    <div class="card-body">
                                        <div class="table-responsive">
                                            <table class="table table-bordered">
                                                <thead>
                                                    <tr>
                                                        <th class="text-center align-middle">#</th>
                                                        <th class="text-center align-middle">Dish</th>
                                                        <th class="text-center align-middle">Amount</th>
                                                        <th class="text-center align-middle">Price</th>
                                                        <th class="text-center align-middle">% Percent</th>
                                                        <th class="text-center align-middle">Into money</th>
                                                        <th class="text-center align-middle">Note</th>
                                                        <th class="text-center align-middle">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <template v-for="(value, key) in list_chi_tiet_ban_hang" :key="key">
                                                        <tr>
                                                            <td class="align-middle">{{ key + 1 }}</td>
                                                            <td class="align-middle">{{ value.food_name }}</td>
                                                            <td class="align-middle">
                                                                <input v-on:change="updateMonAn(value)" v-model="value.so_luong" type="number" class="form-control" />
                                                            </td>
                                                            <td class="align-middle">
                                                                <input v-on:change="updateMonAn(value)" v-model="value.don_gia" type="number" class="form-control" />
                                                            </td>
                                                            <td class="align-middle">
                                                                <input v-on:change="updateMonAn(value)" v-model="value.phan_tram_giam" type="number" class="form-control" />
                                                            </td>
                                                            <td class="align-middle">{{ formatToVN(value.thanh_tien) }}</td>
                                                            <td class="align-middle">
                                                                <input v-on:change="updateMonAn(value)" v-model="value.ghi_chu" type="text" class="form-control" />
                                                            </td>
                                                            <td class="align-middle">
                                                                <button v-on:click="deleteChiTiet(value)" class="btn btn-danger">Xóa</button>
                                                            </td>
                                                        </tr>
                                                    </template>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div class="card-footer bg-white">
                                        <div class="row">
                                            <div class="col-lg-4">
                                                <InputComponentVue v-model="khach_hang.ten_khach_hang" label="First Last Name Customer" />
                                                <InputComponentVue v-model="khach_hang.email" label="Email" type="email" />
                                                <InputComponentVue v-model="khach_hang.so_dien_thoai" label="Phone Number" />
                                            </div>
                                            <div class="col-lg-4">
                                                <textarea @change="updateHoaDon()" v-model="ghi_chu_hoa_don" class="form-control" cols="30" rows="4"></textarea>
                                            </div>
                                            <div class="col-lg-4">
                                                <img style="width: 100%;" alt="" />
                                            </div>
                                        </div>
                                        <div class="row mt-3">
                                            <div class="col-lg-6">
                                                <p><b>Total payout:</b></p>
                                                <input @change="updateHoaDon()" type="number" class="form-control" v-model="tong_tien" />
                                            </div>
                                            <div class="col-lg-6">
                                                <p><b>Percentage decrease:</b></p>
                                                <input @change="updateHoaDon()" type="number" class="form-control" v-model="phan_tram_giam_hoa_don" />
                                                <p class="mt-3"><b>Tiền thực thu:</b></p>
                                                <p><b>{{ formatToVN(tien_thuc_thu) }}</b></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </template>
                    <template v-else>
                        <BillComponent :required="true" :id="id_hoa_don_ban_hang">
                            <template #image>
                                <img style="width: 30%" v-bind:src="link_qr" alt="" />
                            </template>
                        </BillComponent>
                    </template>
                </div>
                <div class="modal-footer">
                    <template v-if="activityView == true">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="activityView = true; updateCheckingTransaction();">Close</button>
                        <router-link :to="'/admin/bill-thanh-toan/' + id_hoa_don_ban_hang" target="_blank">
                            <button type="button" class="btn btn-danger">Print an invoice</button>
                        </router-link>
                        <button type="button" class="btn btn-primary" @click=" thanhToan();">Payment</button>
                    </template>
                    <template v-else>
                        <button type="button" class="btn btn-primary" @click="activityView = true; updateCheckingTransaction();">Back</button>
                    </template>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="qrModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" style="max-width: 90vw; min-width: 300px;">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">QR Code</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="d-flex justify-content-center">
                        <VueQRCodeComponent :text="qrCodeData" :size="300" />
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>

<!-- Modal -->
<div class="modal fade" id="closeModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Close Table</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
       <p style="color: red">
        Note this may run out of deleted items,
        Unable to complete!!</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button v-on:click="confirmCloseTable()" type="button" class="btn btn-primary" data-bs-dismiss="modal" >Confirm</button>
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
import VueQRCodeComponent from "vue-qrcode-component";
import {
    useStore
} from "vuex";
import axios from "@/axiosConfig";
import Toast from "@/toastConfig";
import $ from "jquery";
import {
    apiQRcode
} from "@/globals";
import BillComponent from "@/pages/Admin/BillThanhToan";
import InputComponentVue from "@/components/InputComponent.vue";
import SelectComponent from "@/components/SelectComponent.vue";
export default {
    name: "su-dung-dich-vu",
    components: {
        VueQRCodeComponent,
        BillComponent,
        InputComponentVue,
        SelectComponent
    },

    setup() {
        const store = useStore();
        const dataBan = computed(() => store.state.dataBan);
        const dataKhuVuc = computed(() => store.state.dataKhuVuc || []);
        const dataMonAn = computed(() => store.state.dataMonAn);
        const list_chi_tiet_ban_hang = ref([]);
        const loadDataBan = () => {
            const list_khu = dataKhuVuc.value.map((item) => {
                if (item.sub_items && Array.isArray(item.sub_items)) {
                return {
                    ...item,
                    sub_items: item.sub_items.filter((item1) => {
                    const adminList = item1.list_admin?.split(",").map(admin => admin.trim());
                    return adminList.includes(user.value.id.toString());
                    })
                };
                }
                return item;
            });
            store.dispatch("onFetchBan");
            console.log(list_khu);
            // dataBan.value = dataBan.value.filter((item) => item.id_area.includes())
            
        };
        const dataBanChuyen = ref([]);
        const search = ref({});
        const user = computed(() => store.state.dataUser);
        const tong_tien = ref(0);
        const tien_thuc_thu = ref(0);
        const phan_tram_giam_hoa_don = ref(0);
        const hoa_don = ref({});
        const ghi_chu_hoa_don = ref("");
        const qrCodeData = ref("");
        const activityView = ref(true);
        const checkingTransaction = ref(false);
        const closeTableId = ref({});
        // Thông tin GD
        const BANK_ID = "970422";
        const ACCOUNT_NO = "9704229206656928914";
        const id_hoa_don_ban_hang = ref(0);
        const bill_id = ref("");
        const khach_hang = ref({});
        const id_ban_chuyen = ref("");
        const list_khu_user = ref([]);
        const link_qr = ref(
            "https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg"
        );

        function updateQRCode() {
            link_qr.value = `https://img.vietqr.io/image/${BANK_ID}-${ACCOUNT_NO}-compact2.png?amount=${tien_thuc_thu.value}&addInfo=${bill_id.value}`;
        }

        // const storeCustomer = () => {
        //     khach_hang.value.id_hoa_don = id_hoa_don_ban_hang.value;
        //     axios.post("admin/khach-hang/store", khach_hang.value, "admin");
        // };
        const storeCustomer = () => {
            khach_hang.value.id_hoa_don = id_hoa_don_ban_hang.value;
                axios.post("admin/khach-hang/store", khach_hang.value, 'admin')
                    .then(response => {
                        if(response.data.status==1){
                            activityView.value =false;
                        }
                        console.log(response.data); // Hoặc thực hiện các hành động khác
                    })
                    .catch((res) => {
                    $.each(res.response.data.errors, function (k, v) {
                        Toast("error", v[0]);
                    });
                });
        };

        const thanhToan = async () => {
            updateQRCode();
            storeCustomer();
            checkingTransaction.value = true;
            if (checkingTransaction.value == true) {
                checkTransaction();
            }
        };

        const updateCheckingTransaction = async () => {
            checkingTransaction.value = false;
        };

        function checkTransaction() {
            // Đánh dấu rằng chúng ta đã bắt đầu kiểm tra'
            const intervalId = setInterval(async () => {
                try {
                    // Thay đổi URL để sử dụng Laravel route đã cài đặt
                    const response = await axios.get("historyviettelpay");
                    const transactions = response.data.data.content; // Giả sử cấu trúc phản hồi đã được điều chỉnh phù hợp với cách Laravel gửi dữ liệu
                    if (checkingTransaction.value == false) {
                        clearInterval(intervalId);
                    }
                    if (transactions && transactions.length > 0) {
                        const latestTransaction = transactions[0]; // Giả sử giao dịch mới nhất ở đầu mảng
                        if (
                            latestTransaction.msgContent.includes(bill_id.value)
                        ) {
                            // Khi tìm thấy giao dịch phù hợp, hãy dừng việc kiểm tra
                            clearInterval(intervalId);
                            checkingTransaction.value = false; // Đặt lại trạng thái kiểm tra

                            const payload = {
                                so_tien: latestTransaction.amount,
                                noi_dung: latestTransaction.msgContent,
                                code: latestTransaction.bankTransId,
                                id_hoa_don_ban_hang,
                            };
                            const {
                                data
                            } = await axios.post(
                                "transactions",
                                payload,
                                "admin"
                            );
                            if (data.status == true) {
                                const Ob = {
                                    id_hoa_don_ban_hang: id_hoa_don_ban_hang.value,
                                };
                                axios
                                    .post(
                                        "admin/change-status-hoa-don",
                                        Ob,
                                        "admin"
                                    )
                                    .then((res) => {
                                        console.log(res.data.status);
                                        if (res.status == 200) {
                                            activityView.value = true;
                                            $("#mobanModal").modal("hide");
                                            loadDataBan();
                                            Toast("success", data.message);
                                        } else {
                                            Toast("error", data.message);
                                        }
                                    })
                                    .catch((error) => {
                                        console.error(
                                            "There was an error!",
                                            error
                                        );
                                    });
                            } else {
                                $("#mobanModal").modal("hidde");
                                loadDataBan();
                                Toast("error", data.message);
                            }
                        }
                    }
                } catch (error) {
                    console.error("Lỗi khi gọi API:", error);
                    clearInterval(intervalId);
                    checkingTransaction.value = false; // Đặt lại trạng thái kiểm tra nếu có lỗi
                }
            }, 2500); // Kiểm tra mỗi 5 giây
        }

        const getBanTheoKhuVuc = (v) => {
            axios
                .post("admin/su-dung-dich-vu/lay-du-lieu-theo-khu", v, "admin")
                .then((res) => {
                    if (res.data.data) {
                        store.commit("fecthBan", res.data.data); // Cập nhật dữ liệu vào store sử dụng mutation
                    } else {
                        Toast("error", "Không có dữ liệu bàn cho khu vực này");
                    }
                });
        };

        const openTable = (id_ban) => {
            var payload = {
                id_ban,
            };

            axios
                .post("admin/su-dung-dich-vu/tao-hoa-don", payload, "admin")
                .then((res) => {
                    if (res.data.status == 1) {
                        Toast("success", res.data.message);
                        getIdHoaDon(payload.id_ban);
                        store.dispatch("onFetchMonAn");
                        store.dispatch("onFetchBan");
                    }
                })
                .catch((res) => {
                    $.each(res.response.data.errors, function (k, v) {
                        Toast("error", v[0]);
                    });
                });
        };
       

        const confirmCloseTable = () => {
            
            const payload = {
                id_ban: closeTableId.value.id_ban,
                id_hoa_don:hoa_don.value.id,
            };
            console.log(payload);
            axios
                .post("admin/su-dung-dich-vu/dong-ban", payload, "admin")
                .then((res) => {
                    if (res.data.status === 1) {
                        Toast("success", res.data.message);
                        store.dispatch("onFetchBan");
                    
                    }
                })
                .catch((res) => {
                    $.each(res.response.data.errors, function (k, v) {
                        Toast("error", v[0]);
                    });
                });
        };

        const getIdHoaDon = (id_ban) => {
            var payload = {
                id_ban,
            };

            axios
                .post("admin/su-dung-dich-vu/get-id-hoa-don", payload, "admin")
                .then((res) => {
                    if (res.data.status == 1) {
                        hoa_don.value = res.data.hoa_don;
                        tien_thuc_thu.value = hoa_don.value.tien_thuc_nhan;
                        phan_tram_giam_hoa_don.value =
                            hoa_don.value.phan_tram_giam;
                        ghi_chu_hoa_don.value = hoa_don.value.ghi_chu;
                        id_hoa_don_ban_hang.value = hoa_don.value.id;
                        bill_id.value = "HDBH" + hoa_don.value.id;
                        getChiTietHoaDon(hoa_don.value.id);
                        store.dispatch("onFetchMonAn");
                        dataBanChuyen.value = dataBan.value
                            .filter(item => item.id !== hoa_don.value.id_ban && item.is_open_table == 1)
                            .map(item => {
                                return {
                                    text: item.name_table,
                                    value: item.id
                                };
                            });
                    }
                })
                .catch((res) => {
                    $.each(res.response.data.errors, function (k, v) {
                        Toast("error", v[0]);
                    });
                });
        };

        const themMonAn = (v) => {
            console.log(hoa_don.value.id, v);

            const payload = {
                id_hoa_don: hoa_don.value.id,
                id_mon_an: v.id,
                don_gia: v.gia_ban,
            };
            axios
                .post("admin/su-dung-dich-vu/them-mon-an", payload, "admin")
                .then((res) => {
                    if (res.data.status) {
                        Toast("success", res.data.message);
                        getIdHoaDon(hoa_don.value.id_ban);
                        getChiTietHoaDon(hoa_don.value.id);
                    }
                })
                .catch((errors) => {
                    const listErrors = errors.response.data.errors;
                    if (listErrors) {
                        Object.values(listErrors).forEach((value) => {
                            Toast("error", "Thông báo<br>" + value[0]);
                        });
                    } else {
                        console.error("Không có lỗi trả về từ server");
                    }
                });
        };

        const getChiTietHoaDon = (id) => {
            const payload = {
                id_hoa_don: id,
            };
            axios
                .post("admin/su-dung-dich-vu/get-chi-tiet", payload, "admin")
                .then((res) => {
                    list_chi_tiet_ban_hang.value = res.data.data;
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

        function formatToVN(number) {
            number = parseInt(number);
            return number.toLocaleString('vi-VN', {
                style: 'currency',
                currency: 'VND'
            });
        }
        const updateMonAn = (v) => {
            axios
                .post(
                    "admin/su-dung-dich-vu/update-chi-tiet-ban-hang",
                    v,
                    "admin"
                )
                .then((res) => {
                    if (res.data.status) {
                        Toast("success", res.data.message);
                        getIdHoaDon(hoa_don.value.id_ban);
                        getChiTietHoaDon(v.id_hoa_don);
                    }
                })
                .catch((errors) => {
                    const listErrors = errors.response.data.errors;
                    if (listErrors) {
                        Object.values(listErrors).forEach((value) => {
                            Toast("error", "Thông báo<br>" + value[0]);
                        });
                    } else {
                        console.error("Không có lỗi trả về từ server");
                    }
                });
        };

        const deleteChiTiet = (v) => {
            axios
                .post("admin/su-dung-dich-vu/xoa-chi-tiet", v, "admin")
                .then((res) => {
                    if (res.data.status) {
                        Toast("success", res.data.message);
                        getIdHoaDon(hoa_don.value.id_ban);
                        getChiTietHoaDon(hoa_don.value.id);
                    }
                });
        };

        const updateHoaDon = () => {
            var payload = {
                id: hoa_don.value.id,
                id_ban: hoa_don.value.id_ban,
                phan_tram_giam: phan_tram_giam_hoa_don.value,
                ghi_chu: ghi_chu_hoa_don.value,
            };
            axios
                .post(
                    "admin/su-dung-dich-vu/update-hoa-don-ban-hang",
                    payload,
                    "admin"
                )
                .then((res) => {
                    if (res.data.status == 1) {
                        Toast("success", res.data.message);
                        getIdHoaDon(hoa_don.value.id_ban);
                    }
                    else{
                        Toast("error", res.data.message);
                        
                    }
                })
                .catch((res) => {
                    $.each(res.response.data.errors, function (k, v) {
                        Toast("error", v[0]);
                    });
                });
        };

        async function generateQRCode(id_ban) {
            try {
                const idBan = id_ban; // Thay thế bằng id_ban thực tế
                const {
                    data
                } = await axios.get(`admin/create-token/${idBan}`, 'admin');
                console.log(data);
                if(data.status == 0) {
                    Toast("error", data.message);
                } else {
                    qrCodeData.value = apiQRcode + data.url;
                }
            } catch (error) {
                console.error("Lỗi khi tạo QR Code:", error);
            }
        }

        function searchMonAn() {
            axios
                .post('admin/mon-an/tim-mon', search.value)
                .then((res) => {
                    console.log(res.data.data);
                    store.commit('fecthMonAn', res.data.data);
                });
        }

        const gopBan = () => {
            var payload = {
                id_ban_hien_tai: hoa_don.value.id_ban,
                id_ban_can_gop: id_ban_chuyen.value

            };
            axios
                .post(
                    "admin/ban/gop-ban",
                    payload,
                    "admin"
                )
                .then((res) => {
                    if (res.data.status == 1) {
                        Toast("success", res.data.message);
                        getIdHoaDon(hoa_don.value.id_ban);
                        getChiTietHoaDon(hoa_don.value.id);
                        store.dispatch("onFetchBan");

                    }
                })
                .catch((res) => {
                    $.each(res.response.data.errors, function (k, v) {
                        Toast("error", v[0]);
                    });
                });
        };
        onMounted(() => {
            store.dispatch("onFetchBan");
            store.dispatch("onFetchKhuVuc");
            store.dispatch("onFetchMonAn");
            store.dispatch("onFetchUserLogin");
        });

        return {
            user,
            store,
            dataBan,
            dataKhuVuc,
            dataMonAn,
            id_hoa_don_ban_hang,
            tong_tien,
            tien_thuc_thu,
            list_chi_tiet_ban_hang,
            phan_tram_giam_hoa_don,
            ghi_chu_hoa_don,
            qrCodeData,
            link_qr,
            dataBanChuyen,
            id_ban_chuyen,
            activityView,
            khach_hang,
            list_khu_user,
            loadDataBan,
            getBanTheoKhuVuc,
            openTable,
            getIdHoaDon,
            themMonAn,
            getChiTietHoaDon,
            updateMonAn,
            deleteChiTiet,
            updateHoaDon,
            generateQRCode,
            thanhToan,
            updateCheckingTransaction,
            searchMonAn,
            search,
            gopBan,
            formatToVN,
            closeTableId,
            confirmCloseTable
        };
    },
};
</script>

<style>
.loader2 {
    background-color: black;
    position: relative;
    width: 2.5em;
    height: 2.5em;
    transform-origin: center;
    transition: 1s;
    border-radius: 50px;
    box-shadow: inset 0px 0px 10px purple,
        inset 5px 5px 12px rgba(44, 0, 114, 0.8),
        inset 8px 8px 1px rgba(160, 120, 255, 0.7),
        0px 0px 1px rgba(160, 120, 255, 0.6);
    animation: 1.2s linear infinite 0s running first682;
}

.loader2 div {
    width: inherit;
    height: inherit;
    position: absolute;
}

#first {
    transform: rotate(90deg)
}

#first::before {
    --width: 1em;
    --height: 1em;
    content: "";
    position: absolute;
    top: 100%;
    left: calc(50% - var(--width)/2);
    width: 1em;
    height: 1em;
    background-color: rgb(44, 0, 114);
    box-shadow: inset 5px 5px 10px rgb(160, 120, 255),
        0px 0px 2px white;
    border-radius: 50px;
    animation: 0.8s ease-in 0s infinite running jump2;
}

#second {
    transform: rotate(90deg);
}

#second::before {
    --width: 1em;
    --height: 1em;
    content: "";
    position: absolute;
    top: 100%;
    left: calc(50% - var(--width)/2);
    width: 1em;
    height: 1em;
    background-color: rgb(44, 0, 114);
    box-shadow: inset 5px 5px 10px rgb(160, 120, 255),
        0px 0px 2px white;
    border-radius: 50px;
    animation: 1.5s ease-in 0s infinite running jump2;
}

#third {
    transform: rotate(90deg)
}

#third::before {
    --width: 1em;
    --height: 1em;
    content: "";
    position: absolute;
    top: 100%;
    left: calc(50% - var(--width)/2);
    width: 1em;
    height: 1em;
    background-color: rgb(44, 0, 114);
    box-shadow: inset 5px 5px 10px rgb(160, 120, 255),
        0px 0px 2px white;
    border-radius: 50px;
    animation: 1.6s ease-in 0s infinite running jump2;
}

.loader2::after {
    --width: 1em;
    --height: 1em;
    content: "";
    position: absolute;
    top: 100%;
    left: calc(50% - var(--width)/2);
    width: 1em;
    height: 1em;
    background-color: rgb(44, 0, 114);
    box-shadow: inset 5px 5px 10px rgb(160, 120, 255),
        0px 0px 2px white;
    border-radius: 50px;
    animation: 1.2s ease-in 1s alternate infinite running jump2;
}

@keyframes first682 {
    0% {
        transform: rotate(0deg);
    }

    25% {
        transform: rotate(0deg);
        transform: rotate(90deg)
    }

    50% {
        transform: rotate(90deg);
        transform: rotate(180deg);
    }

    75% {
        transform: rotate(180deg);
        transform: rotate(270deg)
    }

    100% {
        transform: rotate(270deg);
        transform: rotate(360deg);
    }
}

@keyframes jump2 {
    0% {
        top: 100%;
    }

    25% {
        top: 230%
    }

    50% {
        top: 100%;
    }

    75% {
        height: 0.6em
    }

    100% {
        height: 1em
    }
}
</style>
