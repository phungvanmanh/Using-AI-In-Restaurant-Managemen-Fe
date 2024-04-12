<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-body">
                    <ul class="nav nav-tabs nav-primary mb-0" role="tablist">
                        <li
                            class="nav-item"
                            role="presentation"
                            v-on:click="loadDataBan()"
                        >
                            <a
                                class="nav-link active"
                                data-bs-toggle="tab"
                                href="#primaryhome"
                                role="tab"
                                aria-selected="true"
                            >
                                <div class="d-flex align-items-center">
                                    <div class="tab-icon">
                                        <i
                                            class="bx bx-comment-detail font-18 me-1"
                                        ></i>
                                    </div>
                                    <div class="tab-title">Tất Cả</div>
                                </div>
                            </a>
                        </li>
                        <template v-for="(value, key) in dataKhuVuc" :key="key">
                            <li
                                class="nav-item"
                                role="presentation"
                                v-on:click="getBanTheoKhuVuc(value)"
                            >
                                <a
                                    class="nav-link"
                                    data-bs-toggle="tab"
                                    v-bind:href="'#primaryhome' + key"
                                    role="tab"
                                    aria-selected="false"
                                    tabindex="-1"
                                >
                                    <div class="d-flex align-items-center">
                                        <div class="tab-icon">
                                            <i
                                                class="bx bx-bookmark-alt font-18 me-1"
                                            ></i>
                                        </div>
                                        <div class="tab-title">
                                            {{ value.name_area }}
                                        </div>
                                    </div>
                                </a>
                            </li>
                        </template>
                    </ul>
                    <div class="tab-content pt-3">
                        <div class="row">
                            <template
                                v-for="(value, key) in dataBan"
                                :key="key"
                            >
                                <template v-if="value.status == 1">
                                    <div class="col-2">
                                        <div class="card radius-10">
                                            <div class="card-body">
                                                <div class="text-center">
                                                    <div
                                                        class="widgets-icons rounded-circle mx-auto bg-light-primary text-primary mb-3"
                                                    >
                                                        <i
                                                            class="fa-solid fa-couch"
                                                        ></i>
                                                    </div>
                                                    <h4 class="my-1">
                                                        {{ value.name_table }}
                                                    </h4>
                                                    <template
                                                        v-if="
                                                            value.is_open_table ==
                                                            0
                                                        "
                                                    >
                                                        <button
                                                            @click="
                                                                openTable(
                                                                    value.id
                                                                )
                                                            "
                                                            class="btn btn-primary"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#mobanModal"
                                                        >
                                                            Mở Bàn
                                                        </button>
                                                    </template>
                                                    <template v-else>
                                                        <button
                                                            class="btn btn-secondary me-2"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#qrModal"
                                                            @click="
                                                                generateQRCode(
                                                                    value.id
                                                                )
                                                            "
                                                        >
                                                            QR Login
                                                        </button>
                                                        <button
                                                            class="btn btn-success"
                                                            @click="
                                                                getIdHoaDon(
                                                                    value.id
                                                                )
                                                            "
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#mobanModal"
                                                        >
                                                            Thanh Toán
                                                        </button>
                                                    </template>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </template>
                            </template>
                        </div>
                    </div>
                    <div
                        class="modal fade"
                        id="mobanModal"
                        tabindex="-1"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                    >
                        <div
                            class="modal-dialog modal-xl"
                            style="max-width: 100%"
                        >
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1
                                        class="modal-title fs-5"
                                        id="exampleModalLabel"
                                    >
                                        Mở Bàn
                                    </h1>
                                    <button
                                        type="button"
                                        class="btn-close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                    ></button>
                                </div>
                                <div class="modal-body">
                                    <template v-if="activityView === true">
                                        <div class="row">
                                            <div class="col-md-4">
                                                <div class="card">
                                                    <div class="card-header">
                                                        <h6>Danh sách món ăn</h6>
                                                    </div>
                                                    <div class="card-body">
                                                        <div class="mb-3">
                                                            <div
                                                                class="table-responsive"
                                                                style="
                                                                    max-height: 450px;
                                                                "
                                                            >
                                                                <table
                                                                    class="table table-bordered"
                                                                >
                                                                    <thead>
                                                                        <tr>
                                                                            <th
                                                                                class="align-middle text-center"
                                                                            >
                                                                                #
                                                                            </th>
                                                                            <th
                                                                                class="align-middle text-center"
                                                                            >
                                                                                Tên
                                                                                Hàng
                                                                            </th>
                                                                            <th
                                                                                class="align-middle text-center"
                                                                            >
                                                                                Hình
                                                                                Ảnh
                                                                            </th>
                                                                            <th
                                                                                class="align-middle text-center"
                                                                            >
                                                                                Action
                                                                            </th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <template
                                                                            v-for="(
                                                                                value,
                                                                                key
                                                                            ) in dataMonAn"
                                                                            :key="
                                                                                key
                                                                            "
                                                                        >
                                                                            <tr>
                                                                                <td
                                                                                    class="align-middle text-center"
                                                                                >
                                                                                    {{
                                                                                        key +
                                                                                        1
                                                                                    }}
                                                                                </td>
                                                                                <td
                                                                                    class="align-middle text-center"
                                                                                >
                                                                                    {{
                                                                                        value.food_name
                                                                                    }}
                                                                                </td>
                                                                                <td
                                                                                    class="align-middle text-center"
                                                                                >
                                                                                    1
                                                                                </td>
                                                                                <td
                                                                                    class="align-middle text-center"
                                                                                >
                                                                                    <button
                                                                                        v-on:click="
                                                                                            themMonAn(
                                                                                                value
                                                                                            )
                                                                                        "
                                                                                        class="btn btn-primary"
                                                                                    >
                                                                                        Thêm
                                                                                    </button>
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
                                            <div class="col-md-8">
                                                <div class="card">
                                                    <div class="card-header">
                                                        Món ăn sử dụng
                                                    </div>
                                                    <div class="card-body">
                                                        <table
                                                            class="table table-bordered"
                                                        >
                                                            <thead>
                                                                <tr>
                                                                    <th
                                                                        class="text-center align-middle"
                                                                    >
                                                                        #
                                                                    </th>
                                                                    <th
                                                                        class="text-center align-middle"
                                                                    >
                                                                        Tên món ăn
                                                                    </th>
                                                                    <th
                                                                        class="text-center align-middle"
                                                                    >
                                                                        Số lượng
                                                                    </th>
                                                                    <th
                                                                        class="text-center align-middle"
                                                                    >
                                                                        Đơn giá
                                                                    </th>
                                                                    <th
                                                                        class="text-center align-middle"
                                                                    >
                                                                        % giảm giá
                                                                    </th>
                                                                    <th
                                                                        class="text-center align-middle"
                                                                    >
                                                                        Thành tiền
                                                                    </th>
                                                                    <th
                                                                        class="text-center align-middle"
                                                                    >
                                                                        Ghi chú
                                                                    </th>
                                                                    <th
                                                                        class="text-center align-middle"
                                                                    >
                                                                        Action
                                                                    </th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <template
                                                                    v-for="(
                                                                        value, key
                                                                    ) in list_chi_tiet_ban_hang"
                                                                    :key="key"
                                                                >
                                                                    <tr>
                                                                        <th
                                                                            class="align-middle"
                                                                        >
                                                                            {{
                                                                                key +
                                                                                1
                                                                            }}
                                                                        </th>
                                                                        <td
                                                                            class="align-middle"
                                                                        >
                                                                            {{
                                                                                value.food_name
                                                                            }}
                                                                        </td>
                                                                        <td
                                                                            class="align-middle"
                                                                        >
                                                                            <input
                                                                                v-on:change="
                                                                                    updateMonAn(
                                                                                        value
                                                                                    )
                                                                                "
                                                                                v-model="
                                                                                    value.so_luong
                                                                                "
                                                                                type="number"
                                                                                class="form-control"
                                                                            />
                                                                        </td>
                                                                        <td
                                                                            class="align-middle"
                                                                        >
                                                                            <input
                                                                                v-on:change="
                                                                                    updateMonAn(
                                                                                        value
                                                                                    )
                                                                                "
                                                                                v-model="
                                                                                    value.don_gia
                                                                                "
                                                                                type="number"
                                                                                class="form-control"
                                                                            />
                                                                        </td>
                                                                        <td
                                                                            class="align-middle"
                                                                        >
                                                                            <input
                                                                                v-on:change="
                                                                                    updateMonAn(
                                                                                        value
                                                                                    )
                                                                                "
                                                                                v-model="
                                                                                    value.phan_tram_giam
                                                                                "
                                                                                type="number"
                                                                                class="form-control"
                                                                            />
                                                                        </td>
                                                                        <td
                                                                            class="align-middle"
                                                                        >
                                                                            <!-- {{formatToVN(value.thanh_tien) }} -->
                                                                            {{
                                                                                value.thanh_tien
                                                                            }}
                                                                        </td>
                                                                        <td
                                                                            class="align-middle"
                                                                        >
                                                                            <input
                                                                                v-on:change="
                                                                                    updateMonAn(
                                                                                        value
                                                                                    )
                                                                                "
                                                                                v-model="
                                                                                    value.ghi_chu
                                                                                "
                                                                                type="text"
                                                                                class="form-control"
                                                                            />
                                                                        </td>
                                                                        <td
                                                                            class="align-middle"
                                                                        >
                                                                            <button
                                                                                v-on:click="
                                                                                    deleteChiTiet(
                                                                                        value
                                                                                    )
                                                                                "
                                                                                class="btn btn-danger"
                                                                            >
                                                                                Xóa
                                                                            </button>
                                                                        </td>
                                                                    </tr>
                                                                </template>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    <div
                                                        class="card-footer bg-white text-end"
                                                    >
                                                        <div class="row">
                                                            <div class="col-6">
                                                                <textarea
                                                                    @change="
                                                                        updateHoaDon()
                                                                    "
                                                                    v-model="
                                                                        ghi_chu_hoa_don
                                                                    "
                                                                    class="form-control"
                                                                    cols="30"
                                                                    rows="4"
                                                                ></textarea>
                                                            </div>
                                                            <div class="col-3">
                                                                <img
                                                                    style="
                                                                        width: 100%;
                                                                    "
                                                                    alt=""
                                                                />
                                                            </div>
                                                            <div class="col-3">
                                                                <div class="row">
                                                                    <div
                                                                        class="col-6"
                                                                    >
                                                                        <p>
                                                                            <b
                                                                                >Tổng
                                                                                thanh
                                                                                toán:</b
                                                                            >
                                                                        </p>
                                                                        <p
                                                                            class="mt-3"
                                                                        >
                                                                            <b
                                                                                >Phần
                                                                                trăm
                                                                                giảm:
                                                                            </b>
                                                                        </p>
                                                                        <p>
                                                                            <b
                                                                                >Tiền
                                                                                thực
                                                                                thu:
                                                                            </b>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        class="col-6"
                                                                    >
                                                                        <p>
                                                                            <b>{{
                                                                                tong_tien
                                                                            }}</b>
                                                                        </p>
                                                                        <input
                                                                            @change="
                                                                                updateHoaDon()
                                                                            "
                                                                            type="number"
                                                                            class="form-control"
                                                                            v-model="
                                                                                phan_tram_giam_hoa_don
                                                                            "
                                                                        />
                                                                        <p
                                                                            class="mt-3"
                                                                        >
                                                                            <b>{{
                                                                                tien_thuc_thu
                                                                            }}</b>
                                                                        </p>
                                                                    </div>
                                                                </div>
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
                                        <button
                                            type="button"
                                            class="btn btn-secondary"
                                            data-bs-dismiss="modal"
                                        >
                                            Đóng
                                        </button>
                                        <router-link
                                            :to="
                                                '/admin/bill-thanh-toan/' +
                                                id_hoa_don_ban_hang
                                            "
                                            target="_blank"
                                        >
                                            <button
                                                type="button"
                                                class="btn btn-danger"
                                            >
                                                In Hóa Đơn
                                            </button>
                                        </router-link>
    
                                        <button
                                            type="button"
                                            class="btn btn-primary"
                                            @click="activityView = false; thanhToan()"
                                        >
                                            Thanh Toán
                                        </button>
                                    </template>
                                    <template v-else>
                                        <button
                                            type="button"
                                            class="btn btn-primary"
                                            @click="activityView = true; checkingTransaction = false"
                                        >
                                            Quay lại
                                        </button>
                                    </template>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        class="modal fade"
                        id="qrModal"
                        tabindex="-1"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                    >
                        <div class="modal-dialog" style="max-width: 400px">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1
                                        class="modal-title fs-5"
                                        id="exampleModalLabel"
                                    >
                                        QR Code
                                    </h1>
                                    <button
                                        type="button"
                                        class="btn-close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                    ></button>
                                </div>
                                <div class="modal-body">
                                    <div class="d-flex justify-content-center">
                                        <VueQRCodeComponent
                                            :class="float - center"
                                            :text="qrCodeData"
                                            :size="300"
                                        />
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button
                                        type="button"
                                        class="btn btn-secondary"
                                        data-bs-dismiss="modal"
                                    >
                                        Đóng
                                    </button>
                                    <!-- <button
                                        type="button"
                                        class="btn btn-primary"
                                        @click="generateQRCode"
                                    >
                                        Tạo QR Login
                                    </button> -->
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
import { ref, computed, onMounted } from "vue";
import VueQRCodeComponent from "vue-qrcode-component";
import { useStore } from "vuex";
import axios from "@/axiosConfig";
import Toast from "@/toastConfig";
import $ from "jquery";
import { apiQRcode } from "@/globals";
import BillComponent from "@/pages/Admin/BillThanhToan";
export default {
    name: "su-dung-dich-vu",
    components: {
        VueQRCodeComponent,
        BillComponent
    },

    setup() {
        const store = useStore();
        const dataBan = computed(() => store.state.dataBan);
        const dataKhuVuc = computed(() => store.state.dataKhuVuc);
        const dataMonAn = computed(() => store.state.dataMonAn);
        const list_chi_tiet_ban_hang = ref([]);
        const loadDataBan = () => {
            store.dispatch("onFetchBan");
        };
        const tong_tien = ref(0);
        const tien_thuc_thu = ref(0);
        const phan_tram_giam_hoa_don = ref(0);
        const hoa_don = ref({});
        const ghi_chu_hoa_don = ref("");
        const qrCodeData = ref("");
        const activityView = ref(true);
        const checkingTransaction = ref(false);
        // Thông tin GD
        const BANK_ID = '970422';
        const ACCOUNT_NO = '9704229206656928914';
        const id_hoa_don_ban_hang = ref("");
        const bill_id = ref("");

        const link_qr = ref(
            "https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg"
        );

        function updateQRCode() {
            link_qr.value = `https://img.vietqr.io/image/${BANK_ID}-${ACCOUNT_NO}-compact2.png?amount=${tien_thuc_thu.value}&addInfo=${bill_id.value}&accountName=PHUNG_VAN_MANH`;
        }

        const thanhToan = async () => {
            updateQRCode();
            if (!checkingTransaction.value) {
                checkTransaction();
            }
        };

        function checkTransaction() {
            checkingTransaction.value = true; // Đánh dấu rằng chúng ta đã bắt đầu kiểm tra
            const intervalId = setInterval(async () => {
                try {
                    // Thay đổi URL để sử dụng Laravel route đã cài đặt
                    const response = await axios.get("historyviettelpay");
                    const transactions = response.data.data.content; // Giả sử cấu trúc phản hồi đã được điều chỉnh phù hợp với cách Laravel gửi dữ liệu
                    console.log(transactions[0]);
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

                            // Đảm bảo đường dẫn API đến Laravel chính xác và có thể xử lý request
                            const {data} = await axios.post(
                                "transactions",
                                payload
                            );
                            if(data.status == true) {
                                const Ob = {
                                    'id_hoa_don_ban_hang' : id_hoa_don_ban_hang.value
                                }
                                axios.post("admin/change-status-hoa-don", Ob)
                                    .then(res => {
                                        console.log(res.data.status);
                                        if(res.status == 200) {
                                            $('#mobanModal').modal('hide');
                                            loadDataBan();
                                            Toast(
                                                "success",
                                                data.message
                                            );
                                        }
                                    })
                                    .catch(error => {
                                        console.error("There was an error!", error);
                                    });
                               
                            } else {
                                $('#mobanModal').modal('hidde');
                                loadDataBan();
                                Toast(
                                    "error",
                                    data.message
                                );
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
            // console.log(v.id);
            axios
                .post("admin/su-dung-dich-vu/lay-du-lieu-theo-khu", v, "admin")
                .then((res) => {
                    if (res.data.data) {
                        // Kiểm tra xem có dữ liệu trả về không
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
                    tong_tien.value = list_chi_tiet_ban_hang.value
                        .map((item) => item.thanh_tien || 0)
                        .reduce((acc, current) => acc + current, 0);
                })
                .catch((error) => {
                    console.error("Lỗi khi lấy chi tiết hóa đơn:", error);
                    // Xử lý lỗi nếu cần
                });
        };
        // function formatToVN (number) {
        //     number = parseInt(number);
        //     return number.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
        // }
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
                const { data } = await axios.get(`admin/create-token/${idBan}`);
                qrCodeData.value = apiQRcode + data.url;
            } catch (error) {
                console.error("Lỗi khi tạo QR Code:", error);
            }
        }

        onMounted(() => {
            store.dispatch("onFetchBan");
            store.dispatch("onFetchKhuVuc");
            store.dispatch("onFetchMonAn");
        });

        return {
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
            activityView,
            loadDataBan,
            getBanTheoKhuVuc,
            openTable,
            getIdHoaDon,
            themMonAn,
            getChiTietHoaDon,
            // formatToVN,
            updateMonAn,
            deleteChiTiet,
            updateHoaDon,
            generateQRCode,
            thanhToan,
        };
    },
};
</script>
