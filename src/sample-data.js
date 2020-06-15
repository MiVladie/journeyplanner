export const meta = {
   "timeIs":"departing",
   "date":"2020-06-18T11:20:00",
   "from":{
      "name":"Uxbridge UB8 2TF, Reino Unido",
      "coordinates":{
         "lat":51.5340733,
         "lng":-0.4795997
      }
   },
   "to":{
      "name":"BBC Television Centre, Londres, Reino Unido",
      "coordinates":{
         "lat":51.5100255,
         "lng":-0.2268465
      }
   }
};

export const journeys = [
   {
      "$type":"Tfl.Api.Presentation.Entities.JourneyPlanner.Journey, Tfl.Api.Presentation.Entities",
      "startDateTime":"2020-06-18T11:10:00",
      "duration":68,
      "arrivalDateTime":"2020-06-18T12:18:00",
      "legs":[
         {
            "$type":"Tfl.Api.Presentation.Entities.JourneyPlanner.Leg, Tfl.Api.Presentation.Entities",
            "duration":5,
            "instruction":{
               "$type":"Tfl.Api.Presentation.Entities.Instruction, Tfl.Api.Presentation.Entities",
               "summary":"Walk to Brunel University, Cowley",
               "detailed":"Walk to Brunel University, Cowley",
               "steps":[
                  {
                     "$type":"Tfl.Api.Presentation.Entities.InstructionStep, Tfl.Api.Presentation.Entities",
                     "description":"Topping Lane for 194 metres",
                     "turnDirection":"STRAIGHT",
                     "streetName":"Topping Lane",
                     "distance":194,
                     "cumulativeDistance":194,
                     "skyDirection":360,
                     "skyDirectionDescription":"North",
                     "cumulativeTravelTime":175,
                     "latitude":51.53387973946,
                     "longitude":-0.47894856502,
                     "pathAttribute":{
                        "$type":"Tfl.Api.Presentation.Entities.PathAttribute, Tfl.Api.Presentation.Entities"
                     },
                     "descriptionHeading":"Continue along ",
                     "trackType":"None"
                  },
                  {
                     "$type":"Tfl.Api.Presentation.Entities.InstructionStep, Tfl.Api.Presentation.Entities",
                     "description":"on to Cleveland Road, continue for 145 metres",
                     "turnDirection":"RIGHT",
                     "streetName":"Cleveland Road",
                     "distance":145,
                     "cumulativeDistance":339,
                     "skyDirection":539,
                     "skyDirectionDescription":"North",
                     "cumulativeTravelTime":305,
                     "latitude":51.53392435343,
                     "longitude":-0.47614998488,
                     "pathAttribute":{
                        "$type":"Tfl.Api.Presentation.Entities.PathAttribute, Tfl.Api.Presentation.Entities"
                     },
                     "descriptionHeading":"Turn right",
                     "trackType":"None"
                  }
               ]
            },
            "obstacles":[

            ],
            "departureTime":"2020-06-18T11:10:00",
            "arrivalTime":"2020-06-18T11:15:00",
            "departurePoint":{
               "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
               "platformName":"",
               "icsCode":"99999997",
               "commonName":"1 Topping Lane, Uxbridge",
               "placeType":"StopPoint",
               "additionalProperties":[

               ],
               "lat":51.53387973946,
               "lon":-0.47894856502
            },
            "arrivalPoint":{
               "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
               "naptanId":"490G00004528",
               "platformName":"BA",
               "stopLetter":"BA",
               "icsCode":"1004528",
               "commonName":"Brunel University",
               "placeType":"StopPoint",
               "additionalProperties":[

               ],
               "lat":51.53314219026,
               "lon":-0.47616168407000004
            },
            "path":{
               "$type":"Tfl.Api.Presentation.Entities.JourneyPlanner.Path, Tfl.Api.Presentation.Entities",
               "lineString":"[[51.53387973946, -0.47894856502],[51.53387973946, -0.47894856502],[51.53392435343, -0.47614998488],[51.53294426201, -0.47615387521],[51.53262049851, -0.47615026803]]",
               "stopPoints":[

               ],
               "elevation":[

               ]
            },
            "routeOptions":[
               {
                  "$type":"Tfl.Api.Presentation.Entities.JourneyPlanner.RouteOption, Tfl.Api.Presentation.Entities",
                  "name":"",
                  "directions":[
                     ""
                  ]
               }
            ],
            "mode":{
               "$type":"Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
               "id":"walking",
               "name":"walking",
               "type":"Mode",
               "routeType":"Unknown",
               "status":"Unknown"
            },
            "disruptions":[

            ],
            "plannedWorks":[

            ],
            "distance":339,
            "isDisrupted":false,
            "hasFixedLocations":true
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.JourneyPlanner.Leg, Tfl.Api.Presentation.Entities",
            "duration":13,
            "instruction":{
               "$type":"Tfl.Api.Presentation.Entities.Instruction, Tfl.Api.Presentation.Entities",
               "summary":"U3 bus to Ferrers Avenue",
               "detailed":"U3 bus towards Heathrow Central",
               "steps":[

               ]
            },
            "obstacles":[

            ],
            "departureTime":"2020-06-18T11:15:00",
            "arrivalTime":"2020-06-18T11:28:00",
            "departurePoint":{
               "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
               "naptanId":"490G00004528",
               "platformName":"BA",
               "stopLetter":"BA",
               "icsCode":"1004528",
               "commonName":"Brunel University",
               "placeType":"StopPoint",
               "additionalProperties":[

               ],
               "lat":51.53314219026,
               "lon":-0.47616168407000004
            },
            "arrivalPoint":{
               "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
               "naptanId":"490G00006815",
               "platformName":"",
               "stopLetter":"H",
               "icsCode":"1006815",
               "commonName":"Ferrers Avenue",
               "placeType":"StopPoint",
               "additionalProperties":[

               ],
               "lat":51.50843255726,
               "lon":-0.47345571526999997
            },
            "path":{
               "$type":"Tfl.Api.Presentation.Entities.JourneyPlanner.Path, Tfl.Api.Presentation.Entities",
               "lineString":"[[51.53261110859, -0.47615312919],[51.53253960443, -0.47615296906],[51.53234186334, -0.47615957154],[51.53214393506, -0.47615176275],[51.53087678138, -0.47620848756],[51.53025809044, -0.4763444779],[51.53027400816, -0.47618536113],[51.53009967518, -0.47591726224],[51.52930715872, -0.47536773253],[51.52930715872, -0.47536773253],[51.52924673004, -0.47532583222],[51.52889263049, -0.47506374843],[51.52866567693, -0.47489833454],[51.5281391138, -0.474512275],[51.52799107393, -0.47439136122],[51.52799107393, -0.47439136122],[51.52700302756, -0.47358438199],[51.52695602403, -0.47342737985],[51.52692379251, -0.47233285691],[51.52693876659, -0.47210170288],[51.52701389655, -0.47090909286],[51.52701389655, -0.47090909286],[51.52705797909, -0.47020923683],[51.52712910007, -0.46945722807],[51.52731081076, -0.46753381664],[51.52735572509, -0.46715233197],[51.52735572509, -0.46715233197],[51.5274079375, -0.46670884601],[51.52781298771, -0.46467698703],[51.52770374327, -0.46388777821],[51.52757319129, -0.46353177114],[51.5273302493, -0.46283356737],[51.52704720552, -0.46207363604],[51.52704720552, -0.46207363604],[51.52702268589, -0.46200780544],[51.52681814434, -0.46149572882],[51.52679023496, -0.4614245906],[51.52676232553, -0.46135345247],[51.52618426017, -0.45978722269],[51.52607852796, -0.45952059341],[51.52607852796, -0.45952059341],[51.52584015509, -0.45891948875],[51.52484388409, -0.45837651472],[51.52450564084, -0.45795548536],[51.52379149173, -0.45698498448],[51.52333886161, -0.45675523311],[51.52321313488, -0.45745138645],[51.52309298327, -0.45788788458],[51.52305835634, -0.45798995644],[51.52288386397, -0.45893769064],[51.52288386397, -0.45893769064],[51.52288210026, -0.45894726972],[51.52284283661, -0.45938103104],[51.52278379363, -0.46036321033],[51.52276136681, -0.46070991476],[51.52274830516, -0.46108513214],[51.52272927723, -0.46169118224],[51.52270986844, -0.46226841565],[51.52273565808, -0.46355043684],[51.52260121257, -0.46358379037],[51.52236902903, -0.46370691906],[51.52199956962, -0.46364728005],[51.52140446178, -0.46352316505],[51.52055409841, -0.46313378147],[51.51841011351, -0.46215378666],[51.51815693313, -0.46204700922],[51.51795711514, -0.46189519653],[51.51794718246, -0.4618234662],[51.51783837961, -0.46175506661],[51.51782078104, -0.46178448534],[51.51779551653, -0.46191505283],[51.51781405958, -0.46195766705],[51.5177128111, -0.46246552915],[51.517505919, -0.46332534682],[51.517505919, -0.46332534682],[51.51736316811, -0.4639185817],[51.51733368981, -0.46510142162],[51.5174907434, -0.46679685657],[51.51721186304, -0.46885282952],[51.51718628023, -0.47033819852],[51.51718872218, -0.4705254822],[51.51713906295, -0.47090073169],[51.51713906295, -0.47090073169],[51.5170986777, -0.4712058951],[51.51679234854, -0.47185030529],[51.51644743641, -0.47229422247],[51.51592707097, -0.47307548437],[51.5158838173, -0.47320664147],[51.51557073749, -0.47402419293],[51.515509881, -0.47418476063],[51.5153623266, -0.47459323086],[51.51503004717, -0.4742540065],[51.51503004717, -0.4742540065],[51.51495223476, -0.4741745686],[51.51447959857, -0.47378682776],[51.51412568297, -0.47353924382],[51.51399872275, -0.47345701713],[51.51357140049, -0.4730965997],[51.51327103788, -0.47281841214],[51.51290064428, -0.47268668412],[51.51241381872, -0.47256499102],[51.51241381872, -0.47256499102],[51.51234130977, -0.47254686598],[51.51163405146, -0.47278668396],[51.51128557251, -0.47295685589],[51.51060172599, -0.47361378771],[51.51032665099, -0.47389678097],[51.51017609929, -0.47407473737],[51.51005101318, -0.47413655816],[51.50986357129, -0.47424369286],[51.50961152534, -0.47422329156],[51.50941284685, -0.47415787693],[51.50865089955, -0.47365015866],[51.50834741684, -0.47337817398]]",
               "stopPoints":[
                  {
                     "$type":"Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                     "id":"490G00005286",
                     "name":"Huxley Close",
                     "uri":"/StopPoint/490G00005286",
                     "type":"StopPoint",
                     "routeType":"Unknown",
                     "status":"Unknown"
                  },
                  {
                     "$type":"Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                     "id":"490G00012757",
                     "name":"St Laurence Church",
                     "uri":"/StopPoint/490G00012757",
                     "type":"StopPoint",
                     "routeType":"Unknown",
                     "status":"Unknown"
                  },
                  {
                     "$type":"Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                     "id":"490G00010994",
                     "name":"Pield Heath",
                     "uri":"/StopPoint/490G00010994",
                     "type":"StopPoint",
                     "routeType":"Unknown",
                     "status":"Unknown"
                  },
                  {
                     "$type":"Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                     "id":"490G00015584",
                     "name":"Peel Way",
                     "uri":"/StopPoint/490G00015584",
                     "type":"StopPoint",
                     "routeType":"Unknown",
                     "status":"Unknown"
                  },
                  {
                     "$type":"Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                     "id":"490G00008225",
                     "name":"Hillingdon Hospital",
                     "uri":"/StopPoint/490G00008225",
                     "type":"StopPoint",
                     "routeType":"Unknown",
                     "status":"Unknown"
                  },
                  {
                     "$type":"Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                     "id":"490G00005477",
                     "name":"Colham Road",
                     "uri":"/StopPoint/490G00005477",
                     "type":"StopPoint",
                     "routeType":"Unknown",
                     "status":"Unknown"
                  },
                  {
                     "$type":"Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                     "id":"490G00005478",
                     "name":"Violet Avenue",
                     "uri":"/StopPoint/490G00005478",
                     "type":"StopPoint",
                     "routeType":"Unknown",
                     "status":"Unknown"
                  },
                  {
                     "$type":"Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                     "id":"490G00003348",
                     "name":"Apple Tree Avenue",
                     "uri":"/StopPoint/490G00003348",
                     "type":"StopPoint",
                     "routeType":"Unknown",
                     "status":"Unknown"
                  },
                  {
                     "$type":"Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                     "id":"490G00010663",
                     "name":"Otterfield Road",
                     "uri":"/StopPoint/490G00010663",
                     "type":"StopPoint",
                     "routeType":"Unknown",
                     "status":"Unknown"
                  },
                  {
                     "$type":"Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                     "id":"490G00015006",
                     "name":"Yiewsley Library",
                     "uri":"/StopPoint/490G00015006",
                     "type":"StopPoint",
                     "routeType":"Unknown",
                     "status":"Unknown"
                  },
                  {
                     "$type":"Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                     "id":"490G00015005",
                     "name":"Yiewsley High Street",
                     "uri":"/StopPoint/490G00015005",
                     "type":"StopPoint",
                     "routeType":"Unknown",
                     "status":"Unknown"
                  },
                  {
                     "$type":"Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                     "id":"490G00006815",
                     "name":"Ferrers Avenue",
                     "uri":"/StopPoint/490G00006815",
                     "type":"StopPoint",
                     "routeType":"Unknown",
                     "status":"Unknown"
                  }
               ],
               "elevation":[

               ]
            },
            "routeOptions":[
               {
                  "$type":"Tfl.Api.Presentation.Entities.JourneyPlanner.RouteOption, Tfl.Api.Presentation.Entities",
                  "name":"U3",
                  "directions":[
                     "Heathrow Central"
                  ],
                  "lineIdentifier":{
                     "$type":"Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                     "id":"u3",
                     "name":"U3",
                     "uri":"/Line/u3",
                     "type":"Line",
                     "crowding":{
                        "$type":"Tfl.Api.Presentation.Entities.Crowding, Tfl.Api.Presentation.Entities"
                     },
                     "routeType":"Unknown",
                     "status":"Unknown"
                  }
               }
            ],
            "mode":{
               "$type":"Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
               "id":"bus",
               "name":"bus",
               "type":"Mode",
               "routeType":"Unknown",
               "status":"Unknown"
            },
            "disruptions":[
               {
                  "$type":"Tfl.Api.Presentation.Entities.Disruption, Tfl.Api.Presentation.Entities",
                  "category":"PlannedWork",
                  "type":"lineInfo",
                  "categoryDescription":"PlannedWork",
                  "description":"HIGH STREET, UB8: Routes 427 U1 U3 U4 and U7 are on diversion from 08:00 Monday, 6 January to 17:00 Monday, 20 July due to Hillingdon Council works. \n\nBuses towards Uxbridge are diverted via Hillingdon Road, missing Civic Centre bus stop.",
                  "summary":"NO20/96/B / HIGH STREET, UB8 / ROUTES 427 U1 U3 U4 U7",
                  "additionalInfo":"",
                  "created":"2020-06-02T09:31:00",
                  "lastUpdate":"2020-06-02T09:32:00"
               }
            ],
            "plannedWorks":[

            ],
            "isDisrupted":true,
            "hasFixedLocations":true
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.JourneyPlanner.Leg, Tfl.Api.Presentation.Entities",
            "duration":7,
            "instruction":{
               "$type":"Tfl.Api.Presentation.Entities.Instruction, Tfl.Api.Presentation.Entities",
               "summary":"Walk to West Drayton Station",
               "detailed":"Walk to West Drayton Station",
               "steps":[
                  {
                     "$type":"Tfl.Api.Presentation.Entities.InstructionStep, Tfl.Api.Presentation.Entities",
                     "description":"Station Road for 38 metres",
                     "turnDirection":"STRAIGHT",
                     "streetName":"Station Road",
                     "distance":38,
                     "cumulativeDistance":38,
                     "skyDirection":330,
                     "skyDirectionDescription":"NorthWest",
                     "cumulativeTravelTime":34,
                     "latitude":51.508385179,
                     "longitude":-0.47326996935000004,
                     "pathAttribute":{
                        "$type":"Tfl.Api.Presentation.Entities.PathAttribute, Tfl.Api.Presentation.Entities"
                     },
                     "descriptionHeading":"Continue along ",
                     "trackType":"None"
                  },
                  {
                     "$type":"Tfl.Api.Presentation.Entities.InstructionStep, Tfl.Api.Presentation.Entities",
                     "description":"on to Warwick Road, continue for 159 metres",
                     "turnDirection":"RIGHT",
                     "streetName":"Warwick Road",
                     "distance":159,
                     "cumulativeDistance":197,
                     "skyDirection":423,
                     "skyDirectionDescription":"North",
                     "cumulativeTravelTime":178,
                     "latitude":51.50865089955,
                     "longitude":-0.47365015866000004,
                     "pathAttribute":{
                        "$type":"Tfl.Api.Presentation.Entities.PathAttribute, Tfl.Api.Presentation.Entities"
                     },
                     "descriptionHeading":"Turn right",
                     "trackType":"None"
                  }
               ]
            },
            "obstacles":[
               {
                  "$type":"Tfl.Api.Presentation.Entities.JourneyPlanner.Obstacle, Tfl.Api.Presentation.Entities",
                  "type":"WALKWAY",
                  "incline":"LEVEL",
                  "stopId":1006815,
                  "position":"IDEST"
               },
               {
                  "$type":"Tfl.Api.Presentation.Entities.JourneyPlanner.Obstacle, Tfl.Api.Presentation.Entities",
                  "type":"STAIRS",
                  "incline":"UP",
                  "stopId":1001325,
                  "position":"IDEST"
               }
            ],
            "departureTime":"2020-06-18T11:28:00",
            "arrivalTime":"2020-06-18T11:35:00",
            "departurePoint":{
               "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
               "naptanId":"490G00006815",
               "platformName":"",
               "stopLetter":"H",
               "icsCode":"1006815",
               "commonName":"Ferrers Avenue",
               "placeType":"StopPoint",
               "additionalProperties":[

               ],
               "lat":51.50843255726,
               "lon":-0.47345571526999997
            },
            "arrivalPoint":{
               "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
               "naptanId":"910GWDRYTON",
               "platformName":"",
               "icsCode":"1001325",
               "commonName":"West Drayton Rail Station",
               "placeType":"StopPoint",
               "additionalProperties":[

               ],
               "lat":51.50985530072,
               "lon":-0.47222651176
            },
            "path":{
               "$type":"Tfl.Api.Presentation.Entities.JourneyPlanner.Path, Tfl.Api.Presentation.Entities",
               "lineString":"[[51.508385179, -0.47326996935],[51.50835082807, -0.47338123114],[51.50865089955, -0.47365015866],[51.50883177949, -0.47303889073],[51.50907427487, -0.47301637402],[51.50909056377, -0.47288613796],[51.50914729241, -0.47240870516],[51.50952423621, -0.47235286772],[51.50962348214, -0.47237836907],[51.50986410137, -0.47221180698],[51.50978339639, -0.47223045445]]",
               "stopPoints":[
                  {
                     "$type":"Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                     "name":"West Drayton Station",
                     "uri":"/StopPoint/",
                     "type":"StopPoint",
                     "routeType":"Unknown",
                     "status":"Unknown"
                  }
               ],
               "elevation":[

               ]
            },
            "routeOptions":[
               {
                  "$type":"Tfl.Api.Presentation.Entities.JourneyPlanner.RouteOption, Tfl.Api.Presentation.Entities",
                  "name":"",
                  "directions":[
                     ""
                  ]
               }
            ],
            "mode":{
               "$type":"Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
               "id":"walking",
               "name":"walking",
               "type":"Mode",
               "routeType":"Unknown",
               "status":"Unknown"
            },
            "disruptions":[
               {
                  "$type":"Tfl.Api.Presentation.Entities.Disruption, Tfl.Api.Presentation.Entities",
                  "category":"PlannedWork",
                  "type":"stopBlocking",
                  "categoryDescription":"PlannedWork",
                  "description":"WEST DRAYTON STATION: Until September 2020, buses on Routes 222 350 698 U1 U3 and U5 are unable to serve stops in Station Approach outside the station due to poor road conditions. Please use other stops in Yiewsley High Street, Station Road or Horton Road (350) instead.",
                  "summary":"WEST DRAYTON STATION NO20/231C",
                  "additionalInfo":"",
                  "created":"2020-02-10T10:25:00",
                  "lastUpdate":"2020-04-29T14:16:00"
               },
               {
                  "$type":"Tfl.Api.Presentation.Entities.Disruption, Tfl.Api.Presentation.Entities",
                  "category":"Undefined",
                  "type":"stopBlocking",
                  "categoryDescription":"Undefined",
                  "description":"Bus stop closed until Sep 2020\\nPlease use stops on High Street \\nor Station Rd to board your bus \\n",
                  "summary":"",
                  "additionalInfo":"",
                  "created":"2020-06-13T04:06:00",
                  "lastUpdate":"2020-06-13T04:06:00"
               },
               {
                  "$type":"Tfl.Api.Presentation.Entities.Disruption, Tfl.Api.Presentation.Entities",
                  "category":"Undefined",
                  "type":"stopBlocking",
                  "categoryDescription":"Undefined",
                  "description":"Bus stop closed until Sep 2020\\nPlease use stops on High Street \\nor Station Rd to board your bus \\n",
                  "summary":"",
                  "additionalInfo":"",
                  "created":"2020-06-13T04:06:00",
                  "lastUpdate":"2020-06-13T04:06:00"
               }
            ],
            "plannedWorks":[

            ],
            "isDisrupted":true,
            "hasFixedLocations":true
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.JourneyPlanner.Leg, Tfl.Api.Presentation.Entities",
            "duration":11,
            "instruction":{
               "$type":"Tfl.Api.Presentation.Entities.Instruction, Tfl.Api.Presentation.Entities",
               "summary":"Great Western Railway to Ealing Broadway",
               "detailed":"Great Western Railway towards London Paddington",
               "steps":[

               ]
            },
            "obstacles":[
               {
                  "$type":"Tfl.Api.Presentation.Entities.JourneyPlanner.Obstacle, Tfl.Api.Presentation.Entities",
                  "type":"STAIRS",
                  "incline":"UP",
                  "stopId":1000062,
                  "position":"AFTER"
               },
               {
                  "$type":"Tfl.Api.Presentation.Entities.JourneyPlanner.Obstacle, Tfl.Api.Presentation.Entities",
                  "type":"STAIRS",
                  "incline":"DOWN",
                  "stopId":1000062,
                  "position":"AFTER"
               }
            ],
            "departureTime":"2020-06-18T11:40:00",
            "arrivalTime":"2020-06-18T11:51:00",
            "departurePoint":{
               "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
               "naptanId":"910GWDRYTON",
               "platformName":"",
               "icsCode":"1001325",
               "commonName":"West Drayton Rail Station",
               "placeType":"StopPoint",
               "additionalProperties":[

               ],
               "lat":51.50985530072,
               "lon":-0.47222651176
            },
            "arrivalPoint":{
               "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
               "naptanId":"910GEALINGB",
               "platformName":"",
               "icsCode":"1000062",
               "commonName":"Ealing Broadway Rail Station",
               "placeType":"StopPoint",
               "additionalProperties":[

               ],
               "lat":51.514962021509994,
               "lon":-0.30212193606
            },
            "path":{
               "$type":"Tfl.Api.Presentation.Entities.JourneyPlanner.Path, Tfl.Api.Presentation.Entities",
               "lineString":"[[51.50978298174, -0.4722218708],[51.50974648456, -0.47146640148],[51.5088243757, -0.46077614831],[51.50860280657, -0.45896795036],[51.5070629999, -0.44857296773],[51.50649170117, -0.4454943522],[51.50550379626, -0.44084501802],[51.50497131758, -0.43799581657],[51.50420339534, -0.43300785127],[51.50356429212, -0.42758336343],[51.50309156684, -0.42251348671],[51.50297859572, -0.42019691245],[51.50297859572, -0.42019691245],[51.50288038984, -0.41818388332],[51.50282236696, -0.41521778726],[51.50284121687, -0.41328642298],[51.50297728537, -0.40674031253],[51.50311435638, -0.40359450385],[51.5032777175, -0.40040452936],[51.50336926524, -0.39920542042],[51.50372413503, -0.3955620205],[51.5040412559, -0.39245301312],[51.50539598026, -0.38306822081],[51.50600104223, -0.37869518395],[51.50603997483, -0.37841561732],[51.50603997483, -0.37841561732],[51.50759564059, -0.36724039139],[51.50940865654, -0.35476818814],[51.51031311001, -0.34874073797],[51.51097247678, -0.34384599341],[51.51138216993, -0.34102097272],[51.51172206797, -0.33846774996],[51.51172206797, -0.33846774996],[51.5119836105, -0.33650280152],[51.51202405431, -0.33618427954],[51.51206367983, -0.33580814151],[51.51271365249, -0.3296595542],[51.51317751167, -0.32435349796],[51.51351000371, -0.32013023447],[51.51351000371, -0.32013023447],[51.51354277239, -0.31971390348],[51.51386217194, -0.31439856382],[51.51424637676, -0.30860514891],[51.51452047934, -0.30454518289],[51.51465246286, -0.30247933875],[51.5146889072, -0.30174877791]]",
               "stopPoints":[
                  {
                     "$type":"Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                     "id":"910GHAYESAH",
                     "name":"Hayes & Harlington Rail Station",
                     "uri":"/StopPoint/910GHAYESAH",
                     "type":"StopPoint",
                     "routeType":"Unknown",
                     "status":"Unknown"
                  },
                  {
                     "$type":"Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                     "id":"910GEALINGB",
                     "name":"Ealing Broadway Rail Station",
                     "uri":"/StopPoint/910GEALINGB",
                     "type":"StopPoint",
                     "routeType":"Unknown",
                     "status":"Unknown"
                  }
               ],
               "elevation":[

               ]
            },
            "routeOptions":[
               {
                  "$type":"Tfl.Api.Presentation.Entities.JourneyPlanner.RouteOption, Tfl.Api.Presentation.Entities",
                  "name":"Great Western Railway",
                  "directions":[
                     "London Paddington Rail Station"
                  ],
                  "lineIdentifier":{
                     "$type":"Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                     "id":"great-western-railway",
                     "name":"Great Western Railway",
                     "uri":"/Line/great-western-railway",
                     "type":"Line",
                     "crowding":{
                        "$type":"Tfl.Api.Presentation.Entities.Crowding, Tfl.Api.Presentation.Entities"
                     },
                     "routeType":"Unknown",
                     "status":"Unknown"
                  }
               }
            ],
            "mode":{
               "$type":"Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
               "id":"national-rail",
               "name":"national-rail",
               "type":"Mode",
               "routeType":"Unknown",
               "status":"Unknown"
            },
            "disruptions":[
               {
                  "$type":"Tfl.Api.Presentation.Entities.Disruption, Tfl.Api.Presentation.Entities",
                  "category":"RealTime",
                  "type":"lineInfo",
                  "categoryDescription":"RealTime",
                  "description":"CHANGES TO GWR SERVICES FROM MONDAY 18 MAY: From Monday 23 March, a reduced service will operate. The Night Riviera sleeper service between London Paddington and Penzance will not operate until further notice. West Ealing to Greenford services operate hourly on Monday to Saturday and do not run on Sundays as per the normal service.",
                  "summary":"",
                  "additionalInfo":"For more information, please visit the <a href=\"https://www.gwr.com/travel-updates/live-network-updates/disruption-information\">GWR</a>&nbsp;website",
                  "created":"2020-03-24T09:55:00",
                  "lastUpdate":"2020-05-15T12:25:00"
               },
               {
                  "$type":"Tfl.Api.Presentation.Entities.Disruption, Tfl.Api.Presentation.Entities",
                  "category":"PlannedWork",
                  "type":"stopBlocking",
                  "categoryDescription":"PlannedWork",
                  "description":"WEST DRAYTON STATION: Until September 2020, buses on Routes 222 350 698 U1 U3 and U5 are unable to serve stops in Station Approach outside the station due to poor road conditions. Please use other stops in Yiewsley High Street, Station Road or Horton Road (350) instead.",
                  "summary":"WEST DRAYTON STATION NO20/231C",
                  "additionalInfo":"",
                  "created":"2020-02-10T10:25:00",
                  "lastUpdate":"2020-04-29T14:16:00"
               },
               {
                  "$type":"Tfl.Api.Presentation.Entities.Disruption, Tfl.Api.Presentation.Entities",
                  "category":"Undefined",
                  "type":"stopBlocking",
                  "categoryDescription":"Undefined",
                  "description":"Bus stop closed until Sep 2020\\nPlease use stops on High Street \\nor Station Rd to board your bus \\n",
                  "summary":"",
                  "additionalInfo":"",
                  "created":"2020-06-13T04:06:00",
                  "lastUpdate":"2020-06-13T04:06:00"
               },
               {
                  "$type":"Tfl.Api.Presentation.Entities.Disruption, Tfl.Api.Presentation.Entities",
                  "category":"Undefined",
                  "type":"stopBlocking",
                  "categoryDescription":"Undefined",
                  "description":"Bus stop closed until Sep 2020\\nPlease use stops on High Street \\nor Station Rd to board your bus \\n",
                  "summary":"",
                  "additionalInfo":"",
                  "created":"2020-06-13T04:06:00",
                  "lastUpdate":"2020-06-13T04:06:00"
               },
               {
                  "$type":"Tfl.Api.Presentation.Entities.Disruption, Tfl.Api.Presentation.Entities",
                  "category":"RealTime",
                  "type":"stopInfo",
                  "categoryDescription":"RealTime",
                  "description":"WEST DRAYTON STATION: The ticket office has reduced opening hours to protect customers and staff. Weekdays 06:30-10:30 & 15:00-19:00. Saturday 08:00-16:00. Sunday 09:30-15:30",
                  "summary":"",
                  "additionalInfo":"",
                  "created":"2020-05-04T18:41:00",
                  "lastUpdate":"2020-05-04T18:42:00"
               },
               {
                  "$type":"Tfl.Api.Presentation.Entities.Disruption, Tfl.Api.Presentation.Entities",
                  "category":"RealTime",
                  "type":"stopInfo",
                  "categoryDescription":"RealTime",
                  "description":"EALING BROADWAY STATION: The ticket office has reduced opening hours to protect customers and staff. Weekdays 05:35-23:25. Saturday 06:00-18:00. Sunday 07:00-20:30",
                  "summary":"",
                  "additionalInfo":"",
                  "created":"2020-05-04T18:20:00",
                  "lastUpdate":"2020-05-04T18:24:00"
               }
            ],
            "plannedWorks":[

            ],
            "isDisrupted":true,
            "hasFixedLocations":true
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.JourneyPlanner.Leg, Tfl.Api.Presentation.Entities",
            "duration":9,
            "instruction":{
               "$type":"Tfl.Api.Presentation.Entities.Instruction, Tfl.Api.Presentation.Entities",
               "summary":"Central line to White City",
               "detailed":"Central line towards Hainault",
               "steps":[

               ]
            },
            "obstacles":[

            ],
            "departureTime":"2020-06-18T12:01:00",
            "arrivalTime":"2020-06-18T12:10:00",
            "departurePoint":{
               "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
               "naptanId":"940GZZLUEBY",
               "platformName":"",
               "icsCode":"1000062",
               "commonName":"Ealing Broadway Underground Station",
               "placeType":"StopPoint",
               "additionalProperties":[

               ],
               "lat":51.514962021509994,
               "lon":-0.30212193606
            },
            "arrivalPoint":{
               "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
               "naptanId":"940GZZLUWCY",
               "platformName":"",
               "icsCode":"1000269",
               "commonName":"White City Underground Station",
               "placeType":"StopPoint",
               "additionalProperties":[

               ],
               "lat":51.51204601504,
               "lon":-0.22422122813999998
            },
            "path":{
               "$type":"Tfl.Api.Presentation.Entities.JourneyPlanner.Path, Tfl.Api.Presentation.Entities",
               "lineString":"[[51.51520181689, -0.3014499573],[51.51521182831, -0.29516588096],[51.51507438402, -0.29189941031],[51.5150260927, -0.2885863798],[51.51507801835, -0.28721525997],[51.51516383582, -0.28631847323],[51.51534871847, -0.28543237569],[51.51562388975, -0.28457170394],[51.51592019071, -0.28392641689],[51.51781304001, -0.28116000174],[51.51819013421, -0.28063760282],[51.51819013421, -0.28063760282],[51.51971671151, -0.27852267072],[51.52263331871, -0.27444862894],[51.52419163228, -0.27218418879],[51.52446259902, -0.27165497989],[51.52481062689, -0.27086336771],[51.52504096419, -0.27001854147],[51.52508228848, -0.26977191102],[51.52515764864, -0.26939424967],[51.52522253202, -0.2689160752],[51.52522322618, -0.26835384078],[51.52518047028, -0.26789416423],[51.52498864193, -0.26647430682],[51.52488147676, -0.26591617259],[51.52457108449, -0.26438551709],[51.52447417613, -0.26391349478],[51.52397056394, -0.26148206307],[51.52361749055, -0.2597087199],[51.52361749055, -0.2597087199],[51.52326127212, -0.25791974413],[51.52293173117, -0.25631785261],[51.52257007747, -0.2549766776],[51.52237019843, -0.25423475294],[51.52211767819, -0.25358133646],[51.52179368551, -0.25295949144],[51.52103100332, -0.2518643629],[51.51973419697, -0.25053028517],[51.51729676551, -0.24808697043],[51.51711074932, -0.24785435522],[51.51711074932, -0.24785435522],[51.5166369885, -0.24726192337],[51.51626824235, -0.24665632781],[51.51595147789, -0.24591903085],[51.51547841164, -0.24435182264],[51.51537157395, -0.24382266711],[51.51527601991, -0.24284629259],[51.51526112671, -0.24185240386],[51.51532667783, -0.24082659147],[51.51603788428, -0.23310278488],[51.51611104305, -0.23199017013],[51.51612323639, -0.23100962884],[51.51608215073, -0.23007439051],[51.51595734613, -0.22895503511],[51.5157895538, -0.22796706824],[51.51555797235, -0.22692393499],[51.51521744684, -0.22581298249],[51.51502370565, -0.22548902404],[51.51470414386, -0.22516995878],[51.51434972264, -0.22492431423],[51.51358870024, -0.22455036123],[51.51310099726, -0.22441079283],[51.51200243291, -0.22430815205]]",
               "stopPoints":[
                  {
                     "$type":"Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                     "id":"940GZZLUWTA",
                     "name":"West Acton Underground Station",
                     "uri":"/StopPoint/940GZZLUWTA",
                     "type":"StopPoint",
                     "routeType":"Unknown",
                     "status":"Unknown"
                  },
                  {
                     "$type":"Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                     "id":"940GZZLUNAN",
                     "name":"North Acton Underground Station",
                     "uri":"/StopPoint/940GZZLUNAN",
                     "type":"StopPoint",
                     "routeType":"Unknown",
                     "status":"Unknown"
                  },
                  {
                     "$type":"Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                     "id":"940GZZLUEAN",
                     "name":"East Acton Underground Station",
                     "uri":"/StopPoint/940GZZLUEAN",
                     "type":"StopPoint",
                     "routeType":"Unknown",
                     "status":"Unknown"
                  },
                  {
                     "$type":"Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                     "id":"940GZZLUWCY",
                     "name":"White City Underground Station",
                     "uri":"/StopPoint/940GZZLUWCY",
                     "type":"StopPoint",
                     "routeType":"Unknown",
                     "status":"Unknown"
                  }
               ],
               "elevation":[

               ]
            },
            "routeOptions":[
               {
                  "$type":"Tfl.Api.Presentation.Entities.JourneyPlanner.RouteOption, Tfl.Api.Presentation.Entities",
                  "name":"Central",
                  "directions":[
                     "Hainault Underground Station"
                  ],
                  "lineIdentifier":{
                     "$type":"Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                     "id":"central",
                     "name":"Central",
                     "uri":"/Line/central",
                     "type":"Line",
                     "crowding":{
                        "$type":"Tfl.Api.Presentation.Entities.Crowding, Tfl.Api.Presentation.Entities"
                     },
                     "routeType":"Unknown",
                     "status":"Unknown"
                  }
               }
            ],
            "mode":{
               "$type":"Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
               "id":"tube",
               "name":"tube",
               "type":"Mode",
               "routeType":"Unknown",
               "status":"Unknown"
            },
            "disruptions":[
               {
                  "$type":"Tfl.Api.Presentation.Entities.Disruption, Tfl.Api.Presentation.Entities",
                  "category":"RealTime",
                  "type":"stopInfo",
                  "categoryDescription":"RealTime",
                  "description":"Most Tube station ticket machines are only accepting bank cards. You can top up using your contactless and Oyster account, the TfL Oyster and contactless app or an Oyster ticket stop. Ticket machines at all London Overground and DLR stations are still accepting cash.",
                  "summary":"",
                  "additionalInfo":"<a href=\"http://content.tfl.gov.uk/stations-accepting-cash.pdf\">Some stations</a>&nbsp;are still accepting cash.",
                  "created":"2020-06-10T16:39:00",
                  "lastUpdate":"2020-06-11T09:51:00"
               },
               {
                  "$type":"Tfl.Api.Presentation.Entities.Disruption, Tfl.Api.Presentation.Entities",
                  "category":"RealTime",
                  "type":"stopInfo",
                  "categoryDescription":"RealTime",
                  "description":"Most Tube station ticket machines are only accepting bank cards. You can top up using your contactless and Oyster account, the TfL Oyster and contactless app or an Oyster ticket stop. Ticket machines at all London Overground and DLR stations are still accepting cash.",
                  "summary":"",
                  "additionalInfo":"<a href=\"http://content.tfl.gov.uk/stations-accepting-cash.pdf\">Some stations</a>&nbsp;are still accepting cash",
                  "created":"2020-06-10T17:56:00",
                  "lastUpdate":"2020-06-11T09:50:00"
               }
            ],
            "plannedWorks":[

            ],
            "isDisrupted":true,
            "hasFixedLocations":true
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.JourneyPlanner.Leg, Tfl.Api.Presentation.Entities",
            "duration":8,
            "instruction":{
               "$type":"Tfl.Api.Presentation.Entities.Instruction, Tfl.Api.Presentation.Entities",
               "summary":"Walk to 1 Ring Road, Shepherds Bush",
               "detailed":"Walk to 1 Ring Road, Shepherds Bush",
               "steps":[
                  {
                     "$type":"Tfl.Api.Presentation.Entities.InstructionStep, Tfl.Api.Presentation.Entities",
                     "description":"Wood Lane for 43 metres",
                     "turnDirection":"STRAIGHT",
                     "streetName":"Wood Lane",
                     "distance":43,
                     "cumulativeDistance":43,
                     "skyDirection":529,
                     "skyDirectionDescription":"North",
                     "cumulativeTravelTime":40,
                     "latitude":51.51194819839,
                     "longitude":-0.22488795965,
                     "pathAttribute":{
                        "$type":"Tfl.Api.Presentation.Entities.PathAttribute, Tfl.Api.Presentation.Entities"
                     },
                     "descriptionHeading":"Continue along ",
                     "trackType":"None"
                  },
                  {
                     "$type":"Tfl.Api.Presentation.Entities.InstructionStep, Tfl.Api.Presentation.Entities",
                     "description":"on to Ring Road, continue for 254 metres",
                     "turnDirection":"RIGHT",
                     "streetName":"Ring Road",
                     "distance":254,
                     "cumulativeDistance":297,
                     "skyDirection":259,
                     "skyDirectionDescription":"North",
                     "cumulativeTravelTime":264,
                     "latitude":51.51156000806,
                     "longitude":-0.22478775791,
                     "pathAttribute":{
                        "$type":"Tfl.Api.Presentation.Entities.PathAttribute, Tfl.Api.Presentation.Entities"
                     },
                     "descriptionHeading":"Turn right",
                     "trackType":"None"
                  }
               ]
            },
            "obstacles":[
               {
                  "$type":"Tfl.Api.Presentation.Entities.JourneyPlanner.Obstacle, Tfl.Api.Presentation.Entities",
                  "type":"STAIRS",
                  "incline":"UP",
                  "stopId":1000269,
                  "position":"BEFORE"
               },
               {
                  "$type":"Tfl.Api.Presentation.Entities.JourneyPlanner.Obstacle, Tfl.Api.Presentation.Entities",
                  "type":"STAIRS",
                  "incline":"DOWN",
                  "stopId":1000269,
                  "position":"BEFORE"
               }
            ],
            "departureTime":"2020-06-18T12:10:00",
            "arrivalTime":"2020-06-18T12:18:00",
            "departurePoint":{
               "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
               "naptanId":"940GZZLUWCY",
               "platformName":"",
               "icsCode":"1000269",
               "commonName":"White City Underground Station",
               "placeType":"StopPoint",
               "additionalProperties":[

               ],
               "lat":51.51204601504,
               "lon":-0.22422122813999998
            },
            "arrivalPoint":{
               "$type":"Tfl.Api.Presentation.Entities.Place, Tfl.Api.Presentation.Entities",
               "commonName":"1 Ring Road, Shepherds Bush",
               "placeType":"StopPoint",
               "lat":51.51011546846,
               "lon":-0.22738022563
            },
            "path":{
               "$type":"Tfl.Api.Presentation.Entities.JourneyPlanner.Path, Tfl.Api.Presentation.Entities",
               "lineString":"[[51.51200238775, -0.22430939357],[51.51205565634, -0.22426408776],[51.51196399278, -0.22474323091],[51.51194819839, -0.22488795965],[51.51156000806, -0.22478775791],[51.51152073952, -0.2251639792],[51.51032985383, -0.22728543876],[51.51007973756, -0.22739602336],[51.51011546846, -0.22738022563]]",
               "stopPoints":[

               ],
               "elevation":[

               ]
            },
            "routeOptions":[
               {
                  "$type":"Tfl.Api.Presentation.Entities.JourneyPlanner.RouteOption, Tfl.Api.Presentation.Entities",
                  "name":"",
                  "directions":[
                     ""
                  ]
               }
            ],
            "mode":{
               "$type":"Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
               "id":"walking",
               "name":"walking",
               "type":"Mode",
               "routeType":"Unknown",
               "status":"Unknown"
            },
            "disruptions":[

            ],
            "plannedWorks":[

            ],
            "distance":297,
            "isDisrupted":false,
            "hasFixedLocations":false
         }
      ],
      "fare":{
         "$type":"Tfl.Api.Presentation.Entities.JourneyPlanner.JourneyFare, Tfl.Api.Presentation.Entities",
         "totalCost":300,
         "fares":[
            {
               "$type":"Tfl.Api.Presentation.Entities.JourneyPlanner.Fare, Tfl.Api.Presentation.Entities",
               "lowZone":0,
               "highZone":0,
               "cost":150,
               "isHopperFare":false,
               "peak":0,
               "offPeak":0,
               "taps":[
                  {
                     "$type":"Tfl.Api.Presentation.Entities.JourneyPlanner.FareTap, Tfl.Api.Presentation.Entities",
                     "atcoCode":"490G00004528",
                     "tapDetails":{
                        "$type":"Tfl.Api.Presentation.Entities.JourneyPlanner.FareTapDetails, Tfl.Api.Presentation.Entities",
                        "modeType":"Bus",
                        "validationType":"Entry",
                        "hostDeviceType":"ETM",
                        "busRouteId":"u3",
                        "nationalLocationCode":0,
                        "tapTimestamp":"2020-06-18T11:15:00"
                     }
                  }
               ]
            },
            {
               "$type":"Tfl.Api.Presentation.Entities.JourneyPlanner.Fare, Tfl.Api.Presentation.Entities",
               "lowZone":2,
               "highZone":6,
               "cost":150,
               "chargeProfileName":"Standard peak/off peak",
               "isHopperFare":false,
               "chargeLevel":"Off Peak",
               "peak":280,
               "offPeak":150,
               "taps":[
                  {
                     "$type":"Tfl.Api.Presentation.Entities.JourneyPlanner.FareTap, Tfl.Api.Presentation.Entities",
                     "atcoCode":"910GWDRYTON",
                     "tapDetails":{
                        "$type":"Tfl.Api.Presentation.Entities.JourneyPlanner.FareTapDetails, Tfl.Api.Presentation.Entities",
                        "modeType":"Rail",
                        "validationType":"None",
                        "hostDeviceType":"Gate",
                        "nationalLocationCode":3174,
                        "tapTimestamp":"2020-06-18T11:40:00"
                     }
                  },
                  {
                     "$type":"Tfl.Api.Presentation.Entities.JourneyPlanner.FareTap, Tfl.Api.Presentation.Entities",
                     "atcoCode":"940GZZLUWCY",
                     "tapDetails":{
                        "$type":"Tfl.Api.Presentation.Entities.JourneyPlanner.FareTapDetails, Tfl.Api.Presentation.Entities",
                        "modeType":"Rail",
                        "validationType":"None",
                        "hostDeviceType":"Gate",
                        "nationalLocationCode":764,
                        "tapTimestamp":"2020-06-18T12:10:00"
                     }
                  }
               ]
            }
         ],
         "caveats":[
            {
               "$type":"Tfl.Api.Presentation.Entities.JourneyPlanner.FareCaveat, Tfl.Api.Presentation.Entities",
               "text":"<p>Fares between two stations may vary depending on the direction of travel, time of day and day of the week.</p><p>We charge higher fares at the busiest times of the day (usually between 06:30 and 09:30, and between 16:00 and 19:00, Monday to Friday).</p><p>When you pay as you go, you must touch your contactless or Oyster card on a yellow reader at the start and end of your journey.</p><p>Some journeys are charged via Zone 1 regardless of the route taken.</p><p>If your journey avoids Zone 1 and you see a pink card reader when changing trains, touch your contactless or Oyster card on it to pay the right fare.</p>",
               "type":"allRailModes"
            },
            {
               "$type":"Tfl.Api.Presentation.Entities.JourneyPlanner.FareCaveat, Tfl.Api.Presentation.Entities",
               "text":"The price shown is a single adult pay as you go fare.",
               "type":"generic"
            }
         ]
      }
   },
   {
      "$type":"Tfl.Api.Presentation.Entities.JourneyPlanner.Journey, Tfl.Api.Presentation.Entities",
      "startDateTime":"2020-06-18T11:21:00",
      "duration":64,
      "arrivalDateTime":"2020-06-18T12:26:00",
      "legs":[
         {
            "$type":"Tfl.Api.Presentation.Entities.JourneyPlanner.Leg, Tfl.Api.Presentation.Entities",
            "duration":11,
            "instruction":{
               "$type":"Tfl.Api.Presentation.Entities.Instruction, Tfl.Api.Presentation.Entities",
               "summary":"Walk to Cleveland Road (UB8)",
               "detailed":"Walk to Cleveland Road (UB8)",
               "steps":[
                  {
                     "$type":"Tfl.Api.Presentation.Entities.InstructionStep, Tfl.Api.Presentation.Entities",
                     "description":"Topping Lane for 194 metres",
                     "turnDirection":"STRAIGHT",
                     "streetName":"Topping Lane",
                     "distance":194,
                     "cumulativeDistance":194,
                     "skyDirection":360,
                     "skyDirectionDescription":"North",
                     "cumulativeTravelTime":175,
                     "latitude":51.53387973946,
                     "longitude":-0.47894856502,
                     "pathAttribute":{
                        "$type":"Tfl.Api.Presentation.Entities.PathAttribute, Tfl.Api.Presentation.Entities"
                     },
                     "descriptionHeading":"Continue along ",
                     "trackType":"None"
                  },
                  {
                     "$type":"Tfl.Api.Presentation.Entities.InstructionStep, Tfl.Api.Presentation.Entities",
                     "description":"on to Cleveland Road, continue for 408 metres",
                     "turnDirection":"RIGHT",
                     "streetName":"Cleveland Road",
                     "distance":408,
                     "cumulativeDistance":602,
                     "skyDirection":539,
                     "skyDirectionDescription":"North",
                     "cumulativeTravelTime":542,
                     "latitude":51.53392435343,
                     "longitude":-0.47614998488,
                     "pathAttribute":{
                        "$type":"Tfl.Api.Presentation.Entities.PathAttribute, Tfl.Api.Presentation.Entities"
                     },
                     "descriptionHeading":"Turn right",
                     "trackType":"None"
                  },
                  {
                     "$type":"Tfl.Api.Presentation.Entities.InstructionStep, Tfl.Api.Presentation.Entities",
                     "description":"on to Station Road, continue for 97 metres",
                     "turnDirection":"RIGHT",
                     "streetName":"Station Road",
                     "distance":97,
                     "cumulativeDistance":699,
                     "skyDirection":277,
                     "skyDirectionDescription":"North",
                     "cumulativeTravelTime":630,
                     "latitude":51.53025809044,
                     "longitude":-0.4763444779,
                     "pathAttribute":{
                        "$type":"Tfl.Api.Presentation.Entities.PathAttribute, Tfl.Api.Presentation.Entities"
                     },
                     "descriptionHeading":"Turn right",
                     "trackType":"None"
                  }
               ]
            },
            "obstacles":[

            ],
            "departureTime":"2020-06-18T11:21:00",
            "arrivalTime":"2020-06-18T11:32:00",
            "departurePoint":{
               "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
               "platformName":"",
               "icsCode":"99999997",
               "commonName":"1 Topping Lane, Uxbridge",
               "placeType":"StopPoint",
               "additionalProperties":[

               ],
               "lat":51.53387973946,
               "lon":-0.47894856502
            },
            "arrivalPoint":{
               "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
               "naptanId":"490G00005397",
               "platformName":"BP",
               "stopLetter":"BP",
               "icsCode":"1005397",
               "commonName":"Cleveland Road",
               "placeType":"StopPoint",
               "additionalProperties":[

               ],
               "lat":51.53031480612,
               "lon":-0.47794285667
            },
            "path":{
               "$type":"Tfl.Api.Presentation.Entities.JourneyPlanner.Path, Tfl.Api.Presentation.Entities",
               "lineString":"[[51.53387973946, -0.47894856502],[51.53387973946, -0.47894856502],[51.53392435343, -0.47614998488],[51.53294426201, -0.47615387521],[51.53253960443, -0.47615296906],[51.53234186334, -0.47615957154],[51.53214393506, -0.47615176275],[51.53087678138, -0.47620848756],[51.53025809044, -0.4763444779],[51.53031107743, -0.47696263425],[51.53031313514, -0.47712115111],[51.53030770061, -0.47739525284],[51.53030320036, -0.47774140764]]",
               "stopPoints":[

               ],
               "elevation":[

               ]
            },
            "routeOptions":[
               {
                  "$type":"Tfl.Api.Presentation.Entities.JourneyPlanner.RouteOption, Tfl.Api.Presentation.Entities",
                  "name":"",
                  "directions":[
                     ""
                  ]
               }
            ],
            "mode":{
               "$type":"Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
               "id":"walking",
               "name":"walking",
               "type":"Mode",
               "routeType":"Unknown",
               "status":"Unknown"
            },
            "disruptions":[

            ],
            "plannedWorks":[

            ],
            "distance":699,
            "isDisrupted":false,
            "hasFixedLocations":true
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.JourneyPlanner.Leg, Tfl.Api.Presentation.Entities",
            "duration":11,
            "instruction":{
               "$type":"Tfl.Api.Presentation.Entities.Instruction, Tfl.Api.Presentation.Entities",
               "summary":"U5 bus to Yiewsley High Street",
               "detailed":"U5 bus towards Hayes & Harlington Station",
               "steps":[

               ]
            },
            "obstacles":[

            ],
            "departureTime":"2020-06-18T11:32:00",
            "arrivalTime":"2020-06-18T11:43:00",
            "departurePoint":{
               "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
               "naptanId":"490G00005397",
               "platformName":"BP",
               "stopLetter":"BP",
               "icsCode":"1005397",
               "commonName":"Cleveland Road",
               "placeType":"StopPoint",
               "additionalProperties":[

               ],
               "lat":51.53031480612,
               "lon":-0.47794285667
            },
            "arrivalPoint":{
               "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
               "naptanId":"490G00015005",
               "platformName":"B",
               "stopLetter":"B",
               "icsCode":"1015005",
               "commonName":"Yiewsley High Street",
               "placeType":"StopPoint",
               "additionalProperties":[

               ],
               "lat":51.512684363679995,
               "lon":-0.47265068303999996
            },
            "path":{
               "$type":"Tfl.Api.Presentation.Entities.JourneyPlanner.Path, Tfl.Api.Presentation.Entities",
               "lineString":"[[51.53030734658, -0.47773591374],[51.53030770061, -0.47739525284],[51.53031313514, -0.47712115111],[51.53031107743, -0.47696263425],[51.53025809044, -0.4763444779],[51.53027400816, -0.47618536113],[51.53009967518, -0.47591726224],[51.52930715872, -0.47536773253],[51.52930715872, -0.47536773253],[51.52924673004, -0.47532583222],[51.52889263049, -0.47506374843],[51.52866567693, -0.47489833454],[51.5281391138, -0.474512275],[51.52799107393, -0.47439136122],[51.52799107393, -0.47439136122],[51.52700302756, -0.47358438199],[51.52695602403, -0.47342737985],[51.52692379251, -0.47233285691],[51.52693876659, -0.47210170288],[51.52701389655, -0.47090909286],[51.52701389655, -0.47090909286],[51.52705797909, -0.47020923683],[51.52712910007, -0.46945722807],[51.52731081076, -0.46753381664],[51.52735572509, -0.46715233197],[51.52735572509, -0.46715233197],[51.5274079375, -0.46670884601],[51.52781298771, -0.46467698703],[51.52770374327, -0.46388777821],[51.52757319129, -0.46353177114],[51.5273302493, -0.46283356737],[51.52704720552, -0.46207363604],[51.52704720552, -0.46207363604],[51.52702268589, -0.46200780544],[51.52681814434, -0.46149572882],[51.52679023496, -0.4614245906],[51.52676232553, -0.46135345247],[51.52618426017, -0.45978722269],[51.52607852796, -0.45952059341],[51.52607852796, -0.45952059341],[51.52584015509, -0.45891948875],[51.52484388409, -0.45837651472],[51.52450564084, -0.45795548536],[51.52379149173, -0.45698498448],[51.52333886161, -0.45675523311],[51.52305100929, -0.45666401082],[51.52305100929, -0.45666401082],[51.52214692673, -0.45637750852],[51.52180385979, -0.45627379406],[51.52112311075, -0.45579232166],[51.52085917609, -0.45558434038],[51.52085917609, -0.45558434038],[51.52036893677, -0.45519803744],[51.52021284066, -0.45563573004],[51.51989324932, -0.4559492257],[51.51972418073, -0.45608466508],[51.51900344525, -0.45667519526],[51.51900344525, -0.45667519526],[51.51884345114, -0.45680628254],[51.51867324443, -0.45685527469],[51.51852139305, -0.45693247248],[51.51851202587, -0.4569039627],[51.51843917294, -0.45683435901],[51.51827852289, -0.45692626691],[51.51830009949, -0.45719938666],[51.51848800859, -0.4578128034],[51.51851034057, -0.45814355195],[51.51835868088, -0.45960439785],[51.51799563273, -0.46140385717],[51.51783837961, -0.46175506661],[51.51782078104, -0.46178448534],[51.51779551653, -0.46191505283],[51.51781405958, -0.46195766705],[51.5177128111, -0.46246552915],[51.517505919, -0.46332534682],[51.517505919, -0.46332534682],[51.51736316811, -0.4639185817],[51.51733368981, -0.46510142162],[51.5174907434, -0.46679685657],[51.51721186304, -0.46885282952],[51.51718628023, -0.47033819852],[51.51718872218, -0.4705254822],[51.51713906295, -0.47090073169],[51.51713906295, -0.47090073169],[51.5170986777, -0.4712058951],[51.51679234854, -0.47185030529],[51.51644743641, -0.47229422247],[51.51592707097, -0.47307548437],[51.5158838173, -0.47320664147],[51.51557073749, -0.47402419293],[51.515509881, -0.47418476063],[51.5153623266, -0.47459323086],[51.51503004717, -0.4742540065],[51.51503004717, -0.4742540065],[51.51495223476, -0.4741745686],[51.51447959857, -0.47378682776],[51.51412568297, -0.47353924382],[51.51399872275, -0.47345701713],[51.51357140049, -0.4730965997],[51.51327103788, -0.47281841214],[51.51290064428, -0.47268668412],[51.51241381872, -0.47256499102]]",
               "stopPoints":[
                  {
                     "$type":"Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                     "id":"490G00005286",
                     "name":"Huxley Close",
                     "uri":"/StopPoint/490G00005286",
                     "type":"StopPoint",
                     "routeType":"Unknown",
                     "status":"Unknown"
                  },
                  {
                     "$type":"Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                     "id":"490G00012757",
                     "name":"St Laurence Church",
                     "uri":"/StopPoint/490G00012757",
                     "type":"StopPoint",
                     "routeType":"Unknown",
                     "status":"Unknown"
                  },
                  {
                     "$type":"Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                     "id":"490G00010994",
                     "name":"Pield Heath",
                     "uri":"/StopPoint/490G00010994",
                     "type":"StopPoint",
                     "routeType":"Unknown",
                     "status":"Unknown"
                  },
                  {
                     "$type":"Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                     "id":"490G00015584",
                     "name":"Peel Way",
                     "uri":"/StopPoint/490G00015584",
                     "type":"StopPoint",
                     "routeType":"Unknown",
                     "status":"Unknown"
                  },
                  {
                     "$type":"Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                     "id":"490G00008225",
                     "name":"Hillingdon Hospital",
                     "uri":"/StopPoint/490G00008225",
                     "type":"StopPoint",
                     "routeType":"Unknown",
                     "status":"Unknown"
                  },
                  {
                     "$type":"Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                     "id":"490G00005477",
                     "name":"Colham Road",
                     "uri":"/StopPoint/490G00005477",
                     "type":"StopPoint",
                     "routeType":"Unknown",
                     "status":"Unknown"
                  },
                  {
                     "$type":"Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                     "id":"490G00005478",
                     "name":"Violet Avenue",
                     "uri":"/StopPoint/490G00005478",
                     "type":"StopPoint",
                     "routeType":"Unknown",
                     "status":"Unknown"
                  },
                  {
                     "$type":"Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                     "id":"490G00003823",
                     "name":"Moorcroft Lane",
                     "uri":"/StopPoint/490G00003823",
                     "type":"StopPoint",
                     "routeType":"Unknown",
                     "status":"Unknown"
                  },
                  {
                     "$type":"Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                     "id":"490G00010843",
                     "name":"Park View Road",
                     "uri":"/StopPoint/490G00010843",
                     "type":"StopPoint",
                     "routeType":"Unknown",
                     "status":"Unknown"
                  },
                  {
                     "$type":"Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                     "id":"490G00003348",
                     "name":"Apple Tree Avenue",
                     "uri":"/StopPoint/490G00003348",
                     "type":"StopPoint",
                     "routeType":"Unknown",
                     "status":"Unknown"
                  },
                  {
                     "$type":"Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                     "id":"490G00010663",
                     "name":"Otterfield Road",
                     "uri":"/StopPoint/490G00010663",
                     "type":"StopPoint",
                     "routeType":"Unknown",
                     "status":"Unknown"
                  },
                  {
                     "$type":"Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                     "id":"490G00015006",
                     "name":"Yiewsley Library",
                     "uri":"/StopPoint/490G00015006",
                     "type":"StopPoint",
                     "routeType":"Unknown",
                     "status":"Unknown"
                  },
                  {
                     "$type":"Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                     "id":"490G00015005",
                     "name":"Yiewsley High Street",
                     "uri":"/StopPoint/490G00015005",
                     "type":"StopPoint",
                     "routeType":"Unknown",
                     "status":"Unknown"
                  }
               ],
               "elevation":[

               ]
            },
            "routeOptions":[
               {
                  "$type":"Tfl.Api.Presentation.Entities.JourneyPlanner.RouteOption, Tfl.Api.Presentation.Entities",
                  "name":"U5",
                  "directions":[
                     "Hayes & Harlington Station"
                  ],
                  "lineIdentifier":{
                     "$type":"Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                     "id":"u5",
                     "name":"U5",
                     "uri":"/Line/u5",
                     "type":"Line",
                     "crowding":{
                        "$type":"Tfl.Api.Presentation.Entities.Crowding, Tfl.Api.Presentation.Entities"
                     },
                     "routeType":"Unknown",
                     "status":"Unknown"
                  }
               }
            ],
            "mode":{
               "$type":"Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
               "id":"bus",
               "name":"bus",
               "type":"Mode",
               "routeType":"Unknown",
               "status":"Unknown"
            },
            "disruptions":[

            ],
            "plannedWorks":[

            ],
            "isDisrupted":false,
            "hasFixedLocations":true
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.JourneyPlanner.Leg, Tfl.Api.Presentation.Entities",
            "duration":8,
            "instruction":{
               "$type":"Tfl.Api.Presentation.Entities.Instruction, Tfl.Api.Presentation.Entities",
               "summary":"Walk to West Drayton Station",
               "detailed":"Walk to West Drayton Station",
               "steps":[
                  {
                     "$type":"Tfl.Api.Presentation.Entities.InstructionStep, Tfl.Api.Presentation.Entities",
                     "description":"High Street for 253 metres",
                     "turnDirection":"STRAIGHT",
                     "streetName":"High Street",
                     "distance":253,
                     "cumulativeDistance":253,
                     "skyDirection":530,
                     "skyDirectionDescription":"North",
                     "cumulativeTravelTime":228,
                     "latitude":51.5124214537,
                     "longitude":-0.47248654072,
                     "pathAttribute":{
                        "$type":"Tfl.Api.Presentation.Entities.PathAttribute, Tfl.Api.Presentation.Entities"
                     },
                     "descriptionHeading":"Continue along ",
                     "trackType":"None"
                  },
                  {
                     "$type":"Tfl.Api.Presentation.Entities.InstructionStep, Tfl.Api.Presentation.Entities",
                     "description":"on to Station Approach, continue for 130 metres",
                     "turnDirection":"SHARP_LEFT",
                     "streetName":"Station Approach",
                     "distance":130,
                     "cumulativeDistance":383,
                     "skyDirection":455,
                     "skyDirectionDescription":"North",
                     "cumulativeTravelTime":344,
                     "latitude":51.51032665099,
                     "longitude":-0.47389678097000004,
                     "pathAttribute":{
                        "$type":"Tfl.Api.Presentation.Entities.PathAttribute, Tfl.Api.Presentation.Entities"
                     },
                     "descriptionHeading":"Take a sharp left",
                     "trackType":"None"
                  }
               ]
            },
            "obstacles":[
               {
                  "$type":"Tfl.Api.Presentation.Entities.JourneyPlanner.Obstacle, Tfl.Api.Presentation.Entities",
                  "type":"WALKWAY",
                  "incline":"LEVEL",
                  "stopId":1015005,
                  "position":"IDEST"
               },
               {
                  "$type":"Tfl.Api.Presentation.Entities.JourneyPlanner.Obstacle, Tfl.Api.Presentation.Entities",
                  "type":"STAIRS",
                  "incline":"UP",
                  "stopId":1001325,
                  "position":"IDEST"
               }
            ],
            "departureTime":"2020-06-18T11:46:00",
            "arrivalTime":"2020-06-18T11:54:00",
            "departurePoint":{
               "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
               "naptanId":"490G00015005",
               "platformName":"B",
               "stopLetter":"B",
               "icsCode":"1015005",
               "commonName":"Yiewsley High Street",
               "placeType":"StopPoint",
               "additionalProperties":[

               ],
               "lat":51.512684363679995,
               "lon":-0.47265068303999996
            },
            "arrivalPoint":{
               "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
               "naptanId":"910GWDRYTON",
               "platformName":"",
               "icsCode":"1001325",
               "commonName":"West Drayton Rail Station",
               "placeType":"StopPoint",
               "additionalProperties":[

               ],
               "lat":51.50985530072,
               "lon":-0.47222651176
            },
            "path":{
               "$type":"Tfl.Api.Presentation.Entities.JourneyPlanner.Path, Tfl.Api.Presentation.Entities",
               "lineString":"[[51.5124214537, -0.47248654072],[51.51240446045, -0.47256265173],[51.51234130977, -0.47254686598],[51.51163405146, -0.47278668396],[51.51128557251, -0.47295685589],[51.51060172599, -0.47361378771],[51.51032665099, -0.47389678097],[51.51023580866, -0.4724443527],[51.51005884536, -0.47214765108],[51.5100706435, -0.47219048786],[51.50986410137, -0.47221180698],[51.50978339639, -0.47223045445]]",
               "stopPoints":[
                  {
                     "$type":"Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                     "name":"West Drayton Station",
                     "uri":"/StopPoint/",
                     "type":"StopPoint",
                     "routeType":"Unknown",
                     "status":"Unknown"
                  }
               ],
               "elevation":[

               ]
            },
            "routeOptions":[
               {
                  "$type":"Tfl.Api.Presentation.Entities.JourneyPlanner.RouteOption, Tfl.Api.Presentation.Entities",
                  "name":"",
                  "directions":[
                     ""
                  ]
               }
            ],
            "mode":{
               "$type":"Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
               "id":"walking",
               "name":"walking",
               "type":"Mode",
               "routeType":"Unknown",
               "status":"Unknown"
            },
            "disruptions":[
               {
                  "$type":"Tfl.Api.Presentation.Entities.Disruption, Tfl.Api.Presentation.Entities",
                  "category":"PlannedWork",
                  "type":"stopBlocking",
                  "categoryDescription":"PlannedWork",
                  "description":"WEST DRAYTON STATION: Until September 2020, buses on Routes 222 350 698 U1 U3 and U5 are unable to serve stops in Station Approach outside the station due to poor road conditions. Please use other stops in Yiewsley High Street, Station Road or Horton Road (350) instead.",
                  "summary":"WEST DRAYTON STATION NO20/231C",
                  "additionalInfo":"",
                  "created":"2020-02-10T10:25:00",
                  "lastUpdate":"2020-04-29T14:16:00"
               },
               {
                  "$type":"Tfl.Api.Presentation.Entities.Disruption, Tfl.Api.Presentation.Entities",
                  "category":"Undefined",
                  "type":"stopBlocking",
                  "categoryDescription":"Undefined",
                  "description":"Bus stop closed until Sep 2020\\nPlease use stops on High Street \\nor Station Rd to board your bus \\n",
                  "summary":"",
                  "additionalInfo":"",
                  "created":"2020-06-13T04:06:00",
                  "lastUpdate":"2020-06-13T04:06:00"
               },
               {
                  "$type":"Tfl.Api.Presentation.Entities.Disruption, Tfl.Api.Presentation.Entities",
                  "category":"Undefined",
                  "type":"stopBlocking",
                  "categoryDescription":"Undefined",
                  "description":"Bus stop closed until Sep 2020\\nPlease use stops on High Street \\nor Station Rd to board your bus \\n",
                  "summary":"",
                  "additionalInfo":"",
                  "created":"2020-06-13T04:06:00",
                  "lastUpdate":"2020-06-13T04:06:00"
               }
            ],
            "plannedWorks":[

            ],
            "isDisrupted":true,
            "hasFixedLocations":true
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.JourneyPlanner.Leg, Tfl.Api.Presentation.Entities",
            "duration":12,
            "instruction":{
               "$type":"Tfl.Api.Presentation.Entities.Instruction, Tfl.Api.Presentation.Entities",
               "summary":"TfL Rail to Ealing Broadway",
               "detailed":"TfL Rail towards Paddington",
               "steps":[

               ]
            },
            "obstacles":[
               {
                  "$type":"Tfl.Api.Presentation.Entities.JourneyPlanner.Obstacle, Tfl.Api.Presentation.Entities",
                  "type":"STAIRS",
                  "incline":"UP",
                  "stopId":1000062,
                  "position":"AFTER"
               },
               {
                  "$type":"Tfl.Api.Presentation.Entities.JourneyPlanner.Obstacle, Tfl.Api.Presentation.Entities",
                  "type":"STAIRS",
                  "incline":"DOWN",
                  "stopId":1000062,
                  "position":"AFTER"
               }
            ],
            "departureTime":"2020-06-18T11:54:00",
            "arrivalTime":"2020-06-18T12:06:00",
            "departurePoint":{
               "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
               "naptanId":"910GWDRYTON",
               "platformName":"",
               "icsCode":"1001325",
               "commonName":"West Drayton Rail Station",
               "placeType":"StopPoint",
               "additionalProperties":[

               ],
               "lat":51.50985530072,
               "lon":-0.47222651176
            },
            "arrivalPoint":{
               "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
               "naptanId":"910GEALINGB",
               "platformName":"",
               "icsCode":"1000062",
               "commonName":"Ealing Broadway Rail Station",
               "placeType":"StopPoint",
               "additionalProperties":[

               ],
               "lat":51.514962021509994,
               "lon":-0.30212193606
            },
            "path":{
               "$type":"Tfl.Api.Presentation.Entities.JourneyPlanner.Path, Tfl.Api.Presentation.Entities",
               "lineString":"[[51.50978298174, -0.4722218708],[51.50974648456, -0.47146640148],[51.5088243757, -0.46077614831],[51.50860280657, -0.45896795036],[51.5070629999, -0.44857296773],[51.50649170117, -0.4454943522],[51.50550379626, -0.44084501802],[51.50497131758, -0.43799581657],[51.50420339534, -0.43300785127],[51.50356429212, -0.42758336343],[51.50309156684, -0.42251348671],[51.50297859572, -0.42019691245],[51.50297859572, -0.42019691245],[51.50288038984, -0.41818388332],[51.50282236696, -0.41521778726],[51.50284121687, -0.41328642298],[51.50297728537, -0.40674031253],[51.50311435638, -0.40359450385],[51.5032777175, -0.40040452936],[51.50336926524, -0.39920542042],[51.50372413503, -0.3955620205],[51.5040412559, -0.39245301312],[51.50539598026, -0.38306822081],[51.50600104223, -0.37869518395],[51.50603997483, -0.37841561732],[51.50603997483, -0.37841561732],[51.50759564059, -0.36724039139],[51.50940865654, -0.35476818814],[51.51031311001, -0.34874073797],[51.51097247678, -0.34384599341],[51.51138216993, -0.34102097272],[51.51172206797, -0.33846774996],[51.51172206797, -0.33846774996],[51.5119836105, -0.33650280152],[51.51202405431, -0.33618427954],[51.51206367983, -0.33580814151],[51.51271365249, -0.3296595542],[51.51317751167, -0.32435349796],[51.51351000371, -0.32013023447],[51.51351000371, -0.32013023447],[51.51354277239, -0.31971390348],[51.51386217194, -0.31439856382],[51.51424637676, -0.30860514891],[51.51452047934, -0.30454518289],[51.51465246286, -0.30247933875],[51.5146889072, -0.30174877791]]",
               "stopPoints":[
                  {
                     "$type":"Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                     "id":"910GHAYESAH",
                     "name":"Hayes & Harlington Rail Station",
                     "uri":"/StopPoint/910GHAYESAH",
                     "type":"StopPoint",
                     "routeType":"Unknown",
                     "status":"Unknown"
                  },
                  {
                     "$type":"Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                     "id":"910GSTHALL",
                     "name":"Southall Rail Station",
                     "uri":"/StopPoint/910GSTHALL",
                     "type":"StopPoint",
                     "routeType":"Unknown",
                     "status":"Unknown"
                  },
                  {
                     "$type":"Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                     "id":"910GEALINGB",
                     "name":"Ealing Broadway Rail Station",
                     "uri":"/StopPoint/910GEALINGB",
                     "type":"StopPoint",
                     "routeType":"Unknown",
                     "status":"Unknown"
                  }
               ],
               "elevation":[

               ]
            },
            "routeOptions":[
               {
                  "$type":"Tfl.Api.Presentation.Entities.JourneyPlanner.RouteOption, Tfl.Api.Presentation.Entities",
                  "name":"TfL Rail",
                  "directions":[
                     "Paddington Rail Station"
                  ],
                  "lineIdentifier":{
                     "$type":"Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                     "id":"tfl-rail",
                     "name":"TfL Rail",
                     "uri":"/Line/tfl-rail",
                     "type":"Line",
                     "crowding":{
                        "$type":"Tfl.Api.Presentation.Entities.Crowding, Tfl.Api.Presentation.Entities"
                     },
                     "routeType":"Unknown",
                     "status":"Unknown"
                  }
               }
            ],
            "mode":{
               "$type":"Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
               "id":"tflrail",
               "name":"tflrail",
               "type":"Mode",
               "routeType":"Unknown",
               "status":"Unknown"
            },
            "disruptions":[
               {
                  "$type":"Tfl.Api.Presentation.Entities.Disruption, Tfl.Api.Presentation.Entities",
                  "category":"PlannedWork",
                  "type":"stopBlocking",
                  "categoryDescription":"PlannedWork",
                  "description":"WEST DRAYTON STATION: Until September 2020, buses on Routes 222 350 698 U1 U3 and U5 are unable to serve stops in Station Approach outside the station due to poor road conditions. Please use other stops in Yiewsley High Street, Station Road or Horton Road (350) instead.",
                  "summary":"WEST DRAYTON STATION NO20/231C",
                  "additionalInfo":"",
                  "created":"2020-02-10T10:25:00",
                  "lastUpdate":"2020-04-29T14:16:00"
               },
               {
                  "$type":"Tfl.Api.Presentation.Entities.Disruption, Tfl.Api.Presentation.Entities",
                  "category":"Undefined",
                  "type":"stopBlocking",
                  "categoryDescription":"Undefined",
                  "description":"Bus stop closed until Sep 2020\\nPlease use stops on High Street \\nor Station Rd to board your bus \\n",
                  "summary":"",
                  "additionalInfo":"",
                  "created":"2020-06-13T04:06:00",
                  "lastUpdate":"2020-06-13T04:06:00"
               },
               {
                  "$type":"Tfl.Api.Presentation.Entities.Disruption, Tfl.Api.Presentation.Entities",
                  "category":"Undefined",
                  "type":"stopBlocking",
                  "categoryDescription":"Undefined",
                  "description":"Bus stop closed until Sep 2020\\nPlease use stops on High Street \\nor Station Rd to board your bus \\n",
                  "summary":"",
                  "additionalInfo":"",
                  "created":"2020-06-13T04:06:00",
                  "lastUpdate":"2020-06-13T04:06:00"
               },
               {
                  "$type":"Tfl.Api.Presentation.Entities.Disruption, Tfl.Api.Presentation.Entities",
                  "category":"RealTime",
                  "type":"stopInfo",
                  "categoryDescription":"RealTime",
                  "description":"WEST DRAYTON STATION: The ticket office has reduced opening hours to protect customers and staff. Weekdays 06:30-10:30 & 15:00-19:00. Saturday 08:00-16:00. Sunday 09:30-15:30",
                  "summary":"",
                  "additionalInfo":"",
                  "created":"2020-05-04T18:41:00",
                  "lastUpdate":"2020-05-04T18:42:00"
               },
               {
                  "$type":"Tfl.Api.Presentation.Entities.Disruption, Tfl.Api.Presentation.Entities",
                  "category":"RealTime",
                  "type":"stopInfo",
                  "categoryDescription":"RealTime",
                  "description":"EALING BROADWAY STATION: The ticket office has reduced opening hours to protect customers and staff. Weekdays 05:35-23:25. Saturday 06:00-18:00. Sunday 07:00-20:30",
                  "summary":"",
                  "additionalInfo":"",
                  "created":"2020-05-04T18:20:00",
                  "lastUpdate":"2020-05-04T18:24:00"
               }
            ],
            "plannedWorks":[

            ],
            "isDisrupted":true,
            "hasFixedLocations":true
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.JourneyPlanner.Leg, Tfl.Api.Presentation.Entities",
            "duration":9,
            "instruction":{
               "$type":"Tfl.Api.Presentation.Entities.Instruction, Tfl.Api.Presentation.Entities",
               "summary":"Central line to White City",
               "detailed":"Central line towards Hainault",
               "steps":[

               ]
            },
            "obstacles":[

            ],
            "departureTime":"2020-06-18T12:09:00",
            "arrivalTime":"2020-06-18T12:18:00",
            "departurePoint":{
               "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
               "naptanId":"940GZZLUEBY",
               "platformName":"",
               "icsCode":"1000062",
               "commonName":"Ealing Broadway Underground Station",
               "placeType":"StopPoint",
               "additionalProperties":[

               ],
               "lat":51.514962021509994,
               "lon":-0.30212193606
            },
            "arrivalPoint":{
               "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
               "naptanId":"940GZZLUWCY",
               "platformName":"",
               "icsCode":"1000269",
               "commonName":"White City Underground Station",
               "placeType":"StopPoint",
               "additionalProperties":[

               ],
               "lat":51.51204601504,
               "lon":-0.22422122813999998
            },
            "path":{
               "$type":"Tfl.Api.Presentation.Entities.JourneyPlanner.Path, Tfl.Api.Presentation.Entities",
               "lineString":"[[51.51520181689, -0.3014499573],[51.51521182831, -0.29516588096],[51.51507438402, -0.29189941031],[51.5150260927, -0.2885863798],[51.51507801835, -0.28721525997],[51.51516383582, -0.28631847323],[51.51534871847, -0.28543237569],[51.51562388975, -0.28457170394],[51.51592019071, -0.28392641689],[51.51781304001, -0.28116000174],[51.51819013421, -0.28063760282],[51.51819013421, -0.28063760282],[51.51971671151, -0.27852267072],[51.52263331871, -0.27444862894],[51.52419163228, -0.27218418879],[51.52446259902, -0.27165497989],[51.52481062689, -0.27086336771],[51.52504096419, -0.27001854147],[51.52508228848, -0.26977191102],[51.52515764864, -0.26939424967],[51.52522253202, -0.2689160752],[51.52522322618, -0.26835384078],[51.52518047028, -0.26789416423],[51.52498864193, -0.26647430682],[51.52488147676, -0.26591617259],[51.52457108449, -0.26438551709],[51.52447417613, -0.26391349478],[51.52397056394, -0.26148206307],[51.52361749055, -0.2597087199],[51.52361749055, -0.2597087199],[51.52326127212, -0.25791974413],[51.52293173117, -0.25631785261],[51.52257007747, -0.2549766776],[51.52237019843, -0.25423475294],[51.52211767819, -0.25358133646],[51.52179368551, -0.25295949144],[51.52103100332, -0.2518643629],[51.51973419697, -0.25053028517],[51.51729676551, -0.24808697043],[51.51711074932, -0.24785435522],[51.51711074932, -0.24785435522],[51.5166369885, -0.24726192337],[51.51626824235, -0.24665632781],[51.51595147789, -0.24591903085],[51.51547841164, -0.24435182264],[51.51537157395, -0.24382266711],[51.51527601991, -0.24284629259],[51.51526112671, -0.24185240386],[51.51532667783, -0.24082659147],[51.51603788428, -0.23310278488],[51.51611104305, -0.23199017013],[51.51612323639, -0.23100962884],[51.51608215073, -0.23007439051],[51.51595734613, -0.22895503511],[51.5157895538, -0.22796706824],[51.51555797235, -0.22692393499],[51.51521744684, -0.22581298249],[51.51502370565, -0.22548902404],[51.51470414386, -0.22516995878],[51.51434972264, -0.22492431423],[51.51358870024, -0.22455036123],[51.51310099726, -0.22441079283],[51.51200243291, -0.22430815205]]",
               "stopPoints":[
                  {
                     "$type":"Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                     "id":"940GZZLUWTA",
                     "name":"West Acton Underground Station",
                     "uri":"/StopPoint/940GZZLUWTA",
                     "type":"StopPoint",
                     "routeType":"Unknown",
                     "status":"Unknown"
                  },
                  {
                     "$type":"Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                     "id":"940GZZLUNAN",
                     "name":"North Acton Underground Station",
                     "uri":"/StopPoint/940GZZLUNAN",
                     "type":"StopPoint",
                     "routeType":"Unknown",
                     "status":"Unknown"
                  },
                  {
                     "$type":"Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                     "id":"940GZZLUEAN",
                     "name":"East Acton Underground Station",
                     "uri":"/StopPoint/940GZZLUEAN",
                     "type":"StopPoint",
                     "routeType":"Unknown",
                     "status":"Unknown"
                  },
                  {
                     "$type":"Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                     "id":"940GZZLUWCY",
                     "name":"White City Underground Station",
                     "uri":"/StopPoint/940GZZLUWCY",
                     "type":"StopPoint",
                     "routeType":"Unknown",
                     "status":"Unknown"
                  }
               ],
               "elevation":[

               ]
            },
            "routeOptions":[
               {
                  "$type":"Tfl.Api.Presentation.Entities.JourneyPlanner.RouteOption, Tfl.Api.Presentation.Entities",
                  "name":"Central",
                  "directions":[
                     "Hainault Underground Station"
                  ],
                  "lineIdentifier":{
                     "$type":"Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                     "id":"central",
                     "name":"Central",
                     "uri":"/Line/central",
                     "type":"Line",
                     "crowding":{
                        "$type":"Tfl.Api.Presentation.Entities.Crowding, Tfl.Api.Presentation.Entities"
                     },
                     "routeType":"Unknown",
                     "status":"Unknown"
                  }
               }
            ],
            "mode":{
               "$type":"Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
               "id":"tube",
               "name":"tube",
               "type":"Mode",
               "routeType":"Unknown",
               "status":"Unknown"
            },
            "disruptions":[
               {
                  "$type":"Tfl.Api.Presentation.Entities.Disruption, Tfl.Api.Presentation.Entities",
                  "category":"RealTime",
                  "type":"stopInfo",
                  "categoryDescription":"RealTime",
                  "description":"Most Tube station ticket machines are only accepting bank cards. You can top up using your contactless and Oyster account, the TfL Oyster and contactless app or an Oyster ticket stop. Ticket machines at all London Overground and DLR stations are still accepting cash.",
                  "summary":"",
                  "additionalInfo":"<a href=\"http://content.tfl.gov.uk/stations-accepting-cash.pdf\">Some stations</a>&nbsp;are still accepting cash.",
                  "created":"2020-06-10T16:39:00",
                  "lastUpdate":"2020-06-11T09:51:00"
               },
               {
                  "$type":"Tfl.Api.Presentation.Entities.Disruption, Tfl.Api.Presentation.Entities",
                  "category":"RealTime",
                  "type":"stopInfo",
                  "categoryDescription":"RealTime",
                  "description":"Most Tube station ticket machines are only accepting bank cards. You can top up using your contactless and Oyster account, the TfL Oyster and contactless app or an Oyster ticket stop. Ticket machines at all London Overground and DLR stations are still accepting cash.",
                  "summary":"",
                  "additionalInfo":"<a href=\"http://content.tfl.gov.uk/stations-accepting-cash.pdf\">Some stations</a>&nbsp;are still accepting cash",
                  "created":"2020-06-10T17:56:00",
                  "lastUpdate":"2020-06-11T09:50:00"
               }
            ],
            "plannedWorks":[

            ],
            "isDisrupted":true,
            "hasFixedLocations":true
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.JourneyPlanner.Leg, Tfl.Api.Presentation.Entities",
            "duration":8,
            "instruction":{
               "$type":"Tfl.Api.Presentation.Entities.Instruction, Tfl.Api.Presentation.Entities",
               "summary":"Walk to 1 Ring Road, Shepherds Bush",
               "detailed":"Walk to 1 Ring Road, Shepherds Bush",
               "steps":[
                  {
                     "$type":"Tfl.Api.Presentation.Entities.InstructionStep, Tfl.Api.Presentation.Entities",
                     "description":"Wood Lane for 43 metres",
                     "turnDirection":"STRAIGHT",
                     "streetName":"Wood Lane",
                     "distance":43,
                     "cumulativeDistance":43,
                     "skyDirection":529,
                     "skyDirectionDescription":"North",
                     "cumulativeTravelTime":40,
                     "latitude":51.51194819839,
                     "longitude":-0.22488795965,
                     "pathAttribute":{
                        "$type":"Tfl.Api.Presentation.Entities.PathAttribute, Tfl.Api.Presentation.Entities"
                     },
                     "descriptionHeading":"Continue along ",
                     "trackType":"None"
                  },
                  {
                     "$type":"Tfl.Api.Presentation.Entities.InstructionStep, Tfl.Api.Presentation.Entities",
                     "description":"on to Ring Road, continue for 254 metres",
                     "turnDirection":"RIGHT",
                     "streetName":"Ring Road",
                     "distance":254,
                     "cumulativeDistance":297,
                     "skyDirection":259,
                     "skyDirectionDescription":"North",
                     "cumulativeTravelTime":264,
                     "latitude":51.51156000806,
                     "longitude":-0.22478775791,
                     "pathAttribute":{
                        "$type":"Tfl.Api.Presentation.Entities.PathAttribute, Tfl.Api.Presentation.Entities"
                     },
                     "descriptionHeading":"Turn right",
                     "trackType":"None"
                  }
               ]
            },
            "obstacles":[
               {
                  "$type":"Tfl.Api.Presentation.Entities.JourneyPlanner.Obstacle, Tfl.Api.Presentation.Entities",
                  "type":"STAIRS",
                  "incline":"UP",
                  "stopId":1000269,
                  "position":"BEFORE"
               },
               {
                  "$type":"Tfl.Api.Presentation.Entities.JourneyPlanner.Obstacle, Tfl.Api.Presentation.Entities",
                  "type":"STAIRS",
                  "incline":"DOWN",
                  "stopId":1000269,
                  "position":"BEFORE"
               }
            ],
            "departureTime":"2020-06-18T12:18:00",
            "arrivalTime":"2020-06-18T12:26:00",
            "departurePoint":{
               "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
               "naptanId":"940GZZLUWCY",
               "platformName":"",
               "icsCode":"1000269",
               "commonName":"White City Underground Station",
               "placeType":"StopPoint",
               "additionalProperties":[

               ],
               "lat":51.51204601504,
               "lon":-0.22422122813999998
            },
            "arrivalPoint":{
               "$type":"Tfl.Api.Presentation.Entities.Place, Tfl.Api.Presentation.Entities",
               "commonName":"1 Ring Road, Shepherds Bush",
               "placeType":"StopPoint",
               "lat":51.51011546846,
               "lon":-0.22738022563
            },
            "path":{
               "$type":"Tfl.Api.Presentation.Entities.JourneyPlanner.Path, Tfl.Api.Presentation.Entities",
               "lineString":"[[51.51200238775, -0.22430939357],[51.51205565634, -0.22426408776],[51.51196399278, -0.22474323091],[51.51194819839, -0.22488795965],[51.51156000806, -0.22478775791],[51.51152073952, -0.2251639792],[51.51032985383, -0.22728543876],[51.51007973756, -0.22739602336],[51.51011546846, -0.22738022563]]",
               "stopPoints":[

               ],
               "elevation":[

               ]
            },
            "routeOptions":[
               {
                  "$type":"Tfl.Api.Presentation.Entities.JourneyPlanner.RouteOption, Tfl.Api.Presentation.Entities",
                  "name":"",
                  "directions":[
                     ""
                  ]
               }
            ],
            "mode":{
               "$type":"Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
               "id":"walking",
               "name":"walking",
               "type":"Mode",
               "routeType":"Unknown",
               "status":"Unknown"
            },
            "disruptions":[

            ],
            "plannedWorks":[

            ],
            "distance":297,
            "isDisrupted":false,
            "hasFixedLocations":false
         }
      ],
      "fare":{
         "$type":"Tfl.Api.Presentation.Entities.JourneyPlanner.JourneyFare, Tfl.Api.Presentation.Entities",
         "totalCost":300,
         "fares":[
            {
               "$type":"Tfl.Api.Presentation.Entities.JourneyPlanner.Fare, Tfl.Api.Presentation.Entities",
               "lowZone":0,
               "highZone":0,
               "cost":150,
               "isHopperFare":false,
               "peak":0,
               "offPeak":0,
               "taps":[
                  {
                     "$type":"Tfl.Api.Presentation.Entities.JourneyPlanner.FareTap, Tfl.Api.Presentation.Entities",
                     "atcoCode":"490G00005397",
                     "tapDetails":{
                        "$type":"Tfl.Api.Presentation.Entities.JourneyPlanner.FareTapDetails, Tfl.Api.Presentation.Entities",
                        "modeType":"Bus",
                        "validationType":"Entry",
                        "hostDeviceType":"ETM",
                        "busRouteId":"u5",
                        "nationalLocationCode":0,
                        "tapTimestamp":"2020-06-18T11:32:00"
                     }
                  }
               ]
            },
            {
               "$type":"Tfl.Api.Presentation.Entities.JourneyPlanner.Fare, Tfl.Api.Presentation.Entities",
               "lowZone":2,
               "highZone":6,
               "cost":150,
               "chargeProfileName":"Standard peak/off peak",
               "isHopperFare":false,
               "chargeLevel":"Off Peak",
               "peak":280,
               "offPeak":150,
               "taps":[
                  {
                     "$type":"Tfl.Api.Presentation.Entities.JourneyPlanner.FareTap, Tfl.Api.Presentation.Entities",
                     "atcoCode":"910GWDRYTON",
                     "tapDetails":{
                        "$type":"Tfl.Api.Presentation.Entities.JourneyPlanner.FareTapDetails, Tfl.Api.Presentation.Entities",
                        "modeType":"Rail",
                        "validationType":"None",
                        "hostDeviceType":"Gate",
                        "nationalLocationCode":3174,
                        "tapTimestamp":"2020-06-18T11:54:00"
                     }
                  },
                  {
                     "$type":"Tfl.Api.Presentation.Entities.JourneyPlanner.FareTap, Tfl.Api.Presentation.Entities",
                     "atcoCode":"940GZZLUWCY",
                     "tapDetails":{
                        "$type":"Tfl.Api.Presentation.Entities.JourneyPlanner.FareTapDetails, Tfl.Api.Presentation.Entities",
                        "modeType":"Rail",
                        "validationType":"None",
                        "hostDeviceType":"Gate",
                        "nationalLocationCode":764,
                        "tapTimestamp":"2020-06-18T12:18:00"
                     }
                  }
               ]
            }
         ],
         "caveats":[
            {
               "$type":"Tfl.Api.Presentation.Entities.JourneyPlanner.FareCaveat, Tfl.Api.Presentation.Entities",
               "text":"<p>Fares between two stations may vary depending on the direction of travel, time of day and day of the week.</p><p>We charge higher fares at the busiest times of the day (usually between 06:30 and 09:30, and between 16:00 and 19:00, Monday to Friday).</p><p>When you pay as you go, you must touch your contactless or Oyster card on a yellow reader at the start and end of your journey.</p><p>Some journeys are charged via Zone 1 regardless of the route taken.</p><p>If your journey avoids Zone 1 and you see a pink card reader when changing trains, touch your contactless or Oyster card on it to pay the right fare.</p>",
               "type":"allRailModes"
            },
            {
               "$type":"Tfl.Api.Presentation.Entities.JourneyPlanner.FareCaveat, Tfl.Api.Presentation.Entities",
               "text":"The price shown is a single adult pay as you go fare.",
               "type":"generic"
            }
         ]
      }
   },
   {
      "$type":"Tfl.Api.Presentation.Entities.JourneyPlanner.Journey, Tfl.Api.Presentation.Entities",
      "startDateTime":"2020-06-18T11:30:00",
      "duration":68,
      "arrivalDateTime":"2020-06-18T12:38:00",
      "legs":[
         {
            "$type":"Tfl.Api.Presentation.Entities.JourneyPlanner.Leg, Tfl.Api.Presentation.Entities",
            "duration":5,
            "instruction":{
               "$type":"Tfl.Api.Presentation.Entities.Instruction, Tfl.Api.Presentation.Entities",
               "summary":"Walk to Brunel University, Cowley",
               "detailed":"Walk to Brunel University, Cowley",
               "steps":[
                  {
                     "$type":"Tfl.Api.Presentation.Entities.InstructionStep, Tfl.Api.Presentation.Entities",
                     "description":"Topping Lane for 194 metres",
                     "turnDirection":"STRAIGHT",
                     "streetName":"Topping Lane",
                     "distance":194,
                     "cumulativeDistance":194,
                     "skyDirection":360,
                     "skyDirectionDescription":"North",
                     "cumulativeTravelTime":175,
                     "latitude":51.53387973946,
                     "longitude":-0.47894856502,
                     "pathAttribute":{
                        "$type":"Tfl.Api.Presentation.Entities.PathAttribute, Tfl.Api.Presentation.Entities"
                     },
                     "descriptionHeading":"Continue along ",
                     "trackType":"None"
                  },
                  {
                     "$type":"Tfl.Api.Presentation.Entities.InstructionStep, Tfl.Api.Presentation.Entities",
                     "description":"on to Cleveland Road, continue for 145 metres",
                     "turnDirection":"RIGHT",
                     "streetName":"Cleveland Road",
                     "distance":145,
                     "cumulativeDistance":339,
                     "skyDirection":539,
                     "skyDirectionDescription":"North",
                     "cumulativeTravelTime":305,
                     "latitude":51.53392435343,
                     "longitude":-0.47614998488,
                     "pathAttribute":{
                        "$type":"Tfl.Api.Presentation.Entities.PathAttribute, Tfl.Api.Presentation.Entities"
                     },
                     "descriptionHeading":"Turn right",
                     "trackType":"None"
                  }
               ]
            },
            "obstacles":[

            ],
            "departureTime":"2020-06-18T11:30:00",
            "arrivalTime":"2020-06-18T11:35:00",
            "departurePoint":{
               "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
               "platformName":"",
               "icsCode":"99999997",
               "commonName":"1 Topping Lane, Uxbridge",
               "placeType":"StopPoint",
               "additionalProperties":[

               ],
               "lat":51.53387973946,
               "lon":-0.47894856502
            },
            "arrivalPoint":{
               "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
               "naptanId":"490G00004528",
               "platformName":"BA",
               "stopLetter":"BA",
               "icsCode":"1004528",
               "commonName":"Brunel University",
               "placeType":"StopPoint",
               "additionalProperties":[

               ],
               "lat":51.53314219026,
               "lon":-0.47616168407000004
            },
            "path":{
               "$type":"Tfl.Api.Presentation.Entities.JourneyPlanner.Path, Tfl.Api.Presentation.Entities",
               "lineString":"[[51.53387973946, -0.47894856502],[51.53387973946, -0.47894856502],[51.53392435343, -0.47614998488],[51.53294426201, -0.47615387521],[51.53262049851, -0.47615026803]]",
               "stopPoints":[

               ],
               "elevation":[

               ]
            },
            "routeOptions":[
               {
                  "$type":"Tfl.Api.Presentation.Entities.JourneyPlanner.RouteOption, Tfl.Api.Presentation.Entities",
                  "name":"",
                  "directions":[
                     ""
                  ]
               }
            ],
            "mode":{
               "$type":"Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
               "id":"walking",
               "name":"walking",
               "type":"Mode",
               "routeType":"Unknown",
               "status":"Unknown"
            },
            "disruptions":[

            ],
            "plannedWorks":[

            ],
            "distance":339,
            "isDisrupted":false,
            "hasFixedLocations":true
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.JourneyPlanner.Leg, Tfl.Api.Presentation.Entities",
            "duration":4,
            "instruction":{
               "$type":"Tfl.Api.Presentation.Entities.Instruction, Tfl.Api.Presentation.Entities",
               "summary":"U3 bus to Hillingdon Hospital",
               "detailed":"U3 bus towards Heathrow Central",
               "steps":[

               ]
            },
            "obstacles":[

            ],
            "departureTime":"2020-06-18T11:35:00",
            "arrivalTime":"2020-06-18T11:39:00",
            "departurePoint":{
               "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
               "naptanId":"490G00004528",
               "platformName":"BA",
               "stopLetter":"BA",
               "icsCode":"1004528",
               "commonName":"Brunel University",
               "placeType":"StopPoint",
               "additionalProperties":[

               ],
               "lat":51.53314219026,
               "lon":-0.47616168407000004
            },
            "arrivalPoint":{
               "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
               "naptanId":"490G00008225",
               "platformName":"",
               "stopLetter":"HB",
               "icsCode":"1008225",
               "commonName":"Hillingdon Hospital",
               "placeType":"StopPoint",
               "additionalProperties":[

               ],
               "lat":51.52733904868,
               "lon":-0.4628188551
            },
            "path":{
               "$type":"Tfl.Api.Presentation.Entities.JourneyPlanner.Path, Tfl.Api.Presentation.Entities",
               "lineString":"[[51.53261110859, -0.47615312919],[51.53253960443, -0.47615296906],[51.53234186334, -0.47615957154],[51.53214393506, -0.47615176275],[51.53087678138, -0.47620848756],[51.53025809044, -0.4763444779],[51.53027400816, -0.47618536113],[51.53009967518, -0.47591726224],[51.52930715872, -0.47536773253],[51.52930715872, -0.47536773253],[51.52924673004, -0.47532583222],[51.52889263049, -0.47506374843],[51.52866567693, -0.47489833454],[51.5281391138, -0.474512275],[51.52799107393, -0.47439136122],[51.52799107393, -0.47439136122],[51.52700302756, -0.47358438199],[51.52695602403, -0.47342737985],[51.52692379251, -0.47233285691],[51.52693876659, -0.47210170288],[51.52701389655, -0.47090909286],[51.52701389655, -0.47090909286],[51.52705797909, -0.47020923683],[51.52712910007, -0.46945722807],[51.52731081076, -0.46753381664],[51.52735572509, -0.46715233197],[51.52735572509, -0.46715233197],[51.5274079375, -0.46670884601],[51.52781298771, -0.46467698703],[51.52770374327, -0.46388777821],[51.52757319129, -0.46353177114],[51.5273302493, -0.46283356737],[51.52704720552, -0.46207363604]]",
               "stopPoints":[
                  {
                     "$type":"Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                     "id":"490G00005286",
                     "name":"Huxley Close",
                     "uri":"/StopPoint/490G00005286",
                     "type":"StopPoint",
                     "routeType":"Unknown",
                     "status":"Unknown"
                  },
                  {
                     "$type":"Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                     "id":"490G00012757",
                     "name":"St Laurence Church",
                     "uri":"/StopPoint/490G00012757",
                     "type":"StopPoint",
                     "routeType":"Unknown",
                     "status":"Unknown"
                  },
                  {
                     "$type":"Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                     "id":"490G00010994",
                     "name":"Pield Heath",
                     "uri":"/StopPoint/490G00010994",
                     "type":"StopPoint",
                     "routeType":"Unknown",
                     "status":"Unknown"
                  },
                  {
                     "$type":"Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                     "id":"490G00015584",
                     "name":"Peel Way",
                     "uri":"/StopPoint/490G00015584",
                     "type":"StopPoint",
                     "routeType":"Unknown",
                     "status":"Unknown"
                  },
                  {
                     "$type":"Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                     "id":"490G00008225",
                     "name":"Hillingdon Hospital",
                     "uri":"/StopPoint/490G00008225",
                     "type":"StopPoint",
                     "routeType":"Unknown",
                     "status":"Unknown"
                  }
               ],
               "elevation":[

               ]
            },
            "routeOptions":[
               {
                  "$type":"Tfl.Api.Presentation.Entities.JourneyPlanner.RouteOption, Tfl.Api.Presentation.Entities",
                  "name":"U3",
                  "directions":[
                     "Heathrow Central"
                  ],
                  "lineIdentifier":{
                     "$type":"Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                     "id":"u3",
                     "name":"U3",
                     "uri":"/Line/u3",
                     "type":"Line",
                     "crowding":{
                        "$type":"Tfl.Api.Presentation.Entities.Crowding, Tfl.Api.Presentation.Entities"
                     },
                     "routeType":"Unknown",
                     "status":"Unknown"
                  }
               }
            ],
            "mode":{
               "$type":"Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
               "id":"bus",
               "name":"bus",
               "type":"Mode",
               "routeType":"Unknown",
               "status":"Unknown"
            },
            "disruptions":[
               {
                  "$type":"Tfl.Api.Presentation.Entities.Disruption, Tfl.Api.Presentation.Entities",
                  "category":"PlannedWork",
                  "type":"lineInfo",
                  "categoryDescription":"PlannedWork",
                  "description":"HIGH STREET, UB8: Routes 427 U1 U3 U4 and U7 are on diversion from 08:00 Monday, 6 January to 17:00 Monday, 20 July due to Hillingdon Council works. \n\nBuses towards Uxbridge are diverted via Hillingdon Road, missing Civic Centre bus stop.",
                  "summary":"NO20/96/B / HIGH STREET, UB8 / ROUTES 427 U1 U3 U4 U7",
                  "additionalInfo":"",
                  "created":"2020-06-02T09:31:00",
                  "lastUpdate":"2020-06-02T09:32:00"
               }
            ],
            "plannedWorks":[

            ],
            "isDisrupted":true,
            "hasFixedLocations":true
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.JourneyPlanner.Leg, Tfl.Api.Presentation.Entities",
            "duration":17,
            "instruction":{
               "$type":"Tfl.Api.Presentation.Entities.Instruction, Tfl.Api.Presentation.Entities",
               "summary":"U4 bus to Hayes & Harlington Station",
               "detailed":"U4 bus towards Hayes, Prologis Park",
               "steps":[

               ]
            },
            "obstacles":[
               {
                  "$type":"Tfl.Api.Presentation.Entities.JourneyPlanner.Obstacle, Tfl.Api.Presentation.Entities",
                  "type":"WALKWAY",
                  "incline":"LEVEL",
                  "stopId":1001144,
                  "position":"AFTER"
               },
               {
                  "$type":"Tfl.Api.Presentation.Entities.JourneyPlanner.Obstacle, Tfl.Api.Presentation.Entities",
                  "type":"STAIRS",
                  "incline":"DOWN",
                  "stopId":1001144,
                  "position":"AFTER"
               }
            ],
            "departureTime":"2020-06-18T11:48:00",
            "arrivalTime":"2020-06-18T12:05:00",
            "departurePoint":{
               "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
               "naptanId":"490G00008225",
               "platformName":"",
               "stopLetter":"HB",
               "icsCode":"1008225",
               "commonName":"Hillingdon Hospital",
               "placeType":"StopPoint",
               "additionalProperties":[

               ],
               "lat":51.52733904868,
               "lon":-0.4628188551
            },
            "arrivalPoint":{
               "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
               "naptanId":"490G01144N",
               "platformName":"E",
               "stopLetter":"E",
               "icsCode":"1001144",
               "commonName":"Hayes and Harlington Station",
               "placeType":"StopPoint",
               "additionalProperties":[

               ],
               "lat":51.50298864965,
               "lon":-0.42021170883000003
            },
            "path":{
               "$type":"Tfl.Api.Presentation.Entities.JourneyPlanner.Path, Tfl.Api.Presentation.Entities",
               "lineString":"[[51.52704720552, -0.46207363604],[51.52702268589, -0.46200780544],[51.52681814434, -0.46149572882],[51.52679023496, -0.4614245906],[51.52676232553, -0.46135345247],[51.52618426017, -0.45978722269],[51.52607852796, -0.45952059341],[51.52607852796, -0.45952059341],[51.52584015509, -0.45891948875],[51.52580353509, -0.45818553613],[51.52578063458, -0.45781150759],[51.52562845471, -0.45581290597],[51.52560266322, -0.45541770262],[51.52560266322, -0.45541770262],[51.52556086574, -0.45477728375],[51.5255259287, -0.45417302011],[51.52561093377, -0.45311781627],[51.52570657326, -0.45286951281],[51.52622020372, -0.45176627333],[51.52622020372, -0.45176627333],[51.52644984207, -0.45127301208],[51.52648617505, -0.45130061078],[51.52658314229, -0.45115316368],[51.52656440507, -0.45109613656],[51.52652807204, -0.45106853799],[51.52578766376, -0.45015665534],[51.52531437913, -0.44972584869],[51.52512137985, -0.44955793151],[51.52512137985, -0.44955793151],[51.52395895728, -0.44854661094],[51.52374396109, -0.44834723317],[51.52374396109, -0.44834723317],[51.52344914256, -0.44807383532],[51.52318372126, -0.44772249162],[51.52298235991, -0.44745546091],[51.52289057179, -0.44731443671],[51.52271903462, -0.44726261265],[51.52260888858, -0.44709338511],[51.52229375744, -0.44681290381],[51.52229375744, -0.44681290381],[51.52217211777, -0.44670464007],[51.52197266208, -0.44658169756],[51.52157394113, -0.44635022338],[51.52140202191, -0.44626958914],[51.52071300842, -0.44584620643],[51.52054070709, -0.44573676089],[51.51955547813, -0.44467487187],[51.5191988283, -0.44422579174],[51.51894028157, -0.44371572162],[51.51884772446, -0.44351709024],[51.51862893914, -0.44298553892],[51.51862893914, -0.44298553892],[51.5185318039, -0.44274954686],[51.5179588532, -0.4415872197],[51.51807072194, -0.44120866229],[51.5180544581, -0.4406615217],[51.51803620856, -0.44023757973],[51.51803620856, -0.44023757973],[51.51802843732, -0.44005706261],[51.51796301109, -0.43919451654],[51.51790618305, -0.43830285278],[51.51789316699, -0.43800062493],[51.51782427061, -0.43687876928],[51.51778179046, -0.43639018257],[51.51776016551, -0.4361170768],[51.51783856137, -0.43592702296],[51.51772916766, -0.43581546645],[51.51764029645, -0.43447454765],[51.51764029645, -0.43447454765],[51.51754902106, -0.43309759978],[51.51751666818, -0.43269514905],[51.51738184731, -0.43068197769],[51.51726824834, -0.42891310541],[51.51723842205, -0.42859927337],[51.51723842205, -0.42859927337],[51.51723684607, -0.42858269126],[51.51720061678, -0.42789212376],[51.51741362686, -0.4276830099],[51.51749867947, -0.42731975889],[51.51738657348, -0.42700653713],[51.51717791658, -0.42686959709],[51.51688440187, -0.42711031215],[51.51639325176, -0.42669485354],[51.51594075787, -0.42647984518],[51.51487282436, -0.42596898469],[51.51472213901, -0.42583620816],[51.51472213901, -0.42583620816],[51.5142904364, -0.42545581853],[51.51332706665, -0.42469639645],[51.5123796464, -0.42445526164],[51.51181594826, -0.42440835607],[51.51181594826, -0.42440835607],[51.51176749208, -0.42440432406],[51.51078276434, -0.42406361459],[51.51074642513, -0.42403604693],[51.51035411786, -0.42369115674],[51.51035411786, -0.42369115674],[51.51027324047, -0.42362005561],[51.50987765491, -0.42295641548],[51.50908887007, -0.42113913848],[51.50912346505, -0.42103707083],[51.50909591928, -0.42099479231],[51.5090337786, -0.42105458143],[51.50876316816, -0.42099188525],[51.50852715249, -0.42082712332],[51.50809656924, -0.42023679237],[51.50756693113, -0.41941349977],[51.50756693113, -0.41941349977],[51.50738017305, -0.41912320153],[51.50715023061, -0.41874209926],[51.50704315093, -0.41880344443],[51.50698728113, -0.41866128251],[51.50668615369, -0.41900312532],[51.50655129205, -0.41902635942],[51.50655129205, -0.41902635942],[51.50605815641, -0.41911131605],[51.50529397974, -0.41912335262],[51.50475056197, -0.41950238],[51.50443889152, -0.41972929458],[51.5041893608, -0.419896422],[51.50409889839, -0.41985632487],[51.50409126844, -0.41995744949],[51.50395780589, -0.42006292588],[51.50310420191, -0.4208905512]]",
               "stopPoints":[
                  {
                     "$type":"Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                     "id":"490G00005477",
                     "name":"Colham Road",
                     "uri":"/StopPoint/490G00005477",
                     "type":"StopPoint",
                     "routeType":"Unknown",
                     "status":"Unknown"
                  },
                  {
                     "$type":"Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                     "id":"490G00009845",
                     "name":"Micawber Avenue",
                     "uri":"/StopPoint/490G00009845",
                     "type":"StopPoint",
                     "routeType":"Unknown",
                     "status":"Unknown"
                  },
                  {
                     "$type":"Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                     "id":"490G00007815",
                     "name":"Pield Heath Avenue",
                     "uri":"/StopPoint/490G00007815",
                     "type":"StopPoint",
                     "routeType":"Unknown",
                     "status":"Unknown"
                  },
                  {
                     "$type":"Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                     "id":"490G00009070",
                     "name":"Lees Road",
                     "uri":"/StopPoint/490G00009070",
                     "type":"StopPoint",
                     "routeType":"Unknown",
                     "status":"Unknown"
                  },
                  {
                     "$type":"Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                     "id":"490G00019719",
                     "name":"Lady Craig Court",
                     "uri":"/StopPoint/490G00019719",
                     "type":"StopPoint",
                     "routeType":"Unknown",
                     "status":"Unknown"
                  },
                  {
                     "$type":"Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                     "id":"490G00009818",
                     "name":"Merrimans Corner / Harlington Road",
                     "uri":"/StopPoint/490G00009818",
                     "type":"StopPoint",
                     "routeType":"Unknown",
                     "status":"Unknown"
                  },
                  {
                     "$type":"Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                     "id":"490G000468",
                     "name":"Corwell Gardens",
                     "uri":"/StopPoint/490G000468",
                     "type":"StopPoint",
                     "routeType":"Unknown",
                     "status":"Unknown"
                  },
                  {
                     "$type":"Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                     "id":"490G00014841",
                     "name":"Wood End Park School",
                     "uri":"/StopPoint/490G00014841",
                     "type":"StopPoint",
                     "routeType":"Unknown",
                     "status":"Unknown"
                  },
                  {
                     "$type":"Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                     "id":"490G00011210",
                     "name":"Princes Park Lane",
                     "uri":"/StopPoint/490G00011210",
                     "type":"StopPoint",
                     "routeType":"Unknown",
                     "status":"Unknown"
                  },
                  {
                     "$type":"Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                     "id":"490G00009151",
                     "name":"Lilac Gardens",
                     "uri":"/StopPoint/490G00009151",
                     "type":"StopPoint",
                     "routeType":"Unknown",
                     "status":"Unknown"
                  },
                  {
                     "$type":"Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                     "id":"490G00013122",
                     "name":"Willenhall Drive",
                     "uri":"/StopPoint/490G00013122",
                     "type":"StopPoint",
                     "routeType":"Unknown",
                     "status":"Unknown"
                  },
                  {
                     "$type":"Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                     "id":"490G00004175",
                     "name":"Botwell Common",
                     "uri":"/StopPoint/490G00004175",
                     "type":"StopPoint",
                     "routeType":"Unknown",
                     "status":"Unknown"
                  },
                  {
                     "$type":"Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                     "id":"490G00011221",
                     "name":"Printing House Lane",
                     "uri":"/StopPoint/490G00011221",
                     "type":"StopPoint",
                     "routeType":"Unknown",
                     "status":"Unknown"
                  },
                  {
                     "$type":"Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                     "id":"490G00004177",
                     "name":"Botwell Green",
                     "uri":"/StopPoint/490G00004177",
                     "type":"StopPoint",
                     "routeType":"Unknown",
                     "status":"Unknown"
                  },
                  {
                     "$type":"Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                     "id":"490G000162",
                     "name":"Hayes Town",
                     "uri":"/StopPoint/490G000162",
                     "type":"StopPoint",
                     "routeType":"Unknown",
                     "status":"Unknown"
                  },
                  {
                     "$type":"Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                     "id":"490G01144N",
                     "name":"Hayes and Harlington Station",
                     "uri":"/StopPoint/490G01144N",
                     "type":"StopPoint",
                     "routeType":"Unknown",
                     "status":"Unknown"
                  }
               ],
               "elevation":[

               ]
            },
            "routeOptions":[
               {
                  "$type":"Tfl.Api.Presentation.Entities.JourneyPlanner.RouteOption, Tfl.Api.Presentation.Entities",
                  "name":"U4",
                  "directions":[
                     "Hayes, Prologis Park"
                  ],
                  "lineIdentifier":{
                     "$type":"Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                     "id":"u4",
                     "name":"U4",
                     "uri":"/Line/u4",
                     "type":"Line",
                     "crowding":{
                        "$type":"Tfl.Api.Presentation.Entities.Crowding, Tfl.Api.Presentation.Entities"
                     },
                     "routeType":"Unknown",
                     "status":"Unknown"
                  }
               }
            ],
            "mode":{
               "$type":"Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
               "id":"bus",
               "name":"bus",
               "type":"Mode",
               "routeType":"Unknown",
               "status":"Unknown"
            },
            "disruptions":[
               {
                  "$type":"Tfl.Api.Presentation.Entities.Disruption, Tfl.Api.Presentation.Entities",
                  "category":"PlannedWork",
                  "type":"lineInfo",
                  "categoryDescription":"PlannedWork",
                  "description":"HIGH STREET, UB8: Routes 427 U1 U3 U4 and U7 are on diversion from 08:00 Monday, 6 January to 17:00 Monday, 20 July due to Hillingdon Council works. \n\nBuses towards Uxbridge are diverted via Hillingdon Road, missing Civic Centre bus stop.",
                  "summary":"NO20/96/B / HIGH STREET, UB8 / ROUTES 427 U1 U3 U4 U7",
                  "additionalInfo":"",
                  "created":"2020-06-02T09:31:00",
                  "lastUpdate":"2020-06-02T09:32:00"
               }
            ],
            "plannedWorks":[

            ],
            "distance":121,
            "isDisrupted":true,
            "hasFixedLocations":true
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.JourneyPlanner.Leg, Tfl.Api.Presentation.Entities",
            "duration":8,
            "instruction":{
               "$type":"Tfl.Api.Presentation.Entities.Instruction, Tfl.Api.Presentation.Entities",
               "summary":"Great Western Railway to Ealing Broadway",
               "detailed":"Great Western Railway towards London Paddington",
               "steps":[

               ]
            },
            "obstacles":[
               {
                  "$type":"Tfl.Api.Presentation.Entities.JourneyPlanner.Obstacle, Tfl.Api.Presentation.Entities",
                  "type":"STAIRS",
                  "incline":"UP",
                  "stopId":1000062,
                  "position":"AFTER"
               },
               {
                  "$type":"Tfl.Api.Presentation.Entities.JourneyPlanner.Obstacle, Tfl.Api.Presentation.Entities",
                  "type":"STAIRS",
                  "incline":"DOWN",
                  "stopId":1000062,
                  "position":"AFTER"
               }
            ],
            "departureTime":"2020-06-18T12:11:00",
            "arrivalTime":"2020-06-18T12:19:00",
            "departurePoint":{
               "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
               "naptanId":"910GHAYESAH",
               "platformName":"",
               "icsCode":"1001144",
               "commonName":"Hayes & Harlington Rail Station",
               "placeType":"StopPoint",
               "additionalProperties":[

               ],
               "lat":51.50298864965,
               "lon":-0.42021170883000003
            },
            "arrivalPoint":{
               "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
               "naptanId":"910GEALINGB",
               "platformName":"",
               "icsCode":"1000062",
               "commonName":"Ealing Broadway Rail Station",
               "placeType":"StopPoint",
               "additionalProperties":[

               ],
               "lat":51.514962021509994,
               "lon":-0.30212193606
            },
            "path":{
               "$type":"Tfl.Api.Presentation.Entities.JourneyPlanner.Path, Tfl.Api.Presentation.Entities",
               "lineString":"[[51.50297859572, -0.42019691245],[51.50288038984, -0.41818388332],[51.50282236696, -0.41521778726],[51.50284121687, -0.41328642298],[51.50297728537, -0.40674031253],[51.50311435638, -0.40359450385],[51.5032777175, -0.40040452936],[51.50336926524, -0.39920542042],[51.50372413503, -0.3955620205],[51.5040412559, -0.39245301312],[51.50539598026, -0.38306822081],[51.50600104223, -0.37869518395],[51.50603997483, -0.37841561732],[51.50603997483, -0.37841561732],[51.50759564059, -0.36724039139],[51.50940865654, -0.35476818814],[51.51031311001, -0.34874073797],[51.51097247678, -0.34384599341],[51.51138216993, -0.34102097272],[51.51172206797, -0.33846774996],[51.51172206797, -0.33846774996],[51.5119836105, -0.33650280152],[51.51202405431, -0.33618427954],[51.51206367983, -0.33580814151],[51.51271365249, -0.3296595542],[51.51317751167, -0.32435349796],[51.51351000371, -0.32013023447],[51.51351000371, -0.32013023447],[51.51354277239, -0.31971390348],[51.51386217194, -0.31439856382],[51.51424637676, -0.30860514891],[51.51452047934, -0.30454518289],[51.51465246286, -0.30247933875],[51.5146889072, -0.30174877791]]",
               "stopPoints":[
                  {
                     "$type":"Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                     "id":"910GEALINGB",
                     "name":"Ealing Broadway Rail Station",
                     "uri":"/StopPoint/910GEALINGB",
                     "type":"StopPoint",
                     "routeType":"Unknown",
                     "status":"Unknown"
                  }
               ],
               "elevation":[

               ]
            },
            "routeOptions":[
               {
                  "$type":"Tfl.Api.Presentation.Entities.JourneyPlanner.RouteOption, Tfl.Api.Presentation.Entities",
                  "name":"Great Western Railway",
                  "directions":[
                     "London Paddington Rail Station"
                  ],
                  "lineIdentifier":{
                     "$type":"Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                     "id":"great-western-railway",
                     "name":"Great Western Railway",
                     "uri":"/Line/great-western-railway",
                     "type":"Line",
                     "crowding":{
                        "$type":"Tfl.Api.Presentation.Entities.Crowding, Tfl.Api.Presentation.Entities"
                     },
                     "routeType":"Unknown",
                     "status":"Unknown"
                  }
               }
            ],
            "mode":{
               "$type":"Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
               "id":"national-rail",
               "name":"national-rail",
               "type":"Mode",
               "routeType":"Unknown",
               "status":"Unknown"
            },
            "disruptions":[
               {
                  "$type":"Tfl.Api.Presentation.Entities.Disruption, Tfl.Api.Presentation.Entities",
                  "category":"RealTime",
                  "type":"lineInfo",
                  "categoryDescription":"RealTime",
                  "description":"CHANGES TO GWR SERVICES FROM MONDAY 18 MAY: From Monday 23 March, a reduced service will operate. The Night Riviera sleeper service between London Paddington and Penzance will not operate until further notice. West Ealing to Greenford services operate hourly on Monday to Saturday and do not run on Sundays as per the normal service.",
                  "summary":"",
                  "additionalInfo":"For more information, please visit the <a href=\"https://www.gwr.com/travel-updates/live-network-updates/disruption-information\">GWR</a>&nbsp;website",
                  "created":"2020-03-24T09:55:00",
                  "lastUpdate":"2020-05-15T12:25:00"
               },
               {
                  "$type":"Tfl.Api.Presentation.Entities.Disruption, Tfl.Api.Presentation.Entities",
                  "category":"Information",
                  "type":"stopInfo",
                  "categoryDescription":"Information",
                  "description":"HAYES & HARLINGTON STATION: From Tuesday 2 June, a one way system applies between 0600 and 0930 Monday to Friday. Entrance into the station will be in front of the ticket office via Station Approach. Exit will be through the old station building at the end of platform 4 onto Station Road.",
                  "summary":"",
                  "additionalInfo":"",
                  "created":"2020-05-21T13:42:00",
                  "lastUpdate":"2020-05-21T13:46:00"
               },
               {
                  "$type":"Tfl.Api.Presentation.Entities.Disruption, Tfl.Api.Presentation.Entities",
                  "category":"RealTime",
                  "type":"stopInfo",
                  "categoryDescription":"RealTime",
                  "description":"HAYES & HARLINGTON STATION: The ticket office has reduced opening hours to protect customers and staff. Weekdays 06:10-19:10. Saturday 08:00-18:00. Sunday 08:00-19:00",
                  "summary":"",
                  "additionalInfo":"",
                  "created":"2020-05-04T18:29:00",
                  "lastUpdate":"2020-05-04T18:30:00"
               },
               {
                  "$type":"Tfl.Api.Presentation.Entities.Disruption, Tfl.Api.Presentation.Entities",
                  "category":"RealTime",
                  "type":"stopInfo",
                  "categoryDescription":"RealTime",
                  "description":"EALING BROADWAY STATION: The ticket office has reduced opening hours to protect customers and staff. Weekdays 05:35-23:25. Saturday 06:00-18:00. Sunday 07:00-20:30",
                  "summary":"",
                  "additionalInfo":"",
                  "created":"2020-05-04T18:20:00",
                  "lastUpdate":"2020-05-04T18:24:00"
               }
            ],
            "plannedWorks":[

            ],
            "isDisrupted":true,
            "hasFixedLocations":true
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.JourneyPlanner.Leg, Tfl.Api.Presentation.Entities",
            "duration":9,
            "instruction":{
               "$type":"Tfl.Api.Presentation.Entities.Instruction, Tfl.Api.Presentation.Entities",
               "summary":"Central line to White City",
               "detailed":"Central line towards Hainault",
               "steps":[

               ]
            },
            "obstacles":[

            ],
            "departureTime":"2020-06-18T12:21:00",
            "arrivalTime":"2020-06-18T12:30:00",
            "departurePoint":{
               "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
               "naptanId":"940GZZLUEBY",
               "platformName":"",
               "icsCode":"1000062",
               "commonName":"Ealing Broadway Underground Station",
               "placeType":"StopPoint",
               "additionalProperties":[

               ],
               "lat":51.514962021509994,
               "lon":-0.30212193606
            },
            "arrivalPoint":{
               "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
               "naptanId":"940GZZLUWCY",
               "platformName":"",
               "icsCode":"1000269",
               "commonName":"White City Underground Station",
               "placeType":"StopPoint",
               "additionalProperties":[

               ],
               "lat":51.51204601504,
               "lon":-0.22422122813999998
            },
            "path":{
               "$type":"Tfl.Api.Presentation.Entities.JourneyPlanner.Path, Tfl.Api.Presentation.Entities",
               "lineString":"[[51.51520181689, -0.3014499573],[51.51521182831, -0.29516588096],[51.51507438402, -0.29189941031],[51.5150260927, -0.2885863798],[51.51507801835, -0.28721525997],[51.51516383582, -0.28631847323],[51.51534871847, -0.28543237569],[51.51562388975, -0.28457170394],[51.51592019071, -0.28392641689],[51.51781304001, -0.28116000174],[51.51819013421, -0.28063760282],[51.51819013421, -0.28063760282],[51.51971671151, -0.27852267072],[51.52263331871, -0.27444862894],[51.52419163228, -0.27218418879],[51.52446259902, -0.27165497989],[51.52481062689, -0.27086336771],[51.52504096419, -0.27001854147],[51.52508228848, -0.26977191102],[51.52515764864, -0.26939424967],[51.52522253202, -0.2689160752],[51.52522322618, -0.26835384078],[51.52518047028, -0.26789416423],[51.52498864193, -0.26647430682],[51.52488147676, -0.26591617259],[51.52457108449, -0.26438551709],[51.52447417613, -0.26391349478],[51.52397056394, -0.26148206307],[51.52361749055, -0.2597087199],[51.52361749055, -0.2597087199],[51.52326127212, -0.25791974413],[51.52293173117, -0.25631785261],[51.52257007747, -0.2549766776],[51.52237019843, -0.25423475294],[51.52211767819, -0.25358133646],[51.52179368551, -0.25295949144],[51.52103100332, -0.2518643629],[51.51973419697, -0.25053028517],[51.51729676551, -0.24808697043],[51.51711074932, -0.24785435522],[51.51711074932, -0.24785435522],[51.5166369885, -0.24726192337],[51.51626824235, -0.24665632781],[51.51595147789, -0.24591903085],[51.51547841164, -0.24435182264],[51.51537157395, -0.24382266711],[51.51527601991, -0.24284629259],[51.51526112671, -0.24185240386],[51.51532667783, -0.24082659147],[51.51603788428, -0.23310278488],[51.51611104305, -0.23199017013],[51.51612323639, -0.23100962884],[51.51608215073, -0.23007439051],[51.51595734613, -0.22895503511],[51.5157895538, -0.22796706824],[51.51555797235, -0.22692393499],[51.51521744684, -0.22581298249],[51.51502370565, -0.22548902404],[51.51470414386, -0.22516995878],[51.51434972264, -0.22492431423],[51.51358870024, -0.22455036123],[51.51310099726, -0.22441079283],[51.51200243291, -0.22430815205]]",
               "stopPoints":[
                  {
                     "$type":"Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                     "id":"940GZZLUWTA",
                     "name":"West Acton Underground Station",
                     "uri":"/StopPoint/940GZZLUWTA",
                     "type":"StopPoint",
                     "routeType":"Unknown",
                     "status":"Unknown"
                  },
                  {
                     "$type":"Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                     "id":"940GZZLUNAN",
                     "name":"North Acton Underground Station",
                     "uri":"/StopPoint/940GZZLUNAN",
                     "type":"StopPoint",
                     "routeType":"Unknown",
                     "status":"Unknown"
                  },
                  {
                     "$type":"Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                     "id":"940GZZLUEAN",
                     "name":"East Acton Underground Station",
                     "uri":"/StopPoint/940GZZLUEAN",
                     "type":"StopPoint",
                     "routeType":"Unknown",
                     "status":"Unknown"
                  },
                  {
                     "$type":"Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                     "id":"940GZZLUWCY",
                     "name":"White City Underground Station",
                     "uri":"/StopPoint/940GZZLUWCY",
                     "type":"StopPoint",
                     "routeType":"Unknown",
                     "status":"Unknown"
                  }
               ],
               "elevation":[

               ]
            },
            "routeOptions":[
               {
                  "$type":"Tfl.Api.Presentation.Entities.JourneyPlanner.RouteOption, Tfl.Api.Presentation.Entities",
                  "name":"Central",
                  "directions":[
                     "Hainault Underground Station"
                  ],
                  "lineIdentifier":{
                     "$type":"Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                     "id":"central",
                     "name":"Central",
                     "uri":"/Line/central",
                     "type":"Line",
                     "crowding":{
                        "$type":"Tfl.Api.Presentation.Entities.Crowding, Tfl.Api.Presentation.Entities"
                     },
                     "routeType":"Unknown",
                     "status":"Unknown"
                  }
               }
            ],
            "mode":{
               "$type":"Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
               "id":"tube",
               "name":"tube",
               "type":"Mode",
               "routeType":"Unknown",
               "status":"Unknown"
            },
            "disruptions":[
               {
                  "$type":"Tfl.Api.Presentation.Entities.Disruption, Tfl.Api.Presentation.Entities",
                  "category":"RealTime",
                  "type":"stopInfo",
                  "categoryDescription":"RealTime",
                  "description":"Most Tube station ticket machines are only accepting bank cards. You can top up using your contactless and Oyster account, the TfL Oyster and contactless app or an Oyster ticket stop. Ticket machines at all London Overground and DLR stations are still accepting cash.",
                  "summary":"",
                  "additionalInfo":"<a href=\"http://content.tfl.gov.uk/stations-accepting-cash.pdf\">Some stations</a>&nbsp;are still accepting cash.",
                  "created":"2020-06-10T16:39:00",
                  "lastUpdate":"2020-06-11T09:51:00"
               },
               {
                  "$type":"Tfl.Api.Presentation.Entities.Disruption, Tfl.Api.Presentation.Entities",
                  "category":"RealTime",
                  "type":"stopInfo",
                  "categoryDescription":"RealTime",
                  "description":"Most Tube station ticket machines are only accepting bank cards. You can top up using your contactless and Oyster account, the TfL Oyster and contactless app or an Oyster ticket stop. Ticket machines at all London Overground and DLR stations are still accepting cash.",
                  "summary":"",
                  "additionalInfo":"<a href=\"http://content.tfl.gov.uk/stations-accepting-cash.pdf\">Some stations</a>&nbsp;are still accepting cash",
                  "created":"2020-06-10T17:56:00",
                  "lastUpdate":"2020-06-11T09:50:00"
               }
            ],
            "plannedWorks":[

            ],
            "isDisrupted":true,
            "hasFixedLocations":true
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.JourneyPlanner.Leg, Tfl.Api.Presentation.Entities",
            "duration":8,
            "instruction":{
               "$type":"Tfl.Api.Presentation.Entities.Instruction, Tfl.Api.Presentation.Entities",
               "summary":"Walk to 1 Ring Road, Shepherds Bush",
               "detailed":"Walk to 1 Ring Road, Shepherds Bush",
               "steps":[
                  {
                     "$type":"Tfl.Api.Presentation.Entities.InstructionStep, Tfl.Api.Presentation.Entities",
                     "description":"Wood Lane for 43 metres",
                     "turnDirection":"STRAIGHT",
                     "streetName":"Wood Lane",
                     "distance":43,
                     "cumulativeDistance":43,
                     "skyDirection":529,
                     "skyDirectionDescription":"North",
                     "cumulativeTravelTime":40,
                     "latitude":51.51194819839,
                     "longitude":-0.22488795965,
                     "pathAttribute":{
                        "$type":"Tfl.Api.Presentation.Entities.PathAttribute, Tfl.Api.Presentation.Entities"
                     },
                     "descriptionHeading":"Continue along ",
                     "trackType":"None"
                  },
                  {
                     "$type":"Tfl.Api.Presentation.Entities.InstructionStep, Tfl.Api.Presentation.Entities",
                     "description":"on to Ring Road, continue for 254 metres",
                     "turnDirection":"RIGHT",
                     "streetName":"Ring Road",
                     "distance":254,
                     "cumulativeDistance":297,
                     "skyDirection":259,
                     "skyDirectionDescription":"North",
                     "cumulativeTravelTime":264,
                     "latitude":51.51156000806,
                     "longitude":-0.22478775791,
                     "pathAttribute":{
                        "$type":"Tfl.Api.Presentation.Entities.PathAttribute, Tfl.Api.Presentation.Entities"
                     },
                     "descriptionHeading":"Turn right",
                     "trackType":"None"
                  }
               ]
            },
            "obstacles":[
               {
                  "$type":"Tfl.Api.Presentation.Entities.JourneyPlanner.Obstacle, Tfl.Api.Presentation.Entities",
                  "type":"STAIRS",
                  "incline":"UP",
                  "stopId":1000269,
                  "position":"BEFORE"
               },
               {
                  "$type":"Tfl.Api.Presentation.Entities.JourneyPlanner.Obstacle, Tfl.Api.Presentation.Entities",
                  "type":"STAIRS",
                  "incline":"DOWN",
                  "stopId":1000269,
                  "position":"BEFORE"
               }
            ],
            "departureTime":"2020-06-18T12:30:00",
            "arrivalTime":"2020-06-18T12:38:00",
            "departurePoint":{
               "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
               "naptanId":"940GZZLUWCY",
               "platformName":"",
               "icsCode":"1000269",
               "commonName":"White City Underground Station",
               "placeType":"StopPoint",
               "additionalProperties":[

               ],
               "lat":51.51204601504,
               "lon":-0.22422122813999998
            },
            "arrivalPoint":{
               "$type":"Tfl.Api.Presentation.Entities.Place, Tfl.Api.Presentation.Entities",
               "commonName":"1 Ring Road, Shepherds Bush",
               "placeType":"StopPoint",
               "lat":51.51011546846,
               "lon":-0.22738022563
            },
            "path":{
               "$type":"Tfl.Api.Presentation.Entities.JourneyPlanner.Path, Tfl.Api.Presentation.Entities",
               "lineString":"[[51.51200238775, -0.22430939357],[51.51205565634, -0.22426408776],[51.51196399278, -0.22474323091],[51.51194819839, -0.22488795965],[51.51156000806, -0.22478775791],[51.51152073952, -0.2251639792],[51.51032985383, -0.22728543876],[51.51007973756, -0.22739602336],[51.51011546846, -0.22738022563]]",
               "stopPoints":[

               ],
               "elevation":[

               ]
            },
            "routeOptions":[
               {
                  "$type":"Tfl.Api.Presentation.Entities.JourneyPlanner.RouteOption, Tfl.Api.Presentation.Entities",
                  "name":"",
                  "directions":[
                     ""
                  ]
               }
            ],
            "mode":{
               "$type":"Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
               "id":"walking",
               "name":"walking",
               "type":"Mode",
               "routeType":"Unknown",
               "status":"Unknown"
            },
            "disruptions":[

            ],
            "plannedWorks":[

            ],
            "distance":297,
            "isDisrupted":false,
            "hasFixedLocations":false
         }
      ],
      "fare":{
         "$type":"Tfl.Api.Presentation.Entities.JourneyPlanner.JourneyFare, Tfl.Api.Presentation.Entities",
         "totalCost":300,
         "fares":[
            {
               "$type":"Tfl.Api.Presentation.Entities.JourneyPlanner.Fare, Tfl.Api.Presentation.Entities",
               "lowZone":0,
               "highZone":0,
               "cost":150,
               "isHopperFare":false,
               "peak":0,
               "offPeak":0,
               "taps":[
                  {
                     "$type":"Tfl.Api.Presentation.Entities.JourneyPlanner.FareTap, Tfl.Api.Presentation.Entities",
                     "atcoCode":"490G00004528",
                     "tapDetails":{
                        "$type":"Tfl.Api.Presentation.Entities.JourneyPlanner.FareTapDetails, Tfl.Api.Presentation.Entities",
                        "modeType":"Bus",
                        "validationType":"Entry",
                        "hostDeviceType":"ETM",
                        "busRouteId":"u3",
                        "nationalLocationCode":0,
                        "tapTimestamp":"2020-06-18T11:35:00"
                     }
                  }
               ]
            },
            {
               "$type":"Tfl.Api.Presentation.Entities.JourneyPlanner.Fare, Tfl.Api.Presentation.Entities",
               "lowZone":0,
               "highZone":0,
               "cost":0,
               "isHopperFare":true,
               "peak":0,
               "offPeak":0,
               "taps":[
                  {
                     "$type":"Tfl.Api.Presentation.Entities.JourneyPlanner.FareTap, Tfl.Api.Presentation.Entities",
                     "atcoCode":"490G00008225",
                     "tapDetails":{
                        "$type":"Tfl.Api.Presentation.Entities.JourneyPlanner.FareTapDetails, Tfl.Api.Presentation.Entities",
                        "modeType":"Bus",
                        "validationType":"Entry",
                        "hostDeviceType":"ETM",
                        "busRouteId":"u4",
                        "nationalLocationCode":0,
                        "tapTimestamp":"2020-06-18T11:48:00"
                     }
                  }
               ]
            },
            {
               "$type":"Tfl.Api.Presentation.Entities.JourneyPlanner.Fare, Tfl.Api.Presentation.Entities",
               "lowZone":2,
               "highZone":5,
               "cost":150,
               "chargeProfileName":"Standard peak/off peak",
               "isHopperFare":false,
               "chargeLevel":"Off Peak",
               "peak":280,
               "offPeak":150,
               "taps":[
                  {
                     "$type":"Tfl.Api.Presentation.Entities.JourneyPlanner.FareTap, Tfl.Api.Presentation.Entities",
                     "atcoCode":"910GHAYESAH",
                     "tapDetails":{
                        "$type":"Tfl.Api.Presentation.Entities.JourneyPlanner.FareTapDetails, Tfl.Api.Presentation.Entities",
                        "modeType":"Rail",
                        "validationType":"None",
                        "hostDeviceType":"Gate",
                        "nationalLocationCode":3186,
                        "tapTimestamp":"2020-06-18T12:11:00"
                     }
                  },
                  {
                     "$type":"Tfl.Api.Presentation.Entities.JourneyPlanner.FareTap, Tfl.Api.Presentation.Entities",
                     "atcoCode":"940GZZLUWCY",
                     "tapDetails":{
                        "$type":"Tfl.Api.Presentation.Entities.JourneyPlanner.FareTapDetails, Tfl.Api.Presentation.Entities",
                        "modeType":"Rail",
                        "validationType":"None",
                        "hostDeviceType":"Gate",
                        "nationalLocationCode":764,
                        "tapTimestamp":"2020-06-18T12:30:00"
                     }
                  }
               ]
            }
         ],
         "caveats":[
            {
               "$type":"Tfl.Api.Presentation.Entities.JourneyPlanner.FareCaveat, Tfl.Api.Presentation.Entities",
               "text":"<p>Unlimited bus and tram journeys within one hour.</p>",
               "type":"hopper"
            },
            {
               "$type":"Tfl.Api.Presentation.Entities.JourneyPlanner.FareCaveat, Tfl.Api.Presentation.Entities",
               "text":"<p>Fares between two stations may vary depending on the direction of travel, time of day and day of the week.</p><p>We charge higher fares at the busiest times of the day (usually between 06:30 and 09:30, and between 16:00 and 19:00, Monday to Friday).</p><p>When you pay as you go, you must touch your contactless or Oyster card on a yellow reader at the start and end of your journey.</p><p>Some journeys are charged via Zone 1 regardless of the route taken.</p><p>If your journey avoids Zone 1 and you see a pink card reader when changing trains, touch your contactless or Oyster card on it to pay the right fare.</p>",
               "type":"allRailModes"
            },
            {
               "$type":"Tfl.Api.Presentation.Entities.JourneyPlanner.FareCaveat, Tfl.Api.Presentation.Entities",
               "text":"The price shown is a single adult pay as you go fare.",
               "type":"generic"
            }
         ]
      }
   }
];

export const path = [{
   mode: 'straight',
   path: [
      { lat: 51.5340733, lng: -0.4795997 },
      { lat: 51.5100255, lng: -0.2268465 }
   ]
}];