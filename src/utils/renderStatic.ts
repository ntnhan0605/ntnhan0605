import createEmotionServer from '@emotion/server/create-instance'
import { cache } from '@emotion/css'

export const renderStatic = async (html: any) => {
  if (html === undefined) {
    throw new Error('Did you forget to return html from renderToString?')
  }
  const { extractCritical } = createEmotionServer(cache)
  const { ids, css } = extractCritical(html)

  return { html, ids, css }
}
