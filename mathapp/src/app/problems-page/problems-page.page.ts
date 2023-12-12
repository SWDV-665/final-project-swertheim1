import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ResultsDataService } from '../results-data.service';
import { Toast } from '@capacitor/toast';

@Component({
  selector: 'app-problems-page',
  templateUrl: './problems-page.page.html',
  styleUrls: ['./problems-page.page.scss'],
})


export class ProblemsPageComponent implements OnInit {
    
    
    MIN_ONE: number = 11;
    MAX_ONE: number = 20;
    MIN_TWO: number = 1;
    MAX_TWO: number = 10;
   
    randomNumber1: number = 0;
    randomNumber2: number = 0;

    DECIMAL_PLACES: number = 1;

    // fraction numbers
    numeratorRandomNumber1 = 0;
    numeratorRandomNumber2 = 0;
    denominatorRandomNumber1 = 1;
    denominatorRandomNumber2 = 1;

    answer: number = 0;
    answerList: number[] = [];
    alternateAnswer: number = 0;    
    numberOfAttempts: number = 0;           // Counter to keep track of the number of times an answer was tried
    numberOfCorrectAnswers: number = 0;     // Counter for correct answers
    numberOfQuestionsAsked: number = 0      // Counter for questions asked
    totalQuestionsToAsk: number = 3         // Counter for total number of questions to ask
    expression: string = ''
    
    constructor(private route: ActivatedRoute, private router: Router, private toastController: ToastController, private resultsDataService: ResultsDataService) {
        console.log('ProblemsPageComponent constructor accessed'); 
    }

    ngOnInit() {
        // Retrieve the problemType from the route parameters
        this.route.paramMap.subscribe((params: any) => {
          const problemType = params.get('problemType');
          console.log('Selected Problem Type:', problemType);
      
          // Now you can use the problemType as needed in your page
          // For example, call a method to generate problems based on the problemType
          this.generateProblems(problemType);
        });

    }

    // determine which number generator to use based on the problem type:
    generateProblems(problemType: string): void {
        console.log('type is', problemType)
        switch (problemType.toLowerCase()) {
            case 'whole numbers': {
                this.randomNumber1 = this.generateRandomWholeNumbers(this.MIN_ONE, this.MAX_ONE);
                this.randomNumber2 = this.generateRandomWholeNumbers(this.MIN_TWO, this.MAX_TWO);
                this.generateExpression();
                console.log('Random numbers: ', this.randomNumber1, this.randomNumber2, 'Expression: ', this.expression)
                break;
            }
            case 'decimals': {
                this.randomNumber1 = this.getRandomDecimalNumbers(this.MIN_ONE, this.MAX_ONE, this.DECIMAL_PLACES);
                this.randomNumber2 = this.getRandomDecimalNumbers(this.MIN_TWO, this.MAX_TWO, this.DECIMAL_PLACES);
                this.generateExpression();
                console.log('Random numbers: ', this.randomNumber1, this.randomNumber2, 'Expression: ', this.expression)
                break;
            }
            case 'fractions': {
                this.numeratorRandomNumber1 = this.generateRandomWholeNumbers(this.MIN_ONE, this.MAX_ONE);
                this.numeratorRandomNumber2 = this.generateRandomWholeNumbers(this.MIN_ONE, this.MAX_ONE);;
                this.denominatorRandomNumber1 = this.generateRandomWholeNumbers(this.MIN_ONE, this.MAX_ONE);
                this.denominatorRandomNumber2 = this.generateRandomWholeNumbers(this.MIN_ONE, this.MAX_ONE);
                this.expression = `${this.numeratorRandomNumber1}/${this.denominatorRandomNumber1} + ${this.numeratorRandomNumber2}/${this.denominatorRandomNumber2}`;
                console.log('Random numbers: ', this.randomNumber1, this.randomNumber2, 'Expression: ', this.expression)
                
                break;
            }
            case 'equations': {
                
                break;
            }
            case 'positive and negative whole numbers': {
                this.randomNumber1 = this.generateRandomWholeNumbers(-1 * this.MIN_ONE, this.MAX_ONE);
                this.randomNumber1 = this.generateRandomWholeNumbers(-1 * this.MIN_TWO, this.MAX_TWO);
                this.generateExpression();
                console.log('Random numbers: ', this.randomNumber1, this.randomNumber2, 'Expression: ', this.expression)
                break;
            }
            default: {
                'no option available'
                break;
            }

      }
    }

    generateExpression() {
        
        this.answerList = [];
         
            if (this.numberOfQuestionsAsked < this.totalQuestionsToAsk ) {
                this.answer = this.randomNumber1 + this.randomNumber2;
                //clear answer list when a new expression is generated
                this.expression = `${this.randomNumber1 } + ${this.randomNumber2}`
                this.generateAlternateAnswers();
                this.shuffleAnswerList();
                this.numberOfQuestionsAsked++;
                this.numberOfAttempts=0;
          
        }
        // if maximum number of problems have already been generated
        else {
            const dataToSend = {
                totalQuestions: this.totalQuestionsToAsk,
                totalCorrect: this.numberOfCorrectAnswers,
            };

            this.resultsDataService.setSharedResults(dataToSend)
            console.log('Data sent to ResultsDataService:', dataToSend)

            {
                this.router.navigate(['../results']);
            }
        }
       
    }

    generateAlternateAnswers() {

        // add correct answer to the list
        this.answerList.push(this.answer);
        

        for (let i = 0; i < 8; i++) {
            // Generate a new alternate answer in each iteration
            const alternateAnswer = this.generateRandomWholeNumbers(1, 
                    this.answer + this.generateRandomWholeNumbers(this.generateRandomWholeNumbers(1, 9),
                    this.generateRandomWholeNumbers(1, 9)
                )
            );

            // Ensure that this.answer is a number before comparison, if it is unique and not in the list, add it to the list
            if (this.answer !== alternateAnswer && !this.answerList.includes(alternateAnswer))  {
                this.answerList.push(alternateAnswer);
            }
            else {
                // If the alternate answer is the same as the correct answer or already in the list, decrement i to repeat the iteration
                i--;
            }
        }

        return this.answerList;
    }

    generateRandomWholeNumbers(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    getRandomDecimalNumbers(min: number, max: number, decimals: number): number {
        const randomDecimal = Math.random() * (max - min) + min;
        console.log(randomDecimal);
        return parseFloat(randomDecimal.toFixed(decimals));
      }
         

    shuffleAnswerList() {
        // Fisher-Yates algorithm
        // Picks a random item in the array then swaps with the current iteration
        for (let i = this.answerList.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = this.answerList[i];
            this.answerList[i] = this.answerList[j];
            this.answerList[j] = temp;
        }
    }

    // Handle button click to check the answer
    checkAnswer(selectedAnswer: number) {
        // count the number of attempts to answer the question correctly
        this.numberOfAttempts++
        console.log('number of uniques questions asked', this.numberOfQuestionsAsked)
        console.log(`number of attempts after clicking an answer ${this.numberOfAttempts}`)
        console.log(`number of questions answered correctly is: ${this.numberOfCorrectAnswers}`)
        
        if (typeof this.answer === 'number' && selectedAnswer === this.answer) {
            // Correct answer
            this.numberOfCorrectAnswers++;      

            console.log(`Correct answer selected.`);
            this.showCustomToast(`Correct!` ); 
            this.generateExpression();

        } else {
            // Incorrect answer
            if (this.numberOfAttempts < 3 && this.answer != selectedAnswer) {
                console.log(`Attempt ${this.numberOfAttempts}: Try again!`);
                this.showCustomToast(`Attempt ${this.numberOfAttempts}: Incorrect. Try again!`);
                
                // console.log(`number of failed attempts:  ${this.attempt}`)
            }
           else{
                // console.log(`Maximum Number of attempts tried. The correct answer is ${this.answer}.`)
                this.showCustomToast(`Maximum Number of attempts was tried. The correct answer was ${this.answer}.`);

                this.generateExpression();
                
           }
        }
    }

    showCustomToast = async (_customText: string) => {
        await Toast.show({
          text: _customText,
          duration: 'long',
          position: 'center',
        });
        console.log('customToast activated')
      };

}




 


 