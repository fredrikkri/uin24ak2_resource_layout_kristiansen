// Navigasjonsbar
let kategorierHTML = ""
resources.map(kategori => {
    kategorierHTML += `<li><a id="${kategori.category}" href="#" onclick="${pickCategory(kategori.category)}">${kategori.category}</a></li>`
})

const kategorier = document.getElementsByTagName("ul")
kategorier[0].innerHTML = kategorierHTML

function pickCategory(katName) {
    resources.map(kategori => {
        console.log(kategori.category)
            if (kategori.category === katName) {
                showContent(kategori.category)
            }
        }
    )
}


// Main seksjon
function showContent(selectedCategory){
    let resourceHTML = ""
    let links = ""

    resources.map(resource => {
        if(selectedCategory === resource.category) {
            links = ""
            resource.sources.map(source => links += `<a href="${source.url}">${source.title}</a>`)
            resourceHTML +=
            `<article>
            <h3>${resource.category}</h3>
            <p>${resource.text}</p>
            <ul>
                <li>
                    ${links}
                </li>
            </ul>
            </article>`}
        else {
            `<article>no content</article>`
        }})
    const main = document.getElementsByTagName("main")
    main[0].innerHTML = resourceHTML
}

// Her har jeg latt meg inspirere av javascript-kode
// som ble brukt til å kode legodudes-prosjektet.
// og derfor etterlignet for å få det til å fungere.