// TODO: define type later
import {ApiContext, User} from "../../types"
import { fetcher } from "utils"

export type SigninParams = {
    /**
     * ユーザ名
     * サンプルユーザのユーザ名は"user"
     */
    username: string

    /**
     * パスワード
     * サンプルユーザのパスワードは"password"
     */
    password: string
}

/**
 * 認証API
 * @param context APIコンテキスト
 * @param params パラメータ
 * @returns ログインユーザ
 */

const signin = async (
    context: ApiContext,
    params: SigninParams,
): Promise<User> => {
    return await fetcher(
        `${context.apiRootUrl.replace(/\/$/g,"")}/auth/signin`,
        {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(params),
        },
    )
}

export default signin