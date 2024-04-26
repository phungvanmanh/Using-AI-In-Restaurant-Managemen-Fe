<template>
    <slot name="content-header"></slot>
    <body>
        <body>
            <div class="row"></div>
            <div class="container">
                <div class="row mt-2">
                    <slot name="content"></slot>
                </div>
            </div>
        </body>
    </body>
</template>
<!-- <div class="col">
    <div class="col">
        <div class="card" style="max-width: 300px; ">
            <div class="face face1">
                <div class="content">
                    <div class="icon">
                        <img
                            style="
                                width: 100%;
                                height: 100%;
                            "
                            src="https://th.bing.com/th/id/OIP.dlA9d5tPIytl0IN81AjouAHaEK?w=341&h=180&c=7&r=0&o=5&pid=1.7"
                            alt=""
                        />
                    </div>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    <h3>Cua Hoàng Đế</h3>
                    <p>1.000.000đ</p>
                    <div class="col">
                        <button
                            data-bs-toggle="modal"
                            data-bs-target="#exampleVerticallycenteredModal1"
                            class="btn btn-primary"
                        >
                            Detail
                        </button>
                    </div>
                    <div class="col text-end">
                        <button class="btn btn-primary">
                            Add
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div> -->
<!-- <div
    class="modal fade"
    id="exampleVerticallycenteredModal1"
    tabindex="-1"
    style="display: none"
    aria-hidden="true"
>
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Lượt Review</h5>
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
                                <img
                                    src="assets/images/avatars/avatar-8.png"
                                    class="rounded-circle p-1 border"
                                    width="90"
                                    height="90"
                                    alt="..."
                                />
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
                                <img
                                    src="assets/images/avatars/avatar-9.png"
                                    class="rounded-circle p-1 border"
                                    width="90"
                                    height="90"
                                    alt="..."
                                />
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
                                <img
                                    src="assets/images/avatars/avatar-10.png"
                                    class="rounded-circle p-1 border"
                                    width="90"
                                    height="90"
                                    alt="..."
                                />
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
                    Close
                </button>
            </div>
        </div>
    </div>
</div> -->
<script>
export default {
    name: "test-menu",
    setup() {
        
    },
};
</script>