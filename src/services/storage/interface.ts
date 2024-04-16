export interface IStorageProvider {
  upload: (file: File) => Promise<string>
  delete: (path: string) => Promise<void>
}