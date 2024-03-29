import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["form", "input", "list"]
  connect() {

  }

  search() {
    const url = `${this.formTarget.action}?query=${this.inputTarget.value}`
    fetch(url, { headers: {"Accept": "text/plain"}})
      .then(response => response.text())
      .then((data) => {
        // console.log(data)
        this.listTarget.outerHTML = data
      })
  }
}
