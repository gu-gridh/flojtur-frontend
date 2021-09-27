<template>
  <div class="articlepage">
    <Title />
    <article class="articleContainer">
      <router-link to="/" tag="div" id="ItemBack" />

      <h1>Ett självspelande flöjtur</h1>
      <div class="articleIngress">
        <p>
          Ett flöjtur är ett golvur som har ett inbyggt mekaniskt spelverk, där
          tonen alstras med hjälp av pipor liknande dem man finner i
          traditionella piporglar. I andra typer av spelur alstras ljudet av ett
          stränginstrument eller av klangskålar (klockor). Spelur är en term som
          kan syfta på alla dessa tre grundtyper, medan flöjtur är en specifik
          term för ett spelur där ljudet alstras av flöjter eller orgelpipor. I
          slutet av 1700-talet i Berlin, med flera mycket skickliga
          spelurssbyggare, kallades de olika typerna för
          <em>Flötenuhr</em>, <em>Harfenuhr</em> och <em>Glockenspiel</em>.
        </p>
      </div>
      <div class="articletext">
        <p>
          Flöjturet hör till en grupp instrument som brukar benämnas
          självspelande instrument eller mekaniska instrument. En definition av
          sådana är:
        </p>
        <blockquote>
          ”ett musikinstrument som kan spela musik automatiskt från ett
          förutbestämt och repeterbart mekaniskt program. Vissa mekaniska
          instrument spelar utan mänsklig interaktion (utöver att starta
          instrumentet); andra kräver någon grad av aktivitet med händer eller
          fötter (veva mekaniken, pumpa bälgar eller styra expressiva reglage).
          Denna definition exkluderar maskiner som reproducerar ljud så som
          grammofoner.” (<em>Grove Music Dictionary</em>).
        </blockquote>
        <p>
          En kortare definition finner vi i ett svenskt <em>Musik-Lexikon</em>,
          utgivet av J. Leonard Höijer (1864). Höijer skriver under spelur:
          ”Klocka, inredd med ett spelverk på samma sätt som en speldosa, och
          som vid fulla timmar afspelar något musikstycke.” Kombinationen av
          klockor och spelverk speglar 1700-talets mekanistiska förståelse av
          världen, med rötterna i upplysningens vetenskapliga landvinningar.
        </p>
        <p>
          Det viktiga i självspelande instrument är det repeterbara programmet
          som innehåller musiken som skall spelas. På en musikvals består det
          vanligen av stift och klamrar av metall som fästs på en trä- eller
          mässingscylinder. En så kallad stiftvals. Det är alltså inte en
          inspelning, som på en vinyl- eller CD-skiva, utan ett program som ett
          mekaniskt verk kan spela och upprepa. I golvuren drivs spelverket av
          ett blylod som kan väga hela 40 kg.
        </p>
        <p>
          De första exemplen på automatiska instrument finner vi i grekiska
          texter från tredje århundradet f.Kr. Tidigaste beskrivningen av ett
          automatiskt instrument med ett musikaliskt program finner vi i Bagdad
          under första hälften av 800-talet.
        </p>
        <p>
          Roterande metallcylindrar användes för att programmera musik för
          kyrkklockor på tidigt 1300-tal. Och sent 1400-tal beskrev Leonardo da
          Vinci en spinett och två trummor troligen spelande genom en
          programmerad cylinder. Från 1500-talet byggdes spinetter som kunde
          spelas både manuellt eller automatiskt med ett verk och en
          programmerad cylinder, bäst kända är verken från Augsburg i början av
          1600-talet byggda av familjen Bidermann. Urmakeriet genomgick en stark
          utveckling under slutet av 1600-talet, och med den ökade precisionen i
          gången på klockorna följde även en utveckling av olika självspelande
          instrument. Här växte bland annat Berlin fram som ett nav för
          högkvalitativt urmakeri i kombination med mekaniska instrument. Det
          svenska spelursmakeriet delar flera karaktäristiska drag med det
          Berlinska.
        </p>

        <Figure>
          <Square>
             <model-viewer
    class="model-viewer"
    reveal="interaction"
    loading="lazy"
    src="/models/flojt.glb"
    alt="3d-modell av det mekaniska spelverket i ett flöjtur"
    camera-controls
    autoplay
    animation-name="929_flojtur_CADprep_jh_18"

    camera-orbit="-150deg 70deg 160.0m"
    exposure="0.9"
    skyboxangle="220"
    shadows="false"
    shadow-intensity="0"
    shadow-softness="0"
    ar-status="not-presenting"
  >
    <div id="lazy-load-poster" slot="poster"></div>
   
  </model-viewer>
          </Square>
          <figcaption>
            Flöjturet på bilden är 628 mm från botten av bälgstolen till toppen
            av den längsta pipan. Pallbrädan som spelmekaniken och orgeln vilar
            på är 480 mm bred och 390 mm djup. Klicka på bilden för att ladda 
            in en 3d-modell som du kan rotera. Scrolla för att förstora och förminska modellen.
          </figcaption>
        </Figure>
        <p>
          Det finns tre viktiga delar i ett självspelande flöjtur: motorn, eller
          det mekaniska spelverket; musiken, programmerad på en trävals; orgeln,
          själva instrumentet som ljuder.
        </p>
        <p>
          Motorn: kraften att driva hela konstruktionen kommer från ett lod,
          oftast i bly, med en vikt uppemot 40kg. Lodet hänger i en lodlina som
          är lindad runt en lite träcylinder. Belastningen på lager är stor men
          samtidigt är precisionen lika viktig och en korrekt uträkningen av
          förhållandena mellan alla kugghjul är avgörande. När man startar
          speluret sänks läsarmarna ner samtidigt som bälgen fylls med luft med
          hjälp av två pumparmar. Verket driver en ihålig trävals med
          mässingsstift, och för varje varv skall trävalsen förskjutas 2 mm i
          sidled. Man får på så sätt ett spår som går i en spiral runt
          trävalsens yta. Musiken som mässingsstiften representerar kan då vara
          uppemot 3 minuter lång, betydligt längre än på de mindre vevpositiven.
          När valsen roterat sex varv skall läsarmarna lyftas upp i säkrat läge
          så att stiftvalsen och musiken kan bytas utan att läsarmarnas stift
          fastnar i mässingsstiften på trävalsen.
        </p>
        <Figure>
          <Square>
            <OpenSeadragon
              :tileSources="[
                publicPath + 'zoom/IllustrationClose_10012_4kx4k.dzi',
                publicPath + 'zoom/IllustrationClose_10022_4kx4k.dzi',
              ]"
            />
          </Square>
          <figcaption>
            Mellan de två verkplåtarna av mässing ligger motorn med kugghjul av
            olika storlek i bestämda proportioner. Illustration: Olof Pipping.
          </figcaption>
        </Figure>
        <p>
          Stiftvalsen: på trävalsen programmeras musik genom mässingsstift av
          olika längd; från vassa stift för mycket korta toner, till långa
          byglar, för ett långt slutackord. Grundprincipen är gammal, och går
          tillbaka ända till antikens Alexandria. Det äldsta bevarade exemplet
          på automatiska musikinstrument är det medeltida klockspelet i
          katedralen i Beauvais, norr om Paris, från tidigt 1300-tal. Musiken
          som finns på stiftvalsarna i Strands spelur är musik som spelades
          t.ex. på operan i Stockholm. Musiken behövde anpassas för den lilla
          orgeln, så det behövdes en musikaliskt skolad person att arrangera om
          musiken så den fungerade i speluret. Sedan måste varje enskilt stift
          markeras och för hand tryckas in i trävalsen. Även här är precisionen
          viktigt: stiftet måste placeras vinkelrätt mot träytan och tryckas in
          så längden blev korrekt för att läsarmarna skulle kunna läsa av
          informationen. När så ett stift trycker upp läsarmen så trycker den
          ner en pinne på en spelventil i den lilla orgeln, och en ton ljuder.
        </p>

        <Figure>
          <Square>
            <OpenSeadragon
              :tileSources="[
                publicPath + 'zoom/IllustrationClose_2001_4kx4k.dzi',
                publicPath + 'zoom/IllustrationClose_2002_4kx4k.dzi',
              ]"
            />
          </Square>
          <figcaption>
            Stiftvalsen av trä innehåller ett musikstycke, och vanligtvis finns
            det flera valsar som kan bytas ut. Läsarmarna påverkas av stiften på
            trävalsen och trycker ner ventilen i den lilla orgeln. Illustration:
            Olof Pipping.
          </figcaption>
        </Figure>
        <p>
          Orgeln: musikinstrumentet i alla Strands bevarade spelur är en liten
          orgel, vanligen med 31 toner. I vissa fall med två rader av stämmor,
          och då skapas en möjlighet att registrera om i musiken, det vill säga
          att man kan variera klangen. Då tillkommer ytterligare två läsarmar
          som aktiverar eller stänger av den andra stämman – sammanlagt 33
          läsarmar. Grundstämman är alltid en täckt orgelstämma (Gedakt) och den
          andra är en stämma med en lite annorlunda klang, ofta en öppen flöjt,
          och i några få fall en metallstämma (Traversflöjt). Den andra stämman
          kompletterar grundstämman och ger en färgrikare klang med fler
          övertoner. Den dynamiska skillnaden är marginell.
        </p>
        <Figure>
          <Square>
            <OpenSeadragon
              :tileSources="[
                publicPath + 'zoom/IllustrationClose_3001_4kx4k.dzi',
                publicPath + 'zoom/IllustrationClose_3002_4kx4k.dzi',
              ]"
          /></Square>
          <figcaption>
            Tryckpinnarna går ner i ventilkistan bakom spåntluckan, och öppnar
            ventilen så luften kan komma till orgelpipan. Illustration: Olof
            Pipping.
          </figcaption>
        </Figure>
        <p style="text-align: center">* * *</p>
     
      <a href="https://youtu.be/FIbxJ5GKR0M"> <div class="IntroInfoContainer" style="margin-top: 20px; height:40px;">
          <div id="IntroLinkButton" style=""></div>
          <div id="IntroInfoLabel" style="">
            "Flöjturet går igen"
          </div>
        </div>
        </a>
        <div class="ButtonInfo">En dokumentärfilm om rekonstruktionen av spelverket och piporna till Kungl. Vitterhetsakademiens flöjtur.</div>
         
     

        <div class="IntroInfoContainer" style="margin-top: 20px; height:40px;">
          <div id="IntroInfoButton" style=""></div>
          <div id="IntroInfoLabel" style="">
            Ladda ner CAD-modellen
          </div>
        </div>

      <div class="ButtonInfo">Licens: CC BY-NC 4.0. Dokumentation och CAD-ritning av Olof Pipping.    </div>

            <div class="IntroInfoContainer" style="margin-top: 20px; height:40px;">
          <div id="IntroInfoButton" style=""></div>
          <div id="IntroInfoLabel" style="">
            Ladda ner 3D-modellen
          </div>
        </div>
      <div class="ButtonInfo">Licens: CC BY-NC 4.0 </div>


       
      </div>
    </article>
  </div>
</template>

<script>
import "@google/model-viewer";
import "focus-visible";

import Title from "@/components/Title.vue";
import Figure from "@/components/Figure.vue";
import Square from "@/components/Square.vue";
import OpenSeadragon from "@/components/OpenSeadragon.vue";

export default {
  components: { Title, Figure, Square, OpenSeadragon },
  computed: {
    publicPath: () => process.env.BASE_URL,
  },
};
</script>


<style lang="scss" scoped>
.model-viewer {
  height: 100%;
  width: 100%;
  --progress-bar-color: rgba(0, 0, 0, 0);
  --progress-bar-height: 0px;
  --progress-mask: fff;
  --poster-color: transparent;
  --progress-mask: transparent;
}

#lazy-load-poster {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-image: url("/models/flojt-model-scale.jpg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

#button-load {
  background-color: rgba(255, 255, 255, 0.8);
  height: 150px;
  width: 150px;
  color: white;
  cursor: pointer;
  border-radius: 50%;
  position: absolute;
  left: calc(50% - 75px);
  top: calc(50% - 75px);
  transform: translate3d(-50%, -50%, 0);
  z-index: 100;
  transition: all 0.2s ease-in-out;
  animation: pulse 2s infinite;
}

#button-load-label {
  color: black;
  padding: 10px;
  font-size: 22px;
  text-align: center;
  font-weight: 300;
  margin-top: 17%;
}

@keyframes pulse {
  0% {
    transform: scale(0.95);
  }

  50% {
    transform: scale(1);
  }

  100% {
    transform: scale(0.95);
  }
}



figure {
  break-inside: avoid;
}

.osd {
  height: 100%;
}

.IntroInfoContainer {
  height: 20px;
  width: 320px;
  border-radius: 15px;
  padding: 10px;
  margin-top: 2px;
  margin-bottom:5px;
  margin-left: 0px;
  cursor: pointer;
 
  transition: all 0.2s ease-in-out;
}

.IntroInfoContainer:hover {
  background-color: rgb(235, 235, 235);
}

#IntroInfoLabel {
  float: left;
  font-size: 25px;
  margin-top: 8px;
  margin-left: 20px;
  font-weight: 100;
}

.ButtonInfo {

  font-size:18px;
  margin-top: 5px;
  margin-left: 10px;
width:100&;
}

#IntroInfoButton {
  float: left;
  margin-top: 0px;
  height: 35px;
  width: 35px;
  background-image: url(../assets/download.png);
  background-size: 35px 35px;
}

#IntroLinkButton {
  float: left;
  margin-top: 0px;
  height: 40px;
  width: 40px;
  background-image: url(../assets/linkbutton.png);
  background-size: 40px 40px;
}
</style>
