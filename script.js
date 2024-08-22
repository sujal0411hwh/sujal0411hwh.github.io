
//  function toggleMode() {
//      const body = document.body;
//      const button = document.querySelector('button');

//     // Toggle dark-mode class on body
//     body.classList.toggle('dark-mode');

//     // Update button text based on current mode
//     if (body.classList.contains('dark-mode')) {
//         button.textContent = 'Light Mode';
//     } else {
//         button.textContent = 'Dark Mode';
//     }
// }


// function toggleMode() {
//     const body = document.body;
//     const label = document.querySelector('label[for="darkmode-toggle"]');
//     const checkbox = document.getElementById('darkmode-toggle');

//     // Toggle dark-mode class on body
//     body.classList.toggle('dark-mode');

//     // Update label text based on current mode
//     if (body.classList.contains('dark-mode')) {
//         label.textContent = 'Light Mode';
//         checkbox.checked = true;
//     } else {
//         label.textContent = 'Dark Mode';
//         checkbox.checked = false;
//     }
// }


function toggleMode() {
    const body = document.body;
    const label = document.querySelector('label[for="darkmode-toggle"]');
    const checkbox = document.getElementById('darkmode-toggle');

    // Toggle dark-mode class on body
    body.classList.toggle('dark-mode');

    // Update label text based on current mode
    if (body.classList.contains('dark-mode')) {
        label.textContent = 'Light Mode';
        checkbox.checked = true;
    } else {
        label.textContent = 'Dark Mode';
        checkbox.checked = false;
    }
}
