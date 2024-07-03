
const BASE_API = 'https://apiv3.apifootball.com';
//jcpda4@gmail.com zodiac 
//const API_KEY = '940fe7558f3d066356bda1d3531dd3b627ce4f2d8d715114ab1d80d07c93fd91';
const API_KEY = '21c8b21cb7b397fd1f833a6dfbf0cebe71a486213f2094931d477df9407fa84c';
export default {

    getTable: async (key) => {
        const response = await fetch(`${BASE_API}/?action=get_standings&league_id=99&APIkey=${key}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json'
            },
        });

        return response.json();
    },
    
    getJogos: async (month,lastDay,key) => {
        const response = await fetch(`${BASE_API}/?action=get_events&from=2024-${month}-01&to=2024-${month}-${lastDay}&league_id=99&APIkey=${key}&timezone=America/Bahia`, {
            method: 'GET',
            headers: {
                Accept: 'application/json'
            },
        });

        return response.json();
    },

    getJogosLive: async (day,month,key) => {
        const response = await fetch(`${BASE_API}/?action=get_events&from=2024-${month}-${day}&to=2024-${month}-${day}&league_id=99&APIkey=${key}&timezone=America/Bahia`, {
            method: 'GET',
            headers: {
                Accept: 'application/json'
            },
        });
        let json = await response.json();
        let jogos = [];
        for(let i=0;i<json.length;i++){
            if( (json[i].match_status.trim().length>0 && json[i].match_status.trim().length<=3) || json[i].match_status=='Half Time'  ){
                jogos.push(json[i]);
            }
        }
        return jogos;
    },

    getEquipes: async (key) => {
        const response = await fetch(`${BASE_API}/?action=get_teams&league_id=99&APIkey=${key}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json'
            },
        });

        return response.json();
    },

    getJogosByEquipe: async (equipeId,key) => {
        const response = await fetch(`${BASE_API}/?action=get_events&from=2024-04-01&to=2024-12-10&league_id=99&APIkey=${key}&timezone=America/Bahia&team_id=${equipeId}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json'
            },
        });

        return response.json();
    },
    
  
   
};
    
   
