import BronzeIcon from '@assets/images/medals/bronze.png';
import DiamondIcon from '@assets/images/medals/diamond.png';
import GoldIcon from '@assets/images/medals/gold.png';
import SilverIcon from '@assets/images/medals/silver.png';

function getMedalByPoints(points: number) {
  if (!points) {
    return BronzeIcon;
  }
  if (points < 200) {
    return SilverIcon;
  }

  return points < 500 ? GoldIcon : DiamondIcon;
}

export default getMedalByPoints;
