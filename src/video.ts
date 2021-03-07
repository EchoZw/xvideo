import { XVideoOption } from "./types";

class XVideo {
  private option: XVideoOption;
  private vnode?: HTMLVideoElement;
  private wrapper?: Element;
  constructor(option: XVideoOption) {
    this.option = option;
    this.createElement();
  }

  private createElement() {
    this.vnode = document.createElement('video');
  }

  init() {
    const { option, vnode } = this;
    const container = option?.container;
    if (!container || !vnode) {
      return;
    }
    if (typeof container === 'string') {
      const el = document.querySelector(container);
      if (!el) {
        throw Error('invalid video container');
      }
      this.wrapper = el;
    } else if (container instanceof Element) {
      this.wrapper === container;
    } else {
      throw Error('invalid video container type');
    }
    if (!this.wrapper || !this.vnode) {
      return;
    }
    this.wrapper.appendChild<HTMLVideoElement>(this.vnode);
  }
  play() {
    if (!this.vnode) {
      return;
    }
    this.vnode.play();
  }
  resume() {
    if (!this.vnode) {
      return;
    }
    this.vnode.play();
  }
  pause() {
    if (!this.vnode) {
      return;
    }
    this.vnode.pause();
  }
}

export default XVideo
