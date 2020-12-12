import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Box = styled.div`
  width: 95%;
  background-color: white;
  margin-bottom: 70px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  font-weight: 300;
  padding: 20px;
  border-radius: 5px;
  color: #adaeb9;
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
    0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
`;

const Poster = styled.img`
  position: relative;
  border-radius: 5px;
  top: -50px;
  max-width: 150px;
  width: 100%;
  margin-right: 30px;
  box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25),
    0 18px 36px -18px rgba(0, 0, 0, 0.3), 0 -12px 36px -8px rgba(0, 0, 0, 0.025);
`;

const Text = styled.h1`
  margin-bottom: 0.5em;
  font-weight: 600;
  font-size: ${(props) => props.fontSize};
  color: #2c2c2c;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  margin: 5px 0px;
  flex-direction: column;
`;

const Item = styled.li`
  margin-bottom: 1%;
`;

const Movie = ({ year, title, summary, poster, genres }) => {
  return (
    <Box>
      <Poster src={poster} />
      <Body>
        <Text fontSize={"2rem"}>{title}</Text>
        <Text fontSize={"1.5rem"}>{year}</Text>
        <List>
          {genres.map((genre, index) => (
            <Item key={index}>{genre}</Item>
          ))}
        </List>
      </Body>
    </Box>
  );
};

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Movie;
