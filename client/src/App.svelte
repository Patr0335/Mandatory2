<script>
  import { Router, Route } from "svelte-navigator";
  import welcomePage from "./components/pages/welcomePage.svelte";
  import test from "./components/pages/test.svelte";
  import { SvelteToast } from '@zerodevx/svelte-toast'


  // Toast styling - Notification 
  const options = {
    theme: {
      "--toastBackground": "#48BB78",
      "--toastBarBackground": "#2F855A",
      reversed: true,
      intro: { y: 192 },
    },
  };
</script>

<main>
  <Router>
    <!-- der skal self stå welcomepage istedet for test. det er for at vi bedre kan lave ændringer -->
    <Route path="/" component={welcomePage} />
    <SvelteToast {options} />
    <Route path="/test" component={test} />
  </Router>
</main>
