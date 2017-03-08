import {Component} from '@angular/core';
import {HotelService, Hotel} from '../../services/hotel.service'
import {Router} from '@angular/router'
import {FormGroup, FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'create-hotel',
  templateUrl: './hotel.create.component.html',
  // styleUrls: ['./hotel.component.css'],
  providers: [HotelService]
})
export class HotelCreateComponent {

  hotelModel: FormGroup;

  constructor(private hotelService: HotelService, private router: Router, fb: FormBuilder) {
    this.hotelModel = fb.group({
      "name" : ['', Validators.required],
      "address": ['', Validators.required],
      "zip": ['', Validators.required]
    })
  }

  createHotel(hotel: Hotel) {
    console.log("Create Hotel called..")
    console.log(this.hotelModel)
    this.hotelService.createHotel(hotel).subscribe(createdHotel => {
      this.router.navigate(['list']);
    })
  }

}
