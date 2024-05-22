import { FC } from "react"; 

import { useTranslation } from "../i18n";
import { Footer } from "./components/Footer";

interface PageProps {
  params: {
    lng: string;
  };
}
const Page: FC<PageProps> = async ({ params: { lng } }) => {
  const { t } = await useTranslation(lng);
  return (
    <>
      <h1>{t("title")}</h1>

      <Footer lng={lng} />
    </>
  );
};

export default Page;
