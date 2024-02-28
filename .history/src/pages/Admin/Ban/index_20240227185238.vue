<template>
    <div class="row">
        <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12">
            <CardComponent>
                <template #header>
                    <span><b>Add New Table</b></span>
                </template>
                <template #body>
                    <InputComponent label="Name table"/>
                </template>
            </CardComponent>
        </div>
    </div>
</template>

<script>
import CardComponent from '@/components/CardComponent.vue';
import InputComponent from '@/components/InputComponent.vue';
export default {
    name : "ban-component",
    components : {
        CardComponent,
        InputComponent
    },
    setup() {

    }
};
</script>

<style></style>
