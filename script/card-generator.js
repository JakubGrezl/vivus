let cards = [
    {
        color: "#4486f6", // Replace with your desired color
        title: "Byty Vivus, Golf Resort, Praha 4", // Replace with your card title
        description: "Golf Resort - Hodovičky je projekt v žádané rezidenční lokalitě při údolí vltavy s...", // Replace with your card description
        stav: {
            description: "Ve výstavbě", // Ve výstavbě nebo Vyprodáno
            procenta: 33 // Replace with your percentage value
        },
        img: {
            src: "https://picsum.photos/400", // Replace with your image URL
            alt: "Image Alt Text" // Replace with your image alt text
        }
    },
    {
        color: "#fdc703", // Replace with your desired color
        title: "Byty Vivus, Uhčíněves V, Praha 10", // Replace with your card title
        description: "Bydlete v klidné lokalitě obklopené zelení, blízko lesoparku Obora a Podles...", // Replace with your card description
        stav: {
            description: "Ve výstavbě", // Ve výstavbě nebo Vyprodáno
            procenta: 72 // Replace with your percentage value
        },
        img: {
            src: "https://picsum.photos/400", // Replace with your image URL
            alt: "Image Alt Text" // Replace with your image alt text
        }
    },
]

function Display(procenta) {
    if (procenta == 100){
        return 'display: none'
    } else {
        return 'display: flex'
    }
}


    cards.forEach(card => {
        $('.card-columns').append(`
        <div class="col">
        <div class="card">
            <div class="row">
              <div class="col-2"><div class="blue" style="background-color: ${card.color}"></div></div>
              <div class="col card-text-wrapper">
                <h1 style="color: ${card.color}">${card.title}</h1>
                <p>${card.description}</p>
              </div>
            </div>
              <div class="card-image-wrapper">
                <div class="status" style="background-color: ${card.color}">${card.stav.description}</div>
                <div class="description" style="background-color: ${card.color}; ${Display(card.stav.procenta)};">
                  <p>Podrobnosti</p>
                  <p>Prodáno ${card.stav.procenta}%</p>
                </div>
                <img class="card-image" src="${card.img.src}" alt="${card.img.alt}">
              </div>
          </div>
          </div>`
        );
    });

