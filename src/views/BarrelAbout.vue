<template>
  <div class="articlepage">
    <Title />
    <article class="articleContainer">
      <router-link to="/#menu-model" tag="div" id="ItemBack" />

      <h1>Att programmera en stiftvals</h1>
      <div class="articleIngress">
        <p></p>
      </div>
      <div class="articletext">
        <p>
        En av de mest utförliga skriftliga beskrivningar av hur man programmerar en stiftvals görs av 
        benediktinmunken François Bédos de Celles (1709–79) i samband med att han i den fjärde och sista 
        volymen av hans välkända verk <i>L’art du facteur d’orgues</i> (1766–78)<sup>1</sup> beskriver 
        hur man bygger en mekanisk orgel. Metoden för att förbereda och programmera musiken, benämnd 
        tonotechnie, var utvecklad av kollegan augustinmunken Marie-Dominique-Joseph Engramelle (1727–1805). 
        Bédos skriver att Engramelle var delaktig i arbetet med avsnittet om musikprogrammeringen i 
        <i>L’art du facteur d’orgues.</i> Det system Bédos beskriver utgår från att musiken analyseras, 
        och därefter indelas i mindre delar. När detta är gjort används en skiva med indelningar för att 
        kunna orientera sig när man sakta roterar valsen. Vid respektive position på skivan markeras motsvarande 
        punkt på valsens yta. Därefter kan stiften placeras. Skivan är utbytbar allt efter tempo, taktart och 
        tonernas inbördes förhållande. Samma teknik användes även senare i början av 1800-talet av de kända 
        vevpositivtillverkarna i familjen Bruder i Schwarzwald. Den finns här beskriven av Ignaz Bruder 
        i den verkstadsbok som han lämnade till sina efterföljare. <sup>2</sup>
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
           Gravyr ur Engramelles bok <i>La Tonotechnie ou L’Art Denoter Les Cylindres</i> (Paris: P. M. Delaguette, 1775). 
           I verkstaden ser vi olika mekaniska instrument och en klocka. Vid bordet sitter två personer – 
           till vänster arbetas det med en serinett med en delningsskiva på veven och till höger programmeras 
           en stiftvals i en särskild valshållare. Källa: https://archive.org/details/latonotechnieoul0000engr/page/n13/mode/1up.
          </figcaption>
        </Figure>

      <p>
      I Strands spelur finns stiftvalsar med ett rutmönster inskuret i trävalsens yta. Strecken i axelns 
      längdriktning motsvarar musikstyckets taktindelning och taktarten. Ofta finner man en numrering av takterna 
      i blyerts. De kortaste notvärdena verkar ha placerats på fri hand, mellan markeringar. Den längsgående linjen 
      följer läsarmen, och går i ett spiralmönster för respektive ton och pipa. Denna spiralgång åstadkoms genom att 
      stiftvalsen förskjuts i sidled för varje varv. I Strands spelur roterar stiftvalsen vanligen 6 varv och förskjuts 
      2 mm i sidled för varje varv. Denna förskjutning i sidled uppfanns av Jacques Vaucanson och presenterades i tryck 1738. 
      Vaucansons uppfinning utgör ett paradigmskifte i utveckling av mekaniska musikinstrument då det möjliggjorde uppspelning 
      betydligt längre musikstycken än tidigare.
      </p>

       <p>
       Tekniken med att använda ett rutmönster som referenssystem verkar ha en lång tradition i det tyska språkområdet, som kan 
       spåras tillbaka åtminstone till Salomon de Caus<sup>3</sup>  (1576–1626) och Athanasius Kircher<sup>4</sup>  (1602–80). Denna metod återfinns även 
       hos de kända byggarna av mekaniska instrument Veit Langenbucher (1587–1631) och Samuel Bidermann (1540–1622) i Augsburg.<sup>5</sup>  
       Kircher beskriver i <i>Musurgia Universalis</i> hur man för över musiken till stiftvalsen genom att vira ett papper med ett rutmönster runt stiftvalsen.<sup>6</sup> 
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
           Exempel på musik transkriberad till papper för en vals. Ur Athanasius Kircher, <i>Musurgia Universalis</i>, vol. 2 (1650), s. 313 och 315 (beskurna). Noterna läses som brukligt från vänster till höger, medan transkriberingen läses uppifrån ner. Första taktens fyra långa toner kan lätt identifieras i de långa strecken i den översta rutan i den hägra bilden. I den andra takten är det tre länger toner i understämmorna och kortare notvärden i den översta stämman. I den högra bilden ser vi ligger de kortare notvärden längst till höger.
          </figcaption>
        </Figure>

        <p>
        Samma teknik beskrivs i en svensk avhandling från 1731 av Magnus Aspelind (okänd) under överinseende av Anders Celsius (1701–44). 
        Avhandlingen, <i>Disputatio mechanica de horologiis musico-automatis</i><sup>7</sup>, exemplifierar processen att transkribera en melodi för en vals till ett klockspel.
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
           Ur <i>Disputatio mechanica</i>, början av psalmmelodin till ”Far thin weg thu arga werld”, nr 271 i psalmboken 1697, samt transkribering till papper för en vals (s. 11 och utvik på s. 13, beskruna). Valsen är avsedd för ett klockspel då tonerna inte har någon tonlängd utan endast en impuls för slaget på klangskålen.          </figcaption>
        </Figure>

         <p>
         Transkriberar vi detta exempel till modern notation finner vi faktiskt tre skrivfel. Tonen ”b” anges tydligt två gånger i förlagan på s. 13 
         i Aspelind. Detta vore en ytterst otidsenlig harmonik om så vore fallet. Dessutom saknas det en ton, a<sup>1</sup> , i melodin. Gravören som gjorde 
         utviket kunde knappast noter, och korrekturläsningen missade denna detalj, vilket exemplifiera de svårigheter som uppstår i en komplex 
         produktionsprocess där olika kompetenser skall samarbeta. Den som skulle programmera en stiftvals var tvungen att ha både en musikalisk 
         kompetens och ett visst hantverkskunnande så stiften kunde placeras korrekt.
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
           Punktnotationen för en vals transkriberad till noter. Pilarna anger felen i transkriptionen.
             </figcaption>
        </Figure>


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
           Transkriptionen av utviket i Logic Pro i vyn Piano Roll. Pilarna anger felen.        </figcaption>   
           </Figure>

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
           Transkriptionen exporterad som ljudfil med ett klockspel ur ljudbiblioteket.     </figcaption>
            </Figure>

          <p>
          Tekniken med papper som viras runt en trävals medför en del problem då pappret behöver limmas. Det finns stiftvalsar i Strands spelur 
          med vad som verkar vara pappersrester fastklämda under stiften. Dessa stiftvalsar har i övrigt en omärkt träyta, varför det rimligen 
          var på pappret som referenslinjerna var tecknade.
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
            En stiftvals till Kungl. Vitterhetsakademiens spelur, med rester av papper under några stift.
             </figcaption>
        </Figure>

      <p>
      I en annan svensk källa, Tobias Lang (1730–1836) i Visby, finner vi en beskrivning om programmeringen av valsar med hjälp av papper.<sup>8</sup>   
      Lang kom ursprungligen från dagens Ungern, och är mest känd som kattuntryckare, färgtryck på bomullstyg. Hans arkiv innehåller en hel del 
      material om färger, och kemiska experiment och jordbruk, men också om mekaniska frågor. Bland dessa blandade ämnen återfinns en text och en 
      bild på hur man programmerar en stiftvals. Lang skriver om hur man använder ett papper som referens:
      </p>
      
      <p>
      “så lindas dett på Waltsen, lindas på tätt och stickas med En Jern Griffel, hvilkens ud doppas hvargång uti en Uplösning av Jern Vitriol 
      i Watten, hvarefter blir uti Waltsen som är af Aspträd En grå punkt, så at den kan synas när alla puncter äro tecknade, tagas paperet ifrån, 
      och in=slås med En dertil gjord ihålig Stålstift, Messing, eller Stålstiftarne, så at de alla bly Lika Långa.”<sup>9</sup>  
      </p>
                  
      <p>
      Lang kommenterar inte vidare var han lärt sig denna metod, men vi vet att han följde utvecklingen i Sverige inom flera områden. 
      </p>

    <p>
Stiftvalsarna i Strands spelur är alltså programmerade med två olika metoder, men troligen hade de rutmönstret gemensamt. 
Den ena metoden använder sig av ett rutmönster inristat i trävalsens yta, medan pappersresterna verkar antyda att den andra 
metoden använde sig av papper med ett rutmönster som referenssystem. Pappret togs bort efter stiften placerats.
</p>
                             
                             
<p>
Att programmera en stiftvals kräver en musikalisk kompetens, och då två olika metoder används, verkar det som att det fanns 
minst två personer med denna specifika kompetens verksamma i Stockholm vid slutet av 1700-ttalet. Detta är i linje med vad som 
rapporteras från andra länder. I Berlin fanns det ett begrepp för dessa, <i>Walzensetzer</i> (valssättare)<sup>10</sup>, och i London verkar de 
också ha funnits en liknande praxis med papper som referenssystem, och professionella valsprogrammerare. I Edinburgh skriver 
Thomas Reid 1826 om att han inte haft erfarenhet av att som i London “…getting music pricked on the barrels by any professional person.”<sup>11</sup>  
Engelskans ”pricker” går tillbaka på prick som betyder syl eller pryl,  eller som i Tobias Langs text en ”Jern Griffel” vilket snarare
 är vad vi i modernt språkbruk skulle kalla gravstickel, alltså ett vasst verktyg för gravyr.
 </p>

<p>
Senare under 1800-talet utvecklades metoderna för en ökad produktionstakt och då konstrueras specialiserade arbetsstationer med 
valshållare och referensskivor för tidsindelningen och placeringen av stiften. I tyskan benämns dessa <i>Zeichenstuhl</i> (från <i>Zeichen</i>, tecken eller märke).<sup>12</sup> 
</p>

<p>
När man studerar stiftvalsarna till Strands spelur ser man spår av programmeringen. På valsar med rutmönster på träytan kan man ofta se ett varv i 
vardera änden av valsen med markeringar gjorda med en vass spets. Linjerna för tidsindelningen följer markeringarna.
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
           Markeringar för tidsindelningen gjorda med en vass spets runt hela valsen.
             </figcaption>
        </Figure>


<p>
Takterna kan vara numrerade, och siffran 19 kan inte ha skrivits efter att stiften placerats. I något fall markeras början och slutet av musiken med 
de tyska orden Anfang (början) och Ende (slut). Programmeraren i detta fall bör därför ha varit av tyskt ursprung, alternativt ha lärt sig hantverket och terminologin av en tysk.
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
           Exempel på takternumrering och texten Anfang och Ende på två olika stiftvalsar till olika flöjtur.
           </figcaption>
        </Figure>

<p>
Kring en del stift kan man se spåren efter det verktyg som använts för att trycka in stiftet i träytan. Man ser ett halvcirkelformat spår runt stiftets bas.
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
           
           Spår av verktyg för placering, eller höjdjustering, av stiften.
            </figcaption>
        </Figure>

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
           Exempel på verktyg som behövs för stiftning av valsar enligt Dom Bédos <i>L’art du facteur d’orgues</i> från 1778, band 4, planscherna 51 och 53. (Herbert Blomstedt Collection, Göteborgs universitetsbibliotek).
            </figcaption>
        </Figure>

<p>
Det verkar också vara så att spiralmönstret har skurits med hjälp av ett verktyg med flera eggar eller blad. I ett fall finns tydliga spår av hur verktyget 
i slutet av markeringen halkat och skapat parallella spår över de redan ristade spåren.
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
             </figcaption>
        </Figure>


<p>
Innan specialiserade arbetsstationer för programmering av stiftvalsar utvecklats torde själva spelverket som fanns i speluret ha använts för att programmera 
valsarna. Detta är troligen den enklaste arbetsordning för i det mekaniska verket fanns redan det kamhjul som tillsammans med en hävarm styr förskjutning av 
valsen i sidled. Detta innebär att stiftvalsarna då endast är spelbara i det spelur de byggts för eftersom varje spelur och kamhjul är unikt. 
Skall nya stiftvalsar göras behöver byggaren ha tillgång till speluret igen, vilket inte är orimligt att tänka sig.
</p>

<p>
Vem som gjorde programmeringen av stiftvalsarna till Strands flöjtur är inte klarlagt. Pehr Strand verkar själv inte ha haft någon musikalisk utbildning, 
däremot hans söner. Äldste sonen Jonas Samuel, boende hos sin far benämnd spelursfabrikör, beskrivs i mantalslängden från Stockholm 1810 som ”utlärling af samma yrke.” 
Jonas Samuel var 24-år vid tidpunkten för mantalslängden, och hade säkert hjälpt till i verkstaden sedan unga år. Han verkade som organist och orgelbyggare i Västra Vingåker från 1811, 
så den musikaliska kompetensen hade han.
</p>
      
      </div>
      <div class="articletext footnotes">
        <hr class="span-columns" />
        <p>
          1.  Det finns flera digitaliserade exemplar i hög upplösning på webben, bland annat hos Bibliothèque nationale de France och Library of Congress, och här är en direktlänkt till volym 4: https://www.europeana.eu/sv/item/9200520/12148_bpt6k10732882. En engelsk översättning är också tillgängli: François Bedos de Celles, The Organ-Builder, trans. Charles Ferguson (Raleigh: The Sunbury, 1977).
        </p>
        <p>
          2. Verkstadsboken finns i en faksimilutgåva med kommentarer: Ignaz Blasius Bruder och Hermann Brommer, <i>Handbuch der Orgelbaukunst</i> (Waldkirch: Waldkircher Orgelstiftung, 2006).
        </p>
        <p>
          3. Salomon de Caus, <i>Les raisons des forces mouvantes</i>, 1615, https://doi.org/10.11588/ diglit.1445. Det finns även en tysk utgåva från 1615, <i>Von gewaltsamen Bewegungen</i>, https://doi.org/10.11588/diglit.16267.
        </p>
        <p>
          4. Athanasius Kircher, <i>Musurgia Universalis</i>, vol. 1 (1650), https://doi.org/10.11588/ diglit.27668 och vol. 2 (1650), https://doi.org/10.11588/diglit.27669. En tysk översättning (2018) av Günter Scheibel finns på https://www.hmt-leipzig.de/de/home/ fachrichtungen/institut-fuer-musikwissenschaft/forschung/musurgia-universalis/volltextseite.
        </p>
        <p>
          5. Se Albert Protz, <i>Mechanische Musikinstrumente</i> (Kassel, 1943).
        </p>
        <p>6. Kircher, Musurgia, Buch IX (2018), 172–73, https://www.hmt-leipzig.de/home/fachrichtungen/institut-fuer-musikwissenschaft/forschung/musurgia-universalis/volltextseite/content_961686/D_B09.pdf.</p>
        <p>
          7. Celsius, Anders, <i>Disputatio mechanica de horologiis musico-automatis, quam cum consensu ampliss. facult. philos. in regio Upsaliensi lyceo, sub præsidio ... Andreæ Celsii ... publice ventilandam sistit Magnus D. Aspelind Dalekarlus. In audit. Gust. maj. ad diem IX. Julii anni MDCCXXXI. Horis ante meridiem solitis.</i>, Diss. Uppsala : Uppsala universitet, 1731,Upsaliæ literis Wernerianis., 1731. urn:nbn:se:uu:diva-345736
        </p>
            <p>
          8. Visby landsarkiv (ViLA), Tobias Langs arkiv, Ämnesordnade handlingar, Fysikaliska, kemiska och färgtekniska rön, F 1:6 (1801–1834) and F 1:9 (1813–1834). Tack till Eva Helenius som vägledde mig till detta material.
        </p>
            <p>
          9. ViLA, Tobias Langs arkiv, Ämnesordnade handlingar, Fysikaliska, kemiska och färgtekniska rön, F 1:6, n.p.
        </p>
            <p>
          10. Heyde, <i>Musikinstrumentenbau</i>, 330.
        </p>
            <p>
          11. Thomas Reid, <i>Treatise on Clock and Watch Making, Theoretical and Practical</i> (Edin¬burgh: John Fairbairn, 1826), 412–13, https://archive.org/download/treatiseonclock00reidgoog/ treatiseonclock00reidgoog.pdf.
        </p>
            <p>
          12. Se till exempel Herbert Jüttemann, <i>Mechanische Musikinstrumente: Einführung in
Technik und Geschichte</i> (Frankfurt/M.: Bochinsky, 1987), 93–4.

        </p>
      </div>
    </article>
  </div>
</template>

<script>
import Title from "@/components/Title.vue";
import Figure from "@/components/Figure.vue";
import Square from "@/components/Square.vue";
import OpenSeadragon from "@/components/OpenSeadragon.vue";
</script>

<script>
export default {};
</script>

<style>
</style>
