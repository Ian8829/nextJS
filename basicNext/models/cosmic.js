const config = {
  bucket: {
    slug: 'nextjs-website'
  }
};

import Cosmic from 'cosmicjs';

export default {
  getPage(slug) {
    const data = new Promise(resolve => {
      Cosmic.getObject(config, {slug}, (err, res) => {
        resolve(res);
      });
    });
    return data;
  }
}