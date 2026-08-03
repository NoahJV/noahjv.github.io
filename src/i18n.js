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
            pre: "Noah Verburg, een Smart Media professional ervaren met",
            highlight: "audiovisuele content & websites",
            blurb:
              "Mijn eerdere werk omvat het maken van podcasts, short‑ en long-form videos, social media posts en websites. Nieuwsgierig? Neem gerust een kijkje naar mijn eerdere projecten hieronder!"
          },
          actions: {
            seeProjects: "Bekijk projecten"
          },
          projects:{
            filter: "Filter op",
            p1:{
              title: "Creative Inside",
              description: "Een B2B podcast geproduceerd voor het bedrijf LINDSMA. Dit was mijn afstudeeropdracht, nadat ik eerder bij hun stage had gelopen. Voor dit project heb ik scripts geschreven, de branding ontworpen, een intro geanimeerd, afleveringen opgenomen en deze gepubliceerd. Ik heb ook de podcast studio voor LINDSMA gemaakt, door de apparatuur uit te kiezen en het meubilair en muur panelen opzetten.\n \n Dit project had 2 hoofddoelen; de naamsbekendheid van LINDSMA vergroten om nieuwe klanten te verwerven, en een studio opzetten voor LINDSMA voor toekomstige projecten. Hoewel de studio zelf een succes was en aan het eind van het project klaar was voor toekomstige projecten, vielen de resultaten van de podcast zelf tegen. Het was niet gelukt om een groot publiek te bereiken met de afleveringen, die relatief bescheiden bleven in de kijk- en luistercijfers. Ik kwam zelf wel mensen tegen die me lieten weten de podcast te hadden gezien en het gaaf vonden, maar dit was niet het beoogde doel. De twee redenen daarvoor waren als volgt; Ik had veel meer marketing materiaal kunnen maken voor het posten, en LINDSMA stond zelf ook niet pal achter het product. De eigenaren van LINDSMA wilden de podcast niet posten op hun socials, wat vooral te maken had met de ongelukkige (voor mij) timing van de rebranding van het bedrijf. De aflevering waren opgenomen voor de rebranding live ging, onder de oude titel van het bedrijf: LindenSteensma. \n \n Reflectie: \n Ik heb veel van dit project geleerd. Zo weet ik nu dat ik in de toekomst aanzienlijk meer budget en tijd moet spenderen aan de marketing van dit soort projecten. Ik had ook meer vooruitziend kunnen werken met de rebranding, maar aangezien het publiceren van de afleveringen tijdens mijn afstudeerperiode moest gebeuren (voor de rebranding van het bedrijf) kon ik daar niet veel aan doen in dit geval. \n Ik heb ook veel geleerd over het opnemen en editten van afleveringen. Zo is het beter om meer camera's te hebben voor verschillende hoeken afhankelijk van wie er praat, en is het handig om presets te hebben voor afleveringen zowel met als zonder beeld, want het is voorgekomen dat ik een aflevering wilde opnemen maar de camera apparatuur van LINDSMA niet beschikbaar was.",
              linklabel: "Bekijken"
            },
            p2:{
              title: "Ra Ra Wie Ben Ik?",
              description: "Samen met een team heb ik tijdens mijn opleiding een gameshow podcast geproduceerd. Tijdens het maken van de podcast wilden we kijken hoe we AI op een goede manier konden gebruiken om het maakproces te versnellen. In het eindproduct hebben wij de jingles gemaakt met de Suno AI music generator en Lovable AI website maker voor de website. Ik was de editor van de derde aflevering en ik heb ook de intro- en overgangsanimaties gemaakt met Adobe After Effects. \n \n Dit project had 2 doelen; Het bedenken van een goed, origineel concept voor een podcast, en dan dat idee uitwerken tot een goede podcast. Het concept en onze uitwerking van dat concept werden beoordeeld door onze docenten maar ook door professionals vanuit het werkveld. Daarbij kregen we als grootste verbeterpunt dat wij wat wilder mochten denken in ons concept. Wij hadden als concept bedacht dat een AI een karakter, film of beroemdheid in gedachten zou nemen en dat wij dat dan zouden moeten raden. In de praktijk bleek dat niet erg goed te werken omdat de AI verkeerde info gaf en verkeerde informatie hallucineerde, dus hebben wij het concept veranderd naar dat een van de hosts dat zelf deed. Helaas veranderde dat het originele concept in een 'veilig' en 'saai' concept. De uitwerking was dus uiteindelijk wel gelukt, met alles wat een podcast nodig zou hebben, maar vooral de inhoud had beter kunnen zijn. \n \n Reflectie: \n Ik vond het een leuke en nuttige ervaring om deze podcast te maken, want ik ben nu beter geworden in zowel het maken van overgangen en animaties, als het editten en hosten van een podcast. De feedback die wij als groep ontvingen van de professionals forceerde me dan ook om goed te reflecteren op de manier waarop ik concepten bedenk aan het begin van projecten. Ik neig eerder naar veilige concepten waar ik al wat bekend mee ben, maar dat is dus niet altijd goed. Zeker als je een nieuwe podcast of iets dergelijks wilt maken, moet je een beetje origineel doen en buiten je comfort zone stappen. Iets dat al gedaan is zal immers meestal geen succes worden, want dan concureer je met iets dat al groot en succesvol is. Dit is iets wat ik in de toekomst een stuk meer zal meenemen.",
              linklabel: "Bekijken"
            },
            p3:{
              title: "Weijman",
              description: "Tijdens mijn stage bij LINDSMA kreeg ik de opdracht om een website te maken voor Weijman, een van hun klanten. De website moest functioneren als het inschrijfformulier voor de Weijman 24 uur challenge. Ik had verschillende iteraties ontworpen van de opmaak, waarvan er een uiteindelijk goedgekeurd werd door zowel mijn stagebegeleider als de vertegenwoordiger van Weijman. Ik heb vooral gewerkt met Photoshop voor de visuele vormgeving en de website zelf gemaakt in WIX Studio. \n \n Het doel van deze website was simpel; Het moest fungeren als een inschrijfportaal voor de 24 uur challenge van Weijman. Een professionele uitstraling en een vloeiende werking waren essentieel. Hiervoor heb ik nauw gewerkt met Sander van der Linden, mijn stagebegeleider en een van de eigenaren van LINDSMA, zodat ik makkelijk feedback kon krijgen op de verschillende versies die ik uit had gewerkt voor de website, tot de uiteindelijke versie volledig voldeed aan de wensen van Sander en natuurlijk de wensen van Weijman zelf. \n \n Reflectie: \n Dit was een erg leuk project om aan te werken en ik ben dan ook tevreden met het eindresultaat. Ik heb alleen maar goede dingen te horen gekregen van de stakeholders dus in de toekomst ben ik van plan dezelfde werkmethode te herhalen, waarbij ik versies maak en de feedback die ik krijg gelijk toepas.",
              linklabel: "Bezoeken"
            },
            p4:{
              title: "Content Marketing stage",
              description: "In het begin van 2025 heb ik 3 maanden stage gelopen bij LINDSMA (voor de rebranding bekend als LindenSteensma). Gedurende deze stage heb ik aan veel verschillende vormen van content gewerkt, zoals Photoshop templates maken/opschonen, posts maken met deze templates, video's editen, kleurcorrectie uitvoeren op foto's en meer. De ervaringen die ik tijdens deze stage heb opgedaan waren essentieel voor mijn ontwikkeling als mediaprofessional en de kwaliteit van mijn werk. \n \n Tijdens mijn stage wilde ik een duidelijker beeld krijgen van het type werk dat ik na mijn opleiding zou doen, meer vertrouwen krijgen in mijn vaardigheden en een aantal vaardigheden verbeteren, zoals het editten van video's met een verhaal en meer ervaring opdoen met Adobe Premiere Pro, aangezien ik voorheen veel heb gewerkt met Shotcut, een open source video edit programma. Ik heb mijn doelen daarin behaald, en qua het verbeteren van mijn vaardigheden heb ik nog veel meer geleerd dan ik had gedacht. Zo heb ik voor het eerst gewerkt met Adobe Lightroom voor foto's bewerken, een website gemaakt, een nieuwsbrief template voor een van de klanten van LINDSMA gemaakt in Word, een prijsopgave gemaakt met Google Spreadsheets voor de podcast studio die ik later tijdens mijn afstudeerproject zou afmaken en nog veel meer dingen zoals posts maken voor social media. \n \n Reflectie: \n Ik vond stage lopen echt enorm leuk en heb meer geleerd tijdens deze korte stage dan in het andere semester van dat jaar. Mijn stagebegeleider (Sander van der Linden, mede-eigenaar van LINDSMA) was ook erg tevreden met mijn prestaties en aan het eind van de stage vond hij dat ik enorm gegroeid was en alle feedback die ze voor me hadden goed had verwerkt.",
              linklabel: "Voorbeelden"
            },
            p5:{
              title: "Knuffelavonturen",
              description: "Dit is een aflevering van een kindershow die ik heb ontworpen voor een opdracht van mijn opleiding. De doelgroep van deze kindershow bestaat uit de patiënten van het Emma Kinderziekenhuis. Ik begon met het concept van de show uitwerken, namelijk knuffels die op fantasieavonturen gaan, en vervolgens heb ik de karakters gemaakt en het script geschreven. Bij het schrijven van het script heb ik gewerkt met ChatGPT om te brainstormen. Daarna heb ik de aflevering zelf geproduceerd door een combinatie te gebruiken van afbeeldingen genereren in Leonardo AI voor consistentie, deze animeren met Kling AI en tenslotte heb ik de stemmen zelf ingesproken en Elevenlabs gebruikt om verschillende stemmen van mijn opnames te maken. Toen heb ik alles tot 1 video verwerkt met Premiere Pro. \n \n Tijdens dit project was het mijn doel om te leren hoe ik een show kon ontwerpen, van het eerste concept tot een volledige aflevering. Daarvoor heb ik verschillende middelen toegepast, veelal AI tools. Door de Best Practices- en Trendanalyse die ik heb geschreven na onderzoek te hebben gedaan, heb ik nu een stuk beter idee van hoe verschillende kindertelevisieshows in elkaar zitten, hoe je een verhaal moet vertellen aan kinderen en waar je aan moet denken als je het script voor een aflevering van zo'n show schrijft. \n \n Reflectie: \n Tijdens dit project was het eigenlijk het doel om met een groep samen te werken en samen meerdere afleveringen van een show maken en presenteren, maar doordat allebei mijn teamleden problemen hadden tijdens dit blok waren zij gestopt, en was ik alleen over. Desondanks vond ik het een leuk project om aan te werken en heb ik de aflevering die ik heb gemaakt kunnen presenteren tijdens het Smart Gen Event, en ik heb enthousiaste reacties ontvangen op het resultaat. Het Smart Gen Event is een evenement dat ik met andere studenten van mijn opleiding had georganiseerd. Dit Smart Gen Event hebben wij gebruikt om onze shows te presenteren, maar ook om te kunnen praten over alles wat we tijdens de opleiding hebben geleerd met de bezoekers, die bestonden uit docenten, mede-studenten en andere geïnteresseerden die via Social Media of uitnodiging van het evenement hadden gehoord. \n \n Nadat ik mijn diploma heb gehaald voor mijn opleiding, heb ik de bewuste keuze gemaakt om minder te werken met generatieve AI tools (met een paar uitzonderingen zoals self-hosted AI tools) vanwege ethische problemen die ik heb met veel van de modellen en bedrijven die erbij betrokken zijn.",
              linklabel1: "Bekijken",
              linklabel2: "10 pager"
            },
            p6:{
              title: "AKHI gym",
              description: "Voor een opdracht van mijn opleiding moest ik een website maken. Hiervoor heb ik Achmed (de eigenaar van AKHI gym) benaderd, die mij vroeg of ik zijn website kon moderniseren. Voor dit project heb ik heb marktonderzoek gedaan, websites van concurerende sportscholen geanalyseerd en de wensen en eisen van Achmed genoteerd (de belangrijkste eis was een reserveringssysteem om lessen te boeken). Vervolgens heb ik de website met WIX Studio gemaakt en aan de klant gepresenteerd, met een zeer tevreden reactie. \n \n Mijn doel tijdens dit project was om mijn web design skills te verbeteren en om te leren hoe ik in WIX Studio kan werken. Deze heb ik behaald door moderne websites van de competitie te analyseren, WIX Studio tutorials op te zoeken en door uiteindelijk gewoon de website te ontwikkelen. Tijdens het maken van de website heb ik op meerdere momenten feedback gevraagd van de eigenaar van AKHI gym om er zeker van te zijn dat hij tevreden is met de richting die de website op is gegaan. \n \n Reflectie: \n Ik ben erg tevreden met het resultaat, omdat Achmed zo blij was met het eindresultaat. Ik had nog niet eerder zoveel moeite gestopt in het maken van een website, en de website die ik toen had gemaakt is een redelijke tijd in gebruik gebleven. De website had ik januari 2024 opgeleverd, en is in gebruik gebleven tot juli 2026. Ik heb nu de skills om websites te maken met WIX studio en om elementen hiervan te ontwerpen met Photoshop.",
              linklabel: "Bezoeken"
            }
          },
          sections: {
            projects: "Projecten",
            about: "Over mij",
            contact: "Contact"
          },
          about: {
            blurb1: "Hoi, ik ben Noah! Ik ben afgestudeerd aan de opleiding Smart Media Production van de Hogeschool van Amsterdam en ik vind het leuk om content te produceren, zowel het opnemen als het editen ervan. Op deze opleiding heb ik vanaf het begin geleerd hoe ik slimme technologieën kan integreren in het traditionele werkproces om efficiënter en beter media te kunnen produceren.",
            blurb2: "Ik hou van het universum en laat dat graag terugkomen in mijn creatieve uitingen. In mijn vrije tijd speel ik graag video games, ik speel badminton, ik luister naar veel soort muziek en ik kijk gevarieerde content op YouTube, om te leren of als entertainment.",
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
            pre: "Noah Verburg, a Smart Media professional crafting ",
            highlight: "audiovisual content & websites ",
            blurb:
              "My previous work includes making podcasts, short- and long-form videos, social media posts and websites. Curious? Please take a look at a selection of my previous work below!"
          },
          actions: {
            seeProjects: "See projects"
          },
          projects:{
            filter: "Filter by",
            p1:{
              title: "Creative Inside",
              description: "I produced a B2B podcast for the company LINDSMA. This was my graduation project, following an earlier internship with them. For this project, I wrote scripts, designed the branding, animated an intro, recorded episodes, and published them. I also created the podcast studio for LINDSMA by selecting the equipment and setting up the furniture and wall panels. \n \n This project had two main goals: to increase LINDSMA's brand awareness to acquire new clients, and to establish a studio for LINDSMA for future projects. Although the studio itself was a success and ready for future projects by the end of the project, the results of the podcast itself were disappointing. It failed to reach a large audience with the episodes, which remained relatively modest in terms of viewing and listening figures. I did encounter people who told me they had seen the podcast and thought it was cool, but this was not the main goal. The two reasons for this were as follows: I should have dedicated more time to creating marketing material for posting, and LINDSMA itself did not fully support the product. The owners of LINDSMA did not want to post the podcast on their social media, which was mainly due to the unfortunate (for me) timing of the company's rebranding. The episodes were recorded before the rebranding went live, under the company's old title: LindenSteensma. \n \n Reflection: \n I learned a lot from this project. For instance, I now know that in the future I need to spend significantly more budget and time on marketing these types of projects. I could also have been more forward-thinking with the rebranding, but since the episodes had to be published during my graduation period (before the company's rebranding), there wasn't much I could do about it in this case. \n I also learned a lot about recording and editing episodes. For instance, it is better to have multiple cameras for different angles depending on who is speaking, and it is useful to have presets for episodes both with and without video, because there were times when I wanted to record an episode but LINDSMA's camera equipment was unavailable.",
              linklabel: "Watch"
            },
            p2:{
              title: "Ra Ra Wie Ben Ik?",
              description: "Together with a team, I produced a game show podcast during my studies. While making the podcast, we wanted to explore how we could effectively use AI to speed up the production process. In the final product, we created the jingles using the Suno AI music generator and the Lovable AI website builder for the website. I was the editor of the third episode, and I also created the intro and transition animations using Adobe After Effects. \n \n This project had two goals: devising a good, original concept for a podcast, and then developing that idea into a good podcast. The concept and our execution of that concept were assessed by our teachers as well as by professionals from the field. The biggest point for improvement we received was that we could have been a bit wilder with our concept. We had come up with the concept that an AI would think of a character, movie, or celebrity and that we would then have to guess it. In practice, that turned out not to work very well because the AI ​​gave incorrect information and just hallucinated, so we changed the concept to have one of the hosts do it themselves. Unfortunately, that turned the original concept into a 'safe' and 'boring' concept. So, while the execution was ultimately successful, with everything a podcast needs, the content, in particular, could have been better. \n \n Reflection: \n I found making this podcast to be a fun and useful experience, as I have improved in creating transitions and animations, as well as editing and hosting a podcast. The feedback we received as a group from the professionals forced me to reflect carefully on how I come up with concepts at the start of projects. I tend to gravitate towards safe concepts that I am already somewhat familiar with, but that is not always a good idea. Especially if you want to create a new podcast or something similar, you need to be a bit original and step outside your comfort zone. After all, something that has already been done usually won't be a success, because then you are competing with something that is already big and successful. This is something I will take into account much more in the future.",
              linklabel: "Watch"
            },
            p3:{
              title: "Weijman",
              description: "During my internship at LINDSMA, I was tasked with creating a website for Weijman, one of their clients. The website had to function as the registration form for the Weijman 24-hour challenge. I designed several iterations of the layout, one of which was ultimately approved by both my internship supervisor and the representative from Weijman. I primarily worked with Photoshop for the visual design and built the website itself in WIX Studio. \n \n The goal of this website was simple: it had to function as a registration portal for Weijman's 24-hour challenge. A professional appearance and smooth operation were essential. To achieve this, I worked closely with Sander van der Linden, my internship supervisor and one of the owners of LINDSMA, so that I could easily receive feedback on the various versions I had developed for the website, until the final version fully met Sander's requirements and, of course, those of Weijman itself. \n \n Reflection: \n This was a very enjoyable project to work on, and I am satisfied with the end result. I have received nothing but good feedback from the stakeholders, so I plan to repeat the same working method in the future, creating versions and immediately applying the feedback I receive.",
              linklabel: "Visit"
            },
            p4:{
              title: "Content Marketing internship",
              description: "In early 2025, I completed a three-month internship at LINDSMA (known as LindenSteensma before their rebranding). During this internship, I worked on many different forms of content, such as creating/cleaning up Photoshop templates, creating posts using these templates, editing videos, performing color correction on photos, and more. The experiences I gained during this internship were essential for my development as a media professional and the quality of my work. \n \n During my internship, I wanted to get a clearer picture of the type of work I would do after my studies, gain more confidence in my skills, and improve several skills, such as editing narrative videos and gaining more experience with Adobe Premiere Pro, as I previously worked extensively with Shotcut, an open-source video editing program. I achieved my goals in this regard, and regarding improving my skills, I learned much more than I had expected. For example, I worked with Adobe Lightroom for photo editing for the first time, created a website, made a newsletter template in Word for one of LINDSMA's clients, prepared a quote using Google Sheets for the podcast studio that I would complete later during my graduation project, and did many other things, such as creating posts for social media. \n \n Reflection: \n I really enjoyed doing my internship and learned more during this short internship than in the other semester of that year. My internship supervisor (Sander van der Linden, co-owner of LINDSMA) was also very satisfied with my performance, and at the end of the internship, he felt that I had grown tremendously and had incorporated all the feedback they had for me well.",
              linklabel: "Examples"
            },
            p5:{
              title: "Knuffelavonturen",
              description: "This is an episode of a children's show that I designed for an assignment for my studies. The target audience for this children's show consists of the patients of the Emma Children's Hospital. I started by developing the concept of the show, namely stuffed animals going on fantasy adventures, and then I created the characters and wrote the script. While writing the script, I used ChatGPT to brainstorm. After that, I produced the episode myself by using a combination of generating images in Leonardo AI for consistency, animating them with Kling AI, and finally, I recorded the voiceovers myself and used Elevenlabs to create different voices from my recordings. Then I processed everything into a single video using Premiere Pro. \n \n During this project, my goal was to learn how to design a show, from the initial concept to a complete episode. To achieve this, I used various tools and programs, many of which were generative AI. Thanks to the Best Practices and Trend Analysis I wrote after conducting research, I now have a much better idea of ​​how various children's television shows are structured, how to tell a story to children, and what to consider when writing the script for an episode of such a show. \n \n Reflection: \n During this project, the actual goal was to work together as a group and create and present multiple episodes of a show together. However, because both my team members experienced problems during this block, they dropped out, leaving me alone. Nevertheless, I found it an enjoyable project to work on, and I was able to present the episode I created during the Smart Gen Event. I received enthusiastic reactions to the result. The Smart Gen Event is an event that I organized with other students from my program. We used this Smart Gen Event to present our shows, but also to discuss everything we had learned during the program with the attendees, who consisted of teachers, fellow students, and other interested individuals who had heard about the event via social media or an invitation. \n \n I should note that after graduating, I'm consciously working less with generative AI tools (with a few exceptions such as self-hosted AI tools) due to ethical concerns I have with many of the models and companies involved.",
              linklabel1: "Watch",
              linklabel2: "10 pager"
            },
            p6:{
              title: "AKHI gym",
              description: "For an assignment for my studies, I had to create a website. To do this, I approached Achmed (the owner of AKHI gym), who asked if I could modernize his website. For this project, I conducted market research, analysed the websites of competing gyms, and noted Achmed's wishes and requirements (the most important requirement was a reservation system to book classes). Subsequently, I built the website using WIX Studio and presented it to the client, receiving a very satisfied response. \n \n My goal during this project was to improve my web design skills and learn how to work in WIX Studio. I achieved this by analysing modern competitor websites, looking up WIX Studio tutorials, and ultimately simply developing the website. During the creation of the website, I asked for feedback from the owner of AKHI gym at several points to ensure that he was satisfied with the direction the website was taking. \n \n Reflection: \n I am very satisfied with the result because Achmed was so happy with the final outcome. I had never put so much effort into creating a website before, and the website I made back then remained in use for a reasonable amount of time. I delivered the website in January 2024, and it remained in use until July 2026. I now have the skills to build websites with WIX Studio and to design their elements using Photoshop.",
              linklabel: "Visit"
            }
          },
          sections: {
            projects: "Projects",
            about: "About me",
            contact: "Contact"
          },
          about: {
            blurb1: "Hi, I'm Noah! I graduated from the Smart Media Production course at the Amsterdam University of Applied Sciences and I like producing content, both the recording as well as the editing of it. On this course I learned from the very beginning how to integrate smart technologies in the traditional workprocess to produce media better and more efficiently.",
            blurb2: "I love the universe and love showing that in my creative expressions. In my free time I like playing video games, I play badminton, I listen to a wide variety of music and I watch a variety of content on YouTube, educational as well as entertainment.",
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
