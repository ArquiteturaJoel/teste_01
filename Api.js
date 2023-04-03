const BASE_URL = "https://pokeapi.co/api/v2";

const Api = {
  async getPokemons() {
    const data = await fetch(`${BASE_URL}/pokemon?limit=4`);
    return data.json();
  }
};

export default Api;
