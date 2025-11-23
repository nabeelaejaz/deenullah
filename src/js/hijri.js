const dataContainer = document.getElementById('data-container');
	const date = new Date();
	let day = date.getDate() - 1;
	let month = date.getMonth() + 1;
	let year = date.getFullYear();
	let currentDate = `${day}-${month}-${year}`;
	const getUrl = 'https://api.aladhan.com/v1/gToH/' + currentDate + '?'; 
	const apiUrl = getUrl; 
	async function fetchDataAndDisplay() {
        try {
            const response = await fetch(apiUrl);
            const data = await response.json(); // Assuming the API returns JSON

            // Clear previous content (optional)
            dataContainer.innerHTML = ''; 

			const postElement = document.createElement('div');
                postElement.innerHTML = `
                    <p>${data.data.hijri.day} ${data.data.hijri.month.en} ${data.data.hijri.year}</p>
                `;
                dataContainer.appendChild(postElement);

            // Iterate through the data and create HTML elements


        } catch (error) {
            console.error('Error fetching or displaying data:', error);
            dataContainer.innerHTML = '<p>Failed to load data.</p>';
        }
    }
	fetchDataAndDisplay();