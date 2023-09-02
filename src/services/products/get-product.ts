import type { ApiContext, Product } from "types";
import { fetcher } from "utils";

export type GetProductParams = {
  /**
   * 商品ID
   */
  id: number;
};

/**
 * ユーザAPI（個別取得）
 * @param context APIコンテキスト
 * @param params パラメータ
 * @returns ユーザ
 */
const getProduct = async (
  context: ApiContext,
  { id }: GetProductParams
): Promise<Product> => {
  return await fetcher(
    `${context.apiRootUrl.replace(/\/$/g, "")}/products/${id}`,
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
};

export default getProduct;
