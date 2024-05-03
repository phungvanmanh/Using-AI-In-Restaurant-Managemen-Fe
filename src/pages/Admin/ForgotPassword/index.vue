<template>
    <div class="bg-login">
        <div class="wrapper">
		<div class="section-authentication-signin d-flex align-items-center justify-content-center my-5 my-lg-0">
			<div class="container-fluid">
				<div class="row row-cols-1 row-cols-lg-2 row-cols-xl-3">
					<div class="col mx-auto">
						<div class="mb-4 text-center">
							<!-- <img src="../../assets/images/logo-img.png" width="180" alt="" /> -->
							<h5>Forgot Password</h5>
						</div>
						<div class="card">
							<div class="card-body">
								<div class="border p-4 rounded">
									<div class="form-body">
										<div class="row g-3">
											<div class="col-12">
												<label for="inputEmailAddress" class="form-label">Email Address</label>
												<input type="email" v-model="email" class="form-control" id="inputEmailAddress" placeholder="Email Address">
											</div>
											<div class="col-12">
												<div class="d-grid">
													<button type="button" @click="fogotPassword()" class="btn btn-primary">Confirm</button>
												</div>
											</div>
										</div>
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
import "../../../assets/js/app.js";
import { onBeforeUnmount, onMounted, ref } from "vue";
// import { useRouter } from "vue-router";
import Toast from "@/toastConfig";
import $ from "jquery";
import axios from '@/axiosConfig';
export default {
    name: "forgot-password",
    setup() {
        const email = ref("");
        // const router = useRouter();
        const className = 'bg-login';
		const fogotPassword = () => {
			var payload = {
				'email' : email.value
			};

			axios
				.post('forgot-password', payload)
				.then((res) => {
					if (res.data.status == 1) {
						Toast('success', res.data.message);
					} else {
						Toast('error', res.data.message);
					}
				})
				.catch((res) => {
					$.each(res.response.data.errors, function(k, v) {
						Toast('error', v[0]);
					});
				});
		}
        onMounted(() => {
            document.body.classList.add(className);
        });

        onBeforeUnmount(() => {
            document.body.classList.remove(className);
        });

        return { email, fogotPassword };
    },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap");
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css");
</style>
