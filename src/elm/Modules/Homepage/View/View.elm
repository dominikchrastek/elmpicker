module Modules.Homepage.View.View exposing (..)

import Modules.Homepage.Css exposing (..)
import Html exposing (Html, div, text, button, input)
import Html.Events exposing (onInput)
import Html.Attributes exposing (..)
import Modules.Homepage.Model exposing (..)
import Modules.Homepage.Msg exposing (..)
import Components.Button
import Html.Lazy exposing (lazy2)


{ id, class, classList } =
    moduleNamespace
view : Model -> Html Msg
view model =
    div []
        [ lazy2
            Components.Button.view
            model.value
            HandleClick
        , input [ type_ "text", placeholder "Name", onInput HandleInput ] []
        , div [ class [ Custom ] ] [ text model.text ]
        ]
