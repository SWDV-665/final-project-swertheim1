import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-topics',
  templateUrl: './topics.page.html',
  styleUrls: ['./topics.page.scss'],
})
export class TopicsPage  {
  selectedProblemType = ''; 
  problemTypes: any[] = [];
  
  constructor(private router: Router, private route: ActivatedRoute) { 
      // Retrieve the selected problem type from the URL parameters
      this.route.paramMap.subscribe((params: any) => {
        this.selectedProblemType = params.get('problemType');
        this.fetchSubtopics();
        console.log('Selected Problem Type:', this.selectedProblemType);
      });
  }

  ngOnInit() {
  }

  loadProblems(problemType: string) {
    // Navigate to the problems page, passing the selected problem type as a parameter
    console.log('the current problem type is: ', problemType)
    
  }
  
  
  handleButtonClick(problemType: string): void {
    
    switch (problemType.toLowerCase()) {
      case 'whole numbers': {
        console.log('problems-page is ', problemType)
        this.router.navigate(['/problems-page', { problemType }]);
        break;
      }
      case 'decimals': {
          console.log('problems-page is ', problemType)
          this.router.navigate(['/problems-page', { problemType }]);
          break;
      }
      case 'fractions': {
        console.log('problems-page is ', problemType)
        this.router.navigate(['/problems-page', { problemType }]);
          break;
      }
      case 'equations': {
        console.log('problems-page is ', problemType)
        this.router.navigate(['/problems-page', { problemType }]);
          break;
      }
      case 'positive and negative whole numbers': {
        console.log('problems-page is ', problemType)
        this.router.navigate(['/problems-page', { problemType }]);
          break;
      }
      default: {
          'no option available'
          break;
      }
    }
  }
  
  openSubTopicsPage(subtopics: any) {
    // Navigate to the subtopics page based on the list of possible problemTypes
    console.log('openSubTopicsPage', subtopics)
    this.router.navigate(['./topic/', subtopics]);
  }

  problemType: string = '';

  getColorForProblemType(type: string): string {
    // console.log('getColorForProblemType ', type)

    switch (type.toLowerCase()) {
      case 'addition':
        
        return 'var(--ion-color-addition)';
      
        case 'subtraction':
        return 'var(--ion-color-subtraction)';
      
        case 'multiplication':
        return 'var(--ion-color-multiplication)';
        
        case 'division':
        return 'var(--ion-color-division)';
        
        case 'percent':
        return 'var(--ion-color-percent)';

        case 'ratio':
        return 'var(--ion-color-ratio)';
      
      default:
        return 'blue'; // Default color if problemType doesn't match any case
    }
  }
  fetchSubtopics() {
    // Use this.selectedProblemType to fetch and display problemTypes
    console.log('Fetching problem types for', this.selectedProblemType);

    if (this.selectedProblemType === 'Addition') {
      this.problemTypes = this.problemTypes = [
        {
          title: 'Whole Numbers',
          description: 'Demonstrate fluency with addition of whole numbers.',
          information: ' more information on the topic'
        },
        {
          title: 'Decimals',
          description: 'Demonstrate fluency with addition of decimal numbers.',
          information: ' more information on the topic'
        },
        {
          title: 'Fractions',
          description: 'Demonstrate fluency with addition of fractions.',
          information: 'more information on the topic'
        },
        {
          title: 'Equations',
          description: 'Demonstrate fluency with addition of whole numbers in equations.',
          information: ' more information on the topic'
        },
        {
          title: 'Positive and Negative Whole Numbers',
          description: 'Demonstrate fluency with addition of both positive and negative whole numbers in equations.',
          information: ' more information on the topic'

        },
      ];
      console.log('printing problem types ', this.problemTypes)
    }
    else if (this.selectedProblemType === 'Subtraction') {
      this.problemTypes = this.problemTypes = [
        {
          title: 'Whole Numbers',
          description: 'Demonstrate fluency with subtraction of whole numbers.',
          information: ' more information on the topic'
        },
        {
          title: 'Decimals',
          description: 'Demonstrate fluency with subtraction of decimal numbers.',
          information: ' more information on the topic'
        },
        {
          title: 'Fractions',
          description: 'Demonstrate fluency with subtraction of fractions.',
          information: ' more information on the topic'
        },
        {
          title: 'Equations',
          description: 'Demonstrate fluency with the ability to solve subtraction equations that involve whole numbers.',
          information: ' more information on the topic'
        },
        {
          title: 'Positive and Negative Whole Numbers',
          description: 'Demonstrate fluency with subtraction of both positive and negative whole numbers in equations.',
          information: ' more information on the topic'

        },
      ];
      console.log('printing problem types ', this.problemTypes)
    }
    else if (this.selectedProblemType === 'Multiplication') {
      this.problemTypes = [
        {
          title: 'Whole Numbers',
          description: 'Demonstrate fluency with multiplication of whole numbers.',
          information: ' more information on the topic'
        },
        {
          title: 'Decimals',
          description: 'Demonstrate fluency multiplication of decimal numbers.',
          information: ' more information on the topic'
        },
        {
          title: 'Fractions',
          description: 'Demonstrate fluency with multiplication of fractions.',
          information: ' more information on the topic'
        },
        {
          title: 'Equations',
          description: 'Demonstrate fluency with the ability to solve multiplication equations that involve whole numbers.',
          information: ' more information on the topic'
        },
        {
          title: 'Positive and Negative Whole Numbers',
          description: 'Demonstrate fluency with multiplication of both positive and negative whole numbers.',
          information: ' more information on the topic'

        },
      ];
    }
    else if (this.selectedProblemType === 'Division') {
      this.problemTypes = [
        {
          title: 'Whole Numbers',
          description: 'Demonstrate fluency with division of whole numbers.',
          information: ' more information on the topic'
        },
        {
          title: 'Decimals',
          description: 'Demonstrate fluency with division of decimal numbers.',
          information: ' more information on the topic'
        },
        {
          title: 'Fractions',
          description: 'Demonstrate fluency with division of fractions.',
          information: ' more information on the topic'
        },
        {
          title: 'Equations',
          description: 'Demonstrate fluency with the ability to solve division equations that involve whole numbers.',
          information: ' more information on the topic'
        },
        {
          title: 'Positive and Negative Whole Numbers',
          description: 'Demonstrate fluency with division of both positive and negative whole numbers.',
          information: ' more information on the topic'

        },
      ];
    }
  }

}