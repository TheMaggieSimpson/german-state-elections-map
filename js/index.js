// Styling
var currentView = 'winner';
function getColor(polParty) {
    return polParty == 'AfD'      ? '#00A2DE' :
        polParty == 'CDU'         ? '#151518' :
        polParty == 'CSU'         ? '#008AC5' :
        polParty == 'Die Linke'   ? '#BE3075' :
        polParty == 'FDP'         ? '#FFED00' :
        polParty == 'Grüne'       ? '#409A3C' :
        polParty == 'SPD'         ? '#E3000F' : '#FFFFFF';
}
function style(feature) {
    const election = feature.properties.election;
    const winner = election.winner;
    const runnerUp = election.runnerUp;
    return {
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7,
        fillColor: getColor(currentView == 'winner' ? winner.name : runnerUp.name),
    };
}

// Mouse over
function highlightFeature(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 3,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.7
    });

    layer.bringToFront();
    info.update(layer.feature.properties);
}
function resetHighlight(e) {
    geojsonStates.resetStyle(e.target);
    info.update();
}
function onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight
    });
}
