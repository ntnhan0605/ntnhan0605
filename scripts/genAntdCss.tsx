import { extractStyle } from '@ant-design/static-style-extract'
import fs from 'fs'

const outputPath = './public/css/antd.min.css'
const css = extractStyle()

fs.writeFileSync(outputPath, css)
