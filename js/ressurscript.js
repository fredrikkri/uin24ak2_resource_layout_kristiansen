let resourceHTML = ""

resources.map(resource => resourceHTML +=
`<article>
<h3>${resource.category}</h3>
<p>${resource.text}</p>
<ul>
    <li>
        <a href="${resource.sources[0]['url']}">${resource.sources[0]['title']}</a>
        <a href="${resource.sources[1]['url']}">${resource.sources[1]['title']}</a>
        <a href="${resource.sources[2]['url']}">${resource.sources[2]['title']}</a>
    </li>
</ul>
</article>`)

console.log(resourceHTML)

const main = document.getElementsByTagName("main")
main[0].innerHTML = resourceHTML

// Her har jeg latt meg inspirere av javascript-kode
// som ble brukt til å kode legodudes-prosjektet.
// og derfor etterlignet for å få det til å fungere.