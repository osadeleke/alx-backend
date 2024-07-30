function createPushNotificationsJobs(jobs, queue) {
    if (!Array.isArray(jobs)) {
        throw new Error('Jobs is not an array');
    };

    for (const job in jobs) {
        const jobAct = queue.create('push_notification_code_2', job)
        .priority('high')
        .save((err) => {
            if (err) {
                console.error('Error creating job:', err);
            } else {
                console.log(`Notification job created: ${jobAct.id}`);   
            };
        });
    
        jobAct.on('complete', () => {
            console.log('Notification job completed');
        });

        jobAct.on('failed', (errorMessage) => {
            console.log('Notification job failed:', errorMessage);
        });

        jobAct.on('progress', (progress) => {
            console.log(`Notification job ${jobAct.id} ${progress}% complete`);
        });
    };
};

export default createPushNotificationsJobs;
