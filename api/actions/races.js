import Admin from 'firebase-admin';
import * as moment from 'moment';

async function races() {
    const db = Admin.firestore();
    const ret = [];
    const snapshot = await db.collection('races').get();
    for (let index = 0; index < snapshot.docs.length; index++) {
        const doc = snapshot.docs.sort(s=>s.date.date).reverse()[index];
        // MMM d
        const data = doc.data();
        var date =new Date(data.date);
        const race = {
            raceId: doc.id, 
            city: data.country, 
            country: data.state,
            state: data.city, 
            date: moment(date, 'MMM dd, hh:mm'),
            venue: data.venue, 
            team1: data.team1, 
            team2: data.team2
        };

        race.team1Result = await getResult(race.team1, doc.id);
        race.team2Result = await getResult(race.team2, doc.id);
        
        ret.push(race);
    }
    return ret;
}



async function getResult(name, raceId) {
    const db = Admin.firestore();
    const ret = [];
    const snapshot = await db.collection('results').where("race", "==", raceId).where("team", "==", name).get();
    const doc = snapshot.docs[0];

    if (!doc)
        return {};

    const data = doc.data();

    const teamResult = {
        team: data.team, 
        raceTime: data.race_time, 
        reactionTime: data.reaction_time,
        splitTime: data.split_time, 
        combinedTime: data.combined_time
    };
    
    return teamResult;
}

export default races;