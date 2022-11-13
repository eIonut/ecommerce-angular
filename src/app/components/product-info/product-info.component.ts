import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import {
  from,
  Observable,
  filter,
  tap,
  BehaviorSubject,
  takeUntil,
  Subscription,
  Subject,
} from 'rxjs';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss'],
})
export class ProductInfoComponent implements OnInit, OnDestroy {
  @Input() price!: number;
  @Input() id!: number;
  @Input() title!: string;
  @Input() rating!: number;
  @Input() brand!: string;
  @Input() image!: string;
  @Input() images!: string[];
  @Input() stock!: number;
  @Input() description!: string;
  @Input() category!: string;
  public imageObs$!: Observable<string>;
  public imagesArray: string[] = [];
  public imagesSubject = new BehaviorSubject(['']);
  public images$ = this.imagesSubject.asObservable();
  public imgArr!: string[];
  public imageSubs!: Subscription;
  public destroy$: Subject<boolean> = new Subject<boolean>();
  constructor() {}

  ngOnInit(): void {
    console.log(this.image);
    console.log(this.images);
    this.imageSubs = from(this.images)
      .pipe(
        filter((item) => item != this.image),
        takeUntil(this.destroy$),
        tap((it) => {
          this.imgArr = [...this.imagesSubject.getValue(), it];
          this.imagesSubject.next(this.imgArr);
        })
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
