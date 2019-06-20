import React, { Component } from 'react';
import { Button } from 'antd';
import JSzip from 'jszip';
import imageArray from './imageTotal.json';
import fileSaver from 'file-saver';
import Styles from './ImagePlay.less';
import moment from 'moment';

let now = 3, former = 2;

export default class ImagePlay extends Component {

  handleDownloadImage = () => {
    const zip = new JSzip();
    // const imageFolder = zip.folder('images');
    const imgContainer = this.refs.imageContainer;
    imageArray.map((item, i) => {
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
        const canvas = document.createElement("canvas");
        canvas.width = width ? width : image.width;
        canvas.height = height ? height : image.height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL('image/png'));
      }
    });
  }

  downloadZip = () => {
    const zip = new JSzip();
    const imageFolder = zip.folder('images');
    imageArray.map((item, i) => {
      this.getBase64Image(item).then(res => {
        const base64 = res.split('base64,')[1];
        console.log(i);
        imageFolder.file(item.split('_')[2] + '.png', base64, {base64: true});
        if (i === imageArray.length - 1) {
          zip.generateAsync({
            type: 'blob'
          }).then(blob => {
            fileSaver.saveAs(blob, 'image.zip');
            console.log('success');
          }).catch(e => {
            console.log(e)
          });
        }
      });
    });
  }

  playImage = () => {
    const imageContainer = this.refs.imageContainer;
    const childs = imageContainer.childNodes;
    childs[childs.length - 1].style.visibility = 'hidden';
    this.interval = setInterval(() => {
      childs[former].style.visibility = 'hidden';
      childs[now].style.visibility = 'visible';
      former++;
      now++;
      if (now === childs.length) {
        clearInterval(this.interval);
        alert("播放完毕！");
        now = 3;
        former = 2;
      }
    }, 250);
  }

  render() {

    return (
      <div>
        <Button onClick={this.handleDownloadImage}>download</Button>
        <Button onClick={this.playImage}>play</Button>
        <Button onClick={this.downloadZip}>download zip</Button>
        <div ref="imageContainer" style={{width: '1200px', height: '790px'}} className={Styles.home}>
          <img src="https://file.cdn.sunmi.com/FILE/back4k.png" />
          <img src="https://file.cdn.sunmi.com/FILE/latlng_mapdata_1554314431_00.png"/>
        </div>
      </div>
    )
  }
}