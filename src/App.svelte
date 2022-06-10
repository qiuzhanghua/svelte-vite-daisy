<script>
  import "./styles.css";
  import logo from "./assets/svelte.png";
  import Counter from "./lib/Counter.svelte";
  import {Button, Modal} from "@opentj/jui";
  import Switch from "heroicons/solid/switch-horizontal.svg";
  import { Icon } from "@steeze-ui/svelte-icon";
  import { Annotation, Plus } from "@steeze-ui/heroicons";

  let showModal = false;

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

	<Button class="btn btn-primary"  on:click={()=> {showModal = !showModal}}>
		Open Modal
	</Button>

	<!--	https://tailwindcss-forms.vercel.app/-->
  <!--	<input type="date" class="mt-1 block w-full">-->

  <!--	<div class="aspect-w-16 aspect-h-9">-->
  <!--		<iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>-->
  <!--	</div>-->

		<Modal {showModal}
				on:cancel={()=>{showModal = !showModal}}
				modalClass="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-xl z-50 overflow-auto bg-white rounded-lg"
				backdropClass="fixed top-0 left-0 h-screen w-screen z-[10] bg-gray-200 opacity-75"
		>
			<div class="flex flex-col">
				<div class="p-1 flex justify-center">Header</div>
				<div class="p-1">This is a Dialog</div>
			</div>
		</Modal>
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }
</style>
