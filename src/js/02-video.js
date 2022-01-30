import throttle from 'lodash/throttle';
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const initialTime = localStorage.getItem('videoplayer-current-time') ?? 0;

// player.setCurrentTime(initialTime);

// player.on(
//   'timeupdate',
//   throttle(() => {
//     player.getCurrentTime().then(seconds => {
//       localStorage.setItem('videoplayer-current-time', Math.round(seconds));
//     });
//   }, 1000),
// );

//Вариант с выносом getCurrentTime() в отдельную функцию
// player.on('timeupdate', throttle(saveTime, 1000));

// function saveTime() {
//   player.getCurrentTime().then(seconds => {
//     localStorage.setItem('videoplayer-current-time', Math.round(seconds));
//   });
// }
