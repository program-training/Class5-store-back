import { getBanner } from "../Dal/bannerDal";

export const getBannerService = async () => {
  return getBanner();
};
