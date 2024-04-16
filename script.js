let colleges = [
    { name: 'College1', rating: 4.5, fees: 50000, userRating: 4.2, featured: 12 },
    { name: 'College2', rating: 4.2, fees: 60000, userRating: 4.5, featured: 22 },
    { name: 'College3', rating: 4.2, fees: 60000, userRating: 4.5, featured: 22 },
    { name: 'College4', rating: 4.2, fees: 60000, userRating: 4.5, featured: 22 },
    { name: 'College5', rating: 4.2, fees: 60000, userRating: 4.5, featured: 22 },
    { name: 'College6', rating: 4.2, fees: 60000, userRating: 4.5, featured: 22 },
    { name: 'College7', rating: 4.2, fees: 60000, userRating: 4.5, featured: 22 },
    { name: 'College8', rating: 4.2, fees: 60000, userRating: 4.5, featured: 22 },
    { name: 'College9', rating: 4.2, fees: 60000, userRating: 4.5, featured: 22 },
    { name: 'College10', rating: 4.2, fees: 60000, userRating: 4.5, featured: 22 },
    { name: 'College11', rating: 4.2, fees: 60000, userRating: 4.5, featured: 22 },
    { name: 'College12', rating: 4.2, fees: 60000, userRating: 4.5, featured: 22 },
    { name: 'College13', rating: 4.2, fees: 60000, userRating: 4.5, featured: 22 },
    { name: 'College14', rating: 4.2, fees: 60000, userRating: 4.5, featured: 22 },
    { name: 'College15', rating: 4.2, fees: 60000, userRating: 4.5, featured: 22 },
    { name: 'College16', rating: 4.2, fees: 60000, userRating: 4.5, featured: 22 },
    { name: 'College17', rating: 4.2, fees: 60000, userRating: 4.5, featured: 22 },

    // Add more colleges here
];

let currentColleges = colleges.slice(0, 10);

function displayColleges() {
    let collegeBody = document.getElementById('collegeBody');
    collegeBody.innerHTML = '';
    currentColleges.forEach(college => {
        let row = collegeBody.insertRow();
        let nameCell = row.insertCell(0);
        nameCell.innerHTML = college.name;
        let ratingCell = row.insertCell(1);
        ratingCell.innerHTML = college.rating;
        let feesCell = row.insertCell(2);
        feesCell.innerHTML = college.fees;
        let userRatingCell = row.insertCell(3);
        userRatingCell.innerHTML = college.userRating;
        let featuredCell = row.insertCell(4);
        featuredCell.innerHTML = college.featured ? 'Yes' : 'No';
    });
}

function loadMore() {
    let startIndex = currentColleges.length;
    let endIndex = startIndex + 10;
    if (endIndex > colleges.length) {
        endIndex = colleges.length;
    }
    currentColleges = colleges.slice(startIndex, endIndex);
    displayColleges();
}

function sortTable(n) {
    colleges.sort((a, b) => {
        if (a[n] < b[n]) {
            return -1;
        }
        if (a[n] > b[n]) {
            return 1;
        }
        return 0;
    });
    currentColleges = colleges.slice(0, 10);
    displayColleges();
}

document.getElementById('loadMore').addEventListener('click', loadMore);

// Infinite scroll functionality
window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        loadMore();
    }
});

displayColleges();