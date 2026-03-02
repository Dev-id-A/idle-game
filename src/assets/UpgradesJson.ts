export const upgrades = 
    [
        {
            name: "Computer",
            src: "SVG/computer.svg",
            description: "A computer programmed to send automatic mails.",
            mailsSended: 5,
            interval: 2000,
            actualTime: 0,
            cost: 50,
            id: 1,
            actualLevel: 0,
            producting: false,
            perks:[
                {
                    name: "New components",
                    description: "Adds new components to the computer and get faster at sending mails.",
                    cost: 20000,
                    unlocks: 25,
                    moreFaster: true, 
                    moreMails: false,
                    adds: 25,
                    id: 101
                },
                {
                    name: "Better software",
                    description : "Download a new software that upgrades the quality of the mails.",
                    cost: 150000,
                    unlocks: 50,
                    moreFaster: false, 
                    moreMails: true,
                    adds: 25,
                    id: 102
                },
                {
                    name: "High fiber wi-fi",
                    description : "A great conection internet for faster sending.",
                    cost: 50000,
                    unlocks: 75,
                    moreFaster: true, 
                    moreMails: false,
                    adds: 35,
                    id: 103
                },
                {
                    name: "Overclocking",
                    description : "Exploit the maximun capacity of the computer for a better performance.",
                    cost: 100000,
                    unlocks: 100,
                    moreFaster: true, 
                    moreMails: true,
                    adds: 40,
                    id: 104
                }
            ]
            
        },
        {
            name: "Worker",
            src: "SVG/worker.svg",
            description: "Your first worker ready to send that electronics messages.",
            mailsSended: 25,
            interval: 5000,
            actualTime: 0,
            cost: 200,
            id: 2,
            actualLevel: 0,
            producting: false,
            perks:[
                {
                    name: "Coffee",
                    description : "An unlimited amount of coffee for that mails.",
                    cost: 50000,
                    unlocks: 25,
                    moreFaster: true, 
                    moreMails: false,
                    adds: 35,
                    id: 201
                },
                {
                    name: "Raise",
                    description : "A well payed worker, works double.",
                    cost: 200000,
                    unlocks: 50,
                    moreFaster: false, 
                    moreMails: true,
                    adds: 100,
                    id: 202
                },
                {
                    name: "Love and comprension",
                    description : "Understand their needs and dreams and add more love to every email.",
                    cost: 400000,
                    unlocks: 75,
                    moreFaster: false, 
                    moreMails: true,
                    adds: 50,
                    id: 203
                },
                {        
                    name: "Better Work Environment",
                    description: "A workspace beyond the typical cubicle will make your employee happier.",
                    cost: 800000,
                    unlocks: 100,
                    moreFaster: true, 
                    moreMails: true,
                    adds: 75,
                    id: 204
                }
            ]
        },
        {
            name: "Team",
            src: "SVG/team.svg",
            description: "An experienced team dedicated with love to every email.",
            mailsSended: 150,
            interval: 10000,
            actualTime: 0,
            cost: 2500,
            id: 3,
            actualLevel: 0,
            producting: false,
            perks:[
                {        
                    name: "Communication",
                    description: "Vital if you want reach something.",
                    cost: 300000,
                    unlocks: 25,
                    moreFaster: true, 
                    moreMails: false,
                    adds: 40,
                    id: 301
                },
                {        
                    name: "Leader",
                    description: "The know they need it for resolving problems.",
                    cost: 800000,
                    unlocks: 50,
                    moreFaster: true, 
                    moreMails: true,
                    adds: 80,
                    id: 302
                },
                {        
                    name: "Coffee machine",
                    description: "We need to wake up and send mails, a lot of mails.",
                    cost: 1500000,
                    unlocks: 75,
                    moreFaster: true, 
                    moreMails: false,
                    adds: 150,
                    id: 303
                },
                {        
                    name: "Group therapy",
                    description: "Better understanding between employees doubles all production.",
                    cost: 2500000,
                    unlocks: 100,
                    moreFaster: true, 
                    moreMails: true,
                    adds: 200,
                    id: 304
                },
            ]
        },
        {
            name: "Startup",
            src: "SVG/startup.svg",
            description: "Small teams focused on automating email workflows.",
            mailsSended: 1000,
            interval: 15000,
            actualTime: 0,
            cost: 10000,
            id: 4,
            actualLevel: 0,
            producting: false,
            perks:[
                {
                    name: "Big idea",
                    description: "The breakthrough idea that makes a startup grow.",
                    cost: 1000000,
                    unlocks: 25,
                    moreFaster: false, 
                    moreMails: true,
                    adds: 50,
                    id: 401
                },
                {
                    name: "Inversion",
                    description: "Invest in your team and enjoy the returns.",
                    cost: 5000000,
                    unlocks: 50,
                    moreFaster: true, 
                    moreMails: true,
                    adds: 100,
                    id: 402
                },
                {
                    name: "Vacation",
                    description: "Give them a vacation and they’ll come back stronger.",
                    cost: 7000000,
                    unlocks: 75,
                    moreFaster: true, 
                    moreMails: true,
                    adds: 150,
                    id: 403
                },
                {
                    name: "Boss",
                    description: "Hire a boss who can lead the team.",
                    cost: 12000000,
                    unlocks: 100,
                    moreFaster: true, 
                    moreMails: true,
                    adds: 200,
                    id: 404
                },
            ]
        }, 
        {
            name: "Corporation",
            src: "SVG/corporation.svg",
            description: "A big corporation breaking all the standards of email delivery.",
            mailsSended: 5000,
            interval: 25000,
            actualTime: 0,
            cost: 30000,
            id: 5,
            actualLevel: 0,
            producting: false,
            perks:[
                {
                    name: "CEO",
                    description: "Hire a CEO who can lead the corporation.",
                    cost: 5000000,
                    unlocks: 25,
                    moreFaster: false, 
                    moreMails: true,
                    adds: 100,
                    id: 501
                },
                {
                    name: "HR",
                    description: "We need to hire the best of the best, and that's why we need HR.",
                    cost: 15000000,
                    unlocks: 50,
                    moreFaster: true, 
                    moreMails: true,
                    adds: 150,
                    id: 502
                },
                
            ]
        },
        {
            name: "Elite worker",
            src: "SVG/crown.svg",
            description: "The most charismatic man with a fast writing skills.",
            mailsSended: 15000,
            interval: 35000,
            actualTime: 0,
            cost: 100000,
            id: 6,
            actualLevel: 0,
            producting: false,
            perks:[
                {
                    name: "Perk",
                    adds: 0,
                    id: 601
                }
            ]
        }
    ]