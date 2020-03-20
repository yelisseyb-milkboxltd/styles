<template>
    <div>
        <div class="support">
            <div class="container support_container pt-8">
                <div>
                    <h4 class="h4 pb-11" style="font-weight: 600">How can {site_name} help you?</h4>
                    <a class="button d-none d-lg-block d-xl-block">Cancel Membership</a>
                </div>
                <div>
                    <div class="cap1">Need Help? Call our friendly agents.</div>
                    <h3 class="h3 pt-4 pb-6 font-weight-bold">{first_phone}</h3>
                    <div class="cap1 pb-6">24h, 7 days a week or</div>
                    <a href="#contact" onclick='{"name": "navigation--contact"}' class="cap1 colored-link">Send us an Email</a>
                    <a href="#cancel" onclick='{"name": "navigation--cancel"}' class="button d-none d-md-block d-sm-block mt-6">Cancel Membership</a>
                </div>
                <div class="d-flex flex-column align-items-end align-items-sm-center">
                    <div class="position-relative pb-sm-5">
                        <img class="image-live-call" src="../assets/live-call-center.png">
                        <img src="../assets/support.png" class="support_image">
                    </div>
                    <select class="select mt-6 custom-select">
                        <option value="English">in English</option>
                        <option value="French">in French</option>
                        <option value="Russian">in Russian</option>
                        <option value="Ukrainian">in Ukrainian</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="container">
            <h4 class="h4 pt-8 pb-4">Send us an email:</h4>
            <div>Have questions or comments? Leave us a note and we will get back to you within 12 hours.</div>
            <form style="max-width: 480px; margin-bottom: 180px" class="form_send">
                <select class="select mb-10 mt-4 custom-select" style="height: 44px;">
                    <option value="English">in English</option>
                    <option value="French">in French</option>
                    <option value="Russian">in Russian</option>
                    <option value="Ukrainian">in Ukrainian</option>
                </select>
                <input type="text" placeholder="First Name">
                <input type="text" placeholder="Email">
                <textarea class="textarea" placeholder="Question/Comment"></textarea>
                <button type="submit" class="button">Submit</button>
            </form>
        </div>
    </div>
</template>