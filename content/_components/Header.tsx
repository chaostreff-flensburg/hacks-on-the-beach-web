
export default ({ text, ...props }) => (
  <section class="bg-header">
    <img src="/assets/logo.svg" class="mx-auto h-[400px] drop-shadow-2xl relative z-10 mb-[-64px]" id="logo" alt="hacks on the harbour logo"></img>
    <img src="/assets/header-back.svg" class="absolute w-full -z-10" alt=""></img>
    <canvas id="rakede-canvas" class="fixed top-0 w-full h-full"></canvas>
  </section>
);
