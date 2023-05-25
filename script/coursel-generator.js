imgs = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"]

let i = 0;

imgs.forEach(img => {
    img = "img/coursel/" + img;
    $(".carousel-inner").append(`
    <div class="carousel-item ${isActive(i)}">
    <img src="${img}" class="d-block w-100" alt="coursel">
    </div>
    `);

    i++;
});

function isActive(i) {
    if (i == 0) {
        return "active";
    } else {
        return "";
    }
}