<template>
    <div class="row">
        <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3">
            <CardComponent>
                <template #card-header>
                    Thêm Mới Admin
                </template>
                <template #card-body>
                    <InputComponent v-model="addAmin.ho_va_ten" label="Họ Và Tên" placeholder="Nhập họ và tên..."/>
                    <InputComponent v-model="addAmin.email" label="Email" type="email" placeholder="example@gmail.com"/>
                    <InputComponent v-model="addAmin.so_dien_thoai" label="Số Điện Thoại" placeholder="(999) 999-9999"/>
                    <InputComponent v-model="addAmin.ngay_sinh" label="Ngày Sinh" type="date"/>
                    <InputComponent v-model="addAmin.password" label="Mật Khẩu" type="text" placeholder="Nhập vào mật khẩu..."/>
                    <label class="form-label mb-2">Tình Trạng</label>
                    <select v-model="addAmin.tinh_trang" class="form-control mb-2">
                        <option value="">Mời bạn chọn...</option>
                        <option value="1">Hoạt Động</option>
                        <option value="0">Tạm Tắt</option>
                    </select>
                    <label class="form-label mb-2">Quyền</label>
                    <select v-model="addAmin.id_quyen" class="form-control mb-2">
                        <option value="">Mời bạn chọn...</option>
                        <template v-for="(value, index) in list_quyen.filter((item) => {
                            return item.tinh_trang == 1
                        })" :key="index">
                            <option :value="value.id">{{ value.ten_quyen }}</option>

                        </template>
                    </select>
                </template>
                <template #card-footer>
                    <button class="btn btn-primary float-end" @click="themMoi()">Thêm Mới</button>
                </template>
            </CardComponent>
        </div>
    </div>
</template>

<script>
import CardComponent from "@/components/CardComponent.vue";
import InputComponent from "@/components/InputComponent.vue";
// import SelectComponent from "@/components/SelectComponent.vue";
// import TableComponent from '@/components/TableComponent.vue';
// import ModalComponent from '@/components/ModalComponent.vue';
// import { ref, computed, onMounted } from "vue";
// import { useStore } from "vuex";
// import axios from "@/axiosConfig";
// import Toast from "@/toastConfig";
// import $ from "jquery";
export default {
    name : "quan-ly-admin",
    components : {
        CardComponent,
        InputComponent,
        // TableComponent,
        // SelectComponent,
        // ModalComponent,
    },
    setup() {

    }
};
</script>

<style></style>
