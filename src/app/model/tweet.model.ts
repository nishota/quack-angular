export interface ITweetData{
    id: string;
    text: string;
    date: Date;
    media_url: string;
    usr: {id: string, name: string};
}

export interface ITrend{
    name: string;
}

export class TweetData {
    id: number;
    Text: string;
    User: string;
    Url: string;
    Date: string;
    imgUrl: string;
    FromTop: number;
    isShown: boolean;
    Changed: boolean;
    Delay: number;
    constructor(
        id: number, text: string, user: string,
        url: string, date: string, imgUrl: string, fromTop: number,
        isShown: boolean, changed: boolean, delay: number) {
        this.id = id;
        this.Text = text;
        this.User = user;
        this.Url = url;
        this.Date = date;
        this.imgUrl = imgUrl;
        this.FromTop = fromTop;
        this.isShown = isShown;
        this.Changed = changed;
        this.Delay = delay;
    }
}
