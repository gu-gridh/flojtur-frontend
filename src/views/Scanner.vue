<template>
  <div class="articlepage">
    <Title />
    <article class="articleContainer">
      <router-link to="/#menu-model" tag="div" id="ItemBack" />

      <h1>En optisk valsläsare</h1>
      <div class="articleIngress">
        <p>
          Flera av Strands flöjtur är idag museiföremål och många är inte i
          funktion. Detta ledde till att en av forskningsfrågorna för detta
          projekt var att utveckla en metod för att kunna identifiera musiken på
          de ospelbara stiftvalsarna. Särskilt i de fall etiketterna var skadade
          eller saknades helt och därmed inte kunde bidra till en identifiering
          av vare sig musik eller kompositör. En naturlig följdfråga blev också
          hur musiken hade bearbetats för att fungera på de små orglarna i
          flöjturen. Dessutom upptäcktes att vissa titlar återkom och frågan
          blev då om det var samma arrangemang och om det fanns en förlaga som
          Strand återanvände?
        </p>
      </div>
      <div class="articletext">
        <p>
          Diskussioner om utveckling av en valsläsare i projektet inleddes redan
          inför projektansökan, med bidrag av bland andra professor Peter
          Svensson, Institutt for elektroniske systemer vid Norges
          teknisk-naturvitenskapelige universitet (NTNU) i Trondheim.
          Diskussionerna inom projektet fördes i en grupp bestående av Mats
          Krouthén, intendent på Ringve Musikkmuseum i Trondheim, och Carl Johan
          Bergsten, tidigare forskningsingenjör på orgelforskningscentret GOArt
          på Göteborgs universitet, samt undertecknad. Att transkribera en
          stiftvals manuellt är i princip möjligt, men mycket arbetskrävande.
          Ett exempel på manuell transkribering är redovisat i samband med
          konserveringen av ett flöjtur (2014) vid West Dean College i Sussex,
          England<sup>1</sup>. Avsikten i Strandprojektet var att läsa av
          metallstiften och därefter konvertera mätvärdena till MIDI-data.
          Därmed skulle mätningarna kunna spelas upp med hjälp av lämplig
          mjukvara. Tidigare forskning som beaktades var en valsläsare gjord av
          Associazione Musica Meccanica Italiana (AMMI), och beskriven på webben
          (Pinned Barrel Scanner)<sup>2</sup>, samt Ture Bergstrøms projekt vid
          Musikmuseet, Nationalmuseum, Köpenhamn.<sup>3</sup> Dessa två projekt
          visade dock att storleken på utrustningen krävde att stiftvalsarna
          transporterades till den plats där avläsningen skulle genomföras. Då
          flöjturen i Sverige är spridda på flera olika platser beslöts att
          prioritera en mobil utrustning.
        </p>
        <p>
          Senare diskuterades utvecklingen även med Per-Anders Terning och
          Robert Lerbro som medverkade i rekonstruktionen av Kungl.
          Vitterhetsakademiens flöjtur.<sup>4</sup> Ansvarig för utvecklingen
          blev Carl Johan Bergsten, medan själva konstruktionen gjordes av
          Robert Lerbro. Mjukvaran för datainsamlingen utvecklades av Carl Johan
          Bergsten med bidrag av Leonardo Perretti. Perretti medverkade i det
          italienska projektet (ovan). Bergsten utvecklade även
          databasstrukturen för alla mätdata, samt en särskild modul för att
          konvertera de mätdata valsläsaren genererade till MIDI.
        </p>
        <p>
          Initialt diskuterades olika givare, och två olika modeller testades.
          De första testerna gjordes med en fotocell som detekterar reflekterat
          ljus. Tanken var att skillnaden mellan metallstiftens och träytans
          förmåga att reflektera ljus skulle vara tydlig. Det visade sig i
          försök att ojämnheter i metallstiftens yta och färgskillnader på
          trävalsens yta gjorde att säkra mätvärden inte kunde fås. Projektet
          testade därefter en laser som detekterar avstånd till ett objekt med
          triangulering. Även här var givaren beroende av en koherent yta för
          att mätningarna skall bli användbara. Dock var resultaten lovande
          varför vi beslöt testa att låta en plastbit följa stiften och när ett
          stift påverkar plastbiten så detekterar lasern plastbitens rörelse.
          Syftet med en plastbit vara att få en yta som kunde kontrolleras vad
          gäller ytans beskaffenhet och även vid behov färg, samt att minimera
          beröring av stiften. Två olika utformningar testades, där båda hade
          det problemet att deformationen av den elastiska plasten ledde till
          att längden på metallstiften inte representerades korrekt i
          mätningarna. En musiker skulle beskriva det som att tonerna spelades
          för tätt tillsamman (legato). Det gick inte heller att uppnå säkrare
          mätresultat med plastbitarna trots att olika avstånd till stiften och
          annan anläggningsvinkel testades.
        </p>
        <p>
          Till sist beslöts att bygga en miniatyr av en läsarm med lässpets, och
          fjäderbelastning, enligt samma principer som i ett flöjtur. Arbetet
          utfördes av Olof Pipping. Denna konstruktion fungerade felfritt, så
          den första genomförda avläsningen kunde konverteras direkt till MIDI.
          Ljudfilen som blev resultatet är helt obearbetad i mjukvaran, utöver
          den automatiska funktionen för kvantisering. Inställningen sattes till
          notvärdet 1/8.
        </p>

        <div class="videos span-columns">
          <div class="videos-double">
            <Figure>
              <div class="figure-grid">
                <div>
                  <Ratio :ratio="16 / 9">
                    <Guplay videoId="0_t5riw0y1" />
                  </Ratio>
                </div>
                <div>
                  <Ratio :ratio="16 / 9">
                    <Guplay videoId="0_k40yjpgj" />
                  </Ratio>
                </div>
              </div>
              <figcaption>
                Filmerna visar en avläsning med de två olika plastbitarna på
                samma stiftvals och samma passage. De fyra sista stiften och
                byglarna är exempel på områden som skapade problem vid
                avläsningen.
              </figcaption>
            </Figure>
          </div>
          <div class="videos-single">
            <Figure>
              <Ratio :ratio="16 / 9">
                <Guplay videoId="0_2wnqmo8c" />
              </Ratio>
            </Figure>
          </div>
        </div>
      </div>

      <div class="articletext">
        <h2 class="span-columns">Konstruktionen</h2>
        <Figure>
          <Ratio :ratio="3 / 2">
            <OpenSeadragon
              :tileSources="[
                publicPath + 'scanner/Principskiss_valslaesare.dzi',
              ]"
            />
          </Ratio>
          <figcaption>
            Principskiss till valsläsarens konstruktion. En stegmotor roterar
            valsen och en annan stegmotor flyttar lasergivaren i sidled. En
            mätning görs för respektive spår, vilket motsvarar en ton eller
            orgelpipa. En referensgivare möjliggör en synkronisering av de olika
            mätningarna. Mätningarna samlas in i en mjukvara, och exporteras som
            en CSV-fil. Därefter görs en manuell förberedelse av CSV-filen innan
            den behandlas för konvertering till MIDI. MIDI-filen kan sedan
            redigeras och spelas i lämplig mjukvara. Illustration: Carl Johan
            Bergsten. Licens: CC BY-NC 4.0.
          </figcaption>
        </Figure>
        <Figure>
          <Ratio :ratio="3 / 2">
            <OpenSeadragon
              :tileSources="[
                'https://img.dh.gu.se/flojtur/article/scanner/pyr/Valslaesare_1_DSC_0542.tif/info.json',
                'https://img.dh.gu.se/flojtur/article/scanner/pyr/Valslaesare_2_DSC_0543.tif/info.json',
                'https://img.dh.gu.se/flojtur/article/scanner/pyr/Valslaesare_3_DSC_0544.tif/info.json',
                'https://img.dh.gu.se/flojtur/article/scanner/pyr/Valslaesare_4_DSC_0545.tif/info.json',
                'https://img.dh.gu.se/flojtur/article/scanner/pyr/Valslaesare_5_DSC_0546.tif/info.json',
              ]"
            />
          </Ratio>
          <figcaption>
            Överst ser vi den färdiga valsläsaren, med en bärbar dator för
            insamling av mätdata. Den vita skivan ovanför stiftvalsen är till
            för att kunna göra anteckningar medan en stiftvals läses av. Foto:
            Johan Norrback. Licens: CC BY-NC 4.0.
          </figcaption>
        </Figure>
        <Figure>
          <Ratio :ratio="3 / 2">
            <OpenSeadragon
              :tileSources="[
                'https://img.dh.gu.se/flojtur/article/scanner/pyr/Valslaesare_6_DSC_0547.tif/info.json',
              ]"
            />
          </Ratio>
          <figcaption>
            Panel för positionering och start av läsare. Från vänster: summer
            av/på; positionering av lasergivare vänster/höger; brytare för start
            av förinställt program; positionering av vals upp/ner. Foto: Johan
            Norrback. Licens: CC BY-NC 4.0.
          </figcaption>
        </Figure>
        <Figure>
          <Ratio :ratio="3 / 2">
            <OpenSeadragon
              :tileSources="[
                'https://img.dh.gu.se/flojtur/article/scanner/pyr/Valslaesare_7_DSC_0551.tif/info.json',
              ]"
            />
          </Ratio>
          <figcaption>
            USB-ingång. Från vänster: insamling av mätdata; inställning av
            respektive stegmotor. Foto: Johan Norrback. Licens: CC BY-NC 4.0.
          </figcaption>
        </Figure>
        <Figure>
          <Ratio :ratio="3 / 2">
            <OpenSeadragon
              :tileSources="[
                'https://img.dh.gu.se/flojtur/article/scanner/pyr/Valslaesare_8_DSC_0552.tif/info.json',
              ]"
            />
          </Ratio>
          <figcaption>
            Väska med hjul och teleskophandtag för transport av valsläsare.
            Foto: Johan Norrback. Licens: CC BY-NC 4.0.
          </figcaption>
        </Figure>
        <p>
          Inställningarna av stegmotorerna för styrning av givare
          (vänster/höger) samt valsens rotationshastighet korreleras med
          samplingsfrekvensen för givaren samt pulsgivaren för varv.
          Beräkningarna görs i ett Excelark med förinställningar. Därefter
          skrivs inställningarna till respektive stegmotor. Mätdata samlas in
          med mjukvaran DAQExpress, National Instruments.
        </p>
        <Figure>
          <Ratio :ratio="16 / 9">
            <OpenSeadragon
              :tileSources="[
                { type: 'image', url: publicPath + 'scanner/Bild_Excel.png' },
                {
                  type: 'image',
                  url: publicPath + 'scanner/Bild_Ementool.png',
                },
                {
                  type: 'image',
                  url: publicPath + 'scanner/Bild_DAQExpress.png',
                },
              ]"
            />
          </Ratio>
        </Figure>
        <p>
          Nedan följer exempelfiler från mätningen som gjordes för den ljudfil
          som ligger sist. Här visas endast mätfilen för en ton (tonen A). När
          alla toner är inlästa kombineras de enskilda mätningarna i en samlad
          fil som sedan kan konverteras till MIDI. I detta fall fanns det 17
          toner med stift (data), av ett totalt tonomfång i orgel om 27 toner,
          som sedan skulle korreleras enligt specifikationen för en MIDI-fil.
        </p>

        <ul>
          <li>
            <a :href="publicPath + 'scanner/DAQ_CSV.csv'">
              CSVfil ur DAQExpress
            </a>
          </li>
          <li>
            <a :href="publicPath + 'scanner/Bearb_CSV.csv'">
              Bearbetad CSVfil för slutlig samordning i databasen
            </a>
          </li>
          <li>
            <a :href="publicPath + 'scanner/Databas_out_CSV.csv'">
              CSV-output ur databasen
            </a>
          </li>
          <li>
            <a :href="publicPath + 'scanner/Konv_MID.mid'">
              MIDIFIL konverterad med CSVMIDI
            </a>
          </li>
        </ul>

        <Figure>
          <Ratio :ratio="16 / 9">
            <OpenSeadragon :src="publicPath + 'scanner/Bild_Logic.png'" />
          </Ratio>
          <figcaption>MIDI-filen importerad i Logic.</figcaption>
        </Figure>

        <Figure>
          <PlayButton default-sound />
          <figcaption>
            Melodi avläst från stiftvals i privat ägo, exporterad som MP3-fil
            med samplat orgelljud ur Logics ljudbibliotek. Licens: CC BY-NC 4.0.
          </figcaption>
        </Figure>
      </div>

      <div class="articletext">
        <h2 class="span-columns">
          Specifikationer på valsläsarens hård- och mjukvara
        </h2>

        <div style="break-inside: avoid">
          <p>Hårdvara:</p>
          <ul>
            <li>Lasergivare Datalogic S8-PH-5-M01-PP</li>
            <li>Stegmotorstyrning Electromen EM-314</li>
            <li>Stegmotor OEM MOTOR FL42STH47-1684UEN</li>
            <li>Planetväxel Mecatix 1040-0100 100:1</li>
            <li>Planetväxel Mecatix 1040-0025 25:1</li>
            <li>
              Mätdatainsamlingssystem National Instruments NI cDAQ-9174,
              ingångsmodul NI 9221
            </li>
          </ul>
        </div>
        <div style="break-inside: avoid">
          <p>Mjukvara:</p>
          <ul>
            <li>EmenToolLite (v. 1.53), Electromen OY</li>
            <li>DAQExpress (v. 5.1), National Instruments</li>
            <li>
              mjukvara för lagring av mätdata i en relationsdatabas i MySQL
            </li>
            <li>
              mjukvara i form av PHP-skript för bearbetning av mätdata till
              CSV-format utvecklad av Carl Johan Bergsten
            </li>
            <li>
              mjukvara för att konvertera en CVS-fil till en MIDI-fil: MIDICSV,
              Public Domain, utvecklat av Johan Walker,
              https://www.fourmilab.ch/webtools/midicsv/
            </li>
            <li>
              mjukvara för att producera en ljudfil: Logic Pro (v. 10.6.3),
              Apple
            </li>
          </ul>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
import Title from "@/components/Title.vue";
import Figure from "@/components/Figure.vue";
import Ratio from "@/components/Ratio.vue";
import Guplay from "@/components/Guplay.vue";
import OpenSeadragon from "@/components/OpenSeadragon.vue";
import PlayButton from "@/components/PlayButton.vue";

export default {
  components: { Title, Figure, Ratio, Guplay, OpenSeadragon, PlayButton },
  computed: {
    publicPath: () => process.env.BASE_URL,
  },
};
</script>

<style lang="scss">
.figure-grid {
  display: flex;
  flex-direction: column;
  margin-right: -40px;
  margin-bottom: -40px;

  > div {
    flex: 1;
    margin-right: 40px;
    margin-bottom: 40px;
  }
}

// With .span-columns, the videos can get very large. Place side-by-side.
@media screen and (min-width: 1200px) {
  .figure-grid {
    flex-direction: row;
  }
}
@media screen and (min-width: 2000px) {
  .videos {
    display: flex;
    // flex-direction: row;
    margin-right: -40px;

    .videos-double {
      width: 66.67%;
      padding-right: 40px;
      box-sizing: border-box;
    }
    .videos-single {
      flex: 1;
      padding-right: 40px;
    }
  }
}
</style>
