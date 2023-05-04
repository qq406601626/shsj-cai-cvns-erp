import axiosInstance from '@/axios'
let hasFetchedUserInfo = false
let userInfo = {}
const fetchUserInfo = async () => {
    if (!hasFetchedUserInfo) {
        userInfo = await axiosInstance.get('/auth/b/getLoginUser')
        hasFetchedUserInfo = true
    }
    return userInfo
}
export default fetchUserInfo
