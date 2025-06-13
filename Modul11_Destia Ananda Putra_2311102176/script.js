// Fungsi untuk sapaan pengguna
function greetUser() {
    var name = document.getElementById('nameInput').value;
    var greetingMessage = document.getElementById('greetingMessage');
    
    if (name) {
        greetingMessage.innerHTML = "Halo, " + name + "!";
    } else {
        greetingMessage.innerHTML = "Silakan masukkan nama Anda!";
    }
}

// Fungsi untuk mengaktifkan Dark Mode
document.getElementById('darkModeCheckbox').addEventListener('change', function() {
    if (this.checked) {
        document.body.classList.add('dark-mode');
        document.querySelector('.welcome-container').classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
        document.querySelector('.welcome-container').classList.remove('dark-mode');
    }
});

// Fungsi untuk memesan makanan
function orderFood() {
    var menu = document.getElementById('menuSelection').value;
    var orderMessage = document.getElementById('orderMessage');

    if (menu === "nasiAyam") {
        orderMessage.innerHTML = "Anda telah memesan Nasi Ayam Penyet!";
    } else if (menu === "nasiTelor") {
        orderMessage.innerHTML = "Anda telah memesan Nasi Telor Krispy Geprek!";
    } else if (menu === "indomie") {
        orderMessage.innerHTML = "Anda telah memesan Indomie Special!";
    } else if (menu === "nasiBakar") {
        orderMessage.innerHTML = "Anda telah memesan Nasi Bakar!";
    } else {
        orderMessage.innerHTML = "Silakan pilih menu!";
    }
}
