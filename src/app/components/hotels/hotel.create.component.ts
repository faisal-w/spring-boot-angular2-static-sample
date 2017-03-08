import {Component, OnInit} from '@angular/core';
import {HotelService, Hotel} from '../../services/hotel.service'
import {Router} from '@angular/router'

@Component({
  selector: 'create-hotel',
  templateUrl: './hotel.create.component.html',
  // styleUrls: ['./hotel.component.css'],
  providers: [HotelService]
})
export class HotelCreateComponent {

  hotel: Hotel = new Hotel();

  constructor(private hotelService: HotelService, private router: Router) {
  }

  createHotel() {
    this.hotelService.createHotel(this.hotel).subscribe(createdHotel => {
      this.router.navigate(['list']);
    })
  }

}
