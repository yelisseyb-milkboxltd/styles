<template>
    <div class="position-relative">
        <div class="block-2" id="price">
            <div class="container justify-content-between flex-row flex-wrap align-items-stretch text-center flex-md-column flex-sm-column">
                <div class="w-100">
                    <h3>Choose your plan</h3>
                    <div class="py-4">Just apply for the program and a week of security is yours</div>
                </div>
                <div class="sign-up_buttons d-none d-md-flex d-sm-flex justify-content-between">
                    <div class="sign-up_button active">SILVER</div>
                    <div class="sign-up_button">GOLD</div>
                    <div class="sign-up_button">PREMIUM</div>
                </div>
                <div class="sign-up_block chosen">
                    <div class="hovered-block">
                        <h4 class="text-uppercase pb-10">SILVER</h4>
                        <h1><sup>$</sup>X.XX <sub>/mth</sub></h1>
                        <div class="cap1 pt-4">Rebills every month until canceled</div>
                    </div>
                    <div>
                        <div>
                            <div>One device</div>
                            <div>Fast Speed</div>
                            <div>5 GB bandwidth/Month</div>
                        </div>
                        <a class="button" href="#sign_up" onclick='{"name": "navigation--sign_up"}'>Try Now</a>
                    </div>
                </div>
                <div class="sign-up_block">
                    <div class="hovered-block">
                        <h4 class="text-uppercase pb-10">GOLD</h4>
                        <h1><sup>$</sup>XX.XX <sub>/mth</sub></h1>
                        <div class="cap1 pt-4">Rebills every month until canceled</div>
                    </div>
                    <div>
                        <div>
                            <div>Two devices simultaneously</div>
                            <div>High Speed</div>
                            <div>10 GB bandwidth/Month</div>
                        </div>
                        <a class="button" href="#sign_up" onclick='{"name": "navigation--sign_up"}'>Try Now</a>
                    </div>
                </div>
                <div class="sign-up_block">
                    <div class="hovered-block">
                        <h4 class="text-uppercase pb-10">PLATINUM</h4>
                        <h1><sup>$</sup>XX.XX <sub>/mth</sub></h1>
                        <div class="cap1 pt-4">Rebills every month until canceled</div>
                    </div>
                    <div>
                        <div>
                            <div>Family Plan, multiple devices simultaneously</div>
                            <div>Ultra-high Speed</div>
                            <div>Unlimited Bandwidth</div>
                            <div>Dedicated Phone Support</div>
                        </div>
                        <a class="button" href="#sign_up" onclick='{"name": "navigation--sign_up"}'>Try Now</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>