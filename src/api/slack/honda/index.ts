import { Router } from "express";
import { Honda } from "../../../lib/honda";

const hands = [":fist:", ":v:", ":hand:", ":middle_finger:"];

const router: Router = Router();

router.post("/janken", (req, res) => {
  const hand = req.body.text;

  if (!hands.includes(hand)) {
    res.send(
      "Error: そんな手で勝てると思ってるんですか？じゃんけんは :fist: :v: :hand: で挑戦。ほな、また明日。"
    );
    return;
  }

  const honda = Honda.random();
  const params = {
    response_type: "in_channel",
    text: honda.message,
    attachments: [
      {
        image_url: honda.imageUrl,
      },
    ],
  };

  res.json(params);
});

export default router;
