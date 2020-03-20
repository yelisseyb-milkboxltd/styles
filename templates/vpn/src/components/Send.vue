<template>
    <div class="send">
        <div class="container help_container pt-10">
            <h3>Help Center</h3>
            <div class="py-4">We have the answer! Get in touch and we will find your solution</div>
            <div class="d-flex">
                <input type="text" placeholder="Write your question">
                <select class="select custom-select">
                    <option value="English">in English</option>
                    <option value="French">in French</option>
                    <option value="Russian">in Russian</option>
                    <option value="Ukrainian">in Ukrainian</option>
                </select>
            </div>
            <div class="cap2 pt-2 pb-8"><span>Popular Question: </span><a href="#">Why is there a charge on my Credit Card?</a><span>  |  </span><a href="#">How Do I Cancel?</a></div>
        </div>
        <div class="container send_container">
            <h4 class="text-center pb-4">Submit a request</h4>
            <form>
                <input type="text" placeholder="Email">
                <input type="text" placeholder="Subject">
                <textarea type="text" placeholder="Description"></textarea>
                <div class="cap1">Please enter the details of your request. A member of our support staff will respond as soon as possible.</div>
                <div class="custom-file mb-6">
                    <input type="file" class="custom-file-input">
                    <label class="custom-file-label">Add file or drop files here</label>
                </div>
                <button type="submit" class="button mx-auto">Submit</button>
            </form>
        </div>
    </div>
</template>