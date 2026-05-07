/*for this project the challenge was to create random mixed messages function that uses at least three different 
 pieces of data. I will be using six different data sets spread out into multiple arrays. */
// the first dataset concists of the different characters the user will be able to encounter
const character = ['knight', 'ghost', 'wizard', 'pirate', 'alien', 'gnome', 'forest critter', 'dragon', 'robot',
     'rogue'];
// the second dataset consists of the different actions a character can do
const action = ['attacks', 'posesses you', 'tries to turn you into a strawberry', 'plunders your booty', 
    'tries to abduct you', 'offers you a magic mushroom', 'tries to gnaw at your ankles', 
    'spews fire at you', 'tries to disassemble you', 'tries to take your coin purse'];
// the third dataset consist of the counteractions the user can do
const response = ['charm', 'persuade', 'intimidate', 'barter', 'flee'];
// the fourth dataser consists of a D20 die roll
const roll = () => Math.floor(Math.random() * 20) + 1;
// the fifth dataset consists of the messages as a result of the die roll
const result = ['a wave of stagefright washes over you and you freeze in place', 'you say a line so cheesy everyone around you physically cringers',
    'you blow a kiss and wink', 'you pretend to yawn and stretch, placing your hand on their shoulder and go for a hug',
    'you try to reason but your voice cracks, ending your effort before it even started', 'your attempt to persuade them isn\'t enough',
    'you manage to convince them to leave you alone', 'Your words are so insightful you leave them speechless',
'you think back to your boyscout days and make yourself look bigger, it doesn\'t work', 'you bang your chest and roar, but they are not impressed',
'you threaten them with your dagger, which is just enough to make them stop', 'you call out a "whoa there buster" and point, at which exact moment lighning strikes a nearby tree, sending them running away in terror',
'you reach for your coin purse to bribe them, only to realise you left it at home', 'the amount of coins in your purse is not enough to sway them',
'you offer them your coin purse, which is enough for them to leave you be', 'You make them an offer they can\'t refuse',
'you turn around but trip over your own shoelaces', 'you try to run but aren\'t fast enough', 'you quickly make your escape', 'you dissapear in a cloud of smoke'];
// the sixth and final dataset consists of the wrap up message that concludes the adventure
const finale = ['The knight shakes his head, not even bothering drawing his sword, the damage has already been done',
    'the knight defeats you easily, leaving you heavily wounded', 'the knight fights with all his might, but is unable to defeat you',
    'humiliated, the knight takes off his armor and lays down in a foetal position, crying',
    'not only does the ghost posess you, it makes you do a silly dance to add insult to injury',
    'you try to resist, but the spirit is too strong, you are now posessed', 'you manage to fight off the ghost, and it passes to the other side',
    'The ghost is so impressed by your resistance it decides to become your spectral companion, helping you on your adventures',
    'the wizard turns you into a strawberry and puts you in his pocket, muttering something about fruit salads',
    'the wizard turns you into a strawberry, thankfully the spell wears off after a few minutes, but you\'ll never be the same',
    'you counter the spell, sending it back to the wizard, who narrowly dodges it', 'you send the spell directly back to the wizard, turning him into a strawberry instead. You victoriously dangle hi over your open mouth',
    'the pirate flips up their eyepatch and gives you a judgemental look, they do\'t even want the booty anymore',
    'the pirate swashbuckles you thoroughly, consider your booty plundered!', 'the pirate is bested and walks the plank in shame',
    'the pirate looks up to the sky as he realises the real booty were the friends we make along the way',
    'the alien tractor beams you up to their spacecraft, where they proceed to probe you', 'the alien abducts you, but rather than probing you they dress you up and keep you as their pet',
    'you resist the alien\'s abduction and they decide to leave you and earth alone', 'the alien is so impressed by you that he invites you into the galactic order',
    'the gnome doesn\'t want to waste one of their magic mushrooms on you, and just gives you a regular one, they walk away dissapointed',
    'the gnome fiendishly gives you a poisonous mushroom, giving you a serious tummy ache',
    'the gnome gives you a magic mushroom, which heals you up a little', 'the gnome gives you a magic mushroom, you grow to twice your size and feel a unnatural urge to save a princess',
    'the forest critter takes one nibble of your ankle, you see it\'s face turn sour as it looks up at you in disgust', 'the forest critter gnaws at your ankles, ruining your shoes and giving you fleas',
    'you send the fores critter flying, they scurry off into the woods', 'the forest critter turns out to be a forest deity in disguise, they are impressed with you and share the secrets of the earth with you, granting you the power to control plants',
    'the dragon spews a single spark at you, singing your hair and rendering you bald', 'the dragon spews a might flame at you, burning you to a crisp',
    'you evade the dragon\'s flames and strike back, it flies away in defeat', 'the dragon is so impressed it decides to take you to its hoard, allowing you to choose a single prize',
    'instead of dissassembling you, the robot reassembles you, placing your left foor on top of your head',
    'the robot dissassembles you, leaving you, quite literally, in pieces', 'you manage to outsmart the robot by swiftly turning it off',
    'the robot suffers the ultimate humiliation as it is reassembled into a roomba', 'the rogue steals your coin purse, which he flings at the back of your head a moment later after finding out it\'s empty',
    'the rogue steals your coin purse, leaving you pennyless', 'the rogue fumbles around your waist, but your fannypack proves too secure, and he scurries away',
    'you outsmart the rogue and steal his coin purse instead, which is full of gold coins'
];
// to make it easer to generate the outcomes we use a function that will pick an outcome from each dataset and can be used multiple times
const randomPicker = arr => arr[Math.floor(Math.random() * arr.length)];
// this function will generate the random message by picking a random element from each dataset and combining them into one string
const randomMessage = () => {

};