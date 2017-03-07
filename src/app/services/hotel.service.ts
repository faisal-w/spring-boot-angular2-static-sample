import { Injectable } from '@angular/core'

import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

export class Hotel {
  id: string
  name: string
  address: string
  zip: string
}

@Injectable()
export class HotelService {
  constructor(private http: Http) {
  }

  getHotels(): Observable<Hotel[]> {
    return this.http.get("/rest/hotels")
      .map(res => res.json())
  }

  createHotel(hotel: Hotel): Observable<Hotel> {
    let bodyString = JSON.stringify(hotel);
    console.log("Creating Hotel : " + bodyString)
    return this.http.post("/rest/hotels", bodyString)
      .map((res: Response) => res.json())
  }
}
