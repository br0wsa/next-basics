import Head from "next/head";
import styles from "../styles/Home.module.css";
import { uuid } from "uuidv4";
import { useState, useEffect } from "react";

export default function Home(props) {
  const [state, setState] = useState(false);

  useEffect(() => {
    newWord();
  }, []);

  const newWord = () => {
    fetch("/api/vocapi")
      .then((resp) => resp.json())
      .then((data) => setState(data));
  };

  let randomWord;
  if (state) {
    const array = state.englishList[0].data;
    randomWord = array[Math.floor(Math.random() * array.length)].en;
    console.log(randomWord);
  }

  return (
    <>
      <Head>
        <title>Roller de folie à Paris - Balades nocturnes en roller</title>
        <meta
          name="description"
          content="Découvrez les meilleurs itinéraires en roller à Paris la nuit et rejoignez notre communauté de passionnés de roller de folie !"
        />
        <meta
          name="keywords"
          content="roller, roller de folie, roller quad, balade roller, Paris, roller à Paris, roller nocturne, passionnés de roller"
        />
        <meta name="author" content="Votre nom ou celui de votre blog" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div>
        <h1>Mot au hasard via API next</h1>
        <button onClick={newWord}>Get random word</button>
        <h2>{randomWord}</h2>
      </div>
      <div>
        <hr />
        <h1>🛼 ROLLER DE FOLIE 🛼</h1>
        <table>
          <tbody className={styles["table-body"]}>
            {props.data.map((el) => (
              <tr key={uuid()} className={styles["table-row"]}>
                <td className={styles["table-cell"]}>{el.en}</td>
                <td className={styles["table-cell"]}>{el.fr}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const res = await import("../data/vocabulary.json");
  const data = await res.vocabulary;

  if (data.length === 0) {
    return {
      notFound: true,
      // redirect: {
      //   destination: "/isr",
      // },
    };
  }

  return {
    props: {
      data,
    },
    // revalidate: 60 * 60, // Régénère toutes les heures
  };
}
