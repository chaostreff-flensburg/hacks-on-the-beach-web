export default ({ title, children, ...props }) => (
  <html lang="de">
    <head>
      <title>
        {title ? `${title} - "#HOTH"` : "Hacks on the Beach #HOTB"}
      </title>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="CCC Flensburg e.V." />
      <meta name="publisher" content="CCC Flensburg e.V." />

      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href="/styles.css"></link>
      <script src="/assets/rakede-animation.js"></script>
    </head>
    <body class="bg-background font-mono text-dark w-full">{children}</body>
  </html>
);
