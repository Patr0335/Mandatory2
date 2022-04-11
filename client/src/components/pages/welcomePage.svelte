<script>
  import { navigate } from "svelte-navigator";
  import { toast } from "@zerodevx/svelte-toast";

  //################################### LOGIN

  let newUser = {};
  let responseMessage = "";
  let errorMessage = "";
  async function signupUser() {
    if (
      newUser?.username &&
      newUser?.username.length >= 4 &&
      newUser?.password &&
      newUser?.password.length >= 4
    ) {
      const res = await fetch(`/api/signup`, {
        headers: {
          "content-type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(newUser),
      });

      console.log(JSON.stringify(newUser));

      responseMessage = await res.text();
      if (res.status === 200) {
        errorMessage = "";
        toast.push("Signup was a success. You can now login"); // må jeg godt det her???
        setTimeout(() => {
          navigate("/", { replace: true });
        }, 1500);
      }
    } else {
      errorMessage =
        "Username or Password doesn't meet its required length of 4";
      toast.push("ERROR", {
        theme: {
          "--toastBackground": "#F56565",
          "--toastBarBackground": "#C53030",
        },
      });
    }
  }

  async function login() {
    console.log("Logging in!");
    const res = await fetch(`/api/login`, {
      headers: {
        "content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(newUser),
    });
    responseMessage = await res.text();
    if (res.status === 200) {
      // Only navigate if my http call is 200 (success)
      navigate("/test", { replace: true });
    }
  }
</script>

<head>
  <link
    href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
    rel="stylesheet"
    id="bootstrap-css"
  />
  <script
    src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
  <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
</head>

<main>
  <div class="sidenav">
    <div class="login-main-text">
      <h2>Node.js Project - Mandatory 2<br /> Login Page</h2>
      <p>Login or register from here to access.</p>
    </div>
  </div>
  <div class="main">
    <div class="col-md-6 col-sm-12">
      <div class="login-form">
        <form>
          <div class="form-group">
            <!-- svelte-ignore a11y-label-has-associated-control -->
            <label>Username</label>
            <input
              type="text"
              class="form-control"
              placeholder="Username"
              bind:value={newUser.username}
            />
          </div>
          <div class="form-group">
            <!-- svelte-ignore a11y-label-has-associated-control -->
            <label>Password</label>
            <input
              type="password"
              class="form-control"
              placeholder="Password"
              bind:value={newUser.password}
            />
            <small class="signup-error-message">
              {errorMessage}
            </small>
          </div>
          <button type="button" class="btn btn-black" on:click={() => login()}
            >Login</button
          >
          <button
            type="button"
            class="btn btn-secondary"
            on:click={() => signupUser()}>Register</button
          >
        </form>
      </div>
      <div class="email-form">
        <form>
          <div class="form-group">
            <!-- svelte-ignore a11y-label-has-associated-control -->
            <label>Sign up for our newsletter.</label>
            <input type="text" class="form-control" placeholder="Email" />
          </div>
          <button type="button" class="btn btn-black" on:click={() => login()}
            >Signup</button
          >
        </form>
      </div>
    </div>
  </div>
</main>

<style>
  .sidenav {
    height: 100%;
    background-color: #000;
    overflow-x: hidden;
    padding-top: 20px;
  }

  .main {
    padding: 0px 10px;
    /* min-height: calc(100vh - 60px); */
  }

  @media screen and (max-height: 450px) {
    .sidenav {
      padding-top: 15px;
    }
  }

  @media screen and (max-width: 450px) {
    .login-form {
      margin-top: 10%;
    }

    /* .register-form{
        margin-top: 10%;
    } */
  }

  @media screen and (min-width: 768px) {
    .main {
      margin-left: 40%;
    }

    .sidenav {
      width: 40%;
      position: fixed;
      z-index: 1;
      top: 0;
      left: 0;
    }

    .login-form {
      margin-top: 80%;
    }

    .email-form {
      margin-top: 24px;
    }

    /* .register-form{
        margin-top: 20%;
    } */
  }

  .login-main-text {
    margin-top: 20%;
    padding: 60px;
    color: #fff;
  }

  .login-main-text h2 {
    font-weight: 300;
  }

  .btn-black {
    background-color: #000 !important;
    color: #fff;
  }

  :root {
    --toastContainerTop: auto;
    --toastContainerRight: auto;
    --toastContainerBottom: 8rem;
    --toastContainerLeft: calc(50vw - 8rem);
  }

  .signup-error-message {
    color: red;
    font-weight: 500;
  }
</style>
