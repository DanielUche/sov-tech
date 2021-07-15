import React, { FC, ReactElement } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { StarWar } from "../../types";

type ListProps = {
  people: StarWar[];
};

const UlItem = styled.ul`
  padding: 30;
  list-style-type: none;
  margin: 0;
`;

const ListItem = styled.li`
  padding: 5px
`;

const StarWarList: FC<ListProps> = ({ people }): ReactElement => {
  return (
    <div>
      <UlItem>
        {people.map((person: StarWar, i: number) => (
          <ListItem  key={`${i}-starwar-li`}>
            <Link to={`/${person.name}`}> {person.name}</Link>
          </ ListItem >
        ))}
      </UlItem>
    </div>
  );
};

export default StarWarList;
