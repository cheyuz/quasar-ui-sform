import { boot } from 'quasar/wrappers'
import VuePlugin from 'quasar-ui-sform'

export default boot(({ app }) => {
  app.use(VuePlugin)
})
