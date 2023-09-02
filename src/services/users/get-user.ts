import type { ApiContext, User } from "types";
import { fetcher } from "utils";

export type GetUserParams = {
  /**
   * ユーザID
   */
  id: number;
};

/**
 * ユーザAPI（個別取得）
 * @param context APIコンテキスト
 * @param params パラメータ
 * @returns ユーザ
 */
const getUser = async (
  context: ApiContext,
  { id }: GetUserParams
): Promise<User> => {
  /**
    // ユーザAPI
    // サンプルレスポンス
    {
        "id":1,
        "displayName"; "Taketo Yoshida",
        "email": "teketo@example.com",
        "profileImageUrl": "/users/1.png",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    }
    */
  return await fetcher(
    `${context.apiRootUrl.replace(/\/$/g, "")}/users/${id}`,
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
};

export default getUser;
