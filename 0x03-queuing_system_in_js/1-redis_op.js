import redis from 'redis';

const client = redis.createClient();

client.on('connect', () => {
    console.log('Redis client connected to the server');
});

client.on('error', (error) => {
    console.log(`Redis client not connected to the server: ${error}`);
});

function setNewSchool(schoolName, value) {
    client.set(schoolName, value, redis.print);
};

function displaySchoolValue(schoolName) {
    client.get(schoolName, (err, reply) => {
        if (err) throw err;
        console.log(reply);
    });
};

displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('HolbertonSanFrancisco');
