module Main.Update exposing (..)

import Routing exposing (parseLocation)
import Main.Msg as Msg exposing (..)
import Main.Model as Model exposing (Model)
import Modules.Homepage.Update as Homepage


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        OnLocationChange location ->
            let
                newRoute =
                    parseLocation location
            in
                ( { model | route = newRoute }, Cmd.none )

        MsgForHomepageEntry subMsg ->
            ( { model | homepage = Homepage.update subMsg model.homepage }
            , Cmd.none
            )
