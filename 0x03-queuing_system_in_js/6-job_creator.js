import kue from 'kue';

const queue = kue.createQueue();

const jobData = {
    phoneNumber: '123-456-7810',
    message: 'This is a test notification from Segun',
}

const job = queue.create('push_notification_code', jobData)
    .priority('high')
    .save((err) => {
        if (err) {
            console.error('Error creating job:', err);
        } else {
            console.log(`Notification job created: ${job.id}`);     
        }
    });

job.on('complete', () => {
    console.log('Notification job completed');
});

job.on('failed', (errorMessage) => {
    console.log('Notification job failed:', errorMessage);
});
