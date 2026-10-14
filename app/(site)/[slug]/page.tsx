import { locationRoute } from "@/components/pages/locationRoute";

const route = locationRoute("/");

export const dynamicParams = false;
export const generateStaticParams = route.generateStaticParams;
export const generateMetadata = route.generateMetadata;
export default route.Page;
