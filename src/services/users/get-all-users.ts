import type { ApiContext, User } from "types";
import { fetcher } from "utils";

/**
 * ユーザAPI（個別取得）
 * @param context APIコンテキスト
 * @returns ユーザ一覧
 */
const getAllUsers = async (context: ApiContext): Promise<User[]> => {
  return await fetcher(`${context.apiRootUrl.replace(/\/$/g, "")}/users`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
};

export default getAllUsers;
