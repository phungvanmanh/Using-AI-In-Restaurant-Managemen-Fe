import { createStore } from "vuex";
import axios from "@/axiosConfig";
export default createStore({
    state: {
        tinh_trang: [
            { text: "Hiển Thị", value: 1 },
            { text: "Tạm Đóng", value: 0 },
        ],
        danh_muc_select: [],
        dataDanhMuc: [],
        dataKhuVuc: [],
        dataMonAn: [],
        dataBan : [],
        dataQuyen : [],
        dataAdmin : [],
        dataStaff : [],
        dataKhachHang : [],
        dataUser      : {},
        dataNhaCungCap:[],
        dataChuyenMucBaiViet:[],
        dataBaiViet:[],
        TOKEN_ADMIN : '',
        dataNguyenLieu:[],
    },
    getters: {
        toSlug: () => (str) => {
            str = str.toLowerCase();
            str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, "a");
            str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, "e");
            str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, "i");
            str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, "o");
            str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, "u");
            str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, "y");
            str = str.replace(/(đ)/g, "d");
            str = str.replace(/([^0-9a-z-\s])/g, "");
            str = str.replace(/(\s+)/g, "-");
            str = str.replace(/-+/g, "-");
            str = str.replace(/^-+/g, "");
            str = str.replace(/-+$/g, "");
            return str;
        },
    },
    mutations: {
        setTokenAdmin(state, data) {
            state.TOKEN_ADMIN = data;
        },

        fecthChuyenMuc(state, data) {
            state.danh_muc_select = [
                { text: "Root", value: "0", tinh_trang: 1 },
                ...data.map((item) => ({
                    text: item.ten_chuyen_muc,
                    value: item.id,
                    tinh_trang: item.tinh_trang,
                })),
            ];
            state.dataDanhMuc = [...data];
        },

        fecthDanhMuc(state, data) {
            state.dataDanhMuc = data;
        },

        fecthKhuVuc(state, data) {
            state.dataKhuVuc = data;
        },

        fecthMonAn(state, data) {
            state.dataMonAn = data;
        },

        fecthBan(state, data) {
            state.dataBan = data;
        },

        fecthQuyen(state, data) {
            state.dataQuyen = data;
        },

        fecthAdmin(state, data) {
            state.dataAdmin = data;
        },

        FetchUserLogin(state, data) {
            state.dataUser = data;
        },
        fecthNhaCungCap(state, data) {
            state.dataNhaCungCap = data;
        },
        fecthChuyenMucBaiViet(state, data) {
            state.dataChuyenMucBaiViet = data;
        },
        fecthBaiViet(state, data) {
            state.dataBaiViet = data;
        },
        fecthNguyenLieu(state, data) {
            state.dataNguyenLieu = data;
        },
    },
    actions: {
        onFetchChuyenMuc: async ({ commit }) => {
            try {
                const response = await axios.get("admin/chuyen-muc/get-data", 'admin');
                commit("fecthChuyenMuc", response.data.data);
            } catch (error) {
                console.error("Có lỗi xảy ra trong onFetchChuyenMuc:", error);
            }
        },

        onFetchDanhMuc: async ({ commit }) => {
            try {
                const response = await axios.get("admin/danh-muc/get-data", 'admin');
                commit("fecthDanhMuc", response.data.data);
            } catch (error) {
                console.error("Có lỗi xảy ra trong onFetchDanhnMuc:", error);
            }
        },

        onFetchKhuVuc: async ({ commit }) => {
            try {
                const response = await axios.get("admin/khu-vuc/get-data", 'admin');
                commit("fecthKhuVuc", response.data.data);
            } catch (error) {
                console.error("Có lỗi xảy ra trong onFetchKhuVuc:", error);
            }
        },

        onFetchMonAn: async ({ commit }) => {
            try {
                const response = await axios.get("admin/mon-an/get-data", 'admin');
                commit("fecthMonAn", response.data.data);
            } catch (error) {
                console.error("Có lỗi xảy ra trong onFetchMonAn:", error);
            }
        },

        onFetchBan: async ({ commit }) => {
            try {
                const response = await axios.get("admin/ban/get-data", 'admin');
                commit("fecthBan", response.data.data);
            } catch (error) {
                console.error("Có lỗi xảy ra trong onFetchBan:", error);
            }
        },

        onFetchQuyen: async ({ commit }) => {
            try {
                const response = await axios.get("admin/quyen/get-data", 'admin');
                commit("fecthQuyen", response.data.data);
            } catch (error) {
                console.error("Có lỗi xảy ra trong onFetchQuyen:", error);
            }
        },
        
        onFetchAdmin: async ({ commit }) => {
            try {
                const response = await axios.get("admin/get-data", 'admin');
                commit("fecthAdmin", response.data.data);
            } catch (error) {
                console.error("Có lỗi xảy ra trong onFetchAdmin:", error);
            }
        },

        onFetchUserLogin: async ({ commit }) => {
            try {
                const response = await axios.get('admin/get-user', 'admin');
                console.log("Đang lấy user: ", response.data);
                commit("FetchUserLogin", response.data);
            } catch (error) {
                console.error("Có lỗi xảy ra trong onFetchUserLogin:", error);
            }
        },
        onFetchNhaCungCap: async ({ commit }) => {
            try {
                const response = await axios.get("admin/nha-cung-cap/get-data");
                commit("fecthNhaCungCap", response.data.data);
            } catch (error) {
                console.error("Có lỗi xảy ra trong onFetchNhaCungCap:", error);
            }
        },
        onFetchChuyenMucBaiViet: async ({ commit }) => {
            try {
                const response = await axios.get("admin/chuyen-muc-bai-viet/get-data");
                commit("fecthChuyenMucBaiViet", response.data.data);
            } catch (error) {
                console.error("Có lỗi xảy ra trong onFetchChuyenMucBaiViet:", error);
            }
        },
        onFetchBaiViet: async ({ commit }) => {
            try {
                const response = await axios.get("admin/bai-viet/get-data");
                commit("fecthBaiViet", response.data.data);
            } catch (error) {
                console.error("Có lỗi xảy ra trong onFetchBaiViet:", error);
            }
        },
        updateTokenAdmin({ commit }, token) {
            commit('setTokenAdmin', token);
        },
        onFetchNguyenLieu: async ({ commit }) => {
            try {
                const response = await axios.get("admin/nguyen-lieu/get-nguyen-lieu");
                commit("fecthNguyenLieu", response.data.data);
            } catch (error) {
                console.error("Có lỗi xảy ra trong onFetchNguyenLieu:", error);
            }
        },
    },
});
