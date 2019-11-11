# APS2-2019
Repositório destinado para desenvolvimento da APS (Atividade Prática Supervisionada) do 2°Semestre de 2019


Go to node_modules\metro-config\src\defaults\blacklist.js and change var sharedBlacklist to :

var sharedBlacklist = [
  /node_modules[\/\\]react[\/\\]dist[\/\\].*/,
  /website\/node_modules\/.*/,
  /heapCapture\/bundle\.js/,
  /.*\/__tests__\/.*/
];