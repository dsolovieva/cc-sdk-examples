const vehicles = document.getElementById('vehicles');

const createVehicleCard = () => {
  const vehicle = document.createElement('div');
  vehicle.classList.add('vehicle');
  vehicle.innerHTML = `
          <div class="vehicle__picture">
            <img src="images/car.jpg" alt="">
          </div>
          <div class="vehicle__info">
            <h3><a href="#">BMW X6</a></h3>
            <ul class="vehicle__params">
              <li class="vehicle__params-item">VIN #: <span>5YFBURHE0HP727222</span></li>
              <li class="vehicle__params-item">Stock #: <span>27822</span></li>
              <li class="vehicle__params-item">MSRP: <span>$18,750</span></li>
            </ul>
            <button class="sms-button btn btn-outline-primary m-2"
              data-make="Mercedes-Benz"
              data-model="GLE"
              data-vin="5YFBURHE0HP727333"
              data-year="2017"
              data-status="New">
              Text Us
            </button>
          </div>
  `;

  return vehicle;
}
// const createCarcodeButton = () => {
//   const button = document.createElement('button');

//   button.innerHTML = 'Open Widget';

//   button.classList.add('sms-button');

//   button.classList.add('btn');
//   button.classList.add('btn-primary');
//   button.classList.add('m-2');

//   return button;
// }

document.getElementById('addMore').addEventListener('click', () => {
  vehicles.appendChild(createVehicleCard());
});