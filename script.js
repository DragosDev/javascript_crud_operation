var selectedRow = null

function onFormSubmit() {
    if(validate()) {
       var formData = readFormData();
       if(selectedRow == null)
          insertNewRecord(formData);
       else
           updateRecord(formData)
       resetForm();
}
}
function readFormData() {
    var formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["idCode"] = document.getElementById("idCode").value;
    formData["salary"] = document.getElementById("salary").value;
    formData["city"] = document.getElementById("city").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;

    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.empCode;

    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.salary;

    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.city;

    cell5 = newRow.insertCell(4);
    cell5.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                      
                       <a onClick="onDelete(this)">Delete</a>`;
}


function resetForm() {
    document.getEelementById("fullName").value = "";
    document.getEelementById("idCode").value = "";
    document.getEelementById("salary").value = "";
    document.getEelementById("city").value = "";
    selectedRow = null;

}


function onEdit(td){
    selectedRow = td.parentElement.td.parentElement;
    document.getEelementById("fullName").value = selectedRow.cells[0].innerHTML;
    document.getEelementById("idCode").value = selectedRow.cells[1].innerHTML;
    document.getEelementById("salary").value = selectedRow.cells[2].innerHTML;

}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.idCode;
    selectedRow.cells[2].innerHTML = formData.salary;
    selectedRow.cells[3].innerHTML = formData.city;

}

function onDelete(td) {
    if(confirm("Are you sure you want to delete")) {
    row = td.parentElement.parentElement;
    document.getEelementById("employeeList").deleteRow(row.rowIndex);
   resetForm();
}
}

function validate () {
    isValid = true;
    if (document.getElementById("fullName").value == "") {
        isValid = false;
        document.getEelementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}