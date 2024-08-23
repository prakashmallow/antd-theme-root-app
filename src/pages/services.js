import themeConfig from "@/components/theme/themeConfig";
import { Spin } from "antd";

const { lazy } = require("react");

const ServicesComponent = lazy(() => import('services/pages/index'), {
    ssr: false,
    loading: ({ error }) => {
        console.log({ error });
        return <Spin />;
    }
});

const Services = () =>
    <ServicesComponent theme={themeConfig} />;

export default Services;