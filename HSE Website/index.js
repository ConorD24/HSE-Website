function sendMail() {
    var params = {
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        mobileNumber: document.getElementById("mobileNumber").value,
        email: document.getElementById("message").value,
    };

    const serviceID = "service_jfp6amk";
    const templateID = "template_ztvirl4";

    emailjs.send(serviceID, templateID, params)
     .then((res) => {
        document.getElementById("firstName").value = "";
        document.getElementById("lastName").value = "";
        document.getElementById("mobileNumber").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Message Sent");
    })
    .catch((err) => console.log(err));
}