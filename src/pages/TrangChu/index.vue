<template>
<nav id="nav_1">
    <div class="wrapper">
        <div class="logo"><a href="#"><img style="width: 50px;height: 50px;" src="https://idodesign.vn/wp-content/uploads/2023/04/nhung-mau-thiet-ke-logo-nha-hang-quan-an-sang-tao-1.jpg" alt=""></a></div>
        <input type="radio" name="slider" id="menu-btn_1">
        <input type="radio" name="slider" id="close-btn_1">
        <ul class="nav-links" id="nav-links_1">
            <label for="close-btn_1" class="btn close-btn"><i class="fas fa-times"></i></label>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li>
                <a href="#" class="desktop-item">Dropdown Menu</a>
                <input type="checkbox" id="showDrop_1">
                <label for="showDrop_1" class="mobile-item">Dropdown Menu</label>
                <ul class="drop-menu" id="drop-menu_1">
                    <li><a href="#">Drop menu 1</a></li>
                    <li><a href="#">Drop menu 2</a></li>
                    <li><a href="#">Drop menu 3</a></li>
                    <li><a href="#">Drop menu 4</a></li>
                </ul>
            </li>
            <li>
                <a href="#" class="desktop-item">Mega Menu</a>
                <input type="checkbox" id="showMega_1">
                <label for="showMega_1" class="mobile-item">Mega Menu</label>
                <div class="mega-box" id="mega-box_1">
                    <div class="content">
                        <div class="row">
                            <img src="https://fadzrinmadu.github.io/hosted-assets/responsive-mega-menu-and-dropdown-menu-using-only-html-and-css/img.jpg" alt="">
                        </div>
                        <div class="row">
                            <header>Design Services</header>
                            <ul class="mega-links">
                                <li><a href="#">Graphics</a></li>
                                <li><a href="#">Vectors</a></li>
                                <li><a href="#">Business cards</a></li>
                                <li><a href="#">Custom logo</a></li>
                            </ul>
                        </div>
                        <div class="row">
                            <header>Email Services</header>
                            <ul class="mega-links">
                                <li><a href="#">Personal Email</a></li>
                                <li><a href="#">Business Email</a></li>
                                <li><a href="#">Mobile Email</a></li>
                                <li><a href="#">Web Marketing</a></li>
                            </ul>
                        </div>
                        <div class="row">
                            <header>Security services</header>
                            <ul class="mega-links">
                                <li><a href="#">Site Seal</a></li>
                                <li><a href="#">VPS Hosting</a></li>
                                <li><a href="#">Privacy Seal</a></li>
                                <li><a href="#">Website design</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </li>
            <li><a href="#">Feedback</a></li>
        </ul>
        <label for="menu-btn_1" class="btn menu-btn"><i class="fas fa-bars"></i></label>
    </div>
</nav>

<div class="body-text">
    <div class="title">Responsive Dropdown and Mega Menu</div>
</div>
<testMenu>
    <template #content-header>
        <div class="container-fulid">
            <div class="row mt-2">
                <marquee width="200px" style="height: 50px" behavior="alternate" bgcolor="pink">
                    <p><b>Cac su kien quan trong</b></p>
                    <br />
                </marquee>
            </div>
            <div class="row mt-2">
                <div id="carouselExampleFade" class="carousel slide carousel-fade">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img style="height: 500px" src="data:image/jpeg;base64,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" class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img style="height: 500px" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxASEhUQEBAVFRUVFRAQEBYXFhUVDxAVFRUWFhUVFRUYHSggGBolGxUVIjEhJSkrLi4uFx8zODMtNyguLisBCgoKDg0OFQ8QFS0dFR0rLS0rLS0rLSsrLS0tLS0tKy0tKystNy0tKystLSs3LTctNy83OC0rNysrLSsrLS0rLv/AABEIALcBEwMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAADAAIEBQYBB//EAD8QAAEDAgQDBQUFBwQCAwAAAAEAAhEDIQQFEjFBUWEGEyJxkTJSgaGxFEJiwfAHFiOCktHhM3Ki8SREFTRD/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAECAwT/xAAdEQEBAQEBAAMBAQAAAAAAAAAAARECIRIxQVEi/9oADAMBAAIRAxEAPwDNhEhNATwo061OC4F0KBwTgFwJwQIBOhIBJB1JIBdQNShOhIhAxNITyFxAwpqeQuQgG5NKeU0hAJwTCikIZCAbghlFITCEAnIZRiEJwQCchORnBCcgCUJyM5DcgEUMorkMoBuTSnlMKBhXE5NKAZSXSFxBuwnBNCfCoQTguNCcFA5OCaE4BA4LoSAXYQKF0JoTalZrRJMICcVxAw2LZUdDHDjBO0qtzA12HVrkAmwBhsRv6j1TTFsSkq3BVtTdTjEnRxmYBPA2i6WFrvfULRJa0+IjgJiSVNX4rFNhHxLWtp6w8GCGuFjfoRbl6p2EwdSrTNWm2WtJ1cwABf5/JNhlRCEwohTCqgZTCEUphCARCY5FITCEAShuRnBMcEAChOCO4ITggA4ITgjOQnBAJwQyiuQ3BAMphRCmOQDK4U4ppQDSXSkg3YXUk4BUIJ0LgCcFB0BOC4ELGVwxpceA9UEloJsASeQuUX7LUkDu3SdpEfVC7NZyxl3WcZM7npPRXOOzxrg4GJIJaZE34grF6bnKNh8mLj/FdoiYgi8efBBzbD06T9NZjHse0lrgC07HaOIF05ubMIknnPISLnqLef51ubZgwQ7fuiDpk2J4idtnenBZ21rJGcx5eyvULBZhLpE6RxB28lY4F/f0KhfUlwDqgkxo0geH4i09AoOX46XVnOuaoaG7jUW8BG++3kpOStbh3Cq53iB8TfuBrhID5EzM9LLTIjHUoNKkxwqAjuSZDnlxgi9i4SB5J2MZUpBtGnDnad4DHuBm0G87AztPxXKWZ0zU0VGgsJFWmGuJq0iBbSfht68CrPNcubiRqp1GueBpGqbyfA4OOx/XIKKymOFamC2pqF/EDtM8+J2XonZPHObQp0mGHubrJgXBAjzP+FmapcMO6hjKZBDS5jyDIcCD5zsJ6p/ZTMSxjXPZqcKgZSJ4tFnAHh/hS/Sx6Di8rp92Gvpy6CS64dJ4k78lEy/JcKDNRhdw0lxieGyucmrCoHF7hI3nZogWlVuY12MJM2n6rGtYFm/ZSk5uvDHSQJLTJDuNuSxT2EEgiCLFei5HiDVd4JMwPKJlU3bjIe5d3wc3xk6mAiWG1+srpx17jHfMjHOTCiOTSF0cwiENwRSENwQCehORXIbggA4ITkZyE4IAuCG5GcEJyAZQ3IhTHIBlNKeUwoGpJJIN4nBNATgqjoTwE0JwUV1Vmc4F1XSO8DGAy+0norQBdcyQf0UFVhMqwsCKlYxOqNJseOmJi6DjMDSA/gVnP0ka2EgPjeNt/gNj8VVw7nE0WanF3i0jSNUHid4+KssB2cxZA+0aGMtpY4gvgcGgGBPQrFbAybHUKnge1toALzBJEmLc9tkStg6QNUlp0PbABLYD76QSDbjBG+lW9DKMHQdLWuDryXQWG8O39kieZAJuOUKtiSBoqU2tZ4tohu4cdJ4WkQdiFlWXyWKjz3gdAE0zHgBuPFy3N+e8p1V7zUe2u2QdRY4E6S6JbB47W5zE3hTxh2teH6zTBe41aZIgPcJBHOZBvYqdjsI1+iSdDzpYGjTALRp6G/GP8a1MZrFjS7WQQ+m9rpaI1NJkEgi14E3n62j8sr13ivQMa4LhsQTcmNiNQ+Mt3lS8LRcH+E6gCGw2ANOnY7xcH+q4K0uIdQoBlV5LCC86SJaTNxHIm5G8/OWrIru0GLFTDaHgmozu6RbMmZJMceTfRROyzHuw9QOAIonvKQLZEkgu+RJ6T1UjAYEvqvxdQNfN2tvYRBMHY3iOYO+m+nomsAWtGjvSY030nSyQ4fB39SzasHyVg7oF7oJku4C5kg/rgpYwtJxu61zb2neSDhQaYh1NpkkO4AC23PgFYU8DScd48pcOosLLnW4O+oGs00zo4BrTDvMnifNZ/tTWd3IpvaB4pa4m89dRsI6K/wAzoMpMBDiS+25aZ4ez15rzbNsQ5zyDIgkFpM6TxvxC6cMdoTymEpy4Grs5BOTHohTEAXBCcpVdwOyjOQAchvCK9CegC9DKK5CcgG5DciOTHIBuTCnuTUDEkkkG9XQuLoCqHhOCaE5qilMJ5Q6jZTqshqClx2cVKVYCk4NgeI9fl9Vd4DGuez/yHzqIIMkTJ9rbbyJWSe1z6ulolziY3P0Wnw1CswQ4Cw9kjwmRM6QRHXgePJZrUWpYGeJr3uaT/EBs8iIJbFiRwN5AIKg0MORYGQ7WA2IJbFnUwbbEiIvHknjBVHMDgGltpBaHne2lwEWO17KbTwdOoO7w4gghz7+AnYksDYBBG8RA34rDTJ1WuB7msJY+INg9gJOgm1tz8tgpWVYhzmPwdQgVAD3LjA1XOmRFjIuNpAUjtlSBLAHeLwNmwcIi2vZw6iNz5BZtTbTr4QgSZcHW3OgbdQW+qoPgazQ6gXtsIZWaCD3JcDpJG5AcW/n1l9tmPqPo4bT7bos6ZABcS0/Eb+XOc/8AaG/bYglprtp1QSDDW02gcALFgHKQFrMl1YjMn1Hj/QhgEeGfvGfIjlb1U+lCpNNOq2kBBcKYvbSAASbbX1BbLCMOkahc87EjcSs63S/M3l1w3Q3jYtgkR5rVVXHXoYQJbDSWON+Un6BYrTndCP5iWibk8Jn9WUbGZfqGmLmZEm42iPVWrcC8wXOOrzBM/hG3wUukwHZ20bAEen5LJ4oGYHV4IPhI0jdo6C/y8lku2WANOqH++L+Y6L03F0WiDAk25uvuTxWQ/aNRbppuuTJAjbbit8eVOvY8/KbKe5qGV3cTXJpTwEyoIQDqgcEFwRXJmrggjPQ3ItQITkAnITkVyE5AJyYU9yYUAymFEKYUDCkupIN5CcuLqIc1OCaF1FcrsJFimYmqRTh28cEaUPEEwYCDMZe/TVLoB03Ez6qY7OK9V2mkwHe8QxvUcAeqpcRUdrcBuTB5K9yuoynDXnkTtE7rHUahzc9xNJpNQNaLG/ic7npBttuTYfJMZ23qsqAmmXAbDUTb8Ig36+il41raje8bDgfDckNfANg37qzeIyx4PgkgcDLXt/DPsu+BUmLdazH5izG6TdjidOl7tN/wu4m45JZzQc9lNhJ1NcwtPFsQC6bSfD8lisY3EBviploHP8lrHYo1qVKTNQBpI47XUsz1ZdT6uXNLmFzbialhMtIcfECLwdPHclaDJ6vcV3zcvOqwl1mhoBMXBABk81SZZjHVH90GO1NDTES4R94nhvtstPRpigX1q8CWEt6QDI8/qs9deNSKp2Pp4bEVK7w5zjJ7tpBfJAMOkwJEWN79VGr/ALQa9UtbQoU6cmLwXho8hHwhU2VZdjarqtaj3dZr3l9Sm90GSS6Q7geCZXy+q0uHd0qBJAqaHmtWEnYWhvxKn0l1a5Z2rxtWuaYrHT4WA8A7fYGPqtWWZhTHed/rA8T2gAOI/DzKy+VYXQGsa3RTBufae87kud6bc4W3y51U2As2N4MyOIN48lmt8rbA55TqUJLoMDTqjUT5c1R/tAxR7ljA6NRmPe9VNzPKHMPeUdwQ4xaPKDcrJdsMcX6W8hcdfj0W+fuMX6Z0N5obilrSpsk32Fz5D9fNd3Jx9vhCHUfO6JV587lAcgYUNyIU18IAude6FUT3obkAnILkVyE5ANyGURyGUDCmFPKYUHElxJBvAnJgK6CiHJ6YCugop0oGNqQ0noilQM3qgMN4t8UGboVhrJjc+qucPSpvu9u3xb0BhZ+lIvyV1lsPu1xafMwekLPTXK9wtWiCBrLyQG6AxxA6MIFh0Vm9msGBOq0OveT9wm8Qbjoo9HA1XgEYjSBEtADHfEp9RmIfIpUnVSBAIHhnexJtwXJ0il7UYdjWCnTJc6wjYA8R022hU2U1HUXabGJniRA3K1uW4Cox5FehUYXaQH6CWvc+1iJ+Kg5/kdTDu7zTqp38QBlnMER8+qS/hn62fY8NM4hwvpA5AjmgdssbrYWtIAJDXSCSQfCQPkZVbk/aSkxnhY7QGgmYm25PCOKu8BlFXFVBiHUtFIgFuqz3bbN4D0/Ncrs9dJjG4CocM3SAWzpa4cY2JkefFX+BYwNOmCSQRMQQPKI3+fGFZ5zkrqxa2lTedLixze7EOnZ+t1g0dFDHZPHsYNTGyDI0PDnN34GOHKeKs99SjZdUYHagxrSSW6XCKZPGTvyv1sthlzqh8TqfdgDfU3S7/be4+qymW5DXPiqVWxs6GSTHvAAAkeUq8fhntYWB73NP3TJbblaQiDHNXOJYAQSTe23KQdlmu1dGGCo5jYNnFoaLm8kEXPxCs8M186SwD3ZsB5EoPavA6cPLjEHZo1E/AkBa4vqdTxhLE+FwE2A0Q7/iD9U2s0AEBwJ+8RN+gtt+uC4+oBZggbEn2z/YdB80BelwIpjk5c0Hfhz4IBFDcilqE5ANyE8Iz0JyALkFyMUJyATkwojkMoBFMKK5DKDiS4kg3IK6ChNentqH9AIh7SnArgrHp/S3+yeK5/D/AEs/sik0E2Ak9LlU2f0qkBukNk/fc1lumoifgrmpjDB1Ekci50egKymYVu8qEMotMb3qWHNxDgAOpQBZhWg+Oq3+Vr3GfiA0+qkYUMa4FvfP4QGBvz1O+iFSrsp3IZPKnqcfi97i0fAOUtmfYh/gpfw7GdADXkc31BEdSNI6KUjSYevA8VM0zyqOiqOoZAI+IVzgXuI/+zoaQRABLgeeqN15/lmHLXa5kSQXXLCdy1vGq/o2B156bAZ5TDgylD3mwEg0m8ySLOPlAG9rhc7y6StphcFMaca6JbYzfjt+auRhGmnpfU7z2gbXIHCOPoqbLc8bpaXxLp0wPaaDGqPuiZt0Uw5pVcP4TAORN/QBZnK6zNTs2yjjWUg6cO4OqFhA1SHtJbttPyXpXftc2GO0Agxa4A6FYOrlWIqObVdUdqHwgcoutDlz8TTAkNdHHZytPVk3BAkfxXk6tUCS02iDPBSaWDYfDodEzu8GfifldBZmB+8INuIjyVfmebGCHPtwE/r9c1n4yG2o+cEF0NqOZEjS6PyAKrX42mBoJ1OHEWe3rc39VCx3aljxoDG1Rq0nV7Qn3HyL7W36CVIyzJ6bjrl8b6XnxNnfcfG9r7lZs/WpVpkuF1GZLgLiRH5lSO1NEVqJotcBab3uOhUuriWU2gNEmBwmeR6qixGZBpIIMu3keEeqs8K8+xGHDHaXVGA/zX8oaU3u2Dd8/wC1sj/kR9FI7U026/CIG5c1oEnq6VQ0caQdrBejm+ONmLbW0ey34uOr5QB6goNZ5cZP/XkgsxbDcbc+CFisc1rZVQUoZWbr51UmRspuVZoah0u3QWT0MojkNyAJQnIzkJ6AbkMojkMoGOCGURyYUDISXUkGv1LochAlEbUdwJ9SgOym47NJ8gYTxT95zR8dR/4z84UYlx3k+d0RtM8vWyAlQsA9ku/3Wb/SD+axuaVHOfpBJE+FgENB6Mbad+C1722PH5D1WNxbXd4QYY2b7gO/N/lf4IFUoNbDTqc820sIJ8iYIHkJPkram1lNv8XSIuKLZc4nnVM/InV1EQqk4sgltOQJa0nZ7vgPZHQfElW+XZJVrOgNOmAZPskT9N1KIOOxb6vHSCIgbke6SI8P4QAOk3T8Fg3DSBZ9Uho/BTmHH+aCP9rXe8tdl/ZmmH6al7EkXnTt63j0Vu3IGai4U4OkDe40i0coiPJYvcanNYqrmrm1SQ6GNADNyHNGktPnpHSTK0mA7baY2LRAM7nnAUR/Zs1C5rWyGwBtsBb5SqPMOz76YMAi4tx2/wApsq5Xp7O22HDNbbxBPVQsT26cXHS0BsEidzzj0XmdHA1vZAPD9fNWjcgquIJfE26gb/UKeKtM67XVSHgPBkCAOB1f5Va6rXxb3DUfDIPUAyCOogeisMs7MNaZcZF/180fGxhdTmNu76wT8vzU2LhlKn3ThP8AqOi7ROq8HWOMWM+sr0Ts5QhsvM2Fgf4bfISsF2fqGsWvPieZA5gTO/5rd0ZpssWNBm8jxH9ea5detxbVqtI+EEN8oHyUfFYZlRugmfLcct/rdZ/Lcd32pzgGtD6jZBBnS7TYfAKfSqYeq4sp1vG2JEiRykcEGN7SZc9w9kktJaQCHEjgSZt6LH4jDHVpi3FetUsCMQ2o2wexzmmTeW8ZBmON1gs+wL6TiKhMjm3XP80NIHku3Fc+mazA6dLRZoImFEzqrqgN2A2UutUYZGps+bgP+bQB8SomKo6hMiRyc0/Qrowo3gqXk9N3eAhTaWWOdB0/2VphsI1l+KqJL0FxXalRCc9Bwobl1z0MuQccmFOc5MJQNKYU8lMKBsJLqSD0M4cDghuYByUypk2IPD6qO/IcSeC0iK+pHEKLVxQHEKVV7N4lRKnZjEcT9f7KCM/Mo2Hrf5bKizSmXu7yJPFXdXIKzf0VDrZbVH6KKgZBhXPeTp1Bvi3IuNl6VlGLD2ioASCAbcXHkOPLfzWHyOm6m54IuWkA/dHnyV92YzEd2GOPjabjYtE8GnZu4g8jYLl23y0WHzRxrkAAEU5PvEh4iDxjaL/RKtnZpYhtJ8jWJaSDoOpwG5432UXNToa2uz22A8hMt8QJ5x+SnEUcfhiC4BwksIIlrvC5tzxkbefNcm/pLzbCup/+SwRYNeJJA4NdAmAJvbY9FVUHnFYZ1ZzNLgXBwBkEtnb/ACu5h2ipfYhTcZqmnoLTa5B4jfaygZDj31cG6jSpzUfIqG0N8+p3+JSc3F2I9KuyLC4IB8+XzRqeJm20W+P6lR6PZTG29n2g4+I8PgpzOyuM4aAd7km/ot3ms6a3FBhgnzHM3P8AZZftFmhcSZ4HyE/9BaDFdjMaSTqZe+7pJ35eXos3mvZTFNkvLd5tNh5q88pev4vuyuKNOkCAA4hsm0meflPzTu0OZV2PnvPCxjn6RMvIY4/I6f6uizmCxb6DgXiYiRMi3L0UztNm7K1MuaCJpVKU2u4uZ6ewZ+Cnx/0u+Nfkbmmi1klwFOSSRqJA9Z35KH2YAotfiQ2XVJPwvxNgIJd9Flcp7RPYx7HOAtafa3u2/HzV8ztBR7g0vFGggASCAQW6h5AhS8U+UafsExz31cS57v4r3PALpEcLHa36sj9pX03YtlB7QRWpvI5tcy8joQq/sv2ho06A1vgt0iIuZ1Rb4QrPs/T+11Tiizhop/hbxPQmBZSS/JbmK2r2Owx3Yor+w+G90hejHAjkmnBDkvTji88p9j6Tdi71sj/u2zlK3ZwXRNOETEYf922e4PRNd2bZ7g+S25woTDhEwYc9m2e4Ez92me4PRbr7F0S+yHkmGsL+7DfcHomnswz3At0cGeaacF1+SYawv7s0/cHokezNP3G+i3BwY6rn2NMNYf8Admn7jfRJbn7H+oSTDV+MI3kF37K3kFS0s6niijOBO60ytvsg90Ln2NvuNUNmZz+ae7MRzRUg4Bh//Jp+AKFUyegfaw9M+bGf2SpZiOaMcb5IIR7NYPjhKO8/6TN+eyR7LYA/+nRvv/DaD6gKxZjgj08WCoqkxPZHA1GljqHhNiA+o0fJyr6P7O8vZIptqsBiQ2s+DBkG5N+q2ArtTtbVMhtY0fs5yyZdRLzYeKpUO21pjirrLuz+FoN0UaLWt5CSPmVdDSugNTDUJuFZwaPQJwoN5D0UzQEu7CuIidyOQ9AkaAP3R6BS+7CXdoKjE5Fhan+phqTp3mm0z8lWVOw2WH/0KNzJhkSesLVd2l3aDIu/Z/lbjqOCpTz8U/VGp9hstbthKX9JP1K1HdrhYgoqPZXANMjCUZtfu2TbbcKwpYOkwQxjWjk0AD5Kbp6JFpTBD7scil3P4VL0FLQUEPuPwrhw3QKXoK53fRURPs3kufZuoUvR0XNA5BBDdQHvBMNJvNTS3ouaEFeWDkVzu/wqxFMpd0UFd3J91cOGPIKwNEppo9CqIP2Y8gkpvcdCkg8ooYqAiDHR/wBLiSgktzMjh9V3/wCZO0n5riSIMzNep+alHM3QkkgfQzYndWVDHSLOSSRRn4x3NGoZra6SSArc1UmlmMpJKCQMaUQYxJJA9uLRftCSSDoxCd36SSBwrBd71JJB3vF3WkkgQqLutJJULWuykkg4uQF1JByAmkJJIOJJJKjhC5CSSDkLqSSD/9k=" class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img style="height: 500px" src="data:image/jpeg;base64,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" class="d-block w-100" alt="..." />
                        </div>
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
            <div class="card mt-2" style="background-color: blanchedalmond">
                <div class="row mt-2">
                    <div class="col-2">
                        <h5 class="blinking text-danger">
                            *Chương Trình Khuyến Mãi:
                        </h5>
                    </div>
                    <div class="col-2">
                        <p>xxxx</p>
                        <p>xxxx</p>
                        <p>xxxx</p>
                        <p>xxxx</p>
                    </div>
                </div>
            </div>
            <div class="row" style="display: flex">
                <div class="col-2" style="display: flex; flex-direction: column">
                    <!-- <div id="dp_menu" class="dp_menu">
                        <button id="menu_button">
                            <span>Chuyên Mục</span>
                        </button>
                        <ul class="main-menu" style="display: none">
                            <li><a href="#">Cá</a></li>
                            <li><a href="#">Bò</a></li>
                            <li><a href="#">Lẩu</a></li>
                            <li><a href="">Hải Sản</a></li>
                            <li><a href="">Liên hệ</a></li>
                        </ul>
                    </div> -->
                </div>
                <div class="col-8 d-flex align-items-center mt-2">
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Search dish" aria-label="Username" aria-describedby="basic-addon1">
                        <span class="input-group-text" id="basic-addon1"><button class="btn btn-primary">Search</button></span>
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
        </div>
    </template>
</testMenu>
</template>

<script>
// import $ from "jquery";
import testMenu from "@/pages/Admin/Menu";
export default {
    name: "trang-chu",
    components: {
        testMenu,
    },
    setup() {
        document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.getElementById('menu-btn_1');
    const closeBtn = document.getElementById('close-btn_1');
    const navLinks = document.getElementById('nav-links_1');
    const logo = document.querySelector('.logo a');
    const wrapper = document.getElementById('wrapper'); // Phần tử wrapper

    menuBtn.addEventListener('click', function() {
        navLinks.classList.toggle('show');
    });

    closeBtn.addEventListener('click', function() {
        navLinks.classList.remove('show');
    });

    // Đóng menu khi click vào một liên kết
    const navLinksItems = navLinks.querySelectorAll('li a');
    navLinksItems.forEach(function(item) {
        item.addEventListener('click', function() {
            navLinks.classList.remove('show');
        });
    });

    // Đóng menu khi click vào logo
    logo.addEventListener('click', function() {
        navLinks.classList.remove('show');
    });

    // Đóng menu khi click vào phần tử wrapper
    wrapper.addEventListener('click', function() {
        navLinks.classList.remove('show');
    });
});


    }
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
    top:0;
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
    background: #3A3B3C;
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
        background: #3A3B3C;
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
        background: #3A3B3C;
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
