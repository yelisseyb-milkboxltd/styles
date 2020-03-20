<template>
    <div class="py-8">
        <div class="container flex-row flex-md-column flex-sm-column">
            <div class="w-50 w-sm-100 w-md-100 pr-12 pr-sm-0 pr-md-0">
                <div class="pb-2 font-weight-bold">Premium Content Upgrade</div>
                <div class="pb-8">Premium membership plans help you take advantage of everything {site_name} has in store! Get unlimited access to Premium games, music, books, movies & software! Regular members only receive access to limited content.</div>
                <div class="pb-2 font-weight-bold">Service Details</div>
                <div class="pb-8">{site_name} is an online streaming and entertainment service that offers a wide variety of hot new releases and classic games, music, books, movies and software. Playing your favorite media anywhere has never been easier. Stream directly on your web browser. Enjoy Premium services for as many times as you like with our Premium Members' Area.</div>
                <div class="pb-8" >{site_name} brings you high quality content and provides you the best media streaming experience. You can cancel your membership at any time. All our {site_name} members have access to 3 quickly expanding library of content. Play games, music, books, movies and software on {site_name}. Get a Membership and get access to a vast selection browser games or Continue as a Regular Member For more information visit the Terms & Conditions and Services Details.</div>
            </div>
            <form class="payments_form white p-8 p-sm-4">
                <div class="pb-2">Account Information</div>
                <input type="text" placeholder="First Name">
                <input type="text" placeholder="Last name">
                <select class="select custom-select " onchange=" this.dataset.chosen = this.value; ">
                    <option value="Country" disabled selected>Country</option>
                    <option value="French">France</option>
                    <option value="Russian">Russia</option>
                    <option value="Ukrainian">Ukraine</option>
                </select>
                <select class="custom-select">
                    <option value="" disabled selected>Province/ State</option>
                    <option value="French">France</option>
                    <option value="Russian">Russia</option>
                    <option value="Ukrainian">Ukraine</option>
                </select>
                <input type="text" placeholder="Address">
                <input type="text" placeholder="City">
                <input type="text" placeholder="Zip/ Postal Code">
                <input type="text" class="mt-8" placeholder="Card Number">
                <div class="justify-space-between d-flex">
                    <select class="custom-select">
                        <option value="" disabled selected>Month</option>
                        <option value="January">January</option>
                        <option value="February">February</option>
                        <option value="March">March</option>
                        <option value="April">April</option>
                        <option value="May">May</option>
                        <option value="June">June</option>
                        <option value="July">July</option>
                        <option value="August">August</option>
                        <option value="September">September</option>
                        <option value="October">October</option>
                        <option value="November">November</option>
                        <option value="December">December</option>
                    </select>
                    <select class="mx-2 mb-6 custom-select">
                        <option value="" disabled selected>Year</option>
                        <option value="2020">2020</option>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                        <option value="2023">2023</option>
                        <option value="2024">2024</option>
                        <option value="2025">2025</option>
                        <option value="2026">2026</option>
                        <option value="2027">2027</option>
                        <option value="2028">2028</option>
                        <option value="2029">2029</option>
                    </select>
                    <input type="password" maxlength="3" placeholder="CVV2">
                </div>
                <div class="d-flex justify-content-start">
                <a href="#" class="colored-link cap1 mb-8">Where is my CVV2?</a>
                </div>
                <div>{cmpn_selected_membership} Month Membership: {cmpn_product_price_1_month}</div>
                <div class="justify-space-between d-flex mb-8 mt-6 custom-checkbox custom-control">
                    <input type="checkbox" class=" custom-control-input" id="adult">
                    <label for="adult" class="custom-control-label cap2">
                        <span>I have read and agree to the </span><a href="terms" class="colored-link d-inline">Terms & Conditions</a><span> and</span> <a href="privacy" class="colored-link d-inline">Privacy Policy</a><span>, and certify that I am 18 years of age.</span>
                    </label>
                </div>
                <button type="submit" class="button mx-auto">Continue</button>
            </form>
        </div>
    </div>
</template>
