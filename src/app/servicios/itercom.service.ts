import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { TInfoHomeUser } from '../utils/models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class IntercomService {

  constructor() { }

  // Observable string sources
  private itemHeadHomeUserSource = new Subject<TInfoHomeUser | undefined>();

  // Observable string streams
  itemHeadHomeUser$ = this.itemHeadHomeUserSource.asObservable();

  // Service message commands
  announceHeadHomeUser(item:TInfoHomeUser | undefined) {
    this.itemHeadHomeUserSource.next(item);
  }

}
