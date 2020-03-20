<template>
    <div class="payments_bg">
        <div class="container">
            <form class="payments_form font-weight-light mx-auto">
                <h3 class="pb-8 text-center">Account Information</h3>
                <div class="pb-4">Please fill out all of the following fields to {text}</div>
                <div class="d-flex justify-content-between">
                    <input type="text" placeholder="First Name" class="mr-5">
                    <input type="text" placeholder="Last name">
                </div>
                <select class="select custom-select ">
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
                <input type="text" placeholder="Card Number">
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
                <a href="#" class="colored-link cap1 mb-6">Where is my CVV2?</a>
                </div>
                <div class="font-weight-500">{cmpn_selected_membership} Month Membership: {cmpn_product_price_1_month}</div>
                <div class="justify-space-between d-flex mb-6 mt-4 custom-checkbox custom-control">
                    <input type="checkbox" class=" custom-control-input" id="adult">
                    <label for="adult" class="custom-control-label cap2">
                        <span>I have read and agree to the </span><a href="#terms" onclick='{"name": "navigation--terms"}' class="colored-link d-inline">Terms & Conditions</a><span> and</span> <a href="#privacy" onclick='{"name": "navigation--privacy"}' class="colored-link d-inline">Privacy Policy</a><span>, and certify that I am 18 years of age.</span>
                    </label>
                </div>
                <button type="submit" class="button mx-auto">Submit</button>
            </form>
        </div>
    </div>
</template>
