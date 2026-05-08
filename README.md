Mixed Messages
==============
A codecademy portfolio project
----------------------------
This project was created for codecademy as a portfolio project.
The goal was to create a mixed message generater with at least three different pieces of data.
The end result should randomly generate a message using these datasets.
I've chosen a D&D style adventure generator using a total of six datasets.
The sets contain data for:
1. character
2. an action said character performs
3. a counteraction from the player
4. a D20 die roll
5. an outcome based on both the die roll and the counteraction from dataset 3
6. a final message based on the complete string. This message changes depending on the character, what they chose to do, and the die roll.

I chose this form to fill the requirements because I personally enjoy this kind of adventure style games, and it allowed me to use my creativity to come up with 
some original messages. It also opened up the possibility to improve and build on this project for some time by adding characters, actions, and visuals, as well as
streamlining the message generation. Right now some sentences are a little clunky, by adding some code so that certain character action only trigger specific 
player reactions, the final sentences can become easier to read and flow better.

The D20 die roll features four possible outcomes:
1. if it lands on 1, it's a critical fail.
2. if it lands anywhere between 2 and 11 it's a regular fail.
3. between 12 and 19 are successful
4. a 20 results in a nat 20 roll

the resulting messages depend on the outcome of the die roll, with four possible unique messages based on the outcome.

how to use:
for now it can be used in node.js. I'm planning on adding more visuals and interactivity so it can be used in a browser for example.
- node index.js
every run generates a new mini adventure

techonology:
it's made entirely in JavaScript

license:
