import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  @Input()
  latitude;

  @Input()
  longitude;

  @Input()
  zoom = 17;

  mapType = 'roadmap';

  constructor() { }

  ngOnInit() {
  }

}
