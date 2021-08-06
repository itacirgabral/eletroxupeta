- [ ] https://www.electronjs.org/docs/api/app#appimportcertificateoptions-callback-linux


- https://github.com/arantes555/electron-fetch/issues/18#issuecomment-825066835
```
import { Agent } from 'https'

const cert = await fs.promises.readFile('path/to/cert.cert')
const key = await fs.promises.readFile('path/to/private_key.key')
const agent = new Agent({ cert, key })
const params = {
  method: 'GET',
  agent: httpsAgent,
  useElectronNet: false
}
const response = await fetch(url, params)
```