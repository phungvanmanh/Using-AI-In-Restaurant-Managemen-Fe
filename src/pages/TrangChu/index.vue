<template>
    <nav id="nav_1">
        <div class="wrapper">
            <div class="logo">
                <a href="#"
                    ><img
                        style="width: 50px; height: 50px"
                        src="https://idodesign.vn/wp-content/uploads/2023/04/nhung-mau-thiet-ke-logo-nha-hang-quan-an-sang-tao-1.jpg"
                        alt=""
                /></a>
            </div>
            <input type="radio" name="slider" id="menu-btn_1" />
            <input type="radio" name="slider" id="close-btn_1" />
            <ul class="nav-links" id="nav-links_1">
                <label for="close-btn_1" class="btn close-btn"
                    ><i class="fas fa-times"></i
                ></label>
                <router-link to="">
                    <li><a href="#">Home</a></li>
                </router-link>

                <li>
                    <a href="#" class="desktop-item"> Menu</a>
                    <input type="checkbox" id="showDrop_1" />
                    <label for="showDrop_1" class="mobile-item"
                        >Dropdown Menu</label
                    >
                    <ul class="drop-menu" id="drop-menu_1">
                        <template
                            v-for="(value, key) in dataDanhMuc"
                            :key="key"
                        >
                            <li>
                                <a href="">{{ value.name_category }}</a>
                            </li>
                        </template>
                    </ul>
                </li>

                <li><a href="#">LOGIN</a></li>
                <li><a href="#">LOGOUT</a></li>
            </ul>
            <label for="menu-btn_1" class="btn menu-btn"
                ><i class="fas fa-bars"></i
            ></label>
        </div>
    </nav>

    <div class="body-text"></div>
    <testMenu>
        <template #content-header>
            <div class="container-fulid">
                <div class="row mt-2">
                    <marquee
                        width="200px"
                        style="height: 50px"
                        behavior="alternate"
                        bgcolor="pink"
                    >
                        <p><b>Cac su kien quan trong</b></p>
                        <br />
                    </marquee>
                </div>
                <div class="row mt-2">
                    <div
                        id="carouselExampleFade"
                        class="carousel slide carousel-fade"
                    >
                        <div class="carousel-inner">
                            <template
                                v-for="(value, key) in dataBaiViet"
                                :key="key"
                            >
                                <div class="carousel-item active">
                                    <img
                                        v-bind:src="value.hinh_anh_bai_viet"
                                        style="width: 100%; height: 500px"
                                        alt=""
                                    />
                                </div>
                            </template>
                        </div>
                        <button
                            class="carousel-control-prev"
                            type="button"
                            data-bs-target="#carouselExampleFade"
                            data-bs-slide="prev"
                        >
                            <span
                                class="carousel-control-prev-icon"
                                aria-hidden="true"
                            ></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button
                            class="carousel-control-next"
                            type="button"
                            data-bs-target="#carouselExampleFade"
                            data-bs-slide="next"
                        >
                            <span
                                class="carousel-control-next-icon"
                                aria-hidden="true"
                            ></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div class="card mt-2" style="background-color: blanchedalmond">
                    <div class="row mt-2">
                        <div class="col-2">
                            <h5 class="blinking text-danger">
                                *Chương Trình Khuyến Mãi:
                            </h5>
                        </div>
                        <div class="col-2">
                            <template
                                v-for="(value, key) in dataBaiViet"
                                :key="key"
                            >
                                <p>
                                    <b>{{ value.mo_ta_chi_tiet_bai_viet }}</b>
                                </p>
                            </template>
                        </div>
                    </div>
                </div>
                <div class="row" style="display: flex">
                    <div
                        class="col-2"
                        style="display: flex; flex-direction: column"
                    ></div>
                    <div class="col-8 d-flex align-items-center mt-2">
                        <div class="input-group mb-3">
                            <input
                                type="text"
                                class="form-control"
                                placeholder="Search dish"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                            />
                            <span class="input-group-text" id="basic-addon1"
                                ><button class="btn btn-primary">
                                    Search
                                </button></span
                            >
                        </div>
                    </div>
                    <div class="col-2"></div>
                </div>
                <div class="row mt-2"></div>
            </div>
            <div class="container">
                <a href="">
                    <h5>Món Nổi Bậc:</h5>
                </a>
                <div class="container">
                    <div class="row">
                        <template v-for="(value, key) in dataMonAn" :key="key">
                            <div class="col-3">
                                <div class="card" style="max-width: 300px">
                                    <div class="face face1">
                                        <div class="content">
                                            <div class="icon">
                                                <img
                                                    style="
                                                        width: 100%;
                                                        height: 100%;
                                                    "
                                                    :src="value.image"
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="face face2">
                                        <div class="content">
                                            <h3>{{ value.food_name }}</h3>
                                            <p>{{ value.price }}đ</p>
                                            <div class="col text-center">
                                                <button
                                                    class="btn btn-primary"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#exampleModal"
                                                >
                                                    Đánh Giá
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </template>
                    </div>
                </div>
                <!-- Modal -->
                <div
                    class="modal fade"
                    id="exampleModal"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                >
                    <div class="modal-dialog modal-lg">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1
                                    class="modal-title fs-5"
                                    id="exampleModalLabel"
                                >
                                    Review
                                </h1>
                                <button
                                    type="button"
                                    class="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div class="modal-body">
                                <div class="card radius-10">
                                    <div class="card-body">
                                        <ul class="list-unstyled">
                                            <li
                                                class="d-flex align-items-center border-bottom pb-2"
                                            >
                                                <h5>Linh</h5>
                                                <div class="flex-grow-1 ms-3">
                                                    <h5 class="mt-0 mb-1">
                                                        List-based media object
                                                    </h5>
                                                    Cras sit amet nibh libero,
                                                    in gravida nulla. Nulla vel
                                                    metus scelerisque ante
                                                    sollicitudin. Cras purus
                                                    odio, vestibulum in
                                                    vulputate at, tempus viverra
                                                    turpis. Fusce condimentum
                                                    nunc ac nisi vulputate
                                                    fringilla
                                                </div>
                                            </li>
                                            <li
                                                class="d-flex align-items-center my-4 border-bottom pb-2"
                                            >
                                                <h5>Mạnh</h5>
                                                <div class="flex-grow-1 ms-3">
                                                    <h5 class="mt-0 mb-1">
                                                        List-based media object
                                                    </h5>
                                                    Cras sit amet nibh libero,
                                                    in gravida nulla. Nulla vel
                                                    metus scelerisque ante
                                                    sollicitudin. Cras purus
                                                    odio, vestibulum in
                                                    vulputate at, tempus viverra
                                                    turpis. Fusce condimentum
                                                    nunc ac nisi vulputate
                                                    fringilla
                                                </div>
                                            </li>
                                            <li
                                                class="d-flex align-items-center"
                                            >
                                                <h5>Linh</h5>
                                                <div class="flex-grow-1 ms-3">
                                                    <h5 class="mt-0 mb-1">
                                                        List-based media object
                                                    </h5>
                                                    Cras sit amet nibh libero,
                                                    in gravida nulla. Nulla vel
                                                    metus scelerisque ante
                                                    sollicitudin. Cras purus
                                                    odio, vestibulum in
                                                    vulputate at, tempus viverra
                                                    turpis. Fusce condimentum
                                                    nunc ac nisi vulputate
                                                    fringilla
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button
                                    type="button"
                                    class="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                >
                                    Đóng
                                </button>
                                <button
                                    type="button"
                                    class="btn btn-primary"
                                    data-bs-toggle="modal"
                                    data-bs-target="#danhgiaModal"
                                >
                                    Viết Đánh Giá
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Modal -->
            <div
                class="modal fade"
                id="danhgiaModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">
                                Viết Đánh Giá Của Bạn
                            </h1>
                            <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div class="modal-body">
                            <input
                                class="form-control"
                                type="text"
                                name=""
                                id=""
                                placeholder="Mời bạn viết đánh giá,lưu ý không có những hành động phá hoại"
                            />
                        </div>
                        <div class="modal-footer">
                            <button
                                type="button"
                                class="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                            <button type="button" class="btn btn-primary">
                                Đăng
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
    // ref,
    computed,
    onMounted,
} from "vue";
import { useStore } from "vuex";
// import axios from '@/axiosConfig';
// import Toast from '@/toastConfig';
// import $ from 'jquery';
import testMenu from "@/pages/Admin/Menu";
export default {
    name: "trang-chu",
    components: {
        testMenu,
    },

    setup() {
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
        const store = useStore();

        const dataBaiViet = computed(() => {
            return store.state.dataBaiViet;
        });
        const dataMonAn = computed(() => {
            return store.state.dataMonAn;
        });
        const dataDanhMuc = computed(() => {
            return store.state.dataDanhMuc;
        });
        onMounted(() => {
            store.dispatch("onFetchBaiViet");
            store.dispatch("onFetchMonAn");
            store.dispatch("onFetchDanhMuc");
        });
        return {
            dataBaiViet,
            dataMonAn,
            dataDanhMuc,
        };
    },
};
</script>

<style scoped>
body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    background: #333;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: sans-serif;
    background-color: #f1f1f1;
}

.container {
    max-width: 100%;
    /* Sử dụng chiều rộng tối đa của body */
    margin: 0 auto;
    /* Căn giữa container */
    display: flex;
    justify-content: space-around;
    /* Chia đều các phần tử trong container */
    align-items: center;
    flex-wrap: wrap;
    /* Cho phép các item trên cùng 1 hàng */
}

.container .card {
    position: relative;
    border-radius: 10px;
    width: 100%;
}

.container .card .icon {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #f00;
    transition: 0.7s;
    z-index: 1;
}

.container .card:nth-child(1) .icon {
    background: #e07768;
}

.container .card:nth-child(2) .icon {
    background: #6eadd4;
}

.container .card:nth-child(3) .icon {
    background: #4aada9;
}

.container .card .icon .fa {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 80px;
    transition: 0.7s;
    color: #fff;
}

i {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 80px;
    transition: 0.7s;
    color: #fff;
}

.container .card .face {
    width: 300px;
    height: 200px;
    transition: 0.5s;
}

.container .card .face.face1 {
    position: relative;
    background: #333;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    transform: translateY(100px);
}

.container .card:hover .face.face1 {
    background: #ff0057;
    transform: translateY(0px);
}

.container .card .face.face1 .content {
    opacity: 1;
    transition: 0.5s;
}

.container .card:hover .face.face1 .content {
    opacity: 1;
}

.container .card .face.face1 .content i {
    max-width: 100px;
}

.container .card .face.face2 {
    position: relative;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    box-sizing: border-box;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8);
    transform: translateY(-100px);
}

.container .card:hover .face.face2 {
    transform: translateY(0);
}

.container .card .face.face2 .content p {
    margin: 0;
    padding: 0;
    text-align: center;
    color: #414141;
}

.container .card .face.face2 .content h3 {
    margin: 0 0 10px 0;
    padding: 0;
    color: #fff;
    font-size: 24px;
    text-align: center;
    color: #414141;
}

.container a {
    text-decoration: none;
    color: #414141;
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

    #menu-btn_1:checked ~ #nav-links_1 {
        left: 0%;
    }

    #menu-btn_1:checked ~ .btn.menu-btn {
        display: none;
    }

    #close-btn_1:checked ~ .btn.menu-btn {
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

    #showDrop_1:checked ~ .drop-menu,
    #showMega_1:checked ~ .mega-box {
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
</style>
