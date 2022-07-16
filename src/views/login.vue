<template>
  <div>
    <div id="wx_login_container" style="height: 300px"></div>
  </div>
</template>
<script>
import user from '@/api/user'
export default {
  name: "login",
  data() {
    return {}
  },
  mounted() {
    this.get_wx_qrcode();
    setInterval(() => {
      this.wx_login();
    }, 1000);
  },
  methods: {
    get_wx_qrcode() {
      let wx_login = new WxLogin({
        id: "wx_login_container",
        appid: "wx53cf447461989356",
        scope: "snsapi_login",
        redirect_uri: encodeURIComponent("http://www.template.matrix-studio.top/#/login"),
        state: Math.ceil(Math.random() * 100),
        style: "black",
        href: "",
        self_redirect: false,
      });
    },
    wx_login() {
      // 获取当前 URL 参数，如果有 code 则直接请求后端获取用户信息
      const code = this.$route.query.code;
      // log code
      console.log(`code: ${code}`);
      if (code) {
        user.wx_login(code).then(res => {
          console.log(res);
        }).catch(err => {
          console.log(err);
        });
      }
    }
  },
}
</script>

<style scoped>

</style>