import { channel } from 'diagnostics_channel';
import redis from 'redis';
import { promisify } from 'util';

const client = redis.createClient();

client.on('connect', () => {
    console.log('Redis client connected to the server');
});

client.on('error', (error) => {
    console.log(`Redis client not connected to the server: ${error}`);
});

const channelName = 'holberton school channel';

client.subscribe(channelName, (err, count) => {
    if (err) {
        console.error(`Error subscribing to channel ${channelName}:`, err);
    };
});

client.on('message', (channel, message) => {
    console.log(`${message}`);
    if (message === 'KILL_SERVER') {
        client.unsubscribe();
        client.quit();
    }
});
