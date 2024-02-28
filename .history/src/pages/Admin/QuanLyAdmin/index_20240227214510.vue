<template>
    <div class="row">
        <div class="col-sm-12 col-lg-3 col-md-12 mb-sm-3">
            <CardComponent>
                <template #header> Thêm Mới Admin </template>
                <template #body>
                    <InputComponent
                        v-model="addAmin.ho_va_ten"
                        label="Họ Và Tên"
                        placeholder="Nhập họ và tên..."
                    />
                    <InputComponent
                        v-model="addAmin.email"
                        label="Email"
                        type="email"
                        placeholder="example@gmail.com"
                    />
                    <InputComponent
                        v-model="addAmin.so_dien_thoai"
                        label="Số Điện Thoại"
                        placeholder="(999) 999-9999"
                    />
                    <InputComponent
                        v-model="addAmin.ngay_sinh"
                        label="Ngày Sinh"
                        type="date"
                    />
                    <InputComponent
                        v-model="addAmin.password"
                        label="Mật Khẩu"
                        type="text"
                        placeholder="Nhập vào mật khẩu..."
                    />
                    <label class="form-label mb-2">Tình Trạng</label>
                    <select
                        v-model="addAmin.tinh_trang"
                        class="form-control mb-2"
                    >
                        <option value="">Mời bạn chọn...</option>
                        <option value="1">Hoạt Động</option>
                        <option value="0">Tạm Tắt</option>
                    </select>
                    <label class="form-label mb-2">Quyền</label>
                    <select
                        v-model="addAmin.id_quyen"
                        class="form-control mb-2"
                    >
                        <option value="">Mời bạn chọn...</option>
                        <template
                            v-for="(value, index) in list_quyen.filter(
                                (item) => {
                                    return item.tinh_trang == 1;
                                }
                            )"
                            :key="index"
                        >
                            <option :value="value.id">
                                {{ value.ten_quyen }}
                            </option>
                        </template>
                    </select>
                </template>
                <template #footer>
                    <button
                        class="btn btn-primary float-end"
                        @click="themMoi()"
                    >
                        Thêm Mới
                    </button>
                </template>
            </CardComponent>
        </div>
        <div class="col-sm-12 col-lg-9 col-md-12 mb-sm-3">
            <CardComponent :required="false">
                <template #header> Danh Sách Admin </template>
                <template #body>
                    <div class="table-responsive">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th
                                        colspan="8"
                                        class="text-center align-middle text-nowrap"
                                    >
                                        <div class="input-group">
                                            <input
                                                v-on:keyup.enter="
                                                    searchAdmin(1)
                                                "
                                                v-model="search"
                                                class="form-control"
                                                type="text"
                                                name="search"
                                                placeholder="Search now..."
                                            />
                                            <button
                                                class="btn btn-outline-success input-group-text"
                                                v-on:click="searchAdmin(1)"
                                            >
                                                Search
                                            </button>
                                        </div>
                                        <!-- <InputSearchComponent></InputSearchComponent> -->
                                    </th>
                                </tr>
                                <tr>
                                    <th
                                        class="text-center align-middle text-nowrap"
                                    >
                                        #
                                    </th>
                                    <th
                                        class="text-center align-middle text-nowrap"
                                    >
                                        Họ Và Tên
                                    </th>
                                    <th
                                        class="text-center align-middle text-nowrap"
                                    >
                                        Email
                                    </th>
                                    <th
                                        class="text-center align-middle text-nowrap"
                                    >
                                        Số Điện Thoại
                                    </th>
                                    <th
                                        class="text-center align-middle text-nowrap"
                                    >
                                        Ngày Sinh
                                    </th>
                                    <th
                                        class="text-center align-middle text-nowrap"
                                    >
                                        Quyền
                                    </th>
                                    <th
                                        class="text-center align-middle text-nowrap"
                                    >
                                        Tình Trạng
                                    </th>
                                    <th
                                        class="text-center align-middle text-nowrap"
                                    >
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <template
                                    v-for="(value, key) in list_admin.data"
                                    :key="key"
                                >
                                    <tr>
                                        <th
                                            class="text-center align-middle text-nowrap"
                                        >
                                            {{ key + 1 }}
                                        </th>
                                        <td class="align-middle text-nowrap">
                                            {{ value.ho_va_ten }}
                                        </td>
                                        <td class="align-middle text-nowrap">
                                            {{ value.email }}
                                        </td>
                                        <td
                                            class="text-center align-middle text-nowrap"
                                        >
                                            {{ value.so_dien_thoai }}
                                        </td>
                                        <td
                                            class="text-center align-middle text-nowrap"
                                        >
                                            {{ value.ngay_sinh }}
                                        </td>
                                        <td class="align-middle text-nowrap">
                                            {{ value.ten_quyen }}
                                        </td>
                                        <td
                                            class="text-center align-middle text-nowrap"
                                        >
                                            <template
                                                v-if="value.tinh_trang == 1"
                                            >
                                                <button
                                                    class="btn btn-info"
                                                    style="width: 110px"
                                                    @click="changeStatus(value)"
                                                >
                                                    Hoạt Động
                                                </button>
                                            </template>
                                            <template v-else>
                                                <button
                                                    class="btn btn-danger"
                                                    style="width: 110px"
                                                    @click="changeStatus(value)"
                                                >
                                                    Tạm Tắt
                                                </button>
                                            </template>
                                        </td>
                                        <td
                                            class="text-center align-middle text-nowrap"
                                        >
                                            <ButtomModalComponent
                                                color="primary"
                                                label="Chỉnh Sửa"
                                                titleId="chinhSuaModal"
                                                @click="getValueEdit(value)"
                                            >
                                                <template #modal-header>
                                                    Chỉnh Sửa
                                                </template>
                                                <template #modal-body>
                                                    <InputComponent
                                                        v-model="
                                                            editAmin.ho_va_ten
                                                        "
                                                        label="Họ Và Tên"
                                                        placeholder="Nhập họ và tên..."
                                                    />
                                                    <InputComponent
                                                        v-model="editAmin.email"
                                                        label="Email"
                                                        type="email"
                                                        placeholder="example@gmail.com"
                                                    />
                                                    <InputComponent
                                                        v-model="
                                                            editAmin.so_dien_thoai
                                                        "
                                                        label="Số Điện Thoại"
                                                        placeholder="(999) 999-9999"
                                                    />
                                                    <InputComponent
                                                        v-model="
                                                            editAmin.ngay_sinh
                                                        "
                                                        label="Ngày Sinh"
                                                        type="date"
                                                    />
                                                    <label
                                                        class="form-label mb-2"
                                                        >Quyền</label
                                                    >
                                                    <select
                                                        v-model="
                                                            editAmin.id_quyen
                                                        "
                                                        class="form-control mb-2"
                                                    >
                                                        <option value="">
                                                            Mời bạn chọn...
                                                        </option>
                                                        <template
                                                            v-for="(
                                                                value, index
                                                            ) in list_quyen.filter(
                                                                (item) => {
                                                                    return (
                                                                        item.tinh_trang ==
                                                                        1
                                                                    );
                                                                }
                                                            )"
                                                            :key="index"
                                                        >
                                                            <option
                                                                :value="
                                                                    value.id
                                                                "
                                                            >
                                                                {{
                                                                    value.ten_quyen
                                                                }}
                                                            </option>
                                                        </template>
                                                    </select>
                                                </template>
                                                <template #modal-footer>
                                                    <button
                                                        class="btn btn-danger"
                                                        data-bs-dismiss="modal"
                                                    >
                                                        Đóng
                                                    </button>
                                                    <button
                                                        class="btn btn-primary"
                                                        @click="updateAdmin()"
                                                    >
                                                        Xác Nhận
                                                    </button>
                                                </template>
                                            </ButtomModalComponent>
                                            <ButtomModalComponent
                                                color="danger"
                                                label="Xóa"
                                                titleId="xoaModal"
                                            >
                                                <template #modal-header>
                                                    Xóa
                                                </template>
                                                <template #modal-body>
                                                    Bạn có chắc chắn là mình
                                                    muốn xóa hay là không?
                                                </template>
                                                <template #modal-footer>
                                                    <button
                                                        class="btn btn-danger"
                                                        data-bs-dismiss="modal"
                                                    >
                                                        Đóng
                                                    </button>
                                                    <button
                                                        class="btn btn-primary"
                                                    >
                                                        Đồng Ý
                                                    </button>
                                                </template>
                                            </ButtomModalComponent>
                                        </td>
                                    </tr>
                                </template>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colspan="100%" class="">
                                        <div
                                            class="text-end mt-2"
                                            style="margin-bottom: -10px"
                                        >
                                            <!-- <pagination-component
                                                :pagination="pagination"
                                                @page-changed="getData"
                                            ></pagination-component> -->
                                        </div>
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </template>
            </CardComponent>
        </div>
    </div>
</template>
<script lang="js">
import InputComponent from '@/components/InputComponent.vue'
import CardComponent from '@/components/CardComponent.vue'
import ButtomModalComponent from '@/components/ButtomModalComponent.vue';
// import PaginationComponent from '@/components/PaginationComponent.vue';
// import InputSearchComponent from '@/components/InputSearchComponent.vue';
import { ref, reactive, onMounted } from 'vue';
// import { useStore } from 'vuex';
import axios from '@/axios';
import Toast from '@/toastConfig';
import $ from 'jquery';

export default {
    name: "page-admin",
    components: {
        InputComponent,
        CardComponent,
        ButtomModalComponent,
        // PaginationComponent,
        // InputSearchComponent
    },
    setup() {
        // const store = useStore();
        const addAmin = ref({tinh_trang : '', id_quyen: ''});
        const editAmin = reactive({});
        const list_admin = ref({});
        const list_quyen = ref([]);
        const pagination = ref({});
        const search = ref('');

        const DateFormat = (value) => {
            const dateString = value;

            // Tách các thành phần của ngày từ chuỗi
            const dateParts = dateString.split("-");
            const day = dateParts[0];
            const month = dateParts[1];
            const year = dateParts[2];

            // Tạo chuỗi định dạng "yyyy-mm-dd"
            const formattedDate = `${year}-${month}-${day}`;

            return formattedDate;
        }

        const themMoi = async () => {
            console.log(addAmin.value)
            await axios
                .post('admin/create', addAmin.value)
                .then(res => {
                    Toast('success', res.data.message);
                    addAmin.value = {tinh_trang : '', id_quyen: ''};
                    Promise.all([getData(), getDataQuyen()]);
                })
                .catch(res => {
                    $.each(res.response.data.errors, function(k, v) {
                        Toast('error', v[0]);
                    });
                });
        }

        const getData = async (page = 1) => {
            try {
                const res = await axios.get(`admin/get-data?page=${page}`);
                list_admin.value = res.data.data;
                pagination.value = res.data.pagination;
            } catch (error) {
                console.error(error);
            }
        };

        const getDataQuyen = async () => {
            await axios
                .get('admin/quyen/get-data')
                .then(res => {
                    list_quyen.value = res.data.data;
                });
        }

        const getValueEdit = (value) => {
            Object.assign(editAmin, value);
            editAmin['ngay_sinh'] = DateFormat(value['ngay_sinh']);
        }

        const changeStatus = async (value) => {
            await axios
                .post('admin/change-status', value)
                .then(res => {
                    Toast('success', res.data.message);
                    Promise.all([getData(), getDataQuyen()]);
                })
                .catch(res => {
                    $.each(res.response.data.errors, function(k, v) {
                        Toast('error', v[0]);
                    });
                });
        }

        const updateAdmin = async () => {
            await axios
                .post('admin/update', editAmin)
                .then(res => {
                    if(res.data.status === 1) {
                        Toast('success', res.data.message);
                        $('#chinhSuaModal').modal('hide');
                        Promise.all([getData(), getDataQuyen()]);
                    }
                })
                .catch(res => {
                    $.each(res.response.data.errors, function(k, v) {
                        Toast('error', v[0]);
                    });
                });
        }
        const searchAdmin = async () => {
            var payload = {
                search : search.value,
            }

            await axios
                .post('admin/search?page=' + pagination.value.current_page, payload)
                .then((res) => {
                    list_admin.value = res.data.data;
                    pagination.value = res.data.pagination;
                })
                .catch((res) => {
                    $.each(res.response.data.errors, function(k, v) {
                        Toast('error', v[0]);
                    });
                });
        }

        onMounted (() => {
            Promise.all([getData(), getDataQuyen()])
        })

        return { getData, addAmin, themMoi, list_admin, list_quyen, pagination, editAmin, getValueEdit, DateFormat, changeStatus, updateAdmin, search, searchAdmin };
    }
}
</script>
