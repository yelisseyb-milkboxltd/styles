<template>
    <div class="white--text grey darken-4">
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
                    <div><a href="tel:{first_phone}" class="colored-link">{first_phone}</a></div>
                    <div><span>or </span><a href="tel:{second_phone}" class="colored-link">{second_phone}</a></div>
                    <div>24hours a day,</div>
                    <div>7 days a week</div>
                </div>
            </div>
            <div>
                <div class="text-uppercase pb-4 pb-sm-2 pt-sm-4">
                    Email Address
                </div>
                <div class="cap1 pb-sm-5 mb-sm-1">
                    <div><a href="mailto:{support_email}" class="colored-link">{support_email}</a></div>
                </div>
            </div>
            <div class="font-weight-bold footer_links d-flex flex-column">
                <a href="#terms" onclick='{"name": "navigation--terms"}' class="footer_link">Terms & Conditions</a>
                <a href="#privacy" onclick='{"name": "navigation--privacy"}' class="footer_link">Privacy Policy</a>
                <a href="#cookie" onclick='{"name": "navigation--cookie"}' class="footer_link">Cookie Policy</a>
                <a href="#downloads" onclick='{"name": "navigation--downloads"}' class="footer_link">Downloads</a>
            </div>
        </div>
        <div class="text-center text-uppercase container cap1 pb-4 footer_copyright">© 2020. ALL RIGHTS RESERVED</div>
    </div>
</template>