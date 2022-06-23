import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { THeadHomeUser } from '../utils/models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class IntercomService {

  constructor() { }

  // Observable string sources
  private itemHeadHomeUserSource = new Subject<THeadHomeUser>();

  // Observable string streams
  itemHeadHomeUser$ = this.itemHeadHomeUserSource.asObservable();

  // Service message commands
  announceHeadHomeUser(item:THeadHomeUser) {
    this.itemHeadHomeUserSource.next(item);
  }

}
