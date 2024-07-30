import redis from 'redis';
import { promisify } from 'util';

const client = redis.createClient();

client.on('connect', () => {
    console.log('Redis client connected to the server');
});

client.on('error', (error) => {
    console.log(`Redis client not connected to the server: ${error}`);
});

const hashKey = 'HolbertonSchools';
const hashFields = {
    'Portland': 50,
    'Seattle': 80,
    'New York': 20,
    'Bogota': 20,
    'Cali': 40,
    'Paris': 2
};

for (const [field, value] of Object.entries(hashFields)) {
    client.hset(hashKey, field, value, redis.print);
};

client.hgetall(hashKey, (err, object) => {
    if (err) {
        console.error('Error retrieving hash:', err);
        return;
    }
    console.log(object);
});
