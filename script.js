document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('button1');
    const stopButton = document.getElementById('button2');

    startButton.addEventListener('click', () => {
        // console.log('Start button clicked');
        window.alert('Start button clicked');
        // Add your start action code here
    });

    stopButton.addEventListener('click', () => {
        // console.log('Stop button clicked');
        window.alert('Stop button clicked');
        // Add your stop action code here.
    });
});
