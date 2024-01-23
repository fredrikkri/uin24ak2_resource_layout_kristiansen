// Navigasjonsbar
let kategorierHTML = ""
resources.map(kategori => {
    kategorierHTML += `<button id="${kategori.category}" onclick="showContent('${kategori.category}')">${kategori.category}</button>`
    let kat = kategori.category
    console.log(kategori)

})


// konkantinering (template literals) - google dette

const kategorier = document.getElementsByTagName("section")
kategorier[0].innerHTML = kategorierHTML

//function pickCategory(katName) {
    //resources.map(kategori => {
            //if (kategori.category === katName) {
                //return showContent(kategori.category)
            //}
        //}
    //)
//}


// Main seksjon
function showContent(selectedCategory){

    let resourceHTML = ""
    let links = ""

    resources.map(resource => {
        if(selectedCategory === resource.category) {
            resource.sources.map(source => links += `<a href="${source.url}">${source.title}</a>`)
            resourceHTML =
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