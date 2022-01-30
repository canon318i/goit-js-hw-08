import throttle from 'lodash/throttle';
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
//the follownig code was replaced to IF due to strange build error:
// /home/runner/work/goit-js-hw-08/goit-js-hw-08/src/js/03-feedback.js: Unexpected token: operator (?)
//
// const initialTime = localStorage.getItem('videoplayer-current-time') ?? 0;
let initialTime = localStorage.getItem('videoplayer-current-time');
if (!initialTime) {
  initialTime = 0;
}

player.setCurrentTime(initialTime);

player.on(
  'timeupdate',
  throttle(() => {
    player.getCurrentTime().then(seconds => {
      localStorage.setItem('videoplayer-current-time', Math.round(seconds));
    });
  }, 1000),
);

//Вариант с выносом getCurrentTime() в отдельную функцию
// player.on('timeupdate', throttle(saveTime, 1000));

// function saveTime() {
//   player.getCurrentTime().then(seconds => {
//     localStorage.setItem('videoplayer-current-time', Math.round(seconds));
//   });
// }
