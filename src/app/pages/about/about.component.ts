import { AfterViewInit, Component, OnInit, NgZone } from '@angular/core';
import { Subject } from 'rxjs';
import { FeatureType, ToolType } from 'src/app/core/models';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements AfterViewInit {
  toolsSubject: Subject<ToolType> = new Subject()
  featuresSubject: Subject<FeatureType> = new Subject()

  toolTab: ToolType = "Languages"
  featTab: FeatureType = "Award"

  constructor(private ngZone: NgZone) { }

  ngAfterViewInit(): void {
    // Use setTimeout to push these operations to the next change detection cycle
    setTimeout(() => {
      this.switchToolTab(this.toolTab)
      this.switchFeatureTab(this.featTab)
    });
  }

  switchToolTab(toolTab: ToolType) {
    this.toolsSubject.next(toolTab)
    this.toolTab = toolTab
  }

  switchFeatureTab(featTab: FeatureType) {
    this.featuresSubject.next(featTab)
    this.featTab = featTab
  }

}
