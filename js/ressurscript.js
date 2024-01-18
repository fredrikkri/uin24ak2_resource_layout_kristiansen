function pickCategory(katName) {
    let storedValue = katName
    console.log("denne kjører")
    showContent(storedValue)
}

// Navigasjonsbar
let kategorierHTML = ""
resources.map(kategori => {
    kategorierHTML += `<li href="#" onclick="${pickCategory(kategori.category)}"><a>${kategori.category}</a></li>`
})

const kategorier = document.getElementsByTagName("ul")
kategorier[0].innerHTML = kategorierHTML

// Main seksjon
function showContent(storedValue){
    let resourceHTML = ""
    let links = ""

    resources.map(resource => {
        if(storedValue === resource.category) {
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
        
    console.log(resourceHTML)

    const main = document.getElementsByTagName("main")
    main[0].innerHTML = resourceHTML
}

// Her har jeg latt meg inspirere av javascript-kode
// som ble brukt til å kode legodudes-prosjektet.
// og derfor etterlignet for å få det til å fungere.