import service from "@/api/base";

export default {
    wx_login(code) {
        return service({
            url: `/wx_login/?code=${code}`,
            method: "get",
        })
    },
}