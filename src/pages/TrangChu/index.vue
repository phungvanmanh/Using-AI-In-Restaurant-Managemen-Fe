<template>
<nav id="nav_1">
    <div class="wrapper">
        <div class="logo">
            <a href="#"><img style="width: 50px; height: 50px" src="https://quantrinhahang.edu.vn/wp-content/uploads/2019/10/ca-bien-restaurant.jpg" alt="" /></a>
        </div>
        <input type="radio" name="slider" id="menu-btn_1" />
        <input type="radio" name="slider" id="close-btn_1" />
        <ul class="nav-links" id="nav-links_1">
            <label for="close-btn_1" class="btn close-btn"><i class="fas fa-times"></i></label>

            <li><a @click="handleClickDanhMuc('Home')" href="#">Home</a></li>

            <li>
                <a href="#" class="desktop-item"> Menu</a>
                <input type="checkbox" id="showDrop_1" />
                <label for="showDrop_1" class="mobile-item"> Menu</label>
                <ul class="drop-menu" id="drop-menu_1">
                    <template v-for="(value, key) in dataDanhMuc1" :key="key">
                        <li v-on:click="handleClickDanhMuc(value.id)">
                            <a href="#">{{ value.name_category }}</a>
                        </li>
                    </template>
                </ul>
            </li>
            <template v-if="isShow == false">
                <li>
                    <router-link to="/login">
                        <a>LOGIN</a>
                    </router-link>
                </li>
            </template>
            <template v-else>
                <li><a @click="logOut()">LOGOUT</a></li>
            </template>
        </ul>
        <label for="menu-btn_1" class="btn menu-btn"><i class="fas fa-bars"></i></label>
    </div>
</nav>

<div class="body-text"></div>
<testMenu>
    <template #content-header>
        <div class="container">

            <div class="row mt-2">
                <div id="carouselExampleFade" class="carousel slide carousel-fade">
                    <div class="carousel-inner">
                        <template v-for="(value, key) in dataBaiViet" :key="key">
                            <div class="carousel-item active">
                                <img v-bind:src="value.hinh_anh_bai_viet" style="width: 100%; height: 500px" alt="" />
                            </div>
                        </template>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <marquee style="width: 100%; overflow: hidden;">
                <div class="card mt-2" style="background-color: blanchedalmond;width: 100%">
                    <div class="row mt-2" style="width: 100%">
                        <div class="row text center">
                            <div class="col-3">
                            <h5 class="blinking text-danger">
                                *Promotions:
                            </h5>
                        </div>
                        <div >
                            <div class="col">
                            <template v-for="(value, key) in dataBaiViet" :key="key">
                                <p>
                                   * <b> <span>{{ value.mo_ta_chi_tiet_bai_viet }}</span></b>
                                </p>
                            </template>
                        </div>
                        </div>

                        </div>
                        
                       
                    </div>
                </div>
            </marquee>

            <div class="row" style="display: flex">
                <div class="col-2" style="display: flex; flex-direction: column"></div>
                <div class="col-8 d-flex align-items-center mt-2">
                    <div class="input-group mb-3">
                        <input v-on:keyup.enter="searchMonAn()" v-model="search.abc" type="text" class="form-control" placeholder="Search dish" aria-label="Username" aria-describedby="basic-addon1" />
                        <span class="input-group-text" id="basic-addon1"><button v-on:click="searchMonAn()" class="btn btn-primary">
                                Search
                            </button></span>
                    </div>
                </div>
                <div class="col-2"></div>
            </div>
            <div class="row mt-2"></div>
        </div>
        <div class="container mt-2  ">
            <div class="row text-center mt-2">
                <h5 style="color: blueviolet;" class="blink-text">Outstanding Food</h5>
            </div>
            <div class="row mt-4">
                <template v-for="(value, index) in dataMonNoiBac" :key="index">
                    <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                        <div class="card4321">
                            <div class="card-img4321">
                                <img style="height: 100%;width: 100%;" class="img-fluid" :src="value.image" alt="Hình ảnh món ăn" />
                            </div>
                            <div class="card-info4321">
                                <p class="text-title4321">{{ value.food_name }}</p>
                            </div>
                            <div class="card-footer4321">
                                <span class="text-title4321">
                                    <b style="color: brown;">{{ formatToVN(value.price) }}</b>
                                </span>
                                <div class="card-button4321">
                                    <button @click="getReview(value.id);setMonAnId(value.id); ten_mon = value.food_name" class="fa-solid fa-arrows-to-eye" data-bs-toggle="modal" data-bs-target="#exampleModal"></button>
                                </div>
                            </div>
                        </div>
                    </div>

                </template>
            </div>

        </div>
        <div class="container mt-3">
            <div class="row text-center mt-3">
                <h5 style="color: blueviolet;" class="blink-text">Good Food</h5>
            </div>
            <div class="container">
                <div class="row mt-4">
                    <template v-for="(value, index) in (isHomeSelected ? dataMonAn1 : monAnList)" :key="index">
                        <template v-if="value.status==1">
                            <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                                <div class="card4321">
                                    <div class="card-img4321">
                                        <img style="height: 100%;width: 100%;" class="img-fluid" :src="value.image" alt="Hình ảnh món ăn" />
                                    </div>
                                    <div class="card-info4321">
                                        <p class="text-title4321">{{ value.food_name }}</p>
                                    </div>
                                    <div class="card-footer4321">
                                        <span class="text-title4321">
                                            <b style="color: brown;">{{ formatToVN(value.price) }}</b> 
                                        </span>
                                        <div class="card-button4321">
                                            <button @click="getReview(value.id);setMonAnId(value.id), ten_mon = value.food_name" class="fa-solid fa-arrows-to-eye" data-bs-toggle="modal" data-bs-target="#exampleModal"></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </template>

                    </template>
                </div>

            </div>
            <!-- Modal -->
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-xl">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">
                                Review {{ ten_mon }}
                            </h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="card radius-10" style="width: 100%;">
                                <div class="card-body">
                                    <ul class="list-unstyled">
                                        <div v-for="(value,key) in reviews" :key="key">
                                            <li class="d-flex align-items-center border-bottom pb-2">
                                                <h5>{{ value.ten_khach_hang }}</h5>
                                                <div class="flex-grow-1 ms-3" style="margin-bottom: 10px;">
                                                    : {{ value.binh_luan }}
                                                </div>
                                                <div class="dropdown ms-auto">
                                                    <div class="dropdown-toggle dropdown-toggle-nocaret cursor-pointer text-end" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <i class="bx bx-dots-horizontal-rounded font-22"></i>
                                                    </div>
                                                    <ul class="dropdown-menu dropdown-menu-end" style="">
                                                        <li><a v-on:click="deleteReview(value.id)" class="dropdown-item" href="javascript:;">Xoá</a></li>
                                                    </ul>
                                                </div>
                                            </li>
                                        </div>
                                    </ul>
                                </div>
                            </div>

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                                Close
                            </button>
                            <template v-if="isShow == true">
                                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#danhgiaModal">
                                    Create Review
                                </button>
                            </template>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Modal -->
        <div class="modal fade" id="danhgiaModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">
                            Write Your Review
                        </h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <input v-model="binhLuan" class="form-control" type="text" name="" id="" placeholder="Express your feelings about the dish" />
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                            Close
                        </button>
                        <button v-on:click="taoDanhGia()" type="button" data-bs-dismiss="modal" class="btn btn-primary">
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </div>

    </template>
</testMenu>
</template>

<script>
// import $ from "jquery";
import {
    ref,
    computed,
    onMounted,
} from "vue";
import {
    useStore
} from "vuex";
import axios from '@/axiosConfig';
// import Toast from '@/toastConfig';
// import $ from 'jquery';
import testMenu from "@/pages/Admin/Menu";
import Toast from "@/toastConfig";
export default {
    name: "trang-chu",
    components: {
        testMenu,
    },

    setup() {
        const reviews = ref([]);
        const isShow = ref(false);
        const binhLuan = ref('');
        const ten_mon = ref ('');
        document.addEventListener("DOMContentLoaded", function () {
            const menuBtn = document.getElementById("menu-btn_1");
            const closeBtn = document.getElementById("close-btn_1");
            const navLinks = document.getElementById("nav-links_1");
            const logo = document.querySelector(".logo a");
            const wrapper = document.getElementById("wrapper"); // Phần tử wrapper

            menuBtn.addEventListener("click", function () {
                navLinks.classList.toggle("show");
            });

            closeBtn.addEventListener("click", function () {
                navLinks.classList.remove("show");
            });

            // Đóng menu khi click vào một liên kết
            const navLinksItems = navLinks.querySelectorAll("li a");
            navLinksItems.forEach(function (item) {
                item.addEventListener("click", function () {
                    navLinks.classList.remove("show");
                });
            });

            // Đóng menu khi click vào logo
            logo.addEventListener("click", function () {
                navLinks.classList.remove("show");
            });

            // Đóng menu khi click vào phần tử wrapper
            wrapper.addEventListener("click", function () {
                navLinks.classList.remove("show");
            });
        });
        const search = ref({});

        const store = useStore();
        const delete_danhgia = ref({});
        const dataBaiViet = computed(() => {
            return store.state.dataBaiViet;
        });
        const dataMonNoiBac = ref([]);
        const dataMonAn1 = computed(() => {
            return store.state.dataMonAn1;
        });
        const dataDanhMuc1 = computed(() => {
            return store.state.dataDanhMuc1;
        });
        const isHomeSelected = ref(true); // Thêm biến này

        const monAnList = ref([]);

        const getMonAnById = (id) => {
            axios.post('khach-hang/mon-an/get-mon-id', {
                    id: id
                })
                .then(response => {
                    if (response.data.status == 1) {
                        monAnList.value = response.data.monAn;
                        console.log(monAnList.value); // Log dữ liệu ra console
                    } else {
                        console.error(response.data.message);
                    }
                })
                .catch(error => {
                    console.error(error);
                });
        };
        const getMonAnNoiBac = () => {
            axios
                .get('khach-hang/mon-an/get-mon-an-pho-bien')
                .then(response => {
                    dataMonNoiBac.value = response.data.data;
                    console.log(response.data.data);
                })

                .catch(error => {
                    console.error('Error fetching reviews:', error);
                });
        };

        function searchMonAn() {
            axios
                .post('khach-hang/mon-an/tim-mon', search.value)
                .then((res) => {
                    console.log(res.data.data);
                    store.commit('fecthMonAn1', res.data.data);
                });
        }
        const handleClickDanhMuc = (id) => {
            if (id === 'Home') {
                isHomeSelected.value = true;
            } else {
                isHomeSelected.value = false;
                getMonAnById(id);
            }
        };
        const logOut = () => {
            axios
                .get('khach-hang/logout')
                .then((res) => {
                    if (res.data.status == 1) {
                        localStorage.removeItem('khach_hang');
                        Toast("success", res.data.message);
                        setInterval(() => {
                            window.location.href = "/";
                        }, 2000);
                    }
                });
        }

        const checkLogin = () => {
            // Nếu như có thì isShow == true;
            if (!localStorage.getItem('khach_hang')) {
                isShow.value = false;
            } else {
                isShow.value = true;
            }
        }
        const getReview = (id_mon_an) => {
            axios
                .get(`khach-hang/review/${id_mon_an}`) // Sử dụng URL đúng theo định nghĩa route
                .then(response => {
                    reviews.value = response.data.reviews;
                })
                .catch(error => {
                    console.error('Error fetching reviews:', error);
                });
        };
        const currentMonAnId = ref(null);
        const setMonAnId = (idMonAn) => {
            currentMonAnId.value = idMonAn;
        };
        const taoDanhGia = () => {
            const payload = {
                binh_luan: binhLuan.value,
                id_mon_an: currentMonAnId.value,
            };

            axios.post('khach-hang/review/tao-danh-gia', payload, "khach_hang")
                .then((res) => {
                    if (res.data.status == 1) {
                        Toast("success", res.data.message);
                        binhLuan.value = "";
                        getReview(currentMonAnId.value);
                    }
                });
        }
        const deleteReview = (id_danh_gia) => {
            axios
                .post("khach-hang/review/xoa-danh-gia", {
                    id_danh_gia
                }, "khach_hang")
                .then((res) => {
                    if (res.data.status == 1) {
                        Toast("success", res.data.message);

                    }
                })
                .catch((error) => {
                    Toast("error", error.response.data.message);
                });
        };

        function formatToVN(number) {
            number = parseInt(number);
            return number.toLocaleString('vi-VN', {
                style: 'currency',
                currency: 'VND'
            });
        }
        onMounted(() => {
            document.body.style.fontFamily = '';
            document.body.style.backgroundColor = '';
            document.body.style.margin = '';
            document.body.style.padding = '';
            document.body.style.display = '';
            document.body.style.justifyContent = '';
            document.body.style.alignItems = '';
            document.body.style.height = '';
            store.dispatch("onFetchBaiVietCustumer");
            store.dispatch("onFetchMonAn1");
            store.dispatch("onFetchDanhMuc1");
            checkLogin();
            getMonAnNoiBac();
        });
        return {
            dataBaiViet,
            dataMonAn1,
            dataDanhMuc1,
            getMonAnById,
            monAnList,
            handleClickDanhMuc,
            isHomeSelected,
            search,
            searchMonAn,
            isShow,
            logOut,
            reviews,
            getReview,
            binhLuan,
            taoDanhGia,
            setMonAnId,
            deleteReview,
            delete_danhgia,
            dataMonNoiBac,
            getMonAnNoiBac,
            formatToVN,
            ten_mon

        };
    },
};
</script>

<style scoped>
.blinking {
    animation: blink 1s linear infinite;
}

#nav_1 {
    position: fixed;
    z-index: 99;
    width: 100%;
    top: 0;
    background: #242526;
}

#nav_1 .wrapper {
    position: relative;
    padding: 0px 30px;
    height: 70px;
    line-height: 70px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

#nav_1 .wrapper .logo a {
    color: #f2f2f2;
    font-size: 30px;
    font-weight: 600;
    text-decoration: none;
}

#nav_1 .wrapper .nav-links {
    display: inline-flex;
}

#nav_1 .nav-links li {
    list-style: none;
}

#nav_1 .nav-links li a {
    color: #f2f2f2;
    text-decoration: none;
    font-size: 18px;
    font-weight: 500;
    padding: 9px 15px;
    border-radius: 5px;
    transition: all 0.3s ease;
}

#nav_1 .nav-links li a:hover {
    background: #3a3b3c;
}

#nav_1 .nav-links .mobile-item {
    display: none;
}

#nav_1 .nav-links .drop-menu {
    position: absolute;
    background: #242526;
    width: 180px;
    line-height: 45px;
    top: 85px;
    opacity: 0;
    visibility: hidden;
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
}

#nav_1 .nav-links li:hover .drop-menu,
#nav_1 .nav-links li:hover .mega-box {
    transition: all 0.3s ease;
    top: 70px;
    opacity: 1;
    visibility: visible;
}

#nav_1 .drop-menu li a {
    width: 100%;
    display: block;
    padding: 0 0 0 15px;
    font-weight: 400;
    border-radius: 0px;
}

#nav_1 .mega-box {
    position: absolute;
    left: 0;
    width: 100%;
    padding: 0 30px;
    top: 85px;
    opacity: 0;
    visibility: hidden;
}

#nav_1 .mega-box .content {
    background: #242526;
    padding: 25px 20px;
    display: flex;
    width: 100%;
    justify-content: space-between;
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
}

#nav_1 .mega-box .content .row {
    width: calc(25% - 30px);
    line-height: 45px;
}

#nav_1 .content .row img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

#nav_1 .content .row header {
    color: #f2f2f2;
    font-size: 20px;
    font-weight: 500;
}

#nav_1 .content .row .mega-links {
    margin-left: -40px;
    border-left: 1px solid rgba(255, 255, 255, 0.09);
}

#nav_1 .row .mega-links li {
    padding: 0 20px;
}

#nav_1 .row .mega-links li a {
    padding: 0px;
    padding: 0 20px;
    color: #d9d9d9;
    font-size: 17px;
    display: block;
}

#nav_1 .row .mega-links li a:hover {
    color: #f2f2f2;
}

#nav_1 .wrapper .btn {
    color: #fff;
    font-size: 20px;
    cursor: pointer;
    display: none;
}

#nav_1 .wrapper .btn.close-btn {
    position: absolute;
    right: 30px;
    top: 10px;
}

@media screen and (max-width: 970px) {
    #nav_1 .wrapper .btn {
        display: block;
    }

    #nav_1 .wrapper .nav-links {
        position: fixed;
        height: 100vh;
        width: 100%;
        max-width: 350px;
        top: 0;
        left: -100%;
        background: #242526;
        display: block;
        padding: 50px 10px;
        line-height: 50px;
        overflow-y: auto;
        box-shadow: 0px 15px 15px rgba(0, 0, 0, 0.18);
        transition: all 0.3s ease;
    }

    /* custom scroll bar */
    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-track {
        background: #242526;
    }

    ::-webkit-scrollbar-thumb {
        background: #3a3b3c;
    }

    #menu-btn_1:checked~#nav-links_1 {
        left: 0%;
    }

    #menu-btn_1:checked~.btn.menu-btn {
        display: none;
    }

    #close-btn_1:checked~.btn.menu-btn {
        display: block;
    }

    #nav_1 .nav-links li {
        margin: 15px 10px;
    }

    #nav_1 .nav-links li a {
        padding: 0 20px;
        display: block;
        font-size: 20px;
    }

    #nav_1 .nav-links .drop-menu {
        position: static;
        opacity: 1;
        top: 65px;
        visibility: visible;
        padding-left: 20px;
        width: 100%;
        max-height: 0px;
        overflow: hidden;
        box-shadow: none;
        transition: all 0.3s ease;
    }

    #showDrop_1:checked~.drop-menu,
    #showMega_1:checked~.mega-box {
        max-height: 100%;
    }

    #nav_1 .nav-links .desktop-item {
        display: none;
    }

    #nav_1 .nav-links .mobile-item {
        display: block;
        color: #f2f2f2;
        font-size: 20px;
        font-weight: 500;
        padding-left: 20px;
        cursor: pointer;
        border-radius: 5px;
        transition: all 0.3s ease;
    }

    #nav_1 .nav-links .mobile-item:hover {
        background: #3a3b3c;
    }

    #nav_1 .drop-menu li {
        margin: 0;
    }

    #nav_1 .drop-menu li a {
        border-radius: 5px;
        font-size: 18px;
    }

    #nav_1 .mega-box {
        position: static;
        top: 65px;
        opacity: 1;
        visibility: visible;
        padding: 0 20px;
        max-height: 0px;
        overflow: hidden;
        transition: all 0.3s ease;
    }

    #nav_1 .mega-box .content {
        box-shadow: none;
        flex-direction: column;
        padding: 20px 20px 0 20px;
    }

    #nav_1 .mega-box .content .row {
        width: 100%;
        margin-bottom: 15px;
        border-top: 1px solid rgba(255, 255, 255, 0.08);
    }

    #nav_1 .mega-box .content .row:nth-child(1),
    #nav_1 .mega-box .content .row:nth-child(2) {
        border-top: 0px;
    }

    #nav_1 .content .row .mega-links {
        border-left: 0px;
        padding-left: 15px;
    }

    #nav_1 .row .mega-links li {
        margin: 0;
    }

    #nav_1 .content .row header {
        font-size: 19px;
    }
}

#nav_1 input {
    display: none;
}

.body-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    text-align: center;
    padding: 0 30px;
}

.body-text div {
    font-size: 45px;
    font-weight: 600;
}

/* tách */
.card4321 {
    width: 200px;
    height: 280px;
    padding: .8em;
    background: #f5f5f5;
    position: relative;
    overflow: visible;
    top: 20px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    margin-bottom: 20px;
    /* Thêm khoảng cách dưới mỗi card */
}

.card-img4321 {
    background-color: #ffcaa6;
    height: 40%;
    width: 100%;
    border-radius: .5rem;
    transition: .3s ease;
}

.card-info4321 {
    padding-top: 10%;
}

.svg-icon4321 {
    width: 20px;
    height: 20px;
}

.card-footer4321 {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 10px;
    border-top: 1px solid #ddd;
}

/*Text*/
.text-title4321 {
    font-weight: 900;
    font-size: 1.2em;
    line-height: 1.5;
}

.text-body4321 {
    font-size: .9em;
    padding-bottom: 10px;
}

/*Button*/
.card-button4321 {
    border: 1px solid #252525;
    display: flex;
    padding: .3em;
    cursor: pointer;
    border-radius: 50px;
    transition: .3s ease-in-out;
}

/*Hover*/
.card-img4321:hover {
    transform: translateY(-25%);
    box-shadow: rgba(226, 196, 63, 0.25) 0px 13px 47px -5px, rgba(180, 71, 71, 0.3) 0px 8px 16px -8px;
}

.card-button4321:hover {
    border: 1px solid #ffcaa6;
    background-color: #ffcaa6;
}

.marquee-container {
    width: 100%;
    /* Đảm bảo chiều rộng tối đa cho marquee */
    overflow: auto;
    /* Cho phép cuộn nếu nội dung quá lớn */
    white-space: nowrap;
    /* Ngăn không cho nội dung xuống dòng */
}

.card {
    display: inline-block;
    /* Hiển thị các thẻ card cùng một hàng */
}

.review-item {
    position: relative;
    /* Thiết lập vị trí của mỗi dòng là tương đối */
    margin-bottom: 10px;
    /* Khoảng cách giữa các dòng */
}

.review-item::after {
    content: '...';
    /* Nội dung của dấu ba chấm */
    position: absolute;
    /* Thiết lập vị trí của dấu ba chấm là tuyệt đối */
    right: 0;
    /* Đặt dấu ba chấm ở bên phải cuối mỗi dòng */
}

@keyframes blink {
    0% {
        opacity: 1;
    }

    50% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

.blink-text {
    animation: blink 1s infinite;
}
</style>
