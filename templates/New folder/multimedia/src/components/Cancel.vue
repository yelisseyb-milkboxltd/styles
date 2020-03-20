<template>
    <div>
        <div class="support">
            <div class="container support_container">
                <div>
                    <h4 class="h4 pb-11">How can {site_name} help you?</h4>
                    <a class="button">
                        Cancel Membership
                    </a>
                </div>
                <div>
                    <div class="cap1">Need Help? Call our friendly agents.</div>
                    <h3 class="h3 pt-4 pb-6">{first_phone}</h3>
                    <div class="cap1 pb-6">24h, 7 days a week or</div>
                    <a href="#" class="cap1 colored-link">Send us an Email</a>
                </div>
                <div>
                    <div class="position-relative">
                        <img class="image-live-call" src="../assets/live-call-center.png">
                        <img src="../assets/support.png">
                    </div>
                </div>
            </div>
            <div class="container mt-6 align-items-end">
                <select class="select">
                    <option value="English">in English</option>
                    <option value="French">in French</option>
                    <option value="Russian">in Russian</option>
                    <option value="Ukrainian">in Ukrainian</option>
                </select>
            </div>
        </div>
        <div class="container">
            <h4 class="pt-8 pb-4">Send us an email:</h4>
            <div>We're sad to see you go! If you're positive about leaving, please fill out the form below. You will receive an email confirmation once the cancellation is complete. Make sure to check your spam and junk folders!</div>
            <form style="max-width: 480px;">
                <div class="subtitle mb-2 mt-8">
                    Account Information
                </div>
                <input type="text" placeholder="Email">
                <div class="cap2 mt-1 mb-4">
                    *Email and password are case sensitive
                </div>
                <input type="text" placeholder="Password">
                <a class="cap2 colored-link mt-1 mb-4" href="support">
                    Don’t have your password? Click here
                </a>
                <button type="submit" class="button">Submit</button>
            </form>
            <div class="subtitle my-8">
                Alternatively, you can contact our support team by phone at: {first_phone}, 24h or email us at: {support_email}.<br><br>
                Contact our support team by phone at: {second_phone}, 24h, 7 days a week or email us.<br><br>
                Please note that email cancellation may take up to 3 business days to process.
            </div>
        </div>
    </div>
</template>