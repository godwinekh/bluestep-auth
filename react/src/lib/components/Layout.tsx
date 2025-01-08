import { ReactNode } from "react";
import "../scss/styles.scss";


type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <head>
        {/* <meta charset="UTF-8" /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>A Simple User Form</title>
        {/* <link rel="stylesheet" href="../scss/styles.scss"></link> */}
        {/* <script type="module" src="../js/main.js"></script> */}
      </head>

      <body>{children}</body>
    </html>
  );
}
