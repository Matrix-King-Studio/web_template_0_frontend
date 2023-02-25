import service from "@/api/base";

export default {
    wx_login(code) {
        return service({
            url: `/accounts/weixin/login/callback/?code=${code}`,
            method: "get",
        })
    },
}