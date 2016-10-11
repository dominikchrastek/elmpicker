import Html exposing (..)
import Html.App as App

import Components.Counter as Counter

-- APP
main : Program Never
main =
  App.beginnerProgram
  { model = init 0
  , view = view
  , update = update
  }

type alias Model =
  { firstCounter : Counter.Model }

init : Int -> Model
init first =
  { firstCounter = Counter.init first }

-- UPDATE

type Msg =
  First Counter.Msg

update : Msg -> Model -> Model
update msg model =
  case msg of
    First msg ->
      { model | firstCounter = Counter.update msg model.firstCounter }

view : Model -> Html Msg
view model =
  div
    []
    [ App.map First (Counter.view model.firstCounter)
    ]
