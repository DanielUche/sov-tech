import React, { FC, ReactElement } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import { StarWar } from "../../types";

type ListProps = {
  person: StarWar;
};

const Link = styled.span`
  diplay: block;
  cursor: pointer;
  color: brown;
  &:hover {
    color: red
  }
`;

const Detail: FC<ListProps> = ({ person }): ReactElement => {
  let history = useHistory();
  const previousPath = () => {
    history.goBack();
  };
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>
              <b>Name</b>
            </td>
            <td>{person.name}</td>
          </tr>
          <tr>
            <td>
              <b>Height</b>
            </td>
            <td>{person.height}</td>
          </tr>
          <tr>
            <td>
              <b>Gender</b>
            </td>
            <td>{person.gender}</td>
          </tr>
          <tr>
            <td>
              <b>Mass</b>
            </td>
            <td>{person.mass}</td>
          </tr>
          <tr>
            <td>
              <b>Homeworld</b>
            </td>
            <td>{person.homeworld}</td>
          </tr>
        </tbody>
      </table>
      <Link onClick={previousPath}> {"<< back"}</Link>
    </div>
  );
};

export default Detail;
