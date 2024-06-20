const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector(".mobile-menu");

menuButton.addEventListener("click", () => {
  if (menu.style.opacity === "1") {
    menu.style.opacity = "0";
    menu.style.pointerEvents = "none";
  } else {
    menu.style.opacity = "1";
    menu.style.pointerEvents = "all";
  }
});

new Swiper(".nos-formation-swiper", {
  slidesPerView: 1,
  spaceBetween: 20,

  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  loop: true,
  speed: 750,

  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },

  navigation: {
    nextEl: ".nos-formation-swiper-button-next",
    prevEl: ".nos-formation-swiper-button-prev",
    disabledClass:
      "swiper-button-disabled opacity-50 cursor-not-allowed hover:bg-seashell",
  },
});

function handleSlideChange(n) {
  return function () {
    const endSlide = this.activeIndex === n;

    console.log(this.activeIndex);
    if (endSlide) {
      // Disable the navigation button
      this.navigation.nextEl.classList.add(
        "swiper-button-disabled",

        "opacity-50",
        "cursor-not-allowed"
      );
      this.allowSlideNext = false;
    } else {
      // Enable the navigation button
      this.navigation.nextEl.classList.remove(
        "swiper-button-disabled",
        "opacity-50",
        "cursor-not-allowed"
      );
      this.allowSlideNext = true;
    }
  };
}

// --- tags ---
new Swiper(".debouchee-tags-swiper", {
  slidesPerView: "auto",
  spaceBetween: 10,
  centerSlides: true,
  on: {
    slideChange: handleSlideChange(9),
  },
  breakpoints: {
    250: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 2,
    },
    1225: {
      slidesPerView: 3,
    },
    1440: {
      slidesPerView: 3,
    },
    1500: {
      slidesPerView: 4,
      on: {
        slideChange: handleSlideChange(8),
      },
    },
  },

  navigation: {
    nextEl: ".debouchee-tags-swiper-button-next",
    prevEl: ".debouchee-tags-swiper-button-prev",
    disabledClass:
      "swiper-button-disabled opacity-50 cursor-not-allowed hover:bg-seashell",
  },
});

// --- tags ---
const tagButtons = [
  {
    title: "La Réalisation cinématographique",
    description:
      "La réalisation cinématographique est l'art de « rendre l’invisible visuel », en transformant un scénario en film à travers la direction des acteurs, le choix des décors, et la gestion de l'équipe technique. Le réalisateur supervise chaque étape, de la préproduction à la post-production, en équilibrant vision artistique et compétences techniques. Ce rôle exige créativité, leadership et résolution de problèmes pour livrer une œuvre cinématographique cohérente et engageante.",
  },
  {
    title: "L’Écriture de scénarios",
    description:
      "L'écriture de scénarios consiste à créer le récit et les dialogues d'un film. Elle implique le développement de personnages, de trames narratives, et de structures dramatiques. Le scénariste doit savoir captiver et émouvoir le public, tout en respectant les contraintes techniques du cinéma. Ce rôle nécessite créativité, compréhension des techniques de narration et collaboration avec le réalisateur et les producteurs.",
  },
  {
    title: "La Production",
    description:
      "La production cinématographique englobe la planification, le financement et la gestion logistique d'un film. Le producteur coordonne les aspects créatifs et techniques, assure la gestion du budget, et supervise l'ensemble du projet du début à la fin. Ce rôle crucial nécessite des compétences en organisation, en négociation et en résolution de problèmes pour garantir que le film soit réalisé dans les délais et les limites budgétaires.",
  },
  {
    title: "La Cinématographie",
    description:
      "La cinématographie est l'art de capturer les images d'un film à travers l'utilisation de la caméra et l'éclairage. Le directeur de la photographie travaille en étroite collaboration avec le réalisateur pour créer l'esthétique visuelle du film, en choisissant les angles de prise de vue, les mouvements de caméra et les techniques d'éclairage appropriées. Ce rôle requiert une expertise technique et un sens artistique pour traduire la vision du réalisateur en images saisissantes et cohérentes.",
  },
  {
    title: "L’Ingénierie du Son",
    description:
      "L'ingénierie du son dans le cinéma implique la capture, le mixage et la manipulation des éléments sonores d'un film. L'ingénieur du son enregistre les dialogues, les effets sonores et l'ambiance sur le plateau, puis les peaufine en post-production pour créer une bande sonore immersive. Ce rôle nécessite des compétences techniques en utilisation d'équipements audio, une oreille attentive aux détails et la capacité à collaborer étroitement avec le réalisateur et le monteur pour soutenir la narration visuelle.",
  },
  {
    title: "Le Sound Design",
    description:
      "Le sound design consiste à créer et à intégrer les éléments sonores qui enrichissent l'expérience auditive d'un film. Le sound designer travaille à la conception des effets sonores, des ambiances, et parfois même de la musique, pour renforcer l'émotion et la narration visuelle. Ce rôle exige créativité, sensibilité auditive et compétences techniques en manipulation audio, ainsi qu'une collaboration étroite avec le réalisateur et l'ingénieur du son pour produire une bande sonore cohérente et immersive.",
  },
  {
    title: "Le Montage",
    description:
      "Le montage est le processus de sélection et d'assemblage des prises de vue pour créer une narration fluide et cohérente. Le monteur travaille avec le réalisateur pour déterminer le rythme du film, choisir les meilleures performances et assurer la continuité visuelle et sonore. Ce rôle exige une sensibilité artistique, une compréhension technique des logiciels de montage et une capacité à raconter une histoire de manière engageante et émotionnelle.",
  },
  {
    title: "Les Effets Spéciaux",
    description:
      "Les effets spéciaux englobent les techniques visuelles et pratiques utilisées pour créer des éléments irréalistes ou fantastiques dans un film. Ils peuvent inclure des effets physiques sur le plateau, des maquettes, et des effets numériques créés en post-production. Les spécialistes des effets spéciaux collaborent avec le réalisateur pour concevoir et intégrer ces éléments, nécessitant créativité, compétences techniques et une compréhension approfondie des technologies de pointe pour rendre l'illusion crédible et immersive.",
  },
  {
    title: "La Distribution de films",
    description:
      "La distribution de films consiste à gérer la diffusion d'un film auprès du public via divers canaux, tels que les salles de cinéma, les plateformes de streaming, et les supports physiques. Les distributeurs élaborent des stratégies marketing, négocient avec les exploitants de salles et les plateformes, et organisent des avant-premières pour maximiser la visibilité et les revenus du film. Ce rôle requiert une compréhension approfondie du marché, des compétences en négociation et en marketing, ainsi qu'une capacité à s'adapter aux évolutions technologiques et aux préférences du public.",
  },
  {
    title: "La Programmation de salles de cinéma",
    description:
      "La programmation de salles de cinéma implique la sélection et l'organisation des films projetés dans une salle ou un complexe de cinémas. Le programmateur analyse les tendances du marché, les préférences locales et les sorties de films pour créer une programmation attrayante et variée. Ce rôle nécessite une connaissance approfondie du cinéma, des compétences en marketing, et une capacité à négocier avec les distributeurs pour obtenir les meilleurs films possibles. L'objectif est d'attirer un large public et d'optimiser la fréquentation des salles.",
  },
  {
    title: "L’Organisation de festivals",
    description:
      "L'organisation de festivals de cinéma implique la planification, la gestion et la promotion d'événements cinématographiques qui célèbrent et diffusent des films de divers genres. Les organisateurs sélectionnent les films, coordonnent les projections, invitent les cinéastes et les acteurs, et gèrent la logistique des événements. Ce rôle requiert des compétences en gestion de projet, en marketing, et en relations publiques, ainsi qu'une passion pour le cinéma et la culture. L'objectif est de créer une expérience enrichissante pour le public, de promouvoir les films sélectionnés et de favoriser les échanges entre professionnels du cinéma.",
  },
  {
    title: "La Critique cinématographique",
    description:
      "La critique cinématographique consiste à analyser et à évaluer les films, en fournissant des commentaires sur divers aspects tels que l'intrigue, la réalisation, les performances des acteurs, et la qualité technique. Les critiques cinématographiques publient leurs analyses dans des journaux, des magazines, des blogs ou des émissions de télévision, influençant ainsi les perceptions du public et le succès commercial des films. Ce rôle nécessite une connaissance approfondie du cinéma, des compétences en écriture et en analyse, ainsi qu'une capacité à formuler des opinions éclairées et constructives.",
  },
  {
    title: "Le Journalisme spécialisé",
    description:
      "Le journalisme spécialisé dans le cinéma couvre l'actualité et les tendances de l'industrie cinématographique. Les journalistes spécialisés rédigent des articles, des critiques, et des reportages sur les films, les festivals, les acteurs, et les réalisateurs. Ce rôle exige une connaissance approfondie du cinéma, des compétences en écriture et en recherche, et une capacité à analyser les tendances de l'industrie. Les journalistes spécialisés influencent les opinions du public et contribuent à la diffusion culturelle du cinéma.",
  },
  {
    title: "L’Enseignement et la Recherche en cinéma",
    description:
      "L'enseignement et la recherche en cinéma englobent la formation académique et professionnelle des futurs cinéastes, ainsi que l'étude approfondie des théories et des pratiques cinématographiques. Les enseignants transmettent des connaissances sur l'histoire, la théorie, et la technique du cinéma, tandis que les chercheurs explorent de nouveaux domaines, publient des articles et participent à des conférences. Ce domaine nécessite une solide formation académique, des compétences pédagogiques, et un engagement à promouvoir l'innovation et la réflexion critique sur le cinéma.",
  },
  {
    title: "L’Animation",
    description:
      "L’animation consiste à créer des images en mouvement par des techniques telles que le dessin, la modélisation 3D, et l’animation en stop-motion. Les animateurs développent des personnages et des scènes qui prennent vie à l’écran, collaborant avec les réalisateurs et les scénaristes pour raconter des histoires visuellement captivantes. Ce domaine nécessite des compétences artistiques, une maîtrise des logiciels d’animation et une capacité à travailler minutieusement pour créer des séquences fluides et expressives.",
  },
  {
    title: "Le Développement de Jeux de Gaming",
    description:
      "Le développement de jeux de gaming implique la création de jeux vidéo à travers la conception, la programmation, l'animation, et le test de gameplay. Les développeurs travaillent en équipes multidisciplinaires, incluant des concepteurs, des artistes, des programmeurs et des testeurs, pour produire des expériences interactives captivantes. Ce domaine exige des compétences techniques en programmation, une créativité pour le design de jeu, et une capacité à collaborer efficacement pour créer des jeux innovants et engageants.",
  },
  {
    title: "La Direction Artistique",
    description:
      "La direction artistique consiste à définir et à superviser l'esthétique visuelle d'un film, d'une série ou d'une production multimédia. Le directeur artistique collabore avec les designers, les décorateurs et les costumiers pour créer un univers visuel cohérent et captivant qui soutient la narration. Ce rôle nécessite des compétences en design, une connaissance des techniques de  construction et une attention aux détails pour créer des décors immersifs et crédibles qui soutiennent la narration visuelle.",
  },
];

// Create tag buttons
const tagSwiperWrapper = document.querySelector(
  ".debouchee-tags-swiper .swiper-wrapper"
);
tagSwiperWrapper.innerHTML = `
    ${tagButtons.map((tag, index) => {
      return `
              <button
                  class="swiper-slide !w-auto transition-all duration-200 hover:bg-linen hover:text-chocolate-200 rounded-81xl box-border flex flex-col items-center justify-center py-[5px] px-[11px] border-[3px] border-solid border-gray-900 relative tracking-[-0.02em] leading-[36px] uppercase font-medium"
              >
                  ${tag.title}
              </button>
              `;
    })}
`.replace(/,/g, "");

// Set the first tag button as active
tagSwiperWrapper
  .querySelectorAll("button")[0]
  .classList.add("bg-linen", "text-chocolate-200");
const tagDescription = document.querySelector(".tag-content");
tagDescription.querySelector("h3").textContent = tagButtons[0].title;
tagDescription.querySelector("p").textContent = tagButtons[0].description;

// Add event listeners to tag buttons
tagSwiperWrapper.querySelectorAll("button").forEach((button, index) => {
  button.addEventListener("click", () => {
    tagSwiperWrapper.querySelectorAll("button").forEach((button) => {
      button.classList.remove("bg-linen", "text-chocolate-200");
    });

    button.classList.add("bg-linen", "text-chocolate-200");

    const tagDescription = document.querySelector(".tag-content");
    tagDescription.querySelector("h3").textContent = tagButtons[index].title;
    tagDescription.querySelector("p").textContent =
      tagButtons[index].description;
  });
});
