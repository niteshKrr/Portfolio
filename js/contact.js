console.log("Hii")

let btn = document.getElementById("btn");

btn.addEventListener("click", (e) => {

    e.preventDefault();

    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let subject = document.getElementById("subject");
    let text_area = document.getElementById("text_area");

    let message = {

        name: name.value,
        email: email.value,
        subject: subject.value,
        text_area: text_area.value
    }

    console.log(message);

    

    if (name.value == "" && email.value == "" && subject.value == "" && text_area.value == "") {

        let alert = document.getElementById("alert");
        alert.innerHTML = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                        <strong>Error!</strong> Your message is not send successfully.
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                       </div>`;

        setTimeout(function () {
            alert.innerHTML = "";
        }, 3000);

    }
    else {


        let alert = document.getElementById("alert");
        alert.innerHTML = `<div class="alert alert-success alert-dismissible fade show" role="alert">
                        <strong>Success!</strong> Your message is send successfully.
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                       </div>`;

        setTimeout(function () {
            alert.innerHTML = "";
        }, 3000);

    }


    name.value = "";
    email.value = "";
    subject.value = "";
    text_area.value = "";

});