<template>
    <div class="sign-up_banner">
        <div class="container justify-content-between flex-row flex-wrap justify-content-md-center justify-content-sm-center">
            <div class="w-40 pt-9 pr-3 pl-6 pb-sm-5 px-sm-3 pt-sm-0">
                <h5 class="pb-6">Full Internet Security in 3 Simple Steps</h5>
                <ul>
                    <li>7-Day Money Back Guarantee</li>
                    <li>Unlimited Bandwidth</li>
                    <li>Single and Double Encryption</li>
                    <li>Windows, Mac, Android and iOS</li>
                </ul>
            </div>
            <div class="p-8 white sign-up_form">
                <h4 class="pb-4 text-sm-center">Sign Up now!</h4>
                <div class="pb-4 ">Please fill out all of the following fields to create an account: Email and password are case sensitive.</div>
                <form class="flex-wrap d-flex justify-content-between">
                    <input type="text" placeholder="Email">
                    <input type="text" placeholder="Password" class="sign-up_input">
                    <input type="text" placeholder="Confirm" class="sign-up_input">
                    <div class="d-flex cap2 mb-4 mb-sm-4 custom-checkbox custom-control">
                    <input type="checkbox" class=" custom-control-input" id="adult">
                    <label for="adult" class="custom-control-label">
                        <span>I have read and agree to the </span><a href="#terms" onclick='{"name": "navigation--terms"}' class="colored-link d-inline">Terms & Conditions</a><span> and</span> <a href="#privacy" onclick='{"name": "navigation--privacy"}' class="colored-link d-inline">Privacy Policy</a><span>, and certify that I am 18 years of age.</span>
                    </label>
                    </div>
                    <a href="#login" onclick='{"name": "navigation--login"}' style="line-height: 48px" class="colored-link cap1 d-inline mb-6 mb-sm-3"> Already have an account?</a>
                    <a href="#sign_up" onclick='{"name": "navigation--sign_up"}' class="button w-sm-100">Try now</a>
                </form>
                <div class="cap1 text-sm-center"><span>We value your privacy and will not sell or rent your private information to third parties, except as disclosed in our Privacy Policy.</span><a href="terms" class="colored-link d-inline"> See our Terms and Conditions</a><span> and </span><a href="privacy" class="colored-link d-inline">Privacy Policy</a><span> for more details.</span></div>
            </div>
        </div>
    </div>
</template>
