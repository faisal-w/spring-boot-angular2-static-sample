import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {HotelService, Hotel} from "../../services/hotel.service";
import {Router, ActivatedRoute, Params} from "@angular/router";
import {OnInit, Component} from "@angular/core";
import "rxjs/add/operator/switchMap";

@Component({
  selector: 'edit-hotel',
  templateUrl: './hotel.edit.component.html',
  // styleUrls: ['./hotel.component.css'],
  providers: [HotelService]
})
export class HotelEditComponent implements OnInit {
  hotelModel: FormGroup
  constructor(private hotelService: HotelService,
              private route: ActivatedRoute,
              private router: Router,
              private fb: FormBuilder) {
    this.hotelModel = this.fb.group({
      "id": [],
      "name": ['', Validators.required],
      "address": ['', Validators.required],
      "zip": ['', Validators.required],
      "version": ['']
    })
  }

  updateHotel(hotel: Hotel) {
    this.hotelService.updateHotel(hotel).subscribe(updatedHotel =>
      this.router.navigate(['list'])
    )
  }

  ngOnInit() {
    this.route.params.switchMap((params: Params) =>
      this.hotelService
        .getHotel(params["id"])
    ).subscribe(hotel =>
      this.hotelModel = this.fb.group({
        "id": [hotel.id],
        "name": [hotel.name, Validators.required],
        "address": [hotel.address, Validators.required],
        "zip": [hotel.zip, Validators.required],
        "version": [hotel.version]
      })
    )
  }
}
