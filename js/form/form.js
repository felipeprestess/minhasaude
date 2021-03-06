function getPatientFromForm (form){
    const patient = {
        name: form.name.value,
        glucose: form.glucose.value,
        date: getFormattedDate(),
        observation: getObservationsFromAnalysis()
    };
    return patient;
}

function getObservationsFromAnalysis(value) {

}

function getFormattedDate() {
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    var formatterDay;	
    if (day < 10) {
        formatterDay = '0'+ day;
    } else {
        formatterDay = day;
    }
		
    var formatterMonth;	
    if (month < 10) {
        formatterMonth = '0'+ month;
    } else {
        formatterMonth = month;
    }

    return formatterDay +'/'+ formatterMonth +'/'+ year;
}