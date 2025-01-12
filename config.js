const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VUW5OqOBj8L3nFOYAoilVTtdxGQXFQHBS3zkOEAJGrScDLlP99S51TMw97zs6+pQLpdLr763dQVpiiKTqD0TuoCW4hQ7clO9cIjIDWxDEioAMiyCAYAWQyThZQZm7mGz1OJ+pESKyzrKe6kqTTin+ZhsGxjtxF0XsG1w6om12Owz8AJsQPpmFXU9DGYLsDGw+sYeUdrXjs9hLvwHVpXM1bpKw89Rlcb4gQE1wmZp2iAhGYT9HZhZh8k77qJKq6Dg4DYbjPzlDRx4ouUs01/clrIdr86/ywJiuZdNXv0Z+3gS8UctR1vbXFD2XTC33J3vaqYlEae/myR/alOFg4E4IHfYqTEkVWhEqG2fnbujuq4drEPKfJTIaJnOoVk/QB17PdlbMK5JYmk9zWknUtZd8kDjd+TpYhKWdhtZvrph0JpigPbQLHb2ep+6q+rt3+9PWyr74Sd8mvrGT/R/fDxF2aZmCnnChzpVlprDwd3nr93dFT6lKfrqyg1GM/1orh9+hTGsOLI3HFTpObLt+mpjYV18ud0RVPy3lmz/NpoHL0sO4OP+lD1pA/sXwx+MFOFJuXI9/kfVeLt7txlvYmQkkEd7EqzIvhDlyI52PsKzSfc8P9gbDT2pbdlwxzu6ZRTHGywp6/gFpTjmFj+cbx+f6iDJ2tCIzEawcQlGDKCGS4Ku97fakDYNR6KCSI3eUFlsE8UZ2+buimMOI4zw/ebLbwW0g2vOv0iZDR8/oUcjaynkEH1KQKEaUommDKKnJ2EKUwQRSM/v7ZASU6sYdxt+sksQNiTCh7K5s6r2D0y9VfH2EYVk3JvHMZ6rcFImAkfG4jxnCZ0JuOTQlJmOIW6SlkFIximFN07YAItThENzzgHJV4SA5Lj0Fm1urWtDPDON4op1X5+EWOhZ4iiN2nriyFTz2hN3yCg37vKRaGUSyFsSLHA9AB+GNmbmd+a+FQyZi54INi6kg+F7jOfj9RFwYr5fBuw0N7RFAERow0qAN2MMyaelVlqPwD7lFgS4fz5ny4t0yFd3e5tY/1nQ5j6wvuw1Mwev/sKb2Kbnj9rWyMu2sFdEBxjyC+vbzblwf9oShIoiSM+t2/6I/jTUhY1z9KxG64H6LfTkSIQZxTMAK6tUe89TYxp42/J8fxWA0TVU9U8GnSr7Q/0uQfL2bgSZIcaPpFSUNVMC6nA9K0Y4vOMurv8UwlmMs8MXv+F5B7zzko3TjNllrFeSLXIVntL5eVEYkhi1p8GXTx9OIos6o7JEER2Qon07bZ7blT44xPOi9l2xcOeuueax9O6Rsd2wnWFs+32x5h+XoZPkSnF/2IlnVELOFVmhqDYM774+WYxq3YTqSKkxW3cmKJZm8vkwsxkNnCw06bb1Pic27M5xrmZ3UQmWW8XJet0pZa8pjDew/kH/2L7xPy/hGtGKN7nZXwZtF/mfM15cK18wXjoyB/kyTND53T2GQKV6gLygcbda4Oh7BMFuFMok3ZBD18nPba2mRbcL3+7IA6hyyuSAFGAJYRqXAEOiCHlKmfg7rCBaIMFjUYiQNJlgeSMpCv/wC5umuj3gcAAA=="Ibrahim Adams",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " Ibrahim Adams",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "no",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.Private_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'no',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'no',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'no',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'no',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

