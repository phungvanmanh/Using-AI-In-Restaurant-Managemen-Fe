<template>
    <div class="row">
        <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12">
            <CardComponent>
                <template #card-header>
                    <span><b>Add New Table</b></span>
                </template>
                <template #card-body>
                    <InputComponent label="Name table" placeholder="Enter the table..."/>
                    <SelectComponent label="Area" :options="area"/>
                </template>
            </CardComponent>
        </div>
    </div>
</template>

<script>
import CardComponent from '@/components/CardComponent.vue';
import InputComponent from '@/components/InputComponent.vue';
import SelectComponent from '@/components/SelectComponent.vue';
import { computed } from 'vue';
export default {
    name : "ban-component",
    components : {
        CardComponent,
        InputComponent,
        SelectComponent
    },
    setup() {
        const area = computed(() => this.$store.state.dataKhuVuc);
        return { area };
    }
};
</script>

<style></style>
