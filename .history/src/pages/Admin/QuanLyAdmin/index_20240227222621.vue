<template>
    <div class="row">
        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <CardComponent :required="false">
                <template #card-header>
                    <div class="row d-flex justify-content-between align-items-center">
                        <div class="col">
                            <span><b>List of Admin</b></span>
                        </div>
                        <div class="col text-end">
                            <ModalComponent color="primary" label="Add news" titleId="add_news" sizeModal="modal-lg">
                                <template #modal-header>
                                    <span><b>Add news admin</b></span>
                                </template>
                                <template #modal-body>
                                    <div class="row d-flex justify-content-between align-items-center">
                                        <div class="col">
                                            <InputComponent v-model="addAmin.ho_va_ten" label="First and last name" placeholder="Enter your first and last name..."/>
                                        </div>
                                        <div class="col">
                                            <InputComponent v-model="addAmin.email" label="Email" type="email" placeholder="example@gmail.com"/>
                                        </div>
                                    </div>
                                    <div class="row d-flex justify-content-between align-items-center">
                                        <div class="col">
                                            <InputComponent v-model="addAmin.so_dien_thoai" label="Phone number" placeholder="(999) 999-9999"/>
                                        </div>
                                        <div class="col">
                                            <InputComponent v-model="addAmin.ngay_sinh" label="Date of birth" type="date"/>
                                        </div>
                                    </div>
                                    <InputComponent v-model="addAmin.password" label="Password" type="text" placeholder="Enter your password..."/>
                                    <div class="row d-flex justify-content-between align-items-center">
                                        <div class="col">
                                            <SelectComponent label="Decentralization"/>
                                        </div>
                                        <div class="col">
                                            <SelectComponent label="Status" :options="status"/>
                                        </div>
                                    </div>
                                </template>
                                <template #modal-footer>
                                    <button class="btn btn-primary" @click="addNew()">
                                                    Add new
                                    </button>
                                    <button class="btn btn-secondary" data-bs-dismiss="modal">
                                        Close
                                    </button>
                                </template>
                            </ModalComponent>
                        </div>
                    </div>
                </template>
                <template #card-body>
                    
                </template>
            </CardComponent>
        </div>
    </div>
</template>

<script>
import CardComponent from "@/components/CardComponent.vue";
import InputComponent from "@/components/InputComponent.vue";
import SelectComponent from "@/components/SelectComponent.vue";
// import TableComponent from '@/components/TableComponent.vue';
import ModalComponent from '@/components/ModalComponent.vue';
import { computed, ref} from "vue";
import { useStore } from "vuex";
// import axios from "@/axiosConfig";
// import Toast from "@/toastConfig";
// import $ from "jquery";
export default {
    name : "quan-ly-admin",
    components : {
        CardComponent,
        InputComponent,
        // TableComponent,
        SelectComponent,
        ModalComponent,
    },
    setup() {
        const store = useStore();
        const addAmin = ref({});
        const status = computed(() => store.state.tinh_trang);
        const dataQuyen = computed(() => store.state.dataQuyen);

        return { status, dataQuyen, addAmin }
    }
};
</script>

<style></style>
