export interface MetaDataPageApi {
   "total": number,
   "per_page": number,
   "current_page": number,
   "last_page": number,
   "first_page": number,
   "first_page_url": string,
   "last_page_url": string | null,
   "next_page_url": string | null,
   "previous_page_url": null
}


/**
 * @description Interface que define o formato de uma página de dados da API.
 * @template Data Tipo de dado da página.
 */
export interface PageAPI<Data> {
   meta: MetaDataPageApi,
   data: Data[]
}

