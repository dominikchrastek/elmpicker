module Components.Button exposing (..)

import Html exposing (..)
import Html.Events exposing (onClick)
import Components.ButtonCSS exposing (..)


{ class } =
    componentNamespace



-- VIEW


view : b -> (Int -> a) -> Html a
view value func =
    button
        [ class [ Button ], onClick (func 3) ]
        [ text (toString value) ]
