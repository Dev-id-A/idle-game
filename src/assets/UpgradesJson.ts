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
                    name: "Perk",
                    adds: 0,
                    id: 201
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
                    name: "Perk",
                    adds: 0,
                    id: 301
                }
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
                    name: "Perk",
                    adds: 0,
                    id: 401
                }
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
                    name: "Perk",
                    adds: 0,
                    id: 501
                }
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