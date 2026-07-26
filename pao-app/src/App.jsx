import { useState } from 'react';
import './App.css';

const PAO = {
  "00": {"person": "Ozzy Osbourne", "action": "Chomping", "object": "a bat", "bio": "The Prince of Darkness—a heavy metal rock star who bit a live bat on stage."},
  "01": {"person": "Neo", "action": "Dodging", "object": "a bullet", "bio": "A hacker who discovers reality is a simulation and learns to bend physics."},
  "02": {"person": "James Bond", "action": "Counting", "object": "a watch", "bio": "A British secret agent who defuses bombs using high-tech gadget watches."},
  "03": {"person": "Harry Potter", "action": "Summoning", "object": "a broomstick", "bio": "A young wizard who summons his flying broomstick with the spell 'Accio'."},
  "04": {"person": "Thor", "action": "Electrifying", "object": "a stormbreaker", "bio": "The Norse God of Thunder who commands lightning and wields a massive axe."},
  "05": {"person": "Sherlock Holmes", "action": "Magnifying", "object": "a pipe", "bio": "A detective genius who inspects tiny clues with a magnifying glass."},
  "06": {"person": "Darth Vader", "action": "Igniting", "object": "a lightsaber", "bio": "A Sith Lord in black armor who ignites his red laser sword with a VROOM sound."},
  "07": {"person": "Wonder Woman", "action": "Lassoing", "object": "a tank", "bio": "An Amazon warrior princess who uses a golden lasso to flip massive vehicles."},
  "08": {"person": "Mario", "action": "Stomping", "object": "a Goomba", "bio": "An Italian plumber who stomps on mushroom Goombas to defeat them."},
  "09": {"person": "Batman", "action": "Grappling", "object": "a gargoyle", "bio": "A billionaire vigilante who fires grappling hooks to swing off stone gargoyles."},
  "10": {"person": "Albert Einstein", "action": "Theorizing", "object": "a blackhole", "bio": "The genius physicist who theorized relativity and studied black holes."},
  "11": {"person": "Eeyore", "action": "Plodding", "object": "a rusty nail", "bio": "The gloomy donkey who plods slowly through the Hundred Acre Wood."},
  "12": {"person": "Santa Claus", "action": "Sliding", "object": "a reindeer", "bio": "The jolly Christmas figure who slides down chimneys on his sleigh."},
  "13": {"person": "Indiana Jones", "action": "Whipping", "object": "a snake", "bio": "An archaeologist who snaps his whip to fight snakes in ancient temples."},
  "14": {"person": "Beyoncé", "action": "Singing", "object": "a glitter mic", "bio": "A global pop star who sings into a diamond-covered microphone."},
  "15": {"person": "Homelander", "action": "Lasering", "object": "a plane", "bio": "A narcissistic superhero who shoots laser beams from his eyes."},
  "16": {"person": "Shrek", "action": "Roaring", "object": "a swamp", "bio": "A grumpy ogre who roars at anyone disturbing his stinky swamp."},
  "17": {"person": "Michael Jordan", "action": "Dunking", "object": "a hoop", "bio": "The legendary basketball player who flies through the air to dunk."},
  "18": {"person": "Spider-Man", "action": "Thwipping", "object": "a web", "bio": "A neighborhood hero who shoots sticky webs from his wrists."},
  "19": {"person": "The Hulk", "action": "Shattering", "object": "a shoestring", "bio": "A rage-filled green monster who smashes everything, even tiny things."},
  "20": {"person": "The Dude", "action": "Guzzling", "object": "a white Russian", "bio": "A laid-back slacker who chugs creamy White Russians all day."},
  "21": {"person": "Captain America", "action": "Hurling", "object": "a shield", "bio": "A patriotic super-soldier who throws his vibranium shield like a boomerang."},
  "22": {"person": "Yoda", "action": "Meditating", "object": "a lightsaber", "bio": "A tiny green Jedi Master who meditates in swamps while using the Force."},
  "23": {"person": "Michael Jackson", "action": "Moonwalking", "object": "a glove", "bio": "The King of Pop who moonwalked backward while wearing a single white glove."},
  "24": {"person": "Ripley", "action": "Bowling", "object": "a grenade", "bio": "A survivor who bowls grenades down corridors to kill aliens."},
  "25": {"person": "Hermione Granger", "action": "Studying", "object": "a spellbook", "bio": "A brainy witch who studies heavy spellbooks to master magic."},
  "26": {"person": "The Rock", "action": "Flexing", "object": "a weight", "bio": "A massive former wrestler turned actor who flexes his giant biceps."},
  "27": {"person": "Jack Sparrow", "action": "Swashbuckling", "object": "a compass", "bio": "A drunken pirate who swashbuckles with a compass that points to what he wants."},
  "28": {"person": "Pikachu", "action": "Electrocutting", "object": "a thunderbolt", "bio": "A yellow electric mouse who shoots thunderbolts from its red cheeks."},
  "29": {"person": "Deadpool", "action": "Twerking", "object": "a katana", "bio": "A mercenary who twerks mid-fight to distract enemies before drawing his katana."},
  "30": {"person": "Gandalf", "action": "Smiting", "object": "a staff", "bio": "A wizard who smites the ground with his staff, causing massive explosions."},
  "31": {"person": "Freddie Mercury", "action": "Belting", "object": "a microphone stand", "bio": "The Queen frontman who belts high notes while gripping a bent mic stand."},
  "32": {"person": "Luke Skywalker", "action": "Piloting", "object": "an X-wing", "bio": "A farm boy who pilots an X-wing in the battle against the Death Star."},
  "33": {"person": "Voldemort", "action": "Snapping", "object": "a wand", "bio": "Harry Potter's snake-like arch-nemesis who snaps his wand in anger."},
  "34": {"person": "The Joker", "action": "Juggling", "object": "a playing card", "bio": "Batman's chaotic villain who juggles playing cards as his calling card."},
  "35": {"person": "Katniss Everdeen", "action": "Aiming", "object": "a bow", "bio": "The brave archer who aims her bow to survive the Hunger Games."},
  "36": {"person": "Wolverine", "action": "Mangling", "object": "a metal", "bio": "A mutant with metal claws who mangles steel with his bare hands."},
  "37": {"person": "Iron Man", "action": "Blasting", "object": "a repulsor beam", "bio": "A genius billionaire who blasts enemies with repulsor beams from his palms."},
  "38": {"person": "Gollum", "action": "Sneaking", "object": "the One Ring", "bio": "A twisted creature who sneaks through caves, obsessing over the One Ring."},
  "39": {"person": "The Grinch", "action": "Stealing", "object": "a Christmas tree", "bio": "A green creature who steals Christmas trees from houses on Christmas Eve."},
  "40": {"person": "Cinderella", "action": "Waltzing", "object": "a glass slipper", "bio": "A servant girl who waltzes at a ball and loses a glass slipper."},
  "41": {"person": "The Flash", "action": "Sprinting", "object": "a lightning bolt", "bio": "The fastest man alive who sprints so fast he creates lightning trails."},
  "42": {"person": "Frodo Baggins", "action": "Trekking", "object": "a ring", "bio": "A hobbit who treks across Middle-earth to destroy the One Ring in a volcano."},
  "43": {"person": "The Terminator", "action": "Terminating", "object": "a shotgun", "bio": "A cyborg assassin who terminates targets with a sawed-off shotgun."},
  "44": {"person": "Jack Frost", "action": "Nibbling", "object": "a snowflake", "bio": "A frosty being who nibbles on snowflakes with his icy teeth."},
  "45": {"person": "Lara Croft", "action": "Discovering", "object": "a relic", "bio": "A tomb raider who discovers ancient relics in hidden ruins."},
  "46": {"person": "Mary Poppins", "action": "Umbrella-dancing", "object": "a carpet bag", "bio": "A magical nanny who dances with an umbrella while carrying a bottomless carpet bag."},
  "47": {"person": "Baba Yaga", "action": "Stirring", "object": "a mortar", "bio": "A Slavic witch who stirs potions in a giant mortar and pestle."},
  "48": {"person": "The Mad Hatter", "action": "Sipping", "object": "a teacup", "bio": "An eccentric character who sips tea constantly at a chaotic tea party."},
  "49": {"person": "The Tin Man", "action": "Axing", "object": "a tree", "bio": "A metal man who swings an axe to chop down trees in the forest."},
  "50": {"person": "King Arthur", "action": "Pulling", "object": "Excalibur from stone", "bio": "The legendary king who pulled Excalibur from a stone to prove his divine right."},
  "51": {"person": "Medusa", "action": "Petrifying", "object": "a mirror", "bio": "A Gorgon who petrifies anyone who looks at her, even her own reflection."},
  "52": {"person": "Anubis", "action": "Weighing", "object": "a heart", "bio": "The Egyptian god who weighs the hearts of the dead on a golden scale."},
  "53": {"person": "Icarus", "action": "Melting", "object": "wax wings", "bio": "A boy who flew too close to the sun, melting his wax wings."},
  "54": {"person": "Godzilla", "action": "Stomping", "object": "Tokyo Tower", "bio": "A giant kaiju who stomps on Tokyo Tower with his massive feet."},
  "55": {"person": "The Invisible Man", "action": "Looming", "object": "a raincoat", "bio": "An invisible scientist who looms inside an empty floating raincoat."},
  "56": {"person": "Quetzalcoatl", "action": "Coiling", "object": "a pyramid", "bio": "A feathered serpent god who coils his massive body around pyramids."},
  "57": {"person": "Mothman", "action": "Glowing", "object": "red eyes", "bio": "A cryptid with giant, glowing red eyes that hover in the night sky."},
  "58": {"person": "Bigfoot", "action": "Trampling", "object": "a campsite", "bio": "A massive hairy ape who tramples campsites, leaving giant footprints."},
  "59": {"person": "La Llorona", "action": "Weeping", "object": "a river", "bio": "The Weeping Woman who cries endlessly at the riverbank for her children."},
  "60": {"person": "Dracula", "action": "Sucking", "object": "a blood orange", "bio": "The vampire who sucks the juice out of a blood orange like a victim."},
  "61": {"person": "Kali", "action": "Brandishing", "object": "a sword", "bio": "A Hindu goddess with multiple arms who brandishes a bloody sword."},
  "62": {"person": "Fenrir", "action": "Biting", "object": "a chain", "bio": "A giant wolf who bites through a magical chain at Ragnarok."},
  "63": {"person": "Banshee", "action": "Shrieking", "object": "a megaphone", "bio": "A female spirit who shrieks into a megaphone, foretelling death."},
  "64": {"person": "Sun Wukong", "action": "Transforming", "object": "a staff", "bio": "The Monkey King who transforms his body and staff to fight enemies."},
  "65": {"person": "Cthulhu", "action": "Awakening", "object": "an ancient tome", "bio": "A cosmic horror who awakens from the deep, holding an ancient pulsating book."},
  "66": {"person": "Kitsune", "action": "Shapeshifting", "object": "nine tails", "bio": "A fox spirit who shapeshifts into a human while hiding nine tails."},
  "67": {"person": "Wendigo", "action": "Shredding", "object": "a frozen forest", "bio": "A cannibalistic spirit who shreds frozen trees with icy claws."},
  "68": {"person": "Valkyrie", "action": "Guiding", "object": "a fallen warrior", "bio": "A winged maiden who guides fallen heroes to Valhalla."},
  "69": {"person": "Cerberus", "action": "Guarding", "object": "a gate", "bio": "The three-headed dog who guards the gates of the Underworld."},
  "70": {"person": "Frida Kahlo", "action": "Painting", "object": "a self-portrait", "bio": "A famous Mexican artist who paints surreal self-portraits."},
  "71": {"person": "Nikola Tesla", "action": "Electrifying", "object": "a Tesla coil", "bio": "An inventor who electrifies the air with massive Tesla coils."},
  "72": {"person": "Marie Curie", "action": "Isolating", "object": "a radioactive isotope", "bio": "A physicist who isolates glowing radioactive elements from ore."},
  "73": {"person": "H.P. Lovecraft", "action": "Chanting", "object": "a Necronomicon", "bio": "A horror writer who chants incantations from the cursed Necronomicon."},
  "74": {"person": "Joan of Arc", "action": "Rallying", "object": "a banner", "bio": "A peasant girl who rallies armies into battle holding a white banner."},
  "75": {"person": "Leonardo da Vinci", "action": "Sketching", "object": "the Mona Lisa", "bio": "A Renaissance genius who sketches the Mona Lisa's mysterious smile."},
  "76": {"person": "Virginia Woolf", "action": "Writing", "object": "a diary", "bio": "A modernist author who writes her emotional thoughts into a diary."},
  "77": {"person": "Mozart", "action": "Composing", "object": "a piano", "bio": "A musical prodigy who composes symphonies on a piano."},
  "78": {"person": "Amelia Earhart", "action": "Navigating", "object": "a biplane", "bio": "The first female aviator who navigates a biplane across the Atlantic."},
  "79": {"person": "Bruce Lee", "action": "Wielding", "object": "a nunchuck", "bio": "A martial arts legend who wields nunchucks with lightning speed."},
  "80": {"person": "Picasso", "action": "Painting", "object": "a guitar", "bio": "A Cubist painter who paints distorted guitars from multiple angles."},
  "81": {"person": "Han Solo", "action": "Blasting", "object": "a blaster", "bio": "A smuggler who blasts Stormtroopers with his trusty blaster pistol."},
  "82": {"person": "Obi-Wan Kenobi", "action": "Vanishing", "object": "a horse", "bio": "A Jedi Master who vanishes into the Force, making a horse disappear."},
  "83": {"person": "Zorro", "action": "Slicing", "object": "a 'Z' mark", "bio": "A masked vigilante who slices a 'Z' mark into walls with his sword."},
  "84": {"person": "Mulan", "action": "Sword-fighting", "object": "a dragon companion", "bio": "A warrior who sword-fights with a tiny dragon companion by her side."},
  "85": {"person": "Ragnar Lothbrok", "action": "Raiding", "object": "a longship", "bio": "A Viking king who raids villages from his wooden longship."},
  "86": {"person": "Blackbeard", "action": "Pirating", "object": "a treasure map", "bio": "A feared pirate captain who uses a treasure map to find loot."},
  "87": {"person": "Genghis Khan", "action": "Conquering", "object": "a horse", "bio": "A ruthless conqueror who rides a fast horse to conquer Asia."},
  "88": {"person": "Achilles", "action": "Battling", "object": "a heel", "bio": "The greatest warrior who battles furiously, but his heel is his weak spot."},
  "89": {"person": "Socrates", "action": "Debating", "object": "a hemlock cup", "bio": "A philosopher who debates endlessly, with a cup of poison on the table."},
  "90": {"person": "Nostradamus", "action": "Predicting", "object": "a crystal ball", "bio": "An astrologer who predicts the future by staring into a crystal ball."},
  "91": {"person": "Spartacus", "action": "Gladiating", "object": "a trident", "bio": "A gladiator who fights in the arena wielding a three-pronged trident."},
  "92": {"person": "Frankenstein's Monster", "action": "Reanimating", "object": "a corpse", "bio": "A stitched creature reanimated from a corpse by a lightning bolt."},
  "93": {"person": "Jekyll & Hyde", "action": "Transforming", "object": "a potion", "bio": "A doctor who transforms into a monster by drinking a potion."},
  "94": {"person": "Dracula", "action": "Sucking", "object": "a blood bag", "bio": "The vampire who sucks blood from a hospital blood bag on an IV pole."},
  "95": {"person": "Rasputin", "action": "Surviving", "object": "poison", "bio": "A mad monk who survives drinking deadly cyanide poison."},
  "96": {"person": "Medea", "action": "Enchanting", "object": "a Golden Fleece", "bio": "A sorceress who enchants the Golden Fleece with dark magic."},
  "97": {"person": "Odysseus", "action": "Sailing", "object": "a Trojan horse", "bio": "A clever king who sails across the sea towing a wooden Trojan horse."},
  "98": {"person": "Beowulf", "action": "Slaying", "object": "Grendel", "bio": "A hero who slays the monster Grendel with his bare hands."},
  "99": {"person": "Persephone", "action": "Descending", "object": "a pomegranate", "bio": "A goddess who descends into the underworld, holding a pomegranate."}
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
  const data = isValid ? PAO[num] : { person: '—', action: '—', object: '—', bio: 'Enter a number (00–99) above and press Enter' };

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
        // Show a quick flash message (optional)
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
    </div>
  );
}

export default App;
