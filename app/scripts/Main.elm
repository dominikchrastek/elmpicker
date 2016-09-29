import Html exposing (..)
import Html.Attributes exposing (..)
import Html.App as Html
import Html.Events exposing ( onClick )


-- APP
main : Program Never
main =
  Html.beginnerProgram { model = model, view = view, update = update }


-- MODEL
type alias Model = Int

model : number
model = 0


-- UPDATE
type Msg = Increment

update : Msg -> Model -> Model
update msg model =
  case msg of
    Increment -> model + 1

view : Model -> Html Msg
view model =
  div [ onClick Increment]
  [
    text "Elmpicker, Click on me!",
    div [ class "elpicker"]
    [
      text (toString model)
    ]
  ]