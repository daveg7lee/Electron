import React from "react";
import axios from "axios";
import Loader from "./Loader";
import Movie from "./Movie";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "../Styles/GlobalStyles";
import Theme from "../Styles/Theme";

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 2.5rem;
`;

const Header = styled.div``;

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating&limit=50"
    );
    this.setState({ movies, isLoading: false });
  };
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <ThemeProvider theme={Theme}>
        <GlobalStyles />
        {isLoading ? (
          <Loader />
        ) : (
          <Wrapper>
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </Wrapper>
        )}
      </ThemeProvider>
    );
  }
}

export default App;
