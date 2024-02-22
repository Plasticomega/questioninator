// Define an array of questions
const questions = [
    "What is your favorite color?",
    "What is your favorite food?",
    "What is your favorite movie?",
    "What is your favorite animal?",
    "What is your favorite hobby?",
    "What is your dream vacation destination?",
    "What is the smallest thing for which you are grateful?",
"Who has had the most positive impact on your life?",
"If you could use a time machine, would you rather have one that only goes back in time or only goes forward?",
"If you got a promotion, a job, a college acceptance, an accolade/award, or just generally accomplished something major, who is the first person you'd tell and how do you think they'd react?",
"If you were an inanimate object, what would you be and why?",
"Where do you wish you had grown up?",
"If you could be good at any profession without having to receive the accompanying education or trade experience, which would you choose?",
"What is something you're terrible at but wish you could do well?",
"What is the quality you admire the most in the person you dislike the most?",
"What was the most recent thing that made you cry?",
"What are the books/movies/games that never get old and always make you feel better when you get down?",
"What is the most trivial thing about which you have a strong opinion?",
"If you could be any mythical creature, what would you be and why?",
"If you've had more than one job, which job taught you the most?",
"If you could change one thing about yourself physically, what would you change?",
"What single event or decision do you think most affected the rest of your life? Was there a turning point in your life?",
"What is the one thing you've made that you're the most proud of?",
"Some historical figures have epithets attached to their names, like The Mad or The Wise. What would you like yours to be?",
"What was the best year of your life? The worst?",
"What one thing, whether it's something you did or something you made or something you caused to happen, would you like to be remembered by?",
"What has been the biggest change of heart you've had? Have you ever started off on one side of an issue and wound up on the other? What influenced that change?",
"What is your biggest non-academic, non work-related accomplishment?",
"What is your biggest academic or work-related accomplishment?",
"What is something you've done/felt/seen/etc. that you wish you could experience again for the first time?",
"If you could erase one thing or event from your memory, what would you choose?",
"Is there something about you that people assume because of your appearance or demeanour? What is a trait or preference you have that people don't expect you to have?",
"If you were a character in a movie, book, or television show, what genre would you live in?",
"What is the hardest way you've learned an important lesson?",
"What cliche do you think is bullshit? What cliche do you think holds truth?",
"What do you fear, despite having no real reason to do so? Basically, what is an irrational fear you have?",
"Imagine that you could choose when and how you die. At what age would you like to die (no maximum here) and how would you like to go?",
"What character archetype is closest to your personality?",
"What was the happiest moment of your life so far?",
"What is one childhood memory that you remember especially well?",
"Is there a song/movie/food/etc. that strongly reminds you of someone whenever you experience it? Who does it remind you of?",
"What is your ideal birthday? Not the date, but rather your ideal way to spend the day.",
"Are there any smells that bring back memories for you? What are they, and what memories do they elicit?",
"What is the closest you've ever come to dying?",
"Do you have a personal mantra? If so, what is it?",
"What is the most memorable meal you've ever had? (It can be good or bad.) What made it so memorable?",
"What's the worst advice you've ever been given?",
"In what ways do you benefit the world?",
"What fact about yourself took you the longest to understand or accept?",
"What is your least popular or most controversial opinion?",
"If you could live in another time period but stay in the same place you live now, when would you want to live?",
"Do you have any conspiracy theories? If so, what are they?",
"What is the strangest thing you believe in? Do you believe in the supernatural? Heaven, angels, ghosts? Luck, fate, magic? Mind reading, lizard people, the Illuminati? Where do you draw the line of belief and disbelief?",
"What fictional character do you most relate to?",
"What have you been meaning to do but haven't yet done? Why haven't you done it?",
"Let's say that regardless of what job you have, you'll make 100,000 a year (78,000; 90,000), enough to live comfortably without having to worry about expenses. What job would you choose to have if money were no object?",
"What do you get the most compliments about?",
"Have you ever had an epiphany? What was it about, and what sparked the realization?",
"What is the most important quality you look for in a friend? A romantic partner?",
"What is a childhood habit or preference that you'll never outgrow?",
"What is your favorite word and why?",
"Which of your flaws are you most proud of?",
"What is the most ordinary-seeming thing that you find fascinating?",
"What lesson have you had to learn again and again?",
"What was your favorite thing about the place you grew up?",
"What scientific or technological advance blows your mind? Is there any technology that seems so futuristic and advanced you're surprised it actually exists?",
"If you could ask your future self one thing, what would it be?",
"What is something that gets cooler/more interesting the more you learn about it?",
"What would you title your memoir?",
"What was the hardest decision you've ever made?",
"What word would your best friend use to describe you? Your parents? Your significant other (if applicable)?",
"In what way would you most like to become famous?",
"How would you summarize your life so far in one sentence?",
"You're old and on your deathbed. With your last breath, you may deliver your last words to anyone you know. What do you say and who do say it to?",
"If seasons never changed, which would you most like to live in eternally?",
"What is the best advice you've ever received?",
"You have one year to live: how do you spend it?",
"Think of the best teacher you've ever had. What did they teach, and what made them so special?",
"What is something you never thought you'd be able to do, until you actually did it?",
"If you could go back and relive one day in your life without changing anything about it, which day would you revisit?",
"If you had the power to completely eradicate one disease, which would you choose to abolish?",
"If you had the power to completely solve one social or political issue affecting the world today, which would you choose?",
"What was the scariest moment of your life thus far?",
"If you lived in a colonial or Medieval village, what would your job be?",
"Have you ever desired or longed for something, but once you got it, discovered it was overrated?",
"What is something you've done that you recommend everyone do before they die?",
"What do you know isn't real, but want badly for it to exist?",
"What is the greatest physical pain you've ever felt?",
"What is something you don't realize is weird until you really think about it?",
"What's your favorite joke you've ever heard?",
"Is there something you wish everybody knew about you without you having to tell them?",
"What trait do you admire in others but don't possess yourself?",
"What question do you most hate being asked?",
"What is something other people admire about you?",
"What's the best outcome of a complete accident you've experienced in your life?",
"Have you ever gotten the giggles in an inappropriate place? Where was it?",
"What's the best lesson you've learned from a difficult situation?",
"What do you think success means? How do you define it in your own life?",
"What's your favorite article of clothing you own?",
"What's something you wish you enjoyed but never can seem to?",
"If you could play any instrument or learn any language in two hours, which would you choose and how would you use your talent?",
"Have you ever challenged or questioned a belief you held for a long time? What prompted it and what was the result?",
"What, if anything, is too serious to be joked about?",
"What's the coolest project you've ever worked on?",
"Are you currently pursuing what makes you happy? Why or why not?",
"What did you know was a mistake as soon as you decided to do it, and why did you go through with it anyway?",
"In what ways are you stubborn?",
"What's a brief summary of your outlook on life?",
"What are you most likely to be arrested for (even if you don't do anything illegal what crime do you think you're most likely to commit)?",
"Think of your biggest regret. If you could go back in time and make a decision to keep it from happening, would you?",
"If you could be any animal, what would you be and why?",
"What is the worst thing about the place you live?",
"What is the best thing about the place you live?",
"Does anybody beside yourself know your deepest secret? Do you ever intend to tell anyone?",
"What is one small change you made in your life that had a much bigger impact than you anticipated?",
"What historical event would you most like to have experienced?",
"Do you believe in fate, the idea that whatever is meant to happen will happen? Or do you believe more in a universe governed mainly by chaos and the unknown?",
"What unpleasant experience are you most proud of yourself for making it through?",
"In a Freaky Friday situation where you woke up in someone else's body, who would you like to be for a day and have them inhabit your body?",
"What's a quirk of yours that few people know about?",
"What's the craziest thing you've ever done?",
"Are you currently holding a grudge against anyone or anything?",
"What small thing annoys you to an irrational degree?",
"Have you gone through any phases in your life? What is the most notable one?",
"What historical figure do you most admire and why?",
"Was there ever a moment when you thought you were going to die?",
"What was the best opportunity you ever received?",
"What always makes you nostalgic?",
"What would you like to accomplish before the year is over?",
"Have you ever been offered a good opportunity but refused? What was the situation?",
"Would you prefer your family to be smaller or larger than it is now, or neither? Do you wish you were more involved with your extended family?",
"What is something you're hypocritical about; something you believe but have a hard time sticking to in practice?",
"Has anyone close to you ever died? Was there anything that helped you to move past their death?",
"What is something you're inherently bad at, no matter how hard you try to improve?",
"Do you have any inherent talents?",
"What small, insignificant thing gives you joy?",
"If you could live anywhere in the world in any kind of domicile, and money was no object, where would you live and what would your dwelling be like?",
"What is one thing you've done/seen/eaten/etc. that turned out to be really good, even though you initially didn't expect it to be?",
"In the movie Inside Out, each person has a set of core memories that define who they are and how they behave. What's one of yours?",
"What is the biggest mistake you've made that actually turned out alright?",
"What's the best decision you've ever made?",
"When you're sick, what are some things you eat/drink/watch/etc. to be comfortable?",
"What are some core principles you have that you'll never give up or change?",
"Have you ever invented something? It doesn't have to be a traditional product either, it can be creating a new dish, coining a term.",
"What cause do you strongly support, even though it wouldn't directly benefit you?",
"What book, movie, film, or video game had the best ending?",
"You have enough money to make a sizeable charitable donation to which charity do you donate it and why? Or, if you choose not to go through a charity, how would you spend this money in a philanthropic way?",
"What is something weird you do that you wonder if other people do as well?",
"Suddenly you're in a horror film, running from a masked murderer. Your only companion is the last person you texted, and your only weapon is whatever is currently closest to your left hand. What is the movie like and do you think you could survive?",
"What is one thing you're tired of telling/explaining to people?",
"What embarrassing memory will forever be burned into your mind?",
"What was the busiest day of your life thus far?",
"What was the greatest day of your life thus far?",
"What was the worst day of your life thus far?",
"What is one thing you're good at that people don't expect?",
"In what way do you differ most from your parents?"
    
  ];
  
  // Get references to DOM elements
  const generateBtn = document.getElementById('generateBtn');
  const copyBtn = document.getElementById('copyBtn');
  const questionDisplay = document.getElementById('question');
  
  // Function to generate a random question
  function generateRandomQuestion() {
    // Generate a random index to select a question from the array
    const randomIndex = Math.floor(Math.random() * questions.length);
    
    // Display the random question
    questionDisplay.textContent = questions[randomIndex];
  }
  
  // Function to copy the question text to clipboard
  function copyQuestionToClipboard() {
    const questionText = questionDisplay.textContent;
    navigator.clipboard.writeText(questionText)
      .then(() => {
        alert('Question copied to clipboard!');
      })
      .catch(err => {
        console.error('Failed to copy question: ', err);
        alert('Failed to copy question. Please try again.');
      });
  }
  
  // Add event listeners to the buttons
  generateBtn.addEventListener('click', generateRandomQuestion);
  copyBtn.addEventListener('click', copyQuestionToClipboard);
  
  // Initial question generation when the page loads
  generateRandomQuestion();
  