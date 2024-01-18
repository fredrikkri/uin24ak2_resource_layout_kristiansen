let resourceHTML = ""
let links = ""
resources.map(resource => {
    links = ""
    resource.sources.map(source => links += `<a href="${source.url}>${source.title}</a>`)
    resourceHTML +=
    `<article>
    <h3>${resource.category}</h3>
    <p>${resource.text}</p>
    <ul>
        <li>
            ${links}
        </li>
    </ul>
    </article>`})


console.log(resourceHTML)

const main = document.getElementsByTagName("main")
main[0].innerHTML = resourceHTML

// Her har jeg latt meg inspirere av javascript-kode
// som ble brukt til å kode legodudes-prosjektet.
// og derfor etterlignet for å få det til å fungere.