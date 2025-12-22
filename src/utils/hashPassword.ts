export async function hashPassword(password: string) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}


export async function isPasswordMatch(password: string) {
    const passwordHash = await hashPassword(password);
    return passwordHash === "69655a3ad75b158911867e119cb7922aebccc390b8100e8185303e726c219258";
}