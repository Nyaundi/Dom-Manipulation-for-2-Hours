const drawBlankCalender = () => {
    for (let i = 0; i <= 35; i++){
        const day = document.createElement('div');
        day.classList.add('day');

        const dayText = document.createElement('p');
        day.classList.add('day-text');

        const dayNumber = document.createElement('p');
        dayNumber.classList.add('day-number');

        const eventName = document.createElement('small');
        eventName.classList.add('event-name');

    }
}

drawBlankCalender();