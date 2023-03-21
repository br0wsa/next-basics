import React from "react";

function cours(props) {
  console.log(props);
  return (
    <div>
      <h1>le BTC est à : {props.results.bpi.EUR.rate}&nbsp;€</h1>
    </div>
  );
}

export default cours;

export async function getServerSideProps() {
  const data = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
  const results = await data.json();

  return {
    props: {
      results,
    },
  };
}
