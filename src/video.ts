import { Skin } from "./skin";
import { XVideoOption } from "./types";

class XVideo {
  private option: XVideoOption;
  private vNode?: HTMLVideoElement;
  private wrapper?: Element;
  private vNodeContainer?: HTMLDivElement;
  private skin?: Skin;
  constructor(option: XVideoOption) {
    this.option = option;
    this.createVideo();
    this.createContainer();
  }

  createVideo() {
    this.vNode = document.createElement('video');
  }

  createContainer() {
    this.vNodeContainer = document.createElement('div');
  }

  init() {
    const { option, vNodeContainer } = this;
    const container = option?.container;
    if (!container || !vNodeContainer) {
      return;
    }
    if (typeof container === 'string') {
      const el = document.querySelector(container);
      if (!el) {
        throw Error('invalid video container');
      }
      this.wrapper = el;
    } else if (container instanceof Element) {
      this.wrapper = container;
    } else {
      throw Error('invalid video container type');
    }
    if (!this.wrapper) {
      return;
    }
    this.setVideoOption();
    this.wrapper.appendChild(vNodeContainer);
  }
  setVideoOption() {
    const { option, vNode, vNodeContainer } = this;
    if (!vNode || !vNodeContainer) {
      return;
    }
    vNode.src = option.url;
    vNodeContainer.appendChild(vNode);
    this.skin = new Skin({videoInstance: vNode});
    if (this.skin.vm) {
      vNodeContainer.appendChild(this.skin.vm);
    }
  }
  play() {
    if (!this.vNode) {
      return;
    }
    this.vNode.play();
  }
  resume() {
    if (!this.vNode) {
      return;
    }
    this.vNode.play();
  }
  pause() {
    if (!this.vNode) {
      return;
    }
    this.vNode.pause();
  }
}

export default XVideo
