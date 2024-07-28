<script>
  import { SINGULAR, PLURAL, MASCULINE, FEMININE } from "./constants.svelte";
  import GenitivePracticeCard from "./GenitivePracticeCard.svelte";
  import { UUIDGeneratorBrowser } from "./utils.svelte";
  import { VISIBLE, HIDDEN } from "./constants.svelte";

  let sentences = [
    {
      sentence: "Molim vas, pitu od sir_.",
      nominative: "sir",
      answer: "a",
      grammaticalNumber: SINGULAR,
      gender: MASCULINE,
    },
    {
      sentence: "Oprostite, može li sok od jabuk_.",
      answer: "e",
      nominative: "jabuka",
      grammaticalNumber: SINGULAR,
      gender: FEMININE,
    },
    {
      sentence: "Oprostite, može li još i boca mineralne vod_?",
      answer: "e",
      nominative: "voda",
      grammaticalNumber: SINGULAR,
      gender: FEMININE,
    },
    {
      sentence: "Može li pita od jabuk_?",
      answer: "a",
      nominative: "jabuke",
      grammaticalNumber: PLURAL,
      gender: FEMININE,
    },
    {
      sentence: "Može li pita od malin_?",
      answer: "e",
      nominative: "malina",
      grammaticalNumber: SINGULAR,
      gender: FEMININE,
    },
    {
      sentence: "Može li pita od špinat_?",
      answer: "a",
      nominative: "špinat",
      grammaticalNumber: SINGULAR,
      gender: MASCULINE,
    },
    {
      sentence: "Može li sok od malin_?",
      answer: "a",
      grammaticalNumber: PLURAL,
      nominative: "maline",
      gender: FEMININE,
    },
    {
      sentence: "Može li juha od mrkv_?",
      answer: "e",
      grammaticalNumber: SINGULAR,
      nominative: "mrkva",
      gender: FEMININE,
    },
    {
      sentence: "Može li juha od šparog_?",
      answer: "a",
      grammaticalNumber: PLURAL,
      nominative: "šparoge",
      gender: FEMININE,
    },
    {
      sentence: "Imate li kolač od čokolad_?",
      answer: "e",
      grammaticalNumber: SINGULAR,
      nominative: "čokolada",
      gender: FEMININE,
    },
    {
      sentence: "Može li sok od rajčic_?",
      answer: "a",
      grammaticalNumber: PLURAL,
      nominative: "rajčice",
      gender: FEMININE,
    },
    {
      sentence: "Imate li pivo bez alkohol_.",
      answer: "a",
      grammaticalNumber: SINGULAR,
      nominative: "alkohol",
      gender: MASCULINE,
    },
    {
      sentence: "Molim Vas, kavu bez šećer_.",
      answer: "a",
      grammaticalNumber: SINGULAR,
      nominative: "šećer",
      gender: MASCULINE,
    },
  ];
  for (let sentence of sentences) {
    sentence.uuid = UUIDGeneratorBrowser();
    sentence.visibility = HIDDEN;
  }
  sentences[0]["visibility"] = VISIBLE;

  const ordering = Object.fromEntries(
    sentences.map((sentence) => [sentence.uuid, sentence])
  );
</script>

<div class="genitive-practice-suite">
  <h2>It's time to practice genitive.</h2>
  <p>
    Fill in the input boxes with the missing letters from the example sentences.
  </p>
  {#each sentences as sentence}
    <GenitivePracticeCard {...sentence} sentenceMap={ordering} />
  {/each}
</div>

<style>
  .genitive-practice-suite {
    position: fixed;
    top: 50px;
    left: 30%;
    right: 30%;
  }
</style>
