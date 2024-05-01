import { noAuth } from "..";

export const user = async (id, { username, ref_by = "" }) => {
    const res = await noAuth({
        method: "POST",
        url: `/profile/${id}`,
        data: { telegram_username: username, ref_by },
    });
    return res;
};
