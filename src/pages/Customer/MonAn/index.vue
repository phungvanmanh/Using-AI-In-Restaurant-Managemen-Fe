<template>
    <h1>Chi tiết món ăn</h1>
    <p>ID món ăn: {{ id }}</p>
    <p>Token: {{ token }}</p>
</template>
<script>
export default {
    name: "mon-an-customer",
    data() {
        return {
            id: null,
            token: null,
        };
    },
    mounted() {
        // Lấy thông tin ID và token từ URL
        const id = this.$route.params.id;
        const token = this.$route.query.token;

        // Lưu thông tin vào data
        this.id = id;
        this.token = token;
        localStorage.setItem('customer', token)
        // Kiểm tra xác thực token ở đây nếu cần
    },
};
</script>
