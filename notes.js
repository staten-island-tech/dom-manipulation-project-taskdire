const students = ["Kitson", "mark", "wad"];
//console.log(students[0]);
//students.forEach((student) => console.log(student));

//const movie = {
//   title: "dwad"
//   release: 1422,
//   actors:["Kitson", "mark", "wad"]

//}

const movies = [
  { title: "dwad", release: 1422, actors: ["Kitson", "mark", "wad"] },
  { title: "gergerge", release: 1422, actors: ["Kitson", "mark", "wad"] },
  { title: "awdawfef", release: 1422, actors: ["Kitson", "mark", "wad"] },
];

movies.forEach((movie) => console.log(movie.title));

const newmovies = movies.filter((movie) => movie.release > 1990);
console.log(newmovies);

//
