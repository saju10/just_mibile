(function(){
    var script = {
 "definitions": [{
 "class": "Menu",
 "rollOverBackgroundColor": "#000000",
 "fontFamily": "Arial",
 "selectedFontColor": "#FFFFFF",
 "children": [
  {
   "class": "MenuItem",
   "label": "BB Majar 1",
   "click": "this.mainPlayList.set('selectedIndex', 0)"
  },
  {
   "class": "MenuItem",
   "label": "BB Majar 2",
   "click": "this.mainPlayList.set('selectedIndex', 1)"
  },
  {
   "class": "MenuItem",
   "label": "Bangabandhu Mausoleum Complex",
   "click": "this.mainPlayList.set('selectedIndex', 2)"
  },
  {
   "class": "MenuItem",
   "label": "BB Majar 4",
   "click": "this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "label": "Media",
 "id": "Menu_68499E09_71EB_B841_41C5_C0A79841417B",
 "fontColor": "#FFFFFF",
 "rollOverFontColor": "#FFFFFF",
 "opacity": 0.4,
 "rollOverOpacity": 0.8,
 "backgroundColor": "#404040",
 "selectedBackgroundColor": "#202020"
},
{
 "viewerArea": "this.MainViewer",
 "buttonCardboardView": "this.IconButton_7E0DB44E_71AD_A8C3_41C7_B9E739F931EF",
 "displayPlaybackBar": true,
 "class": "PanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "id": "MainViewerPanoramaPlayer",
 "gyroscopeVerticalDraggingEnabled": true,
 "mouseControlMode": "drag_rotation"
},
{
 "hfovMin": "160%",
 "label": "BB Majar 2",
 "id": "panorama_7BFE4826_71A7_F842_41A9_88C01A99C354",
 "thumbnailUrl": "media/panorama_7BFE4826_71A7_F842_41A9_88C01A99C354_t.jpg",
 "hfov": 360,
 "partial": false,
 "cardboardMenu": "this.Menu_68499E09_71EB_B841_41C5_C0A79841417B",
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7BFE4826_71A7_F842_41A9_88C01A99C354_0/b/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_7BFE4826_71A7_F842_41A9_88C01A99C354_0/b/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_7BFE4826_71A7_F842_41A9_88C01A99C354_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7BFE4826_71A7_F842_41A9_88C01A99C354_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7BFE4826_71A7_F842_41A9_88C01A99C354_0/f/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_7BFE4826_71A7_F842_41A9_88C01A99C354_0/f/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_7BFE4826_71A7_F842_41A9_88C01A99C354_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7BFE4826_71A7_F842_41A9_88C01A99C354_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7BFE4826_71A7_F842_41A9_88C01A99C354_0/u/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_7BFE4826_71A7_F842_41A9_88C01A99C354_0/u/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_7BFE4826_71A7_F842_41A9_88C01A99C354_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7BFE4826_71A7_F842_41A9_88C01A99C354_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7BFE4826_71A7_F842_41A9_88C01A99C354_0/r/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_7BFE4826_71A7_F842_41A9_88C01A99C354_0/r/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_7BFE4826_71A7_F842_41A9_88C01A99C354_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7BFE4826_71A7_F842_41A9_88C01A99C354_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7BFE4826_71A7_F842_41A9_88C01A99C354_0/d/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_7BFE4826_71A7_F842_41A9_88C01A99C354_0/d/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_7BFE4826_71A7_F842_41A9_88C01A99C354_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7BFE4826_71A7_F842_41A9_88C01A99C354_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7BFE4826_71A7_F842_41A9_88C01A99C354_0/l/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_7BFE4826_71A7_F842_41A9_88C01A99C354_0/l/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_7BFE4826_71A7_F842_41A9_88C01A99C354_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7BFE4826_71A7_F842_41A9_88C01A99C354_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7BFE4826_71A7_F842_41A9_88C01A99C354_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama"
},
{
 "hfovMin": "160%",
 "label": "Bangabandhu Mausoleum Complex",
 "id": "panorama_7BCCF589_71A7_E841_41B6_8ED2ADDDFC70",
 "thumbnailUrl": "media/panorama_7BCCF589_71A7_E841_41B6_8ED2ADDDFC70_t.jpg",
 "hfov": 360,
 "partial": false,
 "cardboardMenu": "this.Menu_68499E09_71EB_B841_41C5_C0A79841417B",
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7BCCF589_71A7_E841_41B6_8ED2ADDDFC70_0/b/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_7BCCF589_71A7_E841_41B6_8ED2ADDDFC70_0/b/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_7BCCF589_71A7_E841_41B6_8ED2ADDDFC70_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7BCCF589_71A7_E841_41B6_8ED2ADDDFC70_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7BCCF589_71A7_E841_41B6_8ED2ADDDFC70_0/f/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_7BCCF589_71A7_E841_41B6_8ED2ADDDFC70_0/f/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_7BCCF589_71A7_E841_41B6_8ED2ADDDFC70_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7BCCF589_71A7_E841_41B6_8ED2ADDDFC70_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7BCCF589_71A7_E841_41B6_8ED2ADDDFC70_0/u/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_7BCCF589_71A7_E841_41B6_8ED2ADDDFC70_0/u/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_7BCCF589_71A7_E841_41B6_8ED2ADDDFC70_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7BCCF589_71A7_E841_41B6_8ED2ADDDFC70_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7BCCF589_71A7_E841_41B6_8ED2ADDDFC70_0/r/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_7BCCF589_71A7_E841_41B6_8ED2ADDDFC70_0/r/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_7BCCF589_71A7_E841_41B6_8ED2ADDDFC70_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7BCCF589_71A7_E841_41B6_8ED2ADDDFC70_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7BCCF589_71A7_E841_41B6_8ED2ADDDFC70_0/d/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_7BCCF589_71A7_E841_41B6_8ED2ADDDFC70_0/d/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_7BCCF589_71A7_E841_41B6_8ED2ADDDFC70_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7BCCF589_71A7_E841_41B6_8ED2ADDDFC70_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7BCCF589_71A7_E841_41B6_8ED2ADDDFC70_0/l/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_7BCCF589_71A7_E841_41B6_8ED2ADDDFC70_0/l/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_7BCCF589_71A7_E841_41B6_8ED2ADDDFC70_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7BCCF589_71A7_E841_41B6_8ED2ADDDFC70_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7BCCF589_71A7_E841_41B6_8ED2ADDDFC70_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama"
},
{
 "class": "PlayList",
 "items": [
  {
   "begin": "this.setEndToItemIndex(this.DropDown_7E5B8A9A_71AD_F842_41D2_BB37C0765A65_playlist, 0, 1)",
   "media": "this.panorama_7BF774F2_71A7_A9C2_41C6_4A4F1ECBEF25",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7BF774F2_71A7_A9C2_41C6_4A4F1ECBEF25_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_7E5B8A9A_71AD_F842_41D2_BB37C0765A65_playlist, 1, 2)",
   "media": "this.panorama_7BFE4826_71A7_F842_41A9_88C01A99C354",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7BFE4826_71A7_F842_41A9_88C01A99C354_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_7E5B8A9A_71AD_F842_41D2_BB37C0765A65_playlist, 2, 3)",
   "media": "this.panorama_7BCCF589_71A7_E841_41B6_8ED2ADDDFC70",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7BCCF589_71A7_E841_41B6_8ED2ADDDFC70_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_7E5B8A9A_71AD_F842_41D2_BB37C0765A65_playlist, 3, 0)",
   "media": "this.panorama_7BF374DA_71A7_A9C3_41CA_48DCAA690961",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7BF374DA_71A7_A9C3_41CA_48DCAA690961_camera"
  }
 ],
 "id": "DropDown_7E5B8A9A_71AD_F842_41D2_BB37C0765A65_playlist"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_7BF774F2_71A7_A9C2_41C6_4A4F1ECBEF25_camera",
 "displayMovements": [
  {
   "class": "TargetRotationalCameraDisplayMovement",
   "duration": 1000,
   "easing": "linear"
  },
  {
   "duration": 3000,
   "targetPitch": 0,
   "targetStereographicFactor": 0,
   "class": "TargetRotationalCameraDisplayMovement",
   "targetHfov": 80,
   "easing": "cubic_in_out"
  }
 ],
 "manualRotationSpeed": 200,
 "automaticZoomSpeed": 10,
 "displayOriginPosition": {
  "class": "RotationalCameraDisplayPosition",
  "hfov": 165,
  "yaw": 0,
  "stereographicFactor": 1,
  "pitch": -90
 }
},
{
 "class": "PlayList",
 "items": [
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "media": "this.panorama_7BF774F2_71A7_A9C2_41C6_4A4F1ECBEF25",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7BF774F2_71A7_A9C2_41C6_4A4F1ECBEF25_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "media": "this.panorama_7BFE4826_71A7_F842_41A9_88C01A99C354",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7BFE4826_71A7_F842_41A9_88C01A99C354_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "media": "this.panorama_7BCCF589_71A7_E841_41B6_8ED2ADDDFC70",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7BCCF589_71A7_E841_41B6_8ED2ADDDFC70_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 0)",
   "media": "this.panorama_7BF374DA_71A7_A9C3_41CA_48DCAA690961",
   "camera": "this.panorama_7BF374DA_71A7_A9C3_41CA_48DCAA690961_camera",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "end": "this.trigger('tourEnded')"
  }
 ],
 "id": "mainPlayList"
},
{
 "hfovMin": "160%",
 "label": "BB Majar 4",
 "id": "panorama_7BF374DA_71A7_A9C3_41CA_48DCAA690961",
 "thumbnailUrl": "media/panorama_7BF374DA_71A7_A9C3_41CA_48DCAA690961_t.jpg",
 "hfov": 360,
 "partial": false,
 "cardboardMenu": "this.Menu_68499E09_71EB_B841_41C5_C0A79841417B",
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7BF374DA_71A7_A9C3_41CA_48DCAA690961_0/b/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_7BF374DA_71A7_A9C3_41CA_48DCAA690961_0/b/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_7BF374DA_71A7_A9C3_41CA_48DCAA690961_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7BF374DA_71A7_A9C3_41CA_48DCAA690961_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7BF374DA_71A7_A9C3_41CA_48DCAA690961_0/f/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_7BF374DA_71A7_A9C3_41CA_48DCAA690961_0/f/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_7BF374DA_71A7_A9C3_41CA_48DCAA690961_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7BF374DA_71A7_A9C3_41CA_48DCAA690961_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7BF374DA_71A7_A9C3_41CA_48DCAA690961_0/u/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_7BF374DA_71A7_A9C3_41CA_48DCAA690961_0/u/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_7BF374DA_71A7_A9C3_41CA_48DCAA690961_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7BF374DA_71A7_A9C3_41CA_48DCAA690961_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7BF374DA_71A7_A9C3_41CA_48DCAA690961_0/r/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_7BF374DA_71A7_A9C3_41CA_48DCAA690961_0/r/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_7BF374DA_71A7_A9C3_41CA_48DCAA690961_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7BF374DA_71A7_A9C3_41CA_48DCAA690961_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7BF374DA_71A7_A9C3_41CA_48DCAA690961_0/d/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_7BF374DA_71A7_A9C3_41CA_48DCAA690961_0/d/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_7BF374DA_71A7_A9C3_41CA_48DCAA690961_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7BF374DA_71A7_A9C3_41CA_48DCAA690961_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7BF374DA_71A7_A9C3_41CA_48DCAA690961_0/l/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_7BF374DA_71A7_A9C3_41CA_48DCAA690961_0/l/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_7BF374DA_71A7_A9C3_41CA_48DCAA690961_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7BF374DA_71A7_A9C3_41CA_48DCAA690961_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7BF374DA_71A7_A9C3_41CA_48DCAA690961_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_7BCCF589_71A7_E841_41B6_8ED2ADDDFC70_camera",
 "manualRotationSpeed": 200,
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_7BF374DA_71A7_A9C3_41CA_48DCAA690961_camera",
 "automaticZoomSpeed": 10
},
{
 "hfovMin": "160%",
 "label": "BB Majar 1",
 "id": "panorama_7BF774F2_71A7_A9C2_41C6_4A4F1ECBEF25",
 "thumbnailUrl": "media/panorama_7BF774F2_71A7_A9C2_41C6_4A4F1ECBEF25_t.jpg",
 "hfov": 360,
 "partial": false,
 "cardboardMenu": "this.Menu_68499E09_71EB_B841_41C5_C0A79841417B",
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7BF774F2_71A7_A9C2_41C6_4A4F1ECBEF25_0/b/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_7BF774F2_71A7_A9C2_41C6_4A4F1ECBEF25_0/b/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_7BF774F2_71A7_A9C2_41C6_4A4F1ECBEF25_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7BF774F2_71A7_A9C2_41C6_4A4F1ECBEF25_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7BF774F2_71A7_A9C2_41C6_4A4F1ECBEF25_0/f/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_7BF774F2_71A7_A9C2_41C6_4A4F1ECBEF25_0/f/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_7BF774F2_71A7_A9C2_41C6_4A4F1ECBEF25_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7BF774F2_71A7_A9C2_41C6_4A4F1ECBEF25_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7BF774F2_71A7_A9C2_41C6_4A4F1ECBEF25_0/u/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_7BF774F2_71A7_A9C2_41C6_4A4F1ECBEF25_0/u/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_7BF774F2_71A7_A9C2_41C6_4A4F1ECBEF25_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7BF774F2_71A7_A9C2_41C6_4A4F1ECBEF25_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7BF774F2_71A7_A9C2_41C6_4A4F1ECBEF25_0/r/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_7BF774F2_71A7_A9C2_41C6_4A4F1ECBEF25_0/r/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_7BF774F2_71A7_A9C2_41C6_4A4F1ECBEF25_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7BF774F2_71A7_A9C2_41C6_4A4F1ECBEF25_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7BF774F2_71A7_A9C2_41C6_4A4F1ECBEF25_0/d/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_7BF774F2_71A7_A9C2_41C6_4A4F1ECBEF25_0/d/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_7BF774F2_71A7_A9C2_41C6_4A4F1ECBEF25_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7BF774F2_71A7_A9C2_41C6_4A4F1ECBEF25_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7BF774F2_71A7_A9C2_41C6_4A4F1ECBEF25_0/l/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_7BF774F2_71A7_A9C2_41C6_4A4F1ECBEF25_0/l/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_7BF774F2_71A7_A9C2_41C6_4A4F1ECBEF25_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7BF774F2_71A7_A9C2_41C6_4A4F1ECBEF25_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7BF774F2_71A7_A9C2_41C6_4A4F1ECBEF25_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_7BFE4826_71A7_F842_41A9_88C01A99C354_camera",
 "automaticZoomSpeed": 10
},
{
 "transitionDuration": 500,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipBorderColor": "#767676",
 "id": "MainViewer",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 1,
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "width": "100%",
 "minHeight": 50,
 "toolTipPaddingBottom": 4,
 "playbackBarRight": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "paddingRight": 0,
 "toolTipShadowColor": "#333333",
 "minWidth": 100,
 "progressBarBorderSize": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "shadow": false,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "transitionMode": "blending",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "borderSize": 0,
 "progressBackgroundOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "paddingLeft": 0,
 "toolTipBorderSize": 1,
 "displayTooltipInTouchScreens": true,
 "progressBorderSize": 0,
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingTop": 4,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "paddingTop": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "class": "ViewerArea",
 "paddingBottom": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "toolTipBorderRadius": 3,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 5,
 "borderRadius": 0,
 "progressBorderColor": "#000000",
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipShadowSpread": 0,
 "data": {
  "name": "Main Viewer"
 }
},
{
 "transparencyActive": true,
 "maxHeight": 70,
 "maxWidth": 70,
 "toolTipShadowVerticalLength": 0,
 "toolTipBorderColor": "#767676",
 "id": "IconButton_7D61012D_71AB_A841_41D4_887847D4BFDB",
 "left": "1%",
 "toolTip": "Fullscreen",
 "width": 80,
 "horizontalAlign": "center",
 "toolTipFontSize": 12,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipOpacity": 1,
 "toolTipShadowBlurRadius": 3,
 "borderSize": 0,
 "toolTipTextShadowColor": "#000000",
 "iconURL": "skin/IconButton_7D61012D_71AB_A841_41D4_887847D4BFDB.png",
 "minHeight": 60,
 "toolTipFontColor": "#606060",
 "toolTipFontWeight": "normal",
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "paddingRight": 0,
 "toolTipShadowColor": "#333333",
 "bottom": "1%",
 "paddingLeft": 0,
 "minWidth": 60,
 "toolTipBorderSize": 1,
 "mode": "toggle",
 "verticalAlign": "middle",
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "backgroundOpacity": 0,
 "toolTipDisplayTime": 600,
 "toolTipShadowOpacity": 1,
 "class": "IconButton",
 "paddingTop": 0,
 "toolTipFontStyle": "normal",
 "paddingBottom": 0,
 "height": 80,
 "shadow": false,
 "toolTipBorderRadius": 3,
 "toolTipTextShadowOpacity": 0,
 "data": {
  "name": "IconButton1493"
 },
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "borderRadius": 0,
 "toolTipPaddingTop": 4,
 "cursor": "hand",
 "toolTipShadowHorizontalLength": 0,
 "toolTipShadowSpread": 0
},
{
 "transparencyActive": false,
 "maxHeight": 70,
 "maxWidth": 70,
 "toolTipShadowVerticalLength": 0,
 "toolTipBorderColor": "#767676",
 "id": "IconButton_7E0DB44E_71AD_A8C3_41C7_B9E739F931EF",
 "toolTip": "VR Mode",
 "toolTipOpacity": 1,
 "horizontalAlign": "center",
 "toolTipFontSize": 12,
 "right": "1%",
 "toolTipBackgroundColor": "#F6F6F6",
 "width": 42,
 "toolTipShadowBlurRadius": 3,
 "borderSize": 0,
 "toolTipTextShadowColor": "#000000",
 "iconURL": "skin/IconButton_7E0DB44E_71AD_A8C3_41C7_B9E739F931EF.png",
 "minHeight": 70,
 "toolTipFontColor": "#606060",
 "toolTipFontWeight": "normal",
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "paddingRight": 0,
 "toolTipShadowColor": "#333333",
 "bottom": "1%",
 "paddingLeft": 0,
 "minWidth": 70,
 "toolTipBorderSize": 1,
 "mode": "push",
 "verticalAlign": "middle",
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "backgroundOpacity": 0,
 "toolTipDisplayTime": 600,
 "toolTipShadowOpacity": 1,
 "class": "IconButton",
 "paddingTop": 0,
 "toolTipFontStyle": "normal",
 "paddingBottom": 0,
 "height": 42,
 "shadow": false,
 "toolTipBorderRadius": 3,
 "toolTipTextShadowOpacity": 0,
 "data": {
  "name": "IconButton15824"
 },
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "borderRadius": 0,
 "toolTipPaddingRight": 6,
 "cursor": "hand",
 "toolTipShadowHorizontalLength": 0,
 "toolTipShadowSpread": 0
},
{
 "arrowBeforeLabel": false,
 "maxHeight": 75,
 "maxWidth": 350,
 "rollOverPopUpBackgroundColor": "#FFFFFF",
 "id": "DropDown_7E5B8A9A_71AD_F842_41D2_BB37C0765A65",
 "popUpBackgroundColor": "#FFFFFF",
 "width": 250,
 "backgroundColorDirection": "vertical",
 "fontFamily": "Arial",
 "right": "2%",
 "borderSize": 0,
 "popUpBackgroundOpacity": 0.9,
 "selectedPopUpBackgroundColor": "#333333",
 "popUpShadow": false,
 "fontColor": "#FFFFFF",
 "minHeight": 40,
 "popUpGap": 0,
 "popUpPaddingBottom": 5,
 "playList": "this.DropDown_7E5B8A9A_71AD_F842_41D2_BB37C0765A65_playlist",
 "top": "2%",
 "selectedPopUpFontColor": "#FFFFFF",
 "data": {
  "name": "DropDown1204"
 },
 "paddingLeft": 5,
 "backgroundColor": [
  "#666666"
 ],
 "fontSize": "20px",
 "popUpPaddingTop": 5,
 "backgroundOpacity": 0.9,
 "minWidth": 250,
 "popUpShadowBlurRadius": 6,
 "paddingRight": 5,
 "popUpShadowOpacity": 0,
 "class": "DropDown",
 "paddingTop": 0,
 "popUpBorderRadius": 0,
 "paddingBottom": 0,
 "height": 40,
 "gap": 0,
 "shadow": false,
 "popUpFontColor": "#000000",
 "fontStyle": "normal",
 "arrowColor": "#FFFFFF",
 "textDecoration": "none",
 "propagateClick": false,
 "borderRadius": 0,
 "fontWeight": "normal",
 "backgroundColorRatios": [
  0
 ],
 "popUpShadowColor": "#000000",
 "popUpShadowSpread": 1
},
{
 "transparencyActive": false,
 "maxHeight": 70,
 "maxWidth": 70,
 "toolTipShadowVerticalLength": 0,
 "toolTipBorderColor": "#767676",
 "id": "IconButton_61432813_71EC_7842_41DA_C567EF3C23E5",
 "left": "1%",
 "toolTip": "Home",
 "width": 125,
 "horizontalAlign": "center",
 "toolTipFontSize": "1.11vmin",
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipOpacity": 1,
 "toolTipShadowBlurRadius": 3,
 "borderSize": 0,
 "toolTipTextShadowColor": "#000000",
 "iconURL": "skin/IconButton_61432813_71EC_7842_41DA_C567EF3C23E5.png",
 "minHeight": 60,
 "toolTipFontColor": "#606060",
 "toolTipFontWeight": "normal",
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "top": "1%",
 "paddingRight": 0,
 "toolTipShadowColor": "#333333",
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "minWidth": 60,
 "toolTipBorderSize": 1,
 "mode": "push",
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "backgroundOpacity": 0,
 "toolTipDisplayTime": 600,
 "toolTipShadowOpacity": 1,
 "class": "IconButton",
 "paddingTop": 0,
 "toolTipFontStyle": "normal",
 "paddingBottom": 0,
 "height": 108,
 "shadow": false,
 "toolTipBorderRadius": 3,
 "toolTipTextShadowOpacity": 0,
 "data": {
  "name": "IconButton6131"
 },
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "borderRadius": 0,
 "toolTipPaddingTop": 4,
 "cursor": "hand",
 "toolTipShadowHorizontalLength": 0,
 "toolTipShadowSpread": 0
}],
 "scrollBarWidth": 10,
 "children": [
  "this.MainViewer",
  "this.IconButton_7D61012D_71AB_A841_41D4_887847D4BFDB",
  "this.IconButton_7E0DB44E_71AD_A8C3_41C7_B9E739F931EF",
  "this.DropDown_7E5B8A9A_71AD_F842_41D2_BB37C0765A65",
  "this.IconButton_61432813_71EC_7842_41DA_C567EF3C23E5"
 ],
 "id": "rootPlayer",
 "scrollBarColor": "#000000",
 "vrPolyfillScale": 0.5,
 "scrollBarOpacity": 0.5,
 "mobileMipmappingEnabled": false,
 "borderSize": 0,
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_7E0DB44E_71AD_A8C3_41C7_B9E739F931EF], 'cardboardAvailable'); this.syncPlaylists([this.DropDown_7E5B8A9A_71AD_F842_41D2_BB37C0765A65_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.IconButton_7D61012D_71AB_A841_41D4_887847D4BFDB].forEach(function(component) { component.set('visible', false); }) }",
 "scrollBarVisible": "rollOver",
 "minHeight": 20,
 "horizontalAlign": "left",
 "buttonToggleFullscreen": "this.IconButton_7D61012D_71AB_A841_41D4_887847D4BFDB",
 "scripts": {
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "registerKey": function(key, value){  window[key] = value; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "existsKey": function(key){  return key in window; },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "unregisterKey": function(key){  delete window[key]; },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "getKey": function(key){  return window[key]; }
 },
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "minWidth": 20,
 "backgroundPreloadEnabled": true,
 "defaultVRPointer": "laser",
 "downloadEnabled": false,
 "contentOpaque": false,
 "width": "100%",
 "class": "Player",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "shadow": false,
 "data": {
  "name": "Player551"
 },
 "mouseWheelEnabled": true,
 "height": "100%",
 "propagateClick": false,
 "borderRadius": 0,
 "desktopMipmappingEnabled": false,
 "overflow": "visible",
 "layout": "absolute"
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
