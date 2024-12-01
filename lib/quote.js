/*BASE ORI PAKOYOFFC
CREDITS GUA JANGAN DI HAPUS

THANKS TO
-PAKOYOFFC

LINK SALURAN GW : https://whatsapp.com/channel/0029VanWleP0lwghgX4Iib2D
*/

const axios = require('axios');

const quote = async (text, name, avatar) => {
  const json = {
    "type": "quote",
    "format": "png",
    "backgroundColor": "#FFFFFF",
    "width": 512,
    "height": 768,
    "scale": 2,
    "messages": [
      {
        "entities": [],
        "avatar": true,
        "from": {
          "id": 1,
          "name": name,
          "photo": {
            "url": avatar,
          }
        },
        "text": text,
        "replyMessage": {}
      }
    ]
  };

  const res = await axios.post('https://bot.lyo.su/quote/generate', json, {
    headers: {'Content-Type': 'application/json'}
  });

  const buffer = Buffer.from(res.data.result.image, 'base64');

  return { 
    result: buffer
  };
};

module.exports = { quote };
