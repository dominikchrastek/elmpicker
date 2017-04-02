module Main.Msg exposing (..)

import Navigation exposing (Location)
import Modules.Homepage.Msg as Homepage


type Msg
    = OnLocationChange Location
    | MsgForHomepageEntry Homepage.Msg
