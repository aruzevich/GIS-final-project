// Map
mapboxgl.accessToken = 'pk.eyJ1IjoiYXJ1emV2aWNoIiwiYSI6ImNrbGxmdWVlcjBjdHcyb28xNjg5eDF4emUifQ.FbhpNLumz5b3vCmPI5-4Hw';

var options = {
  container: 'mapContainer',
  style: 'mapbox://styles/mapbox/light-v10',
  center: [106.829338,-6.177761],
  zoom: 9
}

var map = new mapboxgl.Map(options);

map.scrollZoom.disable();

var nav = new mapboxgl.NavigationControl();
map.addControl(nav, 'top-left');


// Intro overlay from w3schools

function openIntro() {
  document.getElementById("myIntro").style.width = "100%";
  document.querySelector('body').style.overflow = 'hidden';
}

function closeIntro() {
  document.getElementById("myIntro").style.width = "0%";
  document.querySelector('body').style.overflow = 'auto';
}


// color specific vectors based on the legend
$.getJSON('./data/shelters.json',function(shelterRows){

  shelterRows.forEach(function(shelterRow){

    var html = `
      <div>
        <div><i>${shelterRow.type}</i></div>
        <h3>${shelterRow.name}</h3>
        <div><i>${shelterRow.description}</i></div><br>
        <div><b>Eligibility: </b>${shelterRow.eligibility}</div>
        <div><b>Address: </b>${shelterRow.address}</div>
      </div>
    `

    var color = 'green'

    if (shelterRow.type === 'Shelter'){
      color='purple'
    }

    if (shelterRow.type === 'Drop-In Center'){
      color='orange'
    }

    new mapboxgl.Marker({
      color:color
    })
      .setLngLat([shelterRow.lng,shelterRow.lat])
      .setPopup(new mapboxgl.Popup().setHTML(html)) // add popup
      .addTo(map);
})
})
