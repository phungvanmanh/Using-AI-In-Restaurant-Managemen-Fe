<template>
    <div class="payment-form">
        <h2 class="text-nowrap">Form Thanh Toán VNPAY</h2>
        <label for="">Money</label>
        <input type="text" v-model="amount" class="form-control" />
        <label for="">Content</label>
        <input type="text" v-model="bill_id" class="form-control" />
        <button @click="thanhToan()">Pay</button>
        <img style="width: 100%" v-bind:src="link_qr" alt="" />
    </div>
</template>

<script>
import { ref } from "vue";
import axios from "@/axiosConfig"; 
import Toast from "@/toastConfig";
export default {
    name: "pay-ment",
    setup() {
        const amount = ref(0);
        const bill_id = ref("");
        const checkingTransaction = ref(false);
        const BANK_ID = '970422';
        const ACCOUNT_NO = '9704229206656928914';
        const link_qr = ref(
            "https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg"
        );
        const thanhToan = async () => {
            updateQRCode();
            if (!checkingTransaction.value) {
                checkTransaction();
            }
        };
        function updateQRCode() {
            link_qr.value = `https://img.vietqr.io/image/${BANK_ID}-${ACCOUNT_NO}-compact2.png?amount=${amount.value}&addInfo=${bill_id.value}&accountName=PHUNG_VAN_MANH`;
        }

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
                            };

                            // Đảm bảo đường dẫn API đến Laravel chính xác và có thể xử lý request
                            const {data} = await axios.post(
                                "transactions",
                                payload
                            );
                            if(data.status == true) {
                                Toast(
                                    "success",
                                    data.message
                                );
                            } else {
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

        return {
            amount,
            bill_id,
            link_qr,
            thanhToan,
        };
    },
};
</script>

<style scoped>
.payment-form {
    max-width: 400px;
    margin: 2rem auto;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 8px;
}

.form-group {
    margin-bottom: 1rem;
}

.form-group label {
    display: block;
    margin-bottom: 0.5rem;
}

.form-group input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
}

button {
    display: inline-block;
    background-color: #007bff;
    color: white;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}
</style>
