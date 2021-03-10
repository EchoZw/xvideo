interface SkinProps {
    videoInstance: HTMLVideoElement;
}

export class Skin {
    private videoVm?: HTMLVideoElement;
    private container?: HTMLDivElement;

    constructor(props: SkinProps) {
        this.videoVm = props.videoInstance;
        this.createContainer();
    }

    createContainer() {
        this.container = document.createElement('div');
    }

    get vm() {
        return this.container;
    }
}
