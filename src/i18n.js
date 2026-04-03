import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Get saved language or detect browser language
const getDefaultLanguage = () => {
  const saved = localStorage.getItem("lang");
  if (saved) return saved;

  const browserLang = navigator.language?.toLowerCase();
  if (browserLang && browserLang.startsWith("en")) return "en";
  if (browserLang && browserLang.startsWith("nl")) return "nl";

  return "nl";
};

i18n
  .use(initReactI18next)
  .init({
    resources: {
      nl: {
        translation: {
          nav: {
            title: "Noah Verburg - Portfolio"
          },
          hero: {
            pre: "Smart Media professional ervaren met",
            highlight: "audiovisuele content & websites",
            blurb:
              "Mijn eerdere werk omvat het maken van podcasts, short‑form videos, social media posts en websites. Ik heb ook ervaring met het gebruiken van generatieve AI in het werkproces om de efficiëntie te verbeteren. Op deze website zijn een aantal projecten waar ik aan heb gewerkt te vinden."
          },
          actions: {
            seeProjects: "Bekijk projecten"
          },
          projects:{
            p1:{
              title: "Creative Inside",
              description: "Een B2B podcast geproduceerd voor het bedrijf LINDSMA. Dit was mijn afstudeeropdracht, nadat ik eerder bij hun stage had gelopen. Voor dit project heb ik scripts geschreven, de branding ontworpen, een intro geanimeerd, afleveringen opgenomen en deze gepubliceerd. Ik heb ook de podcast studio voor LINDSMA gemaakt, door de apparatuur uit te kiezen en het meubilair en muur panelen opzetten.",
              linklabel: "Bekijken"
            },
            p2:{
              title: "Ra Ra Wie Ben Ik?",
              description: "Samen met een team heb ik tijdens mijn opleiding een gameshow podcast geproduceerd. Tijdens het maken van de podcast wilden we kijken hoe we AI op een goede manier konden gebruiken om het maakproces te versnellen. In het eindproduct hebben wij de jingles gemaakt met de Suno AI music generator en Lovable AI website maker voor de website. Ik was de editor van de derde aflevering en ik heb ook de intro- en overgangsanimaties gemaakt met Adobe After Effects.",
              linklabel: "Bekijken"
            },
            p3:{
              title: "Weijman 24 uur Challenge",
              description: "Tijdens mijn stage bij LINDSMA kreeg ik de opdracht om een website te maken voor Weijman, een van hun klanten. De website moest functioneren als het inschrijfformulier voor de Weijman 24 uur challenge. Ik had verschillende iteraties ontworpen van de opmaak, waarvan er een uiteindelijk goedgekeurd werd door zowel mijn stagebegeleider als de vertegenwoordiger van Weijman. Ik heb vooral gewerkt met Photoshop voor de visuele vormgeving en de website zelf gemaakt in WIX Studio.",
              linklabel: "Bezoeken"
            },
            p4:{
              title: "Social Media & Content Marketing stage",
              description: "In het begin van 2025 heb ik 3 maanden stage gelopen bij LINDSMA (voor de rebranding bekend als LindenSteensma). Gedurende deze stage heb ik aan veel verschillende vormen van content gewerkt, zoals Photoshop templates maken/opschonen, posts maken met deze templates, video's editen, kleurcorrectie uitvoeren op foto's en meer. De ervaringen die ik tijdens deze stage heb opgedaan waren essentieel voor mijn ontwikkeling als mediaprofessional en de kwaliteit van mijn werk.",
              linklabel: "Voorbeelden"
            },
            p5:{
              title: "Knuffelavonturen",
              description: "Dit is een aflevering van een kindershow die ik heb ontworpen voor een opdracht van mijn opleiding. De doelgroep van deze kindershow bestaat uit de patiënten van het Emma Kinderziekenhuis. Ik begon met het concept van de show uitwerken, namelijk knuffels die op fantasieavonturen gaan, en vervolgens heb ik de karakters gemaakt en het script geschreven. Bij het schrijven van het script heb ik gewerkt met ChatGPT om te brainstormen. Daarna heb ik de aflevering zelf geproduceerd door een combinatie te gebruiken van afbeeldingen genereren in Leonardo AI voor consistentie, deze animeren met Kling AI en tenslotte heb ik de stemmen zelf ingesproken en Elevenlabs gebruikt om verschillende stemmen van mijn opnames te maken. Toen heb ik alles tot 1 video verwerkt met Premiere Pro.",
              linklabel1: "Bekijken",
              linklabel2: "10 pager"
            },
            p6:{
              title: "AKHI gym",
              description: "Voor een opdracht van mijn opleiding moest een website maken. Hiervoor heb ik de eigenaar van AKHI gym benaderd, die mij vertelde dat hij zijn website gemoderniseerd zou willen. Ik heb marktonderzoek gedaan, websites van concurerende sportscholen geanalyseerd en de wensen en eisen van de eigenaar genoteerd (de belangrijkste eis was een reserveringssysteem om lessen te boeken). Vervolgens heb ik de website met WIX Studio gemaakt en aan de klant gepresenteerd, met een zeer tevreden reactie.",
              linklabel: "Bezoeken"
            }
          },
          sections: {
            projects: "Projecten",
            about: "Over mij",
            contact: "Contact"
          },
          about: {
            blurb1: "Hoi, ik ben Noah! Ik ben afgestudeerd aan de opleiding Smart Media Production van de Hogeschool van Amsterdam en ik vind het leuk om content te produceren, zowel het opnemen als het editen ervan. Op deze opleiding heb ik vanaf het begin geleerd hoe ik generatieve AI kan integreren in het traditionele werkproces om efficiënter en beter media te kunnen produceren.",
            blurb2: "Ik hou van het universum en laat dat graag terugkomen in mijn creatieve uitingen. In mijn vrije tijd speel ik graag video games, ik speel badminton en ik kijk gevarieerde content op YouTube, om te leren of als entertainment.",
            tag1: "Media Professional",
            tag2: "Universum Fanaat",
            tag3: "Geek",
            tag4: "Sportliefhebber"
          }
        }
      },
      en: {
        translation: {
          nav: {
            title: "Noah Verburg - Portfolio"
          },
          hero: {
            pre: "Smart Media professional crafting ",
            highlight: "audiovisual content & websites ",
            post: "content.",
            blurb:
              "My previous work includes making podcasts, short-form videos, social media posts and websites. I'm also experienced with using generative AI in my workflow to improve efficiency. On this website you can find a selection of my previous work."
          },
          actions: {
            seeProjects: "See projects"
          },
          projects:{
            p1:{
              title: "Creative Inside",
              description: "A B2B podcast produced for the social media agency LINDSMA. This was my graduation project, after I did my internship at this company. For this project I wrote the scripts, designed the branding, animated the intro, recorded and edited the episodes, and finally publicized them. I also made the podcast studio for LINDSMA, by selecting the appropriate equipment and setting up the furniture and wall panels.",
              linklabel: "Watch"
            },
            p2:{
              title: "Ra Ra Wie Ben Ik?",
              description: "During my University course I worked with a team to produce a gameshow podcast. On of the core goals during this project was to find ways to use AI to improve the efficiency of the process. We ended up using the Suno AI music generator to create the jingles and the Lovable AI website maker to create the website. I personally edited the third episode of the podcast and I was the one who created the intro- and transition animations with Adobe After Effects.",
              linklabel: "Watch"
            },
            p3:{
              title: "Weijman 24 hour Challenge",
              description: "During my internship at LINDSMA I was assigned to make a website for Weijman, one of their customers. The website whad to function as the registration form for the Weijman 24 hour challenge. I designed several iterations of the layout, after which I got the green light to move ahead with the final one. I mainly worked in Photoshop for the visual designs and I made the website with WIX Studio.",
              linklabel: "Visit"
            },
            p4:{
              title: "Social media & Content Marketing internship",
              description: "In the beginning of 2025 I completed a 3-month internship at Lindsma (known as LindenSteensma before their rebranding). During this internship I worked on many different forms of content, like making/cleaning up Photoshop templates, making posts with these templates, editing video's, performing colour correction on photos and more. The experiences I gained during this internship were essential for my development as a mediaprofessional and for the quality of my work.",
              linklabel: "Examples"
            },
            p5:{
              title: "Knuffelavonturen",
              description: "This is an episode from a Kids TV show that I designed for an assignment from my course. The target audience of this show consists of the patients from the Emma Children's Hospital. I started by working out the concept of theshow, this being stuffed animals going on fantasy adventures, and I then designed the characters and wrote the script for this episode. During the writing of the script I made use of ChatGPT to brainstorm. After that I produced the episode itself by using a combination of generating images in Leonardo AI for consistency, animating those images with Kling AI and at last I voiced al the characters myself, by using ElevenLabs to change my recordings into different voices. I then edited everything together with Premiere Pro.",
              linklabel1: "Watch",
              linklabel2: "10 pager"
            },
            p6:{
              title: "AKHI gym",
              description: "One assignment from my course was to make a website. For this assignment I approached the owner of AKHI gym, who let me know that he wanted his website to be modernised. I did marketresearch, analyzed websites from competing gyms and got a grasp of the wishes and demands from the owner (the most important demand was a reservation system to book lessons). After then making the website with WIX Studio, I presented it to the owner who let me know he was very satisfied with the result.",
              linklabel: "Visit"
            }
          },
          sections: {
            projects: "Projects",
            about: "About me",
            contact: "Contact"
          },
          about: {
            blurb1: "Hi, I'm Noah! I graduated from the Smart Media Production course at the Amsterdam University of Applied Sciences and I like producing content, both the recording as well as the editing of it. On this course I learned from the very beginning how to integrate generative AI in the traditional workprocess to produce media better and more efficiently.",
            blurb2: "I love the universe and love showing that in my creative expressions. In my free time I like playing video games, I play badminton and I watch a variety of content on YouTube, educational as well as entertainment.",
            tag1: "Media Professional",
            tag2: "Universe Fan",
            tag3: "Geek",
            tag4: "Sportsman"
          }
        }
      }
    },

    lng: getDefaultLanguage(), // default language
    fallbackLng: "en",

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
