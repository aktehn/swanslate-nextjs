import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { query: { text, target }
    } = req

    if (typeof text == "string" && typeof target == "string")
        getDataFromYandex(text, target).then(data => res.status(200).json({ translateData: data }))

}

async function getDataFromYandex(text: string, target: string) {
    const res = await axios.get(`https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20210425T183943Z.bc52f65182cd75b0.3a3dd388834fee3442ea491a8f8864f563feac79&text=${text}&lang=${target}`)
    return res.data
}
