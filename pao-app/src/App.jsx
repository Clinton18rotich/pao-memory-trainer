import { useState } from 'react';
import './App.css';

const PAO = {
  "00": {"person": "Ozzy Osbourne", "action": "Chomping", "object": "a bat", "bio": "The Prince of Darkness—a heavy metal rock star who bit a live bat on stage.", "mnemonic": "00 looks like two round eyes. Ozzy chomps the bat between the two eyes."},
  "01": {"person": "Neo", "action": "Dodging", "object": "a bullet", "bio": "A hacker who discovers reality is a simulation and learns to bend physics.", "mnemonic": "01 looks like a stick (1) standing next to a bullet hole (0). Neo dodges the bullet."},
  "02": {"person": "James Bond", "action": "Counting", "object": "a watch", "bio": "A British secret agent who defuses bombs using high-tech gadget watches.", "mnemonic": "02 sounds like 'To'. Bond counts down 'To' the explosion on his watch."},
  "03": {"person": "Harry Potter", "action": "Summoning", "object": "a broomstick", "bio": "A young wizard who summons his flying broomstick with the spell 'Accio'.", "mnemonic": "03 looks like a curly 3 wrapping around a round snitch (0). Harry summons the broom."},
  "04": {"person": "Thor", "action": "Electrifying", "object": "a stormbreaker", "bio": "The Norse God of Thunder who commands lightning and wields a massive axe.", "mnemonic": "04 looks like a flagpole (4) standing in a round storm (0). Thor electrifies it."},
  "05": {"person": "Sherlock Holmes", "action": "Magnifying", "object": "a pipe", "bio": "A detective genius who inspects tiny clues with a magnifying glass.", "mnemonic": "05 looks like a hook (5) over a round lens (0). Sherlock magnifies the pipe."},
  "06": {"person": "Darth Vader", "action": "Igniting", "object": "a lightsaber", "bio": "A Sith Lord in black armor who ignites his red laser sword with a VROOM sound.", "mnemonic": "06 looks like a balloon-tail (6) shooting a round beam (0). Vader ignites it."},
  "07": {"person": "Wonder Woman", "action": "Lassoing", "object": "a tank", "bio": "An Amazon warrior princess who uses a golden lasso to flip massive vehicles.", "mnemonic": "07 looks like a rope (7) wrapping around a round wheel (0). Wonder Woman lassoes it."},
  "08": {"person": "Mario", "action": "Stomping", "object": "a Goomba", "bio": "An Italian plumber who stomps on mushroom Goombas to defeat them.", "mnemonic": "08 looks like two stacked mushrooms (8) and a coin (0). Mario stomps the top mushroom."},
  "09": {"person": "Batman", "action": "Grappling", "object": "a gargoyle", "bio": "A billionaire vigilante who fires grappling hooks to swing off stone gargoyles.", "mnemonic": "09 looks like a hook (9) grabbing a round stone head (0). Batman grapples it."},
  "10": {"person": "Albert Einstein", "action": "Theorizing", "object": "a blackhole", "bio": "The genius physicist who theorized relativity and studied black holes.", "mnemonic": "10 looks like a stick (1) being sucked into a round vortex (0). Einstein theorizes it."},
  "11": {"person": "Eeyore", "action": "Plodding", "object": "a rusty nail", "bio": "The gloomy donkey who plods slowly through the Hundred Acre Wood.", "mnemonic": "11 looks like two stiff legs. Eeyore plods over a rusty nail."},
  "12": {"person": "Santa Claus", "action": "Sliding", "object": "a reindeer", "bio": "The jolly Christmas figure who slides down chimneys on his sleigh.", "mnemonic": "12 looks like a stick (1) sliding down a swan (2). Santa slides on the reindeer."},
  "13": {"person": "Indiana Jones", "action": "Whipping", "object": "a snake", "bio": "An archaeologist who snaps his whip to fight snakes in ancient temples.", "mnemonic": "13 looks like a straight handle (1) uncoiling into a curly whip (3). Indy whips a snake."},
  "14": {"person": "Beyoncé", "action": "Singing", "object": "a glitter mic", "bio": "A global pop star who sings into a diamond-covered microphone.", "mnemonic": "14 looks like a stick (1) holding up a square flag (4). Beyoncé sings into the flag-mic."},
  "15": {"person": "Homelander", "action": "Lasering", "object": "a plane", "bio": "A narcissistic superhero who shoots laser beams from his eyes.", "mnemonic": "15 looks like a straight neck (1) aiming at a hook (5). Homelander lasers the plane."},
  "16": {"person": "Shrek", "action": "Roaring", "object": "a swamp", "bio": "A grumpy ogre who roars at anyone disturbing his stinky swamp.", "mnemonic": "16 looks like a round belly (6) expanding. Shrek roars in the swamp."},
  "17": {"person": "Michael Jordan", "action": "Dunking", "object": "a hoop", "bio": "The legendary basketball player who flies through the air to dunk.", "mnemonic": "17 looks like a body (1) flying into a hoop (7). MJ dunks it."},
  "18": {"person": "Spider-Man", "action": "Thwipping", "object": "a web", "bio": "A neighborhood hero who shoots sticky webs from his wrists.", "mnemonic": "18 looks like a straight arm (1) shooting a round web (8). Spider-Man thwips it."},
  "19": {"person": "The Hulk", "action": "Shattering", "object": "a shoestring", "bio": "A rage-filled green monster who smashes everything, even tiny things.", "mnemonic": "19 looks like a stick (1) tied to a round knot (9). Hulk shatters the shoestring."},
  "20": {"person": "The Dude", "action": "Guzzling", "object": "a white Russian", "bio": "A laid-back slacker who chugs creamy White Russians all day.", "mnemonic": "20 looks like a curved neck (2) leaning over a round glass (0). The Dude guzzles it."},
  "21": {"person": "Captain America", "action": "Hurling", "object": "a shield", "bio": "A patriotic super-soldier who throws his vibranium shield like a boomerang.", "mnemonic": "21 looks like an arm (2) hurling a straight shield (1). Cap hurls it."},
  "22": {"person": "Yoda", "action": "Meditating", "object": "a lightsaber", "bio": "A tiny green Jedi Master who meditates in swamps while using the Force.", "mnemonic": "22 looks like two curved bodies (2-2). Yoda meditates with a floating lightsaber."},
  "23": {"person": "Michael Jackson", "action": "Moonwalking", "object": "a glove", "bio": "The King of Pop who moonwalked backward while wearing a single white glove.", "mnemonic": "23 looks like a curved body (2) sliding into a curly 3. MJ moonwalks in his glove."},
  "24": {"person": "Ripley", "action": "Bowling", "object": "a grenade", "bio": "A survivor who bowls grenades down corridors to kill aliens.", "mnemonic": "24 looks like a round grenade (2) rolling toward a flag (4). Ripley bowls it."},
  "25": {"person": "Hermione Granger", "action": "Studying", "object": "a spellbook", "bio": "A brainy witch who studies heavy spellbooks to master magic.", "mnemonic": "25 looks like a curved body (2) hooking over a book (5). Hermione studies it."},
  "26": {"person": "The Rock", "action": "Flexing", "object": "a weight", "bio": "A massive former wrestler turned actor who flexes his giant biceps.", "mnemonic": "26 looks like a curved bicep (2) lifting a round weight (6). The Rock flexes."},
  "27": {"person": "Jack Sparrow", "action": "Swashbuckling", "object": "a compass", "bio": "A drunken pirate who swashbuckles with a compass that points to what he wants.", "mnemonic": "27 looks like a curved body (2) swaying on a plank (7). Jack swashbuckles."},
  "28": {"person": "Pikachu", "action": "Electrocutting", "object": "a thunderbolt", "bio": "A yellow electric mouse who shoots thunderbolts from its red cheeks.", "mnemonic": "28 looks like a round cheek (8) shooting a zigzag (2). Pikachu electrocutes."},
  "29": {"person": "Deadpool", "action": "Twerking", "object": "a katana", "bio": "A mercenary who twerks mid-fight to distract enemies before drawing his katana.", "mnemonic": "29 looks like a curved butt (2) twerking while a sword (9) falls out."},
  "30": {"person": "Gandalf", "action": "Smiting", "object": "a staff", "bio": "A wizard who smites the ground with his staff, causing massive explosions.", "mnemonic": "30 looks like a curly staff (3) smashing into a round ground (0). Gandalf smites."},
  "31": {"person": "Freddie Mercury", "action": "Belting", "object": "a microphone stand", "bio": "The Queen frontman who belts high notes while gripping a bent mic stand.", "mnemonic": "31 looks like a curled chest (3) belting into a straight mic (1). Freddie belts."},
  "32": {"person": "Luke Skywalker", "action": "Piloting", "object": "an X-wing", "bio": "A farm boy who pilots an X-wing in the battle against the Death Star.", "mnemonic": "32 looks like a curved cockpit (3) piloted by twin wings (2). Luke pilots it."},
  "33": {"person": "Voldemort", "action": "Snapping", "object": "a wand", "bio": "Harry Potter's snake-like arch-nemesis who snaps his wand in anger.", "mnemonic": "33 looks like two snakes (3-3). Voldemort snaps his wand like a snake."},
  "34": {"person": "The Joker", "action": "Juggling", "object": "a playing card", "bio": "Batman's chaotic villain who juggles playing cards as his calling card.", "mnemonic": "34 looks like a curly smile (3) juggling a square card (4). The Joker juggles."},
  "35": {"person": "Katniss Everdeen", "action": "Aiming", "object": "a bow", "bio": "The brave archer who aims her bow to survive the Hunger Games.", "mnemonic": "35 looks like a curved arm (3) aiming a hooked bow (5). Katniss aims."},
  "36": {"person": "Wolverine", "action": "Mangling", "object": "a metal", "bio": "A mutant with metal claws who mangles steel with his bare hands.", "mnemonic": "36 looks like a curved arm (3) popping out round claws (6). Wolverine mangles."},
  "37": {"person": "Iron Man", "action": "Blasting", "object": "a repulsor beam", "bio": "A genius billionaire who blasts enemies with repulsor beams from his palms.", "mnemonic": "37 looks like a curved hand (3) shooting a straight beam (7). Iron Man blasts."},
  "38": {"person": "Gollum", "action": "Sneaking", "object": "the One Ring", "bio": "A twisted creature who sneaks through caves, obsessing over the One Ring.", "mnemonic": "38 looks like a hunched back (3) hiding a round ring (8). Gollum sneaks."},
  "39": {"person": "The Grinch", "action": "Stealing", "object": "a Christmas tree", "bio": "A green creature who steals Christmas trees from houses on Christmas Eve.", "mnemonic": "39 looks like a curved hand (3) grabbing a round tree (9). The Grinch steals it."},
  "40": {"person": "Cinderella", "action": "Waltzing", "object": "a glass slipper", "bio": "A servant girl who waltzes at a ball and loses a glass slipper.", "mnemonic": "40 looks like a flowing dress (4) spinning around a round slipper (0). Cinderella waltzes."},
  "41": {"person": "The Flash", "action": "Sprinting", "object": "a lightning bolt", "bio": "The fastest man alive who sprints so fast he creates lightning trails.", "mnemonic": "41 looks like a straight body (1) trailing a flag (4). The Flash sprints."},
  "42": {"person": "Frodo Baggins", "action": "Trekking", "object": "a ring", "bio": "A hobbit who treks across Middle-earth to destroy the One Ring in a volcano.", "mnemonic": "42 looks like a curved leg (2) trekking with a round ring (4). Frodo treks."},
  "43": {"person": "The Terminator", "action": "Terminating", "object": "a shotgun", "bio": "A cyborg assassin who terminates targets with a sawed-off shotgun.", "mnemonic": "43 looks like a stiff arm (4) holding a curly shotgun (3). Terminator terminates."},
  "44": {"person": "Jack Frost", "action": "Nibbling", "object": "a snowflake", "bio": "A frosty being who nibbles on snowflakes with his icy teeth.", "mnemonic": "44 looks like two flags (4-4). Jack Frost nibbles on snowflakes."},
  "45": {"person": "Lara Croft", "action": "Discovering", "object": "a relic", "bio": "A tomb raider who discovers ancient relics in hidden ruins.", "mnemonic": "45 looks like a flag (4) reaching a hook (5). Lara discovers the relic."},
  "46": {"person": "Mary Poppins", "action": "Umbrella-dancing", "object": "a carpet bag", "bio": "A magical nanny who dances with an umbrella while carrying a bottomless carpet bag.", "mnemonic": "46 looks like a straight umbrella (4) over a round bag (6). Mary umbrella-dances."},
  "47": {"person": "Baba Yaga", "action": "Stirring", "object": "a mortar", "bio": "A Slavic witch who stirs potions in a giant mortar and pestle.", "mnemonic": "47 looks like a long nose (4) stirring a round mortar (7). Baba Yaga stirs."},
  "48": {"person": "The Mad Hatter", "action": "Sipping", "object": "a teacup", "bio": "An eccentric character who sips tea constantly at a chaotic tea party.", "mnemonic": "48 looks like a tall hat (4) tilting over a round cup (8). The Hatter sips."},
  "49": {"person": "The Tin Man", "action": "Axing", "object": "a tree", "bio": "A metal man who swings an axe to chop down trees in the forest.", "mnemonic": "49 looks like a stiff arm (4) swinging a round axe (9). The Tin Man axes the tree."},
  "50": {"person": "King Arthur", "action": "Pulling", "object": "Excalibur from stone", "bio": "The legendary king who pulled Excalibur from a stone to prove his divine right.", "mnemonic": "50 looks like a hook (5) pulling a round stone (0). Arthur pulls Excalibur."},
  "51": {"person": "Medusa", "action": "Petrifying", "object": "a mirror", "bio": "A Gorgon who petrifies anyone who looks at her, even her own reflection.", "mnemonic": "51 looks like a snake head (5) staring into a mirror (1). Medusa petrifies."},
  "52": {"person": "Anubis", "action": "Weighing", "object": "a heart", "bio": "The Egyptian god who weighs the hearts of the dead on a golden scale.", "mnemonic": "52 looks like a scale (5) balancing a heart (2). Anubis weighs it."},
  "53": {"person": "Icarus", "action": "Melting", "object": "wax wings", "bio": "A boy who flew too close to the sun, melting his wax wings.", "mnemonic": "53 looks like a hook (5) dripping into a curly 3. Icarus melts."},
  "54": {"person": "Godzilla", "action": "Stomping", "object": "Tokyo Tower", "bio": "A giant kaiju who stomps on Tokyo Tower with his massive feet.", "mnemonic": "54 looks like a giant foot (5) stomping a flag-tower (4). Godzilla stomps it."},
  "55": {"person": "The Invisible Man", "action": "Looming", "object": "a raincoat", "bio": "An invisible scientist who looms inside an empty floating raincoat.", "mnemonic": "55 looks like two empty hooks (5-5). The Invisible Man looms in the raincoat."},
  "56": {"person": "Quetzalcoatl", "action": "Coiling", "object": "a pyramid", "bio": "A feathered serpent god who coils his massive body around pyramids.", "mnemonic": "56 looks like a snake body (5) coiling around a round pyramid (6). Quetzalcoatl coils."},
  "57": {"person": "Mothman", "action": "Glowing", "object": "red eyes", "bio": "A cryptid with giant, glowing red eyes that hover in the night sky.", "mnemonic": "57 looks like two glowing eyes (5 and 7). Mothman glows in the dark."},
  "58": {"person": "Bigfoot", "action": "Trampling", "object": "a campsite", "bio": "A massive hairy ape who tramples campsites, leaving giant footprints.", "mnemonic": "58 looks like a big foot (5) trampling a round tent (8). Bigfoot tramples."},
  "59": {"person": "La Llorona", "action": "Weeping", "object": "a river", "bio": "The Weeping Woman who cries endlessly at the riverbank for her children.", "mnemonic": "59 looks like a curved face (5) weeping into a round river (9). La Llorona weeps."},
  "60": {"person": "Dracula", "action": "Sucking", "object": "a blood orange", "bio": "The vampire who sucks the juice out of a blood orange like a victim.", "mnemonic": "60 looks like a round head (6) sucking a round orange (0). Dracula sucks."},
  "61": {"person": "Kali", "action": "Brandishing", "object": "a sword", "bio": "A Hindu goddess with multiple arms who brandishes a bloody sword.", "mnemonic": "61 looks like a round head (6) brandishing a straight sword (1). Kali brandishes."},
  "62": {"person": "Fenrir", "action": "Biting", "object": "a chain", "bio": "A giant wolf who bites through a magical chain at Ragnarok.", "mnemonic": "62 looks like a round wolf head (6) biting a curved chain (2). Fenrir bites."},
  "63": {"person": "Banshee", "action": "Shrieking", "object": "a megaphone", "bio": "A female spirit who shrieks into a megaphone, foretelling death.", "mnemonic": "63 looks like a round mouth (6) shrieking into a curved megaphone (3). Banshee shrieks."},
  "64": {"person": "Sun Wukong", "action": "Transforming", "object": "a staff", "bio": "The Monkey King who transforms his body and staff to fight enemies.", "mnemonic": "64 looks like a round head (6) transforming into a flag-staff (4). Wukong transforms."},
  "65": {"person": "Cthulhu", "action": "Awakening", "object": "an ancient tome", "bio": "A cosmic horror who awakens from the deep, holding an ancient pulsating book.", "mnemonic": "65 looks like a round head (6) awakening with a hooked tentacle (5). Cthulhu awakens."},
  "66": {"person": "Kitsune", "action": "Shapeshifting", "object": "nine tails", "bio": "A fox spirit who shapeshifts into a human while hiding nine tails.", "mnemonic": "66 looks like two round heads (6-6). Kitsune shapeshifts into nine tails."},
  "67": {"person": "Wendigo", "action": "Shredding", "object": "a frozen forest", "bio": "A cannibalistic spirit who shreds frozen trees with icy claws.", "mnemonic": "67 looks like a round body (6) shredding a straight tree (7). Wendigo shreds."},
  "68": {"person": "Valkyrie", "action": "Guiding", "object": "a fallen warrior", "bio": "A winged maiden who guides fallen heroes to Valhalla.", "mnemonic": "68 looks like round wings (6) guiding a round soldier (8). Valkyrie guides."},
  "69": {"person": "Cerberus", "action": "Guarding", "object": "a gate", "bio": "The three-headed dog who guards the gates of the Underworld.", "mnemonic": "69 looks like two round heads (6 and 9). Cerberus guards the gate."},
  "70": {"person": "Frida Kahlo", "action": "Painting", "object": "a self-portrait", "bio": "A famous Mexican artist who paints surreal self-portraits.", "mnemonic": "70 looks like a brush (7) painting a round canvas (0). Frida paints a self-portrait."},
  "71": {"person": "Nikola Tesla", "action": "Electrifying", "object": "a Tesla coil", "bio": "An inventor who electrifies the air with massive Tesla coils.", "mnemonic": "71 looks like a straight coil (7) electrifying a round spark (1). Tesla electrifies."},
  "72": {"person": "Marie Curie", "action": "Isolating", "object": "a radioactive isotope", "bio": "A physicist who isolates glowing radioactive elements from ore.", "mnemonic": "72 looks like a straight tool (7) isolating a round isotope (2). Marie isolates."},
  "73": {"person": "H.P. Lovecraft", "action": "Chanting", "object": "a Necronomicon", "bio": "A horror writer who chants incantations from the cursed Necronomicon.", "mnemonic": "73 looks like a straight finger (7) tracing a curly book (3). Lovecraft chants."},
  "74": {"person": "Joan of Arc", "action": "Rallying", "object": "a banner", "bio": "A peasant girl who rallies armies into battle holding a white banner.", "mnemonic": "74 looks like a straight arm (7) raising a flag (4). Joan rallies."},
  "75": {"person": "Leonardo da Vinci", "action": "Sketching", "object": "the Mona Lisa", "bio": "A Renaissance genius who sketches the Mona Lisa's mysterious smile.", "mnemonic": "75 looks like a straight brush (7) sketching a curved smile (5). Da Vinci sketches."},
  "76": {"person": "Virginia Woolf", "action": "Writing", "object": "a diary", "bio": "A modernist author who writes her emotional thoughts into a diary.", "mnemonic": "76 looks like a straight pen (7) writing in a round diary (6). Woolf writes."},
  "77": {"person": "Mozart", "action": "Composing", "object": "a piano", "bio": "A musical prodigy who composes symphonies on a piano.", "mnemonic": "77 looks like two straight piano legs (7-7). Mozart composes."},
  "78": {"person": "Amelia Earhart", "action": "Navigating", "object": "a biplane", "bio": "The first female aviator who navigates a biplane across the Atlantic.", "mnemonic": "78 looks like a straight plane (7) flying over a round map (8). Amelia navigates."},
  "79": {"person": "Bruce Lee", "action": "Wielding", "object": "a nunchuck", "bio": "A martial arts legend who wields nunchucks with lightning speed.", "mnemonic": "79 looks like a straight arm (7) swinging a round nunchuck (9). Bruce wields."},
  "80": {"person": "Picasso", "action": "Painting", "object": "a guitar", "bio": "A Cubist painter who paints distorted guitars from multiple angles.", "mnemonic": "80 looks like a round head (8) painting a round guitar (0). Picasso paints."},
  "81": {"person": "Han Solo", "action": "Blasting", "object": "a blaster", "bio": "A smuggler who blasts Stormtroopers with his trusty blaster pistol.", "mnemonic": "81 looks like a round vest (8) holding a straight blaster (1). Han blasts."},
  "82": {"person": "Obi-Wan Kenobi", "action": "Vanishing", "object": "a horse", "bio": "A Jedi Master who vanishes into the Force, making a horse disappear.", "mnemonic": "82 looks like a round robe (8) vanishing a curved horse (2). Obi-Wan vanishes."},
  "83": {"person": "Zorro", "action": "Slicing", "object": "a 'Z' mark", "bio": "A masked vigilante who slices a 'Z' mark into walls with his sword.", "mnemonic": "83 looks like a round cape (8) slicing a curly Z (3). Zorro slices."},
  "84": {"person": "Mulan", "action": "Sword-fighting", "object": "a dragon companion", "bio": "A warrior who sword-fights with a tiny dragon companion by her side.", "mnemonic": "84 looks like a round armor (8) sword-fighting with a flag (4). Mulan fights."},
  "85": {"person": "Ragnar Lothbrok", "action": "Raiding", "object": "a longship", "bio": "A Viking king who raids villages from his wooden longship.", "mnemonic": "85 looks like a round head (8) raiding from a hooked ship (5). Ragnar raids."},
  "86": {"person": "Blackbeard", "action": "Pirating", "object": "a treasure map", "bio": "A feared pirate captain who uses a treasure map to find loot.", "mnemonic": "86 looks like a round beard (8) holding a round map (6). Blackbeard pirates."},
  "87": {"person": "Genghis Khan", "action": "Conquering", "object": "a horse", "bio": "A ruthless conqueror who rides a fast horse to conquer Asia.", "mnemonic": "87 looks like a round head (8) riding a straight horse (7). Genghis conquers."},
  "88": {"person": "Achilles", "action": "Battling", "object": "a heel", "bio": "The greatest warrior who battles furiously, but his heel is his weak spot.", "mnemonic": "88 looks like two round shields (8-8). Achilles battles, but his heel is the weak spot."},
  "89": {"person": "Socrates", "action": "Debating", "object": "a hemlock cup", "bio": "A philosopher who debates endlessly, with a cup of poison on the table.", "mnemonic": "89 looks like a round head (8) debating next to a round cup (9). Socrates debates."},
  "90": {"person": "Nostradamus", "action": "Predicting", "object": "a crystal ball", "bio": "An astrologer who predicts the future by staring into a crystal ball.", "mnemonic": "90 looks like a round head (9) looking into a round ball (0). Nostradamus predicts."},
  "91": {"person": "Spartacus", "action": "Gladiating", "object": "a trident", "bio": "A gladiator who fights in the arena wielding a three-pronged trident.", "mnemonic": "91 looks like a round shield (9) holding a straight trident (1). Spartacus gladiates."},
  "92": {"person": "Frankenstein's Monster", "action": "Reanimating", "object": "a corpse", "bio": "A stitched creature reanimated from a corpse by a lightning bolt.", "mnemonic": "92 looks like a round head (9) reanimating a curved body (2). Frankenstein reanimates."},
  "93": {"person": "Jekyll & Hyde", "action": "Transforming", "object": "a potion", "bio": "A doctor who transforms into a monster by drinking a potion.", "mnemonic": "93 looks like a round head (9) transforming into a curly monster (3). Jekyll & Hyde transforms."},
  "94": {"person": "Dracula", "action": "Sucking", "object": "a blood bag", "bio": "The vampire who sucks blood from a hospital blood bag on an IV pole.", "mnemonic": "94 looks like a round head (9) sucking from a flag-bag (4). Dracula sucks the blood bag."},
  "95": {"person": "Rasputin", "action": "Surviving", "object": "poison", "bio": "A mad monk who survives drinking deadly cyanide poison.", "mnemonic": "95 looks like a round head (9) surviving a hooked poison (5). Rasputin survives."},
  "96": {"person": "Medea", "action": "Enchanting", "object": "a Golden Fleece", "bio": "A sorceress who enchants the Golden Fleece with dark magic.", "mnemonic": "96 looks like two round shapes (9 and 6). Medea enchants the Golden Fleece."},
  "97": {"person": "Odysseus", "action": "Sailing", "object": "a Trojan horse", "bio": "A clever king who sails across the sea towing a wooden Trojan horse.", "mnemonic": "97 looks like a round head (9) sailing a straight horse (7). Odysseus sails."},
  "98": {"person": "Beowulf", "action": "Slaying", "object": "Grendel", "bio": "A hero who slays the monster Grendel with his bare hands.", "mnemonic": "98 looks like a round hand (9) slaying a round monster (8). Beowulf slays."},
  "99": {"person": "Persephone", "action": "Descending", "object": "a pomegranate", "bio": "A goddess who descends into the underworld, holding a pomegranate.", "mnemonic": "99 looks like two round shapes (9-9). Persephone descends into the underworld holding a pomegranate."}
};

function App() {
  const [mode, setMode] = useState('teach');
  const [inputNum, setInputNum] = useState('');
  const [activeNum, setActiveNum] = useState('');
  const [flashcardRevealed, setFlashcardRevealed] = useState(false);
  const [quizAnswer, setQuizAnswer] = useState('');
  const [quizResult, setQuizResult] = useState(null);
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);
  const [imgError, setImgError] = useState(false);

  const num = activeNum;
  const isValid = num.length === 2 && PAO[num];
  const data = isValid ? PAO[num] : { person: '—', action: '—', object: '—', bio: 'Enter a number (00–99) above and press Enter', mnemonic: 'Type a valid number to see its memory hook.' };

  const handleInputChange = (e) => {
    const val = e.target.value.replace(/[^0-9]/g, '');
    if (val.length <= 2) {
      setInputNum(val);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (inputNum.length === 2 && PAO[inputNum]) {
        setActiveNum(inputNum);
        setImgError(false);
      } else {
        setActiveNum('');
      }
    }
  };

  const handleGoClick = () => {
    if (inputNum.length === 2 && PAO[inputNum]) {
      setActiveNum(inputNum);
      setImgError(false);
    } else {
      setActiveNum('');
    }
  };

  const randomNum = () => {
    const keys = Object.keys(PAO);
    const rand = keys[Math.floor(Math.random() * keys.length)];
    setInputNum(rand);
    setActiveNum(rand);
    setFlashcardRevealed(false);
    setImgError(false);
  };

  const handleQuizSubmit = () => {
    const correct = `${data.person} - ${data.action} - ${data.object}`;
    if (quizAnswer.trim().toLowerCase() === correct.toLowerCase()) {
      setQuizResult('✅ Correct!');
      setScore(s => s + 1);
    } else {
      setQuizResult(`❌ Wrong. Answer: ${correct}`);
    }
    setTotal(t => t + 1);
  };

  const imageUrl = `/images/${num}.jpg`;

  return (
    <div className="container">
      <h1>🧠 PAO Trainer</h1>
      <div className="menu">
        <button className={mode === 'teach' ? 'active' : ''} onClick={() => setMode('teach')}>📖 Teach</button>
        <button className={mode === 'flashcard' ? 'active' : ''} onClick={() => { setMode('flashcard'); setFlashcardRevealed(false); }}>🃏 Flashcards</button>
        <button className={mode === 'quiz' ? 'active' : ''} onClick={() => { setMode('quiz'); setQuizResult(null); }}>🧪 Quiz</button>
        <button className={mode === 'table' ? 'active' : ''} onClick={() => setMode('table')}>📊 Table</button>
        <button className={mode === 'help' ? 'active' : ''} onClick={() => setMode('help')}>🧠 How-To</button>
      </div>

      {/* TEACH MODE */}
      {mode === 'teach' && (
        <div className="card">
          <div className="image-container">
            {isValid && !imgError ? (
              <img src={imageUrl} alt={data.person} className="character-img" onError={() => setImgError(true)} />
            ) : isValid ? (
              <div className="fallback-image">{data.person}</div>
            ) : (
              <div className="fallback-image" style={{background: '#1a1a1a', border: '2px dashed #555'}}>Enter #</div>
            )}
          </div>
          <div className="number">{isValid ? num : '??'}</div>
          <div className="row"><span className="label">Person:</span> <span className="value">{data.person}</span></div>
          <div className="row"><span className="label">Action:</span> <span className="value">{data.action}</span></div>
          <div className="row"><span className="label">Object:</span> <span className="value">{data.object}</span></div>
          <div className="bio">📖 {data.bio}</div>
          
          {/* The NEW specific memory hook section */}
          {isValid && (
            <div className="memory-hook">
              <div className="hook-label">🧠 How to remember this number:</div>
              <div className="hook-text">{data.mnemonic}</div>
            </div>
          )}

          <div className="teach-input-area">
            <input 
              type="text" 
              placeholder="Enter number 00-99" 
              value={inputNum} 
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              className="teach-input"
            />
            <button onClick={handleGoClick} className="go-btn">↵ Go</button>
            <button onClick={randomNum} className="random-btn">🎲 Random</button>
          </div>
        </div>
      )}

      {/* FLASHCARD MODE */}
      {mode === 'flashcard' && (
        <div className="card">
          <div className="image-container">
            {!imgError ? (
              <img src={imageUrl} alt={data.person} className="character-img" onError={() => setImgError(true)} />
            ) : (
              <div className="fallback-image">{data.person}</div>
            )}
          </div>
          <div className="number">🔢 {num}</div>
          {!flashcardRevealed ? (
            <button className="btn-primary" onClick={() => setFlashcardRevealed(true)}>Reveal PAO</button>
          ) : (
            <div className="flashcard-content">
              <div className="row"><span className="label">Person:</span> <span className="value">{data.person}</span></div>
              <div className="row"><span className="label">Action:</span> <span className="value">{data.action}</span></div>
              <div className="row"><span className="label">Object:</span> <span className="value">{data.object}</span></div>
            </div>
          )}
          <button className="btn-primary" style={{background:'#555', marginTop:'15px'}} onClick={randomNum}>Next Card</button>
        </div>
      )}

      {/* QUIZ MODE */}
      {mode === 'quiz' && (
        <div className="card">
          <div className="number">🔢 {num}</div>
          <div className="row"><span className="label">What is the PAO?</span></div>
          <input type="text" placeholder="Person - Action - Object" value={quizAnswer} onChange={(e) => setQuizAnswer(e.target.value)} />
          <button className="btn-primary" onClick={handleQuizSubmit}>Check Answer</button>
          {quizResult && <div className="score" style={{color: quizResult.includes('Correct') ? '#4caf50' : '#f44336'}}>{quizResult}</div>}
          <div className="score">Score: {score} / {total} ({total > 0 ? Math.round((score/total)*100) : 0}%)</div>
          <button className="btn-primary" style={{background:'#555', marginTop:'10px'}} onClick={() => { randomNum(); setQuizAnswer(''); setQuizResult(null); }}>Next Question</button>
        </div>
      )}

      {/* TABLE MODE */}
      {mode === 'table' && (
        <div className="card table-card">
          <h2 style={{textAlign:'center', color:'#fca311', marginTop:0}}>📊 Master PAO Table</h2>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Person</th>
                  <th>Action</th>
                  <th>Object</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(PAO).map(key => (
                  <tr key={key}>
                    <td className="num-col">{key}</td>
                    <td>{PAO[key].person}</td>
                    <td>{PAO[key].action}</td>
                    <td>{PAO[key].object}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* HELP / HOW-TO MODE (General Theory) */}
      {mode === 'help' && (
        <div className="card help-card">
          <h2 style={{textAlign:'center', color:'#fca311', marginBottom: '20px'}}>🧠 How to Memorize 00–99</h2>
          
          <div className="help-section">
            <h3>1. The PAO System</h3>
            <p>PAO stands for <strong>Person - Action - Object</strong>. Every 2-digit number (00–99) is turned into a vivid mental image.</p>
            <div className="help-example">
              <div className="help-num">08</div>
              <div className="help-desc"><strong>Mario</strong> (Person) → <strong>Stomping</strong> (Action) → <strong>a Goomba</strong> (Object)</div>
            </div>
          </div>

          <div className="help-section">
            <h3>2. The "Shape Rule" (Number Anchoring)</h3>
            <p>Connect the <strong>shape of the number</strong> to the image. The weirder, the better.</p>
            <ul className="help-list">
              <li><strong>08:</strong> "0" is a mushroom, "8" is two stacked. Mario stomps the top mushroom to pop a coin.</li>
              <li><strong>07:</strong> "7" is a rope. Wonder Woman lassoes a round tank wheel (the "0").</li>
              <li><strong>02:</strong> "2" sounds like "To". James Bond counts down "To" the explosion.</li>
            </ul>
          </div>

          <div className="help-section">
            <h3>3. The Memory Palace</h3>
            <p>Imagine walking through a place you know well (like your house). Put each PAO image in a specific spot. The more ridiculous, the better you'll remember it.</p>
          </div>

          <div className="help-section">
            <h3>4. How to Use This App</h3>
            <ul className="help-list">
              <li><strong>📖 Teach:</strong> Read the bio, the shape, and the custom memory hook.</li>
              <li><strong>🃏 Flashcards:</strong> Test your recall by guessing the PAO before revealing it.</li>
              <li><strong>🧪 Quiz:</strong> Type the full PAO and track your score.</li>
              <li><strong>📊 Table:</strong> Review all 100 entries at a glance.</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
