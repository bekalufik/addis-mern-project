import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchStatisticsSuccess,
  fetchGenresSuccess,
  fetchArtistsSuccess,
} from "../features/statistics/statisticsSlice";
import { Box, Heading, Table, Tbody, Tr, Td } from "styled-system-html";

const Statistics = () => {
  const dispatch = useDispatch();
  const { stat, data, loading, error } = useSelector(
    (state) => state.statistics
  );

  useEffect(() => {
    dispatch(fetchStatisticsSuccess());
    dispatch(fetchGenresSuccess());
    dispatch(fetchArtistsSuccess());
  }, [dispatch]);
  console.log("statistics data =>", data);
  console.log("stat data =>", stat);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="stastics">
      <h2>Statistics</h2>
      <Table>
        <Tbody className="d-block">
          <Tr>
            <Td>Total number of songs:</Td>
            <Td>{data?.totalSongs}</Td>
          </Tr>
          <Tr>
            <Td>Total number of artists:</Td>
            <Td>{data?.totalArtists}</Td>
          </Tr>
          <Tr>
            <Td>Total number of albums:</Td>
            <Td>{data?.totalAlbums}</Td>
          </Tr>
          <Tr>
            <Td>Total number of genres:</Td>
            <Td>{data?.totalGenres}</Td>
          </Tr>
        </Tbody>
      </Table>
      <h2>Artists And Genres Statics</h2>
      <Table>
        <Tbody className="d-block">
          <Tr>
            <Td>Number of songs in each genre</Td>
            <Td>
              <Table>
                <Tbody>
                  {stat?.byGenre?.map((genre, i) => (
                    <Tr key={i}>
                      <Td>{genre?._id}</Td>
                      <Td>{genre?.count}</Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </Td>
          </Tr>

          <Tr className="my-5">
            <Td className="mx-5 font-bold">Number of songs and albums each artist has</Td>
            <Td>
              <Table>
                <Tbody>
                  {stat?.byArtist?.map((artist, i) => (
                    <Tr key={i}>
                      <Td>{artist?.artist}</Td>
                      <Td>
                        {artist?.totalSongs} song
                        {artist?.totalSongs !== 1 && "s"}
                      </Td>
                      <Td>
                        {artist?.totalAlbums} album
                        {artist?.totalAlbums !== 1 && "s"}
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </div>
  );
};

export default Statistics;
