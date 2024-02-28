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
                        placeholder="Enter the slug table..."
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
    </div>
</template>

<script>
import CardComponent from "@/components/CardComponent.vue";
import InputComponent from "@/components/InputComponent.vue";
import SelectComponent from "@/components/SelectComponent.vue";
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
export default {
    name: "ban-component",
    components: {
        CardComponent,
        InputComponent,
        SelectComponent,
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
