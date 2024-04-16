import { CONFIG } from "@/config";
import { MinioStorageProvider } from "./implementations/minio";

const providers = {
  MINIO: new MinioStorageProvider()
}

export const storageProvider = providers[CONFIG.providers.storage.provider as keyof typeof providers]
