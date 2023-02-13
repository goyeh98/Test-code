var subscribers = []

function subscribe() {
  // Mendapatkan input dari form
  var email = document.getElementById("email").value

  // Menambahkan email ke array subscribers
  subscribers.push(email)

  // Menampilkan pesan alert bahwa email berhasil terdaftar
  alert("Thank you for subscribing! We will notify you when we have new news.")
}

// Simulasi menyimpan data subscribers ke database
function saveSubscribers() {
  // TODO: Simpan subscribers ke database Anda
  console.log(subscribers)
}

// Simulasi memuat data subscribers dari database
function loadSubscribers() {
  // TODO: Muat subscribers dari database Anda
  console.log(subscribers)
}
