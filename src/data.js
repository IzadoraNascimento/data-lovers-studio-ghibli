//Função para ordenar por A-Z/Z-A
export function sortByOrderFilms(films, orderBy){
  const newArray = [...films]

  if(orderBy === "az") {
    newArray.sort(function(a,b){
      if(a.title < b.title){
        return -1;
      }
    })
  } else {
    newArray.sort(function(a,b){
      if(a.title > b.title){
        return -1;
      }
    })
  }
  return newArray;
}

// Função filtrar por diretor
export const filters = (array, key, condition) =>
  array.filter((item) => item[key] === condition);

// Ordenação
export function sortByOrderCharacters(characters, pressed) {
  console.log(pressed)
  const newArray = [...characters];
  newArray.sort(function(a, b) {
    return a.name.localeCompare(b.name);
  });
  return newArray;
}

// Função para filtro de Genero
export const filterGender = (characters, gender) =>{
  return characters.filter((character) =>{
    return character.gender === gender
  })
} 

export const getCharacters = (films) =>{
  let characters = []
  films.forEach(filme => {
    characters = [...characters, ... filme.people]
  })
  return characters
}

export const getCharacterByID = (characters, characterID) =>{
  return characters.filter((character) => {
    return character.id === characterID
  })[0]
}

// Função personagens por filmes
export const filterFilm = (names, title) =>{
  return names.filter((name) => {
    return name.title === title
  })[0]
}


