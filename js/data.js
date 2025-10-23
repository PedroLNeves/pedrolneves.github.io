const highlights = ["SweetStakes", "NightShift", "CrushedDreams"];
const games = ["UNROOTED", "BREAKER", "Jailbreaker", "Brew", "WayOut", "Dantes", "Strayed", "LightsFall", "Heracles"];
const other = ["Kirves", "Reality", "Biomek"];

const portfolioItems = [
  {
    id: "Brew",
    title: "Brew The Catch",
    thumbnail: { type: "image", src: "assets/img/portfolio/Brew/Thumbnail.png" },
    mainMedia: { type: "video", src: "assets/img/portfolio/Brew/Showcase.mp4" },
    gallery: [
      { type: "image", src: "assets/img/portfolio/Brew/Screenshot_1.jpg" },
      { type: "image", src: "assets/img/portfolio/Brew/Screenshot_2.jpg" },
      { type: "image", src: "assets/img/portfolio/Brew/Screenshot_3.jpg" },
    ],
    tags: ["Game", "Unity", "Jam", "WebGL"],
    shortDescription: `A 2.5D fishing and coffee game created for CoffeeJam 2024, where players serve drinks using ingredients caught straight from the sea.`,
    description: `<h3><b><u>CONTEXT</u></b></h3>
    <p><b>CoffeeJam 2024, 1 week – Team of 3</b></p>
    <p style="margin-top: -1rem;"><i>Themes: Coffee and Sea.</i></p>
    <p style="margin-top: -1rem;"><i>REFINED POST JAM</i></p>

    <h3><b><u>PROJECT</u></b></h3>
    <p><i>Brew The Catch</i> is a 2.5D fishing and coffee game where players take control of <b>Cuppy</b>, the owner of a seaside coffee shop. To satisfy customers, you must fish ingredients directly from the ocean and serve their favorite drinks before time runs out. Each day ends with a summary of your performance and earnings.</p>

    <h3><b><u>CONTRIBUTIONS</u></b></h3>
    <p>Served as <u>team lead</u> and contributed to overall game conceptualization.</p>
    <p>Modeled, rigged, and animated the <u>main character</u> (<i>Cuppy</i>).</p>
    <p>Implemented all character <u>assets</u> and <u>animations</u> in Unity scenes.</p>
    <p>Coded the <u>core gameplay loop</u>, including order management, scoring, and client interactions.</p>
    <p>Co-developed the <u>fishing mechanic</u></p>
    <p>Created the <u>fish assets</u> and related systems using a flexible <u>Scriptable Object</u>-based design.</p>
    <p>Polished visuals through <u>shaders</u>, <u>particles</u>, and <u>post-processing</u> effects.</p>
  `,
    link: "https://trashpandas-studios.itch.io/brew-the-catch",
  },
  {
    id: "Heracles",
    title: "Heracles' Last Labour",
    thumbnail: { type: "image", src: "assets/img/portfolio/Heracles/Thumbnail.png" },
    mainMedia: { type: "video", src: "assets/img/portfolio/Heracles/Showcase.mp4" },
    gallery: [
      { type: "image", src: "assets/img/portfolio/Heracles/Screenshot_1.jpg" },
      { type: "image", src: "assets/img/portfolio/Heracles/Screenshot_2.jpg" },
      { type: "image", src: "assets/img/portfolio/Heracles/Screenshot_3.jpg" },
      { type: "image", src: "assets/img/portfolio/Heracles/Assets_1.jpg" },
      { type: "image", src: "assets/img/portfolio/Heracles/Assets_2.jpg" },
      { type: "image", src: "assets/img/portfolio/Heracles/Assets_3.jpg" },
      { type: "image", src: "assets/img/portfolio/Heracles/Assets_4.jpg" },
    ],
    tags: ["Game", "Unity", "Academic"],
    shortDescription: `A 2D R-Type shoot 'em up following Heracles on his final labour — capturing Cerberus at the gates of the Underworld. (First video game project)`,
    description: `
    <h3><b><u>CONTEXT</u></b></h3>
    <p><b>Academic Project, CTeSP in Game Design and Digital Animation, 2020 – Solo Developer</b></p>
    <p style="margin-top: -1rem;"><i>Developed a 2D R-Type-inspired pixel art game using Unity.</i></p>

    <h3><b><u>PROJECT</u></b></h3>
    <p><i>Heracles' Last Labour</i> is a 2D pixel art shoot 'em up inspired by the classic R-Type formula. The player controls Heracles on his journey to capture the mighty Cerberus, fending off the souls of the damned that stand in his way.</p>

    <p>The project requirements included: 2–3 enemy types, 2 stages, a special ability, collectibles, and a boss fight.</p>

    <p>All assets were created under specific color and resolution constraints to emulate retro hardware limitations.</p>

    <h3><b><u>CONTRIBUTIONS</u></b></h3>
    <p>Conceptualized and designed the entire project.</p>
    <p>Created all <u>pixel art</u> assets.</p>
    <p>Developed all <u>game mechanics</u> in <u>Unity</u>.</p>
    <p>Designed and implemented the <u>boss fight</u>.</p>
    <p>Developed and integrated the <u>UI</u> system.</p>
    <p>Handled <u>asset integration</u> and <u>scene setup</u>.</p>
  `,
  },
  {
    id: "LightsFall",
    title: "Light's Fall",
    thumbnail: { type: "image", src: "assets/img/portfolio/LightsFall/Thumbnail.png" },
    mainMedia: { type: "video", src: "assets/img/portfolio/LightsFall/Trailer.mp4" },
    gallery: [
      { type: "image", src: "assets/img/portfolio/LightsFall/Screenshot_1.png" },
      { type: "image", src: "assets/img/portfolio/LightsFall/Screenshot_2.png" },
      { type: "image", src: "assets/img/portfolio/LightsFall/Screenshot_3.png" },
      { type: "image", src: "assets/img/portfolio/LightsFall/Screenshot_4.png" },
      { type: "image", src: "assets/img/portfolio/LightsFall/Cutscene_1.gif" },
      { type: "image", src: "assets/img/portfolio/LightsFall/Cutscene_2.gif" },
      { type: "image", src: "assets/img/portfolio/LightsFall/Cutscene_3.gif" },
      { type: "image", src: "assets/img/portfolio/LightsFall/Cutscene_4.gif" },
      { type: "image", src: "assets/img/portfolio/LightsFall/Merch.png" },
      { type: "image", src: "assets/img/portfolio/LightsFall/Assets_1.png" },
      { type: "image", src: "assets/img/portfolio/LightsFall/Assets_2.png" },
    ],
    tags: ["Game", "Unity", "Academic"],
    shortDescription: `A 2.5D Platformer switching between parallel worlds, following the twisted adventure of a kleptomanic raccoon shunned from society.`,
    description: `<h3><b><u>CONTEXT</u></b></h3>
    <p><b>Academic Project, CTeSP in Game Design and Digital Animation, 2021 – Team of 3</b></p>
    <p style="margin-top: -1rem;"><i>Developing a Unity game with the themes: 2.5D and Wild Nature.</i></p>

    <h3><b><u>PROJECT</u></b></h3>
    <p><i>LightsFall</i> is a 2.5D platformer where players take control of <b>Diego</b>, a kleptomaniac raccoon whose greed brings ruin to his world. After unleashing a curse, Diego must traverse a decaying land using a powerful artifact that allows him to switch between two parallel worlds in search of what he believes is rightfully his.</p>

    <p>Featuring hand-crafted environments and platforming mechanics between two parallel worlds, <i>LightsFall</i> challenges players to beat the developers’ best completion time.</p>

    <h3><b><u>CONTRIBUTIONS</u></b></h3>
    <p>Collaborated in the conceptualization and design of the game.</p>
    <p>Co-programmed the <u>core mechanics</u> in <u>Unity</u>.</p>
    <p>Produced hand-drawn <u>tilemaps</u> and environmental assets</p>
    <p>Conceptualized and coded <u>enemy behaviors</u></u>
    <p>Designed and produced the <u>UI</u> and menu flow.</p>
    <p>Produced 12 <u>mini cutscenes</u> for narrative transitions using <u>Photoshop</u> and <u>After Effects</u>.</p>
    <p>Conceptualized potential <u>merchandise</u> and promotional materials.</p>
    <p>Contributed to <u>scene assembly</u> in Unity.</p>
  `,
    link: "https://trashpandas-studios.itch.io/lights-fall",
  },
  {
    id: "Kirves",
    title: "Kirves",
    thumbnail: { type: "image", src: "assets/img/portfolio/Kirves/Thumbnail.jpg" },
    mainMedia: { type: "video", src: "assets/img/portfolio/Kirves/Showcase_1.mp4" },
    gallery: [
      { type: "video", src: "assets/img/portfolio/Kirves/Showcase_2.mp4" },
      { type: "image", src: "assets/img/portfolio/Kirves/Screenshot_1.jpg" },
      { type: "image", src: "assets/img/portfolio/Kirves/Screenshot_2.png" },
      { type: "image", src: "assets/img/portfolio/Kirves/Screenshot_3.jpg" },
    ],
    tags: ["3D Animation", "MoCap", "Academic"],
    shortDescription: `A 3D MoCap stylized animation portraying the fractured world of a Finnish young man and his uncle.`,
    description: `<h3><b><u>CONTEXT</u></b></h3>
    <p><b>Academic Project, Bachelor in Multimedia, 2024 – Team of 3</b></p>
    <p style="margin-top: -1rem;"><i>Short film created using 3D Animation and Motion Capture.</i></p>

    <h3><b><u>PROJECT</u></b></h3>
      <p><i>Kirves</i> is a 3-minute short 3D film set in a rural Finnish town. It follows Paahenkilo, a young unmedicated man haunted by his own delusions, and his uncle, Pijany. When Pijany reveals the existence of a mysterious lottery prize, the line between reality and hallucination begins to blur, offering Paahenkilo a possible escape from the suffocating monotony of his life.</p>

      <p>The project originally followed a different art direction and narrative, which were later reworked after the team was formed.</p>

      <p>All assets were created collaboratively, animated through a blend of MoCap and keyframing.</p>

    <h3><b><u>CONTRIBUTIONS</u></b></h3>
      <p>Co-developed the concept and direction of the film.</p>
      <p>Created <u>concept art</u> for redesigned characters.</p>
      <p>Modeled, textured, rigged, and built <u>blendshapes</u> for the "uncle" character.</p>
      <p>Performed <u>lip sync</u> and <u>MoCap cleanup</u> in <u>MotionBuilder</u> for the "uncle".</p>
      <p>Created <u>forest assets</u> and terrain.</p>
      <p>Assembled and rendered scenes in <u>Maya</u>.</p>
      <p>Set up <u>shaders</u> and <u>lighting</u> across scenes.</p>
      <p>Designed, edited, and implemented the <u>soundscape</u>.</p>
  `,
  },
  {
    id: "Strayed",
    title: "Strayed In Space",
    thumbnail: { type: "image", src: "assets/img/portfolio/Strayed/Thumbnail.png" },
    mainMedia: { type: "video", src: "assets/img/portfolio/Strayed/Trailer.mp4" },
    gallery: [
      { type: "image", src: "assets/img/portfolio/Strayed/Screenshot_1.png" },
      { type: "image", src: "assets/img/portfolio/Strayed/Screenshot_2.png" },
      { type: "image", src: "assets/img/portfolio/Strayed/Screenshot_3.png" },
      { type: "image", src: "assets/img/portfolio/Strayed/Screenshot_4.png" },
      { type: "image", src: "assets/img/portfolio/Strayed/Merch_1.gif" },
      { type: "image", src: "assets/img/portfolio/Strayed/Merch_2.png" },
      { type: "image", src: "assets/img/portfolio/Strayed/Merch_3.gif" },
      { type: "image", src: "assets/img/portfolio/Strayed/Merch_4.gif" },
    ],
    tags: ["Game", "Unity", "Academic"],
    shortDescription: `A retro-futuristic First-Person Survival Horror set on a stranded spaceship, where the player must escape without being caught by a roaming alien.`,
    description: `<h3><b><u>CONTEXT</u></b></h3>
    <p><b>Academic Project, CtesP in Game Design and Digital Animation, 2022 – Team of 3</b></p>
    <p style="margin-top: -1rem;"><i>Theme: "Space Odyssey"</i></p>

    <h3><b><u>PROJECT</u></b></h3>
      <p><i>Strayed In Space</i> is a First-Person Survival Horror set on a retro-futuristic spaceship whose crew has been slaughtered by an uncontained alien. The player awakens after the storm and pieces together what happened to the crew, using scattered clues and logs to find a way to escape.</p>

      <p>The game features multiple endings depending on the player’s choices and performance.</p>

      <p>It was also optimized and ported for mobile with new control schemes as part of the project brief.</p>

    <h3><b><u>CONTRIBUTIONS</u></b></h3>
      <p>Led the game's <u>art direction</u>.</p>
      <p><u>Collaborated</u> in designing the map, mechanics, and narrative.</p>
      <p>Produced the <u>3D model</u> of the alien, handling the <u>full asset pipeline</u>.</p>
      <p>Coded the alien's <u>AI behavior</u>.</p>
      <p>Co-developed the core game mechanics.</p>
      <p>Designed and implemented the <u>soundscape</u>.</p>
      <p>Produced <u>2D assets</u> and various <u>User Interfaces</u>.</p>
      <p>Created all promotional and marketing material.</p>
  `,
    link: "https://trashpandas-studios.itch.io/strayed-in-space",
  },
  {
    id: "Dantes",
    title: "Dante's Descent",
    thumbnail: { type: "image", src: "assets/img/portfolio/Dantes/Thumbnail.png" },
    mainMedia: { type: "video", src: "assets/img/portfolio/Dantes/Trailer.mp4" },
    gallery: [
      { type: "image", src: "assets/img/portfolio/Dantes/Screenshot_1.png" },
      { type: "image", src: "assets/img/portfolio/Dantes/Screenshot_2.png" },
      { type: "image", src: "assets/img/portfolio/Dantes/Screenshot_3.png" },
      { type: "image", src: "assets/img/portfolio/Dantes/Screenshot_4.jpg" },
      { type: "image", src: "assets/img/portfolio/Dantes/Screenshot_5.jpg" },
    ],
    tags: ["Game", "Unity", "Academic"],
    shortDescription: `3D Hack'n'Slash based on Dante Alighieri's <i>Divine Comedy</i>, developed in collaboration with students from FEUP as a solo artist.`,
    description: `<h3><b><u>CONTEXT</u></b></h3>
    <p><b>Academic Internship, CtesP in Game Design and Digital Animation, 2022 – Solo artist</b></p>
    <p style="margin-top: -1rem;"><i>Internship at FEUP - 3D and General videogame artist</i></p>

    <h3><b><u>PROJECT</u></b></h3>
      <p><i>Dante's Descent</i> is a proof of concept for a Hack'n'Slash game featuring a descent through stylized interpretations of the circles of Hell from Dante Alighieri's <i>Divine Comedy</i>. The current build culminates in a boss battle against Cerberus within the circle of <i>Gluttony</i>.</p>

      <p>As the sole artist, I handled concept art, game design, 3D modeling, animation, UI, techical art and overall visual design.</p>

    <h3><b><u>CONTRIBUTIONS</u></b></h3>
      <p>Led the game's <u>art direction</u> as art director.</p>
      <p><u>Conceptualized</u> characters, abilities, props, and environments.</p>
      <p>Handled the entire <u>3D pipeline</u> for all assets (modeling, texturing, rigging, animation).</p>
      <p>Implemented all assets within the game engine.</p>
      <p>Developed the <u>UI</u> visuals and mechanics.</p>
      <p>Created and integrated <u>custom shaders</u> and <u>VFX</u>.</p>
      <p>Produced all promotional and marketing content.</p>
  `,
    link: "https://diogoabnunes.itch.io/dantes-descent",
  },
  {
    id: "Reality",
    title: "R3ALITY 3.0",
    thumbnail: { type: "image", src: "assets/img/portfolio/Reality/Thumbnail.png" },
    mainMedia: { type: "video", src: "assets/img/portfolio/Reality/Promo.mp4" },
    gallery: [
      { type: "video", src: "assets/img/portfolio/Reality/Showcase_1.mp4" },
      { type: "video", src: "assets/img/portfolio/Reality/Showcase_2.mp4" },
      { type: "video", src: "assets/img/portfolio/Reality/Trailer.mp4" },
      { type: "video", src: "assets/img/portfolio/Reality/Rig_Showcase_1.mp4" },
      { type: "image", src: "assets/img/portfolio/Reality/Rig_Showcase_2.png" },
      { type: "image", src: "assets/img/portfolio/Reality/Screenshot_1.jpg" },
      { type: "image", src: "assets/img/portfolio/Reality/Screenshot_2.jpg" },
      { type: "image", src: "assets/img/portfolio/Reality/Screenshot_3.jpg" },
      { type: "image", src: "assets/img/portfolio/Reality/Screenshot_4.png" },
    ],
    tags: ["3D/2D Animation", "Academic"],
    shortDescription: `Large-scale animation blending 2D and 3D, portraying the <i>City of the Future</i>. Created in partnership with OCUBO and projected onto the walls of the <i>Alfândega do Porto</i>.`,
    description: `<h3><b><u>CONTEXT</u></b></h3>
    <p><b>Academic Project, partnership with OCUBO, Bachelor in Multimedia, 2024 – Team of 4</b></p>
    <p style="margin-top: -1rem;"><i>Conceptualizing and animating "The City of the Future" to be projected in "Alfândega do Porto"</i></p>

    <h3><b><u>PROJECT</u></b></h3>
      <p><i>R3ALITY 3.0</i> is our interpretation of a dystopian future — a cynical parody of modern digital and social trends, portraying "Web 3.0" as an exaggerated version of everyday life.</p>

      <p>This project was developed in partnership with <i>OCUBO</i>, a company that produces large-scale projection animations for public exhibitions at the Alfândega do Porto.</p>

      <p>Meeting all quality criteria, the animation was selected for exhibition in <i>Immersivus X: A Cidade do Futuro</i>.</p>

    <h3><b><u>CONTRIBUTIONS</u></b></h3>
      <p><u>Directed</u> and <u>conceptualized</u> the project as team lead.</p>
      <p>Responsible for <u>character design</u>, <u>modeling</u>, <u>rigging</u>, and <u>animation</u>.</p>
      <p><u>Sculpted</u> and <u>retopologized</u> the human characters.</p>
      <p><u>Composited</u> assets in <u>Photoshop</u>.</p>
      <p><u>Animated</u> and arranged 2D assets and 3D renders in <u>After Effects</u>.</p>
      <p>Created all promotional material.</p>
    `,
  },
  {
    id: "Biomek",
    title: "BIOMEK",
    thumbnail: { type: "image", src: "assets/img/portfolio/Biomek/Thumbnail.jpg" },
    mainMedia: { type: "video", src: "assets/img/portfolio/Biomek/Showcase.mp4" },
    gallery: [
      { type: "image", src: "assets/img/portfolio/Biomek/Screenshot_1.jpg" },
      { type: "image", src: "assets/img/portfolio/Biomek/Screenshot_2.jpg" },
      { type: "image", src: "assets/img/portfolio/Biomek/Screenshot_3.jpg" },
      { type: "image", src: "assets/img/portfolio/Biomek/Screenshot_4.jpg" },
      { type: "video", src: "assets/img/portfolio/Biomek/Trailer.mp4" },
    ],
    tags: ["Design", "Academic"],
    shortDescription: `Designing and creating the visual identity of a fictional band "BIOMEK"`,
    description: `<h3><b><u>CONTEXT</u></b></h3>
    <p><b>Academic Project, Bachelor in Multimedia, 2023 – Solo</b></p>
    <p style="margin-top: -1rem;"><i>Designing the visual identity of a fictional brand</i></p>

  <h3><b><u>PROJECT</u></b></h3>
    <p><i>BIOMEK</i> is a fictional concept band created as part of this project. The goal was to develop a cohesive visual identity spanning multiple areas of multimedia and design — from 3D renders and graphic design to video editing and branding.</p>

  <h3><b><u>SOFTWARE USED</u></b></h3>
    <p><u>Blender</u> for polychromatic 3D renders.</p>
    <p><u>Photoshop</u> for compositing, graphic design, and mockups.</p>
    <p><u>Illustrator</u> for 3D typography.</p>
    <p><u>Premiere Pro</u> for video editing.</p>
    `,
  },
  {
    id: "BREAKER",
    title: ">BR34K3R.exe",
    thumbnail: { type: "image", src: "assets/img/portfolio/BR34K3R/Thumbnail.png" },
    mainMedia: { type: "video", src: "assets/img/portfolio/BR34K3R/Showcase.mp4" },
    gallery: [
      { type: "image", src: "assets/img/portfolio/BR34K3R/Screenshot_1.png" },
      { type: "image", src: "assets/img/portfolio/BR34K3R/Screenshot_2.png" },
      { type: "image", src: "assets/img/portfolio/BR34K3R/Screenshot_3.png" },
      { type: "image", src: "assets/img/portfolio/BR34K3R/Screenshot_4.png" },
      { type: "image", src: "assets/img/portfolio/BR34K3R/Screenshot_5.png" },
    ],
    tags: ["Game", "Processing", "Academic"],
    shortDescription: `An Arcade Bullet Hell using Facial Recognition and physical Arduino Controller for player controls developed in Processing.`,
    description: `<h3><b><u>CONTEXT</u></b></h3>
    <p><b>Academic Project, Bachelor in Multimedia, 2024 – Team of 2</b></p>
    <p style="margin-top: -1rem;"><i>Developing an interactive project using Processing and Arduino</i></p>

    <h3><b><u>GAME</u></b></h3>
    <p><i>>BR34K3R.exe</i> is a homage to classic arcade bullet hell games, featuring a custom Arduino controller and webcam-based facial recognition to control the character’s movements.</p>

    <p>Players use the Arduino controller to switch colors, making them immune to certain projectiles, deploy bombs to clear bullets, and adjust the game’s difficulty with a potentiometer. LEDs on the controller provide real-time feedback on health, bombs, and difficulty level.</p>

    <p>The game features a single boss fight with increasingly complex bullet patterns, and the ability to summon three different enemy types, each with unique attack patterns.</p>

    <h3><b><u>CONTRIBUTIONS</u></b></h3>
      <p><u>Directed</u> the project as team lead and sole developer.</p>
      <p>Implemented <u>facial recognition</u> using OpenCV.</p>
      <p>Developed all game <u>mechanics</u> and <u>enemy AI</u>.</p>
      <p>Coded the boss and mini-enemies using <u>OOP principles</u>.</p>
      <p>Programmed the <u>in-system leaderboard</u>.</p>
      <p>Popshed visuals with <u>code-driven animations</u> and <u>effects</u>.</p>
      <p>Designed, built, and integrated the <u>Arduino controller</u> for gameplay.</p>
    `,
  },
  {
    id: "WayOut",
    title: "Strayed In Space - A Way Out",
    thumbnail: { type: "image", src: "assets/img/portfolio/WayOut/Thumbnail.png" },
    mainMedia: { type: "video", src: "assets/img/portfolio/WayOut/Showcase.mp4" },
    gallery: [
      { type: "image", src: "assets/img/portfolio/WayOut/Screenshot_1.png" },
      { type: "image", src: "assets/img/portfolio/WayOut/Screenshot_2.png" },
      { type: "image", src: "assets/img/portfolio/WayOut/Screenshot_3.png" },
      { type: "image", src: "assets/img/portfolio/WayOut/Screenshot_4.png" },
      { type: "image", src: "assets/img/portfolio/WayOut/Screenshot_5.png" },
    ],
    tags: ["Game", "Unity", "VR", "OpenXR", "Academic"],
    shortDescription: `A VR Escape Room game, prequel of "Strayed In Space", where the player has to find and connect clues to follow the protocol and escape before becoming the rampaging alien's next meal.`,
    description: `<h3><b><u>CONTEXT</u></b></h3>
    <p><b>Academic Project, Bachelor in Multimedia, 2023 - Team of 3</b></p>
    <p style="margin-top: -1rem;"><i>Developing a VR Experience using OpenXR</i></p>

    <h3><b><u>GAME</u></b></h3>
    <p><i>Strayed In Space - A Way Out</i> is a VR Escape Room game developed using OpenXR. This prequel to "Strayed In Space" recontextualizes its lore and characters, giving players a fresh experience while expanding the universe.</p>

    <p>The player is barricaded in a room as the rest of the crew has been slaughtered by a roaming alien. Guided by a cryptic AI voicemail and their own wits, the player finds and decodes scattered clues, interacts with objects, tools, and computers, manages limited leftover energy from batteries, and monitors the alien’s vitals to periodically disable the generator when the alien draws near.</p>

    <p>The game features multiple endings depending on what the player has accomplished before escaping.</p>

    <h3><b><u>CONTRIBUTIONS</u></b></h3>
    <p><u>Directed</u> the project as team lead and sole Unity developer.</p>
    <p><u>Designed</u> the <u>mechanics</u>, <u>puzzles</u>, and <u>narrative</u> structure of the experience.</p>
    <p>Implemented <u>VR mechanics</u> using OpenXR.</p>
    <p>Built the <u>core gameplay loop</u> and all <u>interactive mechanics</u>.</p>
    <p>Created diegetic <u>interfaces</u> including keypad, computer monitors, and vitals monitoring.</p>
    <p>Developed a fully <u>interactive computer system</u> with profiles, passwords, and logs.</p>
    <p>Generated and edited dialogue for the AI assistant.</p>
    <p>Designed and implemented immersive <u>sound design</u>.</p>
    <p>Polished visuals with <u>particle systems</u>, <u>custom shaders</u>, and <u>post-processing</u>.</p>
    `,
  },
  {
    id: "UNROOTED",
    title: "UNROOTED",
    thumbnail: { type: "image", src: "assets/img/portfolio/Unrooted/Thumbnail.png" },
    mainMedia: { type: "video", src: "assets/img/portfolio/Unrooted/Showcase.mp4" },
    gallery: [
      { type: "image", src: "assets/img/portfolio/Unrooted/Screenshot_1.gif" },
      { type: "image", src: "assets/img/portfolio/Unrooted/Screenshot_2.png" },
      { type: "image", src: "assets/img/portfolio/Unrooted/Screenshot_3.png" },
      { type: "image", src: "assets/img/portfolio/Unrooted/Screenshot_4.png" },
      { type: "image", src: "assets/img/portfolio/Unrooted/Screenshot_5.png" },
    ],
    tags: ["Game", "Unity", "Jam", "2nd"],
    shortDescription: `A PSX Inspired 3D FPS developed entirely in 48 hours for the KendirJam 2024, set in a collapsing world where the player is sent to appease the wrathful forest by shutting down fracking machine.`,
    description: `<h3><b><u>CONTEXT</u></b></h3>
    <p><b>KendirJam 2024 - 48 hours, team of 4</b></p>
    <p style="margin-top: -1rem;"><i>Themes: "Bloody Trees", "Fire" and "Emotions cause damage"</i></p>
    <p style="margin-top: -1rem;"><i>REFINED POST JAM</i></p>

    <h3><b><u>GAME</u></b></h3>
    <p><i>UNROOTED</i> is a 3D FPS inspired by PSX-era retro graphics and gameplay, set in a near-future where nature rises against humanity after the planet is harmed (literally bleeding).</p>

    <p>The player is tasked with appeasing nature by shutting down fracking machines, picking up trash, and putting out fires, all while defending against vengeful bleeding trees and minimizing collateral damage.</p>

    <p>At the end of the mission, players receive a score and commentary based on their performance.</p>

    <h3><b><u>CONTRIBUTIONS</u></b></h3>
    <p><u>Directed</u> the project and art direction as team lead.</p>
    <p>Implemented the <u>core gameplay loop</u>.</p>
    <p><u>Rigged</u> and <u>animated</u> enemies and machines.</p>
    <p>Built and textured the <u>terrain</u>.</p>
    <p>Developed the <u>player controls</u> and interactive tools.</p>
    <p>Implemented the <u>mini-map</u> displaying objectives and enemies.</p>
    <p>Worked extensively with the <u>Rendering Pipeline</u> to resolve layering and depth issues with post-processing effects, 3D interfaces, particle effects, and tool clipping.</p>
    <p>Polished visuals with <u>particle systems</u>, <u>custom shaders</u>, and <u>post-processing</u>.</p>
    `,
    link: "https://trashpandas-studios.itch.io/unrooted",
  },
  {
    id: "NightShift",
    title: "The Night Shift",
    thumbnail: { type: "image", src: "assets/img/portfolio/NightShift/Thumbnail.png" },
    mainMedia: { type: "video", src: "assets/img/portfolio/NightShift/Showcase.mp4" },
    gallery: [
      { type: "image", src: "assets/img/portfolio/NightShift/Screenshot_1.jpg" },
      { type: "image", src: "assets/img/portfolio/NightShift/Screenshot_2.jpg" },
      { type: "image", src: "assets/img/portfolio/NightShift/Screenshot_3.jpg" },
      { type: "image", src: "assets/img/portfolio/NightShift/Screenshot_4.jpg" },
      { type: "image", src: "assets/img/portfolio/NightShift/Screenshot_5.jpg" },
    ],
    tags: ["Game", "Unity", "Jam", "WebGL", "48h", "1st"],
    shortDescription: `A 3D local Co-Op survival horror game, developed entirely in 48 hours for the MAD Game Jam 2025. Players must coordinate to complete their tasks and face different foes until the end of their shift.`,
    description: `<h3><b><u>CONTEXT</u></b></h3>
    <p><b>MAD Game Jam 2025 - 48 hours, team of 5</b></p>
    <p style="margin-top: -1rem;"><i>Themes: "Marvelous Grotesque", "Elevator" and "Flash"</i></p>
    <p style="margin-top: -1rem;"><i>REFINED POST JAM</i></p>

    <h3><b><u>GAME</u></b></h3>
    <p><i>The Night Shift</i> is a 3D local Co-Op survival horror game located in a bizarre museum. The Janitor and Security must survive their shift, completing tasks with their abilities. The Janitor tidies expositions and cleans floors and toilets, while the Security Guard monitors, answers check-up calls, fixes cameras, and uses a flashlight and flashbang to survive the dark corridors.</p>

    <p>The players face 3 distinct enemies: one moves only when unseen, one latches onto players who stare too long, and one is guided solely by sound. When caught, the player is turned into a statue and can be rescued by their colleague.</p>

    <p>At the end of the shift, score/pay is deducted for each missed task.</p>

    <h3><b><u>CONTRIBUTIONS</u></b></h3>
    <p><u>Directed</u> the project and art direction as team lead.</p>
    <p>Implemented the <u>core gameplay loop</u>.</p>
    <p>Contributed to the implementation of the <u>local Co-Op mechanics</u>.</p>
    <p>Solved Co-Op related challenges with <u>creative solutions</u> (spatial sound and 3D space sprites).</p>
    <p>Developed the <u>AI</u> for the different enemies.</p>
    <p><u>Optimization</u> for <u>WebGL</u> port</p>
    <p>Polished visuals with <u>particle systems</u>, <u>lighting setup</u>, <u>custom shaders</u>, and <u>post-processing</u>.</p>
    `,
    link: "https://trashpandas-studios.itch.io",
  },
  {
    id: "CrushedDreams",
    title: "Crushed Dreams",
    thumbnail: { type: "image", src: "assets/img/portfolio/CrushedDreams/Thumbnail.png" },
    mainMedia: { type: "video", src: "assets/img/portfolio/CrushedDreams/Showcase.mp4" },
    gallery: [
      { type: "image", src: "assets/img/portfolio/CrushedDreams/Screenshot_1.png" },
      { type: "image", src: "assets/img/portfolio/CrushedDreams/Screenshot_2.png" },
      { type: "image", src: "assets/img/portfolio/CrushedDreams/Screenshot_3.png" },
      { type: "image", src: "assets/img/portfolio/CrushedDreams/Screenshot_4.png" },
      { type: "image", src: "assets/img/portfolio/CrushedDreams/Screenshot_5.png" },
    ],
    tags: ["Game", "Unity", "VR", "OpenXR", "Academic"],
    shortDescription: `An experimental VR experience with real-time painting and grading systems, testing the player's painting skills against an unforgiving AI overlord.`,
    description: `<h3><b><u>CONTEXT</u></b></h3>
    <p><b>Academic Project, Bachelor in Multimedia, 2024 - Team of 2</b></p>
    <p style="margin-top: -1rem;"><i>Exploring the artist's future in the age of Artificial Intelligence</i></p>

    <h3><b><u>GAME</u></b></h3>
    <p><i>Crushed Dreams</i> is an experimental VR experience that places the player in a factory where they must paint increasingly complex images under strict time constraints. Failure to meet the impossible standards results in the player being replaced by a cold machine.</p>
    <p>The project features <u>real-time painting mechanics</u> on a canvas with multiple tools, and a <u>rating system</u> that compares the player's submission to a reference, providing witty AI commentary.</p>

    <h3><b><u>CONTRIBUTIONS</u></b></h3>
    <p><u>Directed</u> the project as team lead.</p>
    <p><u>Designed</u> core <u>mechanics</u> and <u>narrative</u> structure of the experience.</p>
    <p>Implemented <u>VR mechanics and interfaces</u> using OpenXR.</p>
    <p>Developed the <u>real-time painting system</u> entirely from scratch.</p>
    <p>Programmed the <u>painting rating algorithm</u> for performance evaluation against references.</p>
    <p>Generated AI-driven voiced narration, later refined in <u>Reaper</u>.</p>
    <p>Polished visuals with <u>particle systems</u>, <u>lighting setup</u>, <u>custom shaders</u>, and <u>post-processing</u>.</p>
    `,
  },
  {
    id: "SweetStakes",
    title: "Sweet Stakes",
    thumbnail: { type: "image", src: "assets/img/portfolio/SweetStakes/Thumbnail.png" },
    mainMedia: { type: "video", src: "assets/img/portfolio/SweetStakes/Showcase.mp4" },
    gallery: [
      { type: "image", src: "assets/img/portfolio/SweetStakes/Screenshot_1.jpg" },
      { type: "image", src: "assets/img/portfolio/SweetStakes/Screenshot_2.png" },
      { type: "image", src: "assets/img/portfolio/SweetStakes/Screenshot_3.png" },
      { type: "image", src: "assets/img/portfolio/SweetStakes/Screenshot_4.png" },
      { type: "image", src: "assets/img/portfolio/SweetStakes/Screenshot_5.png" },
      { type: "image", src: "assets/img/portfolio/SweetStakes/Screenshot_6.png" },
    ],
    tags: ["Game", "Unity", "Jam", "WebGL"],
    shortDescription:
      "A 3D Bullet Heaven with roguelite elements developed entirely in 1 week for the Brackeys Game Jam 2025. The player defeats enemies and tests their own greed to leave the game-show with the biggest cookie.",
    description: `<h3><b><u>CONTEXT</u></b></h3>
    <p><b>Brackeys Game Jam 2025 - 1 week, team of 4</b></p>
    <p style="margin-top: -1rem;"><i>Theme: Risk it for the Biscuit</i></p>

    <h3><b><u>GAME</u></b></h3>
    <p><i>Sweet Stakes</i> is a 3D bullet-heaven roguelite set in a deadly game show where contestants battle waves of enemies and collect sugar to upgrade their arsenal and bake the ultimate cookie. 
    Each run features a new contestant and randomized events that tempt the player’s greed.</p>

    <h3><b><u>CONTRIBUTIONS</u></b></h3>
    <p><u>Directed</u> the project as team lead.</p>
    <p>Implemented the <u>UI</u> and UX flow.</p>
    <p>Designed and coded the <u>weapon system</u> (abilities, upgrading, equipping, etc.).</p>
    <p>Built the <u>stat upgrade</u> framework.</p>
    <p>Created the <u>random event</u> systems (stat cards and roulette mechanics).</p>
    <p>Implemented <u>random character generation</u>.</p>
    <p>Polished visuals using <u>particle systems</u> and <u>custom shaders</u>.</p>
    `,
    link: "https://trashpandas-studios.itch.io/sweet-stakes",
  },
  {
    id: "Jailbreaker",
    title: "JailBreaker",
    thumbnail: { type: "image", src: "assets/img/portfolio/Jailbreaker/Thumbnail.png" },
    mainMedia: { type: "video", src: "assets/img/portfolio/Jailbreaker/Showcase.mp4" },
    gallery: [
      { type: "image", src: "assets/img/portfolio/Jailbreaker/Screenshot_1.png" },
      { type: "image", src: "assets/img/portfolio/Jailbreaker/Screenshot_2.png" },
    ],
    tags: ["Game", "Unity", "Jam", "WebGL", "48h", "3rd"],
    shortDescription:
      "A 2.5D action platformer made in 48 hours for the MAD Game Jam 2024. Players crash the system by exploiting weaknesses while manipulating pop-ups as hazards or platforms.",
    description: `<h3><b><u>CONTEXT</u></b></h3>
    <p><b>MAD Game Jam 2024 - 48 hours, team of 3</b></p>
    <p style="margin-top: -1rem;"><i>Themes: Limited Space, Organization, Sex/Drugs/Rock'n'Roll</i></p>

    <h3><b><u>GAME</u></b></h3>
    <p>A 2.5D action platformer where players exploit system weaknesses to crash it. As corruption spreads, pop-ups spawn, crushing the player or serving as improvised platforms.</p>
     
    <h3><u><b>CONTRIBUTION</b></u></h3>
    <p></i><u>Directed</u> the project as team lead.</p>
    <p></i><u>Modeled</u> and <u>animated</u> the main character.</p>
    <p></i>Built the <u>core gameplay loop</u> (Pickups, screen shut down, death logic).</p>
    <p></i>Developed the <u>multi-screen system</u> using cameras and render textures.</p>
    <p></i>Implemented the pop-up spawning mechanics and visuals.</p>
    <p></i>Polished visuals with <u>particle systems</u> and <u>post-processing</u>.</p>
    <p></i>Created and animated tutorial post-its assets.</p>`,
    link: "https://trashpandas-studios.itch.io/jailbreaker",
  },
];
