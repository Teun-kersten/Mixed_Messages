/*for this project the challenge was to create random mixed messages function that uses at least three different 
 pieces of data. I will be using six different data sets spread out into multiple arrays.
 throughout the code the choice has been made to create object arrays to increase readability and to make it 
 more practical to access the datapoints for the randomPicker and the eventual final message */
// the first dataset concists of the different characters the user will be able to encounter
const character = ['knight', 'ghost', 'wizard', 'pirate', 'alien', 'gnome', 'forest critter', 'dragon', 'robot',
     'rogue'];
// the second dataset consists of the different actions a character can do, each character has a unique action, so we use an object to link the characters to their actoins.
// this is also more practical if we want to add more characters, or increase the number of actions a character can do in the future
const action = {
  knight: ['attacks'],
  ghost: ['posesses you'],
  wizard: ['tries to turn you into a strawberry'],
  pirate: ['plunders your booty'],
  alien: ['tries to abduct you'],
  gnome: ['offers you a magic mushroom'],
  'forest critter': ['tries to gnaw at your ankles'],
  dragon: ['spews fire at you'],
  robot: ['tries to disassemble you'],
  rogue: ['tries to take your coin purse']
};

// the third dataset consist of the counteractions the user can do
const response = ['charm', 'persuade', 'intimidate', 'barter', 'flee'];
// the fourth dataser consists of a D20 die roll
const roll = () => Math.floor(Math.random() * 20) + 1;
/*the fifth dataset consists of the messages as a result of the die roll
the same structure has been chosen as before, this increases the functionality of randomPicker, and it also makes
the code more maintainable for the future*/
const result = {
  charm: {
    critFail: [
      'a wave of stagefright washes over you and you freeze in place'
    ],
    fail: [
      'you say a line so cheesy everyone around you physically cringers'
    ],
    success: [
      'you blow a kiss and wink'
    ],
    nat20: [
      'you pretend to yawn and stretch, placing your hand on their shoulder and go for a hug'
    ]
  },

  persuade: {
    critFail: [
      'you try to reason but your voice cracks, ending your effort before it even started'
    ],
    fail: [
      'your attempt to persuade them isn\'t enough'
    ],
    success: [
      'you manage to convince them to leave you alone'
    ],
    nat20: [
      'Your words are so insightful you leave them speechless'
    ]
  },

  intimidate: {
    critFail: [
      'you think back to your boyscout days and make yourself look bigger, it doesn\'t work'
    ],
    fail: [
      'you bang your chest and roar, but they are not impressed'
    ],
    success: [
      'you threaten them with your dagger, which is just enough to make them stop'
    ],
    nat20: [
      'you call out a "whoa there buster" and point, at which exact moment lighning strikes a nearby tree, sending them running away in terror'
    ]
  },

  barter: {
    critFail: [
      'you reach for your coin purse to bribe them, only to realise you left it at home'
    ],
    fail: [
      'the amount of coins in your purse is not enough to sway them'
    ],
    success: [
      'you offer them your coin purse, which is enough for them to leave you be'
    ],
    nat20: [
      'You make them an offer they can\'t refuse'
    ]
  },

  flee: {
    critFail: [
      'you turn around but trip over your own shoelaces'
    ],
    fail: [
      'you try to run but aren\'t fast enough'
    ],
    success: [
      'you quickly make your escape'
    ],
    nat20: [
      'you dissapear in a cloud of smoke'
    ]
  }
};

// the sixth and final dataset consists of the wrap up message that concludes the adventure, again using the same structure we've seen throughout the project
const finale = {
  knight: {
    critFail: [
      'The knight shakes his head, not even bothering drawing his sword, the damage has already been done'
    ],
    fail: [
      'the knight defeats you easily, leaving you heavily wounded'
    ],
    success: [
      'the knight fights with all his might, but is unable to defeat you'
    ],
    nat20: [
      'humiliated, the knight takes off his armor and lays down in a foetal position, crying'
    ]
  },

  ghost: {
    critFail: [
      'not only does the ghost posess you, it makes you do a silly dance to add insult to injury'
    ],
    fail: [
      'you try to resist, but the spirit is too strong, you are now posessed'
    ],
    success: [
      'you manage to fight off the ghost, and it passes to the other side'
    ],
    nat20: [
      'The ghost is so impressed by your resistance it decides to become your spectral companion, helping you on your adventures'
    ]
  },

  wizard: {
    critFail: [
      'the wizard turns you into a strawberry and puts you in his pocket, muttering something about fruit salads'
    ],
    fail: [
      'the wizard turns you into a strawberry, thankfully the spell wears off after a few minutes, but you\'ll never be the same'
    ],
    success: [
      'you counter the spell, sending it back to the wizard, who narrowly dodges it'
    ],
    nat20: [
      'you send the spell directly back to the wizard, turning him into a strawberry instead. You victoriously dangle him over your open mouth'
    ]
  },

  pirate: {
    critFail: [
      'the pirate flips up their eyepatch and gives you a judgemental look, they don\'t even want the booty anymore'
    ],
    fail: [
      'the pirate swashbuckles you thoroughly, consider your booty plundered!'
    ],
    success: [
      'the pirate is bested and walks the plank in shame'
    ],
    nat20: [
      'the pirate looks up to the sky as he realises the real booty were the friends we make along the way'
    ]
  },

  alien: {
    critFail: [
      'the alien tractor beams you up to their spacecraft, where they proceed to probe you'
    ],
    fail: [
      'the alien abducts you, but rather than probing you they dress you up and keep you as their pet'
    ],
    success: [
      'you resist the alien\'s abduction and they decide to leave you and earth alone'
    ],
    nat20: [
      'the alien is so impressed by you that he invites you into the galactic order'
    ]
  },

  gnome: {
    critFail: [
      'the gnome doesn\'t want to waste one of their magic mushrooms on you, and just gives you a regular one, they walk away dissapointed'
    ],
    fail: [
      'the gnome fiendishly gives you a poisonous mushroom, giving you a serious tummy ache'
    ],
    success: [
      'the gnome gives you a magic mushroom, which heals you up a little'
    ],
    nat20: [
      'the gnome gives you a magic mushroom, you grow to twice your size and feel an unnatural urge to save a princess'
    ]
  },

  'forest critter': {
    critFail: [
      'the forest critter takes one nibble of your ankle, you see its face turn sour as it looks up at you in disgust'
    ],
    fail: [
      'the forest critter gnaws at your ankles, ruining your shoes and giving you fleas'
    ],
    success: [
      'you send the forest critter flying, they scurry off into the woods'
    ],
    nat20: [
      'the forest critter turns out to be a forest deity in disguise, they are impressed with you and share the secrets of the earth with you, granting you the power to control plants'
    ]
  },

  dragon: {
    critFail: [
      'the dragon spews a single spark at you, singing your hair and rendering you bald'
    ],
    fail: [
      'the dragon spews a mighty flame at you, burning you to a crisp'
    ],
    success: [
      'you evade the dragon\'s flames and strike back, it flies away in defeat'
    ],
    nat20: [
      'the dragon is so impressed it decides to take you to its hoard, allowing you to choose a single prize'
    ]
  },

  robot: {
    critFail: [
      'instead of dissassembling you, the robot reassembles you, placing your left foot on top of your head'
    ],
    fail: [
      'the robot dissassembles you, leaving you, quite literally, in pieces'
    ],
    success: [
      'you manage to outsmart the robot by swiftly turning it off'
    ],
    nat20: [
      'the robot suffers the ultimate humiliation as it is reassembled into a roomba'
    ]
  },

  rogue: {
    critFail: [
      'the rogue steals your coin purse, which he flings at the back of your head a moment later after finding out it\'s empty'
    ],
    fail: [
      'the rogue steals your coin purse, leaving you pennyless'
    ],
    success: [
      'the rogue fumbles around your waist, but your fannypack proves too secure, and he scurries away'
    ],
    nat20: [
      'you outsmart the rogue and steal his coin purse instead, which is full of gold coins'
    ]
  }
};
/** this function will decide what outcome to choose based on the die roll 
 the structure of the function is based on the standard D20 roll outcomes, where a roll of 1 is a critical failure, so an automatic loss,
 a low roll between 2 and 11 is a failure, a roll between 12 and 19 is a success, and a roll of 20, or nat 20, is a 'critical succes',
 therefor gaining an extra special outcome*/
const rollType = (roll) => {
    if (roll === 1) { return 'critFail'; }
    if (roll >= 2 && roll <= 11) { return 'fail'; }
    if (roll >= 12 && roll <= 19) { return 'success'; }
    if (roll === 20) { return 'nat20'; }
}
// to make it easer to generate the outcomes we use a function that will pick an outcome from each dataset and can be used multiple times
const randomPicker = arr => arr[Math.floor(Math.random() * arr.length)];
// this function will generate the random message by picking a random element from each dataset and combining them into one string
const randomMessage = () => {
    const chosenCharacter = randomPicker(character);
    const chosenAction = randomPicker(action[chosenCharacter]);
    const chosenResponse = randomPicker(response);
    const dieRoll = roll();
    const chosenResult = randomPicker(result[chosenResponse][rollType(dieRoll)]);
    const finaleMessage = randomPicker(finale[chosenCharacter][rollType(dieRoll)]);
    return `A ${chosenCharacter} ${chosenAction}. You try to ${chosenResponse}. You roll a ${dieRoll} and ${chosenResult}. ${finaleMessage}`;
};
console.log(randomMessage());