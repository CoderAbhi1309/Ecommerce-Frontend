import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-womencontent',
  templateUrl: './womencontent.component.html',
  styleUrls: ['./womencontent.component.css']
})
export class WomencontentComponent implements OnInit {
  
  @Input() title!: string;
  @Input() content!: string;
  @Input() imagesource!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
