export enum ConnectionMode {
    Connect = 'quack-connect',
    Disconnect = 'quack-disconnect',
    GetTweet = 'quack-get-tweet',
    GetTrend = 'quack-get-trend',
};

export const Count = {
    Info: 3, // お知らせの数
    Card: 100, // カード枚数
    Teal: 10, // 鴨数
};

export const Message = {
    empty: '',
    Loading: 'Loading Now!',
    connectionFailed: 'Please access later...',
};
