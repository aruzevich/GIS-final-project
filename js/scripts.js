// Overlay
function openIntro() {
  document.getElementById("splashScreen").style.width = "100%";
  document.querySelector('body').style.overflow = 'hidden';
}

function closeIntro() {
  document.getElementById("splashScreen").style.width = "0%";
  document.querySelector('body').style.overflow = 'auto';
}

mapboxgl.accessToken = 'pk.eyJ1IjoiYXJ1emV2aWNoIiwiYSI6ImNrbXo3NHp6ZDBiMDYycGxlMTltNXNqaHkifQ.p1q3W10pYhBS_NEGj7_H0A';

// add the base map
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/outdoors-v11',
    center: [143.393555,-4.609278],
    zoom: 3.2,
});

// disable in-map scrolling
map.scrollZoom.disable();

// add in-map navigation control
var nav = new mapboxgl.NavigationControl();
map.addControl(nav, 'top-left');

// wait for base map before loading layers
map.on('style.load', function() {

  // add a park boundary source
  map.addSource('parks', {
    type: 'geojson',
    data: './data/parks.json',
  });

  // add layers to style the source
  map.addLayer({
    'id': 'way-kambas-fill',
    'source': 'parks',
    'type': 'fill',
    'filter': ["==", "layer", "Way Kambas National Park"],
    'paint': {
      'fill-color': '#e41a1c',
      'fill-opacity': 0.65,
    }
  });

  map.addLayer({
    'id': 'mount-leuser-fill',
    'source': 'parks',
    'type': 'fill',
    'filter': ["==", "layer", "Mount Leuser National Park"],
    'paint': {
      'fill-color': '#377eb8',
      'fill-opacity': 0.6,
    }
  });

  map.addLayer({
    'id': 'wasur-fill',
    'source': 'parks',
    'filter': ["==", "layer", "Wasur National Park"],
    'type': 'fill',
    'paint': {
      'fill-color': '#4daf4a',
      'fill-opacity': 0.6,
    }
  });

  map.addLayer({
    'id': 'lorentz-fill',
    'source': 'parks',
    'filter': ["==", "layer", "Lorentz National Park"],
    'type': 'fill',
    'paint': {
      'fill-color': '#984ea3',
      'fill-opacity': 0.5,
    }
  });

  map.addLayer({
    'id': 'tanjung-puting-fill',
    'source': 'parks',
    'filter': ["==", "layer", "Tanjung Puting National Park"],
    'type': 'fill',
    'paint': {
      'fill-color': '#ff7f00',
      'fill-opacity': 0.5,
    }
  });

  map.addLayer({
    'id': 'kerinci-seblat-fill',
    'source': 'parks',
    'filter': ["==", "layer", "Kerinci Seblat National Park"],
    'type': 'fill',
    'paint': {
      'fill-color': '#228B22',
      'fill-opacity': 0.5,
    }
  });

  map.addLayer({
   'id': 'ujung-kulon-fill',
   'source': 'parks',
   'filter': ["==", "layer", "Ujung Kulon National Park"],
   'type': 'fill',
   'paint': {
     'fill-color': '#ffff33',
     'fill-opacity': 0.5,
   }
  });

  map.addLayer({
  'id': 'meru-batiri-fill',
  'source': 'parks',
  'filter': ["==", "layer", "Meru Batiri National Park"],
  'type': 'fill',
  'paint': {
    'fill-color': '#f781bf',
    'fill-opacity': 0.5,
  }
  });

  map.addLayer({
    'id': 'komodo-fill',
    'source': 'parks',
    'filter': ["==", "layer", "Komodo National Park"],
    'type': 'fill',
    'paint': {
      'fill-color': '#a65628',
      'fill-opacity': 0.4,
    }
  });

})

var chapters = {
    'background': {
        center: [135.395508,-5.659719],
        zoom: 3.6,
        duration: 2000,
        bearing: 0,
        pitch: 0
    },
    'mount-leuser': {
        center: [98.429260,3.677782],
        zoom: 8,
        bearing: -20,
        pitch: 0,
    },
    'kerinci-seblat': {
        center: [102.604065,-2.320227],
        zoom: 7.5,
        bearing: 0,
        pitch: 0
    },
    'way-kambas': {
        center: [105.988666, -4.835102],
        zoom: 9.5,
        bearing: -50,
        pitch: 20
    },
    'ujung-kulon': {
        center: [105.703583, -6.510450],
        zoom: 9,
        bearing: 0,
        pitch: 10
    },
    'meru-batiri': {
        center: [113.956375, -8.498519],
        zoom: 10,
        bearing: 15,
        pitch: 10
    },
    'tanjung-puting': {
        center: [112.471411,-2.861270],
        zoom: 8.5,
        bearing: -20,
        pitch: 0
    },
    'komodo': {
        center: [119.820328,-8.651966],
        zoom: 9.5,
        pitch: 20,
        bearing: 0,
        pitch: 0
    },
    'lorentz': {
        center: [138.622742,-4.908992],
        zoom: 7.5,
        bearing: 30,
        pitch: 0
    },
    'wasur': {
        center: [141.212769,-8.967433],
        zoom: 8.5,
        bearing: 45,
        pitch: 10
    },
    'conclusion': {
        center: [135,-2.284],
        zoom: 3.6,
        bearing: 0,
        pitch: 0
    },

};

// On every scroll event, check which element is on screen
window.onscroll = function () {
    var chapterNames = Object.keys(chapters);
    for (var i = 0; i < chapterNames.length; i++) {
        var chapterName = chapterNames[i];
        if (isElementOnScreen(chapterName)) {
            setActiveChapter(chapterName);
            break;
        }
    }
};

var activeChapterName = 'background';
function setActiveChapter(chapterName) {
    if (chapterName === activeChapterName) return;

    map.flyTo(chapters[chapterName]);

    document.getElementById(chapterName).setAttribute('class', 'active');
    document.getElementById(activeChapterName).setAttribute('class', '');

    activeChapterName = chapterName;
}

function isElementOnScreen(id) {
    var element = document.getElementById(id);
    var bounds = element.getBoundingClientRect();
    return bounds.top < window.innerHeight && bounds.bottom > 0;
}
