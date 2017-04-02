port module Stylesheets exposing (..)

import Css.File exposing (..)
import Main.Css as Main


port files : CssFileStructure -> Cmd msg


cssFiles : CssFileStructure
cssFiles =
    toFileStructure [ ( "main.css", compile [ Main.css ] ) ]


main : CssCompilerProgram
main =
    Css.File.compiler files cssFiles
