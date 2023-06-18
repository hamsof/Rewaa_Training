import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
  cropWidth: number = 93;
  @Input() rating: number = 0;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  ngOnChanges(): void {
    this.cropWidth = this.rating * 93 / 5;
  }
  onRatingClicked(): void {
    this.ratingClicked.emit(`Rating is ${this.rating}`);
  }
}
