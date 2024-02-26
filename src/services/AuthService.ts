"use server";

export const sendSignInRequest = async ({
    unique_id,
    password
}: {
    unique_id: string,
    password: string
}): Promise<Response> => {
    return fetch(process.env["NEXT_PUBLIC_API_URL"] + "auth/sign-in", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "accept": "application/json",
        },
        body: JSON.stringify({
            unique_id: unique_id,
            password: password,
        }),
    }).then(async (response) => {
        const token = await response.text();
        localStorage.setItem("auth-token", token);
        return response
    });
};

export const sendEmailVerificationRequest = async ({
    email
}: {
    email: string
}): Promise<Response> => {
    return fetch(process.env["NEXT_PUBLIC_API_URL"] + "auth/email/request-verification", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "accept": "application/json",
        },
        body: JSON.stringify({
            email: email,
        }),
    });
}

export const sendSignUpRequest = async ({
    unique_id,
    email,
    email_verification_key,
    password
}: {
    unique_id: string,
    email: string,
    email_verification_key: string,
    password: string
}): Promise<Response> => {
    return fetch(process.env["NEXT_PUBLIC_API_URL"] + "auth/sign-up", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "accept": "application/json",
        },
        body: JSON.stringify({
            unique_id: unique_id,
            email: email,
            email_verification_key: email_verification_key,
            password: password,
        }),
    });
}