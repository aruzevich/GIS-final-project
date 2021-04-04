// Map token
mapboxgl.accessToken = 'pk.eyJ1IjoiYXJ1emV2aWNoIiwiYSI6ImNrbXo3NHp6ZDBiMDYycGxlMTltNXNqaHkifQ.p1q3W10pYhBS_NEGj7_H0A';

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v10',
    center: [135,-2.284],
    zoom: 3.6,
});

map.scrollZoom.disable();

var chapters = {
    'intro': {
        bearing: 27,
        center: [-0.15591514, 51.51830379],
        zoom: 15.5,
        pitch: 20
    },
    'aldgate': {
        duration: 6000,
        center: [-0.07571203, 51.51424049],
        bearing: 150,
        zoom: 15,
        pitch: 0
    },
    'london-bridge': {
        bearing: 90,
        center: [-0.08533793, 51.50438536],
        zoom: 13,
        speed: 0.6,
        pitch: 40
    },
    'woolwich': {
        bearing: 90,
        center: [0.05991101, 51.48752939],
        zoom: 12.3
    },
    'gloucester': {
        bearing: 45,
        center: [-0.18335806, 51.49439521],
        zoom: 15.3,
        pitch: 20,
        speed: 0.5
    },
    'caulfield-gardens': {
        bearing: 180,
        center: [-0.19684993, 51.5033856],
        zoom: 12.3
    },
    'telegraph': {
        bearing: 90,
        center: [-0.10669358, 51.51433123],
        zoom: 17.3,
        pitch: 40
    },
    'charing-cross': {
        bearing: 90,
        center: [-0.12416858, 51.50779757],
        zoom: 14.3,
        pitch: 20
    }
};

// On every scroll event, check which element is on screen (from MapboxGL)
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

var activeChapterName = 'intro';
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

// Intro overlay from https: cneidson.github.io/hazards
// function openIntro() {
//   document.getElementById("splashScreen").style.width = "100%";
//   document.querySelector('body').style.overflow = 'hidden';
// }
//
// function closeIntro() {
//   document.getElementById("splashScreen").style.width = "0%";
//   document.querySelector('body').style.overflow = 'auto';
// }


  // var chapters = {
  //   'intro': {
  //     center: [-74.125656, 40.732835],
  //     zoom: 10,
  //     // bearing: ;
  //     // pitch: ;
  //     // duration: ,
  //     // speed: ;
  //     essential: true,
  //   },
  //
  //   'rockaways': {
  //     center: [-73.940220, 40.578368],
  //     zoom: 11,
  //     essential: true,
  //   },
  //
  //   'smias': {
  //     center: [-74.125656, 40.732835],
  //     zoom: 10,
  //     essential: true,
  //   },
  //
  //   'newtown': {
  //     center: [-73.951632, 40.726445],
  //     zoom: 13,
  //     essential: true,
  //   },
  //
  //   'bronx': {
  //     center: [-73.916901, 40.810297],
  //     zoom: 13,
  //     essential: true,
  //   },
  //
  //   'sunset': {
  //     center: [-74.037502, 40.657198],
  //     zoom: 13,
  //     essential: true,
  //   },
  //
  //   'redhook': {
  //     center: [-74.020436, 40.674699],
  //     zoom: 13,
  //     essential: true,
  //   },
  //
  //   'conclusion': {
  //     center: [-74.125656, 40.732835],
  //     zoom: 10,
  //     essential: true,
  //   }
  // };

// nav control
// var nav = new mapboxgl.NavigationControl();
// map.addControl(nav, 'top-right');

// color specific vectors based on the legend
// $.getJSON('./data/shelters.json',function(shelterRows){
//
//   shelterRows.forEach(function(shelterRow){
//
//     var html = `
//       <div>
//         <div><i>${shelterRow.type}</i></div>
//         <h3>${shelterRow.name}</h3>
//         <div><i>${shelterRow.description}</i></div><br>
//         <div><b>Eligibility: </b>${shelterRow.eligibility}</div>
//         <div><b>Address: </b>${shelterRow.address}</div>
//       </div>
//     `
//
//     var color = 'green'
//
//     if (shelterRow.type === 'Shelter'){
//       color='purple'
//     }
//
//     if (shelterRow.type === 'Drop-In Center'){
//       color='orange'
//     }

    // new mapboxgl.Marker({
    //   color:color
    // })
    //   .setLngLat([shelterRow.lng,shelterRow.lat])
    //   .setPopup(new mapboxgl.Popup().setHTML(html)) // add popup
    //   .addTo(map);
// })
// })


// // wait for the initial style to Load
// map.on('style.load', function() {

    // geojson boundaries
  // map.addSource('ezones', {
  //   type: 'geojson',
  //   data: './data/ezones.geojson',
  // });


  // Park 1
//   map.addLayer({
//     'id': 'Zone 1',
//     'source': 'ezones',
//     'type': 'fill',
//     'filter': ["==", "hurricane", "1"],
//     'layout': {
//       'visibility': 'visible'
//     },
//     'paint': {
//       'fill-color': '#d73027',
//       'fill-opacity': 0.3,
//     }
//   });
//
//
//   // Park 2
//   map.addLayer({
//     'id': 'Zone 2',
//     'source': 'ezones',
//     'type': 'fill',
//     'filter': ["==", "hurricane", "2"],
//     'layout': {
//       'visibility': 'visible'
//     },
//     'paint': {
//       'fill-color': '#f46d43',
//       'fill-opacity': 0.3,
//     }
//   });
//
//   // Park 3
//   map.addLayer({
//     'id': 'Zone 3',
//     'source': 'ezones',
//     'filter': ["==", "hurricane", "3"],
//     'type': 'fill',
//     'layout': {
//       'visibility': 'visible'
//     },
//     'paint': {
//       'fill-color': '#e0d653',
//       'fill-opacity': 0.3,
//     }
//   });
//   // Park 4
//   map.addLayer({
//     'id': 'Zone 4',
//     'source': 'ezones',
//     'filter': ["==", "hurricane", "4"],
//     'type': 'fill',
//     'layout': {
//       'visibility': 'visible'
//     },
//     'paint': {
//       'fill-color': '#a9b352',
//       'fill-opacity': 0.3,
//     }
//   });
//   // Park 5
//   map.addLayer({
//     'id': 'Zone 5',
//     'source': 'ezones',
//     'filter': ["==", "hurricane", "5"],
//     'type': 'fill',
//     'layout': {
//       'visibility': 'visible'
//     },
//     'paint': {
//       'fill-color': '#abdda4',
//       'fill-opacity': 0.3,
//     }
//   });
//   // Park 6
//   map.addLayer({
//     'id': 'Zone 6',
//     'source': 'ezones',
//     'filter': ["==", "hurricane", "6"],
//     'type': 'fill',
//     'layout': {
//       'visibility': 'visible'
//     },
//     'paint': {
//       'fill-color': '#66c2a5',
//       'fill-opacity': 0.3,
//     }
//   });
//
//   // fill
//   map.addSource('smia', {
//     type: 'geojson',
//     data: './data/smia.geojson',
//   });
//
//   map.addLayer({
//     'id': 'smia',
//     'source': 'smia',
//     'type': 'fill',
//     'layout': {
//       'visibility': 'none'
//     },
//     'paint': {
//       'fill-color': '#E066FF',
//       'fill-opacity': 0.5,
//       'fill-outline-color': 'black'
//     }
//   });
//
//   map.addLayer({
//     'id': 'newtown',
//     'source': 'smia',
//     'filter': ["==", "OBJECTID", 2],
//     'type': 'line',
//     'layout': {
//       'visibility': 'none'
//     },
//     'paint': {
//       'line-width': 3.1,
//       'line-opacity': 0.8,
//       'line-color': '#E066FF',
//     }
//   });
//
//   map.addLayer({
//     'id': 'bronx',
//     'source': 'smia',
//     'filter': ["==", "OBJECTID", 5],
//     'type': 'line',
//     'layout': {
//       'visibility': 'none'
//     },
//     'paint': {
//       'line-width': 3.1,
//       'line-opacity': 0.8,
//       'line-color': '#E066FF',
//     }
//   });
//
//   map.addLayer({
//     'id': 'sunset',
//     'source': 'smia',
//     'filter': ["==", "OBJECTID", 6],
//     'type': 'line',
//     'layout': {
//       'visibility': 'none'
//     },
//     'paint': {
//       'line-width': 3.1,
//       'line-opacity': 0.8,
//       'line-color': '#E066FF',
//     }
//   });
//
//   map.addLayer({
//     'id': 'redhook',
//     'source': 'smia',
//     'filter': ["==", "OBJECTID", 4],
//     'type': 'line',
//     'layout': {
//       'visibility': 'none'
//     },
//     'paint': {
//       'line-width': 3.1,
//       'line-opacity': 0.8,
//       'line-color': '#E066FF',
//     }
//   });
//
//   // Income
//   map.addSource('income', {
//     type: 'geojson',
//     data: './data/income.geojson',
//   });
//
//   map.addLayer({
//     'id': 'income',
//     'source': 'income',
//     'type': 'fill',
//     'layout': {
//       'visibility': 'none'
//     },
//     'paint': {
//       'fill-color': [
//         'interpolate',
//         ['linear'],
//         ['get', 'B06011_001'],
//         0,
//         '#8c510a',
//         24000,
//         '#d8b365',
//         39000,
//         '#f6e8c3',
//         53000,
//         '#c7eae5',
//         68000,
//         '#5ab4ac',
//         820000,
//         '#01665e',
//       ],
//       'fill-opacity': 0.5,
//       'fill-outline-color': 'black'
//     }
//   });
//
//   map.addLayer({
//     'id': 'View SMIAs',
//     'source': 'smia',
//     'type': 'line',
//     'layout': {
//       'visibility': 'none'
//     },
//     'paint': {
//       'line-width': 2.5,
//       'line-opacity': 0.9,
//       'line-color': '#E066FF',
//     }
//   });
//
// });



// On every scroll event, check which element is on screen
// window.onscroll = function() {
//   var chapterNames = Object.keys(chapters);
//   for (var i = 0; i < chapterNames.length; i++) {
//     var chapterName = chapterNames[i];
//     if (isElementOnScreen(chapterName)) {
//       setActiveChapter(chapterName);
//       break;
//     }
//   }
// };
//
// var activeChapterName = 'intro';
// function setActiveChapter(chapterName) {
//   if (chapterName === activeChapterName) return;
//
//   map.flyTo(chapters[chapterName]);
//
//   document.getElementById(chapterName).setAttribute('class', 'active');
//   document.getElementById(activeChapterName).setAttribute('class', '');
//
//   activeChapterName = chapterName;

  // if (activeChapterName === 'smias')
  //   map.setLayoutProperty('smia', 'visibility', 'visible');
  // else map.setLayoutProperty('smia', 'visibility', 'none');
  //
  // if (activeChapterName === 'newtown')
  //   map.setLayoutProperty('newtown', 'visibility', 'visible');
  // else map.setLayoutProperty('newtown', 'visibility', 'none');
  //
  // if (activeChapterName === 'bronx')
  //   map.setLayoutProperty('bronx', 'visibility', 'visible');
  // else map.setLayoutProperty('bronx', 'visibility', 'none');
  //
  // if (activeChapterName === 'sunset')
  //   map.setLayoutProperty('sunset', 'visibility', 'visible');
  // else map.setLayoutProperty('sunset', 'visibility', 'none');
  //
  // if (activeChapterName === 'redhook')
  //   map.setLayoutProperty('redhook', 'visibility', 'visible');
  // else map.setLayoutProperty('redhook', 'visibility', 'none');
  //
  // if (activeChapterName === 'conclusion')
  //   map.setLayoutProperty('income', 'visibility', 'visible');
  // else map.setLayoutProperty('income', 'visibility', 'none');
  //
  // if (activeChapterName === 'conclusion')
  //   map.setLayoutProperty('Zone 1', 'visibility', 'none');
  // else map.setLayoutProperty('Zone 1', 'visibility', 'visible');
  //
  // if (activeChapterName === 'conclusion')
  //   map.setLayoutProperty('Zone 2', 'visibility', 'none');
  // else map.setLayoutProperty('Zone 2', 'visibility', 'visible');
  //
  // if (activeChapterName === 'conclusion')
  //   map.setLayoutProperty('Zone 3', 'visibility', 'none');
  // else map.setLayoutProperty('Zone 3', 'visibility', 'visible');
  //
  // if (activeChapterName === 'conclusion')
  //   map.setLayoutProperty('Zone 4', 'visibility', 'none');
  // else map.setLayoutProperty('Zone 4', 'visibility', 'visible');
  //
  // if (activeChapterName === 'conclusion')
  //   map.setLayoutProperty('Zone 5', 'visibility', 'none');
  // else map.setLayoutProperty('Zone 5', 'visibility', 'visible');
  //
  // if (activeChapterName === 'conclusion')
  //   map.setLayoutProperty('Zone 6', 'visibility', 'none');
  // else map.setLayoutProperty('Zone 6', 'visibility', 'visible');
  //
  // if (activeChapterName === 'conclusion')
  //   map.setLayoutProperty('View SMIAs', 'visibility', 'visible');
  // else map.setLayoutProperty('View SMIAs', 'visibility', 'none');

  // }

  // function isElementOnScreen(id) {
  //   var element = document.getElementById(id);
  //   var bounds = element.getBoundingClientRect();
  //   return bounds.top < window.innerHeight && bounds.bottom > 0;
  // }

// // Zone toggles
// var toggleableLayerIds = ['Zone 1', 'Zone 2', 'Zone 3', 'Zone 4', 'Zone 5', 'Zone 6'];
//
// for (var i = 0; i < toggleableLayerIds.length; i++) {
//   var id = toggleableLayerIds[i];
//
//   var link = document.createElement('a');
//   link.href = '#';
//   link.className = 'active';
//   link.textContent = id;
//
//
//   link.onclick = function(e) {
//     var clickedLayer = this.textContent;
//     e.preventDefault();
//     e.stopPropagation();
//
//     var visibility = map.getLayoutProperty(clickedLayer, 'visibility');
//
//     if (visibility === 'visible') {
//       map.setLayoutProperty(clickedLayer, 'visibility', 'none');
//       this.className = '';
//     } else {
//       this.className = 'active';
//       map.setLayoutProperty(clickedLayer, 'visibility', 'visible');
//     }
//   };
//
//   var layers = document.getElementById('menu');
//   layers.appendChild(link);
// }

// Fly tos //

// $('#flybrooklyn').on('click', function() {
//   map.flyTo({
//     center: [-73.987993, 40.702351],
//     zoom: 13,
//     essential: true,
//   });
// })
//
// $('#flykill').on('click', function() {
//   map.flyTo({
//     center: [-74.191840, 40.642247],
//     zoom: 12,
//     essential: true,
//   });
// })
//
// $('#flynewtown').on('click', function() {
//   map.flyTo({
//     center: [-73.951632, 40.726445],
//     zoom: 13,
//     essential: true,
//   });
// })

// $('#flybronx').on('click', function() {
//   map.flyTo({
//     center: [-73.916901, 40.810297],
//     zoom: 13,
//     essential: true,
//   });
// })
//
// $('#flyredhook').on('click', function() {
//   map.flyTo({
//     center: [-74.019217, 40.688120],
//     zoom: 14,
//     essential: true,
//   });
// })
//
// $('#flysunset').on('click', function() {
//   map.flyTo({
//     center: [-74.037502, 40.657198],
//     zoom: 13,
//     essential: true,
//   });
// })
//
// $('#flysi').on('click', function() {
//   map.flyTo({
//     center: [-74.254121, 40.544579],
//     zoom: 13,
//     essential: true,
//   });
// })
