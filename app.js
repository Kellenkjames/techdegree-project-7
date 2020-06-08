// Create the HTML for the banner
const alertBanner = document.getElementById("alert");
alertBanner.innerHTML = `<div class="main__alert__banner"> 
<p>
<strong>Alert:</strong> You have <strong>6</strong> overdue tasks to 
complete.
</p>
<p class="main__alert__banner__close">x</p>
</div>`

// Add click event to the alert banner
alertBanner.addEventListener('click', e => {
	const element = e.target;
	if (element.classList.contains("main__alert__banner__close")) {
		alertBanner.style.display = "none";
	}
});


// Chart Widgets (Line Graph)
const trafficCanvas = document.getElementById("traffic-chart");

// Navigation (grabbing elements that we will toggle)
const trafficNav = document.getElementById("traffic");

// List Items
const trafficHourly = document.querySelector(".traffic #hourly");
const trafficDaily = document.querySelector(".traffic #daily");
const trafficWeekly = document.querySelector(".traffic #weekly");
const trafficMonthly = document.querySelector(".traffic #monthly");

// Defalt Chart (Weekly)

let trafficData = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
    datasets: [{
        data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
            2500
        ],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1,
        pointBackgroundColor: `rgba(255,255,255)`,
        pointBorderColor: 'rgba(116, 119, 191, 1)',
        pointBorderWidth: 2,
        pointRadius: 6,
        pointHitRadius: 2,
        lineTension: 0
    }]
};
let trafficOptions = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
        duration: 1500
    },
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    },
    legend: {
        display: false
    },
};
let defaultTrafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data: trafficData,
    options: trafficOptions
});

trafficNav.addEventListener('click', e => {
    
	if (e.target === trafficHourly) {
		let trafficData = {
			labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
			datasets: [{
				data: [750, 2400, 1500, 500, 800, 1250, 1750, 900, 2250, 1500,
					3000
				],
				backgroundColor: 'rgba(116, 119, 191, .3)',
				borderWidth: 1,
				pointBackgroundColor: `rgba(255,255,255)`,
				pointBorderColor: 'rgba(116, 119, 191, 1)',
				pointBorderWidth: 2,
				pointRadius: 6,
				pointHitRadius: 2,
				lineTension: 0
			}]
		};
		let trafficOptions = {
			responsive: true,
			maintainAspectRatio: false,
			animation: {
				duration: 1500
			},
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero: true
					}
				}]
			},
			legend: {
				display: false
			},
		};
		let trafficChart = new Chart(trafficCanvas, {
			type: 'line',
			data: trafficData,
			options: trafficOptions
        });

    } else if (e.target === trafficDaily) {
		let trafficData = {
			labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
			datasets: [{
				data: [950, 1500, 500, 1000, 1500, 1350, 1250, 900, 1200, 500,
					1400
				],
				backgroundColor: 'rgba(116, 119, 191, .3)',
				borderWidth: 1,
				pointBackgroundColor: `rgba(255,255,255)`,
				pointBorderColor: 'rgba(116, 119, 191, 1)',
				pointBorderWidth: 2,
				pointRadius: 6,
				pointHitRadius: 2,
				lineTension: 0
			}]
		};
		let trafficOptions = {
			responsive: true,
			maintainAspectRatio: false,
			animation: {
				duration: 1500
			},
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero: true
					}
				}]
			},
			legend: {
				display: false
			},
		};
		let trafficChart = new Chart(trafficCanvas, {
			type: 'line',
			data: trafficData,
			options: trafficOptions
        });

    } else if (e.target === trafficWeekly) {
		let trafficData = {
			labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
			datasets: [{
				data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
					2500
				],
				backgroundColor: 'rgba(116, 119, 191, .3)',
				borderWidth: 1,
				pointBackgroundColor: `rgba(255,255,255)`,
				pointBorderColor: 'rgba(116, 119, 191, 1)',
				pointBorderWidth: 2,
				pointRadius: 6,
				pointHitRadius: 2,
				lineTension: 0
			}]
		};
		let trafficOptions = {
			responsive: true,
			maintainAspectRatio: false,
			animation: {
				duration: 1500
			},
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero: true
					}
				}]
			},
			legend: {
				display: false
			},
		};
		let trafficChart = new Chart(trafficCanvas, {
			type: 'line',
			data: trafficData,
			options: trafficOptions
        });

    } else if (e.target === trafficMonthly) {
		let trafficData = {
			labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
			datasets: [{
				data: [650, 1200, 400, 900, 2300, 1700, 2500, 200, 1000, 1500,
					2000
				],
				backgroundColor: 'rgba(116, 119, 191, .3)',
				borderWidth: 1,
				pointBackgroundColor: `rgba(255,255,255)`,
				pointBorderColor: 'rgba(116, 119, 191, 1)',
				pointBorderWidth: 2,
				pointRadius: 6,
				pointHitRadius: 2,
				lineTension: 0
			}]
		};
		let trafficOptions = {
			responsive: true,
			maintainAspectRatio: false,
			animation: {
				duration: 1500
			},
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero: true
					}
				}]
			},
			legend: {
				display: false
			},
		};
		let trafficChart = new Chart(trafficCanvas, {
			type: 'line',
			data: trafficData,
			options: trafficOptions
        });
    
	}

});

// HELPER FUNCTION [Managing the active navigation items on the TRAFFIC Chart]

// Get all the li's with inside the traffic nav container
let trafficListItems = document.querySelectorAll('.traffic__nav li');

// Loop through the li's and add the active class to the current/clicked button
for (let i = 0; i < trafficListItems.length; i++) {
    trafficListItems[i].addEventListener('click', function () {
        let current = document.getElementsByClassName("active");

        // If there's no active class
        if (current.length > 0) {
            current[0].className = current[0].className.replace(" active", "");
        }

        // Add the active class to the current/clicked button
        this.className += " active";

    })

}


// Daily Chart (Bar)
const dailyCanvas = document.getElementById("daily-chart");

// data for daily traffic bar chart
const dailyData = {
	labels: ["S", "M", "T", "W", "T", "F", "S"],
	datasets: [{
		label: '# of Hits',
		data: [75, 115, 175, 125, 225, 200, 100],
		backgroundColor: '#7477BF',
		borderWidth: 1,
		barPercentage: .6,
	}]
};
const dailyOptions = {
	responsive: true,
	maintainAspectRatio: false,
	scales: {
		yAxes: [{
			ticks: {
				beginAtZero: true
			}
		}]
	},
	legend: {
		display: false
	}
}
let dailyChart = new Chart(dailyCanvas, {
	type: 'bar',
	data: dailyData,
	options: dailyOptions
});

// Mobile Users (Pie Chart)
const mobileCanvas = document.getElementById("mobile-users");
const mobileData = {
	labels: ["Phones", "Tablet", "Desktop"],
	datasets: [{
		label: '# of Users',
		data: [2000, 550, 500],
		borderWidth: 0,
		backgroundColor: ['#7477BF', '#78CF82', '#51B6C8']
	}]
};
const mobileOptions = {
	responsive: true,
	maintainAspectRatio: false,
	legend: {
		position: 'right',
		labels: {
			boxWidth: 20,
			padding: 20,
			fontSize: 16,
			fontStyle: 'normal'
		}
	}
}
let mobileChart = new Chart(mobileCanvas, {
	type: 'doughnut',
	data: mobileData,
	options: mobileOptions
});

// Messaging Section
const user = document.getElementById("userField");
const message = document.getElementById("messageField");
const send = document.getElementById("send");
send.addEventListener('click', (e) => {
	// ensure user and message fields are filled out
	if (user.value === "" && message.value === "") {
		alert("Please fill out user and message fields before sending");
		e.preventDefault();
	} else if (user.value === "") {
		alert("Please fill out user field before sending");
		e.preventDefault();
	} else if (message.value === "") {
		alert("Please fill out message field before sending");
		e.preventDefault();
	} else {
		alert(`Message successfully sent to: ${user.value}`);
	}
});