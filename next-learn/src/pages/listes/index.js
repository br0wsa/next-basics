import { uuid } from "uuidv4";
import Link from "next/link";
import listes from "../../data/listes.json";

export default function Listes({ array }) {

  return (
    <div>
      <h1>VOCABULARY</h1>
      <ul>
        {array.map((el) => (
          <li key={uuid()}>
            <Link href={`/listes/${el.name}`}>{el.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      array: listes.englishList,
    },
  };
}
