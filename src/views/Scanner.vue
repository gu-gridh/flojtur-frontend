<template>
  <div class="articlepage">
    <Title />
    <article class="articleContainer">
      <router-link to="/#menu-model" tag="div" id="ItemBack" />

      <h1>En optisk valsläsare</h1>
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
          mätningarna. En musiker skulle beskriva det som att tonerna spelades,
          eller lästes, för tätt tillsamman (legato). Det gick inte heller att
          uppnå säkrare mätresultat med plastbitarna om olika avstånd till
          stiften och anläggningsvinkel testades.
        </p>
        <Figure>
          <div>[FILM: Plastbit 1] [FILM: Plastbit 2]</div>
          <figcaption>
            Filmerna visar en avläsning med de två olika plastbitarna på samma
            stiftvals och samma passage. De fyra sista stiften och byglarna är
            exempel på områden som skapade problem vid avläsningen.
          </figcaption>
        </Figure>
        <p>
          Till sist beslöts att bygga en miniatyr av en läsarm med lässpets, och
          fjäderbelastning, enligt samma principer som i ett flöjtur. Arbetet
          utfördes av Olof Pipping. Denna konstruktion fungerade felfritt, så
          den första genomförda avläsningen kunde konverteras direkt till MIDI.
          Ljudfilen som blev resultatet är helt obearbetad i mjukvaran, utöver
          den automatiska funktionen för kvantisering. Inställningen sattes till
          notvärdet 1/8.
        </p>
        <Figure>[FILM: Samma passage som ovan med metallarm.]</Figure>
        <h2 class="span-columns">Konstruktionen</h2>
        <Figure>
          <div>[BILD: Principskiss_valsläsare.pdf]</div>
          <figcaption>
            Principskiss till valsläsarens konstruktion. En stegmotor roterar
            valsen och en annan stegmotor flyttar lasergivaren i sidled. En
            mätning görs för respektive spår, vilket motsvarar en ton eller
            orgelpipa. En referensgivare möjliggör en synkronisering av de olika
            mätningarna. Mätningarna samlas in i en mjukvara, och exporteras som
            en CSV-fil. Därefter görs en manuell förberedelse av CSV-filen innan
            den behandlas för konvertering till MIDI. MIDI-filen kan sedan
            redigeras och spelas i lämplig mjukvara.
          </figcaption>
        </Figure>
        <Figure>
          <div>[5 bilder: Valslaesare_1_DSC_0542 …Valslaesare_5_DSC_0552]</div>
          <figcaption>
            Överst ser vi den färdiga valsläsaren, med en bärbar dator för
            insamling av mätdata. Den vita skivan ovanför stiftvalsen är till
            för att kunna göra anteckningar medan en stiftvals läses av.
          </figcaption>
        </Figure>
        <Figure>
          <div>[Bild Valslaesare_6_DSC_0547]</div>
          <figcaption>
            Panel för positionering och start av läsare. Från vänster: summer
            av/på; positionering av lasergivare vänster/höger; brytare för start
            av förinställt program; positionering av vals upp/ner.
          </figcaption>
        </Figure>
        <Figure>
          <div>[Bild Valslaesare_7_DSC_0551]</div>
          <figcaption>
            USB-ingång. Från vänster: insamling av mätdata; inställning av
            respektive stegmotor.
          </figcaption>
        </Figure>
        <Figure>
          <div>Bild Valslaesare_8_DSC_0552]</div>
          <figcaption>
            Väska med hjul och teleskophandtag för transport av valsläsare.
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
          <div>[Bild: Skärmdump från Excel]</div>
          <div>[Skärmdump från Ementool]</div>
          <div>[Skärmdump från DAQExpress]</div>
        </Figure>
        <p>
          Nedan följer exempelfiler från mätningen som gjordes för den ljudfil
          som ligger sist. Här visas endast mätfilen för en ton (tonen A). När
          alla toner är inlästa kombineras de enskilda mätningarna i en samlad
          fil som sedan kan konverteras till MIDI. I detta fall fanns det 17
          toner med stift (data), av ett totalt tonomfång i orgel om 27 toner,
          som sedan skulle korreleras enligt specifikationen för en MIDI-fil.
        </p>
        <pre>
          [FILER:
CSVfil ur DAQExpress;
Bearbetad CSVfil för slutlig samordning i databasen; 
CSV-output ur databasen, 
MIDIFIL konverterad med CSVMIDI
        </pre>
        <Figure>
          <div>Bild: Skärmdump Logic</div>
          <figcaption>MIDI-filen importerad i Logic.</figcaption>
        </Figure>
        <pre>Waw-fil med samplat orgelljud ur Logics ljudbibliotek]</pre>
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
import Figure from "@/components/Figure.vue";
import Title from "@/components/Title.vue";

export default {
  components: { Title, Figure },
};
</script>

<style>
</style>
