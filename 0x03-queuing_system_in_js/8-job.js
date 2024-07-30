function createPushNotificationsJobs(jobs, queue) {
    if (!Array.isArray(jobs)) {
        throw new Error('Jobs is not an array');
    }

    jobs.forEach((jobData) => {
        const job = queue.create('push_notification_code_2', jobData)
            .priority('high');

        job.save((err) => {
            if (err) {
                console.error('Error creating job:', err);
            } else {
                console.log(`Notification job created: ${job.id}`);   
            }
        });
    
        job.on('complete', () => {
            console.log(`Notification job ${job.id} completed`);
        });

        job.on('failed', (errorMessage) => {
            console.log(`Notification job ${job.id} failed:`, errorMessage);
        });

        job.on('progress', (progress) => {
            console.log(`Notification job ${job.id} ${progress}% complete`);
        });
    });
}

export default createPushNotificationsJobs;
