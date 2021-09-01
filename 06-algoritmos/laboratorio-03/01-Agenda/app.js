// Ej extra 1: Agenda

// Constantes
const WORK_HOURS = [
    "08:00 - 09:00",
    "09:00 - 10:00",
    "10:00 - 11:00",
    "11:00 - 12:00",
    "12:00 - 13:00",
    "13:00 - 14:00",
    "15:00 - 16:00",
    "16:00 - 17:00"
];

// Datos
let myTeam = [
    {
        name: "María",
        availability: new Array(8).fill(true)
    },
    {
        name: "Pedro",
        availability: new Array(8).fill(true)
    },
    {
        name: "Esther",
        availability: new Array(8).fill(true)
    },
    {
        name: "Marcos",
        availability: new Array(8).fill(true)
    },
];

function randomBoolean() {
    return Math.round(Math.random()) === 0
}

function createRandomAvalaibility(workersArray) {
    const workersCopy = [...workersArray]
    return workersCopy.map(worker => {
        const newAvalaibility = worker.availability.map(randomBoolean)
        worker.availability = newAvalaibility;
        return worker
    })
}

myTeam = createRandomAvalaibility(myTeam)

function showAvalaibilityOfEachWorker(worker) {
    console.log(`${worker.name} is avalaible:`)
    for (let i = 0; i < WORK_HOURS.length; i++) {
        console.log(`${WORK_HOURS[i]}: ${worker.availability[i]}`)
    }
}

function showAllWorkersAvalaibility(workersArray) {
    for (let worker of workersArray) {
        showAvalaibilityOfEachWorker(worker);
    }
}

showAllWorkersAvalaibility(myTeam)

function checkFirstHourAvalaibleFullTeam(myTeam) {
    let count = 0;
    for (let i = 0; i < WORK_HOURS.length; i++) {
        if (myTeam[0].availability[i]) {
            for (let j = 1; j < myTeam.length; j++) {
                if (myTeam[j].availability[i]) {
                    count++;
                } else {
                    count = 0;
                }
            }
        }
        if (count === myTeam.length - 1) {
            console.log(`First avalailable hour for full team: ${WORK_HOURS[i]}`);
            break;
        }
    }

    if (count < myTeam.length - 1) {
        console.log("not hours availaible for full team")
    }
}

checkFirstHourAvalaibleFullTeam(myTeam);