import { Component, Input, OnInit, ChangeDetectorRef, AfterContentChecked } from '@angular/core';
import { Subject } from 'rxjs';
import { projects } from 'src/app/core/data';
import { Category, IProject } from 'src/app/core/models';

@Component({
  selector: 'app-featured-project',
  templateUrl: './featured-project.component.html',
  styleUrls: ['./featured-project.component.scss']
})
export class FeaturedProjectComponent implements OnInit, AfterContentChecked {
  @Input() isFeatured: boolean = false
  @Input() categorySubject!: Subject<Category>;

  projects: { [id: string]: IProject } = projects
  category!: Category
  list: IProject[] = []
  private dataInitialized = false;

  constructor(private cdRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    if (!this.categorySubject) {
      this.getProjects()
    } else {
      this.categorySubject.subscribe((category: Category) => {
        this.category = category
        this.getProjects(category)
      })
    }
  }
  
  ngAfterContentChecked(): void {
    if (!this.dataInitialized && this.list.length > 0) {
      this.dataInitialized = true;
      this.cdRef.detectChanges();
    }
  }

  getProjects(category: Category | null = null) {
    category = category ? category : this.category
    this.list = []
    for (const key in this.projects) {
      const project = this.projects[key]
      let willDisplay = true

      if (!project.isVisible) willDisplay = false
      if (this.isFeatured == true && project.isFeatured != true) willDisplay = false
      if (category != null && project.category !== category) willDisplay = false

      if (willDisplay) this.list.push(project)
    }
  }
}