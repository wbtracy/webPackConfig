import React from "react";
import Styles from './Clock.less';

export default class Home extends React.Component{

  componentDidMount() {
    const dots = document.getElementById('dots');
    const radius = 350;
    const radianDiv = 30;
    const radianDot = radianDiv * Math.PI / 180;
    console.log(Object.keys(dots.childNodes));
    Object.keys(dots.childNodes).map((item, i) => {
      dots.childNodes[item].style.left = 180 + Math.sin(radianDot * i) * radius + 'px';
      dots.childNodes[item].style.top = 180 + Math.cos(radianDot * i) * radius + 'px';
    });
    const clock = document.getElementById('clock');
    for(let i = 0; i < 60; i++) {
      const clockScale = document.createElement('div');
      const scaleHidden = document.createElement('div');
      const scaleShow = document.createElement('div');
      clockScale.setAttribute('class', Styles.clockScale);
      scaleHidden.setAttribute('class', Styles.scaleHidden);
      scaleShow.setAttribute('class', Styles.scaleShow);
      clockScale.appendChild(scaleHidden);
      clockScale.appendChild(scaleShow);
      clock.appendChild(clockScale);
    }
    const scale = document.getElementsByClassName(Styles.clockScale);
    for(let i = 0; i < scale.length; i++) {
      scale[i].style.transform="rotate(" + (i * 6 - 90) + "deg)";
    }
    this.setTime();
    setInterval(() => {
      this.setTime();
    }, 1000);
  }

  setTime = () => {
    const nowdate = new Date();
    //获取年月日时分秒
    const hours = nowdate.getHours(),
      minutes = nowdate.getMinutes(),
      seconds = nowdate.getSeconds();
    const hour_rotate = (hours * 30 + 90) + (Math.floor(minutes / 12) * 6);
    const clockHour = document.getElementById('clockHour');
    const clockMinute = document.getElementById('clockMinute');
    const clockSecond = document.getElementById('clockSecond');
    clockHour.style.transform = 'rotate(' + hour_rotate + 'deg)';
    clockMinute.style.transform = 'rotate(' + (minutes * 6 + 90) + 'deg)';
    clockSecond.style.transform = 'rotate(' + (seconds * 6 + 90)+'deg)';
  }

  render() {

    return (
      <div >
        <div id="clock" className={Styles.circle}>
          <div className={Styles.origin}/>
          <div id="dots" className={Styles.dot_box}>
            <div className={Styles.dot}>6</div>
            <div className={Styles.dot}>5</div>
            <div className={Styles.dot}>4</div>
            <div className={Styles.dot}>3</div>
            <div className={Styles.dot}>2</div>
            <div className={Styles.dot}>1</div>
            <div className={Styles.dot}>12</div>
            <div className={Styles.dot}>11</div>
            <div className={Styles.dot}>10</div>
            <div className={Styles.dot}>9</div>
            <div className={Styles.dot}>8</div>
            <div className={Styles.dot}>7</div>
          </div>
          <div id="clockHour" className={Styles.hour}/>
          <div id="clockMinute" className={Styles.minute}/>
          <div id="clockSecond" className={Styles.second}/>
        </div>
      </div>
    )
  }
}