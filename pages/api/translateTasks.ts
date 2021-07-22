import type { NextApiRequest, NextApiResponse } from 'next';
import initialData from "./initialData.json";

type Data = {
    [id: string]: {
        id: string,
        date: string,
        originalText: string;
        translatedText: {
            TR: string,
            RU: string;
        };
    };
};

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    res.status(200).json(initialData);
}
