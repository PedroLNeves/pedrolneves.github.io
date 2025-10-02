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
      "Jailbreaker is a 2.5D Action Platformer, developed entirely in 48 hours for the MadJam 2024, where you can manipulate annoying pop-ups as platforms",
    description: `This game was entirely developed in <u>48 hours</u> for the MAD Game Jam 2024 with a <u>team of 3</u>, the themes were gradually introduced as follows: "<u>Limited Space</u>", "<u>Organization</u>" and "<u>Sex Drugs OR Rock'n'Roll</u>"
      <p>In this 2.5D Action Platformer the player has to find weaknesses on the system to gradually crash it until it shuts down entirely</p>
      <p>As the system gets corrupted more and more annoying pop-ups appear, these can crush the player, or be manipulated as platforms to reach the goal</p>
      <p><u><b>In this project I tackled the following roles:</b></u></p>
      <p>-<u>Directing</u> the project as group leader.</p>
      <p>-<u>Modelling</u> and <u>animating</u> the playable character.</p>
      <p>-Implementing the <u>core loop</u> of the game (Pickups, screens shutting down, death...).</p>
      <p>-Developing the <u>multi-screen system</u> via cameras and render textures.</p>
      <p>-Coding the pop-up spawning logic and associated visuals.</p>
      <p>-Polishing the visuals with <u>particle systems</u> and <u>Post Processing</u>.</p>
      <p>-Modelling, texturing and animating the tutorial post-its.</p>`,
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
    tags: ["Game", "Unity", "Jam"],
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
