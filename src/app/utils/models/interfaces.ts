export interface TInfoCondominio {
    id: number,
    codigo_condominio: string,
    nombre_condominio: string,
    direccion: string,
    rif: string,
    boleta_informativa: string,
    total_aptos: number,
    correo: string,
    telefono: string,
    rrss: string
}

export interface TResponseBackend {
    error: boolean,
    msg: string,
    data: any
}

export interface TInfoHomeUser extends TInfoCondominio {
    nombre_usuario: string,
    nro_apto: string
}