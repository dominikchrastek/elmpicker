require("../elm/Stylesheets")

const Elm = require("../elm/App");
const element = document.getElementById("main")

Elm.App.embed(element);
