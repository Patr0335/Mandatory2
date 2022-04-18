<script>
  import { onMount } from "svelte";
  import { navigate } from "svelte-navigator";

  let responseMessage = "";

  async function logout() {
    const res = await fetch(`/api/logout`);

    responseMessage = await res.text();

    setTimeout(() => {
      navigate("/", { replace: true });
    }, 1500);
  }

  let memeproducts = [];

  // Fetcher produkter fra min server
  onMount(async () => {
    const res = await fetch("/api/memeproducts");
    const { data: memeproductsArr } = await res.json();
    memeproducts = memeproductsArr;
  });


//   // Function der tilføjer et produkt til min kurv
//   function addProductToBasket(product) {

// basket.update( storeValue => {
//     let foundProduct = storeValue.memeproducts.find(p => p.product.id == product.id)
//     if(foundProduct) {
//         foundProduct.amount ++
//     } else {
//         storeValue.products.push({product, amount:1});
//     }
//     console.log(storeValue.products)
//     return storeValue;
// });
// }
</script>

<body id="page-top">
  <!-- Navigation-->
  <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
    <div class="container">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        Menu
        <i class="fas fa-bars ms-1" />
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
          <li class="nav-item">
            <a class="nav-link" href="#services">Services</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#portfolio">Meme packages</a>
          </li>
          <li class="nav-item"><a class="nav-link" href="#about">About</a></li>
          <li class="nav-item"><a class="nav-link" href="#team">Team</a></li>
          <button class="logoutbutton" on:click={logout}> Logout </button>
        </ul>
      </div>
    </div>
  </nav>
  <!-- Masthead-->
  <header class="masthead">
    <div class="container">
      <div class="masthead-subheading">Welcome to Patrick's MemeShop!</div>
      <div class="masthead-heading text-uppercase">It's Nice To Meme You</div>
      <a class="btn btn-primary btn-xl text-uppercase" href="#services"
        >Tell Me(me) More</a
      >
    </div>
  </header>
  <!-- Services-->
  <section class="page-section" id="services">
    <div class="container">
      <div class="text-center">
        <h2 class="section-heading text-uppercase">Services</h2>
        <h3 class="section-subheading text-muted">
          A meme for every occation!.
        </h3>
      </div>
      <div class="row text-center">
        <div class="col-md-4">
          <span class="fa-stack fa-4x">
            <i class="fas fa-circle fa-stack-2x text-primary" />
            <i class="fas fa-handshake-angle fa-stack-1x fa-inverse" />
          </span>
          <h4 class="my-3">We'll create memes for you!</h4>
          <p class="text-muted">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
            maxime quam architecto quo inventore harum ex magni, dicta impedit.
          </p>
        </div>
        <div class="col-md-4">
          <span class="fa-stack fa-4x">
            <i class="fas fa-circle fa-stack-2x text-primary" />
            <i class="fas fa-thumbs-up fa-stack-1x fa-inverse" />
          </span>
          <h4 class="my-3">in need of likes?</h4>
          <p class="text-muted">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
            maxime quam architecto quo inventore harum ex magni, dicta impedit.
          </p>
        </div>
        <div class="col-md-4">
          <span class="fa-stack fa-4x">
            <i class="fas fa-circle fa-stack-2x text-primary" />
            <i class="fas fa-face-laugh-squint fa-stack-1x fa-inverse" />
          </span>
          <h4 class="my-3">
            We'll make you laugh or give you, your money back!
          </h4>
          <p class="text-muted">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
            maxime quam architecto quo inventore harum ex magni, dicta impedit.
          </p>
        </div>
      </div>
    </div>
  </section>
  <!-- Service-Package Grid-->
  <section class="page-section bg-light" id="portfolio">
    <div class="container">
      <div class="text-center">
        <h2 class="section-heading text-uppercase">
          Our Meme service-packages
        </h2>
        <h3 class="section-subheading text-muted">
          Here's a list of our Meme service packages for every occation. Click
          on the packages for more info.
        </h3>
      </div>
      <div class="row">
        <div class="col-lg-4 col-sm-6 mb-4">
          <!-- Service-Package item 1-->
          <div class="portfolio-item">
            <a
              class="portfolio-link"
              data-bs-toggle="modal"
              href="#portfolioModal1"
            >
              <div class="portfolio-hover">
                <div class="portfolio-hover-content">
                  <i class="fas fa-plus fa-3x" />
                </div>
              </div>
              <img
                class="img-fluid"
                src="assets/img/portfolio/1.jpg"
                alt="..."
              />
            </a>
            <div class="portfolio-caption">
              <div class="portfolio-caption-heading">
                Reach the Hot Page on 9gag 
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6 mb-4">
          <!-- Service-Package item 2-->
          <div class="portfolio-item">
            <a
              class="portfolio-link"
              data-bs-toggle="modal"
              href="#portfolioModal2"
            >
              <div class="portfolio-hover">
                <div class="portfolio-hover-content">
                  <i class="fas fa-plus fa-3x" />
                </div>
              </div>
              <img
                class="img-fluid"
                src="assets/img/portfolio/2.jpg"
                alt="..."
              />
            </a>
            <div class="portfolio-caption">
              <div class="portfolio-caption-heading">Roast your friends!</div>
              <div class="portfolio-caption-subheading text-muted">
                A personalized meme to roast your friends
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6 mb-4">
          <!-- Service-Package item 3-->
          <div class="portfolio-item">
            <a
              class="portfolio-link"
              data-bs-toggle="modal"
              href="#portfolioModal3"
            >
              <div class="portfolio-hover">
                <div class="portfolio-hover-content">
                  <i class="fas fa-plus fa-3x" />
                </div>
              </div>
              <img
                class="img-fluid"
                src="assets/img/portfolio/3.jpg"
                alt="..."
              />
            </a>
            <div class="portfolio-caption">
              <div class="portfolio-caption-heading">
                Personalized rage comic
              </div>
              <div class="portfolio-caption-subheading text-muted">
                Reeeeeeeeeee
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6 mb-4 mb-lg-0">
          <!-- Service-Package item 4-->
          <div class="portfolio-item">
            <a
              class="portfolio-link"
              data-bs-toggle="modal"
              href="#portfolioModal4"
            >
              <div class="portfolio-hover">
                <div class="portfolio-hover-content">
                  <i class="fas fa-plus fa-3x" />
                </div>
              </div>
              <img
                class="img-fluid"
                src="assets/img/portfolio/4.jpg"
                alt="..."
              />
            </a>
            <div class="portfolio-caption">
              <div class="portfolio-caption-heading">Meme history lesson</div>
              <div class="portfolio-caption-subheading text-muted">
                Suprise your friends with your meme knowledge!
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6 mb-4 mb-sm-0">
          <!-- Service-Package item 5-->
          <div class="portfolio-item">
            <a
              class="portfolio-link"
              data-bs-toggle="modal"
              href="#portfolioModal5"
            >
              <div class="portfolio-hover">
                <div class="portfolio-hover-content">
                  <i class="fas fa-plus fa-3x" />
                </div>
              </div>
              <img
                class="img-fluid"
                src="assets/img/portfolio/5.jpg"
                alt="..."
              />
            </a>
            <div class="portfolio-caption">
              <div class="portfolio-caption-heading">
                Peronalized subreddit meme
              </div>
              <div class="portfolio-caption-subheading text-muted">
                Personalized meme for every subreddit, that'll help you get that
                sweet reddit karma
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6">
          <!-- Service-Package item 6-->
          <div class="portfolio-item">
            <a
              class="portfolio-link"
              data-bs-toggle="modal"
              href="#portfolioModal6"
            >
              <div class="portfolio-hover">
                <div class="portfolio-hover-content">
                  <i class="fas fa-plus fa-3x" />
                </div>
              </div>
              <img
                class="img-fluid"
                src="assets/img/portfolio/6.jpg"
                alt="..."
              />
            </a>
            <div class="portfolio-caption">
              <div class="portfolio-caption-heading">Donate to Ukraine</div>
              <div class="portfolio-caption-subheading text-muted">
                Donations will go directly to Ukraine to help those in need
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- About-->
  <section class="page-section" id="about">
    <div class="container">
      <div class="text-center">
        <h2 class="section-heading text-uppercase">About</h2>
        <h3 class="section-subheading text-muted">
          Lets go down the 'meme'mory lane together.
        </h3>
      </div>
      <ul class="timeline">
        <li>
          <div class="timeline-image">
            <img
              class="rounded-circle img-fluid"
              src="assets/img/about/1.jpg"
              alt="..."
            />
          </div>
          <div class="timeline-panel">
            <div class="timeline-heading">
              <h4>September 2021</h4>
              <h4 class="subheading">Our Humble Beginnings</h4>
            </div>
            <div class="timeline-body">
              <p class="text-muted">
                Our Company started out with a class of memers with an idea to
                change the world.
              </p>
            </div>
          </div>
        </li>
        <li class="timeline-inverted">
          <div class="timeline-image">
            <img
              class="rounded-circle img-fluid"
              src="assets/img/about/2.jpg"
              alt="..."
            />
          </div>
          <div class="timeline-panel">
            <div class="timeline-heading">
              <h4>October 2021</h4>
              <h4 class="subheading">The Memers was born to meme</h4>
            </div>
            <div class="timeline-body">
              <p class="text-muted">
                The sheer amount of meme talent in our class was too much to
                handle in words, so we started creating memes everyday.
              </p>
            </div>
          </div>
        </li>
        <li>
          <div class="timeline-image">
            <img
              class="rounded-circle img-fluid"
              src="assets/img/about/3.jpg"
              alt="..."
            />
          </div>
          <div class="timeline-panel">
            <div class="timeline-heading">
              <h4>March 2022</h4>
              <h4 class="subheading">Transition to the Meme-shop</h4>
            </div>
            <div class="timeline-body">
              <p class="text-muted">
                We started up our meme shop and we haven't looked back since!
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
  <!-- Team-->
  <section class="page-section bg-light" id="team">
    <div class="container">
      <div class="text-center">
        <h2 class="section-heading text-uppercase">
          Meet our Amazing Meme Dream Team
        </h2>
        <h3 class="section-subheading text-muted">
          Lorem ipsum dolor sit amet consectetur.
        </h3>
      </div>
      <div class="row">
        <div class="col-lg-4">
          <div class="team-member">
            <img
              class="mx-auto rounded-circle"
              src="assets/img/team/1.jpg"
              alt="..."
            />
            <h4>Michael Johansen</h4>
            <p class="text-muted">Lead Meme Designer</p>
            <a
              class="btn btn-dark btn-social mx-2"
              href="#!"
              aria-label="Parveen Anand Twitter Profile"
              ><i class="fab fa-twitter" /></a
            >
            <a
              class="btn btn-dark btn-social mx-2"
              href="#!"
              aria-label="Parveen Anand Facebook Profile"
              ><i class="fab fa-facebook-f" /></a
            >
            <a
              class="btn btn-dark btn-social mx-2"
              href="#!"
              aria-label="Parveen Anand LinkedIn Profile"
              ><i class="fab fa-linkedin-in" /></a
            >
          </div>
        </div>
        <div class="col-lg-4">
          <div class="team-member">
            <img
              class="mx-auto rounded-circle"
              src="assets/img/team/2.jpg"
              alt="..."
            />
            <h4>Jimmy Losang</h4>
            <p class="text-muted">
              Our history Memer with a passion for rage comics
            </p>
            <a
              class="btn btn-dark btn-social mx-2"
              href="#!"
              aria-label="Diana Petersen Twitter Profile"
              ><i class="fab fa-twitter" /></a
            >
            <a
              class="btn btn-dark btn-social mx-2"
              href="#!"
              aria-label="Diana Petersen Facebook Profile"
              ><i class="fab fa-facebook-f" /></a
            >
            <a
              class="btn btn-dark btn-social mx-2"
              href="#!"
              aria-label="Diana Petersen LinkedIn Profile"
              ><i class="fab fa-linkedin-in" /></a
            >
          </div>
        </div>
        <div class="col-lg-4">
          <div class="team-member">
            <img
              class="mx-auto rounded-circle"
              src="assets/img/team/3.jpg"
              alt="..."
            />
            <h4>The Unnamed</h4>
            <p class="text-muted">Memer - 9gag & Reddit expert</p>
            <a
              class="btn btn-dark btn-social mx-2"
              href="#!"
              aria-label="Larry Parker Twitter Profile"
              ><i class="fab fa-twitter" /></a
            >
            <a
              class="btn btn-dark btn-social mx-2"
              href="#!"
              aria-label="Larry Parker Facebook Profile"
              ><i class="fab fa-facebook-f" /></a
            >
            <a
              class="btn btn-dark btn-social mx-2"
              href="#!"
              aria-label="Larry Parker LinkedIn Profile"
              ><i class="fab fa-linkedin-in" /></a
            >
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-8 mx-auto text-center">
          <p class="large text-muted">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque,
            laboriosam veritatis, quos non quis ad perspiciatis, totam corporis
            ea, alias ut unde.
          </p>
        </div>
      </div>
    </div>
  </section>
  <!-- Footer-->
  <footer class="footer py-4">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-4 text-lg-start">
          Copyright &copy; Patrick's MemeShop 2022
        </div>
        <div class="col-lg-4 my-3 my-lg-0">
          <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Twitter"
            ><i class="fab fa-twitter" /></a
          >
          <a
            class="btn btn-dark btn-social mx-2"
            href="#!"
            aria-label="Facebook"><i class="fab fa-facebook-f" /></a
          >
          <a
            class="btn btn-dark btn-social mx-2"
            href="#!"
            aria-label="LinkedIn"><i class="fab fa-linkedin-in" /></a
          >
        </div>
        <div class="col-lg-4 text-lg-end">
          <a class="link-dark text-decoration-none me-3" href="#!"
            >Privacy Policy</a
          >
          <a class="link-dark text-decoration-none" href="#!">Terms of Use</a>
        </div>
      </div>
    </div>
  </footer>
  <!-- Portfolio Modals-->
  <!-- Portfolio item 1 modal popup-->
  <div
    class="portfolio-modal modal fade"
    id="portfolioModal1"
    tabindex="-1"
    role="dialog"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="close-modal" data-bs-dismiss="modal">
          <img src="assets/img/close-icon.svg" alt="Close modal" />
        </div>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-8">
              <div class="modal-body">
                <!-- Project details-->
                <h2 class="text-uppercase">Reach the Hot Page on 9gag</h2>
                <p class="item-intro text-muted">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
                <img
                  class="img-fluid d-block mx-auto"
                  src="assets/img/portfolio/1.jpg"
                  alt="..."
                />
                <p>
                  Are you tired of posting memes on 9gag, and not getting the
                  likes you derserve? With this 9gag package all you have to do
                  is write what content the meme should involve and we'll do the
                  rest!
                </p>
                <div class="login-form" />
                <button
                  class="btn btn-primary btn-xl text-uppercase"
                  data-bs-dismiss="modal"
                  type="button"
                >
                  <i class="fas fa-xmark me-1" />
                  Click to go back
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Portfolio item 2 modal popup-->
  <div
    class="portfolio-modal modal fade"
    id="portfolioModal2"
    tabindex="-1"
    role="dialog"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="close-modal" data-bs-dismiss="modal">
          <img src="assets/img/close-icon.svg" alt="Close modal" />
        </div>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-8">
              <div class="modal-body">
                <!-- Project details-->
                <h2 class="text-uppercase">Project Name</h2>
                <p class="item-intro text-muted">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
                <img
                  class="img-fluid d-block mx-auto"
                  src="assets/img/portfolio/2.jpg"
                  alt="..."
                />
                <p>
                  Use this area to describe your project. Lorem ipsum dolor sit
                  amet, consectetur adipisicing elit. Est blanditiis dolorem
                  culpa incidunt minus dignissimos deserunt repellat aperiam
                  quasi sunt officia expedita beatae cupiditate, maiores
                  repudiandae, nostrum, reiciendis facere nemo!
                </p>
                <ul class="list-inline">
                  <li>
                    <strong>Client:</strong>
                    Explore
                  </li>
                  <li>
                    <strong>Category:</strong>
                    Graphic Design
                  </li>
                </ul>
                <button
                  class="btn btn-primary btn-xl text-uppercase"
                  data-bs-dismiss="modal"
                  type="button"
                >
                  <i class="fas fa-xmark me-1" />
                  Close Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Portfolio item 3 modal popup-->
  <div
    class="portfolio-modal modal fade"
    id="portfolioModal3"
    tabindex="-1"
    role="dialog"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="close-modal" data-bs-dismiss="modal">
          <img src="assets/img/close-icon.svg" alt="Close modal" />
        </div>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-8">
              <div class="modal-body">
                <!-- Project details-->
                <h2 class="text-uppercase">Project Name</h2>
                <p class="item-intro text-muted">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
                <img
                  class="img-fluid d-block mx-auto"
                  src="assets/img/portfolio/3.jpg"
                  alt="..."
                />
                <p>
                  Use this area to describe your project. Lorem ipsum dolor sit
                  amet, consectetur adipisicing elit. Est blanditiis dolorem
                  culpa incidunt minus dignissimos deserunt repellat aperiam
                  quasi sunt officia expedita beatae cupiditate, maiores
                  repudiandae, nostrum, reiciendis facere nemo!
                </p>
                <ul class="list-inline">
                  <li>
                    <strong>Client:</strong>
                    Finish
                  </li>
                  <li>
                    <strong>Category:</strong>
                    Identity
                  </li>
                </ul>
                <button
                  class="btn btn-primary btn-xl text-uppercase"
                  data-bs-dismiss="modal"
                  type="button"
                >
                  <i class="fas fa-xmark me-1" />
                  Close Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Portfolio item 4 modal popup-->
  <div
    class="portfolio-modal modal fade"
    id="portfolioModal4"
    tabindex="-1"
    role="dialog"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="close-modal" data-bs-dismiss="modal">
          <img src="assets/img/close-icon.svg" alt="Close modal" />
        </div>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-8">
              <div class="modal-body">
                <!-- Project details-->
                <h2 class="text-uppercase">Project Name</h2>
                <p class="item-intro text-muted">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
                <img
                  class="img-fluid d-block mx-auto"
                  src="assets/img/portfolio/4.jpg"
                  alt="..."
                />
                <p>
                  Use this area to describe your project. Lorem ipsum dolor sit
                  amet, consectetur adipisicing elit. Est blanditiis dolorem
                  culpa incidunt minus dignissimos deserunt repellat aperiam
                  quasi sunt officia expedita beatae cupiditate, maiores
                  repudiandae, nostrum, reiciendis facere nemo!
                </p>
                <ul class="list-inline">
                  <li>
                    <strong>Client:</strong>
                    Lines
                  </li>
                  <li>
                    <strong>Category:</strong>
                    Branding
                  </li>
                </ul>
                <button
                  class="btn btn-primary btn-xl text-uppercase"
                  data-bs-dismiss="modal"
                  type="button"
                >
                  <i class="fas fa-xmark me-1" />
                  Close Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Portfolio item 5 modal popup-->
  <div
    class="portfolio-modal modal fade"
    id="portfolioModal5"
    tabindex="-1"
    role="dialog"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="close-modal" data-bs-dismiss="modal">
          <img src="assets/img/close-icon.svg" alt="Close modal" />
        </div>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-8">
              <div class="modal-body">
                <!-- Project details-->
                <h2 class="text-uppercase">Project Name</h2>
                <p class="item-intro text-muted">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
                <img
                  class="img-fluid d-block mx-auto"
                  src="assets/img/portfolio/5.jpg"
                  alt="..."
                />
                <p>
                  Use this area to describe your project. Lorem ipsum dolor sit
                  amet, consectetur adipisicing elit. Est blanditiis dolorem
                  culpa incidunt minus dignissimos deserunt repellat aperiam
                  quasi sunt officia expedita beatae cupiditate, maiores
                  repudiandae, nostrum, reiciendis facere nemo!
                </p>
                <ul class="list-inline">
                  <li>
                    <strong>Client:</strong>
                    Southwest
                  </li>
                  <li>
                    <strong>Category:</strong>
                    Website Design
                  </li>
                </ul>
                <button
                  class="btn btn-primary btn-xl text-uppercase"
                  data-bs-dismiss="modal"
                  type="button"
                >
                  <i class="fas fa-xmark me-1" />
                  Close Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Portfolio item 6 modal popup-->
  <div
    class="portfolio-modal modal fade"
    id="portfolioModal6"
    tabindex="-1"
    role="dialog"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="close-modal" data-bs-dismiss="modal">
          <img src="assets/img/close-icon.svg" alt="Close modal" />
        </div>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-8">
              <div class="modal-body">
                <!-- Project details-->
                <h2 class="text-uppercase">Project Name</h2>
                <p class="item-intro text-muted">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
                <img
                  class="img-fluid d-block mx-auto"
                  src="assets/img/portfolio/6.jpg"
                  alt="..."
                />
                <p>
                  Use this area to describe your project. Lorem ipsum dolor sit
                  amet, consectetur adipisicing elit. Est blanditiis dolorem
                  culpa incidunt minus dignissimos deserunt repellat aperiam
                  quasi sunt officia expedita beatae cupiditate, maiores
                  repudiandae, nostrum, reiciendis facere nemo!
                </p>
                <ul class="list-inline">
                  <li>
                    <strong>Client:</strong>
                    Window
                  </li>
                  <li>
                    <strong>Category:</strong>
                    Photography
                  </li>
                </ul>
                <button
                  class="btn btn-primary btn-xl text-uppercase"
                  data-bs-dismiss="modal"
                  type="button"
                >
                  <i class="fas fa-xmark me-1" />
                  Close Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Core theme JS-->
  <script>
      // Navbar shrink function
      var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector("#mainNav");
        if (!navbarCollapsible) {
          return;
        }
        if (window.scrollY === 0) {
          navbarCollapsible.classList.remove("navbar-shrink");
        } else {
          navbarCollapsible.classList.add("navbar-shrink");
        }
      };

      // Shrink the navbar
      navbarShrink();

      // Shrink the navbar when page is scrolled
      document.addEventListener("scroll", navbarShrink);

      // Activate Bootstrap scrollspy on the main nav element
      const mainNav = document.body.querySelector("#mainNav");
      if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
          target: "#mainNav",
          offset: 74,
        });
      }

      // Collapse responsive navbar when toggler is visible
      const navbarToggler = document.body.querySelector(".navbar-toggler");
      const responsiveNavItems = [].slice.call(
        document.querySelectorAll("#navbarResponsive .nav-link")
      );
      responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener("click", () => {
          if (window.getComputedStyle(navbarToggler).display !== "none") {
            navbarToggler.click();
          }
        });
      });
  </script>
</body>
