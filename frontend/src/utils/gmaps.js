const API_KEY = 'AIzaSyABAcJGo33FcNk_NJAV1UW3shm6OKP7mtE';
const CALLBACK_NAME = 'initMap';

export default function init() {
    var map;
    function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: -34.397, lng: 150.644},
            zoom: 8
        });
    }

    const script = document.createElement('script');
    script.async = true;
    script.defer = true;
    script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&callback=initMap`;

    document.querySelector('head').appendChild(script);
}