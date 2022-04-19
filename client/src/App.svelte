<script>
  import { Router, Route } from "svelte-navigator";
  import welcomePage from "./components/pages/welcomePage.svelte";
  import frontPage from "./components/pages/frontPage.svelte";
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
    <Route path="/" component={welcomePage} />
    <SvelteToast {options} />
    <Route path="/frontPage" component={frontPage} />
  </Router>
</main>
