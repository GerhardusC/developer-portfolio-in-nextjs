import Head from "next/head";
import Header from "./Header";
// Getting custom font from Google fonts.
import { Kanit } from "next/font/google";

// Custom font requires subsets and possible weights.
const font = Kanit({ subsets: ["latin"], weight: ["100", "200", "400"] });

// This is the layout of my page. It has a head with some meta data,
// The navigation Header component is also included here in the layout.
const MyLayout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Gerhardus's Developer Portfolio</title>
        <meta
          name="Gerhardus Cronjé's developer portfolio."
          content="Gerhardus Cronje used to be a learning designer. He is now a web developer."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Add the font to the layout using an auto generated class name. */}
      <main className={font.className}>
        {/* The navigation bar/ Header component. */}
        <Header />
        {/* The pages. */}
        <div className="body-container">{children}</div>
      </main>
      {/* All of the styling is handled here. Adding the global tag to make it apply to anything in the layout.*/}
      <style global jsx>
        {`
          .navigation-bar-container {
            position: sticky;
            top: 0;
            box-shadow: 0px 0px 5px #000;
            z-index: 1000;
            background-color: #0c142c;
            transform-origin: top;
          }
          nav {
            display: flex;
            justify-content: center;
            min-height: 200px;
          }
          nav ul {
            display: flex;
            justify-content: space-around;
            align-items: center;
            width: 100%;
            padding: 0;
            margin: 0;
            flex-wrap: wrap;
            list-style: none;
          }
          nav li {
            padding: 20px;
            font-size: x-large;
            display: flex;
            gap: 20px;
          }
          a {
            text-decoration: none;
            color: white;
            transition: color 0.15s, transform 0.15s;
          }
          a:hover {
            color: rgb(184, 184, 184);
            transform: scale(1.15);
          }
          .active-nav-link {
            color: #f57e00;
          }

          .active-nav-link:hover {
            color: #d72828;
          }
          canvas {
            width: 100vw;
            height: 100vh;
          }
          .body-container {
            min-height: 100vh;
            font-weight: 200;
          }
          h1 {
            margin: auto 0;
          }
          .para-container {
            max-width: 1000px;
            margin: 10px auto;
            padding: 10px;
            color: black;
            background-color: rgb(187, 204, 206);
            box-shadow: 3px 3px 10px black;
            border-radius: 5px;
            font-size: larger;
          }
          .cards-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            gap: 20px;
          }
          .single-card-container {
            width: 200px;
            height: 230px;
            padding: 10px;
            background-color: #fff;
            box-shadow: 2px 2px 12px #7e918f;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 10px;
            cursor: grabbing;
            user-select: none;
          }
          .single-card-container h3,
          .single-card-container h5,
          .single-card-container p {
            padding: 0;
            margin: 0;
          }
          .card-image {
            width: 200px;
          }
          .card-title {
            margin: 0;
          }
          .hidden {
            transform: scale(0);
          }
          .projects-container {
            display: flex;
            gap: 30px;
            flex-wrap: wrap;
            justify-content: center;
            max-width: 1150px;
            margin: 10px auto;
            padding: 30px;
            background-color: rgb(187, 204, 206);
            border-radius: 5px;
            box-shadow: 2px 2px 5px black;
          }

          .project {
            width: 300px;
            display: grid;
            align-items: center;
            grid-template-rows: 350px 20px auto auto auto;
            background-color: white;
            color: black;
            padding: 10px;
            border-radius: 5px;
            box-shadow: 2px 2px 5px gray;
          }
          .project-img {
            width: 300px;
          }

          .tools {
            display: flex;
            flex-wrap: wrap;
          }
          .tool {
            padding: 3px;
            margin: 2px;
            border-radius: 5px;
            background-color: #0f9d58;
            color: #fff;
            box-shadow: 2px 2px 5px #a6a6a6;
          }

          .project-links {
            display: flex;
            margin: 5px;
            justify-content: center;
            align-items: center;
          }
          .project-links a {
            display: flex;
            align-items: center;
            color: black;
            padding: 5px;
            margin: 4px;
            border-radius: 5px;
            box-shadow: 2px 2px 5px #a6a6a6;
          }

          .project-links a:hover {
            transform: scale(1.1);
          }
          .brand-icon {
            width: 30px;
            height: 30px;
          }
          .contact-link {
            background-color: #191970;
            display: flex;
            justify-content: center;
            width: 250px;
            margin: auto;
            padding: 10px;
            border-radius: 5px;
          }
        `}
      </style>
    </>
  );
};

export default MyLayout;
