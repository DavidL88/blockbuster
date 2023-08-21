function movieListAsMap(newList, oldList = new Map()) {
  return newList.reduce((list, movie) => {
    list.set(movie.id, movie);
    return list;
  }, oldList);
}

function getAllIds(list, oldList = []) {
  return oldList.concat(list.map((movie) => movie.id));
}

function getMostValuedIds(list, oldList = []) {
  return list.reduce((list, movie) => {
    if (movie.vote_average >= 7) {
      list.push(movie.id);
    }
    return list;
  }, oldList);
}

function getLeastValuedIds(list, oldList = []) {
  return list.reduce((list, movie) => {
    if (movie.vote_average < 7) {
      list.push(movie.id);
    }
    return list;
  }, oldList);
}

// let popularAja = [...rawMoviesList].sort((a, b) =>
//   a.vote_average > b.vote_average ? -1 : 1
// );
// let notpopularAja = [...popularAja].reverse();

export { movieListAsMap, getAllIds, getMostValuedIds, getLeastValuedIds };
