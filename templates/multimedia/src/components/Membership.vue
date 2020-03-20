<template>
    <div class="container" style="max-width: 856px; ">
            <h4 class="text-center pt-8 pb-6">Select your Membership Plan</h4>
            <div class="cap1">Each membership plan has its own advantage so you have the choice and freedom to enjoy our premium content however you like. Try our movies, books, games & music whenever you like with unlimited access.</div>
            <div class="justify-content-between text-center d-flex flex-wrap w-100 membership_container mb-8">
                <div class="membership_block mt-8">
                    <h4 class="pb-2">{cmpn_product_price_1_month}</h4>
                    <div class="subtitle">1 Month Membership</div>
                    <div class="pt-9 pb-11">Rebills at {cmpn_product_price_1_month} per month until cancelled. previously at {cmpn_product_price_old_month}/mth </div>
                    <a class="button" href="#payments" onclick="{name: navigation--payments">
                        Try 1 Month
                    </a>
                </div>
                <div class="mt-8">
                    <div class="membership_sub-block mb-6">
                        <h4 class="pb-2">{cmpn_product_price_3_month}</h4>
                        <a class="button" href="#payments" onclick="{name: navigation--payments">
                            3 month membership
                        </a>
                        <div class="cap2 pt-2">3 month membership rebills at {cmpn_product_price_3_month_monthly} every month until cancelled. </div>
                    </div>
                    <div class="membership_sub-block">
                        <h4 class="pb-2"> {cmpn_product_price_5_month}</h4>
                        <a class="button" href="#payments" onclick="{name: navigation--payments">
                            5 month membership
                        </a>
                        <div class="cap2 pt-2">5 month membership rebills at {cmpn_product_price_5_month_monthly} every month until cancelled. </div>
                    </div>
                </div>
            </div>
            <div class="subtitle pb-2">Premium Content Plan</div>
            <div class="cap1 pb-8">Premium membership plans help you take advantage of everything {cmpn_site_name} has in store! Get unlimited access to Premium games, music, books, movies & software! Regular members only receive access to limited content.</div>
            <div class="subtitle pb-2">Service Details</div>
            <div class="cap1 pb-5">{cmpn_site_name} is an online streaming and entertainment service that offers a wide variety of hot new releases and classic games, music, books, movies and software. Playing your favorite media anywhere has never been easier. Stream directly on your web browser. Enjoy Premium services for as many times as you like with our Premium Members' Area.</div>
            <div class="cap1 pb-8">{cmpn_site_name} brings you high quality content and provides you the best media streaming experience. You can cancel your membership at any time. AJI our {cmpn_site_name} members have access to 3 quickly expanding library of content. Play games, music, books, movies and software on {cmpn_site_name}. Get a Membership and get access to a vast selection browser games or Continue as a Regular Member For more information visit the Terms & Conditions and Services Details.</div>
            <div class="subtitle pb-2">Cancelling your Membership</div>
        <div class="cap1 pb-5"><span>You can cancel your membership anytime during your subscription by</span><a href="tel:{cmpn_first_phone}" class="colored-link d-inline"> calling us</a> <span>or using the online form that is available to you upon sign up (see the cancellation policy in the </span><a href="#terms" onclick="{name: navigation--terms" class="colored-link d-inline">Terms & Conditions</a><span>. All {cmpn_site_name} subsenbers gain access to a massive library of content with daily updates. {cmpn_site_name} Is your source for amazing games, movies, books and music.</span></div>
        <div class="cap1 pb-8"><span>If you have any questions or have any feedback, feel free to contact our customer support team by phone: {cmpn_first_phone} (toll free) or {cmpn_second_phone}. We can also be reached by email: </span><a href="#" class="colored-link d-inline">{cmpn_support_email}</a> <span> or on social media:</span></div>
    </div>
</template>
