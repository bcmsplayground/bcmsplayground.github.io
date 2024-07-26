<script>
  export let sentence;
  export let answer;
  export let grammaticalNumber;
  export let nominative;
  export let gender;
  const genitiveSingularEndings = ["a", "e"];
  const genitivePluralEndings = ["a"];

  let inputValue = "";
</script>

<div class="container">
  <p>
    Use the <em>{grammaticalNumber} genitive</em> for {nominative}, which is a {gender}
    noun in {grammaticalNumber}
    nominative.
  </p>
  <h3>
    {sentence}
  </h3>
  <input bind:value={inputValue} placeholder="" />
  {inputValue === answer ? "✅" : "❌"}
</div>

<style>
  .container {
    border: 2px dotted white;
    padding: 10px;
  }
</style>
