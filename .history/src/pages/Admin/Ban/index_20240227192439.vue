<template>
    <div class="row">
        <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12">
            <CardComponent>
                <template #card-header>
                    <span><b>Add New Table</b></span>
                </template>
                <template #card-body>
                    <InputComponent
                        label="Name table"
                        placeholder="Enter the name table..."
                    />
                    <InputComponent
                        label="Slug table"
                        :disabled="true"
                    />
                    <SelectComponent label="Area" :options="area" />
                    <SelectComponent label="Status" :options="status" />
                </template>
                <template #card-footer>
                    <button class="btn btn-primary float-end">Add news</button>
                </template>
            </CardComponent>
        </div>
        <div class="col-xl-9 col-lg-9 col-md-9 col-sm-12">
            <CardComponent :required="false">
                <template #card-header>
                    <span><b>List of table</b></span>
                </template>
                <template #card-body>
                    <TableComponent>
                        <template #thead>
                            <tr>
                                <th class="text-center align-middle text-nowrap">#</th>
                                <th class="text-center align-middle text-nowrap">Name Table</th>
                                <th class="text-center align-middle text-nowrap">Slug Table</th>
                                <th class="text-center align-middle text-nowrap">Area</th>
                                <th class="text-center align-middle text-nowrap">Status</th>
                                <th class="text-center align-middle text-nowrap">Action</th>
                            </tr>
                        </template>
                    </TableComponent>
                </template>
            </CardComponent>
        </div>
    </div>
</template>

<script>
import CardComponent from "@/components/CardComponent.vue";
import InputComponent from "@/components/InputComponent.vue";
import SelectComponent from "@/components/SelectComponent.vue";
import TableComponent from '@/components/TableComponent.vue';
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
export default {
    name: "ban-component",
    components: {
        CardComponent,
        InputComponent,
        SelectComponent,
        TableComponent
    },
    setup() {
        const store = useStore();
        const area = computed(() =>
            store.state.dataKhuVuc
                .filter((item) => item.status == 1)
                .map((item) => ({
                    text: item.name_area,
                    value: item.id,
                    tinh_trang: item.status,
                }))
        );

        const status = computed(() => store.state.tinh_trang);

        onMounted(() => {
            store.dispatch("onFetchKhuVuc");
        });
        return { area, status };
    },
};
</script>

<style></style>
