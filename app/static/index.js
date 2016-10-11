require("../styles/stylus/Main.styl");
require("../styles/sass/Main.scss");


var Elm = require("../scripts/Main.elm");
Elm.Main.embed( document.getElementById("app"));
