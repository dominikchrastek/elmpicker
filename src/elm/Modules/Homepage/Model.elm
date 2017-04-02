module Modules.Homepage.Model exposing (..)


type alias Model =
    { text : String
    , value : Int
    }


model : Model
model =
    { text = ""
    , value = 0
    }
