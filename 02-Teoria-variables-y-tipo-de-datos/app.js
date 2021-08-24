const hotelsObject = {
    larios:{
        name: "Hotel Larios",
        location: "Málaga",
        pictureUrl: "https://room-matehotels.com/images/img/larios/galeria/hotel_01large.jpg",
    },
    kempinsky:{
        name:"Hotel Kempinsky",
        location: "Estepona (Málaga)",
        pictureUrl: "https://media.inmobalia.com/imgV1/B8vEv5Xh_VThvnEqMx4G0ZxU~~H0Ar_8Bn_AfAx~4dnt796zQ9QIPwzdr9PkzIdRpbOaIUG6rQkTUfRM4VBt~CJs4XmwvxWZlKBqNC_slaeU7MIzIyXP9rKJfzVXCft3VVjyN6wt78mq6NOX1cGG9hZ645cPFtl7lu8nz~sKpTk3BPJjOynz4c0_ewtdSxPiHGcUtxkDsGP8FtUKfZpLku8KBGjPk5nVFBcYC8mAFT1u5jA~JbhxvqoDxOjcXkzyj65OVqg1z~R39akW28m2ecOYxsMt06s6GCOuN263F51zIwpfpP7P~g1jfy4apJ7nWJ4d9cb661bj.jpg",
    }
  
}

// Adding Hotel Info
const hotel = prompt("Elija el hotel sobre el cual desea realizar una reseña: Larios / Kempinsky").toLowerCase()
const hotelData = hotelsObject[hotel];
document.querySelector(".hotel-name").textContent = hotelData.name;
document.querySelector(".hotel-location").textContent = hotelData.location;
document.querySelector(".img-wrapper img").src = hotelData.pictureUrl;

// Adding rating
// I wasn't able to solved without loops

const rating = prompt("Puntue el hotel del 0 al 5");
const stars = document.querySelectorAll(".star-rating-wrapper span")
for (let i = 0; i < rating; i++){
    stars[i].classList.add("checked");
}

// adding anonimous input checked
const isAnonimous = confirm("¿Desea que su reseña sea anónima?")
document.querySelector("#anonimous").checked = isAnonimous