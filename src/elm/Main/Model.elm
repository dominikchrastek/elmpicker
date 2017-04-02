module Main.Model exposing (..)

import Routing exposing (Route)
import Modules.Homepage.Model as Homepage


type alias Model =
    { homepage : Homepage.Model
    , route : Route
    }


initialModel : Route -> Model
initialModel route =
    { homepage = Homepage.model
    , route = route
    }
