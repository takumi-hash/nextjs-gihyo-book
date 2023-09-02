export const fetcher = async (
    resource: RequestInfo,
    init?: RequestInit,
    //eslint-disable-next-linr @typescript-eslint/no-explicit-any
): Promise<any> => {
    const res = await fetch(resource, init)

    if(!res.ok) { // if response fails
        const errorRes = await res.json()
        const error = new Error(
            errorRes.messasge ?? "APIリクエスト中にエラーが発生しました。",
        )
        throw error
    }
    return res.json
}