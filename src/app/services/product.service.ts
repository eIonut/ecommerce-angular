import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  public isHovered: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  public isHovered$: Observable<boolean> = this.isHovered.asObservable();
  constructor() {}

  public setIsHovered() {
    this.isHovered.next(true);
  }

  public setIsNotHovered() {
    this.isHovered.next(false);
  }
}
