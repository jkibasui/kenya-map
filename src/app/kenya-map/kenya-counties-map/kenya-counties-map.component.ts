import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { kenyaMapService } from '../kenya-map.service';

@Component({
  selector: 'kenya-counties-map',
  templateUrl: './kenya-counties-map.component.html',
  styleUrls: ['./kenya-counties-map.component.css']
})
export class KenyaCountiesMapComponent implements OnInit {

  coordinates: any;
  @Input() customFills: any; // expects [{ countyID: string, fillCountyColor: string = "#D0D0D0", strokeColor: string = "#8E8E8E", optionalTooltipData = base64 encoded JSON string }];
  @Input() fillCountyColor: string = "#D0D0D0"; //universal color for unspecified fillCountyColor
  @Input() strokeColor: string = "#8E8E8E"; //universal color for unspecified strokeColor
  @Output('onMapClick') click = new EventEmitter();
  xPosition: number = 0;
  yPosition: number = 0;
  tooltipData: any = {}

  constructor(private kenyaMapService: kenyaMapService) { }

  ngOnInit() {
    this.kenyaMapService.getkenyaCountiesMapCoordinates(this.customFills, this.fillCountyColor, this.strokeColor).then(data => this.coordinates = data);
  }

  onkenyaMapClick(county: any) {
    this.tooltipData.custom = ''
    this.getCountiesCenterCordinates(county.id);
    let countyID = county.id.slice(-2);
    let countyName = county.name;
    this.tooltipData.countyName = countyName;
    this.tooltipData.countyID = countyID;
    if (county.customData != undefined || !county.customData) {
      this.tooltipData.custom = JSON.parse(atob(county.customData).toString());
    } else {
      this.tooltipData.custom = '';
    }

    this.click.emit({ "county": { countyID, countyName } });
  }
  getCountiesCenterCordinates(countyID: any) {
    let countyDimensions = document.getElementById(countyID)!.getBoundingClientRect();
    let cx = countyDimensions.width / 2 + countyDimensions.left;
    let cy = countyDimensions.height / 2 + countyDimensions.top;
    this.xPosition = cx;
    this.yPosition = cy
  }
}
