export type SchoolRequest = {
    id: string,
    name: string,
    address: string,
    state: string,
    description: string,
    name_principal: string,
    office: string,
    social_media: string,
    email: string,
    telephone: string,
    cause: string
};

export type SchoolResponse = {
    id: string,
    name: string,
    address: string,
    state: string,
    description: string,
    namePrincipal: string,
    office: string,
    socialMedia: string,
    email: string,
    telephone: string,
    cause: string[]
};

export type OngRequest = {
    id: string,
    name: string,
    address: string,
    state: string,
    description: string,
    name_principal: string,
    office: string,
    social_media: string,
    email: string,
    telephone: string,
    cause: string
};