<script>
  export let sentence;
  export let answer;
  export let grammaticalNumber;
  export let nominative;
  export let gender;
  export let uuid;
  export let visibility;
  export let sentenceMap;
  let failed = false;
  import { COLLAPSE, HIDDEN, VISIBLE } from "./constants.svelte";

  let inputValue = "";
  // Bad design? Child modifies parent?
  const exerciseStateChange = (event) => {
    // Get the current card
    const myElement = document.getElementById(uuid);
    // Get the current text
    const inputAnswer = event.data;
    // If they got the answer right,
    if (answer === inputAnswer) {
      // We can die.
      myElement.remove();
      // Now, get all of the keys in the sentence map,
      const keys = Object.keys(sentenceMap);
      // And get the next UUID.
      const nextKey = keys.at(keys.indexOf(uuid) + 1);
      // Attempt to get the next card.
      const nextItem = sentenceMap[nextKey];
      // If there is one:
      if (nextItem) {
        // Here's its UUID.
        const nextItemID = nextItem.uuid;
        // Get its element,
        const nextItemElement = document.getElementById(nextItemID);
        // And make it visible,
        nextItemElement.style.visibility = VISIBLE;
        // And focus its input so usr doesn't have to click every time.
        const nextItemInput = document.getElementById(`${nextItemID}-input`);
        nextItemInput.focus();
      }
      // If they got it wrong,
    } else {
      // And this is the first time they got it wrong,
      if (!failed) {
        // Give them a red X
        const badText = document.createTextNode(" ❌");
        myElement.appendChild(badText);
        // And make it so we don't keep appending red Xs!
        failed = true;
      }
    }
  };
</script>

<div
  class="genitive-practice-card-container"
  id={uuid}
  style="visibility: {visibility}"
>
  <p>
    Use the <em>{grammaticalNumber} genitive</em> for {nominative}, which is a {gender}
    noun in {grammaticalNumber}
    nominative.
  </p>
  <h3>
    {sentence}
  </h3>
  <input
    bind:value={inputValue}
    on:input={(event) => {
      exerciseStateChange(event);
    }}
    placeholder=""
    id="{uuid}-input"
  />
</div>

<style>
  .genitive-practice-card-container {
    border: 2px dotted white;
    border-radius: 4px;
    padding: 10px;
  }
</style>
