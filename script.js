function sendMail(params) {
    var tempParams={
        from_name:document.getElementById("fromName").value,
        to_name:document.getElementById("toName").value,
        message:document.getElementById("mass").value,

    };
    emailjs.send(service_j3wv1gb,template_ejhbois)
}