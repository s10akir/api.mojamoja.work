interface Honda {
  message: string;
  imageUrl: string;
}

const UrlPrefix = `${process.env.ROOT_URL}/images/honda`;

export const Hondas: Honda[] = [
  {
    message: `*Y O U  L O S E* 俺の勝ち！
それで勝てると思ってるんやったら俺がずっと勝ちますよ。
ほな、注ぎます。`,
    imageUrl: `${UrlPrefix}/honda_1.png`,
  },
];
