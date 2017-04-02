module Modules.Homepage.Update exposing (..)

import Modules.Homepage.Msg as Msg exposing (..)
import Modules.Homepage.Model exposing (Model)


update : Msg -> Model -> Model
update msg model =
    case msg of
        NoOp ->
            model

        HandleInput text ->
            { model | text = text }

        HandleClick number ->
            { model | value = model.value + number }
