export default (props) => (
  <nav class="bg-white flex justify-between items-center justify-evenly py-3 text-xs md:text-xl mb-6 rounded sticky top-0 shadow-lg">
    {props.lang === "en" ? (
      <>
        <a
          href="https://tickets.c3fl.de/c3fle/hotb-25/"
          class="nav-link"
          target="_blank"
        >
          Tickets
        </a>
        <a href="/#program">Program</a>
        <a href="/#faq">F.A.Q.</a>
        <a href="/coc/">CoC</a>
      </>
    ) : (
      <>
        <a
          href="https://tickets.c3fl.de/c3fle/hotb-25/"
          class="nav-link"
          target="_blank"
        >
          Tickets
        </a>
        <a href="/de/#programm">Programm</a>
        <a href="/de/#faq">F.A.Q.</a>
        <a href="/de/coc/">CoC</a>
      </>
    )}
  </nav>
);
