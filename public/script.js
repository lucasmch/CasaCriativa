function menu(){
    document
      .querySelector("#modal")
      .classList
      .toggle("hide")

    document
    .querySelector("body")
    .classList
    .toggle("hideScroll")

    document
    .querySelector("#modal")
    .classList
    .toggle("addScroll")
}

function checkFields(event) {

  const valuesToCheck = [
    "title",
    "category",
    "image",
    "description",
    "link"
  ]

  const isEmpty = valuesToCheck.find(function(value) {
    if (typeof event.target[value].value === "string" && !event.target[value].value.trim()) {
      return true;
    }

  });

  if(isEmpty) {
    event.preventDefault();
    alert('Por favor, preencha todos os campos.')
  }

}