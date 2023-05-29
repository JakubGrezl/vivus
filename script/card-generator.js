// generace karet, ktere se zobrazuji na strance
// jak se tvoří karta: přidá se do pole objekt s parametrama karty.
// {
//     color:, 
//     title: , 
//     description: , 
//     stav: {
//         description: ,
//         procenta: // Pokud je stav 100%, tak se spodní část karty zmizí
//     },
//     img: {
//         src: , 
//         alt:  
//     }
// },


let cards = [
    {
        color: "#4486f6", 
        title: "Byty Vivus, Golf Resort, Praha 4", 
        description: "Golf Resort - Hodovičky je projekt v žádané rezidenční lokalitě při údolí vltavy s...", 
        stav: {
            description: "Ve výstavbě",
            procenta: 33 // Pokud je stav 100%, tak se spodní část karty zmizí
        },
        img: {
            src: "https://picsum.photos/400", 
            alt: "Image Alt Text" 
        }
    },
    {
        color: "#fdc703", 
        title: "Byty Vivus, Uhčíněves V, Praha 10", 
        description: "Bydlete v klidné lokalitě obklopené zelení, blízko lesoparku Obora a Podles...",
        stav: {
            description: "Ve výstavbě", 
            procenta: 72 
        },
        img: {
            src: "https://picsum.photos/400", 
            alt: "Image Alt Text" 
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

