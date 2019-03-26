import React, { Component } from 'react';
import { Button } from 'antd';
import JSzip from 'jszip';
import imageArray from './json/image.json';
import fileSaver from 'file-saver';
import './ImageShow.css';

let now = 3, former = 2;

export default class ImageShow extends Component {


  handleDownloadImage = () => {
    const zip = new JSzip();
    // const imageFolder = zip.folder('images');
    const imgContainer = this.refs.imageContainer;
    imageArray.filter((item, i) => i % 30 === 0).map((item, i) => {
      this.getBase64Image(item).then(res => {
        // const base64 = res.split('base64,')[1];
        // imageFolder.file(i + '.png', base64, {base64: true});
        // if (i === imageArray.length - 1) {
        //   zip.generateAsync({
        //     type: 'blob'
        //   }).then(blob => {
        //     fileSaver.saveAs(blob, 'image.zip');
        //     console.log('success');
        //   }).catch(e => {
        //     console.log(e)
        //   });
        // }
        imgContainer.appendChild(res);
      });
    });
  }

  getBase64Image = (img, width, height) => {
    return new Promise((resolve) => {
      const image = new Image();
      image.crossOrigin = '*';
      image.src = img;
      image.onload = () => {
        // const canvas = document.createElement("canvas");
        // canvas.width = width ? width : image.width;
        // canvas.height = height ? height : image.height;
        // const ctx = canvas.getContext("2d");
        // ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
        resolve(image);
      }
    });
  }



  playImage = () => {
    const imageContainer = this.refs.imageContainer;
    const childs = imageContainer.childNodes;
    this.interval = setInterval(() => {
      childs[former].style.visibility = 'hidden';
      childs[now].style.visibility = 'visible';
      former++;
      now++;
      console.log(now);
      if (now === childs.length - 1) {
        clearInterval(this.interval);
        alert("播放完毕！");
      }
    }, 250);
  }

  render() {

    console.log(window);

    return (
      <div>
        <Button onClick={this.handleDownloadImage}>download</Button>
        <Button onClick={this.playImage}>play</Button>
        <div ref="imageContainer" style={{width: '1200px', height: '790px'}} className="home">
          <img src="https://file.cdn.sunmi.com/FILE/back.png" />
          <img src="https://file.cdn.sunmi.com/FILE/latlng_mapdata_1553018429_00.png"/>
        </div>
      </div>
    )
  }
}