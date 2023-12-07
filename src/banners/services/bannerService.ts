import { getBanner } from "../Dal/bannerDal";

export const getBannerService = async () => {
  try {
    const message = await getBanner();
    return message;
  } catch (error) {
    return Promise.reject(error);
  }
};
