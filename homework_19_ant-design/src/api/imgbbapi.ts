import { UploadRequestOption } from "rc-upload/es/interface";
import { IMGBB_KEY, IMGBB_URL, METHOD_POST } from "../const/const";

function uploadBase64IMGBB(options: UploadRequestOption) {
  const reader = new FileReader();
  reader.readAsDataURL(options.file as Blob);
  reader.onload = async (): Promise<any> => {
    const formData: FormData = new FormData();
    formData.set("key", IMGBB_KEY);
    formData.set("image", (reader.result as string).replace(/^.*,/, ""));
    await fetch(IMGBB_URL, {
      method: METHOD_POST,
      body: formData,
    })
      .then((resp: Response) => resp.json())
      .then((r: { data: { url: string } }) => {
        if (options.onSuccess) {
          options.onSuccess(r.data.url);
        }
      })
      .catch((resp: any) => {
        // console.error(resp);
        if (options.onError) {
          options.onError(resp);
        }
      });
  };
}

export default uploadBase64IMGBB;
