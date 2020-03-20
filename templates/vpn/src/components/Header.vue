<template>
    <div class="header-container" id="home">
        <header class="w-100 header">
            <div class="container justify-content-between align-items-center flex-row">
                <div class="overlay login_overlay">
                    <div class="login">
                        <div class="login_header d-flex justify-content-between align-items-center font-weight-bold">
                            <div></div>
                            <div>Member Login</div>
                            <div class="close"></div>
                        </div>
                        <div class="pt-9 pb-10 px-10 flex-column align-items-center">
                            <div class="d-flex justify-content-center mb-8">
                                <div class="login_img"></div>
                                <h4 class="font-weight-light">{site_name}</h4>
                            </div>
                            <form>
                                <input type="text" placeholder="Email">
                                <input type="text" placeholder="Password">
                                <button type="submit" class="button w-100">Submit</button>
                                <a href="#support" onclick='{"name": "navigation--support"}' class="colored-link cap1 d-block text-center">Forgot your Password?</a>
                                <a href="#sign_up" onclick='{"name": "navigation--sign_up"}' class="colored-link cap1 d-block text-center">Don’t have an account? Sign Up for free</a>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="d-flex align-items-center">
                    <img src="../assets/logo.png" class="logo_img" alt="Logo">
                    <h5>{site_name}</h5>
                </div>
                <div class="dropdown-menu_list">
                    <a href='#home' anchor="true" class="nav_link">
                        <span class="link_span">home</span>
                    </a>
                    <a href='#price' anchor="true" class="nav_link">
                        <span class="link_span">price</span>
                    </a>
                    <a href='#features' anchor="true" class="nav_link">
                        <span class="link_span">features</span>
                    </a>
                    <a href='#about' anchor="true" class="nav_link">
                        <span class="link_span">why us?</span>
                    </a>
                    <a href='#faq' anchor="true" class="nav_link">
                        <span class="link_span">faq</span>
                    </a>
                    <div href='faq' class="nav_link d-sm-none"><div>|</div></div>
                    <a anchor="true" onclick='{"name": "navigation--login"}' class="nav_link">
                        <span class="link_span">Login</span>
                    </a>
                    <a href="#sign_up" onclick='{"name": "navigation--sign_up"}' class="nav_link">
                        <span class="link_span">Sign Up</span>
                    </a>
                </div>
                <div class="dropdown-menu_overlay overlay"></div>
                <div class="d-none d-sm-flex dropdown-menu"></div>
            </div>
        </header>
    </div>
</template>

<script>
    export default {
        mounted() {
            document.getElementsByClassName('dropdown-menu')[0].onclick = function() {
                document.getElementsByTagName('body')[0].classList.toggle('no-overflow')
                document.getElementsByClassName('dropdown-menu')[0].classList.toggle('dropdown-menu--opened')
                document.getElementsByClassName('dropdown-menu_overlay')[0].classList.toggle('overlay--opened')
                document.getElementsByClassName('dropdown-menu_list')[0].classList.toggle('dropdown-menu_list--opened')
            }
            window.onscroll =  function() {
                if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                    if (window.innerWidth > 479) {
                        document.getElementsByClassName("header")[0].style.height = "80px";
                    } else {
                        document.getElementsByClassName("header")[0].style.height = "64px";
                    }
                    document.getElementsByClassName("header")[0].style.boxShadow = "0 3px 4.7px 0.3px rgba(0,0,0,.24)";
                } else {
                    if (window.innerWidth > 991) {
                        document.getElementsByClassName("header")[0].style.height = "128px";
                    } else if (window.innerWidth > 479) {
                        document.getElementsByClassName("header")[0].style.height = "104px";
                    } else {
                        document.getElementsByClassName("header")[0].style.height = "64px";
                    }
                    document.getElementsByClassName("header")[0].style.boxShadow = "none";
                }
            }
        },
    }
</script>