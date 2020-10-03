var table = document.querySelector("#table-patients");

var form = document.querySelector("#form-patient");


var buttonRegister = document.querySelector("#btn-register");
buttonRegister.addEventListener("click", function(e) {
    e.preventDefault();

    var patient = getPatientFromForm(form);
    var errors = validatePatient(patient);
    if (errors.length > 0) {
        showErrors(errors);
        return;
    }

    showMessages(patient.glucose);

    var tr = buildTr(patient);
    var body = table.querySelector('tbody');
    body.appendChild(tr);
    
});

function validatePatient(patient) {
    const errorMessages = [];
    
    if (patient.name.length == 0) {
        errorMessages.push("O campo nome não deve ser em branco.");
    }

    if (patient.glucose.length == 0) {
        errorMessages.push("O campo glicose não deve ser em branco.");
    }

    if (!validateGlucose(patient.glucose)) {
        errorMessages.push("Valor glicêmico inválido!");
    }

    return errorMessages;
}

function validateGlucose(value) {
    if (value < 0 || value >= 1000) {
        return false;
    }
    return true;
}

function showErrors(errors) {
    errors.forEach(error => {
        buildAlert("danger", undefined, error);
    });
}

function showMessages(value){
    if (value < 99) {
        buildAlert("success", "Muito bem","Normal: Glicemia controlada.");
    }

    if (value >= 100 && value <= 125) {
        buildAlert("warning", "Atenção!","Pré-diabetes: Verificar a alimentação.")
    }

    if (value > 126) {
        buildAlert("danger", "Cuidado!","Diabetes: Valor glicêmico muito alto!");
    }
}

function buildTr(patient) {
    var tr = document.createElement('tr');
    tr.classList.add("patient");
    tr.appendChild(buildTh(patient.name, "info-name"));
    tr.appendChild(buildTh(patient.glucose, "info-glucose"));
    tr.appendChild(buildTh(patient.date, "info-date"));
    tr.appendChild(buildTh("", "info-obs"));
    
    return tr;
}

function buildTh(data, info){
    var th = document.createElement("th");
    th.classList.add(info);
    th.textContent = data;
    return th;
}

function buildAlert(typeAlert, title = "Ops!", message) {
    var div = document.createElement("div");
    div.classList.add("alert");
    div.classList.add("alert-" + typeAlert);
    div.classList.add("alert-dismissible");
    div.classList.add("fade");
    div.classList.add("show");
    div.setAttribute("role","alert");
    
    var btn = document.createElement("button");
    btn.classList.add("close");
    btn.setAttribute("data-dismiss", "alert");
    btn.setAttribute("aria-label","Close");

    btn.innerHTML = "<span>&times;</span>" 
    div.innerHTML = "<strong>"+ title +" </strong>" + message + btn.outerHTML;

    var divErro = document.querySelector(".errors-invisible");
    divErro.appendChild(div);
}




