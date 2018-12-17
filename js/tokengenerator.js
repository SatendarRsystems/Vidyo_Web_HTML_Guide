let API_KEY = "4feced96b25342a4830b422ba92fb428"; //vidyo api key
let APP_ID = "c8475c.vidyo.io"; // vidyo app id
let EXPIRE_TIME = 99999; //expire time for token

/**
* Description: generate token for vidyo connector.This method used jsSHA library to generate the token
* @param string username
* @return string token
*/
generateToken = (USER_NAME) => {
    let vCard = "";
    const EPOCH_SECONDS = 62167219200;
    const expires = Math.floor(Date.now() / 1000) + EXPIRE_TIME + EPOCH_SECONDS;
    const shaObj = new jsSHA("SHA-384", "TEXT");
    shaObj.setHMACKey(API_KEY, "TEXT");
    const jid = USER_NAME + '@' + APP_ID;
    const body = 'provision' + '\x00' + jid + '\x00' + expires + '\x00' + vCard;
    shaObj.update(body);
    const mac = shaObj.getHMAC("HEX");
    const serialized = body + '\0' + mac;
    return btoa(serialized);
}