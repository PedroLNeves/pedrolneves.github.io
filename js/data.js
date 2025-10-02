const highlights = ["SweetStakes", "portfolioModal1", "portfolioModal2"];
const games = ["Jailbreaker", "portfolioModal3", "portfolioModal4"];
const other = ["portfolioModal5", "portfolioModal6"];

const portfolioItems = [
  {
    id: "Jailbreaker",
    title: "JailBreaker",
    thumbnail: { type: "image", src: "assets/img/portfolio/Jailbreaker/Thumbnail.png" },
    mainMedia: { type: "video", src: "assets/img/portfolio/Jailbreaker/Showcase.mp4" },
    gallery: [
      { type: "image", src: "assets/img/portfolio/Jailbreaker/Screenshot_1.png" },
      { type: "image", src: "assets/img/portfolio/Jailbreaker/Screenshot_2.png" },
    ],
    tags: ["Game", "Unity", "WebGL", "Jam", "48h", "3rd"],
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
  {
    id: "SweetStakes",
    title: "Sweet Stakes",
    thumbnail: { type: "image", src: "assets/img/portfolio/SweetStakes/Thumbnail.png" },
    mainMedia: { type: "video", src: "assets/img/portfolio/video_placeholder.mp4" },
    gallery: [
      { type: "image", src: "assets/img/portfolio/SweetStakes/Screenshot_1.jpg" },
      { type: "image", src: "assets/img/portfolio/SweetStakes/Screenshot_2.png" },
      { type: "image", src: "assets/img/portfolio/SweetStakes/Screenshot_3.png" },
      { type: "image", src: "assets/img/portfolio/SweetStakes/Screenshot_4.png" },
      { type: "image", src: "assets/img/portfolio/SweetStakes/Screenshot_5.png" },
      { type: "image", src: "assets/img/portfolio/SweetStakes/Screenshot_6.png" },
    ],
    tags: ["Game", "Unity", "WebGL", "Jam"],
    shortDescription:
      "Sweet Stakes is a 3D Bullet Heaven with roguelite elements developed entirely in 1 week for the Brackeys Game Jam 2025",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
  },
  {
    id: "portfolioModal1",
    title: "Log Cabin",
    thumbnail: { type: "image", src: "assets/img/portfolio/cabin.png" },
    mainMedia: { type: "image", src: "assets/img/portfolio/cabin.png" },
    gallery: [
      { type: "image", src: "assets/img/portfolio/cabin.png" },
      { type: "image", src: "assets/img/portfolio/cake.png" },
      { type: "image", src: "assets/img/portfolio/submarine.png" },
    ],
    shortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent egestas enim a dui pulvinar egestas. Pellentesque accumsan consequat odio, vitae eleifend sapien tempor vel. Curabitur varius sapien quis elementum sollicitudin.",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
  },
  {
    id: "portfolioModal2",
    title: "Tasty Cake",
    thumbnail: { type: "image", src: "assets/img/portfolio/cake.png" },
    mainMedia: {
      type: "video",
      src: "assets/img/portfolio/video_placeholder.mp4",
    },
    gallery: [
      { type: "image", src: "assets/img/portfolio/cake.png" },
      { type: "image", src: "assets/img/portfolio/circus.png" },
    ],
    shortDescription: "Lorem Ipsum",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
  },
  {
    id: "portfolioModal3",
    title: "Circus Tent",
    thumbnail: { type: "image", src: "assets/img/portfolio/circus.png" },
    mainMedia: { type: "image", src: "assets/img/portfolio/circus.png" },
    gallery: [
      { type: "image", src: "assets/img/portfolio/circus.png" },
      { type: "image", src: "assets/img/portfolio/game.png" },
      { type: "image", src: "assets/img/portfolio/safe.png" },
      { type: "image", src: "assets/img/portfolio/submarine.png" },
    ],
    shortDescription: "Lorem Ipsum",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
  },
  {
    id: "portfolioModal4",
    title: "Controller",
    thumbnail: { type: "image", src: "assets/img/portfolio/game.png" },
    mainMedia: { type: "image", src: "assets/img/portfolio/game.png" },
    gallery: [
      { type: "image", src: "assets/img/portfolio/game.png" },
      { type: "image", src: "assets/img/portfolio/cake.png" },
    ],
    shortDescription: "Lorem Ipsum",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
  },
  {
    id: "portfolioModal5",
    title: "Locked Safe",
    thumbnail: { type: "image", src: "assets/img/portfolio/safe.png" },
    mainMedia: {
      type: "video",
      src: "assets/img/portfolio/video_placeholder.mp4",
    },
    gallery: [
      { type: "image", src: "assets/img/portfolio/safe.png" },
      { type: "image", src: "assets/img/portfolio/cabin.png" },
      { type: "image", src: "assets/img/portfolio/game.png" },
    ],
    shortDescription: "Lorem Ipsum",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
  },
  {
    id: "portfolioModal6",
    title: "Submarine",
    thumbnail: { type: "image", src: "assets/img/portfolio/submarine.png" },
    mainMedia: { type: "image", src: "assets/img/portfolio/submarine.png" },
    gallery: [
      { type: "video", src: "assets/img/portfolio/video_placeholder.mp4" },
      { type: "image", src: "assets/img/portfolio/submarine.png" },
      { type: "image", src: "assets/img/portfolio/circus.png" },
      { type: "image", src: "assets/img/portfolio/cake.png" },
      { type: "image", src: "assets/img/portfolio/safe.png" },
    ],
    shortDescription: "Lorem Ipsum",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
  },
];
