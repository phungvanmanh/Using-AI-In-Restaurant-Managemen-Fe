<template>
    <div class="bg-login">
        <div class="wrapper">
		<div class="section-authentication-signin d-flex align-items-center justify-content-center my-5 my-lg-0">
			<div class="container-fluid">
				<div class="row row-cols-1 row-cols-lg-2 row-cols-xl-3">
					<div class="col mx-auto">
						<div class="mb-4 text-center">
							<!-- <img src="../../assets/images/logo-img.png" width="180" alt="" /> -->
							<h5>LOGIN</h5>
						</div>
						<div class="card">
							<div class="card-body">
								<div class="border p-4 rounded">
									<div class="form-body">
										<form class="row g-3">
											<div class="col-12">
												<label for="inputEmailAddress" class="form-label">Email Address</label>
												<input type="email" v-model="email" class="form-control" id="inputEmailAddress" placeholder="Email Address">
											</div>
											<div class="col-12">
												<label for="inputChoosePassword" class="form-label">Enter Password</label>
												<div class="input-group" id="show_hide_password">
													<input type="password" v-model="password" class="form-control border-end-0" id="inputChoosePassword" value="12345678" placeholder="Enter Password"> <a href="javascript:;" class="input-group-text bg-transparent"><i class='bx bx-hide'></i></a>
												</div>
											</div>
											<div class="col-md-6">
												<div class="form-check form-switch">
													<input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked>
													<label class="form-check-label" for="flexSwitchCheckChecked">Remember Me</label>
												</div>
											</div>
											<div class="col-md-6 text-end">
												<router-link to="/admin/forgot-password">
													<a>Forgot Password ?</a>
												</router-link>
											</div>
											<div class="col-12">
												<div class="d-grid">
													<button type="button" @click="login()" class="btn btn-primary"><i class="bx bxs-lock-open"></i>Sign in</button>
												</div>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<!--end row-->
			</div>
		</div>
	</div>
    </div>
</template>
<script>
import "perfect-scrollbar/dist/perfect-scrollbar";
import "../../assets/js/app.js";
import { onBeforeUnmount, onMounted, ref } from "vue";
// import { useRouter } from "vue-router";
import AuthService from "@/services/AuthService";
import Toast from "@/toastConfig";
import $ from "jquery";
export default {
    name: "admin-master",
    setup() {
        const email = ref("");
        const password = ref("");
        // const router = useRouter();
        const className = 'bg-login';
        const login = async () => {
            try {
                await AuthService.login({
                    email: email.value,
                    password: password.value,
                });
				// router.push({ name: "admin" });
				window.location.href = "/admin/lich-lam-viec";
				Toast("success", "Đăng nhập thành công!");
            } catch (error) {
                $.each(error.response.data.errors, function (k, v) {
                    Toast("error", v[0]);
                });
            }
        };

        onMounted(() => {
            document.body.classList.add(className);
        });

        onBeforeUnmount(() => {
            document.body.classList.remove(className);
        });

        return { email, password, login };
    },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap");
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css");
</style>
