import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { delay, Observable, of } from 'rxjs';
import { DataServiceService } from '../dataService/data-service.service';

@Injectable({
  providedIn: 'root'
})
export class DataResolver implements Resolve<any> {
  constructor(private yourService: DataServiceService) {} // Inject your service

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    // Fetch the data you need
    return this.yourService.getData(); // Return the array wrapped in an Observable
  }
}
