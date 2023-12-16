import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Toast } from '@capacitor/toast';
import { ToastController } from '@ionic/angular';
import { ResultsDataService } from '../results-data.service';
import { HapticsService } from '../service/haptics.service';

@Component({
  selector: 'app-addition-with-decimals',
  templateUrl: './addition-with-decimals.page.html',
  styleUrls: ['./addition-with-decimals.page.scss'],
})
export class AdditionWithDecimalsPage implements OnInit {

  MIN_ONE: number = 11;
  MAX_ONE: number = 20;
  MIN_TWO: number = 1;
  MAX_TWO: number = 10;
 
  randomNumber1: number = 0;
  randomNumber2: number = 0;

  DECIMAL_PLACES: number = 1;

  
  answer: number = 0;
  answerList: number[] = [];
  alternateAnswer: number = 0;    
  numberOfAttempts: number = 0;           // Counter to keep track of the number of times an answer was tried
  numberOfCorrectAnswers: number = 0;     // Counter for correct answers
  numberOfQuestionsAsked: number = 0      // Counter for questions asked
  totalQuestionsToAsk: number = 3         // Counter for total number of questions to ask
  expression: string = ''
  
  constructor(private hapticsService: HapticsService, private route: ActivatedRoute, private router: Router, private toastController: ToastController, private resultsDataService: ResultsDataService) {
      console.log('Addition with decimal number constructor accessed'); 
  }

  ngOnInit() {


    const { problemType, subtopic } = this.router.getCurrentNavigation()?.extras.state || {};
    console.log(`Problem type: ${problemType}, Problem subtype ${subtopic}`);

    // Check if the values are defined before proceeding
    if (problemType && subtopic) {
        this.generateProblem();
    } else {
        console.error('ProblemType or subtopic is undefined');
    }
};
   
    generateProblem(): void {
        console.log('Generate Problem function accessed')

        this.randomNumber1 = this.getRandomDecimalNumbers(this.MIN_ONE, this.MAX_ONE, this.DECIMAL_PLACES);
        this.randomNumber2 = this.getRandomDecimalNumbers(this.MIN_TWO, this.MAX_TWO, this.DECIMAL_PLACES);
        this.generateExpression();
        console.log('Random numbers: ', this.randomNumber1, this.randomNumber2, 'Expression: ', this.expression, 'Answer: ', this.randomNumber1 + this.randomNumber2)

    }

  generateExpression() {
      console.log('generate an expression function accessed')
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
      console.log('generate an alternate answer function accessed')
      this.answerList.push(this.answer);
      

      for (let i = 0; i < 8; i++) {
          // Generate a new alternate answer in each iteration
          const alternateAnswer = this.getRandomDecimalNumbers(this.MIN_ONE, this.MAX_TWO, this.DECIMAL_PLACES)
                  this.answer + this.getRandomDecimalNumbers(this.MIN_ONE, this.MAX_TWO, this.DECIMAL_PLACES);

          // Ensure that this.answer is a number before comparison, if it is unique and not in the list, add it to the list
          if (this.answer !== alternateAnswer && !this.answerList.includes(alternateAnswer) || this.answer)  {
              this.answerList.push(alternateAnswer);
          }
          else {
              // If the alternate answer is the same as the correct answer or already in the list, decrement i to repeat the iteration
              i--;
          }
      }

      return this.answerList;
  }

roundToDecimalPlace(number: number, maxDecimalPlaces: number): number {
    // convert the number to a string and splitting it at the decimal point
    const decimalPlaces = (number.toString().split('.')[1] || '').length;
    
    // if the decimal places exceed the maxDecimalPlaces find another number 
    // having difficulty round decimals sometimes get values like 18.599999999999998
    
    // const roundedNumber = parseFloat(number.toFixed(decimalPlaces))

    if (decimalPlaces <= maxDecimalPlaces) {
        return parseFloat(number.toFixed(decimalPlaces));
      } else {
        // If too many decimal places, round the number to the desired decimal places
        console.log(`Too many decimal places: ${decimalPlaces}. Rounding to ${maxDecimalPlaces} places...`);
        return parseFloat(number.toFixed(maxDecimalPlaces));
      }
    }

    getRandomDecimalNumbers(min: number, max: number, decimals: number): number {
        //function multiplies the number by 10 to the power of the desired decimal places, 
        //rounds it to the nearest integer, and then divides it back by the same factor. 
        //This should help in achieving more accurate rounding for decimal numbers
        const factor = Math.pow(10, this.DECIMAL_PLACES)
        const randomDecimal = Math.random() * (max - min) + min;
        console.log(randomDecimal);
        return this.roundToDecimalPlace(randomDecimal, this.DECIMAL_PLACES);
    }
    
   

  shuffleAnswerList() {
	console.log('shuffle answer list function accessed')
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
	console.log('check answer function accessed')
      // count the number of attempts to answer the question correctly
      this.numberOfAttempts++
      console.log('number of uniques questions asked', this.numberOfQuestionsAsked)
      console.log(`number of attempts after clicking an answer ${this.numberOfAttempts}`)
      console.log(`number of questions answered correctly is: ${this.numberOfCorrectAnswers}`)
      
      if (typeof this.answer === 'number' && selectedAnswer === this.answer) {
          // Correct answer
          this.numberOfCorrectAnswers++;      
          console.log(`Correct answer selected.`);
          this.onCorrectAnswer();
          this.showCustomToast(`Correct!` ); 
          this.generateProblem();

      } else {
          // Incorrect answer
          if (this.numberOfAttempts < 3 && this.answer != selectedAnswer) {
              console.log(`Attempt ${this.numberOfAttempts}: Try again!`);
              this.showCustomToast(`Attempt ${this.numberOfAttempts}: Incorrect. Try again!`);
            
          }
         else{
              // console.log(`Maximum Number of attempts tried. The correct answer is ${this.answer}.`)
              this.showCustomToast(`Maximum Number of attempts was tried. The correct answer was ${this.answer}.`);
              this.generateExpression();
              
         }
      }
  }

  showCustomToast = async (_customText: string) => {
	console.log('show custom toast function accessed')
      await Toast.show({
        text: _customText,
        duration: 'long',
        position: 'center',
      });
      console.log('customToast activated')
    };

    onCorrectAnswer(): void {
        // trigger haptic feedback
        console.log('on correctAnswer function called')
        this.hapticsService.hapticsImpactMedium()
    }

}

