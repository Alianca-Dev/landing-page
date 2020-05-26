export default {
    methods: {
    showSuccessNotification(title, message) {
      this.$notify({
        group: "notifications-top-right bg-success text-white",
        title: title,
        text: message
      })
    },
    showDangerNotification(title, message) {
      this.$notify({
        group: "notifications-top-right bg-danger text-white",
        title: title,
        text: message
      })
    },
    showWarningNotification(title, message) {
      this.$notify({
        group: "notifications-top-right bg-warning text-white",
        title: title,
        text: message
      })
    },
    showInformationNotification(title, message) {
      this.$notify({
        group: "notifications-top-right bg-info text-white",
        title: title,
        text: message
      })
    },
    showDarkNotification(title, message) {
      this.$notify({
        group: "notifications-top-right bg-dark text-white",
        title: title,
        text: message
      })
    }
  }
}
