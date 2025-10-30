import { Component, Input, OnInit, ChangeDetectorRef, AfterContentChecked } from '@angular/core';
import { Subject } from 'rxjs';
import { tools } from 'src/app/core/data';
import { Category, ITool, ToolType } from 'src/app/core/models';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit, AfterContentChecked {
  @Input() skills: string[] = []
  @Input() toolsSubject!: Subject<ToolType>;

  category!: ToolType
  list: ITool[] = []
  private dataInitialized = false;
  
  // Define fallback tool data to use when a tool ID is not found
  private fallbackTools: {[key: string]: ITool} = {
    'ts': {
      id: 'ts',
      image: 'assets/skills/typescript.png',
      name: 'TypeScript',
      categories: ['Languages']
    },
    'typescript': {
      id: 'typescript',
      image: 'assets/skills/typescript.png',
      name: 'TypeScript',
      categories: ['Languages']
    },
    'scss': {
      id: 'scss',
      image: 'assets/skills/scss.png',
      name: 'SCSS/Sass',
      categories: ['Web']
    },
    'angular': {
      id: 'angular',
      image: 'assets/skills/angular.png',
      name: 'Angular',
      categories: ['Web']
    },
    'react': {
      id: 'react',
      image: 'assets/skills/react.png',
      name: 'React',
      categories: ['Web']
    },
    'nextjs': {
      id: 'nextjs',
      image: 'assets/skills/nextjs.png',
      name: 'Next.js',
      categories: ['Web']
    },
    'tailwind': {
      id: 'tailwind',
      image: 'assets/skills/tailwind.png',
      name: 'Tailwind CSS',
      categories: ['Web']
    },
    'jest': {
      id: 'jest',
      image: 'assets/skills/jest.png',
      name: 'Jest',
      categories: ['Others']
    },
    'axios': {
      id: 'axios',
      image: 'assets/skills/axios.png',
      name: 'Axios',
      categories: ['Web']
    }
  };

  constructor(private cdRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    // Delay initialization to avoid ExpressionChangedAfterItHasBeenCheckedError
    setTimeout(() => {
      if (!this.toolsSubject) {
        this.getSkills();
      } else {
        this.toolsSubject.subscribe((category: ToolType) => {
          this.category = category;
          this.getSkills(category);
        });
      }
    }, 0);
  }
  
  ngAfterContentChecked(): void {
    // This lifecycle hook is intentionally left empty to avoid change detection errors
  }

  getSkills(category: ToolType | null = null) {
    category = category ? category : this.category;
    this.list = [];
    
    try {
      if (this.skills && this.skills.length > 0) {
        this.skills.forEach(skillId => {
          // First check main tools, then fallbacks, otherwise create a placeholder
          let tool: ITool | undefined = tools[skillId];
          
          if (!tool && this.fallbackTools[skillId]) {
            tool = this.fallbackTools[skillId];
          }
          
          if (tool) {
            this.list.push(tool);
          } else {
            // Create a placeholder tool with generic information
            const placeholderTool: ITool = {
              id: skillId,
              image: '',  // No image
              name: this.formatToolName(skillId),
              categories: category ? [category] : ['Others']
            };
            this.list.push(placeholderTool);
          }
        });
      } else {
        // Show all tools filtered by category
        for (const key in tools) {
          const tool = tools[key];
          if (tool && (category == null || tool.categories.includes(category))) {
            this.list.push(tool);
          }
        }
      }
    } catch (error) {
      console.error('Error in getSkills:', error);
    }
  }
  
  /**
   * Format a tool ID into a readable name
   */
  private formatToolName(id: string): string {
    if (!id) return 'Unknown Tool';
    
    // Capitalize first letter and replace hyphens with spaces
    return id.charAt(0).toUpperCase() + 
           id.slice(1).replace(/-/g, ' ');
  }

}
