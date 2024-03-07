import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="edit-movie"
export default class extends Controller {
  static targets = ["form", "infos"]
  connect() {

  }

  displayForm() {
    // console.log("Hiciste click en el lapiz")
    this.formTarget.classList.toggle("d-none")
  }

  async update(event) {
    event.preventDefault()
    const url = `${this.formTarget.action}`
    
    try {
      const response = await fetch(url, 
                                      { 
                                        method: "PATCH",
                                        headers: {"Accept": "text/plain"}, 
                                        body: new FormData(this.formTarget)
                                      }
                                    )
      const data = response.text()
      this.infosTarget.outerHTML = data
    }          
  }
}
