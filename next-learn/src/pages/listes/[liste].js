import { uuid } from "uuidv4";
import styles from "../../styles/Home.module.css";
import { useRouter } from "next/router";

export default function liste({ listEnCours }) {
  const router = useRouter();

  // si fallback true le server envoie uniquement la structure HTML => donc bug car pas de data. d'ou cette condition
  if (!listEnCours) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>{router.query.liste}</h1>
      <table>
        <tbody>
          {listEnCours.map((el) => (
            <tr key={uuid()} className={styles["table-row"]}>
              <td className={styles["table-cell"]}>{el.en}</td>
              <td className={styles["table-cell"]}>{el.fr}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export async function getStaticProps(context) {
  const slug = context.params.liste;
  const data = await import("../../data/listes.json");
  const listEnCours = data.englishList.find((l) => l.name === slug);

  // si fallback true le server envoie uniquement la structure HTML => donc bug car pas de data. d'ou cette condition
  if (!listEnCours) {
    return { notFound: true };
  }

  return {
    props: {
      listEnCours: listEnCours.data,
    },
  };
}

export async function getStaticPaths() {
  const data = await import("../../data/listes.json");
  const paths = data.englishList.map((path) => ({
    params: {
      liste: path.name,
    },
  }));
  return {
    paths,
    // fallback: true,
    fallback: "blocking",
  };
}
