<template>
    <CardComponent :required="false">
        <template #card-header>
            <div class="row">
                <span><b>Calendar</b></span>
            </div>
            <!-- <div class="row">
                <div class="col-xl-2 col-lg-2 col-md-3 col-sm-3">
                    <SelectComponent></SelectComponent>
                </div>
            </div> -->
        </template>
        <template #card-body>
            <TableComponent>
                <template #thead>
                    <tr>
                        <th
                            class="text-center align-middle text-nowrap"
                            style="width: 150px"
                        ></th>
                        <template v-for="(v_d, i_d) in days" :key="i_d">
                            <td
                                :class="[
                                    'text-center align-middle text-nowrap',
                                    {
                                        'bg-secondary': isToday(v_d),
                                        'text-white': isToday(v_d),
                                    },
                                ]"
                            >
                                <span v-if="i_d == 6">{{ rank[6] }}</span>
                                <span v-else>{{ rank[i_d] }}</span> -
                                {{ date_format(v_d) }}
                            </td>
                        </template>
                    </tr>
                </template>
                <template #tbody>
                    <template
                        v-for="(value_time, index_time) in time"
                        :key="index_time"
                    >
                        <tr style="height: 300px">
                            <td class="align-middle text-center">
                                {{ value_time }}
                            </td>
                            <template
                                v-for="(value, index) in data"
                                :key="index"
                            >
                                <template v-for="(v, i) in value" :key="i">
                                    <template v-if="i == index_time">
                                        <template v-if="v.id">
                                            <td
                                                class="text-white bg-secondary"
                                                @click="updateBuoiLamViec(v.id)"
                                            >
                                                <template
                                                    v-for="(
                                                        v_name, i_name
                                                    ) in v.list"
                                                    :key="i_name"
                                                >
                                                    <div class="row">
                                                        <div class="col-6">
                                                            <span v-if="v_name?.split(',')[1] == 1" class="text-primary">
                                                                {{
                                                                    v_name?.split(
                                                                        ","
                                                                    )[0]
                                                                }}
                                                            </span>
                                                            <span v-else class="text-white">
                                                                {{
                                                                    v_name?.split(
                                                                        ","
                                                                    )[0]
                                                                }}
                                                            </span>
                                                        </div>
                                                        <div
                                                            class="col-6"
                                                            v-if="
                                                                isCurrentDay(index) && hasPermission
                                                            "
                                                        >
                                                            <input
                                                                type="checkbox"
                                                                class="float-end"
                                                                style="
                                                                    width: 25px;
                                                                    height: 25px;
                                                                "
                                                                :checked="
                                                                    v_name?.split(
                                                                        ','
                                                                    )[1] == 1
                                                                "
                                                                @change="
                                                                    changeIsDone(v_name?.split(
                                                                            ','
                                                                        )[3],
                                                                        v_name?.split(
                                                                            ','
                                                                        )[2]
                                                                    )
                                                                "
                                                                @click.stop
                                                            />
                                                        </div>
                                                    </div>
                                                    <br />
                                                </template>
                                            </td>
                                        </template>
                                        <template v-else>
                                            <td
                                                v-on:click="
                                                    handleClick(
                                                        index_time,
                                                        index
                                                    )
                                                "
                                            >
                                                <template
                                                    v-for="(
                                                        v_name, i_name
                                                    ) in v.list"
                                                    :key="i_name"
                                                >
                                                    <div class="row">
                                                        <div class="col-6">
                                                            <span v-if="v_name?.split(',')[1] == 1" class="text-primary">
                                                                {{
                                                                    v_name?.split(
                                                                        ","
                                                                    )[0]
                                                                }}
                                                            </span>
                                                            <span v-else class="text-dark">
                                                                {{
                                                                    v_name?.split(
                                                                        ","
                                                                    )[0]
                                                                }}
                                                            </span>
                                                        </div>
                                                        <div
                                                            class="col-6"
                                                            v-if="
                                                                isCurrentDay(index) && hasPermission
                                                            "
                                                        >
                                                            <input
                                                                type="checkbox"
                                                                class="float-end"
                                                                style="
                                                                    width: 25px;
                                                                    height: 25px;
                                                                "
                                                                :checked="
                                                                    v_name?.split(
                                                                        ','
                                                                    )[1] == 1
                                                                "
                                                                @change="
                                                                    changeIsDone(v_name?.split(
                                                                            ','
                                                                        )[3],
                                                                        v_name?.split(
                                                                            ','
                                                                        )[2]
                                                                    )
                                                                "
                                                                @click.stop
                                                            />
                                                        </div>
                                                    </div>
                                                    <br />
                                                </template>
                                            </td>
                                        </template>
                                    </template>
                                </template>
                            </template>
                        </tr>
                    </template>
                </template>
            </TableComponent>
        </template>
    </CardComponent>
</template>

<script>
import CardComponent from "@/components/CardComponent.vue";
import TableComponent from "@/components/TableComponent.vue";
// import SelectComponent from "@/components/SelectComponent.vue";
import { computed, onMounted, onUnmounted, ref } from "vue";
import axios from "@/axiosConfig";
import moment from "moment";
import Toast from "@/toastConfig";
import $ from "jquery";
import { io } from "socket.io-client";
import { useStore } from "vuex";
import { apiSocket } from "@/globals";
export default {
    name: "lich-lam-viec",
    components: {
        CardComponent,
        TableComponent,
        // SelectComponent,
    },
    setup() {
        const store = useStore();
        const socket = io(apiSocket);
        const time = ref(["8h00 - 16h00", "17h00 - 22h00"]);
        const days = ref([
            "Monday",
            "Tuesday ",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
        ]);
        const data = ref([]);
        const type = ref(-1);
        const today = ref(new Date());
        const nv_lam = ref([]);
        const user = computed(() => store.state.dataUser);
        const check = ref(false);
        const rank = ref([
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
        ]);
        const data_quyen = ref({});
        const ngay_hien_tai = ref("");
        function date_format(now) {
            return moment(now).format("DD/MM/yyyy");
        }

        const isToday = (date) => {
            // Chuyển đổi ngày hiện tại thành chuỗi ngày đúng định dạng
            const todayString = `${today.value.getFullYear()}-${(
                today.value.getMonth() + 1
            )
                .toString()
                .padStart(2, "0")}-${today.value
                .getDate()
                .toString()
                .padStart(2, "0")}`;

            // Chuyển đổi ngày truyền vào thành chuỗi ngày đúng định dạng
            const dateString =
                date instanceof Date
                    ? `${date.getFullYear()}-${(date.getMonth() + 1)
                          .toString()
                          .padStart(2, "0")}-${date
                          .getDate()
                          .toString()
                          .padStart(2, "0")}`
                    : date;
            return todayString === dateString;
        };
        const isCurrentDay = (date) => {
            return ngay_hien_tai.value === date;
        }
        const hasPermission = computed(() => {
            const permission = data_quyen.value?.name_permission?.toLowerCase();
            return permission === 'admin' || permission === 'quản lý nhân sự';
        });
        const getDays = () => {
            axios
                .get("admin/lich-lam-viec/get-days/" + type.value, "admin")
                .then((res) => {
                    days.value = res.data.days;
                    data.value = res.data.data;
                    nv_lam.value = res.data.data;
                    //lấy ngày hiện tại
                    const today = new Date();
                    const yyyy = today.getFullYear();
                    const mm = String(today.getMonth() + 1).padStart(2, "0"); // Tháng bắt đầu từ 0, nên cần cộng thêm 1
                    const dd = String(today.getDate()).padStart(2, "0");
                    ngay_hien_tai.value = `${yyyy}-${mm}-${dd}`;
                    console.log(ngay_hien_tai.value);
                });
        };

        const getQuyen = () => {
            axios.get("admin/get-quyen", "admin").then((res) => {
                data_quyen.value = res.data.data;
            });
        };

        const themBuoiLamViec = (buoi_lam_viec, ngay_lam_viec) => {
            const payload = ref({
                buoi_lam_viec: buoi_lam_viec,
                ngay_lam_viec: ngay_lam_viec,
            });

            axios
                .post(
                    "admin/lich-lam-viec/dang-ky/store",
                    payload.value,
                    "admin"
                )
                .then((res) => {
                    if (res.data.status == 1) {
                        Toast("success", res.data.message);
                        socket.emit("actionPerformed");
                    } else {
                        Toast("error", res.data.message);
                    }
                    getDays();
                })
                .catch((res) => {
                    $.each(res.response.data.errors, function (k, v) {
                        Toast("error", v[0]);
                    });
                });
        };

        const handleClick = (buoi_lam_viec, ngay_lam_viec) => {
            if (data_quyen.value.name_permission.toLowerCase() !== "admin") {
                themBuoiLamViec(buoi_lam_viec, ngay_lam_viec);
            }
        };

        const updateBuoiLamViec = (id) => {
            var payload = {
                id: id,
                id_user: user.value.id, //sau lấy user đang login
            };
            axios
                .post("admin/lich-lam-viec/dang-ky/update", payload, "admin")
                .then((res) => {
                    if (res.data.status == 1) {
                        Toast("success", res.data.message);
                        socket.emit("actionPerformed");
                    } else {
                        Toast("error", res.data.message);
                    }
                    getDays();
                })
                .catch((res) => {
                    $.each(res.response.data.errors, function (k, v) {
                        Toast("error", v[0]);
                    });
                });
        };
        const changeIsDone = (id, id_nhan_vien) => {
            var payload = {
                id: id,
                id_user: id_nhan_vien, //sau lấy user đang login
            };
            console.log(payload);
            axios
                .post("admin/lich-lam-viec/change-is-done", payload, "admin")
                .then((res) => {
                    if (res.data.status == 1) {
                        Toast("success", res.data.message);
                        socket.emit("actionPerformed");
                    } else {
                        Toast("error", res.data.message);
                    }
                    getDays();
                })
                .catch((res) => {
                    $.each(res.response.data.errors, function (k, v) {
                        Toast("error", v[0]);
                    });
                });
        };

        onMounted(() => {
            // Gọi getDays lần đầu tiên component được mounted
            store.dispatch("onFetchUserLogin");
            getQuyen();
            getDays();
            socket.on("updateData", () => {
                // Gọi lại hàm getDays để cập nhật dữ liệu
                getQuyen();
                getDays();
            });
        });
        onUnmounted(() => {
            socket.disconnect();
        });
        return {
            user,
            time,
            days,
            data,
            today,
            rank,
            nv_lam,
            check,
            data_quyen,
            ngay_hien_tai,
            isToday,
            date_format,
            // themBuoiLamViec,
            updateBuoiLamViec,
            changeIsDone,
            handleClick,
            isCurrentDay,
            hasPermission,
        };
    },
};
</script>
