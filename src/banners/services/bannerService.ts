import { getBanner } from "../Dal/bannerDal";

export const getBannerService = async () => {
  try {
    const messeage = await getBanner();
    return messeage;
  } catch (error) {
    return Promise.reject(error);
  }
};
