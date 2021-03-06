var nz_astro = (function(){

   return {
      textures: {
         "Pleiades": {
               "options": {
               },
               "data": {
                  "dir": "./textures/content/",
                  "file-name": "Pleiades_tiny.jpeg"
               }
         },
         "southern-cross": {
               "options": {
               },
               "data": {
                  "dir": "./textures/content/",
                  "file-name": "southern-cross-pointers-small.jpeg"
               }
         },},
      layouts: {
         
         "nz": {
            "options": {
            },
            "objectPlacements": [
               {
                  "object": "_none_",
                  "data": [
                     {
                        "place-name": "Pleiades_poster",
                        "options": {
                           "placer": "ImagePlacer",
                           "moreInfoData": {
                              "doc": "TODO: not working here",
                              "title": "Matariki — The Pleiades",
                              "link-text": "Matariki star facts — Ngā Meka Matariki",
                              "link": "https://www.tepapa.govt.nz/discover-collections/read-watch-play/maori/matariki-maori-new-year/whare-tapere/matariki-star-facts",
                              "text": "Matariki is a star cluster which appears in the night sky during mid-winter. According to the Maramataka (the Māori lunar calendar), the reappearance of Matariki brings the old lunar year to a close and marks the beginning of the new year. Hence, Matariki is associated with the Māori New Year."
                           }
                        },
                        "data": {
                           "texture": "Pleiades",
                           "alpha": 1.0,
                           "size": [
                              8.0,
                              5.78
                           ],
                           "position": [
                              20.0,
                              7,
                              1.5
                           ],
                           "rotation": [
                              0,
                              0,
                              0
                           ]
                        }
                     },
                     {
                        "place-name": "southern-cross_poster",
                        "options": {
                           "placer": "ImagePlacer",
                           "moreInfoData": {
                              "doc": "TODO: not working here",
                              "title": "The Southern Cross and Pointers",
                              "link-text": "Story: Southern Cross",
                              "link": "https://teara.govt.nz/en/southern-cross",
                              "text": "The Southern Cross and the Pointers are used by navigators to find the South Celestial Pole. The Pointers are Alpha and Beta Centauri. Alpha Centauri is well known in stories of interstellar navigation as the closest star to our Sun."
                           }
                        },
                        "data": {
                           "texture": "southern-cross",
                           "alpha": 1.0,
                           "size": [
                              8.0,
                              5.25
                           ],
                           "position": [
                              1.9,
                              7,
                              41.0
                           ],
                           "rotation": [
                              0,
                              4.7124,
                              0
                           ]
                        }
                     }
                  ]
               },
            ]
         },
      }
   };
})();
SQUIDSPACE.addAutoloadModule(nz_astro);