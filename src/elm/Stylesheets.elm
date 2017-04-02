port module Stylesheets exposing (..)

import Css.File exposing (..)
import Main.Css as Main
import Components.ButtonCSS as Button
import Modules.Homepage.Css as Homepage


port files : CssFileStructure -> Cmd msg


cssFiles : CssFileStructure
cssFiles =
    toFileStructure
        [ ( "main.css", compile [ Main.css ] )
        , ( "button.css", compile [ Button.css ] )
        , ( "homepage.css", compile [ Homepage.css ] )
        ]


main : CssCompilerProgram
main =
    Css.File.compiler files cssFiles
