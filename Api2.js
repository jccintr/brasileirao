
const BASE_API = 'https://apiv3.apifootball.com';
const API_KEY = '940fe7558f3d066356bda1d3531dd3b627ce4f2d8d715114ab1d80d07c93fd91';
export default {

    getTable: async () => {
        const response = await fetch(`${BASE_API}/?action=get_standings&league_id=99&APIkey=${API_KEY}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json'
            },
        });

        return response.json();
    },
    
    getJogos: async (month,lastDay) => {
        const response = await fetch(`${BASE_API}/?action=get_events&from=2023-${month}-01&to=2023-${month}-${lastDay}&league_id=99&APIkey=${API_KEY}&timezone=America/Bahia`, {
            method: 'GET',
            headers: {
                Accept: 'application/json'
            },
        });

        return response.json();
    },

    getJogosLive: async (day,month) => {
        const response = await fetch(`${BASE_API}/?action=get_events&from=2023-${month}-${day}&to=2023-${month}-${day}&league_id=99&APIkey=${API_KEY}&timezone=America/Bahia`, {
            method: 'GET',
            headers: {
                Accept: 'application/json'
            },
        });
        let json = await response.json();
        let jogos = [];
        for(let i=0;i<json.length;i++){
            if(json[i].match_status.trim().length>0 && json[i].match_status.trim().length<=3){
                jogos.push(json[i]);
            }
        }
        return jogos;
    },

    getEquipes: async () => {
        const response = await fetch(`${BASE_API}/?action=get_teams&league_id=99&APIkey=${API_KEY}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json'
            },
        });

        return response.json();
    },

    getJogosByEquipe: async (equipeId) => {
        const response = await fetch(`${BASE_API}/?action=get_events&from=2023-04-01&to=2023-12-10&league_id=99&APIkey=${API_KEY}&timezone=America/Bahia&team_id=${equipeId}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json'
            },
        });

        return response.json();
    },
    
  
   
};
    
   
