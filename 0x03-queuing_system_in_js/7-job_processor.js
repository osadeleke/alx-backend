import kue from 'kue';

const blackList = ['4153518780', '4153518781'];

function sendNotification(phoneNumber, message, job, done) {
    job.progress(0, 100);
    if (blackList.includes(phoneNumber)) {
        return done(new Error(`phone number ${phoneNumber} is blacklisted`));
    }
    job.progress(50, 100);
    console.log(`Sending notification to ${phoneNumber}, with message: ${message}`)
};

const queue = kue.createQueue();

queue.process('push_notification_code_2', 2, (job, done) => {
    sendNotification(job.data.phoneNumber, job.data.message, job, done);
    done();
});
