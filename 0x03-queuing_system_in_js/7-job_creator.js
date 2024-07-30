import kue from 'kue';

const jobs = [
    {
      phoneNumber: '4153518780',
      message: 'This is the code 1234 to verify your account'
    },
    {
      phoneNumber: '4153518781',
      message: 'This is the code 4562 to verify your account'
    },
    {
      phoneNumber: '4153518743',
      message: 'This is the code 4321 to verify your account'
    },
    {
      phoneNumber: '4153538781',
      message: 'This is the code 4562 to verify your account'
    },
    {
      phoneNumber: '4153118782',
      message: 'This is the code 4321 to verify your account'
    },
    {
      phoneNumber: '4153718781',
      message: 'This is the code 4562 to verify your account'
    },
    {
      phoneNumber: '4159518782',
      message: 'This is the code 4321 to verify your account'
    },
    {
      phoneNumber: '4158718781',
      message: 'This is the code 4562 to verify your account'
    },
    {
      phoneNumber: '4153818782',
      message: 'This is the code 4321 to verify your account'
    },
    {
      phoneNumber: '4154318781',
      message: 'This is the code 4562 to verify your account'
    },
    {
      phoneNumber: '4151218782',
      message: 'This is the code 4321 to verify your account'
    }
  ];

const queue = kue.createQueue();

for (const job of jobs) {
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
