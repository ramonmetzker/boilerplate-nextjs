import React from "react";
import { Italic } from "../../sections/pages/Home/Main/styles";
import { LaunchQuery } from "../../types/pages/com-graphql";
import { CardContainer } from "./styles";

type ComponentProps = {
  launch: LaunchQuery;
};

const ExampleCard = ({ launch }: ComponentProps) => {
  const meses = [
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez",
  ];
  const data = new Date(launch.launch_date_utc);
  const dataFormatada = meses[data.getMonth()] + " " + data.getFullYear();

  return (
    <CardContainer className="p-2">
      <h3 className="fs-5">
        <Italic className="text-secondary">Missão </Italic>
        <span className="fw-700 text-gray-70">{launch.mission_name}</span>
      </h3>
      <p>{launch.details}</p>
      <span className="fs-5">
        <Italic>Data </Italic> {dataFormatada}
      </span>
    </CardContainer>
  );
};

export default ExampleCard;
