<script>
    import { Router, Link, Route } from "svelte-routing";
    import Second from "./Second.svelte";
    import WelcomePage from "./WelcomePage.svelte"
    
  
    export let url = "";
  </script>
  
  <Router url="{url}">
    <nav>
      <Link to="/">Welcome Page</Link>
      <Link to="/Second">Second Page</Link>
    </nav>
    <div>
      <Route path="/Second" component="{Second}" />
      <Route path=""><WelcomePage/></Route>
    </div>
  </Router>

