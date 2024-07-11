export interface Pagination {
  page: number;
  perPage: number;
}

export interface Sort {
  field: string;
  order: 'ASC' | 'DESC';
}

export interface Filter {
  [key: string]: any;
}

export interface GetListParams {
  pagination: Pagination;
  sort: Sort;
  filter: Filter;
}

export interface GetOneParams {
  id: string | number;
}

export interface CreateParams {
  data: any;
}

export interface UpdateParams {
  id: string | number;
  data: any;
}

export interface DeleteParams {
  id: string | number;
}

export interface GetManyParams {
  ids: (string | number)[];
}

export interface GetManyReferenceParams {
  target: string;
  id: string | number;
  pagination: Pagination;
  sort: Sort;
  filter: Filter;
}

export interface UpdateManyParams {
  ids: (string | number)[];
  data: any;
}

export interface DeleteManyParams {
  ids: (string | number)[];
}

export interface DataProvider {
  getList: (resource: string, params: GetListParams) => Promise<any>;
  getOne: (resource: string, params: GetOneParams) => Promise<any>;
  create: (resource: string, params: CreateParams) => Promise<any>;
  update: (resource: string, params: UpdateParams) => Promise<any>;
  delete: (resource: string, params: DeleteParams) => Promise<any>;
  getMany: (resource: string, params: GetManyParams) => Promise<any>;
  getManyReference: (resource: string, params: GetManyReferenceParams) => Promise<any>;
  updateMany: (resource: string, params: UpdateManyParams) => Promise<any>;
  deleteMany: (resource: string, params: DeleteManyParams) => Promise<any>;
}
