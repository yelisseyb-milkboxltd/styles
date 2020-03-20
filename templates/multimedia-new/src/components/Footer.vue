<template>
    <div class="pt-10 pb-8 white--text grey darken-4">
        <div class="container justify-content-between d-flex flex-row footer">
            <div>
                <div class="text-uppercase pb-4 pb-sm-2">
                    Office Location
                </div>
                <div class="cap1 pb-sm-4">
                    <div>{name}</div>
                    <div>{address}</div>
                    <div>{city}</div>
                    <div>{index}</div>
                    <div>{country}</div>
                </div>
            </div>
            <div>
                <div class="text-uppercase pb-4 pb-sm-2 pt-sm-4">
                    Call Us
                </div>
                <div class="cap1 pb-sm-4">
                    <div>{first_phone}</div>
                    <div>or</div>
                    <div>{second_phone},</div>
                    <div>24hours a day, 7 days a week</div>
                </div>
            </div>
            <div>
                <div class="text-uppercase pb-4 pb-sm-2 pt-sm-4">
                    Email Address
                </div>
                <div class="cap1 pb-sm-5 mb-sm-1">
                    <div>{support_email}</div>
                </div>
            </div>
            <div class="cap1 footer_links">
                <a href="about" class="footer_link">About Us</a>
                <a href="terms" class="footer_link">Terms & Conditions</a>
                <a href="privacy" class="footer_link">Privacy Policy</a>
                <a href="support" class="footer_link">Support</a>
                <a href="membership" class="footer_link">Member's Area</a>
                <a href="cookie" class="footer_link">Cookie Policy</a>
            </div>
        </div>
        <div class="text-center text-uppercase container cap1 pt-4 footer_copyright">© 2020. ALL RIGHTS RESERVED</div>
    </div>
</template>