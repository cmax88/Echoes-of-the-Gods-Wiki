document.addEventListener('DOMContentLoaded', (event) => {
    
    
    
    let keywords = {
        'Gaia': 'gaia.html',
        'Index':'index.html',
        'Gods':'gods.html',
        'Regions':'regions.html',
        'Cities':'cities.html',
        'Classes':'classes',
        'Races': 'races.html',
        'Gaia': '../gaia.html',
        'Index':'../index.html',
        'Gods':'../gods.html',
        'Regions':'../regions.html',
        'Cities':'../cities.html',
        'Classes':'../classes',
        'Races': '../races.html',

        'Academy of Plato': '../pages/academy_of_plato.html',
        'Acephalis': '../pages/acephalis.html',
        'Acropolis': '../pages/acropolis.html',
        'Agora': '../pages/agora.html',
        'Amazonians': '../pages/amazonians.html',
        'Angel': '../pages/angel.html',
        'Ares Weaponmaster': '../pages/ares_weaponmaster.html',
        'Athena': '../pages/athena.html',
        'Athenian Gemcutter': '../pages/athenian_gemcutter.html',
        'Atlantians': '../pages/atlantians.html',
        'Automatons': '../pages/automatons.html',
        'Brontes': '../pages/brontes.html',
        'Centaurs': '../pages/centaurs.html',
        'Collytus': '../pages/collytus.html',
        'Cyclades': '../pages/cyclades.html',
        'Dionysios Theatre': '../pages/dionysios_theatre.html',
        'Dracaenae': '../pages/dracaenae.html',
        'Dryads': '../pages/dryads.html',
        'Epirus': '../pages/epirus.html',
        'Gladiator': '../pages/gladiator.html',
        'Herbalist of Pan': '../pages/herbalist_of_pan.html',
        'Humans': '../pages/humans.html',
        'Kiffisia': '../pages/kiffisia.html',
        'Macedonia': '../pages/macedonia.html',
        'Machani': '../pages/machani.html',
        'Oracle': '../pages/oracle.html',
        'Panes': '../pages/panes.html',
        'Panotiis': '../pages/panotiis.html',
        'Parthenon': '../pages/parthenon.html',
        'Smith of Hephaestus': '../pages/smith_of_hephaestus.html',
        'Taverna of the Gods': '../pages/taverna_of_the_gods.html',
        'Temple of Agoria': '../pages/temple_of_agoria.html',
        'Temple of Hephaestus': '../pages/temple_of_hephaestus.html',
        'Temple of Plutus': '../pages/temple_of_plutus.html',
        'Temple of Zeus': '../pages/temple_of_zeus.html',
        'The Prophecy': '../pages/the_prophecy.html',
        'Thrace': '../pages/thrace.html',
        'Toxotai': '../pages/toxotai.html',
        'Trickster': '../pages/trickster.html',
        'Worship': '../pages/worship.html',

        'Academy of Plato': '/pages/academy_of_plato.html',
        'Acephalis': '/pages/acephalis.html',
        'Acropolis': '/pages/acropolis.html',
        'Agora': '/pages/agora.html',
        'Amazonians': '/pages/amazonians.html',
        'Angel': '/pages/angel.html',
        'Ares Weaponmaster': '/pages/ares_weaponmaster.html',
        'Athena': '/pages/athena.html',
        'Athenian Gemcutter': '/pages/athenian_gemcutter.html',
        'Atlantians': '/pages/atlantians.html',
        'Automatons': '/pages/automatons.html',
        'Brontes': '/pages/brontes.html',
        'Centaurs': '/pages/centaurs.html',
        'Collytus': '/pages/collytus.html',
        'Cyclades': '/pages/cyclades.html',
        'Dionysios Theatre': '/pages/dionysios_theatre.html',
        'Dracaenae': '/pages/dracaenae.html',
        'Dryads': '/pages/dryads.html',
        'Epirus': '/pages/epirus.html',
        'Gladiator': '/pages/gladiator.html',
        'Herbalist of Pan': '/pages/herbalist_of_pan.html',
        'Humans': '/pages/humans.html',
        'Kiffisia': '/pages/kiffisia.html',
        'Macedonia': '/pages/macedonia.html',
        'Machani': '/pages/machani.html',
        'Oracle': '/pages/oracle.html',
        'Panes': '/pages/panes.html',
        'Panotiis': '/pages/panotiis.html',
        'Parthenon': '/pages/parthenon.html',
        'Smith of Hephaestus': '/pages/smith_of_hephaestus.html',
        'Taverna of the Gods': '/pages/taverna_of_the_gods.html',
        'Temple of Agoria': '/pages/temple_of_agoria.html',
        'Temple of Hephaestus': '/pages/temple_of_hephaestus.html',
        'Temple of Plutus': '/pages/temple_of_plutus.html',
        'Temple of Zeus': '/pages/temple_of_zeus.html',
        'The Prophecy': '/pages/the_prophecy.html',
        'Thrace': '/pages/thrace.html',
        'Toxotai': '/pages/toxotai.html',
        'Trickster': '/pages/trickster.html',
        'Worship': '/pages/worship.html',
    };

    document.querySelectorAll('p, h3').forEach(element => {
        let html = element.innerHTML;
        Object.keys(keywords).forEach(key => {
            const regex = new RegExp(`\\b${key}s?\\b`, 'gi');
            html = html.replace(regex, `<a href="${keywords[key]}">${key}</a>`);
        });
        element.innerHTML = html;
    });
});

function addFavicon() {
    var link = document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'icon';
    link.href = 'media/favicon.png';
    link.href = '../media/favicon.png'; // Replace 'https://example.com/favicon.ico' with the actual path to your favicon
    document.getElementsByTagName('head')[0].appendChild(link);
  }

  // Call the function when the document loads
  document.addEventListener('DOMContentLoaded', addFavicon);

  document.getElementById('searchForm').onsubmit = function(event) {
    event.preventDefault();
    removeHighlights(); // Function to clear previous highlights
    var searchTerm = document.getElementById('searchInput').value.trim();
    if (searchTerm) {
        highlightText(document.body, searchTerm);
    }
};

function highlightText(element, searchTerm) {
    if (element.hasChildNodes()) {
        element.childNodes.forEach(function(child) {
            highlightText(child, searchTerm);
        });
    } else if (element.nodeType === Text.TEXT_NODE) {
        if (element.textContent.toLowerCase().includes(searchTerm.toLowerCase())) {
            const span = document.createElement('span');
            span.className = 'highlighted';
            span.textContent = element.textContent;
            element.replaceWith(span);
            span.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }
}

function removeHighlights() {
    document.querySelectorAll('.highlighted').forEach(function(highlighted) {
        highlighted.replaceWith(document.createTextNode(highlighted.textContent));
    });
}