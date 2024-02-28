<template>
    <div class="row">
        <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12">
            <CardComponent>
                <template #card-header>
                    <span><b>Add New Table</b></span>
                </template>
                <template #card-body>
                    <InputComponent label="Name table"/>
                    <SelectComponent label="Area"/>
                </template>
            </CardComponent>
        </div>
    </div>
</template>

<script>
import CardComponent from '@/components/CardComponent.vue';
import InputComponent from '@/components/InputComponent.vue';
import SelectComponent from '@/components/SelectComponent.vue';
export default {
    name : "ban-component",
    components : {
        CardComponent,
        InputComponent,
        SelectComponent
    },
    setup() {

    }
};
</script>

<style></style>
