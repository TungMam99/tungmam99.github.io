document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('workOrder').addEventListener('change', updateProductDetails);
    document.getElementById('pickUpQuantity').addEventListener('input', calculatePallets);
});

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'Wh admin' && password === '1234') {
        document.getElementById('loginContainer').style.display = 'none';
        document.getElementById('taskContainer').style.display = 'block';
        createNewTask();
    } else {
        alert('Wrong pass, please enter correct again');
    }
}

function createNewTask() {
    const jobIdField = document.getElementById('jobId');
    const jobDescriptionField = document.getElementById('jobDescription');
    const productionDateField = document.getElementById('productionDate');
    const expirationDateField = document.getElementById('expirationDate');
    const lotcodeField = document.getElementById('lotcode');

    const currentDate = new Date();
    const expirationDate = new Date(currentDate.getTime()); // Create a new Date instance for expiration date calculation

    jobIdField.value = 'Job' + Math.floor(Math.random() * 100000);
    jobDescriptionField.value = 'Put away from production';
    productionDateField.value = currentDate.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: '2-digit' });
    expirationDateField.value = new Date(expirationDate.setDate(expirationDate.getDate() + 365)).toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: '2-digit' });
    lotcodeField.value = Math.random().toString(36).substring(2, 10).toUpperCase();
}

function updateProductCode() {
    const productName = document.getElementById('productName').value;
    const productIdField = document.getElementById('productId');

    if (productName === 'Heneiken Silver Can Carton 24x330ml') {
        productIdField.value = '10079432';
    } else if (productName === 'Tiger Crystal Can Carton 24x330ml') {
        productIdField.value = '10078432';
    }
}

function calculatePallets() {
    const pickUpQuantity = parseFloat(document.getElementById('pickUpQuantity').value) || 0;
    const palletsField = document.getElementById('pallets');

    palletsField.value = Math.floor(pickUpQuantity / 130) + ' Pallets, ' + (pickUpQuantity % 130) + ' Loose';
}

function saveTask() {
    alert('Information is saved and task assigned to selected forklift driver.');
}
