import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { kenyaMapService } from './kenya-map.service';

@Component({
	selector: 'kenya-map',
	templateUrl: './kenya-map.component.html',
	styleUrls: ['./kenya-map.component.css']
})
export class kenyaMapComponent implements OnInit {
	coordinates: any;
	@Input() fillColor: string = "#FFFFFF";
	@Input() fillCountyColor: string = "#D0D0D0";
	@Input() strokeColor: string = "#8E8E8E";
	@Output('onMapClick') click = new EventEmitter();

	constructor(private kenyaMapService: kenyaMapService) { }

	ngOnInit() {
		this.kenyaMapService.getkenyaMapCoordinates().then(data => this.coordinates = data);
	}

	onkenyaMapClick(county: any) {
		let countyID = county.id.slice(-2);
		let countyName = county.name;

		this.click.emit({ "county": { countyID, countyName } });
	}
}
