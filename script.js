function checkName() {
    var input = document.getElementById('nameInput').value;
    
    if (input.toLowerCase().trim() === 'yes') {
        document.getElementById('message').style.display = 'block';
    } else {
        alert('Type "Yes" to continue!');
    }
}

function showCertificate() {
    document.getElementById('certificate').style.display = 'block';
}

function redirectToSnap() {
    document.getElementById('certificate').innerHTML += "<p>Redirecting...</p>";
    
    setTimeout(() => {
        window.location.href = "https://www.snapchat.com/add/rudrasen_01";
    }, 2000);
}
