module Main.View.View exposing (..)

import Html exposing (Html, div, text)
import Main.Model as Model exposing (..)
import Html.Lazy exposing (lazy)
import Main.Msg as Msg exposing (..)
import Routing exposing (..)
import Modules.Homepage.View.View as Homepage exposing (..)


page : Model -> Html Msg
page model =
    case model.route of
        HomeRoute ->
            Html.map Msg.MsgForHomepageEntry (Homepage.view model.homepage)

        AboutRoute ->
            text "about"

        NotFoundRoute ->
            text "not found"


view : Model -> Html Msg
view model =
    div []
        [ lazy page model ]
