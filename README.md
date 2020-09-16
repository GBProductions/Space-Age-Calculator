# _Super Galactic Age Calculator_

#### _16th September 2020_

#### By _**Garrett Brown**_

## Description
Want to know how old you are on other planets in the solar system? Use this calculator. We can also tell you how much life you would expect to live on those planets based on personality questions. Absolutely scientifically accurate.

SPECS 
<--------------------------------------------------------------------------------------------------------

Basic

Test: If a user enters something that is not a number into the input box, an error prompt will appear.
  Input: "Hello World!"
  Output: Alert: "Please enter a number!"

Test: If a user does not answer the 3 LIFE EXPECTANCY CALCULATOR questions and insert a valid number into the input box, 
  an error alert will appear.
  Input: "42" (No questions answered).
  Output: Alert: "Please answer all the questions!"

<-------------------------------------------------------------------------------------------------------------

User 

Test: When user inputs an numerical value for their age (in Earth years), the program should return 
the equivalent to that age in X planet years for 4 planets (Mercury, Venus, Mars, and Jupiter). This number
is rounded to the nearest tenth.
  Conversion:
  1 year Mercury = 0.24 years Earth
  1 year Venus = 0.62 years Earth
  1 year Mars = 1.88 years Earth
  1 year Jupiter = 11.86 years Earth

  Input: 2 Earth Years
  Output: Mercury Years = 8.34, Venus Years = 3.26, Mars Years = 1.06, Jupiter Years = 0.17

<-------------------------------------------------------------------------------------------------------------

When user inputs their age (in Earth years), the program will return the numbers of years the user
  has left on X planet. The return number will be converted and presented in that planet's years. Life Expectancy 
  will be calculated by (LIFE EXPECTANCY CALCULATOR).

LIFE EXPECTANCY CALCULATOR
    When user answers three questions, the program will take the input and calculate their life expectancy for X planet 
    (in that planet's years, rounded to the nearest tenth).
      Questions include:
      1. Do you eat ice cream? (Y/N)
      2. Do you exercise? (Y/N)
      3. Do you use hard drugs? We promise we're cool, you can tell us. (Y/N)

      Logic to determine expectancy includes:
      60 Earth years life expectancy = (Hard Drugs === Y)
      70 Earth years life expectancy = (Exercise === Y && Ice Cream === Y && Hard Drugs === N)
      80 Earth years life expectancy = (Exercise === Y && Ice Cream === N && Hard Drugs === N)


Test: user will input age and questions to determine LIFE EXPECTANCY CALCULATOR. Program will determine life expectancy in Earth years, and subtract lived age 
  from life expectancy. That number will then be converted to notify user how many years they have left using various planet's year system .

      Input: Hard Drugs/Yes, 40 years
      Output: 83.3 years left on Mercury
      Input: Exercise/Yes, Ice Cream/Y, Hard Drugs/N, 40 years 
      Output: 32.3 years left on Venus
      Input: Exercise/Yes, Ice Cream/N. Hard Drugs/N, 40 years
      Output: 10.6 years left on Mars
      Input: Hard Drugs/Yes, 40 years
      Output: 1.7 years left on Jupiter

<-------------------------------------------------------------------------------------------------------------

Test: If person has surpassed their assigned life expectancy, return a negative number.
  Input: (Hard Drugs/Yes) 70 years
  Output: -10 Earth Years

Test: If a negative number is returned, convert that and display time surpassed on other planets. 
  Input: -10 Earth Years
  Output: -41.67 Mercury Years

## Setup/Installation Requirements

* _Clone the "Programming-Language-Selector" repository from Github._
* _Navigate to the root directory of the project in the terminal and type 'open index.html' to view project  in a browser._


## Known Bugs

_Many bugs. Work in progress._

## Support and contact details

_For support, contact Garrett Brown <garrettpaulbrown@gmail.com>_

## Technologies Used

_HTML, CSS, JavaScript, Bootstrap, jQuery, Node Project Manager, Jest_

### License

*Licensed under MIT license*

Copyright (c) 2020 **_Garrett Brown_**