<template>
    <div class="row">
        <div class="col-12">
            <CardComponentVue :required="false">
                <template #card-header>
                    <h5><b>Online payment history</b></h5>
                </template>
                <template #card-body>
                    <TableComponentVue>
                        <template #thead>
                            <tr>
                                <th class="text-center align-middle">#</th>
                                <th class="text-center align-middle">Code Bill</th>
                                <th class="text-center align-middle">Table</th>
                                <th class="text-center align-middle">Amount</th>
                                <th class="text-center align-middle">Content</th>
                                <th class="text-center align-middle">Staff Name</th>
                                <th class="text-center align-middle">Date</th>
                            </tr>
                        </template>
                        <template #tbody>
                            <template v-for="(value, index) in data" :key="index">
                                <tr>
                                    <th class="text-center align-middle">{{ index + 1 }}</th>
                                    <td class="align-middle">{{ value.id_hoa_don }}</td>
                                    <td class="align-middle">{{ value.name_table }}</td>
                                    <td class="align-middle">{{ value.so_tien }}</td>
                                    <td class="align-middle">{{ value.noi_dung }}</td>
                                    <td class="align-middle">{{ value.first_last_name }}</td>
                                    <td class="text-center align-middle">{{ value.transDate }}</td>
                                </tr>
                            </template>
                        </template>
                    </TableComponentVue>
                </template>
            </CardComponentVue>
        </div>
    </div>
</template>
<script>
import TableComponentVue from '@/components/TableComponent.vue';
import CardComponentVue from '@/components/CardComponent.vue';
import { onMounted, ref } from 'vue';
import axios from '@/axiosConfig';
export default {
    name : "lich-su-thanh-toan",
    components : {
        TableComponentVue,
        CardComponentVue
    },
    setup() {
        const data = ref([]);
        const getDataHistoryBuill = () => {
            axios
                .get('admin/log/lich-su-thanh-toan','admin')
                .then((res) => {
                    data.value = res.data.data;
                });
        }
        onMounted(() => {
            getDataHistoryBuill();
        })

        return {
            data,
        }
    }
}
</script>