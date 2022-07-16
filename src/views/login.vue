<template>
  <div>
    <div id="wx_login_container" style="height: 300px"></div>
  </div>
</template>
<script>
export default {
  name: "login",
  data() {
    return {}
  },
  methods: {
    get_wx_qrcode() {
      let wx_login = new WxLogin({
        id: "wx_login_container",
        appid: "wx53cf447461989356",
        scope: "snsapi_login",
        redirect_uri: encodeURIComponent("http://www.template.matrix-studio.top/dapi/wx_login/"),
        state: Math.ceil(Math.random() * 100),
        style: "black",
        href: "",
        self_redirect: false,
      });
    },
  },
  mounted() {
    this.get_wx_qrcode();
  }
}
</script>

<style scoped>

</style>