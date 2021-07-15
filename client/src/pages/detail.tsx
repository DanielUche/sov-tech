import { useQuery } from "@apollo/client";
import React, { FC, ReactElement } from "react";
import { useParams } from "react-router-dom";
import Loader from "react-spinners/BounceLoader";
import Detail from "../components/starwar/detail.component";
import { GET_PERSON } from "../graphql/queries";

type DetailsParams = {
  name: string;
};

type DetailsProps = {};

const DetailPage: FC<DetailsProps> = (): ReactElement => {
  const { name } = useParams<DetailsParams>();

  const { loading, data } = useQuery(GET_PERSON, {
    variables: { name },
  });

  const person = data && data.getPerson;

  return person ? <Detail person={person} /> : <Loader loading={loading}/>;
};

export default DetailPage;
