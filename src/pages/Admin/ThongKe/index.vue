<template>
    <div class="row">
        <div class="card">
            <div class="card-header">
                <div class="row">
                    <div class="col">
                        <h5>Thống Kê </h5>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-lg-1"></div>
                    <div class="col-lg-1 text-end">
                        <p class="mt-2">Từ Ngày:</p>
                    </div>
                    <div class="col-lg-3">
                        <input v-model="thong_ke.begin" type="date" class="form-control">
                    </div>
                    <div class="col-lg-1 text-end">
                        <p class="mt-2">Đến Ngày:</p>
                    </div>
                    <div class="col-lg-3">
                        <input v-model="thong_ke.end" type="date" class="form-control">
                    </div>
                    <div class="col-lg-2">
                        <button @click="loadData" class="btn btn-primary">Thống Kê</button>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-2"></div>
                    <div class="col-lg-8">
                        <BarChartComponent v-if="loaded"
                        :chartData="dataChart"
                    ></BarChartComponent>
                    </div>
                    <div class="col-lg-2"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
// import axios from 'axios';
import axios from "@/axiosConfig";
import BarChartComponent from "@/components/BarChartComponent.vue";
// import Chart from 'chart.js/auto';

// import Toast from '@/toastConfig';

export default {
    name: 'thong-ke',
    components:{
        BarChartComponent,
    },
    setup() {
        const loaded = ref(false);
        const thong_ke = ref({ begin: '', end: '' });
        const chartCanvas = ref(null);

        const dataChart = ref({
            labels: [1],
            datasets: [
                {
                    data: [],
                    label: "Thống Kê",
                    barPercentage: 0.5,
                    backgroundColor: ["#0d6efd","#1ABC9C","#F1C40F","#8E44AD"],
                },
                
               
            ],
            backgroundColor: [],
            borderColor: ["#1ABC9C","#F1C40F"],
            borderWidth: 1,
        });
        const loadData = async () => {
            loaded.value = false;
            try {
                const res = await axios.post('admin/thong-ke/data-thong-ke-1', thong_ke.value); 
                dataChart.value.labels = res.data.list_label;
                dataChart.value.datasets[0].data = res.data.list_data;
                loaded.value = true;
            } catch (error) {
                console.error("Error loading data:", error.response.data); 
            }
            
        }

        onMounted(async () => {
            const date = new Date();
            const subday = new Date(date.setDate(date.getDate() - 0));
            thong_ke.value.begin = subday.toISOString().slice(0, 10);
            thong_ke.value.end = new Date().toISOString().slice(0, 10);
        });

        return {
            loaded,
            thong_ke,
            loadData,
            chartCanvas,
            dataChart
        };
    }
}
</script>

<style scoped>
</style>
