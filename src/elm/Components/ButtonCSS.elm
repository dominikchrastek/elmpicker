module Components.ButtonCSS exposing (..)

import Css exposing (..)
import Css.Namespace exposing (namespace)
import Html.CssHelpers exposing (withNamespace)


componentNamespace : Html.CssHelpers.Namespace String class id msg
componentNamespace =
    withNamespace "Main"


type CssClasses
    = Button



-- import Html.CssHelpers exposing (withNamespace)


css : Stylesheet
css =
    (stylesheet << namespace componentNamespace.name)
        [ class Button
            [ color (Css.hex "f00") ]
        ]
