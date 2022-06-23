export interface TInfoCondominio {
    id: number,
    codigo_condominio: string,
    nombre: string,
    direccion: string,
    rif: string,
    boleta_informativa: string,
    total_aptos: number
}

export interface TResponseBackend {
    error: boolean,
    msg: string,
    data: any
}

export interface THeadHomeUser {
    nombre_condominio: string,
    apto: string,
    nombre_propietario: string,
    direccion_condominio: string
}