interface HondaVariation {
  message: string;
  imageUrl: string;
}

interface Honda {
  variations: HondaVariation[];
  random(): HondaVariation;
}

const UrlPrefix = `${process.env.ROOT_URL}/images/honda`;

export const Honda: Honda = {
  variations: [
    {
      message: `*Y O U  L O S E*
俺の勝ち！
それで勝てると思ってるんやったら俺がずっと勝ちますよ。
ほな、注ぎます。`,
      imageUrl: `${UrlPrefix}/honda_1.png`,
    },
  ],
  random: function () {
    console.log({ variations: this.variations });
    return this.variations[Math.floor(Math.random() * this.variations.length)];
  },
};

export default Honda;
