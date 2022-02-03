import type { NextApiRequest, NextApiResponse } from 'next';
import vCardsJS from 'vcards-js';

const handler = (req: NextApiRequest, res: NextApiResponse): void => {
  const vCard = vCardsJS();
  vCard.firstName = 'Levi';
  vCard.lastName = 'Cheney';
  vCard.email = 'levicheney3012@gmail.com';
  vCard.birthday = new Date(11, 16, 2000);
  vCard.photo.attachFromUrl(
    'https://scontent-ort2-1.xx.fbcdn.net/v/t39.30808-6/273146104_4869167276511232_2859202710331493039_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=LWG2dtYvOXkAX8tYLGg&_nc_ht=scontent-ort2-1.xx&oh=00_AT9uMZikiEc2iXHVnt456gh5BEzSnY_72jpvTtEK5P9xGg&oe=61FFCA16',
    'JPEG'
  );
  vCard.socialUrls['github'] = 'https://github.com/Winston104';

  res.setHeader('Content-Type', 'text/vcard; name=vcard.vcf');
  res.setHeader('Content-Disposition', 'inline; filename=vcard.vcf');

  res.send(vCard.getFormattedString());
};

export default handler;
