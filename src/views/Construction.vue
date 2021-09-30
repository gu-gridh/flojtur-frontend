<template>
  <div class="articlepage">
    <Title />
    <article class="articleContainer">
      <router-link to="/" tag="div" id="ItemBack" />

      <h1>Att bygga ett flöjtur</h1>
      <div class="articleIngress">
        <p>
          Några specifika tekniska framsteg runt sekelskiftet 1700 gjorde att
          klockor och även mekaniska musikinstrument fick ett uppsving. Det ena
          var Christiaan Huygens (1629–1695) metod från 1656 att använda den
          stabila pendelrörelsen som motor i urverk, vilket gav en mycket högre
          precision i gången och därmed i tidvisningen. Dessutom Jacques de
          Vaucanson (1709–1782) metod från 1737 att låta en vals med musik
          förskjutas i sidled för varje varv och därmed skapa ett spriralspår
          innebar att man nu kunde programmera längre musikstycken. Båda dessa
          lösningar ledde till ett uppsving först inom urtillverkningen och
          senare även ur med mekaniska spelverk, i både mindre och större
          format.
        </p>
      </div>
      <div class="articletext">
        <p>
          Tillverkningen av ett golvur innebar att ett antal olika hantverkare
          deltog i produktionen: urmakare, snickare, bildhuggare och
          fodralmålare. I Stockholm fanns alla dessa yrkeskategorier
          representerade och därmed dokumenterade i Fabriksberättelserna. Skulle
          golvuret dessutom spela musik så behövdes instrumentbyggarkunskap samt
          musikalisk kompetens för att arrangera musiken för det specifika
          format spelverket krävde. Att bygga ett spelur var alltså ett ganska
          omfattande projekt som krävde många olika kompetenser.
        </p>
        <p>
          I Berlin försökte Fredrik II etablera staden som ett nav med den
          tidens bästa hantverkare inom bland annat spelursområdet. Han försökte
          till och med rekrytera dåtidens främste möbelsnickare David Roentgen
          (1743–1807), som ofta arbetade tillsammans med urmakaren Peter
          Kintzing (1745–1816) när det gällde att integrera mekaniska spelverk i
          möblerna eller golvuren. Även om rekryteringen inte lyckades, så blev
          Berlin känt för sitt högkvalitativa hantverk. Kända spelursmakare från
          Berlin var Christian Ernst Kleemeyer (1739–1799) och Christian
          Möllinger (1754–1826). I Berlin fanns det även instrumentbyggare som
          Paul Heinrich Calix (1733–1808) som specialiserat sig på att tillverka
          träpipor till speluren, utan att vara orgelbyggare.<sup>1</sup>
        </p>
        <p>
          Den tydligaste beskrivningen av hur ett spelur är konstruerat finner
          vi i ”P. N. Sprengels Handwerke in Tabellen. 8, Beschluß der
          Metallarbeiter : nebst einem Register”. Volym 8 ingår i en serie som
          gavs ut i flera upplagor från 1771. Ett exemplar från den andra
          utgåvan 1794 finns i Kungl. Skogs- och Lantbruksakademiens bibliotek i
          Stockholm. Efter avsnittet om fickursmakare finner vi ett långt
          tillägg som beskriver tre huvudtyper av spelur: flöjturet med
          orgelpipor (<em>Flötenuhr</em>), dulcimeruret med klubbor som slår an
          strängar (<em>Harfenuhr</em>) och ett ur med ett klockspel som anslås
          av hammare (<em>Glockenspiel</em>). Då vi vet att samtida svenska
          skriftliga källor karaktäriserade Pehr Strands spelur som byggda
          enligt den berlinska traditionen så är Sprengels beskrivning av stort
          värde för de svenska förhållandena.
        </p>
        <Figure>
          <Ratio :ratio="2 / 1.7">
            <OpenSeadragon
              :tileSources="[
                publicPath + 'bygga/Sprengel_1794_2uppl_sIMG_4151.dzi',
              ]"
              :cover="false"
            />
          </Ratio>
          <figcaption>
            Plansch ur P. N. Sprengels <em>Handwerke</em> med ett flöjtur nere
            till vänster, uppe till höger ett dulcimerur, och däremellan olika
            vyer av mekanik och stiftvals. Illustrationen är ur utgåvan från
            1771. (Digitaliserat av Bayerische Staatsbibliothek, och publicerat
            under licensen
            <a href="http://rightsstatements.org/vocab/NoC-NC/1.0/"
              >NoC-NC 1.0</a
            >,
            <a href="https://mdz-nbn-resolving.de/details:bsb11279046">MDZ</a>.)
          </figcaption>
        </Figure>
        <p>
          Det finns två svenska skriftliga källor inom ämnet som ger oss viktig
          information. Den första källan härrör från 1731. Det är en avhandling,
          enligt tidens praxis<sup>2</sup>, som försvarades av Magnus Aspelind
          (okänd) under överinseende av Anders Celsius (1701–44). Avhandlingen,
          <em>Disputatio mechanica de horologiis musico-automatis</em
          ><sup>3</sup>, handlar om hur man förser ett urverk med ett
          automatiskt musikspelverk, och är oerhört schematisk i sin
          framställning. Syftet var ju inte primärt att i text presentera fakta,
          utan att texten utgjorde ett underlag för det muntlig försvaret av
          densamma. En intressant detalj i arbetet är dock att den automatiska
          spinett som finns i det Augsburgska konstskåpet, utställt på
          Gustavianum på Uppsala universitet, nämns. Gustav den II Adolf fick
          konstskåpet som gåva den 24 april 1632 efter intåget i staden.<sup
            >4</sup
          >
          Celsius-Aspelind skriver: ”§ XXI. Ett annat konsthantverk förvaras i
          den upsaliensiska akademins allmänna bibliotek, ganska genialiskt
          utarbetat. Där kan en och samma cylinder utföra 3 eller flera
          hymner”.<sup>5</sup>
        </p>
        <p>
          I konstskåpet finns en spinett som man kan spela på, men som också kan
          spela upp olika melodier på en stiftvals i ett mekanisk spelverk.
          Konstskåpet är byggt i Augsburg under tidigt 1600-tal, i en tradition
          som producerat flera likande föremål. I vissa fall har
          instrumenttillverkaren kunnat identifieras som Samuel Bidermann d.ä.
          (1540–1622) och Samuel Bidermann d.y. (1600–c.1653). Konstskåpet kom
          tidigt till Uppsala för att förbli där, och det är därför det är så
          välbevarat. Att spinetten i konstskåpet används som exempel i
          Celsius-Aspelind är ett bra exempel på hur en artefakt kan användas
          som källa.
        </p>
        <p>
          Den andra svenska källan som skall nämnas beskriver delar av processen
          att programmera en stiftvals. Det är Tobias Lang (1760–1836) i Visby
          som är upphovsmannen till materialet, idag förvarat i Landsarkivet i
          Visby.<sup>6</sup> Lang är främst känd för sina färgtryck på
          bomullstyg. I hans arkiv finns en mängd material om färger och tryck,
          men också inom områden som kemi och mekanik och så två olika dokument
          om stiftvalsar och musiken på dessa. I övrigt saknas utförliga
          skriftliga källor, och därmed blir själva speluren den viktigaste
          källan för hur man tillverkar ett spelur.
        </p>
        <p>
          I juli 1791 beviljades Pehr Strands ansökan om att ”inrätta och drifva
          en Fabrique til förfärdigande af Musicaliske Spel=Uhr med valtsar”.
          Han lovade samtidigt att själv inte bygga urverket utan att ”nyttja
          skickelige mästare til Timme Uhrets förfärdigande”.<sup>7</sup> I
          samma ansökan konstateras att det intygats att han kunde hantverket.
          Tyvärr finns inga handlingar bevarade angående var och av vem han lärt
          sig hantverket.
        </p>
        <p>
          Det fanns i Stockholm andra urmakare som kunde bygga spelur, allt från
          mindre ur med små spelverk med klockor till större golvur med
          stiftvalsar och orgelpipor. Bland dessa byggare fanns till exempel
          Eric Lindgren d.y. (1729–1786), Johann Christian Knoop (1733–1808) och
          Petter Söderman (1740–1813). Knoop byggde uteslutande spelur där
          musiken spelades med vals och klubbor som slog på strängar.
          Instrumentet kallas hackbräde eller dulcimer. I Berlin gick denna typ
          av spelur under benämningen <em>Harfenuhr</em> (harpur). I Berlin
          kombinerades detta ibland med en rad orgelpipor, och blev därmed
          ganska komplexa mekaniska konstruktioner med två sorters ljudkällor.
          Lindgren och Söderman byggde däremot spelur i samma stil som Strand,
          nämligen med orgelpipor, så kallade flöjtur.
        </p>
        <p>
          Bland de bevarade spelur från Pehr Strand som studerats i detta
          projekt finns det några karaktärsdrag som går igen. Det finns två
          huvudtyper vad gäller placeringen av spelverket – mekaniken,
          stiftvalsen och den lilla orgeln. Antingen bakom urtavlan, eller i
          sockeln på golvuret. I det senare fallet är sockeln märkbart större.
        </p>
        <Figure>
          <Ratio :ratio="2 / 3">
            <OpenSeadragon
              :tileSources="[
                publicPath + 'bygga/Bremerska_uret_DSC_1432.dzi',
                publicPath + 'bygga/Alingsaasuret_fodral_DSC_6983.dzi',
              ]"
            />
          </Ratio>
          <figcaption>
            <router-link :to="{ name: 'InstrumentPage', params: { id: 1 } }"
              >Bremerska uret</router-link
            >
            med spelverket bakom urtavalan och
            <router-link :to="{ name: 'InstrumentPage', params: { id: 2 } }"
              >Alingsåsuret</router-link
            >
            med spelverket i sockeln.
          </figcaption>
        </Figure>
        <p>
          Vidare har flera av uren en mellandel som är pylonformad – den är
          vidare vid basen än vid toppen. Många spelurfodral har utsmyckningar
          av mycket hög kvalitet. Då Strand var utbildad bildhuggare hos Johan
          Ljung är det möjligt att han själv gjorde dessa utsmyckningar. En
          annan möjlighet är att de är gjorda av Pehr Ljung (1743–1819). Pehr
          Ljung har en del karaktäristiska arbeten som brukar indikera att han
          varit upphovsman. Ett tydligt sådant exempel finns på
          <router-link :to="{ name: 'InstrumentPage', params: { id: 22 } }"
            >Ljungbyuret</router-link
          >. Bården som avslutar mellandelen under urtavlan har den typiskt
          Ljungska vinlövsrankan. Dessutom är mellandelens bas, i övergången
          från sockeln, mycket lik den komposition Pehr Ljung gjorde till Adelsö
          kyrkas altare 1802. Både urfodret och altaruppsatsen har två
          skulpterade ansikten i ytterkant med en liggande triangel däremellan.
        </p>
        <Figure>
          <Ratio :ratio="2 / 3.5">
            <OpenSeadragon
              :tileSources="[publicPath + 'bygga/Ljungbyuret_Img0109.dzi']"
            />
          </Ratio>
          <figcaption>
            <router-link :to="{ name: 'InstrumentPage', params: { id: 22 } }"
              >Ljungbyuret</router-link
            >
            med de ovanliga skärningarna och altaruppsatsen i Adelsö kyrka av
            Pehr Ljung, 1802.
          </figcaption>
        </Figure>
        <p>
          Flera av de andra Strandska uren har utsmyckningar i den gustavianska
          stil som förknippas med bröderna Louis Masreliez (1748–1810) och Jean
          Baptiste Masreliez (1753–1801). De var dåtidens ledande arkitekter och
          bildhuggare. Båda bröderna Masreliez arbetade med inredningen på
          Tullgarns slott, likaså Pehr Ljung, varför det är svårt att säga exakt
          vilka roller respektive bildhuggare eventuellt kan ha haft i
          utformningen av de Strandska urfodralen. Pehr Ljung och Pehr Strand
          hade i varje fall samma läromästare i Johan Ljung. Nedan följer tre
          exempel på inredningsförslag till Tullgarns slott.
        </p>
        <ul>
          <li>
            <a
              href="http://emp-web-84.zetcom.ch/eMP/eMuseumPlus?service=ExternalInterface&module=collection&objectId=44139&viewType=detailView"
            >
              Jean Baptiste Masreliezs inredningsförslag till lilla sängkammaren
              på Tullgarns slott.
            </a>
          </li>
          <li>
            <a
              href="http://emp-web-84.zetcom.ch/eMP/eMuseumPlus?service=ExternalInterface&module=collection&objectId=44136&viewType=detailView"
            >
              Louis Masreliezs förslag till dörrpannåer i stora sängkammaren på
              Tullgarns slott.
            </a>
          </li>
          <li>
            <a
              href="http://emp-web-84.zetcom.ch/eMP/eMuseumPlus?service=ExternalInterface&module=collection&objectId=41914&viewType=detailView"
            >
              Pehr Ljungs inredningsförslag till stora sängkammaren på Tullgarns
              slott.
            </a>
          </li>
        </ul>
        <p>
          Ett av speluren, det så kallade
          <router-link :to="{ name: 'InstrumentPage', params: { id: 3 } }"
            >Masreliezska flöjturet</router-link
          >
          på Göteborgs stadsmuseum, har en förlaga i form av en ritning av Louis
          Masreliez. I detta fall är det otvetydigt så att designen är gjord av
          Masreliez, medan det är oklart vem som utförde arbetet med urfodralet.
          Speluret bär många av de särdrag som Pehr Strands spelur har, särskilt
          då kallstämpeln ”P: STRAND” på två av stiftvalsarna, och dessutom var
          det han som hade privilegium att bygga spelur vid tidpunkten för detta
          spelur från slutet av 1790-talet.
        </p>

        <Figure>
          <Ratio :ratio="2 / 3">
            <OpenSeadragon
              :tileSources="[
                'https://img.dh.gu.se/flojtur/pyr/003_masreliez_gen_Sthlm_KB_Ritning_Masreliez.tif/info.json',
              ]"
            />
          </Ratio>
          <figcaption>Ritning av Louis Masreliez till flöjtur.</figcaption>
        </Figure>

        <p>
          Urtavlorna på speluren är ibland emaljerade och ibland målade; ibland
          med romerska och ibland med arabiska siffror. I några fall används
          båda stilarna, men olika med avseende på timmar respektive
          underdelning i kvartar eller minuter. Urtavlan är i nio fall signerad
          Pehr eller Petter Strand. I ett fall är urtavlan signerad ”Gust: Er:
          Andersson” (Gustav Erik Andersson). Övriga urtavlor är inte signerade.
        </p>

        <Figure>
          <Ratio :ratio="3 / 2">
            <OpenSeadragon
              :tileSources="[
                publicPath + 'bygga/Gustavianska_uret_SMF_0090.dzi',
                publicPath + 'bygga/Speelklokuret_Utrecht__0714.dzi',
                publicPath + 'bygga/Alingsaasuret_urtavla_DSC_6923.dzi',
              ]"
            />
          </Ratio>
          <figcaption>
            Urtavlorna på det
            <router-link :to="{ name: 'InstrumentPage', params: { id: 12 } }"
              >Gustavianska uret</router-link
            >
            från SMKf,
            <router-link :to="{ name: 'InstrumentPage', params: { id: 8 } }"
              >Speelklokuret</router-link
            >
            och
            <router-link :to="{ name: 'InstrumentPage', params: { id: 2 } }"
              >Alingsåsuret</router-link
            >.
          </figcaption>
        </Figure>
        <p>
          Den som signerade urtavlan torde vara den som mottog beställningen,
          och ansvarade för att samordna de olika hantverkskompetensser som
          behövdes. Enligt Strands privilegium, hade han nödvändiga kunskaper
          för att bygga mekaniken och orgeldelen. Tydligen kunde han även bygga
          ett urverk då det tydligt markeras att han inte skulle göra det, utan
          anlita andra mästare för själva urverket. Att han faktisk kunde bygga
          klockor är klargjort genom den signerade väggpendyl som troligen ägdes
          av hans dotter Henrietta, och som efter hennes giftermål 1826 med Carl
          Isaac Löfman gått i arv i släkten. Huruvida Strand kunde programmera
          stiftvalsar med musik är inte klart. Det finns ofta två typer av
          stiftvalsar i de Strandska uren, och de är gjorda enligt två olika men
          likvärdiga principer. Dessutom är stiftvalsarna inte alltid märkta med
          kallstämpeln ”P: STRAND”. Orgeldelen kunde Strand med all sannolikhet
          bygga då han även var verksam som orgelbyggare. Tabellen nedan
          försöker sammanfatta de olika arbetsmomenten och hantverkskompetensen
          utifrån en bedömning av Strands kompetenser.
        </p>

        <Figure>
          <Ratio :ratio="4 / 3">
            <OpenSeadragon
              :tileSources="[
                publicPath + 'bygga/Uhrmacherwerkstatt_Schwarzwald_00.dzi',
              ]"
            />
          </Ratio>
          <figcaption>
            Scen ur en flöjtursverkstad i Schwarzwald (ca 1825). Källa
            wikipedia.
          </figcaption>
        </Figure>

        <Figure class="span-columns" style="margin-top:50px;">
          <table>
            <thead>
              <th>Arbetsmoment</th>
              <th>Kompetens i verkstaden</th>
            </thead>
            <tbody>
              <tr>
                <td>spelmekanik</td>
                <td>ja</td>
              </tr>
              <tr>
                <td>orgel</td>
                <td>ja</td>
              </tr>
              <tr>
                <td>stiftvals&shy;programmering</td>
                <td>oklart, två olika programmeringsmetoder förekommer</td>
              </tr>
              <tr>
                <td>urverk</td>
                <td>
                  ja, men inte tillåtet inledningsvis, urverk i delar fanns även
                  till salu
                </td>
              </tr>
              <tr>
                <td>urfodral</td>
                <td>ja</td>
              </tr>
              <tr>
                <td>bildhuggeri</td>
                <td>ja, men även kopplingar till Masreliez och Ljung</td>
              </tr>
              <tr>
                <td>bemålning</td>
                <td>
                  ja enklare, men kineserier troligen av en expert som Jonas
                  Klefverström (verksam 1774–94)
                </td>
              </tr>
            </tbody>
          </table>
       

        <figcaption>
          Kompetensen i verkstaden var dock inte statisk och över åren hade
          Strand flera anställda. I Schwarzwald är det väl känt att hela
          familjer var delaktiga i produktionen av de kända speluren, ofta med
          rörliga figurer. I mantalslängden från Stockholm 1810, där Pehr Strand
          tituleras spelursfabrikör, sägs hans son Johan Samuel vara ”utlärling
          af samma yrke.” Jonas Samuel var 24-åring vid tidpunkten för
          mantalslängden, och var säkert delaktig som boende i hushållet.
            </figcaption>
         </Figure>

        
      </div>

      <div class="articletext footnotes">
        <hr class="span-columns" />
        <p>
          1. Herbert Heyde, <em>Musikinstrumentenbau in Preußen</em>, Tutzing:
          Hans Schneider, 1994.
        </p>
        <p>
          2. B. Lindberg, ”Om dissertationer”, i
          <em>
            Bevara för framtiden: texter från en seminarieserie om
            specialsamlingar </em
          >, Uppsala: Uppsala universitetsbibliotek, 2016, s. 13–39.
          urn:nbn:se:uu:diva-306218.
        </p>
        <p>
          3. Celsius, Anders,
          <em>
            Disputatio mechanica de horologiis musico-automatis, quam cum
            consensu ampliss. facult. philos. in regio Upsaliensi lyceo, sub
            præsidio ... Andreæ Celsii ... publice ventilandam sistit Magnus D.
            Aspelind Dalekarlus. In audit. Gust. maj. ad diem IX. Julii anni
            MDCCXXXI. Horis ante meridiem solitis. </em
          >, Diss. Uppsala : Uppsala universitet, 1731,Upsaliæ literis
          Wernerianis., 1731.
          <a
            href="http://urn.kb.se/resolve?urn=urn%3Anbn%3Ase%3Auu%3Adiva-345736"
            >urn:nbn:se:uu:diva-345736</a
          >
        </p>
        <p>
          4. Augsburgska konstskåpet på Gustavianum, Uppsala universitet.
          <UrlLink
            url="https://www.gustavianum.uu.se/samlingar/konstsamlingar/utstallningar/augsburgska-konstsk%C3%A5pet/"
          />
        </p>
        <p>
          5. Celsius-Aspelind, <em>Disputatio mechanica</em>, s. 12.
          Översättningen från latinet är gjord med stöd av Erik Wiberg.
        </p>
        <p>6. Riksarkivet/Landsarkivet Visby, SE ViLA 11248 FI 6.</p>
        <p>
          7. Riksarkivet, Kommerskollegium, Huvudarkivet, Koncept, huvudserien,
          (SE/RA/420132/1/B II a/46).
        </p>
      </div>
    </article>
  </div>
</template>

<script>
import Title from "@/components/Title.vue";
import Figure from "@/components/Figure.vue";
import OpenSeadragon from "@/components/OpenSeadragon.vue";
import UrlLink from "@/components/UrlLink.vue";
import Ratio from "@/components/Ratio.vue";

export default {
  components: { Title, Figure, Ratio, OpenSeadragon, UrlLink },
  computed: {
    publicPath: () => process.env.BASE_URL,
  },
};
</script>

<style scoped>
table {
  text-align: left;
}
th,
td {
  padding: 5px 30px 0px 0px;
}
</style>
