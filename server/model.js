const monk = require('monk');
const db_url = 'localhost:27017/koademo';
const db = monk(db_url);

db.then(() => {
    console.log('Connected correctly to server');
})
