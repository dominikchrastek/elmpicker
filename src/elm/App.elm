module App exposing (..)

import Navigation exposing (Location)
import Routing
import Main.Model as Model exposing (Model, initialModel)
import Main.Msg as Msg exposing (Msg)
import Main.Update as Update exposing (update)
import Main.View.View as View exposing (view)


init : Location -> ( Model, Cmd Msg )
init location =
    let
        currentRoute =
            Routing.parseLocation location
    in
        ( initialModel currentRoute, Cmd.none )


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.none



-- MAIN


main : Program Never Model Msg
main =
    Navigation.program Msg.OnLocationChange
        { init = init
        , view = view
        , update = update
        , subscriptions = subscriptions
        }
