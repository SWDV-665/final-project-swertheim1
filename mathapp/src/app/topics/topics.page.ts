import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { ActivatedRoute } from '@angular/router';
import { NgZone } from '@angular/core';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.page.html',
  styleUrls: ['./topics.page.scss'],
})
export class TopicsPage {
  selectedProblemType: string = '';
  problemSubtopics: any[] = [];
  subTopics: string[] = [];
  

  constructor(private router: Router, private route: ActivatedRoute, private ngZone: NgZone) {

  }

  ngOnInit() {
    // Retrieve the selected problem type from the URL parameters
    this.route.paramMap.subscribe((params: any) => {
      this.selectedProblemType = params.get('problemType');
      this.subTopics = params.get('subtopics') || [];
      this.fetchSubtopics();

      console.log('Selected Problem Type on Topics Page:', this.selectedProblemType);
      console.log('List of subTopics on Topics Page', this.subTopics)
    });
  }

  loadProblems(problemType: string, subtopic: string) {
    console.log('loadProblems function accessed')
    // Ensure problemType is a valid string before proceeding
    if (problemType && typeof problemType === 'string') {

      // Navigate to the problems page, passing the selected problem type as a parameter
      console.log('the current problem type is: ', problemType);

      // Convert subtopic to lowercase and replace spaces with hyphens
      const formattedSubtopic = subtopic.toLowerCase().replace(/\s/g, '-');
      console.log('formatted subtopic', formattedSubtopic)

      // Construct the page name using the problemType and formatted subtopic
      const pageName = `${problemType.toLowerCase()}-with-${formattedSubtopic}`;
      console.log('Constructed pageName:', pageName);

      // Navigate to the constructed pageName
      console.log(`Navigate to the constructed page with the following: /${pageName}`)
      this.router.navigate([`/${pageName}`], { state: { problemType, subtopic } });
    }

  }

  handleButtonClick(problemType: string, subtopic: string): void {
    this.ngZone.run(() => {
      console.log(`handleButtonClick called with: ${problemType} and a subtopic of ${subtopic}`);
      switch (subtopic.toLowerCase()) {
        case 'whole numbers': {
          console.log('subtopic is  ', subtopic)
          this.loadProblems(problemType, subtopic)
          break;
        }
        case 'decimals': {
          console.log('subtopic is  ', subtopic)
          this.loadProblems(problemType, subtopic)
          break;
        }
        case 'fractions': {
          console.log('subtopic is  ', subtopic)
          this.loadProblems(problemType, subtopic)
          break;
        }
        case 'equations': {
          console.log('subtopic is  ', subtopic)
          this.loadProblems(problemType, subtopic)
          break;
        }
        case 'integers': {
          console.log('subtopic is  ', subtopic)
          this.loadProblems(problemType, subtopic)
          break;
        }
        default: {
          'no option available'
          break;
        }
      }
    });
  }

  // openSubTopicsPage(subtopics: any) {
  //   // Navigate to the subtopics page based on the list of possible problemTypes
  //   console.log('openSubTopicsPage', subtopics)
  //   this.router.navigate(['./topic/', subtopics]);
  // }

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

      // case 'percent':
      //   return 'var(--ion-color-percent)';

      // case 'ratio':
      //   return 'var(--ion-color-ratio)';

      default:
        return 'blue'; // Default color if problemType doesn't match any case
    }
  }
  fetchSubtopics() {
    // Use this.selectedProblemType to fetch and display problemTypes
    console.log('Fetching problem types for', this.selectedProblemType);

    if (this.selectedProblemType === 'Addition') {
      this.problemSubtopics = this.problemSubtopics = [
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
          title: 'Integers',
          description: 'Demonstrate fluency with addition of both positive and negative whole numbers in equations.',
          information: ' more information on the topic'

        },
      ];
      console.log('printing problem subtopics ', this.problemSubtopics)
    }
    else if (this.selectedProblemType === 'Subtraction') {
      this.problemSubtopics = this.problemSubtopics = [
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
          title: 'Integers',
          description: 'Demonstrate fluency with subtraction of both positive and negative whole numbers in equations.',
          information: ' more information on the topic'

        },
      ];
      console.log('printing problem subtopics ', this.problemSubtopics)
    }
    else if (this.selectedProblemType === 'Multiplication') {
      this.problemSubtopics = [
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
          title: 'Integers',
          description: 'Demonstrate fluency with multiplication of both positive and negative whole numbers.',
          information: ' more information on the topic'

        },
      ];
      console.log('printing problem subtopics ', this.problemSubtopics)
    }
    else if (this.selectedProblemType === 'Division') {
      this.problemSubtopics = [
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
          title: 'Integers',
          description: 'Demonstrate fluency with division of both positive and negative whole numbers.',
          information: ' more information on the topic'

        },
      ];
      console.log('printing problem subtopics ', this.problemSubtopics)
    }
  }

}