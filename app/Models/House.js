import { generateId } from "../Utils/generateId.js"

export class House {
  constructor(data){
    this.bedrooms = data.bedrooms || generateId()
    this.bathrooms = data.bathrooms
    this.levels = data.levels
    this.imgUrl = data.imgUrl
    this.year = data.year
    this.price = data.price
    this.description = data.description

  }

  get HouseCardTemplate(){
    return`
    <div class="col-md-4 col-lg-3 mb-3">
      <div class="card">
        <img src="${this.imgUrl}" alt="" class="img-fluid">
        <div class="card-body">
          <h5 class="text-uppercase">
            ${this.bedrooms} Bed/${this.bathrooms} Bath
          </h5>
          <p>${this.levels} Story, ${this.year} Home </p>
          <p>
            <strong>$ ${this.price}</strong>
          </p>
          <p>${this.description}</p>
        </div>
      </div>
    </div>
    `
  }
}