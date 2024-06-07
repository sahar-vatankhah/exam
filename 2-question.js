/**
 * https://en.wikipedia.org/wiki/Magic_8_Ball
 * 
 * The Magic 8 Ball is a toy that can be used to answer yes or no questions. It has a window that shows one of 20 possible answers, which are divided into three categories: positive, negative, and neutral. The answer is randomly selected when the ball is shaken.
 *
 * To create a Magic 8 Ball program, you need to do the following:
 *   - we have three arrays that contain the possible answers for each category: positiveAnswers, negativeAnswers, and neutralAnswers.
 *   - Define a function that takes a question as an argument and returns a random answer from one of the three categories.
 *   - Inside the function, use the Math.random() method to generate a random number between 0 and 1.
 *   - Use an if-else statement to check the range of the random number and assign a category accordingly. For example, if the random number is between 0 and 0.33, the category is positive; if it is between 0.33 and 0.66, the category is negative; and if it is greater than 0.66, the category is neutral.
 *   - Use the Math.floor() method and the length property to generate a random index for the selected category array.
 *   - Use the index to access a random element from the array and assign it to a variable called answer.
 *   - Use a template literal to return a string that contains the category and the answer. For example, if the category is positive and the answer is “It is certain”, the string should be “Affirmative answer: It is certain”.
 *   - Call the function with a question and log the result to the console.
 */

const positiveAnswers = [
    'It is certain',
    'Without a doubt',
    'Yes - definitely',
    'You may rely on it',
    'As I see it, yes',
    'Most likely',
    'Outlook good',
    'Yes',
    'Signs point to yes',
    'Absolutely',
    'Absolutely yes',
  ];
  
  const negativeAnswers = [
    'Don’t count on it',
    'My reply is no',
    'My sources say no',
    'Outlook not so good',
    'Very doubtful',
    'No',
    'Better not tell you now',
    'Reply hazy, try again',
    'Cannot predict now',
    'Signs point to no',
    'Absolutely not',
    'Absolutely no',
  ];
  
  const neutralAnswers = [
    'Ask again later',
    'Cannot predict now',
    'Reply hazy, try again',
    'Better not tell you now',
    'Concentrate and ask again',
    'Outlook uncertain',
    'Signs point to maybe',
    'Indications say yes',
    'Indications say no',
    'The stars are not aligned',
    'It’s unclear, try again',
    'I’m not sure, ask again',
    'I need more information',
    'I’m unable to answer that',
  ];
  
  // ======== answer ========
  
  function magicBall (question) {
  
    const random = Math.random();
  
    let category;
    let answer;
    
  
  
    if (random  <  0.33){
      category = "positive";
      answer = positiveAnswers[Math.floor(Math.random() * positiveAnswers.length)];
    } else if(random  <  0.66){
      category = "negative";
      answer = negativeAnswers[Math.floor(Math.random() * negativeAnswers.length)]
  
    } else {
      category = "neutral";
      answer = neutralAnswers[Math.floor(Math.random() * neutralAnswers.length)]
    }
  
    return `${category} , ${answer}`;
  
  
  }
  
  const variable = "will you go to travel? "; 
  const user = magicBall (variable);
  console.log(user);