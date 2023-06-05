window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        document.getElementById("toTop").style.display = "block";
    } else {
        document.getElementById("toTop").style.display = "none";
    }
}

document.getElementById("toTop").addEventListener("click", function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

let darkModeButton = document.getElementById("darkmode");
darkModeButton.addEventListener("click", function(){
    const body = document.body;
    body.classList.toggle('dark-mode');

})

window.addEventListener('scroll', function() {
    var navbar = document.querySelector('nav');
    if (window.scrollY > 30) {
        navbar.classList.add('transparent');
    } else {
        navbar.classList.remove('transparent');
    }
});

let selection = document.getElementById("fehler-dropdown");

let fehlerBeschreibung = {
    rauchSchwarz: "<h2>Vermutliche Ursachen für Schwarzrauch:</h2>\n" +
        "<ul>\n" +
        "  <li>Abgasanlage hat zu hohen Strömungswiderstand/Undichtigkeiten vor Turbine</li>\n" +
        "  <li>Fremdkörperschaden an Verdichter oder Turbine</li>\n" +
        "  <li>Kraftstoffanlage/Einspritzanlage defekt oder falsch eingestellt</li>\n" +
        "  <li>Ladedruckregelklappe/Ventil schließt nicht</li>\n" +
        "  <li>Luftfilteranlage verschmutzt</li>\n" +
        "  <li>Mangelnde Ölversorgung des Turboladers</li>\n" +
        "  <li>Motorluftsammler gerissen/fehlende, lose Dichtungen</li>\n" +
        "  <li>Saug- und Druckleitung deformiert oder undicht</li>\n" +
        "  <li>Turbinengehäuse/Klappe beschädigt</li>\n" +
        "  <li>Turbolader Lagerschaden</li>\n" +
        "  <li>Ventilführung, Kolbenringe, Motor und Zylinderlaufbuchsen verschlissen/erhöhtes Blow-By</li>\n" +
        "  <li>Verschmutzung des Verdichters oder Ladeluftkühlers</li>\n" +
        "</ul>",
    leistungMangel: "<h2>Vermutliche Ursachen für Leistungsmangel:</h2>\n" +
        "<ul>\n" +
        "  <li>Abgasanlage hat zu hohen Strömungswiderstand/Undichtigkeiten vor Turbine</li>\n" +
        "  <li>Fremdkörperschaden an Verdichter oder Turbine</li>\n" +
        "  <li>Kraftstoffanlage/Einspritzanlage defekt oder falsch eingestellt</li>\n" +
        "  <li>Ladedruckregelklappe/Ventil schließt nicht</li>\n" +
        "  <li>Luftfilteranlage verschmutzt</li>\n" +
        "  <li>Mangelnde Ölversorgung des Turboladers</li>\n" +
        "  <li>Motorluftsammler gerissen/fehlende, lose Dichtungen</li>\n" +
        "  <li>Saug- und Druckleitung deformiert oder undicht</li>\n" +
        "  <li>Steuerleitung zu Regelklappe/Ventil defekt</li>\n" +
        "  <li>Turbinengehäuse/Klappe beschädigt</li>\n" +
        "  <li>Turbolader Lagerschaden</li>\n" +
        "  <li>Ventilführung, Kolbenringe, Motor und Zylinderlaufbuchsen verschlissen/erhöhtes Blow-By</li>\n" +
        "  <li>Verschmutzung des Verdichters oder Ladeluftkühlers</li>\n" +
        "</ul>",
    ölVerdichter: "<h2>Vermutliche Ursachen für Ölleckage am Verdichter:</h2>\n" +
        "<ul>\n" +
        "  <li>Abgasanlage hat zu hohen Strömungswiderstand/Undichtigkeiten vor Turbine</li>\n" +
        "  <li>Kolbenringdichtung defekt</li>\n" +
        "  <li>Kurbelgehäuseentlüftung verstopft und deformiert</li>\n" +
        "  <li>Lagergehäuse des Turboladers verkokt, verschlammt</li>\n" +
        "  <li>Luftfilteranlage verschmutzt</li>\n" +
        "  <li>Ölzu- und -ableitungen verstopft, undicht oder deformiert</li>\n" +
        "  <li>Turbolader Lagerschaden</li>\n" +
        "  <li>Ventilführung, Kolbenringe, Motor und Zylinderlaufbuchsen verschlissen/erhöhtes Blow-By</li>\n" +
        "  <li>Verschmutzung des Verdichters oder Ladeluftkühlers</li>\n" +
        "</ul>\n",
    ölTurbine: "<h2>Vermutliche Ursachen für Ölleckage an der Turbine:</h2>\n" +
        "<ul>\n" +
        "  <li>Kolbenringdichtung defekt</li>\n" +
        "  <li>Kurbelgehäuseentlüftung verstopft und deformiert</li>\n" +
        "  <li>Lagergehäuse des Turboladers verkokt, verschlammt</li>\n" +
        "  <li>Ölzu- und -ableitungen verstopft, undicht oder deformiert</li>\n" +
        "  <li>Turbolader Lagerschaden</li>\n" +
        "  <li>Ventilführung, Kolbenringe, Motor und Zylinderlaufbuchsen verschlissen/erhöhtes Blow-By</li>\n" +
        "</ul>\n",
    ölVerbrauch: "<h2>Vermutliche Ursachen für hohen Ölverbrauch:</h2>\n" +
        "<ul>\n" +
        "  <li>Abgasanlage hat zu hohen Strömungswiderstand/Undichtigkeiten vor Turbine</li>\n" +
        "  <li>Kolbenringdichtung defekt</li>\n" +
        "  <li>Kurbelgehäuseentlüftung verstopft und deformiert</li>\n" +
        "  <li>Lagergehäuse des Turboladers verkokt, verschlammt</li>\n" +
        "  <li>Luftfilteranlage verschmutzt</li>\n" +
        "  <li>Ölzu- und -ableitungen verstopft, undicht oder deformiert</li>\n" +
        "  <li>Turbolader Lagerschaden</li>\n" +
        "  <li>Ventilführung, Kolbenringe, Motor und Zylinderlaufbuchsen verschlissen/erhöhtes Blow-By</li>\n" +
        "  <li>Verschmutzung des Verdichters oder Ladeluftkühlers</li>\n" +
        "</ul>\n",
    ladeDruckHoch: "<h2>Vermutliche Ursachen für zu hohen Ladedruck:</h2>\n" +
        "<ul>\n" +
        "  <li>Kraftstoffanlage/Einspritzanlage defekt oder falsch eingestellt</li>\n" +
        "  <li>Ladedruckregelklappe/Ventil öffnet nicht</li>\n" +
        "  <li>Steuerleitung zu Regelklappe/Ventil defekt</li>\n" +
        "</ul>\n",
    geräusche: "<h2>Vermutliche Ursachen für Geräusche vom Turbolader:</h2>\n" +
        "<ul>\n" +
        "  <li>Abgasanlage hat zu hohen Strömungswiderstand/Undichtigkeiten vor Turbine</li>\n" +
        "  <li>Abgasleckage zwischen Turbinenauslass und Auspuffrohr</li>\n" +
        "  <li>Fremdkörperschaden an Verdichter oder Turbine</li>\n" +
        "  <li>Mangelnde Ölversorgung des Turboladers</li>\n" +
        "  <li>Motorluftsammler gerissen/fehlende, lose Dichtungen</li>\n" +
        "  <li>Saug- und Druckleitung deformiert oder undicht</li>\n" +
        "  <li>Turbinengehäuse/Klappe beschädigt</li>\n" +
        "  <li>Turbolader Lagerschaden</li>\n" +
        "  <li>Verschmutzung des Verdichters oder Ladeluftkühlers</li>\n" +
        "</ul>\n",
    verdichterDefekt: "<h2>Vermutliche Ursachen für Defekte am Verdichter/Turbinenrad:</h2>\n" +
        "<ul>\n" +
        "  <li>Fremdkörperschaden an Verdichter oder Turbine</li>\n" +
        "  <li>Mangelnde Ölversorgung des Turboladers</li>\n" +
        "  <li>Turbinengehäuse/Klappe beschädigt</li>\n" +
        "  <li>Turbolader Lagerschaden</li>\n" +
        "</ul>\n",
    rauchBlau: "<h2>Vermutliche Ursachen für Blaurauch:</h2>\n" +
        "<ul>\n" +
        "  <li>Abgasanlage hat zu hohen Strömungswiderstand/Undichtigkeiten vor Turbine</li>\n" +
        "  <li>Kolbenringdichtung defekt</li>\n" +
        "  <li>Kurbelgehäuseentlüftung verstopft und deformiert</li>\n" +
        "  <li>Lagergehäuse des Turboladers verkokt, verschlammt</li>\n" +
        "  <li>Luftfilteranlage verschmutzt</li>\n" +
        "  <li>Ölzu- und -ableitungen verstopft, undicht oder deformiert</li>\n" +
        "  <li>Turbolader Lagerschaden</li>\n" +
        "  <li>Ventilführung, Kolbenringe, Motor und Zylinderlaufbuchsen verschlissen/erhöhtes Blow-By</li>\n" +
        "  <li>Verschmutzung des Verdichters oder Ladeluftkühlers</li>\n" +
        "</ul>\n"
};

let printToHtml = document.getElementById("fehler");
selection.addEventListener("change", function (){
    let selectedOption = this.options[this.selectedIndex];
    let selectedVal = selectedOption.value;
    selectedVal = fehlerBeschreibung[selectedVal]; // Use selectedVal as the key to access the description
    printToHtml.innerHTML = selectedVal; // Corrected the syntax to set innerHTML
});




