import React from "react";

export default function contact(props) {
  const { text, author } = props.data[0];
  return (
    <div>
      <h1>ISR : Incremental Static Generation</h1>
      <p>{text}</p>
      <p>{author}</p>
    </div>
  );
}

export async function getStaticProps() {
  const quote = await fetch("https://type.fit/api/quotes");
  const data = await quote.json();

  return {
    props: {
      data,
    },
    revalidate: 15,
  };
}
