<script>
  import { UUIDGeneratorBrowser } from "./utils.svelte";
  import GenitivePracticeSuite from "./GenitivePracticeSuite.svelte";
  import Welcome from "./Welcome.svelte";
  import MenuOption from "./MenuOption.svelte";
  const options = [
    {
      title: "Genitive Practice",
      imgsrc: "/src/assets/crystal-ball.png",
      imgalt: "Genitive Practice",
      component: GenitivePracticeSuite,
    },
    {
      title: "Clear Stage",
      imgsrc: "/src/assets/black-x.png",
      imgalt: "Clear Stage",
      // Cheating :) Pass no component so nothing gets added.
      component: Welcome,
    },
  ];
</script>

<div class="mainmenu">
  {#each options as option}
    <MenuOption optionid={UUIDGeneratorBrowser()} {...option} />
  {/each}
</div>

<style>
  .mainmenu {
    position: fixed;
    top: 50%;
    bottom: 50%;
    left: 3px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
</style>
