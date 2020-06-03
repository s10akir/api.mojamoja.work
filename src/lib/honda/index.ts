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
      imageUrl: `${UrlPrefix}/honda_01.png`,
    },
    {
      message: `*Y O U  L O S E*
俺の勝ち！
何事も準備がすべて。それを怠っている事がバレてますよ。
ほな、注ぎます。`,
      imageUrl: `${UrlPrefix}/honda_02.png`,
    },
    {
      message: `*Y O U  L O S E*
俺の勝ち！
何事も準備がすべて。それを怠っている事がバレてますよ。
ほな、注ぎます。`,
      imageUrl: `${UrlPrefix}/honda_03.png`,
    },
    {
      message: `もっと美味しくなったペプシジャパンコーラ、飲んでみたくないですか？
それやったら買ってください。`,
      imageUrl: `${UrlPrefix}/honda_04.png`,
    },
    {
      message: `あなたの分はありません。`,
      imageUrl: `${UrlPrefix}/honda_05.png`,
    },
    {
      message: `*Y O U  L O S E*
俺の勝ち！
貴方の考えてることくらい僕にはお見通しです。
ほな、注ぎます`,
      imageUrl: `${UrlPrefix}/honda_06.png`,
    },
    {
      message: `*Y O U  L O S E*
俺の勝ち！
その程度の気持ちで勝てるとでも思ったんですか？
ちゃんと練習してきてください
ほな、注ぎます`,
      imageUrl: `${UrlPrefix}/honda_07.png`,
    },
    {
      message: `*Y O U  L O S E*
俺の勝ち！
一年間何やってたんですか？
これはじゃんけんに対する意識の差です。
ほな、注ぎます`,
      imageUrl: `${UrlPrefix}/honda_08.png`,
    },
    {
      message: `*Y O U  L O S E*
俺の勝ち！
一年間何やってたんですか？
これはじゃんけんに対する意識の差です。
ほな、注ぎます`,
      imageUrl: `${UrlPrefix}/honda_09.png`,
    },
    {
      message: `*Y O U  W I N*
俺の負け！
今日は負けを認めます。
ただ、勝ち逃げは許しませんよ
ほな、注ぎます`,
      imageUrl: `${UrlPrefix}/honda_10.png`,
    },
    {
      message: `*Y O U  W I N*
俺の負け！
今日は負けを認めます。
ただ、勝ち逃げは許しませんよ
ほな、注ぎます`,
      imageUrl: `${UrlPrefix}/honda_11.png`,
    },
    {
      message: `*Y O U  W I N*
俺の負け！
今日は負けを認めます。
ただ、勝ち逃げは許しませんよ
ほな、注ぎます`,
      imageUrl: `${UrlPrefix}/honda_12.png`,
    },
  ],
  random: function () {
    console.log({ variations: this.variations });
    return this.variations[Math.floor(Math.random() * this.variations.length)];
  },
};

export default Honda;
