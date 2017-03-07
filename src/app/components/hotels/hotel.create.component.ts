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

  constructor(private hotelService: HotelService, private router: Router) {
  }

  createHotel(hotel: Hotel) {
    this.hotelService.createHotel(hotel).subscribe(createdHotel => {
      this.router.navigate(['list']);
    })
  }

}
