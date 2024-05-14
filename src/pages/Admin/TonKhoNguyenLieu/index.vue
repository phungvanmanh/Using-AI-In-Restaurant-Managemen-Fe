<template>
<div class="container">
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h5>Tồn Kho</h5>
                </div>
                <div class="card-body text-center">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th text-center align-middle text-nowrap>#</th>
                                <th text-center align-middle text-nowrap>Tên Nguyên Liệu</th>
                                <th text-center align-middle text-nowrap>Số Lượng Ban Đầu</th>
                                <th text-center align-middle text-nowrap>Số LượngTồn</th>
                                <th text-center align-middle text-nowrap>Ngày</th>
                                <th text-center align-middle text-nowrap>Action</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr text-center align-middle text-nowrap>
                                <th>
                                    1
                                </th>
                                <td text-center align-middle text-nowrap>Muối</td>
                                <td text-center align-middle text-nowrap>10</td>
                                <td text-center align-middle text-nowrap>5</td>
                                <td text-center align-middle text-nowrap>20/12/2024</td>
                                <td text-center align-middle text-nowrap>
                                    <button class="btn btn-info" data-bs-toggle="modal" data-bs-target="#exampleModal">Cập Nhật</button>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                    <!-- Modal -->
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Cập Nhật Số Lượng Tồn</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <label for="">Số Lượng Tồn</label>
                                    <input type="number" name="" id="" class="form-control">
                                    <label for="">Ngày</label>
                                    <input type="date" name="" id="" class="form-control">
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                                    <button type="button" class="btn btn-primary">Lưu</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'ton-kho-nguyen-lieu',
    setup() {
        return {

        }
    }
}
</script>

<style >

</style>
