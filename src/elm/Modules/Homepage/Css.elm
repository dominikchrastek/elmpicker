module Modules.Homepage.Css exposing (..)

import Css exposing (..)
import Css.Namespace exposing (namespace)
import Html.CssHelpers exposing (withNamespace)


moduleNamespace : Html.CssHelpers.Namespace String class id msg
moduleNamespace =
    withNamespace "Homepage"


type CssClasses
    = Custom


css : Stylesheet
css =
    (stylesheet << namespace moduleNamespace.name)
        [ class Custom
            [ backgroundColor (Css.hex "0f0")
            ]
        ]
