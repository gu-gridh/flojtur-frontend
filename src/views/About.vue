<template>
  <div class="articlepage">
    <Title />
    <article class="articleContainer">
      <router-link to="/" tag="div" id="ItemBack" />

      <h1>Om forsknings&shy;projektet</h1>
      <div class="articleIngress">
        <p>
          Denna webbportal är resultatet av ett forskningsprojekt finansierat av
          Riksbankens jubileumsfond: Stiftvalsen som musikarkiv (2018–2021).
          Projektet fokuserar på Pehr Strand (c1758–1826) som räknas som den
          främste byggaren av flöjtur i Sverige kring 1800. Han byggde flöjtur
          för köpman, brukspatroner, adel och kungligheter. Musiken som spelas
          av spelverket är programmerad med hjälp av metallstift och bryggor på
          en träcylinder. När valsen roterar läser armar av musiken på
          stiftvalsen och spelar den med hjälp av en orgel i miniatyr. Dessa
          stiftvalsar kan ses som ett slags arkiv, i många fall tyst där
          spelmekaniken är trasig, men ändå ett unikt tidsdokument som ger en
          bild av hur man ville att musiken skulle låta vid den här tiden.
        </p>
      </div>
      <div class="articletext">
        <p>
          Projektets syfte var att tillgängliggöra musiken på Strands bevarade
          spelur och att försöka besvara frågor som: Vilken musik var populär i
          kretsen av spelursägare, hur bearbetades musiken för att passa för ett
          spelur och hur programmerade med en stiftvals? Projektet har utvecklat
          en optisk avläsningsmetod i mobilt format för att digitalisera musiken
          på stiftvalsar som inte kan spelas i sitt ursprungliga spelverk.
        </p>
        <p>
          Projektet vill genom denna webbpublikation tillgängliggöra information
          om flöjturen. Det finns huvudsakligen två ingångar till materialet.
          Den första är genom startsidan som ger en kuraterad presentation av
          materialet i form av bilder, texter och andra data. Den andra är genom
          länken Avancerad sökning. Här kommer besökaren direkt till en
          sökfunktion för databasen där egendefinierade sökningar kan göras. En
          beskrivning av respektive datafält, och deras inbördes relationer ges
          genom databasbeskrivningen nedan.s
        </p>
        <p style="text-align: center">* * *</p>
        <p>
          Föreningen för Göteborgs internationella orgelakademi har utgjort värd
          och anslagsförvaltare. Johan Norrback har varit projektledare och
          forskningsansvarig. Medarbetare och externa konsulter har varit
          följande:
        </p>
        <ul>
          <li>
            Carl Johan Bergsten (Föreningen för Göteborgs internationella
            orgelakademi), databas, design av optisk valsläsare samt
            mjukvaruutveckling
          </li>
          <li>Joar Holmström (Virtuell Design), 3D-modellering</li>
          <li>Robert Lerbro (F:a Robert Lerbro), konstruktion av valsläsare</li>
          <li>
            Arild Matsson (Centrum för digital humaniora, Göteborgs
            universitet), utveckling webbpublikation
          </li>
          <li>Leonardo Perretti (orgelbyggare), mjukvaruutveckling</li>
          <li>Olof Pipping (Marotec), teknisk dokumentation och CAD-ritning</li>
          <li>
            Peter Svensson (Norges teknisk-naturvitenskapelige universitet),
            design av optisk valsläsare
          </li>
          <li>
            Jonathan Westin (Centrum för digital humaniora, Göteborgs
            universitet), utveckling webbpublikation
          </li>
          <li>
            Alf Åslund (Föreningen för Göteborgs internationella orgelakademi),
            dokumentationsassistent
          </li>
          <li>
            Maria Öhrman (Centrum för digital humaniora, Göteborgs universitet),
            utveckling webbpublikation
          </li>
        </ul>
        <p>
          Projektet har fått stor hjälp av den kunniga personalen på många
          arkiv, bibliotek, institutioner, museer och av privatpersoner:
        </p>
        <ul class="columns">
          <li>Alingsås museum</li>
          <li>Alsters herrgård, Värmlands museum, Karlstad</li>
          <li>Göteborgs stadsmuseum</li>
          <li>Kungliga Hovstaterna</li>
          <li>Kungl. Skogs- och Lantbruksakademien</li>
          <li>Kungl. Vitterhets Historie och Antikvitets Akademien</li>
          <li>Kunstgewerbemuseum, Berlin</li>
          <li>Malmö museer</li>
          <li>Museum Collection, Moskva</li>
          <li>Museum Speelklok, Utrecht</li>
          <li>Musikinstrumentenmuseum, Berlin</li>
          <li>Musikinstrumentenmuseum der Universität Leipzig, Leipzig</li>
          <li>Musik- och teaterbiblioteket, Stockholm</li>
          <li>Nationalmuseum</li>
          <li>Nordiska museet</li>
          <li>Riksarkivet, Härnösand</li>
          <li>Riksarkivet, Slottsarkivet</li>
          <li>Riksarkivet, Stockholm</li>
          <li>Ringve musikkmuseum, Trondheim</li>
          <li>Scenkonstmuseet</li>
          <li>Stiftung Händel-Haus, Halle</li>
          <li>Stiftelsen Lövstabruks herrgård</li>
          <li>Stiftelsen musikkulturens främjande, Stockholm</li>
          <li>
            Stiftung Preußische Schlösser und Gärten Berlin-Brandenburg, Potsdam
          </li>
          <li>Stockholms stadsarkiv</li>
          <li>Sörmlands museum, Nyköping</li>
          <li>Tekniska museet, Stockholm</li>
          <li>Värmlands arkivcentrum, Karlstad</li>
          <li>Årsta slott</li>
          <li>Örnsköldsviks museum och konsthall</li>
          <li>Östergötlands museum, Linköping</li>
          <li>privatpersoner</li>
        </ul>
        <p>Följande personer har utgjort referensgrupp för projektet:</p>
        <ul>
          <li>Göran Grahn, museichef, Stiftelsen Musikkulturens Främjande</li>
          <li>Mats Krouthén, intendent, Ringve musikkmuseum, Trondheim</li>
          <li>
            Cecilia Lindhé, föreståndare för Centrum för digital humaniora,
            Göteborgs universitet
          </li>
          <li>Christian Thorén, intendent, Göteborgs stadsmuseum</li>
        </ul>
      </div>
    </article>
  </div>
</template>

<script>
import Title from "@/components/Title.vue";

export default {
  name: "About",
  components: { Title },
};
</script>

<style scoped>
.articletext {
  columns: 1;
}

.columns {
  columns: 17em;
}
</style>
