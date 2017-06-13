/**
 * @providesModule Assets
 */

import meIcon from './icon-me.png';
import youIcon from './icon-you.png';

const getAsset = assetName => {

  switch (assetName) {

  case 'meIcon':
    return meIcon;
  case 'youIcon':
    return youIcon;
  }
};

export default getAsset;