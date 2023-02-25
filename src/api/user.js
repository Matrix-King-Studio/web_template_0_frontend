import service from "@/api/base";

export default {
    wx_login(code) {
        return service({
            url: `/dj-rest-auth/social/weixin/`,
            method: "post",
            data: {
                "code": code
            }
        })
    },
}