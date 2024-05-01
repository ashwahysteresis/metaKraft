import { noAuth } from "..";

export const verifyTask = async (id, task_id) => {
    const res = await noAuth({
        method: "POST",
        url: `/verify`,
        data: { telegram_uid: id, task_id },
    });
    return res;
};
