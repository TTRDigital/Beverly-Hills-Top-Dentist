import { locationRoute } from "@/components/pages/locationRoute";

const route = locationRoute("/locations/mclean/");

export const dynamicParams = false;
export const generateStaticParams = route.generateStaticParams;
export const generateMetadata = route.generateMetadata;
export default route.Page;
