export class Videos {
    id: number;
    title: string;
    videocode: string;
    description: string;
    constructor(idx: number, titlex: string, videocodex: string, descriptionx: string) {
        this.id = idx;
        this.title = titlex;
        this.videocode = videocodex;
        this.description = descriptionx;
    }
}