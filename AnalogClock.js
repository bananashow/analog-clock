const AnalogClock = ($container) => {
  const get = (target) => document.querySelector(target);
  const getAll = (target) => document.querySelectorAll(target);
  const create = (tagName, className_1, className_2) => {
    let element = document.createElement(tagName);
    element.classList.add(className_1);
    element.classList.add(className_2);
    return element;
  };

  //시계 눈금, 바늘 생성
  const $hour = create("div", "hand", "hour");
  const $minute = create("div", "hand", "minute");
  const $second = create("div", "hand", "second");

  $container.appendChild($hour);
  $container.appendChild($minute);
  $container.appendChild($second);

  for (let i = 1; i <= 12; i++) {
    const $time = create("div", "time", `time${i}`);
    $time.innerHTML = "|";
    $container.appendChild($time);
  }

  const updateClock = () => {
    //현재 시간
    let currentDate = new Date();
    let currentSeconds = currentDate.getSeconds();
    let currentMinutes = currentDate.getMinutes();
    let currentHours = currentDate.getHours();

    //시계 바늘 회전
    const hourDeg = currentHours * 30 + currentMinutes * 0.5;
    const minuteDeg = currentMinutes * 6;
    const secondDeg = currentSeconds * 6;
    $container.querySelector(".hour").style.setProperty("--deg", hourDeg);
    $container.querySelector(".minute").style.setProperty("--deg", minuteDeg);
    $container.querySelector(".second").style.setProperty("--deg", secondDeg);
  };
  setInterval(updateClock, 1000);
};
export default AnalogClock;
