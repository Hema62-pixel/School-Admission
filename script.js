document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector("form");

    if (form) {

        form.addEventListener("submit", function (event) {

            event.preventDefault();

            const studentName = form.querySelector('input[type="text"]').value.trim();

            const email = form.querySelector('input[type="email"]').value.trim();

            const mobile = form.querySelector('input[type="tel"]').value.trim();

            if (studentName === "") {
                alert("Please enter the student name.");
                return;
            }

            if (mobile.length !== 10 || isNaN(mobile)) {
                alert("Please enter a valid 10-digit mobile number.");
                return;
            }

            if (email === "") {
                alert("Please enter a valid email address.");
                return;
            }

            alert(
                "Admission Form Submitted Successfully!\n\n" +
                "Student Name: " + studentName +
                "\nEmail: " + email +
                "\nMobile: " + mobile
            );

            form.reset();

        });

    }

});
