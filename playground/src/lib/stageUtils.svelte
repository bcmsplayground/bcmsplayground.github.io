<script context="module">
  export const stageId = "stage";
  export const getStage = () => {
    return document.getElementById(stageId);
  };
  export const clearStage = () => {
    const stage = getStage();
    while (stage.firstChild) {
      stage.removeChild(stage.lastChild);
    }
  };
  export const loadComponent = (component) => {
    clearStage();
    if (component) {
      new component({ target: getStage() });
    }
  };
</script>
