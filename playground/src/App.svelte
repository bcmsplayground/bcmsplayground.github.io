<script>
  const SINGULAR = "singular";
  const PLURAL = "plural";
  const MASCULINE = "masculine";
  const NEUTER = "neuter";
  const FEMININE = "feminine";

  import GenitivePracticeCard from "./lib/GenitivePracticeCard.svelte";

  const sentences = [
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
      sentence: "Može li sok od rajčic_? (množina)",
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
</script>

<main>
  <p>Now THIS is a front page.</p>
  <p>Coming hopefully soon: BCMS exercises.</p>
  <p>Updated 2024-07-24</p>

  {#each sentences as sentence}
    <GenitivePracticeCard {...sentence} /><br />
  {/each}
</main>
