<script lang="ts">
  import Title from "../lib/Title.svelte";
</script>

<main class="flex justify-center align-middle flex-col">
  <Title textSize="4.5rem">Wavelink</Title>

  <div class="flex w-full justify-center items-center flex-col px-4">
    <h2 class="mb-8">Self-taught developer from the Czech Republic.</h2>
    <div class="bg-gray-700 max-w-3xl p-5 rounded-lg">
      <p class="mt-3">
        Hey, I'm Wavelink, I am a software developer from the Czech Republic.
        The past few years I mainly specialize in web development and
        development with web technologies, but I also have experience with other
        programming languages and technologies, such as game development.
      </p>
      <br />
      <p>
        I started a couple years ago with Unity and C#. I'm very confident in my
        skills with C# now, and I love to work with Unity (excluding loading
        times).
      </p>
      <br />
      <p>
        At the start of 2021 I started learning NodeJS and JavaScript. I
        immediatley fell in love with it due to the amazing dev-ex and the huge
        community. I have made many websites, Discord bots, tools and many other
        things with Javascript and Typescript.
      </p>
      <br />
      <p>
        I have also started learning Rust, but I am not very confident in my
        skills with it yet. I also don't see myself using Rust very often,
        because systems programming is not my thing. I do however like many
        syntax and language features of Rust, and I look forward to seeing what
        can be made with it.
      </p>
    </div>
  </div>
</main>

<style>
  main {
    margin-top: 5vh;
  }

  br {
    content: "";
    margin: .2em;
    display: block;
  }

  br::before{
    content: "|->";
  }
</style>
