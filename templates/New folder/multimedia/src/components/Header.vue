<template>
    <header class="w-100 position-relative header">
        <div class="container justify-content-between align-items-center flex-row h-100">
            <div class="login_overlay" onclick="event.stopPropagation();">
                <div class="login">
                    <div class=" justify-content-between align-items-center d-flex login_header">
                        <div style="width: 20px;"></div>
                        <div class="font-weight-bold">Member Login</div>
                        <div style="width: 20px;" onclick=""><img src="../assets/close.png" class="pointer" alt="close"></div>
                    </div>
                    <div class="pt-9 pb-10 px-10 flex-column align-items-center">
                        <div class="d-flex align-items-center mb-7">
                            <img src="../assets/logo.png" class="login_img" alt="logo">
                            <h4>{site_name}</h4>
                        </div>
                        <form>
                        <input type="text" placeholder="Email">
                        <input type="text" placeholder="Password">
                        <button type="submit" class="button w-100">Submit</button>
                        <a href="support" class="colored-link cap1">Forgot your Password?</a>
                        <a href="sign_up" class="colored-link cap1">Don’t have an account? Sign Up for free</a>
                        </form>
                    </div>
                </div>
            </div>
            <div class="successful_overlay" onclick="event.stopPropagation();">
                <div class="successful">
                    <img src="../assets/close.png" class="successful_close pointer" alt="close">
                    <div>
                        <h5 class="pb-4">Successuful</h5>
                        <div>Your email has been successfully sent. A confirmation of your request has been sent to the email you entered.</div>
                    </div>
                </div>
            </div>
            <div class="d-flex align-items-center">
                <img src="../assets/logo.png" class="logo_img" alt="Logo">
                <h5>{site_name}</h5>
            </div>
            <div class="text-center cap1 sup_phones">
                <div><span>Questions? Call </span><a href="tel:{first_phone}" class="colored-link">{first_phone}</a><span> or</span> <a href="tel:{second_phone}" class="colored-link">{second_phone}</a><br><span> 24 hours a day, 7 days a week</span></div>
            </div>
            <div class="dropdown-menu_list">
                <a href='login' class="nav_link">
                    <span class="link_span">Login</span>
                </a>
                <a href='sign_up' class="nav_link">
                    <span class="link_span">Sign Up</span>
                </a>
                <a href='support' class="nav_link">
                    <span class="link_span">Support</span>
                </a>
            </div>
            <div class="dropdown-menu_overlay"></div>
            <div class="d-none d-sm-flex dropdown-menu"></div>
        </div>
    </header>
</template>

<script>
    export default {
        mounted() {
            document.getElementsByClassName('dropdown-menu')[0].onclick = function() {
                document.getElementsByTagName('body')[0].classList.toggle('no-overflow')
                document.getElementsByClassName('dropdown-menu')[0].classList.toggle('dropdown-menu--opened')
                document.getElementsByClassName('dropdown-menu_overlay')[0].classList.toggle('dropdown-menu_overlay--opened')
                document.getElementsByClassName('dropdown-menu_list')[0].classList.toggle('dropdown-menu_list--opened')
            }
        },
    }
</script>