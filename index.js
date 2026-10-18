const gamesData = [
  //  NEW games (added 2026-10-18; show a NEW badge for 30 days) 
  { name: "Conquer The World", url: "https://conquertheworld.pages.dev/", category: "strategy", description: "Grab territory, build your army and take over the map one country at a time.", backgroundImage: "/img/conquer-the-world.jpg", genre: "strategy", added: "2026-10-18" },
  { name: "Doodle Cricket", url: "https://googlecricket.netlify.app/", category: "sports", description: "Swing the bat in a doodle-style cricket game and rack up the runs.", backgroundImage: "/img/doodle-cricket.jpg", genre: "sports", added: "2026-10-18" },
  { name: "Doodle Baseball", url: "https://doodlebaseball.pages.dev/", category: "sports", description: "Step up to the plate and hit home runs in a doodle-style baseball game.", backgroundImage: "/img/doodle-baseball.jpg", genre: "sports", added: "2026-10-18" },
  { name: "Doodle Jump 2", url: "https://doodlejumping.pages.dev/", category: "platformer", description: "Bounce higher and higher on platforms while dodging monsters on the way up.", backgroundImage: "/img/doodle-jump-2.jpg", genre: "platformer", added: "2026-10-18" },
  { name: "Doodle Solitaire", url: "https://googlesolitaire.netlify.app/", category: "puzzle", description: "Classic Klondike solitaire with a clean, quick-to-play doodle look.", backgroundImage: "/img/doodle-solitaire.jpg", genre: "puzzle", added: "2026-10-18" },
  { name: "Doodle Minesweeper", url: "https://googleminesweeper.pages.dev/", category: "puzzle", description: "Clear the board without hitting a mine in this doodle-style minesweeper.", backgroundImage: "/img/doodle-minesweeper.jpg", genre: "puzzle", added: "2026-10-18" },
  { name: "Snake Mods", url: "https://googlesnakemods.pages.dev/", category: "arcade", description: "Classic snake with extra mods and modes to mix things up.", backgroundImage: "/img/snake-mods.jpg", genre: "arcade", added: "2026-10-18" },
  { name: "Flappy Bird 3", url: "https://flappybird3.pages.dev/", category: "arcade", description: "Tap to flap through the pipes in another round of the arcade classic.", backgroundImage: "/img/flappy-bird-3.jpg", genre: "arcade", added: "2026-10-18" },
  { name: "Artle", url: "https://artle.pages.dev/", category: "words", description: "Identify famous artworks one guess at a time in a Wordle-style art puzzle.", backgroundImage: "/img/artle.jpg", genre: "words", added: "2026-10-18" },
  { name: "Angle", url: "https://angle-game.pages.dev/", category: "words", description: "Guess the angle in degrees and see how close your eye can get.", backgroundImage: "/img/angle.jpg", genre: "words", added: "2026-10-18" },
  { name: "Birthdayle", url: "https://birthdayle.pages.dev/", category: "words", description: "A Wordle-style guessing game built around dates and birthdays.", backgroundImage: "/img/birthdayle.jpg", genre: "words", added: "2026-10-18" },
  { name: "Connections", url: "https://connections-unlimited.pages.dev/", category: "words", description: "Group sixteen words into four hidden categories, with unlimited rounds.", backgroundImage: "/img/connections.jpg", genre: "words", added: "2026-10-18" },
  { name: "Colordle", url: "https://colordlegame.pages.dev/", category: "words", description: "Guess the hidden color with hints after every try.", backgroundImage: "/img/colordle.jpg", genre: "words", added: "2026-10-18" },
  { name: "Cutle", url: "https://cutle.pages.dev/", category: "words", description: "A Wordle-style guessing puzzle: use the clues to crack it in as few tries as you can.", backgroundImage: "/img/cutle.jpg", genre: "words", added: "2026-10-18" },
  { name: "Quick Draw", url: "https://drawquick.pages.dev/game/", category: "arcade", description: "Doodle fast and see if the AI can guess what you drew.", backgroundImage: "/img/quick-draw.jpg", genre: "arcade", added: "2026-10-18" },
  { name: "Flagle", url: "https://flagle.pages.dev/", category: "words", description: "Guess the country from its flag, with more revealed after each try.", backgroundImage: "/img/flagle.jpg", genre: "words", added: "2026-10-18" },
  { name: "Freecell Solitaire", url: "https://freecellsolitaire.pages.dev/", category: "puzzle", description: "Sort every card with free cells and clever planning.", backgroundImage: "/img/freecell-solitaire.jpg", genre: "puzzle", added: "2026-10-18" },
  { name: "Globle", url: "https://globle-game.pages.dev/", category: "words", description: "Find the mystery country on a globe: warmer colors mean closer guesses.", backgroundImage: "/img/globle.jpg", genre: "words", added: "2026-10-18" },
  { name: "Guess The Country", url: "https://guess-the-country.pages.dev/", category: "words", description: "Test your geography and name the country from the clues.", backgroundImage: "/img/guess-the-country.jpg", genre: "words", added: "2026-10-18" },
  { name: "Guess The Time", url: "https://guess-the-time.pages.dev/", category: "words", description: "Test your sense of time: guess the time and see how close you land.", backgroundImage: "/img/guess-the-time.jpg", genre: "words", added: "2026-10-18" },
  { name: "Guess The Song", url: "https://guessthesong.pages.dev/", category: "words", description: "Name that tune from the first few seconds of audio.", backgroundImage: "/img/guess-the-song.jpg", genre: "words", added: "2026-10-18" },
  { name: "Hang Man", url: "https://hang-man.pages.dev/", category: "words", description: "Guess the letters before the drawing is complete.", backgroundImage: "/img/hang-man.jpg", genre: "words", added: "2026-10-18" },
  { name: "Hearts Card", url: "https://heartscardgame.pages.dev/", category: "puzzle", description: "Play the classic trick-taking card game Hearts against the computer.", backgroundImage: "/img/hearts-card.jpg", genre: "puzzle", added: "2026-10-18" },
  { name: "Infinite Crafts", url: "https://infinite-crafts.pages.dev/", category: "simulation", description: "Combine elements to craft endless new things.", backgroundImage: "/img/infinite-crafts.jpg", genre: "simulation", added: "2026-10-18" },
  { name: "Idle Breakout", url: "https://idle-breakout.netlify.app/", category: "strategy", description: "Idle brick-breaking: upgrade your balls and let them smash the bricks.", backgroundImage: "/img/idle-breakout.jpg", genre: "strategy", added: "2026-10-18" },
  { name: "Lewdle", url: "https://lewdle.pages.dev/", category: "words", description: "A Wordle-style word game with a cheekier word list. Mature humor.", backgroundImage: "/img/lewdle.jpg", genre: "words", added: "2026-10-18" },
  { name: "Loldle", url: "https://loldle-unlimited.pages.dev/", category: "words", description: "Guess the League of Legends champion from the clues.", backgroundImage: "/img/loldle.jpg", genre: "words", added: "2026-10-18" },
  { name: "Linkora", url: "https://linkoragame.pages.dev/", category: "puzzle", description: "A casual link-and-connect puzzle game.", backgroundImage: "/img/linkora.jpg", genre: "puzzle", added: "2026-10-18" },
  { name: "Minecraft Wordle", url: "https://minecraft-wordle.pages.dev/", category: "words", description: "A Wordle-style guessing game themed around Minecraft.", backgroundImage: "/img/minecraft-wordle.jpg", genre: "words", added: "2026-10-18" },
  { name: "Moviedle", url: "https://moviedlegame.pages.dev/", category: "words", description: "Guess the movie from just a few seconds of footage.", backgroundImage: "/img/moviedle.jpg", genre: "words", added: "2026-10-18" },
  { name: "Numberle", url: "https://numberle-game.pages.dev/", category: "words", description: "Wordle with math: guess the hidden equation.", backgroundImage: "/img/numberle.jpg", genre: "words", added: "2026-10-18" },
  { name: "One Piece Wordle", url: "https://onepiecewordle.pages.dev/", category: "words", description: "Guess the One Piece character in a Wordle-style game.", backgroundImage: "/img/one-piece-wordle.jpg", genre: "words", added: "2026-10-18" },
  { name: "Pacxon", url: "https://pacxon.pages.dev/", category: "arcade", description: "Claim the board while dodging enemies in this Pac-Man meets Xonix arcade game.", backgroundImage: "/img/pacxon.jpg", genre: "arcade", added: "2026-10-18" },
  { name: "Pips NYT", url: "https://pipsnytgame.pages.dev/", category: "puzzle", description: "Place dominoes to satisfy each region's rules in this NYT-style puzzle.", backgroundImage: "/img/pips-nyt.jpg", genre: "puzzle", added: "2026-10-18" },
  { name: "Pokedoku", url: "https://pokedoku.pages.dev/", category: "words", description: "Fill the 3x3 grid with Pokemon that match both the row and the column.", backgroundImage: "/img/pokedoku.jpg", genre: "words", added: "2026-10-18" },
  { name: "Polygonle", url: "https://polygonle.pages.dev/", category: "words", description: "Guess the mystery shape in a Wordle-style puzzle.", backgroundImage: "/img/polygonle.jpg", genre: "words", added: "2026-10-18" },
  { name: "Poople", url: "https://poople.pages.dev/", category: "words", description: "A Wordle-style guessing game: use each clue to narrow it down.", backgroundImage: "/img/poople.jpg", genre: "words", added: "2026-10-18" },
  { name: "Quintessential", url: "https://quintessential-unlimited.pages.dev/", category: "words", description: "A Wordle-style word challenge with unlimited rounds.", backgroundImage: "/img/quintessential.jpg", genre: "words", added: "2026-10-18" },
  { name: "Rankdle", url: "https://rankdle.pages.dev/", category: "words", description: "A Wordle-style ranking guessing game: use the hints to find the answer.", backgroundImage: "/img/rankdle.jpg", genre: "words", added: "2026-10-18" },
  { name: "Redactle", url: "https://redactle.pages.dev/", category: "words", description: "Uncover the hidden Wikipedia article from its redacted text.", backgroundImage: "/img/redactle.jpg", genre: "words", added: "2026-10-18" },
  { name: "Rngdle", url: "https://rngdle.pages.dev/", category: "words", description: "A guessing game driven by random picks: can you crack it?", backgroundImage: "/img/rngdle.jpg", genre: "words", added: "2026-10-18" },
  { name: "Slope Rider", url: "https://slope-rider.pages.dev/", category: "racing", description: "Race down neon slopes, dodge obstacles and survive at speed.", backgroundImage: "/img/slope-rider.jpg", genre: "racing", added: "2026-10-18" },
  { name: "Snow Rider", url: "https://snowriderunblocked.pages.dev/", category: "racing", description: "Sled down snowy hills, dodge trees and collect gifts.", backgroundImage: "/img/snow-rider.jpg", genre: "racing", added: "2026-10-18" },
  { name: "Sonic Dash", url: "https://sonicdashgame.netlify.app/", category: "platformer", description: "Run with Sonic through endless levels and collect rings.", backgroundImage: "/img/sonic-dash.jpg", genre: "platformer", added: "2026-10-18" },
  { name: "Spacebar Clicker", url: "https://spacebarclicker.pages.dev/", category: "arcade", description: "How fast can you tap the spacebar? Beat your best score.", backgroundImage: "/img/spacebar-clicker.jpg", genre: "arcade", added: "2026-10-18" },
  { name: "Sports Connections", url: "https://sports-connections.pages.dev/", category: "words", description: "Group sports names into four hidden categories.", backgroundImage: "/img/sports-connections.jpg", genre: "words", added: "2026-10-18" },
  { name: "The Password Game", url: "https://thepassword-game.netlify.app/", category: "puzzle", description: "Create a password that follows ever-crazier rules.", backgroundImage: "/img/the-password-game.jpg", genre: "puzzle", added: "2026-10-18" },
  { name: "WebSudoku", url: "https://websudoku.pages.dev/", category: "puzzle", description: "Classic sudoku puzzles from easy to evil.", backgroundImage: "/img/websudoku.jpg", genre: "puzzle", added: "2026-10-18" },
  { name: "Wordblast", url: "https://wordblast.pages.dev/", category: "words", description: "Race to make words from the letters before time runs out.", backgroundImage: "/img/wordblast.jpg", genre: "words", added: "2026-10-18" },
  { name: "Wordhurdle", url: "https://wordhurdle.pages.dev/", category: "words", description: "Clear each hurdle by guessing the right word.", backgroundImage: "/img/wordhurdle.jpg", genre: "words", added: "2026-10-18" },
  { name: "Typing Racer", url: "https://typingracer.pages.dev/", category: "words", description: "Race the clock and rivals: type fast and accurately.", backgroundImage: "/img/typing-racer.jpg", genre: "words", added: "2026-10-18" },
  //  end of NEW games 
  { name: "Slope", url: "https://olivia-games.github.io/seraph/games/slope/", category: "action", description: "Fast-paced action challenge featuring Slope.", backgroundImage: "/seraph/images/thumbnails/slope.jpg", genre: "platformer" },
  { name: "Subwaysurfers", url: "https://olivia-games.github.io/seraph/games/subwaysurfers/", category: "action", description: "React quickly and survive intense action in Subwaysurfers.", backgroundImage: "/seraph/images/thumbnails/subwaysurfers.jpeg", genre: "platformer" },
  { name: "Flappy", url: "https://olivia-games.github.io/seraph/games/flappy/", category: "action", description: "Flappy delivers nonstop arcade-style action.", backgroundImage: "/seraph/images/thumbnails/flappybird.jpg", genre: "mobile" },
  { name: "Papaspizzaria", url: "https://olivia-games.github.io/seraph/games/papaspizzaria/", category: "restaurant", description: "Cook, serve, and manage customers in Papaspizzaria.", backgroundImage: "/seraph/images/thumbnails/papaspizzeria.jpg", genre: "simulation" },
  { name: "Papasburgeria", url: "https://olivia-games.github.io/seraph/games/papasburgeria/", category: "restaurant", description: "Papasburgeria lets you run your own virtual restaurant.", backgroundImage: "/seraph/images/thumbnails/papasburgeria.jpg", genre: "simulation" },
  { name: "Sm64", url: "https://olivia-games.github.io/seraph/games/sm64/", category: "action", description: "Sm64 delivers nonstop arcade-style action.", backgroundImage: "/seraph/images/thumbnails/sm64.jpg", genre: "platformer" },
  { name: "Run3", url: "https://olivia-games.github.io/seraph/games/run3/", category: "action", description: "Fast-paced action challenge featuring Run3.", backgroundImage: "/seraph/images/thumbnails/run3.jpg", genre: "platformer" },
  { name: "Bitlife", url: "https://olivia-games.github.io/seraph/games/bitlife/", category: "action", description: "React quickly and survive intense action in Bitlife.", backgroundImage: "/seraph/images/thumbnails/bitlife.jpg", genre: "simulator" },
  { name: "Crossy", url: "https://olivia-games.github.io/seraph/games/crossy/", category: "action", description: "Crossy delivers nonstop arcade-style action.", backgroundImage: "/seraph/images/thumbnails/crossyroad.jpg", genre: "mobile" },
  { name: "Mc", url: "https://olivia-games.github.io/seraph/games/mc/", category: "action", description: "Fast-paced action challenge featuring Mc.", backgroundImage: "/seraph/images/thumbnails/mc.jpg", genre: "minecraft" },
  { name: "Cookieclicker", url: "https://olivia-games.github.io/seraph/games/cookieclicker/", category: "strategy", description: "Cookieclicker rewards smart decisions and strategy.", backgroundImage: "/seraph/images/thumbnails/cookieclick.jpg", genre: "arcade" },
  { name: "Templerun2", url: "https://olivia-games.github.io/seraph/games/templerun2/", category: "action", description: "Templerun2 delivers nonstop arcade-style action.", backgroundImage: "/seraph/images/thumbnails/templerun2.jpg", genre: "platformer" },
  { name: "Ducklife4", url: "https://olivia-games.github.io/seraph/games/ducklife4/", category: "action", description: "Fast-paced action challenge featuring Ducklife4.", backgroundImage: "/seraph/images/thumbnails/ducklife4.jpg", genre: "simulation" },
  { name: "Dinogame", url: "https://olivia-games.github.io/seraph/games/dinogame/", category: "action", description: "React quickly and survive intense action in Dinogame.", backgroundImage: "/seraph/images/thumbnails/chromedino.jpg", genre: "arcade" },
  { name: "Jetpackjoyride", url: "https://olivia-games.github.io/seraph/games/jetpackjoyride/", category: "action", description: "Jetpackjoyride delivers nonstop arcade-style action.", backgroundImage: "/seraph/images/thumbnails/jetpackjoyride.jpg", genre: "arcade" },
  { name: "Retrobowl", url: "https://olivia-games.github.io/seraph/games/retrobowl/", category: "action", description: "Fast-paced action challenge featuring Retrobowl.", backgroundImage: "/seraph/images/thumbnails/retrobowl.jpg", genre: "arcade" },
  { name: "Fruitninja", url: "https://olivia-games.github.io/seraph/games/fruitninja/", category: "action", description: "React quickly and survive intense action in Fruitninja.", backgroundImage: "/seraph/images/thumbnails/fruitninja.jpg", genre: "arcade" },
  { name: "Doodlejump", url: "https://olivia-games.github.io/seraph/games/doodlejump/", category: "action", description: "Doodlejump delivers nonstop arcade-style action.", backgroundImage: "/seraph/images/thumbnails/doodlejump.jpg", genre: "platformer" },
  { name: "2048", url: "https://olivia-games.github.io/seraph/games/2048/", category: "puzzle", description: "Solve clever puzzles and brain teasers in 2048.", backgroundImage: "/seraph/images/thumbnails/2048.jpg", genre: "puzzle" },
  { name: "Tetris", url: "https://olivia-games.github.io/seraph/games/tetris/", category: "action", description: "React quickly and survive intense action in Tetris.", backgroundImage: "/seraph/images/thumbnails/tetris.jpg", genre: "tetris" },
  { name: "Fancypantsadventure", url: "https://olivia-games.github.io/seraph/games/fancypantsadventure/", category: "action", description: "Fancypantsadventure delivers nonstop arcade-style action.", backgroundImage: "/seraph/images/thumbnails/fancypantsadventure.jpg", genre: "platformer" },
  { name: "Happywheels", url: "https://olivia-games.github.io/seraph/games/happywheels/", category: "action", description: "Fast-paced action challenge featuring Happywheels.", backgroundImage: "/seraph/images/thumbnails/happywheels.jpg", genre: "arcade" },
  { name: "Papashotdoggeria", url: "https://olivia-games.github.io/seraph/games/papashotdoggeria/", category: "restaurant", description: "Papashotdoggeria lets you run your own virtual restaurant.", backgroundImage: "/seraph/images/thumbnails/papashotdoggeria.jpg", genre: "simulation" },
  { name: "Paperio2", url: "https://olivia-games.github.io/seraph/games/paperio2/", category: "action", description: "Paperio2 delivers nonstop arcade-style action.", backgroundImage: "/seraph/images/thumbnails/paperio2.jpg", genre: "arcade" },
  { name: "Superhot", url: "https://olivia-games.github.io/seraph/games/superhot/", category: "action", description: "Fast-paced action challenge featuring Superhot.", backgroundImage: "/seraph/images/thumbnails/superhot.jpg", genre: "adventure" },
  { name: "Thebindingofisaac", url: "https://olivia-games.github.io/seraph/games/thebindingofisaac/", category: "action", description: "React quickly and survive intense action in Thebindingofisaac.", backgroundImage: "/seraph/images/thumbnails/thebindingofisaac.jpg", genre: "adventure" },
  { name: "Townscaper", url: "https://olivia-games.github.io/seraph/games/townscaper/", category: "action", description: "Townscaper delivers nonstop arcade-style action.", backgroundImage: "/seraph/images/thumbnails/townscaper.jpg", genre: "simulator" },
  { name: "Tunnelrush", url: "https://olivia-games.github.io/seraph/games/tunnelrush/", category: "action", description: "Fast-paced action challenge featuring Tunnelrush.", backgroundImage: "/seraph/images/thumbnails/tunnelrush.jpg", genre: "arcade" },
  { name: "Themehotel", url: "https://olivia-games.github.io/seraph/games/themehotel/", category: "action", description: "React quickly and survive intense action in Themehotel.", backgroundImage: "/seraph/images/thumbnails/themehotel.jpg", genre: "simulation" },
  { name: "Escapingtheprison", url: "https://olivia-games.github.io/seraph/games/escapingtheprison/", category: "action", description: "Escapingtheprison delivers nonstop arcade-style action.", backgroundImage: "/seraph/images/thumbnails/escapingtheprison.jpg", genre: "adventure" },
  { name: "Stealingthediamond", url: "https://olivia-games.github.io/seraph/games/stealingthediamond/", category: "action", description: "Fast-paced action challenge featuring Stealingthediamond.", backgroundImage: "/seraph/images/thumbnails/stealingthediamond.jpg", genre: "adventure" },
  { name: "Infiltratingtheairship", url: "https://olivia-games.github.io/seraph/games/infiltratingtheairship/", category: "action", description: "React quickly and survive intense action in Infiltratingtheairship.", backgroundImage: "/seraph/images/thumbnails/infiltratingtheairship.jpg", genre: "adventure" },
  { name: "Fleeingthecomplex", url: "https://olivia-games.github.io/seraph/games/fleeingthecomplex/", category: "action", description: "Fleeingthecomplex delivers nonstop arcade-style action.", backgroundImage: "/seraph/images/thumbnails/fleeingthecomplex.jpg", genre: "adventure" },
  { name: "Theimpossiblequiz", url: "https://olivia-games.github.io/seraph/games/theimpossiblequiz/", category: "action", description: "Fast-paced action challenge featuring Theimpossiblequiz.", backgroundImage: "/seraph/images/thumbnails/theimpossiblequiz.jpg", genre: "arcade" },
  { name: "Solitaire", url: "https://olivia-games.github.io/seraph/games/solitaire/", category: "action", description: "React quickly and survive intense action in Solitaire.", backgroundImage: "/seraph/images/thumbnails/solitaire.jpg", genre: "puzzle" },
  { name: "Drifthunters", url: "https://olivia-games.github.io/seraph/games/drifthunters/", category: "racing", description: "Fast and competitive racing action in Drifthunters.", backgroundImage: "/seraph/images/thumbnails/drifthunters.jpg", genre: "adventure" },
  { name: "Vex6", url: "https://olivia-games.github.io/seraph/games/vex6/", category: "action", description: "Fast-paced action challenge featuring Vex6.", backgroundImage: "/seraph/images/thumbnails/vex6.jpg", genre: "platformer" },
  { name: "Amongus", url: "https://olivia-games.github.io/seraph/games/amongus/", category: "action", description: "React quickly and survive intense action in Amongus.", backgroundImage: "/seraph/images/thumbnails/amongus.jpg", genre: "arcade" },
  { name: "Surf", url: "https://olivia-games.github.io/seraph/games/surf/", category: "action", description: "Surf delivers nonstop arcade-style action.", backgroundImage: "/seraph/images/thumbnails/surf.jpg", genre: "arcade" },
  { name: "Motox3m", url: "https://olivia-games.github.io/seraph/games/motox3m/", category: "racing", description: "Race at high speed and master the tracks in Motox3m.", backgroundImage: "/seraph/images/thumbnails/motox3m.jpeg", genre: "platformer" },
  { name: "Fnaf", url: "https://olivia-games.github.io/seraph/games/fnaf/", category: "horror", description: "Fnaf delivers suspense and horror elements.", backgroundImage: "/seraph/images/thumbnails/fnaf.jpg", genre: "adventure" },
  { name: "Fnaf 2", url: "https://olivia-games.github.io/seraph/games/fnaf-2/", category: "horror", description: "Survive the fear and atmosphere of Fnaf 2.", backgroundImage: "/seraph/images/thumbnails/fnaf2.jpg", genre: "adventure" },
  { name: "Fnaf 3", url: "https://olivia-games.github.io/seraph/games/fnaf-3/", category: "horror", description: "A tense and scary experience awaits in Fnaf 3.", backgroundImage: "/seraph/images/thumbnails/fnaf3.jpg", genre: "adventure" },
  { name: "Fnaf 4", url: "https://olivia-games.github.io/seraph/games/fnaf-4/", category: "horror", description: "Fnaf 4 delivers suspense and horror elements.", backgroundImage: "/seraph/images/thumbnails/fnaf4.jpg", genre: "adventure" },
  { name: "Riddleschool", url: "https://olivia-games.github.io/seraph/games/riddleschool/riddleschool1/", category: "action", description: "Riddleschool delivers nonstop arcade-style action.", backgroundImage: "/seraph/images/thumbnails/riddleschool.jpg", genre: "puzzle" },
  { name: "Riddleschool", url: "https://olivia-games.github.io/seraph/games/riddleschool/riddleschool2/", category: "action", description: "Fast-paced action challenge featuring Riddleschool.", backgroundImage: "/seraph/images/thumbnails/riddleschool2.jpg", genre: "puzzle" },
  { name: "Riddleschool", url: "https://olivia-games.github.io/seraph/games/riddleschool/riddleschool3/", category: "action", description: "React quickly and survive intense action in Riddleschool.", backgroundImage: "/seraph/images/thumbnails/riddleschool3.jpg", genre: "puzzle" },
  { name: "Riddleschool", url: "https://olivia-games.github.io/seraph/games/riddleschool/riddleschool4/", category: "action", description: "Riddleschool delivers nonstop arcade-style action.", backgroundImage: "/seraph/images/thumbnails/riddleschool4.jpg", genre: "puzzle" },
  { name: "Riddleschool", url: "https://olivia-games.github.io/seraph/games/riddleschool/riddleschool5/", category: "action", description: "Fast-paced action challenge featuring Riddleschool.", backgroundImage: "/seraph/images/thumbnails/riddleschool5.jpg", genre: "puzzle" },
  { name: "Riddleschool", url: "https://olivia-games.github.io/seraph/games/riddleschool/riddletransfer/", category: "action", description: "React quickly and survive intense action in Riddleschool.", backgroundImage: "/seraph/images/thumbnails/riddletransfer.jpg", genre: "puzzle" },
  { name: "Riddleschool", url: "https://olivia-games.github.io/seraph/games/riddleschool/riddletransfer2/", category: "action", description: "Riddleschool delivers nonstop arcade-style action.", backgroundImage: "/seraph/images/thumbnails/riddletransfer2.jpg", genre: "puzzle" },
  { name: "Driftboss", url: "https://olivia-games.github.io/seraph/games/driftboss/", category: "racing", description: "Race at high speed and master the tracks in Driftboss.", backgroundImage: "/seraph/images/thumbnails/driftboss.jpg", genre: "mobile" },
  { name: "Fnf", url: "https://olivia-games.github.io/seraph/games/fnf/", category: "music", description: "Fnf combines music with fast-paced gameplay.", backgroundImage: "/seraph/images/thumbnails/fnf.jpg", genre: "arcade" },
  { name: "Pacman", url: "https://olivia-games.github.io/seraph/games/pacman/", category: "action", description: "Pacman delivers nonstop arcade-style action.", backgroundImage: "/seraph/images/thumbnails/pacman.jpg", genre: "arcade" },
  { name: "Papaspancakeria", url: "https://olivia-games.github.io/seraph/games/papaspancakeria/", category: "restaurant", description: "Cook, serve, and manage customers in Papaspancakeria.", backgroundImage: "/seraph/images/thumbnails/papaspancakeria.jpg", genre: "simulation" },
  { name: "Rooftop", url: "https://olivia-games.github.io/seraph/games/rooftop/", category: "action", description: "React quickly and survive intense action in Rooftop.", backgroundImage: "/seraph/images/thumbnails/rooftopsnipers.jpg", genre: "arcade" },
  { name: "Baldisbasics", url: "https://olivia-games.github.io/seraph/games/baldisbasics/", category: "action", description: "Baldisbasics delivers nonstop arcade-style action.", backgroundImage: "/seraph/images/thumbnails/baldisbasics.jpg", genre: "adventure" },
  { name: "Bobtherobber2", url: "https://olivia-games.github.io/seraph/games/bobtherobber2/", category: "action", description: "Fast-paced action challenge featuring Bobtherobber2.", backgroundImage: "/seraph/images/thumbnails/bobtherobber2.jpg", genre: "adventure" },
  { name: "Minesweeper", url: "https://olivia-games.github.io/seraph/games/minesweeper/", category: "puzzle", description: "Minesweeper challenges logic and problem-solving skills.", backgroundImage: "/seraph/images/thumbnails/minesweeper.jpg", genre: "puzzle" },
  { name: "Pokemonemerald", url: "https://olivia-games.github.io/seraph/games/pokemonemerald/", category: "rpg", description: "An RPG adventure filled with depth: Pokemonemerald.", backgroundImage: "/seraph/images/thumbnails/pokemonemerald.jpg", genre: "adventure" },
  { name: "Pokemonfirered", url: "https://olivia-games.github.io/seraph/games/pokemonfirered/", category: "rpg", description: "Embark on an epic role-playing journey in Pokemonfirered.", backgroundImage: "/seraph/images/thumbnails/pokemonfirered.jpg", genre: "adventure" },
  { name: "Supermariobros", url: "https://olivia-games.github.io/seraph/games/supermariobros/", category: "platformer", description: "Supermariobros challenges your timing and movement skills.", backgroundImage: "/seraph/images/thumbnails/supermariobros.jpg", genre: "platformer" },
  { name: "Supermariokart", url: "https://olivia-games.github.io/seraph/games/supermariokart/", category: "platformer", description: "A skill-based platforming adventure called Supermariokart.", backgroundImage: "/seraph/images/thumbnails/supermariokart.jpg", genre: "arcade" },
  { name: "Supermarioworld", url: "https://olivia-games.github.io/seraph/games/supermarioworld/", category: "platformer", description: "Jump, run, and explore classic platforming in Supermarioworld.", backgroundImage: "/seraph/images/thumbnails/supermarioworld.jpg", genre: "platformer" },
  { name: "Thereisnogame", url: "https://olivia-games.github.io/seraph/games/thereisnogame/", category: "action", description: "React quickly and survive intense action in Thereisnogame.", backgroundImage: "/seraph/images/thumbnails/thereisnogame.jpg", genre: "mobile" },
  { name: "Worldshardestgame", url: "https://olivia-games.github.io/seraph/games/worldshardestgame/", category: "action", description: "Worldshardestgame delivers nonstop arcade-style action.", backgroundImage: "/seraph/images/thumbnails/worldshardestgame.jpg", genre: "puzzle" },
  { name: "Castlevania", url: "https://olivia-games.github.io/seraph/games/castlevania/", category: "action", description: "Fast-paced action challenge featuring Castlevania.", backgroundImage: "/seraph/images/thumbnails/castlevania.jpg", genre: "adventure" },
  { name: "Donkeykong", url: "https://olivia-games.github.io/seraph/games/donkeykong/", category: "action", description: "React quickly and survive intense action in Donkeykong.", backgroundImage: "/seraph/images/thumbnails/donkeykong.jpg", genre: "arcade" },
  { name: "Drmario", url: "https://olivia-games.github.io/seraph/games/drmario/", category: "platformer", description: "A skill-based platforming adventure called Drmario.", backgroundImage: "/seraph/images/thumbnails/drmario.jpg", genre: "puzzle" },
  { name: "Metroid", url: "https://olivia-games.github.io/seraph/games/metroid/", category: "platformer", description: "Jump, run, and explore classic platforming in Metroid.", backgroundImage: "/seraph/images/thumbnails/metroid.jpg", genre: "adventure" },
  { name: "Supermariobros2", url: "https://olivia-games.github.io/seraph/games/supermariobros2/", category: "platformer", description: "Supermariobros2 challenges your timing and movement skills.", backgroundImage: "/seraph/images/thumbnails/supermariobros2.jpg", genre: "platformer" },
  { name: "Supermariobros3", url: "https://olivia-games.github.io/seraph/games/supermariobros3/", category: "platformer", description: "A skill-based platforming adventure called Supermariobros3.", backgroundImage: "/seraph/images/thumbnails/supermariobros3.jpg", genre: "platformer" },
  { name: "Thelegendofzelda", url: "https://olivia-games.github.io/seraph/games/thelegendofzelda/", category: "platformer", description: "Jump, run, and explore classic platforming in Thelegendofzelda.", backgroundImage: "/seraph/images/thumbnails/thelegendofzelda.jpg", genre: "adventure" },
  { name: "Warioware", url: "https://olivia-games.github.io/seraph/games/warioware/", category: "action", description: "React quickly and survive intense action in Warioware.", backgroundImage: "/seraph/images/thumbnails/warioware.jpg", genre: "arcade" },
  { name: "Yoshisisland", url: "https://olivia-games.github.io/seraph/games/yoshisisland/", category: "action", description: "Yoshisisland delivers nonstop arcade-style action.", backgroundImage: "/seraph/images/thumbnails/yoshisisland.jpg", genre: "platformer" },
  { name: "Donkeykongland", url: "https://olivia-games.github.io/seraph/games/donkeykongland/", category: "action", description: "Fast-paced action challenge featuring Donkeykongland.", backgroundImage: "/seraph/images/thumbnails/donkeykongland.jpg", genre: "platformer" },
  { name: "Kirbysdreamland", url: "https://olivia-games.github.io/seraph/games/kirbysdreamland/", category: "platformer", description: "Kirbysdreamland challenges your timing and movement skills.", backgroundImage: "/seraph/images/thumbnails/kirbysdreamland.jpg", genre: "platformer" },
  { name: "Supermarioland", url: "https://olivia-games.github.io/seraph/games/supermarioland/", category: "platformer", description: "A skill-based platforming adventure called Supermarioland.", backgroundImage: "/seraph/images/thumbnails/supermarioland.jpg", genre: "platformer" },
  { name: "Dogeminer", url: "https://olivia-games.github.io/seraph/games/dogeminer/", category: "action", description: "Fast-paced action challenge featuring Dogeminer.", backgroundImage: "/seraph/images/thumbnails/dogeminer.jpg", genre: "simulator" },
  { name: "Tanukisunset", url: "https://olivia-games.github.io/seraph/games/tanukisunset/", category: "action", description: "React quickly and survive intense action in Tanukisunset.", backgroundImage: "/seraph/images/thumbnails/tanukisunset.jpg", genre: "arcade" },
  { name: "Aquaparkslides", url: "https://olivia-games.github.io/seraph/games/aquaparkslides/", category: "action", description: "Aquaparkslides delivers nonstop arcade-style action.", backgroundImage: "/seraph/images/thumbnails/aquaparkslides.jpg", genre: "arcade" },
  { name: "Colorswitch", url: "https://olivia-games.github.io/seraph/games/colorswitch/", category: "action", description: "Fast-paced action challenge featuring Colorswitch.", backgroundImage: "/seraph/images/thumbnails/colorswitch.jpg", genre: "arcade" },
  { name: "Papasfreezeria", url: "https://olivia-games.github.io/seraph/games/papasfreezeria/", category: "restaurant", description: "Papasfreezeria lets you run your own virtual restaurant.", backgroundImage: "/seraph/images/thumbnails/papasfreezeria.jpg", genre: "simulation" },
  { name: "Btd", url: "https://olivia-games.github.io/seraph/games/btd/btd/", category: "strategy", description: "A strategic gameplay experience built around Btd.", backgroundImage: "/seraph/images/thumbnails/btd.jpg", genre: "arcade" },
  { name: "Btd", url: "https://olivia-games.github.io/seraph/games/btd/btd2/", category: "strategy", description: "Plan ahead and outthink opponents in Btd.", backgroundImage: "/seraph/images/thumbnails/btd2.jpg", genre: "arcade" },
  { name: "Btd", url: "https://olivia-games.github.io/seraph/games/btd/btd3/", category: "strategy", description: "Btd rewards smart decisions and strategy.", backgroundImage: "/seraph/images/thumbnails/btd3.jpg", genre: "arcade" },
  { name: "Btd", url: "https://olivia-games.github.io/seraph/games/btd/btd4/", category: "strategy", description: "A strategic gameplay experience built around Btd.", backgroundImage: "/seraph/images/thumbnails/btd4.jpg", genre: "arcade" },
  { name: "Bomberman", url: "https://olivia-games.github.io/seraph/games/bomberman/", category: "action", description: "Fast-paced action challenge featuring Bomberman.", backgroundImage: "/seraph/images/thumbnails/bomberman.jpg", genre: "arcade" },
  { name: "Fireemblem", url: "https://olivia-games.github.io/seraph/games/fireemblem/", category: "action", description: "React quickly and survive intense action in Fireemblem.", backgroundImage: "/seraph/images/thumbnails/fireemblem.jpg", genre: "adventure" },
  { name: "Iceclimber", url: "https://olivia-games.github.io/seraph/games/iceclimber/", category: "action", description: "Iceclimber delivers nonstop arcade-style action.", backgroundImage: "/seraph/images/thumbnails/iceclimber.jpg", genre: "arcade" },
  { name: "Mariokartsupercircuit", url: "https://olivia-games.github.io/seraph/games/mariokartsupercircuit/", category: "platformer", description: "Jump, run, and explore classic platforming in Mariokartsupercircuit.", backgroundImage: "/seraph/images/thumbnails/mariokartsupercircuit.jpg", genre: "arcade" },
  { name: "Pokemonleafgreen", url: "https://olivia-games.github.io/seraph/games/pokemonleafgreen/", category: "rpg", description: "Pokemonleafgreen features progression, exploration, and story.", backgroundImage: "/seraph/images/thumbnails/pokemonleafgreen.jpg", genre: "adventure" },
  { name: "Pokemonruby", url: "https://olivia-games.github.io/seraph/games/pokemonruby/", category: "rpg", description: "An RPG adventure filled with depth: Pokemonruby.", backgroundImage: "/seraph/images/thumbnails/pokemonruby.jpg", genre: "adventure" },
  { name: "Pokemonsapphire", url: "https://olivia-games.github.io/seraph/games/pokemonsapphire/", category: "rpg", description: "Embark on an epic role-playing journey in Pokemonsapphire.", backgroundImage: "/seraph/images/thumbnails/pokemonsapphire.jpg", genre: "adventure" },
  { name: "Superstarsaga", url: "https://olivia-games.github.io/seraph/games/superstarsaga/", category: "action", description: "React quickly and survive intense action in Superstarsaga.", backgroundImage: "/seraph/images/thumbnails/superstarsaga.jpg", genre: "platformer" },
  { name: "Adofai", url: "https://olivia-games.github.io/seraph/games/adofai/", category: "action", description: "Adofai delivers nonstop arcade-style action.", backgroundImage: "/seraph/images/thumbnails/adofai.jpg", genre: "arcade" },
  { name: "Supersmashflash", url: "https://olivia-games.github.io/seraph/games/supersmashflash/", category: "fighting", description: "Battle opponents in skill-based combat in Supersmashflash.", backgroundImage: "/seraph/images/thumbnails/supersmashflash.jpg", genre: "arcade" },
  { name: "Supermeatboy", url: "https://olivia-games.github.io/seraph/games/supermeatboy/", category: "action", description: "React quickly and survive intense action in Supermeatboy.", backgroundImage: "/seraph/images/thumbnails/supermeatboy.jpg", genre: "platformer" },
  { name: "Stickmanhook", url: "https://olivia-games.github.io/seraph/games/stickmanhook/", category: "action", description: "Stickmanhook delivers nonstop arcade-style action.", backgroundImage: "/seraph/images/thumbnails/stickmanhook.jpg", genre: "mobile" },
  { name: "Defendthetank", url: "https://olivia-games.github.io/seraph/games/defendthetank/", category: "action", description: "Fast-paced action challenge featuring Defendthetank.", backgroundImage: "/seraph/images/thumbnails/defendthetank.jpg", genre: "arcade" },
  { name: "Sortthecourt", url: "https://olivia-games.github.io/seraph/games/sortthecourt/", category: "action", description: "React quickly and survive intense action in Sortthecourt.", backgroundImage: "/seraph/images/thumbnails/sortthecourt.jpg", genre: "simulation" },
  { name: "Thisistheonlylevel", url: "https://olivia-games.github.io/seraph/games/thisistheonlylevel/", category: "action", description: "Thisistheonlylevel delivers nonstop arcade-style action.", backgroundImage: "/seraph/images/thumbnails/thisistheonlylevel.jpg", genre: "platformer" },
  { name: "Run", url: "https://olivia-games.github.io/seraph/games/run/", category: "action", description: "Fast-paced action challenge featuring Run.", backgroundImage: "/seraph/images/thumbnails/run.jpg", genre: "platformer" },
  { name: "Run2", url: "https://olivia-games.github.io/seraph/games/run2/", category: "action", description: "React quickly and survive intense action in Run2.", backgroundImage: "/seraph/images/thumbnails/run2.jpg", genre: "platformer" },
  { name: "Battleships", url: "https://olivia-games.github.io/seraph/games/battleships/", category: "action", description: "Battleships delivers nonstop arcade-style action.", backgroundImage: "/seraph/images/thumbnails/battleships.jpg", genre: "arcade" },
  { name: "Breakingthebank", url: "https://olivia-games.github.io/seraph/games/breakingthebank/", category: "action", description: "Fast-paced action challenge featuring Breakingthebank.", backgroundImage: "/seraph/images/thumbnails/breakingthebank.jpg", genre: "adventure" },
  { name: "Ducklife", url: "https://olivia-games.github.io/seraph/games/ducklife/", category: "action", description: "React quickly and survive intense action in Ducklife.", backgroundImage: "/seraph/images/thumbnails/ducklife.jpg", genre: "simulation" },
  { name: "Ducklife2", url: "https://olivia-games.github.io/seraph/games/ducklife2/", category: "action", description: "Ducklife2 delivers nonstop arcade-style action.", backgroundImage: "/seraph/images/thumbnails/ducklife2.jpg", genre: "simulation" },
  { name: "Ducklife3", url: "https://olivia-games.github.io/seraph/games/ducklife3/", category: "action", description: "Fast-paced action challenge featuring Ducklife3.", backgroundImage: "/seraph/images/thumbnails/ducklife3.jpg", genre: "simulation" },
  { name: "Linerider", url: "https://olivia-games.github.io/seraph/games/linerider/", category: "action", description: "React quickly and survive intense action in Linerider.", backgroundImage: "/seraph/images/thumbnails/linerider.jpg", genre: "platformer" },
  { name: "Mariocombat", url: "https://olivia-games.github.io/seraph/games/mariocombat/", category: "platformer", description: "A skill-based platforming adventure called Mariocombat.", backgroundImage: "/seraph/images/thumbnails/mariocombat.jpg", genre: "platformer" },
  { name: "Raftwars2", url: "https://olivia-games.github.io/seraph/games/raftwars2/", category: "action", description: "Fast-paced action challenge featuring Raftwars2.", backgroundImage: "/seraph/images/thumbnails/raftwars2.jpg", genre: "arcade" },
  { name: "Spaceinvaders", url: "https://olivia-games.github.io/seraph/games/spaceinvaders/", category: "action", description: "React quickly and survive intense action in Spaceinvaders.", backgroundImage: "/seraph/images/thumbnails/spaceinvaders.jpg", genre: "arcade" },
  { name: "Animalcrossingwildworld", url: "https://olivia-games.github.io/seraph/games/animalcrossingwildworld/", category: "action", description: "Animalcrossingwildworld delivers nonstop arcade-style action.", backgroundImage: "/seraph/images/thumbnails/animalcrossingwildworld.jpg", genre: "simulation" },
  { name: "Mariokartds", url: "https://olivia-games.github.io/seraph/games/mariokartds/", category: "platformer", description: "Jump, run, and explore classic platforming in Mariokartds.", backgroundImage: "/seraph/images/thumbnails/mariokartds.jpg", genre: "arcade" },
  { name: "Newsupermariobros", url: "https://olivia-games.github.io/seraph/games/newsupermariobros/", category: "platformer", description: "Newsupermariobros challenges your timing and movement skills.", backgroundImage: "/seraph/images/thumbnails/newsupermariobros.jpg", genre: "platformer" },
  { name: "Nintendogs", url: "https://olivia-games.github.io/seraph/games/nintendogs/", category: "action", description: "Nintendogs delivers nonstop arcade-style action.", backgroundImage: "/seraph/images/thumbnails/nintendogs.jpg", genre: "simulation" },
  { name: "Sm64ds", url: "https://olivia-games.github.io/seraph/games/sm64ds/", category: "action", description: "Fast-paced action challenge featuring Sm64ds.", backgroundImage: "/seraph/images/thumbnails/sm64ds.jpg", genre: "platformer" },
  { name: "Gunmayhem", url: "https://olivia-games.github.io/seraph/games/gunmayhem/", category: "action", description: "React quickly and survive intense action in Gunmayhem.", backgroundImage: "/seraph/images/thumbnails/gunmayhem.jpg", genre: "arcade" },
  { name: "Learntofly", url: "https://olivia-games.github.io/seraph/games/learntofly/", category: "action", description: "Learntofly delivers nonstop arcade-style action.", backgroundImage: "/seraph/images/thumbnails/learntofly.jpg", genre: "arcade" },
  { name: "Rooftop2", url: "https://olivia-games.github.io/seraph/games/rooftop2/", category: "action", description: "Fast-paced action challenge featuring Rooftop2.", backgroundImage: "/seraph/images/thumbnails/rooftopsnipers2.jpg", genre: "arcade" },
  { name: "Fireboywatergirl", url: "https://olivia-games.github.io/seraph/games/fireboywatergirl/", category: "action", description: "React quickly and survive intense action in Fireboywatergirl.", backgroundImage: "/seraph/images/thumbnails/fireboyandwatergirl.jpg", genre: "platformer" },
  { name: "Chibiknight", url: "https://olivia-games.github.io/seraph/games/chibiknight/", category: "action", description: "Chibiknight delivers nonstop arcade-style action.", backgroundImage: "/seraph/images/thumbnails/chibiknight.jpg", genre: "adventure" },
  { name: "Clusterrush", url: "https://olivia-games.github.io/seraph/games/clusterrush/", category: "action", description: "Fast-paced action challenge featuring Clusterrush.", backgroundImage: "/seraph/images/thumbnails/clusterrush.jpg", genre: "platformer" },
  { name: "Doodledefender", url: "https://olivia-games.github.io/seraph/games/doodledefender/", category: "action", description: "React quickly and survive intense action in Doodledefender.", backgroundImage: "/seraph/images/thumbnails/doodledefender.jpg", genre: "arcade" },
  { name: "Learntofly2", url: "https://olivia-games.github.io/seraph/games/learntofly2/", category: "action", description: "Learntofly2 delivers nonstop arcade-style action.", backgroundImage: "/seraph/images/thumbnails/learntofly2.jpg", genre: "adventure" },
  { name: "Papasscooperia", url: "https://olivia-games.github.io/seraph/games/papasscooperia/", category: "restaurant", description: "Cook, serve, and manage customers in Papasscooperia.", backgroundImage: "/seraph/images/thumbnails/papasscooperia.jpg", genre: "simulation" },
  { name: "Papassushiria", url: "https://olivia-games.github.io/seraph/games/papassushiria/", category: "restaurant", description: "Papassushiria lets you run your own virtual restaurant.", backgroundImage: "/seraph/images/thumbnails/papassushiria.jpg", genre: "simulation" },
  { name: "Papaswingeria", url: "https://olivia-games.github.io/seraph/games/papaswingeria/", category: "restaurant", description: "Prepare meals and satisfy customers in Papaswingeria.", backgroundImage: "/seraph/images/thumbnails/papaswingeria.jpg", genre: "simulation" },
  { name: "Raftwars", url: "https://olivia-games.github.io/seraph/games/raftwars/", category: "action", description: "Fast-paced action challenge featuring Raftwars.", backgroundImage: "/seraph/images/thumbnails/raftwars.jpg", genre: "arcade" },
  { name: "Unfairmario", url: "https://olivia-games.github.io/seraph/games/unfairmario/", category: "platformer", description: "Unfairmario challenges your timing and movement skills.", backgroundImage: "/seraph/images/thumbnails/unfairmario.jpg", genre: "platformer" },
  { name: "Boxingphysics2", url: "https://olivia-games.github.io/seraph/games/boxingphysics2/", category: "fighting", description: "Test your reflexes and combos in Boxingphysics2.", backgroundImage: "/seraph/images/thumbnails/boxingphysics2.jpg", genre: "arcade" },
  { name: "Aceattorney", url: "https://olivia-games.github.io/seraph/games/aceattorney/", category: "action", description: "Fast-paced action challenge featuring Aceattorney.", backgroundImage: "/seraph/images/thumbnails/aceattorney.jpg", genre: "adventure" },
  { name: "Metalgearsolid", url: "https://olivia-games.github.io/seraph/games/metalgearsolid/", category: "action", description: "React quickly and survive intense action in Metalgearsolid.", backgroundImage: "/seraph/images/thumbnails/metalgearsolid.jpg", genre: "adventure" },
  { name: "Mother3", url: "https://olivia-games.github.io/seraph/games/mother3/", category: "action", description: "Mother3 delivers nonstop arcade-style action.", backgroundImage: "/seraph/images/thumbnails/mother3.jpg", genre: "adventure" },
  { name: "Pokemondiamond", url: "https://olivia-games.github.io/seraph/games/pokemondiamond/", category: "rpg", description: "Embark on an epic role-playing journey in Pokemondiamond.", backgroundImage: "/seraph/images/thumbnails/pokemondiamond.jpg", genre: "adventure" },
  { name: "Pokemonplatinum", url: "https://olivia-games.github.io/seraph/games/pokemonplatinum/", category: "rpg", description: "Pokemonplatinum features progression, exploration, and story.", backgroundImage: "/seraph/images/thumbnails/pokemonplatinum.jpg", genre: "adventure" },
  { name: "Pokemonsoulsilver", url: "https://olivia-games.github.io/seraph/games/pokemonsoulsilver/", category: "rpg", description: "An RPG adventure filled with depth: Pokemonsoulsilver.", backgroundImage: "/seraph/images/thumbnails/pokemonsoulsilver.jpg", genre: "adventure" },
  { name: "Advancewars", url: "https://olivia-games.github.io/seraph/games/advancewars/", category: "action", description: "Fast-paced action challenge featuring Advancewars.", backgroundImage: "/seraph/images/thumbnails/advancewars.jpg", genre: "adventure" },
  { name: "Banjopilot", url: "https://olivia-games.github.io/seraph/games/banjopilot/", category: "action", description: "React quickly and survive intense action in Banjopilot.", backgroundImage: "/seraph/images/thumbnails/banjopilot.jpg", genre: "arcade" },
  { name: "Supermonkeyballjr", url: "https://olivia-games.github.io/seraph/games/supermonkeyballjr/", category: "action", description: "Supermonkeyballjr delivers nonstop arcade-style action.", backgroundImage: "/seraph/images/thumbnails/supermonkeyballjr.jpg", genre: "arcade" },
  { name: "Theimpossiblequiz2", url: "https://olivia-games.github.io/seraph/games/theimpossiblequiz2/", category: "action", description: "Fast-paced action challenge featuring Theimpossiblequiz2.", backgroundImage: "/seraph/images/thumbnails/theimpossiblequiz2.jpg", genre: "puzzle" },
  { name: "Papasdonuteria", url: "https://olivia-games.github.io/seraph/games/papasdonuteria/", category: "restaurant", description: "Papasdonuteria lets you run your own virtual restaurant.", backgroundImage: "/seraph/images/thumbnails/papasdonuteria.jpg", genre: "simulation" },
  { name: "Fancypantsadventure2", url: "https://olivia-games.github.io/seraph/games/fancypantsadventure2/", category: "action", description: "Fancypantsadventure2 delivers nonstop arcade-style action.", backgroundImage: "/seraph/images/thumbnails/fancypantsadventure2.jpg", genre: "adventure" },
  { name: "Tinyfishing", url: "https://olivia-games.github.io/seraph/games/tinyfishing/", category: "action", description: "Fast-paced action challenge featuring Tinyfishing.", backgroundImage: "/seraph/images/thumbnails/tinyfishing.jpg", genre: "arcade" },
  { name: "Bigredbutton", url: "https://olivia-games.github.io/seraph/games/bigredbutton/", category: "action", description: "React quickly and survive intense action in Bigredbutton.", backgroundImage: "/seraph/images/thumbnails/bigredbutton.jpg", genre: "puzzle" },
  { name: "Achievementunlocked", url: "https://olivia-games.github.io/seraph/games/achievementunlocked/", category: "action", description: "Achievementunlocked delivers nonstop arcade-style action.", backgroundImage: "/seraph/images/thumbnails/achievementunlocked.jpg", genre: "puzzle" },
  { name: "Kirbymassattack", url: "https://olivia-games.github.io/seraph/games/kirbymassattack/", category: "platformer", description: "Jump, run, and explore classic platforming in Kirbymassattack.", backgroundImage: "/seraph/images/thumbnails/kirbymassattack.jpg", genre: "adventure" },
  { name: "Sonicadvance", url: "https://olivia-games.github.io/seraph/games/sonicadvance/", category: "platformer", description: "Sonicadvance challenges your timing and movement skills.", backgroundImage: "/seraph/images/thumbnails/sonicadvance.jpg", genre: "platformer" },
  { name: "Wormsworldparty", url: "https://olivia-games.github.io/seraph/games/wormsworldparty/", category: "action", description: "Wormsworldparty delivers nonstop arcade-style action.", backgroundImage: "/seraph/images/thumbnails/wormsworldparty.jpg", genre: "adventure" },
  { name: "Badicecream", url: "https://olivia-games.github.io/seraph/games/badicecream/", category: "action", description: "Fast-paced action challenge featuring Badicecream.", backgroundImage: "/seraph/images/thumbnails/badicecream.jpg", genre: "arcade" },
  { name: "Badicecream2", url: "https://olivia-games.github.io/seraph/games/badicecream2/", category: "action", description: "React quickly and survive intense action in Badicecream2.", backgroundImage: "/seraph/images/thumbnails/badicecream2.jpg", genre: "arcade" },
  { name: "Badicecream3", url: "https://olivia-games.github.io/seraph/games/badicecream3/", category: "action", description: "Badicecream3 delivers nonstop arcade-style action.", backgroundImage: "/seraph/images/thumbnails/badicecream3.jpg", genre: "arcade" },
  { name: "Adventurecapitalist", url: "https://olivia-games.github.io/seraph/games/adventurecapitalist/", category: "action", description: "Fast-paced action challenge featuring Adventurecapitalist.", backgroundImage: "/seraph/images/thumbnails/adventurecaptialist.jpg", genre: "simulation" },
  { name: "Monkeymart", url: "https://olivia-games.github.io/seraph/games/monkeymart/", category: "action", description: "React quickly and survive intense action in Monkeymart.", backgroundImage: "/seraph/images/thumbnails/monkeymart.jpg", genre: "simulation" },
  { name: "Doom64", url: "https://olivia-games.github.io/seraph/games/doom64/", category: "action", description: "Doom64 delivers nonstop arcade-style action.", backgroundImage: "/seraph/images/thumbnails/doom64.jpg", genre: "adventure" },
  { name: "Banjokazooie", url: "https://olivia-games.github.io/seraph/games/banjokazooie/", category: "action", description: "Fast-paced action challenge featuring Banjokazooie.", backgroundImage: "/seraph/images/thumbnails/banjokazooie.jpg", genre: "platformer" },
  { name: "Donkeykong64", url: "https://olivia-games.github.io/seraph/games/donkeykong64/", category: "action", description: "React quickly and survive intense action in Donkeykong64.", backgroundImage: "/seraph/images/thumbnails/donkeykong64.jpg", genre: "platformer" },
  { name: "Fzerox", url: "https://olivia-games.github.io/seraph/games/fzerox/", category: "action", description: "Fzerox delivers nonstop arcade-style action.", backgroundImage: "/seraph/images/thumbnails/fzerox.jpg", genre: "arcade" },
  { name: "Kirby64", url: "https://olivia-games.github.io/seraph/games/kirby64/", category: "platformer", description: "Jump, run, and explore classic platforming in Kirby64.", backgroundImage: "/seraph/images/thumbnails/kirby64.jpg", genre: "platformer" },
  { name: "Mariokart64", url: "https://olivia-games.github.io/seraph/games/mariokart64/", category: "platformer", description: "Mariokart64 challenges your timing and movement skills.", backgroundImage: "/seraph/images/thumbnails/mariokart64.jpg", genre: "arcade" },
  { name: "Marioparty", url: "https://olivia-games.github.io/seraph/games/marioparty/", category: "platformer", description: "A skill-based platforming adventure called Marioparty.", backgroundImage: "/seraph/images/thumbnails/marioparty.jpg", genre: "arcade" },
  { name: "Marioparty2", url: "https://olivia-games.github.io/seraph/games/marioparty2/", category: "platformer", description: "Jump, run, and explore classic platforming in Marioparty2.", backgroundImage: "/seraph/images/thumbnails/marioparty2.jpg", genre: "arcade" },
  { name: "Ocarinaoftime", url: "https://olivia-games.github.io/seraph/games/ocarinaoftime/", category: "action", description: "React quickly and survive intense action in Ocarinaoftime.", backgroundImage: "/seraph/images/thumbnails/ocarinaoftime.jpg", genre: "adventure" },
  { name: "Starfox64", url: "https://olivia-games.github.io/seraph/games/starfox64/", category: "action", description: "Starfox64 delivers nonstop arcade-style action.", backgroundImage: "/seraph/images/thumbnails/starfox64.jpg", genre: "adventure" },
  { name: "Supersmashbros", url: "https://olivia-games.github.io/seraph/games/supersmashbros/", category: "fighting", description: "Battle opponents in skill-based combat in Supersmashbros.", backgroundImage: "/seraph/images/thumbnails/supersmashbros.jpg", genre: "arcade" },
  { name: "Streetfighter2", url: "https://olivia-games.github.io/seraph/games/streetfighter2/", category: "fighting", description: "Streetfighter2 focuses on fast and competitive fighting.", backgroundImage: "/seraph/images/thumbnails/streetfighter2.jpg", genre: "arcade" },
  { name: "Getawayshootout", url: "https://olivia-games.github.io/seraph/games/getawayshootout/", category: "action", description: "Getawayshootout delivers nonstop arcade-style action.", backgroundImage: "/seraph/images/thumbnails/getawayshootout.jpg", genre: "arcade" },
  { name: "Rabbitsamurai", url: "https://olivia-games.github.io/seraph/games/rabbitsamurai/", category: "action", description: "Fast-paced action challenge featuring Rabbitsamurai.", backgroundImage: "/seraph/images/thumbnails/rabbitsamurai.jpg", genre: "platformer" },
  { name: "Mariopartyds", url: "https://olivia-games.github.io/seraph/games/mariopartyds/", category: "platformer", description: "Mariopartyds challenges your timing and movement skills.", backgroundImage: "/seraph/images/thumbnails/mariopartyds.jpg", genre: "arcade" },
  { name: "Professorlayton", url: "https://olivia-games.github.io/seraph/games/professorlayton/", category: "action", description: "Professorlayton delivers nonstop arcade-style action.", backgroundImage: "/seraph/images/thumbnails/professorlayton.jpg", genre: "puzzle" },
  { name: "Scribblenauts", url: "https://olivia-games.github.io/seraph/games/scribblenauts/", category: "action", description: "Fast-paced action challenge featuring Scribblenauts.", backgroundImage: "/seraph/images/thumbnails/scribblenauts.jpg", genre: "arcade" },
  { name: "Advancewars2", url: "https://olivia-games.github.io/seraph/games/advancewars2/", category: "action", description: "React quickly and survive intense action in Advancewars2.", backgroundImage: "/seraph/images/thumbnails/advancewars2.jpg", genre: "adventure" },
  { name: "Harvestmoon", url: "https://olivia-games.github.io/seraph/games/harvestmoon/", category: "action", description: "Harvestmoon delivers nonstop arcade-style action.", backgroundImage: "/seraph/images/thumbnails/harvestmoon.jpg", genre: "simulation" },
  { name: "Mariotennis", url: "https://olivia-games.github.io/seraph/games/mariotennis/", category: "platformer", description: "Jump, run, and explore classic platforming in Mariotennis.", backgroundImage: "/seraph/images/thumbnails/mariotennis.jpg", genre: "arcade" },
  { name: "Megamanzero", url: "https://olivia-games.github.io/seraph/games/megamanzero/", category: "action", description: "React quickly and survive intense action in Megamanzero.", backgroundImage: "/seraph/images/thumbnails/megamanzero.jpg", genre: "platformer" },
  { name: "Pokemonmysterydungeon", url: "https://olivia-games.github.io/seraph/games/pokemonmysterydungeon/", category: "rpg", description: "An RPG adventure filled with depth: Pokemonmysterydungeon.", backgroundImage: "/seraph/images/thumbnails/pokemonmysterydungeon.jpg", genre: "adventure" },
  { name: "Pokemonunbound", url: "https://olivia-games.github.io/seraph/games/pokemonunbound/", category: "rpg", description: "Embark on an epic role-playing journey in Pokemonunbound.", backgroundImage: "/seraph/images/thumbnails/pokemonunbound.jpg", genre: "adventure" },
  { name: "Papascheeseria", url: "https://olivia-games.github.io/seraph/games/papascheeseria/", category: "restaurant", description: "Papascheeseria lets you run your own virtual restaurant.", backgroundImage: "/seraph/images/thumbnails/papascheeseria.jpg", genre: "simulation" },
  { name: "Papascupcakeria", url: "https://olivia-games.github.io/seraph/games/papascupcakeria/", category: "restaurant", description: "Prepare meals and satisfy customers in Papascupcakeria.", backgroundImage: "/seraph/images/thumbnails/papascupcakeria.jpg", genre: "simulation" },
  { name: "Papasbakeria", url: "https://olivia-games.github.io/seraph/games/papasbakeria/", category: "restaurant", description: "Cook, serve, and manage customers in Papasbakeria.", backgroundImage: "/seraph/images/thumbnails/papasbakeria.jpg", genre: "simulation" },
  { name: "Papaspastaria", url: "https://olivia-games.github.io/seraph/games/papaspastaria/", category: "restaurant", description: "Papaspastaria lets you run your own virtual restaurant.", backgroundImage: "/seraph/images/thumbnails/papaspastaria.jpg", genre: "simulation" },
  { name: "Gunmayhem2", url: "https://olivia-games.github.io/seraph/games/gunmayhem2/", category: "action", description: "Gunmayhem2 delivers nonstop arcade-style action.", backgroundImage: "/seraph/images/thumbnails/gunmayhem2.jpg", genre: "arcade" },
  { name: "Gunmayhemredux", url: "https://olivia-games.github.io/seraph/games/gunmayhemredux/", category: "action", description: "Fast-paced action challenge featuring Gunmayhemredux.", backgroundImage: "/seraph/images/thumbnails/gunmayhemredux.jpg", genre: "arcade" },
  { name: "Achievementunlocked2", url: "https://olivia-games.github.io/seraph/games/achievementunlocked2/", category: "action", description: "React quickly and survive intense action in Achievementunlocked2.", backgroundImage: "/seraph/images/thumbnails/achievementunlocked2.jpg", genre: "puzzle" },
  { name: "Achievementunlocked3", url: "https://olivia-games.github.io/seraph/games/achievementunlocked3/", category: "action", description: "Achievementunlocked3 delivers nonstop arcade-style action.", backgroundImage: "/seraph/images/thumbnails/achievementunlocked3.jpg", genre: "puzzle" },
  { name: "Factoryballs", url: "https://olivia-games.github.io/seraph/games/factoryballs/", category: "action", description: "Fast-paced action challenge featuring Factoryballs.", backgroundImage: "/seraph/images/thumbnails/factoryballs.jpg", genre: "arcade" },
  { name: "Skywire", url: "https://olivia-games.github.io/seraph/games/skywire/", category: "action", description: "React quickly and survive intense action in Skywire.", backgroundImage: "/seraph/images/thumbnails/skywire.jpg", genre: "arcade" },
  { name: "Supermarioflash", url: "https://olivia-games.github.io/seraph/games/supermarioflash/", category: "platformer", description: "A skill-based platforming adventure called Supermarioflash.", backgroundImage: "/seraph/images/thumbnails/supermarioflash.jpg", genre: "platformer" },
  { name: "Goldensun", url: "https://olivia-games.github.io/seraph/games/goldensun/", category: "action", description: "Fast-paced action challenge featuring Goldensun.", backgroundImage: "/seraph/images/thumbnails/goldensun.jpg", genre: "adventure" },
  { name: "Metroidfusion", url: "https://olivia-games.github.io/seraph/games/metroidfusion/", category: "platformer", description: "Metroidfusion challenges your timing and movement skills.", backgroundImage: "/seraph/images/thumbnails/metroidfusion.jpg", genre: "adventure" },
  { name: "Dbzsupersonicwarriors", url: "https://olivia-games.github.io/seraph/games/dbzsupersonicwarriors/", category: "platformer", description: "A skill-based platforming adventure called Dbzsupersonicwarriors.", backgroundImage: "/seraph/images/thumbnails/dbzsupersonicwarriors.jpg", genre: "arcade" },
  { name: "Warioland4", url: "https://olivia-games.github.io/seraph/games/warioland4/", category: "action", description: "Fast-paced action challenge featuring Warioland4.", backgroundImage: "/seraph/images/thumbnails/warioland4.jpg", genre: "platformer" },
  { name: "Ducklife5", url: "https://olivia-games.github.io/seraph/games/ducklife5/", category: "action", description: "React quickly and survive intense action in Ducklife5.", backgroundImage: "/seraph/images/thumbnails/ducklife5.jpg", genre: "simulation" },
  { name: "Learntofly3", url: "https://olivia-games.github.io/seraph/games/learntofly3/", category: "action", description: "Learntofly3 delivers nonstop arcade-style action.", backgroundImage: "/seraph/images/thumbnails/learntofly3.jpg", genre: "arcade" },
  { name: "Bloxors", url: "https://olivia-games.github.io/seraph/games/bloxors/", category: "action", description: "Fast-paced action challenge featuring Bloxors.", backgroundImage: "/seraph/images/thumbnails/bloxors.jpg", genre: "puzzle" },
  { name: "Electricman2", url: "https://olivia-games.github.io/seraph/games/electricman2/", category: "action", description: "React quickly and survive intense action in Electricman2.", backgroundImage: "/seraph/images/thumbnails/electricman2.jpg", genre: "arcade" },
  { name: "Portal", url: "https://olivia-games.github.io/seraph/games/portal/", category: "action", description: "Portal delivers nonstop arcade-style action.", backgroundImage: "/seraph/images/thumbnails/portal.jpg", genre: "puzzle" },
  { name: "Portal2", url: "https://olivia-games.github.io/seraph/games/portal2/", category: "action", description: "Fast-paced action challenge featuring Portal2.", backgroundImage: "/seraph/images/thumbnails/portal2.jpg", genre: "puzzle" },
  { name: "Skywire2", url: "https://olivia-games.github.io/seraph/games/skywire2/", category: "action", description: "React quickly and survive intense action in Skywire2.", backgroundImage: "/seraph/images/thumbnails/skywire2.jpg", genre: "arcade" },
  { name: "Ducklife6", url: "https://olivia-games.github.io/seraph/games/ducklife6/", category: "action", description: "Ducklife6 delivers nonstop arcade-style action.", backgroundImage: "/seraph/images/thumbnails/ducklife6.jpg", genre: "simulation" },
  { name: "Boxingrandom", url: "https://olivia-games.github.io/seraph/games/boxingrandom/", category: "fighting", description: "Battle opponents in skill-based combat in Boxingrandom.", backgroundImage: "/seraph/images/thumbnails/boxingrandom.jpg", genre: "arcade" },
  { name: "Cellmachine", url: "https://olivia-games.github.io/seraph/games/cellmachine/", category: "action", description: "React quickly and survive intense action in Cellmachine.", backgroundImage: "/seraph/images/thumbnails/cellmachine.jpg", genre: "puzzle" },
  { name: "Stickmanboost", url: "https://olivia-games.github.io/seraph/games/stickmanboost/", category: "action", description: "Stickmanboost delivers nonstop arcade-style action.", backgroundImage: "/seraph/images/thumbnails/stickmanboost.jpg", genre: "platformer" },
  { name: "Vex3", url: "https://olivia-games.github.io/seraph/games/vex3/", category: "action", description: "Fast-paced action challenge featuring Vex3.", backgroundImage: "/seraph/images/thumbnails/vex3.jpg", genre: "platformer" },
  { name: "Vex4", url: "https://olivia-games.github.io/seraph/games/vex4/", category: "action", description: "React quickly and survive intense action in Vex4.", backgroundImage: "/seraph/images/thumbnails/vex4.jpg", genre: "platformer" },
  { name: "Skibidi1v100", url: "https://olivia-games.github.io/seraph/games/skibidi1v100/", category: "action", description: "Skibidi1v100 delivers nonstop arcade-style action.", backgroundImage: "/seraph/images/thumbnails/skibiditoilet1v100.jpg", genre: "platformer" },
  { name: "Goldeneye007", url: "https://olivia-games.github.io/seraph/games/goldeneye007/", category: "action", description: "Fast-paced action challenge featuring Goldeneye007.", backgroundImage: "/seraph/images/thumbnails/goldeneye007.jpg", genre: "adventure" },
  { name: "Majorasmask", url: "https://olivia-games.github.io/seraph/games/majorasmask/", category: "action", description: "React quickly and survive intense action in Majorasmask.", backgroundImage: "/seraph/images/thumbnails/majorasmask.jpg", genre: "adventure" },
  { name: "Papermario", url: "https://olivia-games.github.io/seraph/games/papermario/", category: "platformer", description: "A skill-based platforming adventure called Papermario.", backgroundImage: "/seraph/images/thumbnails/papermario.jpg", genre: "adventure" },
  { name: "Mariogolf", url: "https://olivia-games.github.io/seraph/games/mariogolf/", category: "platformer", description: "Jump, run, and explore classic platforming in Mariogolf.", backgroundImage: "/seraph/images/thumbnails/mariogolf.jpg", genre: "arcade" },
  { name: "Pokemonstadium", url: "https://olivia-games.github.io/seraph/games/pokemonstadium/", category: "rpg", description: "Pokemonstadium features progression, exploration, and story.", backgroundImage: "/seraph/images/thumbnails/pokemonstadium.jpg", genre: "arcade" },
  { name: "Excitebike64", url: "https://olivia-games.github.io/seraph/games/excitebike64/", category: "action", description: "Excitebike64 delivers nonstop arcade-style action.", backgroundImage: "/seraph/images/thumbnails/excitebike64.jpg", genre: "arcade" },
  { name: "Pokemonsnap", url: "https://olivia-games.github.io/seraph/games/pokemonsnap/", category: "rpg", description: "Embark on an epic role-playing journey in Pokemonsnap.", backgroundImage: "/seraph/images/thumbnails/pokemonsnap.jpg", genre: "adventure" },
  { name: "Marioparty3", url: "https://olivia-games.github.io/seraph/games/marioparty3/", category: "platformer", description: "Marioparty3 challenges your timing and movement skills.", backgroundImage: "/seraph/images/thumbnails/marioparty3.jpg", genre: "arcade" },
  { name: "Sonicadvance2", url: "https://olivia-games.github.io/seraph/games/sonicadvance2/", category: "platformer", description: "A skill-based platforming adventure called Sonicadvance2.", backgroundImage: "/seraph/images/thumbnails/sonicadvance2.jpg", genre: "platformer" },
  { name: "Bowsersinsidestory", url: "https://olivia-games.github.io/seraph/games/bowsersinsidestory/", category: "action", description: "Fast-paced action challenge featuring Bowsersinsidestory.", backgroundImage: "/seraph/images/thumbnails/bowsersinsidestory.jpg", genre: "simulation" },
  { name: "Spirittracks", url: "https://olivia-games.github.io/seraph/games/spirittracks/", category: "action", description: "React quickly and survive intense action in Spirittracks.", backgroundImage: "/seraph/images/thumbnails/spirittracks.jpg", genre: "adventure" },
  { name: "Thesims2", url: "https://olivia-games.github.io/seraph/games/thesims2/", category: "action", description: "Thesims2 delivers nonstop arcade-style action.", backgroundImage: "/seraph/images/thumbnails/thesims2.jpg", genre: "simulation" },
  { name: "Tetrisds", url: "https://olivia-games.github.io/seraph/games/tetrisds/", category: "action", description: "Fast-paced action challenge featuring Tetrisds.", backgroundImage: "/seraph/images/thumbnails/tetrisds.jpg", genre: "arcade" },
  { name: "Sonicrush", url: "https://olivia-games.github.io/seraph/games/sonicrush/", category: "platformer", description: "Sonicrush challenges your timing and movement skills.", backgroundImage: "/seraph/images/thumbnails/sonicrush.jpg", genre: "platformer" },
  { name: "Thesims3", url: "https://olivia-games.github.io/seraph/games/thesims3/", category: "action", description: "Thesims3 delivers nonstop arcade-style action.", backgroundImage: "/seraph/images/thumbnails/thesims3.jpg", genre: "simulation" },
  { name: "Superprincesspeach", url: "https://olivia-games.github.io/seraph/games/superprincesspeach/", category: "action", description: "Fast-paced action challenge featuring Superprincesspeach.", backgroundImage: "/seraph/images/thumbnails/superprincesspeach.jpg", genre: "platformer" },
  { name: "Legobatman", url: "https://olivia-games.github.io/seraph/games/legobatman/", category: "action", description: "React quickly and survive intense action in Legobatman.", backgroundImage: "/seraph/images/thumbnails/legobatman.jpg", genre: "adventure" },
  { name: "Doom2", url: "https://olivia-games.github.io/seraph/games/doom2/", category: "action", description: "Doom2 delivers nonstop arcade-style action.", backgroundImage: "/seraph/images/thumbnails/doomii.jpg", genre: "adventure" },
  { name: "Dukenukemadvance", url: "https://olivia-games.github.io/seraph/games/dukenukemadvance/", category: "action", description: "Fast-paced action challenge featuring Dukenukemadvance.", backgroundImage: "/seraph/images/thumbnails/dukenukemadvance.jpg", genre: "arcade" },
  { name: "Mariopartyadvance", url: "https://olivia-games.github.io/seraph/games/mariopartyadvance/", category: "platformer", description: "Mariopartyadvance challenges your timing and movement skills.", backgroundImage: "/seraph/images/thumbnails/mariopartyadvance.jpg", genre: "arcade" },
  { name: "Mariopinballland", url: "https://olivia-games.github.io/seraph/games/mariopinballland/", category: "platformer", description: "A skill-based platforming adventure called Mariopinballland.", backgroundImage: "/seraph/images/thumbnails/mariopinballland.jpg", genre: "arcade" },
  { name: "Pacmanworld", url: "https://olivia-games.github.io/seraph/games/pacmanworld/", category: "action", description: "Fast-paced action challenge featuring Pacmanworld.", backgroundImage: "/seraph/images/thumbnails/pacmanworld.jpg", genre: "adventure" },
  { name: "Rayman3", url: "https://olivia-games.github.io/seraph/games/rayman3/", category: "action", description: "React quickly and survive intense action in Rayman3.", backgroundImage: "/seraph/images/thumbnails/rayman3.jpg", genre: "platformer" },
  { name: "Shrek2", url: "https://olivia-games.github.io/seraph/games/shrek2/", category: "action", description: "Shrek2 delivers nonstop arcade-style action.", backgroundImage: "/seraph/images/thumbnails/shrek2.jpg", genre: "adventure" },
  { name: "Simcity", url: "https://olivia-games.github.io/seraph/games/simcity/", category: "action", description: "Fast-paced action challenge featuring Simcity.", backgroundImage: "/seraph/images/thumbnails/simcity2000.jpg", genre: "simulation" },
  { name: "Simpsonsroadrage", url: "https://olivia-games.github.io/seraph/games/simpsonsroadrage/", category: "action", description: "React quickly and survive intense action in Simpsonsroadrage.", backgroundImage: "/seraph/images/thumbnails/simpsonsroadrage.jpg", genre: "arcade" },
  { name: "Diddykongracing", url: "https://olivia-games.github.io/seraph/games/diddykongracing/", category: "racing", description: "Fast and competitive racing action in Diddykongracing.", backgroundImage: "/seraph/images/thumbnails/diddykongracing.jpg", genre: "arcade" },
  { name: "Waverace64", url: "https://olivia-games.github.io/seraph/games/waverace64/", category: "action", description: "Fast-paced action challenge featuring Waverace64.", backgroundImage: "/seraph/images/thumbnails/waveracing.jpg", genre: "arcade" },
  { name: "Quest64", url: "https://olivia-games.github.io/seraph/games/quest64/", category: "action", description: "React quickly and survive intense action in Quest64.", backgroundImage: "/seraph/images/thumbnails/quest64.jpg", genre: "adventure" },
  { name: "Gex64", url: "https://olivia-games.github.io/seraph/games/gex64/", category: "action", description: "Gex64 delivers nonstop arcade-style action.", backgroundImage: "/seraph/images/thumbnails/gex64.jpg", genre: "platformer" },
  { name: "Dukenukem64", url: "https://olivia-games.github.io/seraph/games/dukenukem64/", category: "action", description: "Fast-paced action challenge featuring Dukenukem64.", backgroundImage: "/seraph/images/thumbnails/dukenukem64.jpg", genre: "arcade" },
  { name: "Mortalkombat4", url: "https://olivia-games.github.io/seraph/games/mortalkombat4/", category: "action", description: "React quickly and survive intense action in Mortalkombat4.", backgroundImage: "/seraph/images/thumbnails/mortalkombat4.jpg", genre: "arcade" },
  { name: "Badpiggies", url: "https://olivia-games.github.io/seraph/games/badpiggies/", category: "action", description: "Badpiggies delivers nonstop arcade-style action.", backgroundImage: "/seraph/images/thumbnails/badpiggies.jpg", genre: "arcade" },
  { name: "Supermarioflash2", url: "https://olivia-games.github.io/seraph/games/supermarioflash2/", category: "platformer", description: "Jump, run, and explore classic platforming in Supermarioflash2.", backgroundImage: "/seraph/images/thumbnails/supermarioflash2.jpg", genre: "platformer" },
  { name: "Swordsandsandals", url: "https://olivia-games.github.io/seraph/games/swordsandsandals/", category: "action", description: "React quickly and survive intense action in Swordsandsandals.", backgroundImage: "/seraph/images/thumbnails/swordsandsandals.jpg", genre: "arcade" },
  { name: "Swordsandsandals2", url: "https://olivia-games.github.io/seraph/games/swordsandsandals2/", category: "action", description: "Swordsandsandals2 delivers nonstop arcade-style action.", backgroundImage: "/seraph/images/thumbnails/swordsandsandals2.jpg", genre: "arcade" },
  { name: "Wordle", url: "https://olivia-games.github.io/seraph/games/wordle/", category: "puzzle", description: "Solve clever puzzles and brain teasers in Wordle.", backgroundImage: "/seraph/images/thumbnails/wordle.jpg", genre: "arcade" },
  { name: "Vex", url: "https://olivia-games.github.io/seraph/games/vex/", category: "action", description: "React quickly and survive intense action in Vex.", backgroundImage: "/seraph/images/thumbnails/vex.jpg", genre: "platformer" },
  { name: "Vex2", url: "https://olivia-games.github.io/seraph/games/vex2/", category: "action", description: "Vex2 delivers nonstop arcade-style action.", backgroundImage: "/seraph/images/thumbnails/vex2.jpg", genre: "platformer" },
  { name: "Vex5", url: "https://olivia-games.github.io/seraph/games/vex5/", category: "action", description: "Fast-paced action challenge featuring Vex5.", backgroundImage: "/seraph/images/thumbnails/vex5.jpg", genre: "platformer" },
  { name: "Vex7", url: "https://olivia-games.github.io/seraph/games/vex7/", category: "action", description: "React quickly and survive intense action in Vex7.", backgroundImage: "/seraph/images/thumbnails/vex7.jpg", genre: "platformer" },
  { name: "Stack", url: "https://olivia-games.github.io/seraph/games/stack/", category: "action", description: "Stack delivers nonstop arcade-style action.", backgroundImage: "/seraph/images/thumbnails/stack.jpg", genre: "arcade" },
  { name: "Skibiditoiletattack", url: "https://olivia-games.github.io/seraph/games/skibiditoiletattack/", category: "action", description: "Fast-paced action challenge featuring Skibiditoiletattack.", backgroundImage: "/seraph/images/thumbnails/skibiditoiletattack.jpg", genre: "arcade" },
  { name: "Motox3mpool", url: "https://olivia-games.github.io/seraph/games/motox3mpool/", category: "racing", description: "Motox3mpool puts your driving skills to the test.", backgroundImage: "/seraph/images/thumbnails/motox3mpool.jpg", genre: "platformer" },
  { name: "Offlineparadise", url: "https://olivia-games.github.io/seraph/games/offlineparadise/", category: "action", description: "Offlineparadise delivers nonstop arcade-style action.", backgroundImage: "/seraph/images/thumbnails/offlineparadise.jpg", genre: "platformer" },
  { name: "Linktothepast", url: "https://olivia-games.github.io/seraph/games/linktothepast/", category: "action", description: "Fast-paced action challenge featuring Linktothepast.", backgroundImage: "/seraph/images/thumbnails/linktothepast.jpg", genre: "adventure" },
  { name: "Donkeykongcountry", url: "https://olivia-games.github.io/seraph/games/donkeykongcountry/", category: "action", description: "React quickly and survive intense action in Donkeykongcountry.", backgroundImage: "/seraph/images/thumbnails/donkeykongcountry.jpg", genre: "platformer" },
  { name: "Donkeykongcountry2", url: "https://olivia-games.github.io/seraph/games/donkeykongcountry2/", category: "action", description: "Donkeykongcountry2 delivers nonstop arcade-style action.", backgroundImage: "/seraph/images/thumbnails/donkeykongcountry2.jpg", genre: "platformer" },
  { name: "Superbomberman", url: "https://olivia-games.github.io/seraph/games/superbomberman/", category: "action", description: "Fast-paced action challenge featuring Superbomberman.", backgroundImage: "/seraph/images/thumbnails/superbomberman.jpg", genre: "adventure" },
  { name: "Mariopaint", url: "https://olivia-games.github.io/seraph/games/mariopaint/", category: "platformer", description: "Mariopaint challenges your timing and movement skills.", backgroundImage: "/seraph/images/thumbnails/mariopaint.jpg", genre: "arcade" },
  { name: "Megamanx", url: "https://olivia-games.github.io/seraph/games/megamanx/", category: "action", description: "Megamanx delivers nonstop arcade-style action.", backgroundImage: "/seraph/images/thumbnails/megamanx.jpg", genre: "platformer" },
  { name: "Supermariorpg", url: "https://olivia-games.github.io/seraph/games/supermariorpg/", category: "platformer", description: "Jump, run, and explore classic platforming in Supermariorpg.", backgroundImage: "/seraph/images/thumbnails/supermariorpg.jpg", genre: "adventure" },
  { name: "Supertennis", url: "https://olivia-games.github.io/seraph/games/supertennis/", category: "action", description: "React quickly and survive intense action in Supertennis.", backgroundImage: "/seraph/images/thumbnails/supertennis.jpg", genre: "arcade" },
  { name: "Warioswoods", url: "https://olivia-games.github.io/seraph/games/warioswoods/", category: "action", description: "Warioswoods delivers nonstop arcade-style action.", backgroundImage: "/seraph/images/thumbnails/warioswoods.jpg", genre: "adventure" },
  { name: "Worldshardestgame2", url: "https://olivia-games.github.io/seraph/games/worldshardestgame2/", category: "action", description: "Fast-paced action challenge featuring Worldshardestgame2.", backgroundImage: "/seraph/images/thumbnails/worldshardestgame2.jpg", genre: "platformer" },
  { name: "Bubbletanks2", url: "https://olivia-games.github.io/seraph/games/bubbletanks2/", category: "action", description: "React quickly and survive intense action in Bubbletanks2.", backgroundImage: "/seraph/images/thumbnails/bubbletanks2.jpg", genre: "arcade" },
  { name: "Chooseyourweapon", url: "https://olivia-games.github.io/seraph/games/chooseyourweapon/", category: "action", description: "Chooseyourweapon delivers nonstop arcade-style action.", backgroundImage: "/seraph/images/thumbnails/chooseyourweapon.jpg", genre: "platformer" },
  { name: "Chooseyourweapon2", url: "https://olivia-games.github.io/seraph/games/chooseyourweapon2/", category: "action", description: "Fast-paced action challenge featuring Chooseyourweapon2.", backgroundImage: "/seraph/images/thumbnails/chooseyourweapon2.jpg", genre: "platformer" },
  { name: "Chooseyourweapon3", url: "https://olivia-games.github.io/seraph/games/chooseyourweapon3/", category: "action", description: "React quickly and survive intense action in Chooseyourweapon3.", backgroundImage: "/seraph/images/thumbnails/chooseyourweapon3.jpg", genre: "platformer" },
  { name: "Connect4", url: "https://olivia-games.github.io/seraph/games/connect4/", category: "action", description: "Connect4 delivers nonstop arcade-style action.", backgroundImage: "/seraph/images/thumbnails/connect4.jpg", genre: "arcade" },
  { name: "Electricbox", url: "https://olivia-games.github.io/seraph/games/electricbox/", category: "action", description: "Fast-paced action challenge featuring Electricbox.", backgroundImage: "/seraph/images/thumbnails/electricbox.jpg", genre: "puzzle" },
  { name: "Mctowerdefence2", url: "https://olivia-games.github.io/seraph/games/mctowerdefence2/", category: "action", description: "React quickly and survive intense action in Mctowerdefence2.", backgroundImage: "/seraph/images/thumbnails/mctowerdefence2.jpg", genre: "arcade" },
  { name: "Cars2", url: "https://olivia-games.github.io/seraph/games/cars2/", category: "action", description: "Cars2 delivers nonstop arcade-style action.", backgroundImage: "/seraph/images/thumbnails/cars2.jpg", genre: "adventure" },
  { name: "Cookingmama", url: "https://olivia-games.github.io/seraph/games/cookingmama/", category: "restaurant", description: "Cook, serve, and manage customers in Cookingmama.", backgroundImage: "/seraph/images/thumbnails/cookingmama.jpg", genre: "arcade" },
  { name: "Adventuretime", url: "https://olivia-games.github.io/seraph/games/adventuretime/", category: "action", description: "React quickly and survive intense action in Adventuretime.", backgroundImage: "/seraph/images/thumbnails/adventuretimeheyiceking.jpg", genre: "adventure" },
  { name: "Garfieldgetsreal", url: "https://olivia-games.github.io/seraph/games/garfieldgetsreal/", category: "action", description: "Garfieldgetsreal delivers nonstop arcade-style action.", backgroundImage: "/seraph/images/thumbnails/garfieldgetsreal.jpg", genre: "adventure" },
  { name: "Wariowaretouched", url: "https://olivia-games.github.io/seraph/games/wariowaretouched/", category: "action", description: "Fast-paced action challenge featuring Wariowaretouched.", backgroundImage: "/seraph/images/thumbnails/wariowaretouched.jpg", genre: "arcade" },
  { name: "Kirbypowerpaintbrush", url: "https://olivia-games.github.io/seraph/games/kirbypowerpaintbrush/", category: "platformer", description: "Kirbypowerpaintbrush challenges your timing and movement skills.", backgroundImage: "/seraph/images/thumbnails/kirbypowerpaintbrush.jpg", genre: "adventure" },
  { name: "Sonicandknuckles", url: "https://olivia-games.github.io/seraph/games/sonicandknuckles/", category: "platformer", description: "A skill-based platforming adventure called Sonicandknuckles.", backgroundImage: "/seraph/images/thumbnails/sonicandknuckles.jpg", genre: "adventure" },
  { name: "Alteredbeast", url: "https://olivia-games.github.io/seraph/games/alteredbeast/", category: "action", description: "Fast-paced action challenge featuring Alteredbeast.", backgroundImage: "/seraph/images/thumbnails/alteredbeast.jpg", genre: "platformer" },
  { name: "Sonicspinball", url: "https://olivia-games.github.io/seraph/games/sonicspinball/", category: "platformer", description: "Sonicspinball challenges your timing and movement skills.", backgroundImage: "/seraph/images/thumbnails/sonicspinball.jpg", genre: "arcade" },
  { name: "Sonicthehedgehog3", url: "https://olivia-games.github.io/seraph/games/sonicthehedgehog3/", category: "platformer", description: "A skill-based platforming adventure called Sonicthehedgehog3.", backgroundImage: "/seraph/images/thumbnails/sonicthehedgehog3.jpg", genre: "platformer" },
  { name: "Streetsofrage", url: "https://olivia-games.github.io/seraph/games/streetsofrage/", category: "action", description: "Fast-paced action challenge featuring Streetsofrage.", backgroundImage: "/seraph/images/thumbnails/streetsofrage.jpg", genre: "arcade" },
  { name: "Goldenaxe", url: "https://olivia-games.github.io/seraph/games/goldenaxe/", category: "action", description: "React quickly and survive intense action in Goldenaxe.", backgroundImage: "/seraph/images/thumbnails/goldenaxe.jpg", genre: "adventure" },
  { name: "Kirbyamazingmirror", url: "https://olivia-games.github.io/seraph/games/kirbyamazingmirror/", category: "platformer", description: "A skill-based platforming adventure called Kirbyamazingmirror.", backgroundImage: "/seraph/images/thumbnails/kirbyamazingmirror.jpg", genre: "platformer" },
  { name: "Championisland", url: "https://olivia-games.github.io/seraph/games/championisland/", category: "action", description: "Fast-paced action challenge featuring Championisland.", backgroundImage: "/seraph/images/thumbnails/championisland.jpg", genre: "adventure" },
  { name: "Supermarioconstruct", url: "https://olivia-games.github.io/seraph/games/supermarioconstruct/", category: "platformer", description: "Supermarioconstruct challenges your timing and movement skills.", backgroundImage: "/seraph/images/thumbnails/supermarioconstruct.jpg", genre: "arcade" },
  { name: "Clickerheroes", url: "https://olivia-games.github.io/seraph/games/clickerheroes/", category: "strategy", description: "A strategic gameplay experience built around Clickerheroes.", backgroundImage: "/seraph/images/thumbnails/clickerheroes.jpg", genre: "arcade" },
  { name: "Stairrace3d", url: "https://olivia-games.github.io/seraph/games/stairrace3d/", category: "action", description: "Fast-paced action challenge featuring Stairrace3d.", backgroundImage: "/seraph/images/thumbnails/stairrace3d.jpg", genre: "arcade" },
  { name: "Slope2", url: "https://olivia-games.github.io/seraph/games/slope2/", category: "action", description: "React quickly and survive intense action in Slope2.", backgroundImage: "/seraph/images/thumbnails/slope2.jpg", genre: "arcade" },
  { name: "Paperio3d", url: "https://olivia-games.github.io/seraph/games/paperio3d/", category: "action", description: "Paperio3d delivers nonstop arcade-style action.", backgroundImage: "/seraph/images/thumbnails/paperio3d.jpg", genre: "arcade" },
  { name: "Motox3mspooky", url: "https://olivia-games.github.io/seraph/games/motox3mspooky/", category: "racing", description: "Race at high speed and master the tracks in Motox3mspooky.", backgroundImage: "/seraph/images/thumbnails/motox3mspooky.jpg", genre: "platformer" },
  { name: "Motox3mwinter", url: "https://olivia-games.github.io/seraph/games/motox3mwinter/", category: "racing", description: "Motox3mwinter puts your driving skills to the test.", backgroundImage: "/seraph/images/thumbnails/motox3mwinter.jpg", genre: "platformer" },
  { name: "Snake", url: "https://olivia-games.github.io/seraph/games/snake/", category: "action", description: "Snake delivers nonstop arcade-style action.", backgroundImage: "/seraph/images/thumbnails/snake.jpg", genre: "arcade" },
  { name: "Papastacomia", url: "https://olivia-games.github.io/seraph/games/papastacomia/", category: "restaurant", description: "Cook, serve, and manage customers in Papastacomia.", backgroundImage: "/seraph/images/thumbnails/papastacomia.jpg", genre: "simulation" },
  { name: "Ovo", url: "https://olivia-games.github.io/seraph/games/ovo/", category: "action", description: "React quickly and survive intense action in Ovo.", backgroundImage: "/seraph/images/thumbnails/ovo.jpg", genre: "platformer" },
  { name: "Knifehit", url: "https://olivia-games.github.io/seraph/games/knifehit/", category: "action", description: "Knifehit delivers nonstop arcade-style action.", backgroundImage: "/seraph/images/thumbnails/knifehit.jpg", genre: "arcade" },
  { name: "Cubefield", url: "https://olivia-games.github.io/seraph/games/cubefield/", category: "action", description: "Fast-paced action challenge featuring Cubefield.", backgroundImage: "/seraph/images/thumbnails/cubefield.jpg", genre: "arcade" },
  { name: "Burgerandfrights", url: "https://olivia-games.github.io/seraph/games/burgerandfrights/", category: "action", description: "React quickly and survive intense action in Burgerandfrights.", backgroundImage: "/seraph/images/thumbnails/burgerandfrights.jpg", genre: "adventure" },
  { name: "Chess", url: "https://olivia-games.github.io/seraph/games/chess/", category: "puzzle", description: "A thoughtful puzzle experience named Chess.", backgroundImage: "/seraph/images/thumbnails/chess.jpg", genre: "arcade" },
  { name: "Fnfmidfight", url: "https://olivia-games.github.io/seraph/games/fnfmidfight/", category: "music", description: "Follow the rhythm and hit the beats in Fnfmidfight.", backgroundImage: "/seraph/images/thumbnails/midfightmasses.jpg", genre: "arcade" },
  { name: "Thumbfighter", url: "https://olivia-games.github.io/seraph/games/thumbfighter/", category: "fighting", description: "Thumbfighter focuses on fast and competitive fighting.", backgroundImage: "/seraph/images/thumbnails/thumbfighter.jpg", genre: "arcade" },
  { name: "Snowbattleio", url: "https://olivia-games.github.io/seraph/games/snowbattleio/", category: "action", description: "Snowbattleio delivers nonstop arcade-style action.", backgroundImage: "/seraph/images/thumbnails/snowbattleio.jpg", genre: "arcade" },
  { name: "Lazyjump3d", url: "https://olivia-games.github.io/seraph/games/lazyjump3d/", category: "action", description: "Fast-paced action challenge featuring Lazyjump3d.", backgroundImage: "/seraph/images/thumbnails/lazyjump3d.jpg", genre: "arcade" },
  { name: "Goball", url: "https://olivia-games.github.io/seraph/games/goball/", category: "action", description: "React quickly and survive intense action in Goball.", backgroundImage: "/seraph/images/thumbnails/goball.jpg", genre: "arcade" },
  { name: "Flippyfish", url: "https://olivia-games.github.io/seraph/games/flippyfish/", category: "action", description: "Flippyfish delivers nonstop arcade-style action.", backgroundImage: "/seraph/images/thumbnails/flippyfish.jpg", genre: "arcade" },
  { name: "Shopempire", url: "https://olivia-games.github.io/seraph/games/shopempire/", category: "action", description: "Fast-paced action challenge featuring Shopempire.", backgroundImage: "/seraph/images/thumbnails/shopempire.jpg", genre: "simulation" },
  { name: "Monsterbrawl", url: "https://olivia-games.github.io/seraph/games/monsterbrawl/", category: "action", description: "React quickly and survive intense action in Monsterbrawl.", backgroundImage: "/seraph/images/thumbnails/monsterbrawl.jpg", genre: "arcade" },
  { name: "Multitask", url: "https://olivia-games.github.io/seraph/games/multitask/", category: "action", description: "Multitask delivers nonstop arcade-style action.", backgroundImage: "/seraph/images/thumbnails/multitask.jpg", genre: "arcade" },
  { name: "Shift", url: "https://olivia-games.github.io/seraph/games/shift/", category: "action", description: "Fast-paced action challenge featuring Shift.", backgroundImage: "/seraph/images/thumbnails/shift.jpg", genre: "platformer" },
  { name: "Shift2", url: "https://olivia-games.github.io/seraph/games/shift2/", category: "action", description: "React quickly and survive intense action in Shift2.", backgroundImage: "/seraph/images/thumbnails/shift2.jpg", genre: "platformer" },
  { name: "Shift3", url: "https://olivia-games.github.io/seraph/games/shift3/", category: "action", description: "Shift3 delivers nonstop arcade-style action.", backgroundImage: "/seraph/images/thumbnails/shift3.jpg", genre: "platformer" },
  { name: "Shift4", url: "https://olivia-games.github.io/seraph/games/shift4/", category: "action", description: "Fast-paced action challenge featuring Shift4.", backgroundImage: "/seraph/images/thumbnails/shift4.jpg", genre: "platformer" },
  { name: "Monopoly", url: "https://olivia-games.github.io/seraph/games/monopoly/", category: "action", description: "React quickly and survive intense action in Monopoly.", backgroundImage: "/seraph/images/thumbnails/monopoly.jpg", genre: "arcade" },
  { name: "Picrossds", url: "https://olivia-games.github.io/seraph/games/picrossds/", category: "action", description: "Picrossds delivers nonstop arcade-style action.", backgroundImage: "/seraph/images/thumbnails/picrossds.jpg", genre: "puzzle" },
  { name: "Wariowarediy", url: "https://olivia-games.github.io/seraph/games/wariowarediy/", category: "action", description: "Fast-paced action challenge featuring Wariowarediy.", backgroundImage: "/seraph/images/thumbnails/wariowarediy.jpg", genre: "arcade" },
  { name: "Pizzatower", url: "https://olivia-games.github.io/seraph/games/pizzatower/", category: "action", description: "React quickly and survive intense action in Pizzatower.", backgroundImage: "/seraph/images/thumbnails/pizzatower.jpg", genre: "platformer" },
  { name: "Territorialio", url: "https://olivia-games.github.io/seraph/games/territorialio/", category: "action", description: "Territorialio delivers nonstop arcade-style action.", backgroundImage: "/seraph/images/thumbnails/territorialio.jpg", genre: "arcade" },
  { name: "1v1lol", url: "https://olivia-games.github.io/seraph/games/1v1lol/", category: "action", description: "Fast-paced action challenge featuring 1v1lol.", backgroundImage: "/seraph/images/thumbnails/1v1lol.jpg", genre: "arcade" },
  { name: "Ballisticchickens", url: "https://olivia-games.github.io/seraph/games/ballisticchickens/", category: "action", description: "React quickly and survive intense action in Ballisticchickens.", backgroundImage: "/seraph/images/thumbnails/ballisticchickens.jpg", genre: "arcade" },
  { name: "Basketbrosio", url: "https://olivia-games.github.io/seraph/games/basketbrosio/", category: "action", description: "Basketbrosio delivers nonstop arcade-style action.", backgroundImage: "/seraph/images/thumbnails/basketbrosio.jpg", genre: "mobile" },
  { name: "Mcclassic", url: "https://olivia-games.github.io/seraph/games/mcclassic/", category: "action", description: "Fast-paced action challenge featuring Mcclassic.", backgroundImage: "/seraph/images/thumbnails/mcclassic.jpg", genre: "adventure" },
  { name: "Deathrun3d", url: "https://olivia-games.github.io/seraph/games/deathrun3d/", category: "action", description: "React quickly and survive intense action in Deathrun3d.", backgroundImage: "/seraph/images/thumbnails/deathrun3d.jpg", genre: "arcade" },
  { name: "Soccerrandom", url: "https://olivia-games.github.io/seraph/games/soccerrandom/", category: "action", description: "Soccerrandom delivers nonstop arcade-style action.", backgroundImage: "/seraph/images/thumbnails/soccerrandom.jpg", genre: "arcade" },
  { name: "Sprinter", url: "https://olivia-games.github.io/seraph/games/sprinter/", category: "action", description: "Fast-paced action challenge featuring Sprinter.", backgroundImage: "/seraph/images/thumbnails/sprinter.jpg", genre: "arcade" },
  { name: "Tron", url: "https://olivia-games.github.io/seraph/games/tron/", category: "action", description: "React quickly and survive intense action in Tron.", backgroundImage: "/seraph/images/thumbnails/tron.jpg", genre: "arcade" },
  { name: "1on1soccer", url: "https://olivia-games.github.io/seraph/games/1on1soccer/", category: "action", description: "1on1soccer delivers nonstop arcade-style action.", backgroundImage: "/seraph/images/thumbnails/1on1soccer.jpg", genre: "arcade" },
  { name: "Badtimesimulator", url: "https://olivia-games.github.io/seraph/games/badtimesimulator/", category: "action", description: "Fast-paced action challenge featuring Badtimesimulator.", backgroundImage: "/seraph/images/thumbnails/badtimesimulator.jpg", genre: "simulation" },
  { name: "Amazingropepolice", url: "https://olivia-games.github.io/seraph/games/amazingropepolice/", category: "action", description: "React quickly and survive intense action in Amazingropepolice.", backgroundImage: "/seraph/images/thumbnails/amazingropepolice.jpg", genre: "adventure" },
  { name: "Celeste", url: "https://olivia-games.github.io/seraph/games/celeste/", category: "action", description: "Celeste delivers nonstop arcade-style action.", backgroundImage: "/seraph/images/thumbnails/celeste.jpg", genre: "platformer" },
  { name: "Justfalllol", url: "https://olivia-games.github.io/seraph/games/justfalllol/", category: "action", description: "Fast-paced action challenge featuring Justfalllol.", backgroundImage: "/seraph/images/thumbnails/justfalllol.jpg", genre: "arcade" },
  { name: "Ngon", url: "https://olivia-games.github.io/seraph/games/ngon/", category: "action", description: "React quickly and survive intense action in Ngon.", backgroundImage: "/seraph/images/thumbnails/ngon.jpg", genre: "arcade" },
  { name: "Rocketsoccer", url: "https://olivia-games.github.io/seraph/games/rocketsoccer/", category: "action", description: "Rocketsoccer delivers nonstop arcade-style action.", backgroundImage: "/seraph/images/thumbnails/rocketsoccer.jpg", genre: "arcade" },
  { name: "Stickmanclimb", url: "https://olivia-games.github.io/seraph/games/stickmanclimb/", category: "action", description: "Fast-paced action challenge featuring Stickmanclimb.", backgroundImage: "/seraph/images/thumbnails/stickmanclimb.jpg", genre: "arcade" },
  { name: "Osumania", url: "https://olivia-games.github.io/seraph/games/osumania/", category: "action", description: "React quickly and survive intense action in Osumania.", backgroundImage: "/seraph/images/thumbnails/osumania.jpg", genre: "arcade" },
  { name: "Helixjump", url: "https://olivia-games.github.io/seraph/games/helixjump/", category: "action", description: "Helixjump delivers nonstop arcade-style action.", backgroundImage: "/seraph/images/thumbnails/helixjump.jpg", genre: "mobile" },
  { name: "Dadish", url: "https://olivia-games.github.io/seraph/games/dadish/", category: "action", description: "Fast-paced action challenge featuring Dadish.", backgroundImage: "/seraph/images/thumbnails/dadish.jpg", genre: "platformer" },
  { name: "Dadish2", url: "https://olivia-games.github.io/seraph/games/dadish2/", category: "action", description: "React quickly and survive intense action in Dadish2.", backgroundImage: "/seraph/images/thumbnails/dadish2.jpg", genre: "platformer" },
  { name: "Dadish3", url: "https://olivia-games.github.io/seraph/games/dadish3/", category: "action", description: "Dadish3 delivers nonstop arcade-style action.", backgroundImage: "/seraph/images/thumbnails/dadish3.jpg", genre: "platformer" },
  { name: "Snowrider3d", url: "https://olivia-games.github.io/seraph/games/snowrider3d/", category: "action", description: "Fast-paced action challenge featuring Snowrider3d.", backgroundImage: "/seraph/images/thumbnails/snowrider3d.jpg", genre: "arcade" },
  { name: "Tubejumpers", url: "https://olivia-games.github.io/seraph/games/tubejumpers/", category: "action", description: "React quickly and survive intense action in Tubejumpers.", backgroundImage: "/seraph/images/thumbnails/tubejumpers.jpg", genre: "arcade" },
  { name: "Yohoho", url: "https://olivia-games.github.io/seraph/games/yohoho/", category: "action", description: "Yohoho delivers nonstop arcade-style action.", backgroundImage: "/seraph/images/thumbnails/yohoho.jpg", genre: "mobile" },
  { name: "10minutestilldawn", url: "https://olivia-games.github.io/seraph/games/10minutestilldawn/", category: "action", description: "Fast-paced action challenge featuring 10minutestilldawn.", backgroundImage: "/seraph/images/thumbnails/10minutestilldawn.jpg", genre: "arcade" },
  { name: "Volleyrandom", url: "https://olivia-games.github.io/seraph/games/volleyrandom/", category: "action", description: "React quickly and survive intense action in Volleyrandom.", backgroundImage: "/seraph/images/thumbnails/volleyrandom.jpg", genre: "arcade" },
  { name: "Waterworks", url: "https://olivia-games.github.io/seraph/games/waterworks/", category: "action", description: "Waterworks delivers nonstop arcade-style action.", backgroundImage: "/seraph/images/thumbnails/waterworks.jpg", genre: "simulation" },
  { name: "Geometryrash", url: "https://olivia-games.github.io/seraph/games/geometryrash/", category: "action", description: "Fast-paced action challenge featuring Geometryrash.", backgroundImage: "/seraph/images/thumbnails/geometryrash.jpg", genre: "platformer" },
  { name: "Holeio", url: "https://olivia-games.github.io/seraph/games/holeio/", category: "action", description: "React quickly and survive intense action in Holeio.", backgroundImage: "/seraph/images/thumbnails/holeio.jpg", genre: "arcade" },
  { name: "Sandtrix", url: "https://olivia-games.github.io/seraph/games/sandtrix/", category: "action", description: "Sandtrix delivers nonstop arcade-style action.", backgroundImage: "/seraph/images/thumbnails/sandtrix.jpg", genre: "arcade" },
  { name: "Shapeshipper", url: "https://olivia-games.github.io/seraph/games/shapeshipper/", category: "action", description: "Fast-paced action challenge featuring Shapeshipper.", backgroundImage: "/seraph/images/thumbnails/shapeshipper.jpg", genre: "arcade" },
  { name: "Slopeball", url: "https://olivia-games.github.io/seraph/games/slopeball/", category: "action", description: "React quickly and survive intense action in Slopeball.", backgroundImage: "/seraph/images/thumbnails/slopeball.jpg", genre: "arcade" },
  { name: "Stickmangolf", url: "https://olivia-games.github.io/seraph/games/stickmangolf/", category: "action", description: "Stickmangolf delivers nonstop arcade-style action.", backgroundImage: "/seraph/images/thumbnails/stickmangolf.jpg", genre: "arcade" },
  { name: "Tabs", url: "https://olivia-games.github.io/seraph/games/tabs/", category: "action", description: "Fast-paced action challenge featuring Tabs.", backgroundImage: "/seraph/images/thumbnails/totallyaccuratebattlesim.jpg", genre: "simulation" },
  { name: "Watermelongame", url: "https://olivia-games.github.io/seraph/games/watermelongame/", category: "action", description: "React quickly and survive intense action in Watermelongame.", backgroundImage: "/seraph/images/thumbnails/watermelongame.jpg", genre: "arcade" },
  { name: "Wallsmash", url: "https://olivia-games.github.io/seraph/games/wallsmash/", category: "fighting", description: "Test your reflexes and combos in Wallsmash.", backgroundImage: "/seraph/images/thumbnails/wallsmash.jpg", genre: "arcade" },
  { name: "Crimsonfantasia", url: "https://olivia-games.github.io/seraph/games/crimsonfantasia/", category: "action", description: "Fast-paced action challenge featuring Crimsonfantasia.", backgroundImage: "/seraph/images/thumbnails/crimsonfantasia.jpg", genre: "arcade" },
  { name: "Cuttherope", url: "https://olivia-games.github.io/seraph/games/cuttherope/", category: "action", description: "React quickly and survive intense action in Cuttherope.", backgroundImage: "/seraph/images/thumbnails/cuttherope.jpg", genre: "mobile" },
  { name: "Funnymadracing", url: "https://olivia-games.github.io/seraph/games/funnymadracing/", category: "racing", description: "Fast and competitive racing action in Funnymadracing.", backgroundImage: "/seraph/images/thumbnails/funnymadracing.jpg", genre: "arcade" },
  { name: "Gdlite", url: "https://olivia-games.github.io/seraph/games/gdlite/", category: "action", description: "Fast-paced action challenge featuring Gdlite.", backgroundImage: "/seraph/images/thumbnails/geometrydashlite.jpg", genre: "platformer" },
  { name: "Grandtheftgrotto", url: "https://olivia-games.github.io/seraph/games/grandtheftgrotto/", category: "action", description: "React quickly and survive intense action in Grandtheftgrotto.", backgroundImage: "/seraph/images/thumbnails/grandtheftgrotto.jpg", genre: "arcade" },
  { name: "Driftmania", url: "https://olivia-games.github.io/seraph/games/driftmania/", category: "racing", description: "Fast and competitive racing action in Driftmania.", backgroundImage: "/seraph/images/thumbnails/driftmania.jpg", genre: "arcade" },
  { name: "Risehigher", url: "https://olivia-games.github.io/seraph/games/risehigher/", category: "action", description: "Fast-paced action challenge featuring Risehigher.", backgroundImage: "/seraph/images/thumbnails/risehigher.jpg", genre: "arcade" },
  { name: "Burritobison", url: "https://olivia-games.github.io/seraph/games/burritobison/", category: "action", description: "React quickly and survive intense action in Burritobison.", backgroundImage: "/seraph/images/thumbnails/burritobison.jpg", genre: "arcade" },
  { name: "Pool", url: "https://olivia-games.github.io/seraph/games/pool/", category: "action", description: "Pool delivers nonstop arcade-style action.", backgroundImage: "/seraph/images/thumbnails/pool.jpg", genre: "arcade" },
  { name: "Redball1", url: "https://olivia-games.github.io/seraph/games/redball1/", category: "action", description: "Fast-paced action challenge featuring Redball1.", backgroundImage: "/seraph/images/thumbnails/redball.jpg", genre: "platformer" },
  { name: "Redball3", url: "https://olivia-games.github.io/seraph/games/redball3/", category: "action", description: "React quickly and survive intense action in Redball3.", backgroundImage: "/seraph/images/thumbnails/redball3.jpg", genre: "platformer" },
  { name: "Redball4", url: "https://olivia-games.github.io/seraph/games/redball4/", category: "action", description: "Redball4 delivers nonstop arcade-style action.", backgroundImage: "/seraph/images/thumbnails/redball4.jpg", genre: "platformer" },
  { name: "Redballv2", url: "https://olivia-games.github.io/seraph/games/redballv2/", category: "action", description: "Fast-paced action challenge featuring Redballv2.", backgroundImage: "/seraph/images/thumbnails/redball4vol2.jpg", genre: "platformer" },
  { name: "Redballv3", url: "https://olivia-games.github.io/seraph/games/redballv3/", category: "action", description: "React quickly and survive intense action in Redballv3.", backgroundImage: "/seraph/images/thumbnails/redball4vol3.jpg", genre: "platformer" },
  { name: "Roughdino", url: "https://olivia-games.github.io/seraph/games/roughdino/", category: "action", description: "Roughdino delivers nonstop arcade-style action.", backgroundImage: "/seraph/images/thumbnails/roughdino.jpg", genre: "arcade" },
  { name: "Timeshooter1", url: "https://olivia-games.github.io/seraph/games/timeshooter1/", category: "action", description: "Fast-paced action challenge featuring Timeshooter1.", backgroundImage: "/seraph/images/thumbnails/timeshooter.jpg", genre: "arcade" },
  { name: "Timeshooter2", url: "https://olivia-games.github.io/seraph/games/timeshooter2/", category: "action", description: "React quickly and survive intense action in Timeshooter2.", backgroundImage: "/seraph/images/thumbnails/timeshooter2.jpg", genre: "arcade" },
  { name: "Timeshooter3", url: "https://olivia-games.github.io/seraph/games/timeshooter3/", category: "action", description: "Timeshooter3 delivers nonstop arcade-style action.", backgroundImage: "/seraph/images/thumbnails/timeshooter3.jpg", genre: "arcade" },
  { name: "Battletoads", url: "https://olivia-games.github.io/seraph/games/battletoads/", category: "action", description: "Fast-paced action challenge featuring Battletoads.", backgroundImage: "/seraph/images/thumbnails/battletoads.jpg", genre: "adventure" },
  { name: "Castlevaniaiii", url: "https://olivia-games.github.io/seraph/games/castlevaniaiii/", category: "action", description: "React quickly and survive intense action in Castlevaniaiii.", backgroundImage: "/seraph/images/thumbnails/castlevania.jpg", genre: "adventure" },
  { name: "Contra", url: "https://olivia-games.github.io/seraph/games/contra/", category: "action", description: "Contra delivers nonstop arcade-style action.", backgroundImage: "/seraph/images/thumbnails/contra.jpg", genre: "adventure" },
  { name: "Ducktales", url: "https://olivia-games.github.io/seraph/games/ducktales/", category: "action", description: "Fast-paced action challenge featuring Ducktales.", backgroundImage: "/seraph/images/thumbnails/ducktales.jpg", genre: "adventure" },
  { name: "Kidicarus", url: "https://olivia-games.github.io/seraph/games/kidicarus/", category: "action", description: "React quickly and survive intense action in Kidicarus.", backgroundImage: "/seraph/images/thumbnails/kidicarus.jpg", genre: "arcade" },
  { name: "Megaman2", url: "https://olivia-games.github.io/seraph/games/megaman2/", category: "action", description: "Megaman2 delivers nonstop arcade-style action.", backgroundImage: "/seraph/images/thumbnails/megaman2.jpg", genre: "platformer" },
  { name: "Ninjagaiden", url: "https://olivia-games.github.io/seraph/games/ninjagaiden/", category: "action", description: "Fast-paced action challenge featuring Ninjagaiden.", backgroundImage: "/seraph/images/thumbnails/ninjagaiden.jpg", genre: "adventure" },
  { name: "Punchout", url: "https://olivia-games.github.io/seraph/games/punchout/", category: "action", description: "React quickly and survive intense action in Punchout.", backgroundImage: "/seraph/images/thumbnails/mikestysonspunchout.jpg", genre: "arcade" },
  { name: "Chronotrigger", url: "https://olivia-games.github.io/seraph/games/chronotrigger/", category: "action", description: "Chronotrigger delivers nonstop arcade-style action.", backgroundImage: "/seraph/images/thumbnails/chronotrigger.jpg", genre: "adventure" },
  { name: "Contraiii", url: "https://olivia-games.github.io/seraph/games/contraiii/", category: "action", description: "Fast-paced action challenge featuring Contraiii.", backgroundImage: "/seraph/images/thumbnails/contraiii.jpg", genre: "adventure" },
  { name: "Donkeykongcountry3", url: "https://olivia-games.github.io/seraph/games/donkeykongcountry3/", category: "action", description: "React quickly and survive intense action in Donkeykongcountry3.", backgroundImage: "/seraph/images/thumbnails/donkeykongcountry3.jpg", genre: "adventure" },
  { name: "Earthbound", url: "https://olivia-games.github.io/seraph/games/earthbound/", category: "rpg", description: "An RPG adventure filled with depth: Earthbound.", backgroundImage: "/seraph/images/thumbnails/earthbound.jpg", genre: "adventure" },
  { name: "Finalfantasyvi", url: "https://olivia-games.github.io/seraph/games/finalfantasyvi/", category: "rpg", description: "Embark on an epic role-playing journey in Finalfantasyvi.", backgroundImage: "/seraph/images/thumbnails/finalfantasyiv.jpg", genre: "adventure" },
  { name: "Fzero", url: "https://olivia-games.github.io/seraph/games/fzero/", category: "action", description: "React quickly and survive intense action in Fzero.", backgroundImage: "/seraph/images/thumbnails/fzero.jpg", genre: "arcade" },
  { name: "Supermetroid", url: "https://olivia-games.github.io/seraph/games/supermetroid/", category: "platformer", description: "A skill-based platforming adventure called Supermetroid.", backgroundImage: "/seraph/images/thumbnails/supermetroid.jpg", genre: "platformer" },
  { name: "Banjotooie", url: "https://olivia-games.github.io/seraph/games/banjotooie/", category: "action", description: "Fast-paced action challenge featuring Banjotooie.", backgroundImage: "/seraph/images/thumbnails/banjotooie.jpg", genre: "platformer" },
  { name: "Harvestmoon64", url: "https://olivia-games.github.io/seraph/games/harvestmoon64/", category: "action", description: "React quickly and survive intense action in Harvestmoon64.", backgroundImage: "/seraph/images/thumbnails/harvestmoon64.jpg", genre: "simulation" },
  { name: "Jetforcegemini", url: "https://olivia-games.github.io/seraph/games/jetforcegemini/", category: "action", description: "Jetforcegemini delivers nonstop arcade-style action.", backgroundImage: "/seraph/images/thumbnails/jetforcegemini.jpg", genre: "arcade" },
  { name: "Mysticalninja", url: "https://olivia-games.github.io/seraph/games/mysticalninja/", category: "action", description: "Fast-paced action challenge featuring Mysticalninja.", backgroundImage: "/seraph/images/thumbnails/mysticalninja.jpg", genre: "adventure" },
  { name: "Turokdinosaurhunter", url: "https://olivia-games.github.io/seraph/games/turokdinosaurhunter/", category: "action", description: "React quickly and survive intense action in Turokdinosaurhunter.", backgroundImage: "/seraph/images/thumbnails/turokdinosaurhunter.jpg", genre: "arcade" },
  { name: "Yoshisstory", url: "https://olivia-games.github.io/seraph/games/yoshisstory/", category: "action", description: "Yoshisstory delivers nonstop arcade-style action.", backgroundImage: "/seraph/images/thumbnails/yoshisstory.jpg", genre: "adventure" },
  { name: "Kirbysdreamland2", url: "https://olivia-games.github.io/seraph/games/kirbysdreamland2/", category: "platformer", description: "Jump, run, and explore classic platforming in Kirbysdreamland2.", backgroundImage: "/seraph/images/thumbnails/kirbysdreamland2.jpg", genre: "platformer" },
  { name: "Linksawakeningdx", url: "https://olivia-games.github.io/seraph/games/linksawakeningdx/", category: "action", description: "React quickly and survive intense action in Linksawakeningdx.", backgroundImage: "/seraph/images/thumbnails/linksawakeningdx.jpg", genre: "adventure" },
  { name: "Metroidii", url: "https://olivia-games.github.io/seraph/games/metroidii/", category: "platformer", description: "A skill-based platforming adventure called Metroidii.", backgroundImage: "/seraph/images/thumbnails/metroidii.jpg", genre: "platformer" },
  { name: "Supermarioland2", url: "https://olivia-games.github.io/seraph/games/supermarioland2/", category: "platformer", description: "Jump, run, and explore classic platforming in Supermarioland2.", backgroundImage: "/seraph/images/thumbnails/supermarioland2.jpg", genre: "adventure" },
  { name: "Wariolandii", url: "https://olivia-games.github.io/seraph/games/wariolandii/", category: "action", description: "React quickly and survive intense action in Wariolandii.", backgroundImage: "/seraph/images/thumbnails/wariolandii.jpg", genre: "arcade" },
  { name: "Castlevaniaariaofsorrow", url: "https://olivia-games.github.io/seraph/games/castlevaniaariaofsorrow/", category: "action", description: "Castlevaniaariaofsorrow delivers nonstop arcade-style action.", backgroundImage: "/seraph/images/thumbnails/castlevaniaariaofsorrow.jpg", genre: "arcade" },
  { name: "Finalfantasytacticsadvance", url: "https://olivia-games.github.io/seraph/games/finalfantasytacticsadvance/", category: "rpg", description: "Embark on an epic role-playing journey in Finalfantasytacticsadvance.", backgroundImage: "/seraph/images/thumbnails/finalfantasytacticsadventure.jpg", genre: "arcade" },
  { name: "Drilldozer", url: "https://olivia-games.github.io/seraph/games/drilldozer/", category: "action", description: "React quickly and survive intense action in Drilldozer.", backgroundImage: "/seraph/images/thumbnails/drilldozer.jpg", genre: "arcade" },
  { name: "Advancewarsdayofruin", url: "https://olivia-games.github.io/seraph/games/advancewarsdayofruin/", category: "action", description: "Advancewarsdayofruin delivers nonstop arcade-style action.", backgroundImage: "/seraph/images/thumbnails/advancewarsdaysofruin.jpg", genre: "adventure" },
  { name: "Castlevaniadawnofsorrow", url: "https://olivia-games.github.io/seraph/games/castlevaniadawnofsorrow/", category: "action", description: "Fast-paced action challenge featuring Castlevaniadawnofsorrow.", backgroundImage: "/seraph/images/thumbnails/castlevaniadawnofsorrow.jpg", genre: "adventure" },
  { name: "Castlevaniaorderofecclesia", url: "https://olivia-games.github.io/seraph/games/castlevaniaorderofecclesia/", category: "action", description: "React quickly and survive intense action in Castlevaniaorderofecclesia.", backgroundImage: "/seraph/images/thumbnails/castlevaniaorderofecclesia.jpg", genre: "adventure" },
  { name: "Marioandluigipartnersintime", url: "https://olivia-games.github.io/seraph/games/marioandluigipartnersintime/", category: "platformer", description: "A skill-based platforming adventure called Marioandluigipartnersintime.", backgroundImage: "/seraph/images/thumbnails/marioandluigipartnersintime.jpg", genre: "platformer" },
  { name: "Comixzone", url: "https://olivia-games.github.io/seraph/games/comixzone/", category: "action", description: "Fast-paced action challenge featuring Comixzone.", backgroundImage: "/seraph/images/thumbnails/comixzone.jpg", genre: "arcade" },
  { name: "Eccothedolphin", url: "https://olivia-games.github.io/seraph/games/eccothedolphin/", category: "action", description: "React quickly and survive intense action in Eccothedolphin.", backgroundImage: "/seraph/images/thumbnails/eccothedolphin.jpg", genre: "adventure" },
  { name: "Gunstarheroes", url: "https://olivia-games.github.io/seraph/games/gunstarheroes/", category: "action", description: "Gunstarheroes delivers nonstop arcade-style action.", backgroundImage: "/seraph/images/thumbnails/gunstarheroes.jpg", genre: "arcade" },
  { name: "Phantasystariv", url: "https://olivia-games.github.io/seraph/games/phantasystariv/", category: "action", description: "Fast-paced action challenge featuring Phantasystariv.", backgroundImage: "/seraph/images/thumbnails/phantasystariv.jpg", genre: "arcade" },
  { name: "Rangerx", url: "https://olivia-games.github.io/seraph/games/rangerx/", category: "action", description: "React quickly and survive intense action in Rangerx.", backgroundImage: "/seraph/images/thumbnails/rangerx.jpg", genre: "arcade" },
  { name: "Ristar", url: "https://olivia-games.github.io/seraph/games/ristar/", category: "action", description: "Ristar delivers nonstop arcade-style action.", backgroundImage: "/seraph/images/thumbnails/ristar.jpg", genre: "adventure" },
  { name: "Shiningforce", url: "https://olivia-games.github.io/seraph/games/shiningforce/", category: "action", description: "Fast-paced action challenge featuring Shiningforce.", backgroundImage: "/seraph/images/thumbnails/shiningforce.jpg", genre: "arcade" },
  { name: "Shinobiiii", url: "https://olivia-games.github.io/seraph/games/shinobiiii/", category: "action", description: "React quickly and survive intense action in Shinobiiii.", backgroundImage: "/seraph/images/thumbnails/shinobiiii.jpg", genre: "arcade" },
  { name: "Sonicthehedgehog", url: "https://olivia-games.github.io/seraph/games/sonicthehedgehog/", category: "platformer", description: "A skill-based platforming adventure called Sonicthehedgehog.", backgroundImage: "/seraph/images/thumbnails/sonicthehedgehog.jpg", genre: "platformer" },
  { name: "Sonicthehedgehog2", url: "https://olivia-games.github.io/seraph/games/sonicthehedgehog2/", category: "platformer", description: "Jump, run, and explore classic platforming in Sonicthehedgehog2.", backgroundImage: "/seraph/images/thumbnails/sonicthehedgehog2.jpg", genre: "platformer" },
  { name: "Streetsofrage2", url: "https://olivia-games.github.io/seraph/games/streetsofrage2/", category: "action", description: "React quickly and survive intense action in Streetsofrage2.", backgroundImage: "/seraph/images/thumbnails/streetsofrage2.jpg", genre: "arcade" },
  { name: "Vectorman", url: "https://olivia-games.github.io/seraph/games/vectorman/", category: "action", description: "Vectorman delivers nonstop arcade-style action.", backgroundImage: "/seraph/images/thumbnails/vectorman.jpg", genre: "arcade" },
  { name: "Vectorman2", url: "https://olivia-games.github.io/seraph/games/vectorman2/", category: "action", description: "Fast-paced action challenge featuring Vectorman2.", backgroundImage: "/seraph/images/thumbnails/vectorman2.jpg", genre: "arcade" },
  { name: "Illusionofgaia", url: "https://olivia-games.github.io/seraph/games/illusionofgaia/", category: "action", description: "React quickly and survive intense action in Illusionofgaia.", backgroundImage: "/seraph/images/thumbnails/illusionofgaia.jpg", genre: "simulation" },
  { name: "Pokemonyellow", url: "https://olivia-games.github.io/seraph/games/pokemonyellow/", category: "rpg", description: "An RPG adventure filled with depth: Pokemonyellow.", backgroundImage: "/seraph/images/thumbnails/pokemonyellow.jpg", genre: "adventure" },
  { name: "Abudathealien", url: "https://olivia-games.github.io/seraph/games/abudathealien/", category: "action", description: "Fast-paced action challenge featuring Abudathealien.", backgroundImage: "/seraph/images/thumbnails/abudathealien.jpg", genre: "adventure" },
  { name: "Battlebeavers", url: "https://olivia-games.github.io/seraph/games/battlebeavers/", category: "action", description: "React quickly and survive intense action in Battlebeavers.", backgroundImage: "/seraph/images/thumbnails/battlebeavers.jpg", genre: "arcade" },
  { name: "Controlcraft2", url: "https://olivia-games.github.io/seraph/games/controlcraft2/", category: "action", description: "Controlcraft2 delivers nonstop arcade-style action.", backgroundImage: "/seraph/images/thumbnails/controlcraft2.jpg", genre: "puzzle" },
  { name: "Ageofwar", url: "https://olivia-games.github.io/seraph/games/ageofwar/", category: "action", description: "Fast-paced action challenge featuring Ageofwar.", backgroundImage: "/seraph/images/thumbnails/ageofwar.jpg", genre: "arcade" },
  { name: "Ageofwar2", url: "https://olivia-games.github.io/seraph/games/ageofwar2/", category: "action", description: "React quickly and survive intense action in Ageofwar2.", backgroundImage: "/seraph/images/thumbnails/ageofwar2.jpg", genre: "arcade" },
  { name: "Amorphous", url: "https://olivia-games.github.io/seraph/games/amorphous/", category: "action", description: "Amorphous delivers nonstop arcade-style action.", backgroundImage: "/seraph/images/thumbnails/amorphous.jpg", genre: "amorphous" },
  { name: "Bubblespinner", url: "https://olivia-games.github.io/seraph/games/bubblespinner/", category: "action", description: "Fast-paced action challenge featuring Bubblespinner.", backgroundImage: "/seraph/images/thumbnails/bubblespinner.jpg", genre: "arcade" },
  { name: "Crushthecastle", url: "https://olivia-games.github.io/seraph/games/crushthecastle/", category: "action", description: "React quickly and survive intense action in Crushthecastle.", backgroundImage: "/seraph/images/thumbnails/crushthecastle.jpg", genre: "puzzle" },
  { name: "Crushthecastle2", url: "https://olivia-games.github.io/seraph/games/crushthecastle2/", category: "action", description: "Crushthecastle2 delivers nonstop arcade-style action.", backgroundImage: "/seraph/images/thumbnails/crushthecastle2.jpg", genre: "puzzle" },
  { name: "Epicbattlefantasy", url: "https://olivia-games.github.io/seraph/games/epicbattlefantasy/", category: "action", description: "Fast-paced action challenge featuring Epicbattlefantasy.", backgroundImage: "/seraph/images/thumbnails/epicbattlefantasy.jpg", genre: "adventure" },
  { name: "Epicbattlefantasy2", url: "https://olivia-games.github.io/seraph/games/epicbattlefantasy2/", category: "action", description: "React quickly and survive intense action in Epicbattlefantasy2.", backgroundImage: "/seraph/images/thumbnails/epicbattlefantasy2.jpg", genre: "adventure" },
  { name: "Epicbattlefantasy3", url: "https://olivia-games.github.io/seraph/games/epicbattlefantasy3/", category: "action", description: "Epicbattlefantasy3 delivers nonstop arcade-style action.", backgroundImage: "/seraph/images/thumbnails/epicbattlefantasy3.jpg", genre: "adventure" },
  { name: "Fancypantsadventure3", url: "https://olivia-games.github.io/seraph/games/fancypantsadventure3/", category: "action", description: "Fast-paced action challenge featuring Fancypantsadventure3.", backgroundImage: "/seraph/images/thumbnails/fancypantsadventure3.jpg", genre: "platformer" },
  { name: "Floodrunner2", url: "https://olivia-games.github.io/seraph/games/floodrunner2/", category: "action", description: "React quickly and survive intense action in Floodrunner2.", backgroundImage: "/seraph/images/thumbnails/floodrunner2.jpg", genre: "platformer" },
  { name: "Floodrunner3", url: "https://olivia-games.github.io/seraph/games/floodrunner3/", category: "action", description: "Floodrunner3 delivers nonstop arcade-style action.", backgroundImage: "/seraph/images/thumbnails/floodrunner3.jpg", genre: "platformer" },
  { name: "Dragonboy2", url: "https://olivia-games.github.io/seraph/games/dragonboy2/", category: "action", description: "Fast-paced action challenge featuring Dragonboy2.", backgroundImage: "/seraph/images/thumbnails/dragonboy2.jpg", genre: "adventure" },
  { name: "Neonrider", url: "https://olivia-games.github.io/seraph/games/neonrider/", category: "action", description: "React quickly and survive intense action in Neonrider.", backgroundImage: "/seraph/images/thumbnails/neonrider.jpg", genre: "arcade" },
  { name: "Pandemic2", url: "https://olivia-games.github.io/seraph/games/pandemic2/", category: "action", description: "Pandemic2 delivers nonstop arcade-style action.", backgroundImage: "/seraph/images/thumbnails/pandemic2.jpg", genre: "simulation" },
  { name: "Stickwar", url: "https://olivia-games.github.io/seraph/games/stickwar/", category: "action", description: "Fast-paced action challenge featuring Stickwar.", backgroundImage: "/seraph/images/thumbnails/stickwar.jpg", genre: "arcade" },
  { name: "Stickwar2", url: "https://olivia-games.github.io/seraph/games/stickwar2/", category: "action", description: "React quickly and survive intense action in Stickwar2.", backgroundImage: "/seraph/images/thumbnails/stickwar2.jpg", genre: "arcade" },
  { name: "Ultimateflashsonic", url: "https://olivia-games.github.io/seraph/games/ultimateflashsonic/", category: "platformer", description: "A skill-based platforming adventure called Ultimateflashsonic.", backgroundImage: "/seraph/images/thumbnails/ultimateflashsonic.jpg", genre: "platformer" },
  { name: "Zombocalypse", url: "https://olivia-games.github.io/seraph/games/zombocalypse/", category: "action", description: "Fast-paced action challenge featuring Zombocalypse.", backgroundImage: "/seraph/images/thumbnails/zombocalpyse.jpg", genre: "arcade" },
  { name: "Zombotron", url: "https://olivia-games.github.io/seraph/games/zombotron/", category: "action", description: "React quickly and survive intense action in Zombotron.", backgroundImage: "/seraph/images/thumbnails/zombotron.jpg", genre: "adventure" },
  { name: "Zombotron2", url: "https://olivia-games.github.io/seraph/games/zombotron2/", category: "action", description: "Zombotron2 delivers nonstop arcade-style action.", backgroundImage: "/seraph/images/thumbnails/zombotron2.jpg", genre: "adventure" },
  { name: "Backrooms2d", url: "https://olivia-games.github.io/seraph/games/backrooms2d/", category: "horror", description: "A tense and scary experience awaits in Backrooms2d.", backgroundImage: "/seraph/images/thumbnails/backrooms2d.jpg", genre: "adventure" },
  { name: "Basketrandom", url: "https://olivia-games.github.io/seraph/games/basketrandom/", category: "action", description: "React quickly and survive intense action in Basketrandom.", backgroundImage: "/seraph/images/thumbnails/basketrandom.jpg", genre: "arcade" },
  { name: "Csgoclicker", url: "https://olivia-games.github.io/seraph/games/csgoclicker/", category: "strategy", description: "A strategic gameplay experience built around Csgoclicker.", backgroundImage: "/seraph/images/thumbnails/csgoclicker.jpg", genre: "arcade" },
  { name: "Doom", url: "https://olivia-games.github.io/seraph/games/doom/", category: "action", description: "Fast-paced action challenge featuring Doom.", backgroundImage: "/seraph/images/thumbnails/doom.jpg", genre: "arcade" },
  { name: "Funnyshooter2", url: "https://olivia-games.github.io/seraph/games/funnyshooter2/", category: "action", description: "React quickly and survive intense action in Funnyshooter2.", backgroundImage: "/seraph/images/thumbnails/funnyshooter2.jpg", genre: "arcade" },
  { name: "Gunfest", url: "https://olivia-games.github.io/seraph/games/gunfest/", category: "action", description: "Gunfest delivers nonstop arcade-style action.", backgroundImage: "/seraph/images/thumbnails/gunfest.jpg", genre: "puzzle" },
  { name: "Infinitecraft", url: "https://olivia-games.github.io/seraph/games/infinitecraft/", category: "action", description: "Fast-paced action challenge featuring Infinitecraft.", backgroundImage: "/seraph/images/thumbnails/infinitecraft.jpg", genre: "simulation" },
  { name: "Lowsadventures2", url: "https://olivia-games.github.io/seraph/games/lowsadventures2/", category: "action", description: "React quickly and survive intense action in Lowsadventures2.", backgroundImage: "/seraph/images/thumbnails/lowsadventures2.jpg", genre: "adventure" },
  { name: "Pakohighway", url: "https://olivia-games.github.io/seraph/games/pakohighway/", category: "action", description: "Pakohighway delivers nonstop arcade-style action.", backgroundImage: "/seraph/images/thumbnails/pakohighway.jpg", genre: "arcade" },
  { name: "Recoil", url: "https://olivia-games.github.io/seraph/games/recoil/", category: "action", description: "Fast-paced action challenge featuring Recoil.", backgroundImage: "/seraph/images/thumbnails/recoil.jpg", genre: "puzzle" },
  { name: "Run3plus", url: "https://olivia-games.github.io/seraph/games/run3plus/", category: "action", description: "React quickly and survive intense action in Run3plus.", backgroundImage: "/seraph/images/thumbnails/run3plus.jpg", genre: "arcade" },
  { name: "Slopecity", url: "https://olivia-games.github.io/seraph/games/slopecity/", category: "action", description: "Slopecity delivers nonstop arcade-style action.", backgroundImage: "/seraph/images/thumbnails/slopecity.jpg", genre: "arcade" },
  { name: "Stateio", url: "https://olivia-games.github.io/seraph/games/stateio/", category: "action", description: "Fast-paced action challenge featuring Stateio.", backgroundImage: "/seraph/images/thumbnails/stateio.jpg", genre: "simulation" },
  { name: "Sudoku", url: "https://olivia-games.github.io/seraph/games/sudoku/", category: "puzzle", description: "Sudoku challenges logic and problem-solving skills.", backgroundImage: "/seraph/images/thumbnails/sudoku.jpg", genre: "puzzle" },
  { name: "Superherodrop", url: "https://olivia-games.github.io/seraph/games/superherodrop/", category: "action", description: "Superherodrop delivers nonstop arcade-style action.", backgroundImage: "/seraph/images/thumbnails/superherodrop.jpg", genre: "puzzle" },
  { name: "Balloonrun", url: "https://olivia-games.github.io/seraph/games/balloonrun/", category: "action", description: "Fast-paced action challenge featuring Balloonrun.", backgroundImage: "/seraph/images/thumbnails/balloonrun.jpg", genre: "arcade" },
  { name: "Crazytunnel3d", url: "https://olivia-games.github.io/seraph/games/crazytunnel3d/", category: "action", description: "React quickly and survive intense action in Crazytunnel3d.", backgroundImage: "/seraph/images/thumbnails/crazytunnel3d.jpg", genre: "arcade" },
  { name: "Eagler1.8", url: "https://olivia-games.github.io/seraph/games/eagler1.8/", category: "action", description: "Eagler1.8 delivers nonstop arcade-style action.", backgroundImage: "/seraph/images/thumbnails/mc1.8.jpg", genre: "minecraft" },
  { name: "Geometrydashsky", url: "https://olivia-games.github.io/seraph/games/geometrydashsky/", category: "action", description: "Fast-paced action challenge featuring Geometrydashsky.", backgroundImage: "/seraph/images/thumbnails/geometrydashsky.jpg", genre: "platformer" },
  { name: "Wubzzysamazingadventure", url: "https://olivia-games.github.io/seraph/games/wubzzysamazingadventure/", category: "action", description: "React quickly and survive intense action in Wubzzysamazingadventure.", backgroundImage: "/seraph/images/thumbnails/wubzzysamazingadventure.jpg", genre: "platformer" },
  { name: "Golddiggerfrvr", url: "https://olivia-games.github.io/seraph/games/golddiggerfrvr/", category: "action", description: "Golddiggerfrvr delivers nonstop arcade-style action.", backgroundImage: "/seraph/images/thumbnails/golddiggerfrvr.jpg", genre: "simulation" },
  { name: "Hexgl", url: "https://olivia-games.github.io/seraph/games/hexgl/", category: "action", description: "Fast-paced action challenge featuring Hexgl.", backgroundImage: "/seraph/images/thumbnails/hexgl.jpg", genre: "arcade" },
  { name: "Houseofhazards", url: "https://olivia-games.github.io/seraph/games/houseofhazards/", category: "action", description: "React quickly and survive intense action in Houseofhazards.", backgroundImage: "/seraph/images/thumbnails/houseofhazards.jpg", genre: "platformer" },
  { name: "Pickcrafter", url: "https://olivia-games.github.io/seraph/games/pickcrafter/", category: "action", description: "Pickcrafter delivers nonstop arcade-style action.", backgroundImage: "/seraph/images/thumbnails/pickcrafter.jpg", genre: "arcade" },
  { name: "Precisionclient", url: "https://olivia-games.github.io/seraph/games/precisionclient/", category: "action", description: "Fast-paced action challenge featuring Precisionclient.", backgroundImage: "/seraph/images/thumbnails/precisionclient.jpg", genre: "minecraft" },
  { name: "Subwayrunner", url: "https://olivia-games.github.io/seraph/games/subwayrunner/", category: "action", description: "React quickly and survive intense action in Subwayrunner.", backgroundImage: "/seraph/images/thumbnails/subwayrunner.jpg", genre: "arcade" },
  { name: "Xx142 B2.Exe", url: "https://olivia-games.github.io/seraph/games/xx142-b2.exe/", category: "action", description: "Xx142 B2.Exe delivers nonstop arcade-style action.", backgroundImage: "/seraph/images/thumbnails/xx142b2.exe.jpg", genre: "arcade" },
  { name: "Canopy", url: "https://olivia-games.github.io/seraph/games/canopy/", category: "action", description: "Fast-paced action challenge featuring Canopy.", backgroundImage: "/seraph/images/thumbnails/canopy.jpg", genre: "platformer" },
  { name: "Cavechaos", url: "https://olivia-games.github.io/seraph/games/cavechaos/", category: "action", description: "React quickly and survive intense action in Cavechaos.", backgroundImage: "/seraph/images/thumbnails/cavechaos.jpg", genre: "platformer" },
  { name: "Changetype", url: "https://olivia-games.github.io/seraph/games/changetype/", category: "action", description: "Changetype delivers nonstop arcade-style action.", backgroundImage: "/seraph/images/thumbnails/changetype.jpg", genre: "platformer" },
  { name: "Cheesedreams", url: "https://olivia-games.github.io/seraph/games/cheesedreams/", category: "action", description: "Fast-paced action challenge featuring Cheesedreams.", backgroundImage: "/seraph/images/thumbnails/cheesedreams.jpg", genre: "platformer" },
  { name: "Chisel", url: "https://olivia-games.github.io/seraph/games/chisel/", category: "action", description: "React quickly and survive intense action in Chisel.", backgroundImage: "/seraph/images/thumbnails/chisel.jpg", genre: "puzzle" },
  { name: "Chisel2", url: "https://olivia-games.github.io/seraph/games/chisel2/", category: "action", description: "Chisel2 delivers nonstop arcade-style action.", backgroundImage: "/seraph/images/thumbnails/chisel2.jpg", genre: "puzzle" },
  { name: "Ditto", url: "https://olivia-games.github.io/seraph/games/ditto/", category: "action", description: "Fast-paced action challenge featuring Ditto.", backgroundImage: "/seraph/images/thumbnails/ditto.jpg", genre: "platformer" },
  { name: "Feedme", url: "https://olivia-games.github.io/seraph/games/feedme/", category: "action", description: "React quickly and survive intense action in Feedme.", backgroundImage: "/seraph/images/thumbnails/feedme.jpg", genre: "platformer" },
  { name: "Finalninja", url: "https://olivia-games.github.io/seraph/games/finalninja/", category: "action", description: "Finalninja delivers nonstop arcade-style action.", backgroundImage: "/seraph/images/thumbnails/finalninja.jpg", genre: "platformer" },
  { name: "Frostbite", url: "https://olivia-games.github.io/seraph/games/frostbite/", category: "action", description: "Fast-paced action challenge featuring Frostbite.", backgroundImage: "/seraph/images/thumbnails/frostbite.jpg", genre: "platformer" },
  { name: "Frostbite2", url: "https://olivia-games.github.io/seraph/games/frostbite2/", category: "action", description: "React quickly and survive intense action in Frostbite2.", backgroundImage: "/seraph/images/thumbnails/frostbite2.jpg", genre: "platformer" },
  { name: "Icebreaker", url: "https://olivia-games.github.io/seraph/games/icebreaker/", category: "action", description: "Icebreaker delivers nonstop arcade-style action.", backgroundImage: "/seraph/images/thumbnails/icebreaker.jpg", genre: "puzzle" },
  { name: "Mutiny", url: "https://olivia-games.github.io/seraph/games/mutiny/", category: "action", description: "Fast-paced action challenge featuring Mutiny.", backgroundImage: "/seraph/images/thumbnails/mutiny.jpg", genre: "platformer" },
  { name: "Nitromemustdie", url: "https://olivia-games.github.io/seraph/games/nitromemustdie/", category: "action", description: "React quickly and survive intense action in Nitromemustdie.", backgroundImage: "/seraph/images/thumbnails/nitromemustdie.jpg", genre: "arcade" },
  { name: "Oodlegobs", url: "https://olivia-games.github.io/seraph/games/oodlegobs/", category: "action", description: "Oodlegobs delivers nonstop arcade-style action.", backgroundImage: "/seraph/images/thumbnails/oodlegobs.jpg", genre: "platformer" },
  { name: "Supertreadmill", url: "https://olivia-games.github.io/seraph/games/supertreadmill/", category: "action", description: "Fast-paced action challenge featuring Supertreadmill.", backgroundImage: "/seraph/images/thumbnails/supertreadmill.jpg", genre: "arcade" },
  { name: "Swindler", url: "https://olivia-games.github.io/seraph/games/swindler/", category: "action", description: "React quickly and survive intense action in Swindler.", backgroundImage: "/seraph/images/thumbnails/swindler.jpg", genre: "platformer" },
  { name: "Testsubjectarena", url: "https://olivia-games.github.io/seraph/games/testsubjectarena/", category: "action", description: "Testsubjectarena delivers nonstop arcade-style action.", backgroundImage: "/seraph/images/thumbnails/testsubjectarena.jpg", genre: "platformer" },
  { name: "Testsubjectcomplete", url: "https://olivia-games.github.io/seraph/games/testsubjectcomplete/", category: "action", description: "Fast-paced action challenge featuring Testsubjectcomplete.", backgroundImage: "/seraph/images/thumbnails/testsubjectcomplete.jpg", genre: "platformer" },
  { name: "Twinshot", url: "https://olivia-games.github.io/seraph/games/twinshot/", category: "action", description: "React quickly and survive intense action in Twinshot.", backgroundImage: "/seraph/images/thumbnails/twinshot.jpg", genre: "adventure" },
  { name: "Twinshot2", url: "https://olivia-games.github.io/seraph/games/twinshot2/", category: "action", description: "Twinshot2 delivers nonstop arcade-style action.", backgroundImage: "/seraph/images/thumbnails/twinshot2.jpg", genre: "adventure" },
  { name: "3line", url: "https://olivia-games.github.io/seraph/games/3line/", category: "action", description: "Fast-paced action challenge featuring 3line.", backgroundImage: "/seraph/images/thumbnails/threeline.jpg", genre: "puzzle" },
  { name: "Bikechamp", url: "https://olivia-games.github.io/seraph/games/bikechamp/", category: "action", description: "React quickly and survive intense action in Bikechamp.", backgroundImage: "/seraph/images/thumbnails/bikechamp.jpg", genre: "arcade" },
  { name: "Bikechamp2", url: "https://olivia-games.github.io/seraph/games/bikechamp2/", category: "action", description: "Bikechamp2 delivers nonstop arcade-style action.", backgroundImage: "/seraph/images/thumbnails/bikechamp2.jpg", genre: "arcade" },
  { name: "Corporationinc", url: "https://olivia-games.github.io/seraph/games/corporationinc/", category: "action", description: "Fast-paced action challenge featuring Corporationinc.", backgroundImage: "/seraph/images/thumbnails/corporationinc.jpg", genre: "arcade" },
  { name: "Shopempirefable", url: "https://olivia-games.github.io/seraph/games/shopempirefable/", category: "action", description: "React quickly and survive intense action in Shopempirefable.", backgroundImage: "/seraph/images/thumbnails/shopempirefable.jpg", genre: "simulation" },
  { name: "Cactusmccoy", url: "https://olivia-games.github.io/seraph/games/cactusmccoy/", category: "action", description: "Cactusmccoy delivers nonstop arcade-style action.", backgroundImage: "/seraph/images/thumbnails/cactusmccoy.jpg", genre: "platformer" },
  { name: "Cactusmccoy2", url: "https://olivia-games.github.io/seraph/games/cactusmccoy2/", category: "action", description: "Fast-paced action challenge featuring Cactusmccoy2.", backgroundImage: "/seraph/images/thumbnails/cactusmccoy2.jpg", genre: "platformer" },
  { name: "Papalouie", url: "https://olivia-games.github.io/seraph/games/papalouie/", category: "restaurant", description: "Papalouie lets you run your own virtual restaurant.", backgroundImage: "/seraph/images/thumbnails/papalouie.jpg", genre: "platformer" },
  { name: "Papalouie2", url: "https://olivia-games.github.io/seraph/games/papalouie2/", category: "restaurant", description: "Prepare meals and satisfy customers in Papalouie2.", backgroundImage: "/seraph/images/thumbnails/papalouie2.jpg", genre: "platformer" },
  { name: "Papalouie3", url: "https://olivia-games.github.io/seraph/games/papalouie3/", category: "restaurant", description: "Cook, serve, and manage customers in Papalouie3.", backgroundImage: "/seraph/images/thumbnails/papalouie3.jpg", genre: "platformer" },
  { name: "Steakandjake", url: "https://olivia-games.github.io/seraph/games/steakandjake/", category: "action", description: "React quickly and survive intense action in Steakandjake.", backgroundImage: "/seraph/images/thumbnails/steakandjake.jpg", genre: "platformer" },
  { name: "Steakandjakemidnightmarch", url: "https://olivia-games.github.io/seraph/games/steakandjakemidnightmarch/", category: "action", description: "Steakandjakemidnightmarch delivers nonstop arcade-style action.", backgroundImage: "/seraph/images/thumbnails/steakandjakemidnightmarch.jpg", genre: "platformer" },
];

// 
// Olivia Games - app logic (v3.0)
// 

//  Safe storage 
// localStorage can throw (private mode, blocked cookies, corrupt JSON). Every
// read/write goes through here so the site never crashes because of it.
const store = {
    getJSON(key, fallback) {
        try {
            const raw = localStorage.getItem(key);
            return raw === null ? fallback : JSON.parse(raw);
        } catch { return fallback; }
    },
    setJSON(key, value) {
        try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* ignore */ }
    },
    getRaw(key, fallback) {
        try { const v = localStorage.getItem(key); return v === null ? fallback : v; } catch { return fallback; }
    },
    setRaw(key, value) {
        try { localStorage.setItem(key, value); } catch { /* ignore */ }
    }
};

const $ = (id) => document.getElementById(id);
const esc = (s) => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const compact = (s) => String(s).toLowerCase().replace(/[^a-z0-9]/g, '');
const rand = (n) => Math.floor(Math.random() * n);
const hashStr = (s) => { let h = 0; for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0; return h; };

//  Categories --
// `category` in the scraped data is only meaningful some of the time: ~76% of
// the catalog was left on the generic "action" catch-all. `genre` is far more
// descriptive, so for games stuck on "action" it's promoted to
// `effectiveCategory`. A few typos / bad scrapes are normalized here, and a
// small override table fixes games that are clearly in the wrong bucket
// (Mario Kart is not a platformer, Mario Tennis is not a platformer, ...).
const GENRE_ALIASES = { aracde: 'arcade', simulator: 'simulation', tetris: 'puzzle' };
function normalizeGenre(genre, name) {
    if (!genre) return null;
    const cleaned = genre.trim().toLowerCase();
    if (!cleaned || cleaned === name.trim().toLowerCase()) return null; // bad scrape
    return GENRE_ALIASES[cleaned] || cleaned;
}

const CATEGORY_OVERRIDES = {
    supermariokart: 'racing', mariokartsupercircuit: 'racing', mariokartds: 'racing', mariokart64: 'racing',
    waverace64: 'racing', excitebike64: 'racing', fzero: 'racing', fzerox: 'racing', simpsonsroadrage: 'racing',
    cars2: 'racing', hexgl: 'racing', bikechamp: 'racing', bikechamp2: 'racing',
    marioparty: 'arcade', marioparty2: 'arcade', marioparty3: 'arcade', mariopartyds: 'arcade',
    mariopartyadvance: 'arcade', mariopaint: 'arcade', mariopinballland: 'arcade',
    mariotennis: 'sports', mariogolf: 'sports', supertennis: 'sports', retrobowl: 'sports', stickmangolf: 'sports',
    basketbrosio: 'sports', basketrandom: 'sports', soccerrandom: 'sports', volleyrandom: 'sports',
    '1on1soccer': 'sports', rocketsoccer: 'sports', pool: 'sports',
    punchout: 'fighting',
    wordle: 'words',
    chess: 'strategy', monopoly: 'strategy', connect4: 'strategy', battleships: 'strategy', advancewars: 'strategy',
    advancewars2: 'strategy', advancewarsdayofruin: 'strategy', fireemblem: 'strategy'
};

// Display order for the filter chips. Anything not listed is appended A-Z.
const CATEGORY_META = {
    new:        { label: 'New',           icon: '🆕' },
    arcade:     { label: 'Arcade',        icon: '🕹️' },
    platformer: { label: 'Platformer',    icon: '🏃' },
    adventure:  { label: 'Adventure',     icon: '🗺️' },
    puzzle:     { label: 'Puzzle',        icon: '🧩' },
    words:      { label: 'Word & Trivia', icon: '🔤' },
    simulation: { label: 'Simulation',    icon: '🏗️' },
    restaurant: { label: 'Restaurant',    icon: '🍔' },
    racing:     { label: 'Racing',        icon: '🏎️' },
    sports:     { label: 'Sports',        icon: '⚽' },
    rpg:        { label: 'RPG',           icon: '⚔️' },
    strategy:   { label: 'Strategy',      icon: '♟️' },
    fighting:   { label: 'Fighting',      icon: '🥊' },
    horror:     { label: 'Horror',        icon: '👻' },
    music:      { label: 'Music',         icon: '🎵' },
    mobile:     { label: 'Mobile',        icon: '📱' },
    minecraft:  { label: 'Minecraft',     icon: '⛏️' },
    tool:       { label: 'Apps/Tools',    icon: '🛠️' },
    action:     { label: 'Action',        icon: '⚡' }
};
const categoryLabel = (c) => (CATEGORY_META[c] && CATEGORY_META[c].label) || (c ? c.charAt(0).toUpperCase() + c.slice(1) : 'Game');
const categoryIcon = (c) => (CATEGORY_META[c] && CATEGORY_META[c].icon) || '🎯';

//  Descriptions 
// The scraped descriptions were generic filler that didn't match the game
// ("Monopoly: React quickly and survive intense action"). Legacy games get a
// description built from their final category instead; the new games keep the
// hand-written one from the data.
const DESC_TEMPLATES = {
    arcade:     ['{t} is an easy-to-start arcade game: chase a high score and beat your best.', 'Quick rounds, simple controls and a score to beat in {t}.'],
    platformer: ['Run, jump and time your moves through {t}.', '{t} is a platformer that rewards good timing and quick reflexes.'],
    adventure:  ['Explore, solve problems and uncover the story in {t}.', '{t} is an adventure that rewards curiosity and patience.'],
    puzzle:     ['Think it through and solve the puzzles in {t}.', '{t} is a brain-teaser: plan ahead and find the solution.'],
    words:      ['Guess, spell and think your way to the answer in {t}.', '{t} is a word and trivia game: how few tries will you need?'],
    simulation: ['Build, manage and grow your own world in {t}.', '{t} is a relaxed simulation game with plenty to manage.'],
    restaurant: ['Cook, serve and keep every customer happy in {t}.', 'Run your own busy kitchen in {t}.'],
    racing:     ['Hit the gas and master the tracks in {t}.', '{t} is a fast racing game: nail the corners and beat the clock.'],
    sports:     ['Get in the game and play to win in {t}.', '{t} is a quick sports game for a few minutes of friendly competition.'],
    rpg:        ['Level up, build your team and explore a big world in {t}.', '{t} is a role-playing adventure with lots of depth.'],
    strategy:   ['Plan ahead and outsmart the opposition in {t}.', '{t} rewards smart decisions and long-term planning.'],
    fighting:   ['Test your reflexes and combos in {t}.', 'Battle it out in skill-based combat in {t}.'],
    horror:     ['Survive the tension and atmosphere of {t}.', '{t} is a tense, spooky experience. Keep your nerve.'],
    music:      ['Follow the rhythm and hit every beat in {t}.', '{t} mixes music with fast, rhythmic gameplay.'],
    mobile:     ['A pick-up-and-play mobile-style hit: {t}.', '{t} is a casual game that is easy to learn and hard to put down.'],
    minecraft:  ['Block-building survival and sandbox fun in {t}.', '{t} brings the Minecraft sandbox to your browser.'],
    action:     ['Fast reactions and quick thinking are the key in {t}.', '{t} is a fast-paced action challenge.']
};
function buildDescription(game) {
    const list = DESC_TEMPLATES[game.effectiveCategory] || DESC_TEMPLATES.action;
    return list[hashStr(game.id) % list.length].replace('{t}', game.displayName);
}

//  Prepare data 
// Some entries share a "name" (7 Riddleschool episodes, 4 Btd games, ...), so
// every game gets a stable unique id (its url) plus a disambiguated display
// name. Original data above is never mutated apart from derived fields.
const NEW_BADGE_DAYS = 30;
const gamesById = new Map();
(function prepareGamesData() {
    const nameCounts = {};
    gamesData.forEach(g => { nameCounts[g.name] = (nameCounts[g.name] || 0) + 1; });

    const seenOfName = {};
    gamesData.forEach(g => {
        g.id = g.url;
        if (nameCounts[g.name] > 1) {
            seenOfName[g.name] = (seenOfName[g.name] || 0) + 1;
            g.displayName = `${g.name} ${seenOfName[g.name]}`;
        } else {
            g.displayName = g.name;
        }
        g.genre = normalizeGenre(g.genre, g.name);
        const override = CATEGORY_OVERRIDES[g.name.toLowerCase()];
        g.effectiveCategory = override || ((g.category === 'action' && g.genre) ? g.genre : g.category);

        // NEW badge: only for games with an `added` date, and only for 30 days
        const ageDays = g.added ? (Date.now() - Date.parse(g.added)) / 86400000 : Infinity;
        g.isNew = ageDays <= NEW_BADGE_DAYS;

        if (!g.added) g.description = buildDescription(g);

        // Pre-computed search text (spaces ignored, so "super mario" finds "Supermariobros")
        g._hay = [g.displayName, g.name, categoryLabel(g.effectiveCategory), g.effectiveCategory, g.genre || '', g.category, g.isNew ? 'new' : ''].join(' ').toLowerCase();
        g._compact = compact(g._hay);
        gamesById.set(g.id, g);
    });
})();

//  Persisted state 
function loadFavorites() {
    const stored = store.getJSON('og-favorites-v2', null);
    if (Array.isArray(stored)) return new Set(stored.filter(id => gamesById.has(id)));

    // Migrate favorites saved by the old (name-keyed) format, where possible.
    const legacy = store.getJSON('og-favorites', []);
    if (!Array.isArray(legacy) || !legacy.length) return new Set();
    const byName = {};
    gamesData.forEach(g => { (byName[g.name] = byName[g.name] || []).push(g); });
    // Only names that map unambiguously to one game.
    return new Set(legacy.filter(n => byName[n] && byName[n].length === 1).map(n => byName[n][0].id));
}
function saveFavorites() { store.setJSON('og-favorites-v2', [...state.favorites]); }

const RECENT_LIMIT = 24;
function loadRecent() {
    const stored = store.getJSON('og-recent-v1', []);
    return Array.isArray(stored) ? stored.filter(id => gamesById.has(id)).slice(0, RECENT_LIMIT) : [];
}
function saveRecent() { store.setJSON('og-recent-v1', state.recentlyPlayed); }
const loadView = () => store.getRaw('og-view', 'grid') === 'list' ? 'list' : 'grid';
const saveView = (v) => store.setRaw('og-view', v);

const SITE_URL = document.querySelector('link[rel="canonical"]')?.href || 'https://olivia-games.github.io/';

const state = {
    games: [...gamesData],
    currentCategory: 'all',
    currentView: loadView(),
    searchQuery: '',
    favorites: loadFavorites(),
    recentlyPlayed: loadRecent()
};

// Moves the game to the front of Recently Played (deduped, capped).
function recordPlayed(id) {
    if (!id || !gamesById.has(id)) return;
    state.recentlyPlayed = [id, ...state.recentlyPlayed.filter(x => x !== id)].slice(0, RECENT_LIMIT);
    saveRecent();
    const recentSection = $('recent');
    if (recentSection && recentSection.style.display !== 'none') renderRecent();
}

//  DOM 
const elements = {
    searchInput: $('search-input'),
    filtersContainer: $('filters'),
    gamesContainer: $('games-container'),
    favoritesContainer: $('favorites-container'),
    recentContainer: $('recent-container'),
    panicBtn: $('panic-btn'),
    exitPanicBtn: $('exit-panic-btn'),
    exploreBtn: $('explore-btn'),
    randomBtn: $('random-btn'),
    mobileMenuBtn: $('mobile-menu-btn'),
    mobileNav: $('mobile-nav'),
    mobileCloseBtn: $('mobile-close-btn'),
    resultsCount: $('results-count')
};

function init() {
    setupEventListeners();
    initGameModal();
    initLucky();
    applyView(state.currentView);
    renderFilters();

    const heroCount = $('hero-count');
    if (heroCount) heroCount.textContent = `${gamesData.length} Games Available`;

    // ?search=<term> - shareable / search-engine links (matches the SearchAction in the page's structured data)
    applySearchFromURL();
    // ?game=<id> - share link from the Share button; opens that game's info modal
    applySharedGameFromURL();

    window.addEventListener('popstate', () => { applySearchFromURL(); applySharedGameFromURL(); });
}

// Builds the filter chips from the data: All, New (only if there are new games),
// then every category that actually has games, with counts.
function renderFilters() {
    const container = elements.filtersContainer;
    if (!container) return;

    const counts = {};
    let newCount = 0;
    gamesData.forEach(g => {
        counts[g.effectiveCategory] = (counts[g.effectiveCategory] || 0) + 1;
        if (g.isNew) newCount++;
    });

    const known = Object.keys(CATEGORY_META).filter(c => c !== 'new' && counts[c]);
    const extra = Object.keys(counts).filter(c => c && !CATEGORY_META[c]).sort();
    const chips = [['all', '🎮', 'All Games', gamesData.length]];
    if (newCount) chips.push(['new', categoryIcon('new'), 'New', newCount]);
    [...known, ...extra].forEach(c => chips.push([c, categoryIcon(c), categoryLabel(c), counts[c]]));

    // If the active category no longer exists (shouldn't happen), fall back to All.
    if (!chips.some(c => c[0] === state.currentCategory)) state.currentCategory = 'all';

    container.innerHTML = chips.map(([key, icon, label, n]) =>
        `<button class="filter-chip${key === state.currentCategory ? ' active' : ''}" data-category="${esc(key)}">${icon} ${esc(label)}<span class="chip-count">${n}</span></button>`
    ).join('');
}

//  URL helpers -
function applySharedGameFromURL() {
    const gameId = new URLSearchParams(window.location.search).get('game');
    if (gameId && gamesById.has(gameId)) openGameModal(gamesById.get(gameId), { updateURL: false });
}

function applySearchFromURL() {
    const query = new URLSearchParams(window.location.search).get('search') || '';
    state.searchQuery = query.toLowerCase().trim();
    if (elements.searchInput) elements.searchInput.value = query;
    filterAndRender();
}

// Keep ?search= in the address bar in sync (replaceState: no history spam).
function setURLParam(key, value) {
    try {
        const url = new URL(window.location.href);
        if (value) url.searchParams.set(key, value); else url.searchParams.delete(key);
        window.history.replaceState({}, '', url);
    } catch { /* file:// or sandboxed - ignore */ }
}

//  Events --
function setupEventListeners() {
    if (elements.searchInput) elements.searchInput.addEventListener('input', handleSearch);
    if (elements.filtersContainer) elements.filtersContainer.addEventListener('click', handleFilter);

    if (elements.panicBtn) elements.panicBtn.addEventListener('click', togglePanicMode);
    if (elements.exitPanicBtn) elements.exitPanicBtn.addEventListener('click', togglePanicMode);

    // One keyboard handler for everything
    document.addEventListener('keydown', (e) => {
        const t = e.target;
        const typing = t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.tagName === 'SELECT' || t.isContentEditable);

        if (e.key === 'Escape') {
            if (document.body.classList.contains('panic-mode')) return togglePanicMode();
            if ($('lucky-modal')?.classList.contains('active')) return closeLucky();
            if ($('game-modal')?.classList.contains('active')) return closeGameModal();
            return;
        }
        if (e.key === '`' && !typing) { togglePanicMode(); return; }
        if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k' && elements.searchInput) {
            e.preventDefault();
            elements.searchInput.focus();
            return;
        }
        if (e.key === '/' && !typing && elements.searchInput) {
            e.preventDefault();
            elements.searchInput.focus();
        }
    });

    if (elements.exploreBtn) elements.exploreBtn.addEventListener('click', () => goToGames());
    if (elements.randomBtn) elements.randomBtn.addEventListener('click', () => openLucky());

    ['favorites-close-btn', 'recent-close-btn'].forEach(id => {
        const btn = $(id);
        if (btn) btn.addEventListener('click', () => goToGames());
    });

    const recentClearBtn = $('recent-clear-btn');
    if (recentClearBtn) recentClearBtn.addEventListener('click', () => {
        if (state.recentlyPlayed.length === 0) return;
        if (!confirm('Clear your recently played history?')) return;
        state.recentlyPlayed = [];
        saveRecent();
        renderRecent();
        showToast('Recently played history cleared');
    });

    const footerShareCopy = $('footer-share-copy');
    if (footerShareCopy) footerShareCopy.addEventListener('click', () => {
        copyToClipboard(SITE_URL).then(() => showToast('Link copied!')).catch(() => showToast('Could not copy link'));
    });

    // "More" only where the native share sheet exists (mostly mobile)
    const footerShareMore = $('footer-share-more');
    if (footerShareMore && navigator.share) {
        footerShareMore.style.display = '';
        footerShareMore.addEventListener('click', () => {
            navigator.share({
                title: 'Olivia Games',
                text: `Check out Olivia Games - play ${gamesData.length}+ free online games instantly!`,
                url: SITE_URL
            }).catch(() => {});
        });
    }

    document.querySelectorAll('.view-btn[data-view]').forEach(btn => btn.addEventListener('click', handleViewToggle));

    if (elements.mobileMenuBtn) elements.mobileMenuBtn.addEventListener('click', () => elements.mobileNav.classList.add('active'));
    if (elements.mobileCloseBtn) elements.mobileCloseBtn.addEventListener('click', () => elements.mobileNav.classList.remove('active'));

    // Nav links (desktop + mobile). Registered once here; the old code attached a
    // second listener to the mobile links just to close the menu.
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            if (elements.mobileNav) elements.mobileNav.classList.remove('active');
            showSection(targetId);
            if (targetId === '#home') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                document.querySelector(targetId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Game card actions - delegated because cards are re-rendered often
    [elements.gamesContainer, elements.favoritesContainer, elements.recentContainer].forEach(c => {
        if (c) c.addEventListener('click', handleCardAction);
    });

    // Reset-filters button inside the "no results" state
    document.addEventListener('click', (e) => {
        if (e.target.closest('[data-reset-filters]')) resetFilters();
    });

    // Broken thumbnail? Swap in a generated placeholder instead of a broken-image icon.
    document.addEventListener('error', (e) => {
        const img = e.target;
        if (img && img.tagName === 'IMG' && (img.classList.contains('game-thumb') || img.id === 'lucky-thumb') && !img.dataset.fallback) {
            img.dataset.fallback = '1';
            img.src = placeholderThumb(img.alt);
        }
    }, true);
}

function placeholderThumb(title) {
    const hue = hashStr(title || 'x') % 360;
    const initial = esc((title || '?').trim().charAt(0).toUpperCase());
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="280" height="140"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="hsl(${hue},60%,40%)"/><stop offset="1" stop-color="hsl(${(hue + 40) % 360},60%,18%)"/></linearGradient></defs><rect width="280" height="140" fill="url(#g)"/><text x="140" y="92" font-family="Arial,sans-serif" font-size="64" font-weight="700" fill="rgba(255,255,255,.85)" text-anchor="middle">${initial}</text></svg>`;
    return 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
}

function goToGames() {
    showSection('#games');
    $('games')?.scrollIntoView({ behavior: 'smooth' });
}

function handleCardAction(e) {
    const favBtn = e.target.closest('.favorite-btn');
    if (favBtn) { window.toggleFavorite(favBtn.dataset.id); return; }

    const infoBtn = e.target.closest('.info-btn');
    if (infoBtn) { window.showInfo(infoBtn.dataset.id); return; }

    // Play opens a new tab on its own; just log it to Recently Played.
    const playBtn = e.target.closest('.play-btn');
    if (playBtn) {
        const card = playBtn.closest('.game-card');
        if (card && card.dataset.id) recordPlayed(card.dataset.id);
        return;
    }
    // Anywhere else on the card (styled as clickable) opens the info modal.
    const card = e.target.closest('.game-card');
    if (card && card.dataset.id) window.showInfo(card.dataset.id);
}

//  Search & filters 
// Debounced: filtering 500+ games on every keystroke was choppy.
let searchDebounceTimer = null;
function handleSearch(e) {
    const value = e.target.value;
    clearTimeout(searchDebounceTimer);
    searchDebounceTimer = setTimeout(() => {
        state.searchQuery = value.toLowerCase().trim();
        setURLParam('search', state.searchQuery);
        filterAndRender();
    }, 150);
}

function handleFilter(e) {
    const chip = e.target.closest('.filter-chip');
    if (!chip) return;
    state.currentCategory = chip.dataset.category;
    elements.filtersContainer.querySelectorAll('.filter-chip').forEach(c => c.classList.toggle('active', c === chip));
    filterAndRender();
}

function resetFilters() {
    state.currentCategory = 'all';
    state.searchQuery = '';
    if (elements.searchInput) elements.searchInput.value = '';
    setURLParam('search', '');
    elements.filtersContainer?.querySelectorAll('.filter-chip').forEach(c => c.classList.toggle('active', c.dataset.category === 'all'));
    filterAndRender();
}

function matchesSearch(game, query) {
    if (!query) return true;
    // every word must match somewhere (name, category, genre, "new"); spaces are ignored
    return query.split(/\s+/).every(word => game._hay.includes(word) || game._compact.includes(compact(word)));
}

function filterAndRender() {
    let filtered = gamesData;
    if (state.currentCategory === 'new') {
        filtered = filtered.filter(g => g.isNew);
    } else if (state.currentCategory !== 'all') {
        filtered = filtered.filter(g => g.effectiveCategory === state.currentCategory);
    }
    if (state.searchQuery) filtered = filtered.filter(g => matchesSearch(g, state.searchQuery));

    state.games = filtered;
    if (elements.resultsCount) {
        const total = gamesData.length;
        elements.resultsCount.textContent = filtered.length === total
            ? `${total} games`
            : `${filtered.length} of ${total} games`;
    }
    renderGames();
}

//  Rendering -
// First screenful renders synchronously (feels instant); the rest is appended in
// batches via requestAnimationFrame so painting 500+ cards never blocks the page.
let renderToken = 0;
function renderGames() {
    if (!elements.gamesContainer) return;
    const myToken = ++renderToken; // a newer search/filter cancels a stale in-flight render

    if (state.games.length === 0) {
        elements.gamesContainer.innerHTML = `
            <div class="empty-state">
                <h3>No games found</h3>
                <p>Try a different search or category.</p>
                <button class="close-btn" data-reset-filters type="button" style="margin:1.25rem auto 0">↺ Reset filters</button>
            </div>`;
        return;
    }

    const FIRST_BATCH = 24, BATCH_SIZE = 40;
    const games = state.games;
    elements.gamesContainer.innerHTML = games.slice(0, FIRST_BATCH).map(createGameCard).join('');
    if (games.length <= FIRST_BATCH) return;

    let i = FIRST_BATCH;
    (function renderNextBatch() {
        if (myToken !== renderToken) return;
        const next = games.slice(i, i + BATCH_SIZE);
        if (!next.length) return;
        elements.gamesContainer.insertAdjacentHTML('beforeend', next.map(createGameCard).join(''));
        i += BATCH_SIZE;
        if (i < games.length) requestAnimationFrame(renderNextBatch);
    })();
}

function createGameCard(game) {
    const isFav = state.favorites.has(game.id);
    const title = esc(game.displayName);
    const thumbImg = game.backgroundImage
        ? `<img class="game-thumb" src="${esc(game.backgroundImage)}" alt="${title}" loading="lazy" decoding="async" width="280" height="140">`
        : '';
    return `
        <article class="game-card" data-id="${esc(game.id)}">
            ${game.isNew ? '<span class="new-badge">NEW</span>' : ''}
            ${thumbImg}
            <div class="game-header">
                <span class="game-category">${esc(categoryLabel(game.effectiveCategory))}</span>
                <button class="favorite-btn ${isFav ? 'active' : ''}" data-id="${esc(game.id)}"
                        aria-label="${isFav ? 'Remove from favorites' : 'Add to favorites'}">${isFav ? '⭐' : '☆'}</button>
            </div>
            <div class="game-content">
                <h3 class="game-title">${title}</h3>
                <p class="game-description">${esc(game.description)}</p>
            </div>
            <div class="game-footer">
                <a href="${esc(game.url)}" class="play-btn" target="_blank" rel="noopener" aria-label="Play ${title}">▶️ Play Now</a>
                <button class="info-btn" data-id="${esc(game.id)}" aria-label="Game info for ${title}">ℹ️</button>
            </div>
        </article>`;
}

function renderFavorites() {
    if (!elements.favoritesContainer) return;
    const favoriteGames = gamesData.filter(g => state.favorites.has(g.id));
    elements.favoritesContainer.innerHTML = favoriteGames.length
        ? favoriteGames.map(createGameCard).join('')
        : `<div class="empty-state"><h3>No favorites yet</h3><p>Click the star icon on any game to add it to your favorites</p></div>`;
}

// Most-recently-played first (not data order, unlike Favorites).
function renderRecent() {
    if (!elements.recentContainer) return;
    const recentGames = state.recentlyPlayed.map(id => gamesById.get(id)).filter(Boolean);
    elements.recentContainer.innerHTML = recentGames.length
        ? recentGames.map(createGameCard).join('')
        : `<div class="empty-state"><h3>No recently played games</h3><p>Games you play will show up here</p></div>`;
}

// Updates every visible card star for a game without a full re-render.
// (The modal's own button has its own label, so it's excluded here.)
function updateFavoriteButtons(id, isFav) {
    document.querySelectorAll(`.favorite-btn[data-id="${CSS.escape(id)}"]:not(.game-modal-fav)`).forEach(btn => {
        btn.classList.toggle('active', isFav);
        btn.textContent = isFav ? '⭐' : '☆';
        btn.setAttribute('aria-label', isFav ? 'Remove from favorites' : 'Add to favorites');
    });
}

function setModalFavState(btn, isFav) {
    btn.classList.toggle('active', isFav);
    btn.textContent = `${isFav ? '⭐' : '☆'} ${isFav ? 'Favorited' : 'Add to Favorites'}`;
}

window.toggleFavorite = function (id) {
    if (!gamesById.has(id)) return;
    const isNowFav = !state.favorites.has(id);
    if (isNowFav) state.favorites.add(id); else state.favorites.delete(id);
    saveFavorites();
    updateFavoriteButtons(id, isNowFav);

    const modalFav = $('modal-favorite-btn');
    if (modalFav && modalFav.dataset.id === id) setModalFavState(modalFav, isNowFav);

    // The Favorites list gains/loses entries, so it needs a real re-render.
    const favoritesSection = $('favorites');
    if (favoritesSection && favoritesSection.style.display !== 'none') renderFavorites();
};

window.showInfo = function (id) {
    const game = gamesById.get(id);
    if (game) openGameModal(game);
};

// Builds a ?game=<id> deep link (opening it pops that game's modal), copies it, toasts.
window.shareGame = function (id) {
    const game = gamesById.get(id);
    if (!game) return;
    const url = new URL(window.location.href);
    url.search = '';
    url.hash = '';
    url.searchParams.set('game', id);
    copyToClipboard(url.toString())
        .then(() => showToast(`Link to ${game.displayName} copied!`))
        .catch(() => showToast('Could not copy link'));
};

function copyToClipboard(text) {
    if (navigator.clipboard && window.isSecureContext) return navigator.clipboard.writeText(text);
    return new Promise((resolve, reject) => {
        try {
            const ta = document.createElement('textarea');
            ta.value = text;
            ta.style.position = 'fixed';
            ta.style.opacity = '0';
            document.body.appendChild(ta);
            ta.focus();
            ta.select();
            const ok = document.execCommand('copy');
            document.body.removeChild(ta);
            ok ? resolve() : reject(new Error('copy failed'));
        } catch (err) { reject(err); }
    });
}

let toastTimer = null;
function showToast(message) {
    const toast = $('toast');
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('visible'), 2500);
}

//  Game info modal --
let modalOpener = null;

function openGameModal(game, { updateURL = true } = {}) {
    const modal = $('game-modal');
    if (!modal) return;

    const title = game.displayName;
    modalOpener = document.activeElement;

    const thumb = $('modal-thumb');
    if (thumb) {
        if (game.backgroundImage) {
            thumb.style.backgroundImage = `url("${game.backgroundImage}")`;
            thumb.style.display = 'block';
        } else {
            thumb.style.display = 'none';
        }
    }

    $('modal-title').textContent = title;
    $('modal-category').textContent = categoryLabel(game.effectiveCategory);

    const newTag = $('modal-new');
    if (newTag) newTag.style.display = game.isNew ? '' : 'none';

    // Secondary tag only when it adds information beyond the primary badge.
    const genreEl = $('modal-genre');
    if (genreEl) {
        const secondary = game.genre && game.genre !== game.effectiveCategory
            ? game.genre
            : (game.category !== game.effectiveCategory && game.category !== 'action' ? game.category : null);
        if (secondary) { genreEl.textContent = categoryLabel(secondary); genreEl.style.display = ''; }
        else genreEl.style.display = 'none';
    }

    $('modal-description').textContent = game.description || '';

    const playBtn = $('modal-play-btn');
    if (playBtn) {
        playBtn.href = game.url;
        playBtn.dataset.id = game.id;
        playBtn.setAttribute('aria-label', `Play ${title}`);
    }
    const shareBtn = $('modal-share-btn');
    if (shareBtn) shareBtn.dataset.id = game.id;

    const favBtn = $('modal-favorite-btn');
    if (favBtn) {
        favBtn.dataset.id = game.id;
        setModalFavState(favBtn, state.favorites.has(game.id));
    }

    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    modal.querySelector('.game-modal-close')?.focus();
    if (updateURL) setURLParam('game', game.id);
}

function closeGameModal() {
    const modal = $('game-modal');
    if (!modal || !modal.classList.contains('active')) return;
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
    setURLParam('game', ''); // otherwise a refresh would re-open the modal forever
    if (modalOpener && document.contains(modalOpener) && modalOpener.focus) modalOpener.focus();
    modalOpener = null;
}
window.closeGameModal = closeGameModal;

function initGameModal() {
    const modal = $('game-modal');
    if (!modal) return;

    modal.addEventListener('click', (e) => { if (e.target.closest('[data-modal-close]')) closeGameModal(); });

    const favBtn = $('modal-favorite-btn');
    if (favBtn) favBtn.addEventListener('click', () => { if (favBtn.dataset.id) window.toggleFavorite(favBtn.dataset.id); });

    const shareBtn = $('modal-share-btn');
    if (shareBtn) shareBtn.addEventListener('click', () => window.shareGame(shareBtn.dataset.id));

    const playBtn = $('modal-play-btn');
    if (playBtn) playBtn.addEventListener('click', () => { if (playBtn.dataset.id) recordPlayed(playBtn.dataset.id); });
}

//  "I'm Feeling Lucky" -
// Replaces the old instant random-tab-open. Opens a small slot-machine style
// picker: spin, see what you got, then Play / Info / Spin again. You can narrow
// the pool (a category, New, your Favorites) and it skips games you've played
// recently, and never lands on the same game twice in a row.
const lucky = { spinning: false, current: null, timer: null, opener: null };

function luckyPool() {
    const key = $('lucky-pool')?.value || 'all';
    let pool = gamesData;
    if (key === 'new') pool = pool.filter(g => g.isNew);
    else if (key === 'favorites') pool = pool.filter(g => state.favorites.has(g.id));
    else if (key !== 'all') pool = pool.filter(g => g.effectiveCategory === key);

    if ($('lucky-fresh')?.checked) {
        const recent = new Set(state.recentlyPlayed);
        const fresh = pool.filter(g => !recent.has(g.id));
        if (fresh.length) pool = fresh; // everything played already? ignore the filter
    }
    if (pool.length > 1 && lucky.current) pool = pool.filter(g => g.id !== lucky.current.id);
    return pool;
}

function fillLuckyPoolOptions() {
    const select = $('lucky-pool');
    if (!select) return;
    const previous = select.value || 'all';

    const counts = {};
    gamesData.forEach(g => { counts[g.effectiveCategory] = (counts[g.effectiveCategory] || 0) + 1; });
    const opts = [['all', '🎲 Any game']];
    if (gamesData.some(g => g.isNew)) opts.push(['new', '🆕 New games']);
    if (state.favorites.size) opts.push(['favorites', '⭐ My favorites']);
    Object.keys(counts)
        .sort((a, b) => categoryLabel(a).localeCompare(categoryLabel(b)))
        .forEach(c => opts.push([c, `${categoryIcon(c)} ${categoryLabel(c)}`]));

    select.innerHTML = opts.map(([v, l]) => `<option value="${esc(v)}">${esc(l)}</option>`).join('');
    select.value = opts.some(o => o[0] === previous) ? previous : 'all';
}

function showLuckyGame(game) {
    const img = $('lucky-thumb');
    if (img) {
        delete img.dataset.fallback;
        img.alt = game.displayName;
        img.src = game.backgroundImage || placeholderThumb(game.displayName);
    }
    $('lucky-name').textContent = game.displayName;
    $('lucky-tag').textContent = `${categoryIcon(game.effectiveCategory)} ${categoryLabel(game.effectiveCategory)}${game.isNew ? ' · NEW' : ''}`;
}

function setLuckyPlayEnabled(enabled, game) {
    const play = $('lucky-play');
    const info = $('lucky-info');
    play.classList.toggle('disabled', !enabled);
    play.setAttribute('aria-disabled', String(!enabled));
    play.tabIndex = enabled ? 0 : -1;
    if (info) info.disabled = !enabled;
    if (enabled && game) {
        play.href = game.url;
        play.dataset.id = game.id;
        play.setAttribute('aria-label', `Play ${game.displayName}`);
    } else {
        play.removeAttribute('href');
    }
}

function spinLucky() {
    if (lucky.spinning) return;
    const pool = luckyPool();
    if (!pool.length) { showToast('No games to pick from'); return; }

    const pick = pool[rand(pool.length)];
    const reel = $('lucky-reel');
    reel.classList.remove('landed');
    setLuckyPlayEnabled(false);

    const land = () => {
        lucky.spinning = false;
        lucky.current = pick;
        reel.classList.remove('spinning');
        showLuckyGame(pick);
        reel.classList.add('landed');
        setLuckyPlayEnabled(true, pick);
        $('lucky-play').focus({ preventScroll: true });
    };

    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) { land(); return; }

    lucky.spinning = true;
    reel.classList.add('spinning');
    $('lucky-spin').disabled = true;
    const STEPS = 14;
    let i = 0;
    (function tick() {
        if (i >= STEPS) { $('lucky-spin').disabled = false; land(); return; }
        showLuckyGame(gamesData[rand(gamesData.length)]);
        i++;
        lucky.timer = setTimeout(tick, 45 + i * i * 0.8); // starts fast, slows down
    })();
}

function openLucky() {
    const modal = $('lucky-modal');
    if (!modal) { // markup missing: degrade to the old behaviour
        const g = gamesData[rand(gamesData.length)];
        recordPlayed(g.id);
        window.open(g.url, '_blank', 'noopener');
        return;
    }
    lucky.opener = document.activeElement;
    fillLuckyPoolOptions();
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    spinLucky();
}

function closeLucky() {
    const modal = $('lucky-modal');
    if (!modal || !modal.classList.contains('active')) return;
    clearTimeout(lucky.timer);
    lucky.spinning = false;
    $('lucky-spin').disabled = false;
    $('lucky-reel').classList.remove('spinning');
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
    if (lucky.opener && document.contains(lucky.opener) && lucky.opener.focus) lucky.opener.focus();
    lucky.opener = null;
}

function initLucky() {
    const modal = $('lucky-modal');
    if (!modal) return;
    modal.addEventListener('click', (e) => { if (e.target.closest('[data-lucky-close]')) closeLucky(); });
    $('lucky-spin').addEventListener('click', spinLucky);
    $('lucky-pool').addEventListener('change', () => { lucky.current = null; spinLucky(); });
    $('lucky-fresh').addEventListener('change', spinLucky);
    $('lucky-play').addEventListener('click', (e) => {
        const play = e.currentTarget;
        if (lucky.spinning || play.classList.contains('disabled')) { e.preventDefault(); return; }
        if (play.dataset.id) recordPlayed(play.dataset.id);
    });
    $('lucky-info').addEventListener('click', () => {
        const game = lucky.current;
        if (!game) return;
        closeLucky();
        openGameModal(game);
    });
}

//  View toggle --
// Keeps every view-control and the grid/list class on all three containers in sync.
function applyView(view) {
    state.currentView = view;
    document.querySelectorAll('.view-btn[data-view]').forEach(b => b.classList.toggle('active', b.dataset.view === view));
    const isList = view === 'list';
    [elements.gamesContainer, elements.favoritesContainer, elements.recentContainer].forEach(c => {
        if (c) c.classList.toggle('list-view', isList);
    });
}

function handleViewToggle(e) {
    const btn = e.target.closest('.view-btn[data-view]');
    if (!btn) return;
    applyView(btn.dataset.view);
    saveView(btn.dataset.view);
}

//  Panic mode -
const ORIGINAL_TITLE = document.title;
function togglePanicMode() {
    const on = document.body.classList.toggle('panic-mode');
    if (on) {
        // Hide anything that could still be on screen
        closeLucky();
        closeGameModal();
        document.title = 'Google Classroom';
    } else {
        document.title = ORIGINAL_TITLE;
    }
}

//  Section switching (Home / Games / Categories / Favorites / Recently Played) --
// Centralized so the desktop nav, mobile nav, Explore button and the close
// buttons all agree on what's visible.
function showSection(targetId) {
    // Sync every nav link pointing here (desktop AND mobile).
    document.querySelectorAll('.nav-link').forEach(l => l.classList.toggle('active', l.getAttribute('href') === targetId));

    const gamesSection = $('games');
    const favoritesSection = $('favorites');
    const recentSection = $('recent');
    const categoriesSection = $('categories');

    if (favoritesSection) favoritesSection.style.display = 'none';
    if (recentSection) recentSection.style.display = 'none';

    if (targetId === '#favorites') {
        if (gamesSection) gamesSection.style.display = 'none';
        if (categoriesSection) categoriesSection.style.display = 'none';
        if (favoritesSection) { favoritesSection.style.display = 'block'; renderFavorites(); }
    } else if (targetId === '#recent') {
        if (gamesSection) gamesSection.style.display = 'none';
        if (categoriesSection) categoriesSection.style.display = 'none';
        if (recentSection) { recentSection.style.display = 'block'; renderRecent(); }
    } else {
        if (gamesSection) gamesSection.style.display = 'block';
        if (categoriesSection) categoriesSection.style.display = 'block';
    }
}

//  Boot 
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
else init();

const yearEl = $('currentYear');
if (yearEl) yearEl.textContent = new Date().getFullYear();
