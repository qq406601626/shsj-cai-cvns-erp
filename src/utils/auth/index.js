import config from './config'
import smCrypto from 'sm-crypto'

const getEncryptPwd = (pwd) => {
    return smCrypto.sm2.doEncrypt(pwd, config.serverPubK, 1)
}

const getDecryptPwd = (pwd) => {
    return smCrypto.sm2.doDecrypt(pwd, config.serverPriK, 1)

}
const setEncryptToken = (token) => {
    const encryptionToken = smCrypto.sm2.doEncrypt(token, config.feTokenPubK, 1)
    localStorage.setItem(config.tokenSsKey, encryptionToken)
}
const getDecryptToken = () => {
    let ss = localStorage.getItem(config.tokenSsKey) || ''
    if (!ss.trim()) {
        return ''
    }
    return smCrypto.sm2.doDecrypt(ss, config.feTokenPriK, 1)
}
export {getEncryptPwd,getDecryptPwd, setEncryptToken, getDecryptToken}
