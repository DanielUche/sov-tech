import React, { FC, ReactElement, useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { Pagination } from "@zendeskgarden/react-pagination";
import styled from "styled-components";
import { GET_PEOPLE } from "../graphql/queries";
import StarWarList from "../components/starwar/list.component";
import Loader from "../components/loader";
import { useHistory, useLocation } from "react-router-dom";

type AppProps = {
  count: number;
};

const ListView = styled.div`
  min-height: 300px;
  width: 400px;
  height: 300px;
  overflow-y: scroll;
`;

const useQueryParam = () => {
  return new URLSearchParams(useLocation().search);
};

const Index: FC<AppProps> = ({ count }): ReactElement => {
  const history = useHistory();
  const location = useLocation();
  const [page, setPage] = useState(1);
  const queryParam = useQueryParam();

  useEffect(() => {
    setPage(Number(queryParam.get("page")));
    
  },[queryParam, page]);

  const { loading, data } = useQuery(GET_PEOPLE, {
    variables: { page },
  });

  const setQueryString = (page: number) => {
    const params = new URLSearchParams({ page: String(page) });
    history.replace({ pathname: location.pathname, search: params.toString() });
  } 

  if(!queryParam.get("page")) setQueryString(1);


  const updateRoute = (page: number) => {
    setQueryString(page);
    setPage(page);
  };

  return (
    <div>
      <ListView>
        {!loading ? (
          data && <StarWarList people={data.getPeople} />
        ) : (
          <Loader loading={loading} />
        )}
      </ListView>
      <Pagination
        totalPages={Math.ceil(count / 10)}
        currentPage={page}
        onChange={(currentPage) => updateRoute(currentPage)}
      />
    </div>
  );
};

export default Index;
