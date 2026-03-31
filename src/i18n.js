import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Get saved language or detect browser language
const getDefaultLanguage = () => {
  const saved = localStorage.getItem("lang");
  if (saved) return saved;

  const browserLang = navigator.language?.toLowerCase();
  if (browserLang && browserLang.startsWith("nl")) return "nl";

  return "en";
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
            pre: "Smart Media professional die ",
            highlight: "audio, video & interactieve ",
            post: "content maakt.",
            blurb:
              "Mijn eerdere werk omvat het maken van podcasts, short‑form videos, social media posts en websites. Hieronder zie je een selectie van projecten waar ik aan heb gewerkt."
          },
          actions: {
            seeProjects: "Bekijk projecten"
          },
          projects:{
            p1:{
              title: "Creative Inside - Podcast",
              description: "Een B2B podcast geproduceerd voor het bedrijf LINDSMA. Dit was mijn afstudeeropdracht, nadat ik eerder bij hun stage had gelopen. Voor dit project heb ik scripts geschreven, de branding ontworpen, afleveringen opgenomen en deze gepubliceerd. Ik heb ook de podcast studio voor LINDSMA gemaakt, door de apparatuur uit te kiezen en het meubilair en muur panelen opzetten.",
              linklabel: "Bekijken"
            },
            p2:{
              title: "AKHI gym - Website",
              description: "Voor een opdracht van mijn opleiding moest een website maken. Hiervoor heb ik de eigenaar van AKHI gym benaderd, die mij vertelde dat hij zijn website gemoderniseerd zou willen. Ik heb marktonderzoek gedaan, websites van concurerende sportscholen geanalyseerd en de wensen en eisen van de eigenaar genoteerd (de belangrijkste eis was een reserveringssysteem om lessen te boeken). Vervolgens heb ik de website met WIX Studio gemaakt en aan de klant gepresenteerd, met een zeer tevreden reactie.",
              linklabel: "Bezoeken"
            },
            p3:{
              title: "",
              description: "",
              linklabel: ""
            },
            p4:{
              title: "",
              description: "",
              linklabel: ""
            },
            p5:{
              title: "",
              description: "",
              linklabel: ""
            },
            p6:{
              title: "",
              description: "",
              linklabel: ""
            }
          },
          sections: {
            projects: "Projecten",
            about: "Over mij",
            contact: "Contact"
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
            highlight: "audio, video & interactive ",
            post: "content.",
            blurb:
              "My previous work includes making podcasts, short-form videos, social media posts and websites. Below is a curated selection of my work."
          },
          actions: {
            seeProjects: "See projects"
          },
          projects:{
            p1:{
              title: "Creative Inside - Podcast",
              description: "A B2B podcast produced for the social media agency LINDSMA. This was my graduation project, after I did my internship at this company. For this project I wrote the scripts, designed the branding, recorded and edited the episodes, and finally publicized them. I also made the podcast studio for LINDSMA, by selecting the appropriate equipment and setting up the furniture and wall panels.",
              linklabel: ""
            },
            p2:{
              title: "AKHI gym - Website",
              description: "One assignment from my course was to make a website. For this assignment I approached the owner of AKHI gym, who let me know that he wanted his website to be modernised. I did marketresearch, analyzed websites from competing gyms and got a grasp of the wishes and demands from the owner (the most important demand was a reservation system to book lessons). After then making the website with WIX Studio, I presented it to the owner who let me know he was very satisfied with the result.",
              linklabel: ""
            },
            p3:{
              title: "",
              description: "",
              linklabel: ""
            },
            p4:{
              title: "",
              description: "",
              linklabel: ""
            },
            p5:{
              title: "",
              description: "",
              linklabel: ""
            },
            p6:{
              title: "",
              description: "",
              linklabel: ""
            }
          },
          sections: {
            projects: "Projects",
            about: "About me",
            contact: "Contact"
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
