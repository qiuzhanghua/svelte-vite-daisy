<script>
  import "./styles.css";
  import logo from "./assets/svelte.png";
  import Counter from "./lib/Counter.svelte";
  import { Button } from "@opentj/jui";
  import Switch from "heroicons/solid/switch-horizontal.svg";
  import { Icon } from "@steeze-ui/svelte-icon";
  import { Annotation, Plus } from "@steeze-ui/heroicons";
</script>

<main class="mt-2 h-screen text-center" data-theme="tj">
  <div class="flex justify-center">
    <img class="h-16 w-16" src={logo} alt="Svelte Logo" />
  </div>
  <Counter />
  <div class="mt-4">Hello Tailwind CSS!</div>
  <div>
    <Button class="btn btn-primary mt-3 rounded-full">
      Button
      <Switch class="ml-3 mr-1 mt-[0.125rem] h-5 w-5" />
      <!--	  <Icon src={SwitchHorizontal} theme='solid' class='ml-3 mr-1 mt-[0.125rem] h-5 w-5'/>-->
    </Button>

    <Button class="btn btn-info rounded-full">
      <Icon src={Plus} theme="solid" class="h-5 w-5" />
    </Button>
  </div>

  <div class="flex justify-around">
    <Icon src={Annotation} theme="solid" class="text-red-500" width={48} />
    <Icon src={Annotation} theme="default" class="text-red-500" width={48} />
  </div>

  <!--	https://tailwindcss-forms.vercel.app/-->
  <!--	<input type="date" class="mt-1 block w-full">-->

  <!--	<div class="aspect-w-16 aspect-h-9">-->
  <!--		<iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>-->
  <!--	</div>-->
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }
</style>
