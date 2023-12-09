"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdditionPage = void 0;
var core_1 = require("@angular/core");
var AdditionPage = function () {
    var _classDecorators = [(0, core_1.Component)({
            selector: 'app-addition',
            templateUrl: './addition.page.html',
            styleUrls: ['./addition.page.scss'],
        })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var AdditionPage = _classThis = /** @class */ (function () {
        function AdditionPage_1(route) {
            this.route = route;
            this.MIN_ONE = 11;
            this.MAX_ONE = 20;
            this.MIN_TWO = 1;
            this.MAX_TWO = 10;
            this.answerList = [];
            this.counter = 0; // Counter for correct answers
            this.numberOfQuestionsAsked = 0; // Counter for questions asked
            this.totalQuestionsToAsk = 0; // Counter for total number of questions to ask
        }
        AdditionPage_1.prototype.ngOnInit = function () {
            // Generate random numbers when the page loads
            this.randomNumber1 = this.generateRandomWholeNumbers(this.MIN_ONE, this.MAX_ONE);
            this.randomNumber2 = this.generateRandomWholeNumbers(this.MIN_TWO, this.MAX_TWO);
            if (this.randomNumber1 !== undefined && this.randomNumber2 !== undefined) {
                this.answer = this.randomNumber1 + this.randomNumber2;
            }
            else {
                // Handle the case where random numbers are not generated successfully
                console.error('Failed to generate random numbers.');
                return;
            }
            this.answerList = this.generateAlternateAnswers();
            // console.log('answerList before shuffle', this.answerList, 'correct answer\'s index', this.answerList.indexOf(this.answer));
            this.shuffleAnswerList();
            // console.log('answerList after shuffle', this.answerList, 'correct answer\'s index', this.answerList.indexOf(this.answer));
            this.answerOne = this.answerList[0];
            this.answerTwo = this.answerList[1];
            this.answerThree = this.answerList[2];
            this.answerFour = this.answerList[3];
            this.answerFive = this.answerList[4];
            this.answerSix = this.answerList[5];
            this.numberOfQuestionsAsked = this.trackQuestionsAsked();
            console.log('number of questions asked', this.numberOfQuestionsAsked);
        };
        AdditionPage_1.prototype.generateAlternateAnswers = function () {
            if (typeof this.answer !== 'number') {
                // Handle the case where this.answer is not a number (or undefined)
                console.error('Answer is not a number.');
                return [];
            }
            if (typeof this.answer === 'number' && !this.answerList.includes(this.answer)) {
                this.answerList.push(this.answer);
            }
            for (var i = 0; i < 5; i++) {
                // Generate a new alternate answer in each iteration
                var alternateAnswer = this.generateRandomWholeNumbers(1, this.answer + this.generateRandomWholeNumbers(this.generateRandomWholeNumbers(1, 9), this.generateRandomWholeNumbers(1, 9)));
                // Ensure that this.answer is a number before comparison
                if ((typeof this.answer === 'number' &&
                    this.answer !== alternateAnswer) &&
                    (!this.answerList.includes(alternateAnswer) &&
                        this.answer < alternateAnswer)) {
                    this.answerList.push(alternateAnswer);
                }
                else {
                    // If the alternate answer is the same as the correct answer or already in the list, decrement i to repeat the iteration
                    i--;
                }
            }
            return this.answerList;
        };
        AdditionPage_1.prototype.generateRandomWholeNumbers = function (min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };
        AdditionPage_1.prototype.shuffleAnswerList = function () {
            // Fisher-Yates algorithm
            // Picks a random item in the array then swaps with the current iteration
            for (var i = this.answerList.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var temp = this.answerList[i];
                this.answerList[i] = this.answerList[j];
                this.answerList[j] = temp;
            }
        };
        // Handle button click to check the answer
        AdditionPage_1.prototype.checkAnswer = function (selectedAnswer) {
            if (typeof this.answer === 'number' && selectedAnswer === this.answer) {
                // Correct answer
                this.counter++;
                console.log('correct answers', this.counter);
                // Notify the user via some popup (you can use a library like Toaster, SweetAlert, etc.)
                alert('Correct!'); // Replace with your preferred notification method
            }
            else {
                // Incorrect answer
                alert('Try again!'); // Replace with your preferred notification method
            }
            // Generate new numbers and answers for the next question
            this.generateQuestion();
        };
        // Reset the question for the next iteration
        AdditionPage_1.prototype.generateQuestion = function () {
            this.randomNumber1 = this.generateRandomWholeNumbers(this.MIN_ONE, this.MAX_ONE);
            this.randomNumber2 = this.generateRandomWholeNumbers(this.MIN_TWO, this.MAX_TWO);
            this.answer = this.randomNumber1 + this.randomNumber2;
            this.answerList = [];
            this.generateAlternateAnswers();
        };
        AdditionPage_1.prototype.trackQuestionsAsked = function () {
            if (this.numberOfQuestionsAsked < this.totalQuestionsToAsk) {
                this.numberOfQuestionsAsked++;
                console.log("Questions asked: ".concat(this.numberOfQuestionsAsked));
                // Increment the counter
                this.numberOfQuestionsAsked++;
            }
            else {
                // If the desired number of questions has been reached, inform the user
                console.log('You have reached the desired number of questions.');
            }
            return this.numberOfQuestionsAsked;
        };
        return AdditionPage_1;
    }());
    __setFunctionName(_classThis, "AdditionPage");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        AdditionPage = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return AdditionPage = _classThis;
}();
exports.AdditionPage = AdditionPage;
