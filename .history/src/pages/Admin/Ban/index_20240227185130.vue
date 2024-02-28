<template>
    <div class="row">
        <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12">
            <CardComponent>
                <template #header>
                    <span><b>Add New Table</b></span>
                </template>
            </CardComponent>
        </div>
    </div>
</template>

<script>
import CardComponent from '@/components/CardComponent.vue';
export default {
    name : "ban-component",
    components : {
        CardComponent,

    },
    setup() {

    }
};
</script>

<style></style>
