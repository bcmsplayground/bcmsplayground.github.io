<script>
  export let title;
  export let imgsrc;
  export let imgalt;
  export let optionid;
  export let component;

  import { loadComponent } from "./stageUtils.svelte";
</script>

<div>
  <input
    class="mighty-morphin"
    type="image"
    id={optionid}
    src={imgsrc}
    alt={imgalt}
    width="75px"
    height="75px"
    on:click={() => {
      loadComponent(component);
    }}
  />
  <br />
  <label for={optionid}>{title}</label>
</div>

<style>
  .mighty-morphin {
    filter: invert(66%) sepia(29%) saturate(745%) hue-rotate(128deg)
      brightness(89%) contrast(90%);
    animation: scaleImg 7s ease infinite;
  }

  @keyframes scaleImg {
    0% {
      transform: scale(0.9);
    }
    50% {
      transform: scale(1);
    }
    100% {
      transform: scale(0.9);
    }
  }
</style>
