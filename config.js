const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VUW5OqOBj8L3nVcxQQBKumagHvCCoOKG6dhwABo9xMAshM+d+3cGZq5mHP2dm3VCCdTnd//QqyHFNkoAaMXkFBcAUZapesKRAYAa2MIkRAF4SQQTAC5jLgSZ0F+ZDOs96mqaApD5LFbtzXaE+Z2PKu5xbzqWE5zhO4d0FR+gkO/gC49JqLL8AtVtyA2/XyNZI8zobucLylZsEXHUuZcrIVrLnBE7i3iBATnMWT4oRSRGBioGYDMfkefbriq3OzoupYrFlz1FxLrHsXuylnOOSEsx1Pps7Gg8+rbPE9+kanmUrMQ2fk73dolhwPNp8GzNSwVlm0L/TSOUzxzpfn+Rt9iuMMhYsQZQyz5tu6X9SOMrn5ayndGtl2KDiThbTE63Q9Vzwj16rKj4584Aup803iyvosIfHavwnhPn9282p+ZkyWzcPM1/18fF7a6Y1zzGKb0K/EN+QjK5f/o7u3zGVv3BE5PVl20jo6VqkSos6+kdJAl4ivOZtg+jJYldPt9+jH2NHGzKNZGU83hkDn/u12vGjzTccI9UPtzvC0sxO8jnA2P+lDVpI/sTzo5+lzEVjl2Cikc0qO3qoWfKGXxO5wv6yvM1S6tgO3L1IkRLrQKdbZC1nfFlun0mV57/rXHSFXd4wqg5o7ThrKLxNcPz1edEHNIgQj7t4FBMWYMgIZzrPHXp/vAhhWOxQQxB7yAk1f5pFMzgt3lwdwNjB7hNq2jM2Kc0TbLTRLfTYN62ZH+RPogoLkAaIUhXNMWU4aE1EKY0TB6O9fXZChG3szrr1O4LogwoQyJyuLJIfhh6sfH2EQ5GXGdk0W6O0CETDqf24jxnAW01bHMoMkOOEK6SfIKBhFMKHo3gUhqnCAWjwwte2YP+5VeymF5JTv422a7OKW8inP3n7pI4EfhKH4g4/k/o9ByPM/YCDxP6QAKpHAhZKg9EEX4PeZac/8PhcdPmGBHLqXrWU7kscd1IpLguZy7T9seNMeERSCESMl6gIfBpeyeM4vKPsD7rCZnTdilXo2P+Cvkh4vq8o5LquhtviC++YpGL1+9pSehy2eOdZt19wboAvSRwRx+3JelIaizPUFTuiPBtxf9GfdCgmL4meGWIv7Lnp7IkQM4oSCEdAXEeotnPnEKOuhT2czdRGreqyCT5M+0v6WJrd+mXg7QZA8TX9RToHaH7/crkjT6go1EhLPeKUS3LnsuMvTv4CAEXD0Swltr9c7DOodydLF5kyui+pmT6yeKWT86TTpX7xQNo6oCA/CdeWgU1zvj0MekRN7bvZDp9r413lxHqsRXSNxmfF6OxofYfl62XF6KMdqsrEsd9Zwqa4dxXijK6ckyJTZTBEn5GSLTEnzEqKjGPAmPDZGaiU0pIbGb7mgXgZoIFbTitet2YpAGZ9O6tscPnogee9f/JiQ1/doRRg96iyDrUX/Zc7XlPfv3S8Y7wX5myRpbmDeZhOmdFJ1S3veQbVUWYZZvA1WAi2z0hvg2hhUxYQdwf3+qwuKBLIoJykYAZiFJMch6IIEUqZ+DuozThFlMC3AiBsKEidIQ4m//wOgPBP13gcAAA==',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Ibrahim Adams",
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

