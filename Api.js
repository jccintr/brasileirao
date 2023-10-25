
const API_KEY = '22e387a34fc049fd9a5a219b65c50a61';
const BASE_API = 'http://api.football-data.org/v4';

export default {

    getTable: async () => {
        const response = await fetch(`${BASE_API}/competitions/BSA/standings`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'X-Auth-Token': API_KEY
            },
        });

        return response.json();
    },
    getRodada: async (rodada) => {
        const response = await fetch(`${BASE_API}/competitions/2013/matches?matchday=${rodada}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'X-Auth-Token': API_KEY
            },
        });
        return response.json();
    },
       
   
    
   
  
   
};