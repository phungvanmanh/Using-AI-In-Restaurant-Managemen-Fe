<template>
<div>
    <div class="row ">
        <h5>Calculate profitability</h5>
    </div>
    <div class="row">
        <div class="col-6">
            <div class="card">
                <div class="card-body">
                    <div>
                        <label for="ngay_bat_dau">Start date:</label>
                        <input class="form-control" type="date" v-model="ngayBatDau" id="ngay_bat_dau">
                    </div>
                    <div>
                        <label for="ngay_ket_thuc">End date:</label>
                        <input class="form-control" type="date" v-model="ngayKetThuc" id="ngay_ket_thuc">
                    </div>
                </div>
                <div class="card-footer text-end">
                    <button class="btn btn-primary mt-3" @click="fetchDoanhThu">Calculate revenue</button>

                </div>
            </div>
        </div>
        <div class="col-6">
            <div class="card">
                <div class="card-body">

                    <div v-if="data">
                        <p :style="{ color: 'blue' }">Total Warehousing: <span style="color: brown;">{{ formatToVN(data.tong_tien_nhap_kho) }}</span> </p>
                        <p :style="{ color: 'blue' }">Total sales proceeds: <span style="color: brown;">{{ formatToVN(data.tong_tien_ban_hang) }}</span> </p>
                        <p :style="{ color: 'blue' }">Total salary staff: <span style="color: brown;">{{ formatToVN(data.total_luong) }}</span> </p>
                        <p :style="{ color: 'blue' }">Profit: <span style="color: brown;">{{ formatToVN(data.loi_nhuan) }}</span> </p>
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
    onMounted
} from 'vue';
// import axios from 'axios';
import axios from "@/axiosConfig";

export default {
    name: 'doanh-thu',
    setup() {
        const ngayBatDau = ref('');
        const ngayKetThuc = ref('');
        const data = ref(null);
        const isFlashing = ref(true);

        const fetchDoanhThu = async () => {
            try {
                const response = await axios.post('admin/thong-ke/doanh-thu', {
                    ngay_bat_dau: ngayBatDau.value,
                    ngay_ket_thuc: ngayKetThuc.value,
                    
                },'admin');
                data.value = response.data.data;
            } catch (error) {
                console.error('Error fetching doanh thu:', error);
            }
        };

        function formatToVN(number) {
            number = parseInt(number);
            return number.toLocaleString('vi-VN', {
                style: 'currency',
                currency: 'VND'
            });
        }
        // Tạm giả định một hàm để lấy dữ liệu
        async function fetchData() {
            // Giả sử bạn nhận dữ liệu ở đây
            data.value = {
                tong_tien_nhap_kho: '0',
                tong_tien_ban_hang: '0',
                total_luong:'0',
                loi_nhuan: '0'
            };
        }

        fetchData();
        onMounted(() => {
            setInterval(() => {
                isFlashing.value = !isFlashing.value;
            }, 1000);
        });
        return {
            ngayBatDau,
            ngayKetThuc,
            data,
            isFlashing,
            fetchDoanhThu,
            formatToVN,
        }
    }
}
</script>

<style>
.flashing {
    animation: flash 1s infinite;
}

@keyframes flash {
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
</style>
