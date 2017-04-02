module Main.Css exposing (..)

import Css exposing (..)
import Css.Elements exposing (body, li)
import Css.Namespace exposing (namespace)
import Html.CssHelpers exposing (withNamespace)


componentNamespace : Html.CssHelpers.Namespace String class id msg
componentNamespace =
    withNamespace "Main"


type CssClasses
    = Class


css : Stylesheet
css =
    (stylesheet << namespace componentNamespace.name)
        [ body
            [ minHeight (Css.rem 75)
            , paddingTop (Css.rem 4.5)
            , backgroundColor (Css.hex "c2c2c2")
            ]
        , class Class
            [ textAlign center
            ]
        ]
