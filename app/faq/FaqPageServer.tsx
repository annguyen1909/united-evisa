import { getAllFaqs } from "@/lib/faq";
import FaqClient from "../../components/shared/FaqClient";

export default function FaqPageServer() {
  const faqs = getAllFaqs();
  return <FaqClient faqs={faqs} />;
}
