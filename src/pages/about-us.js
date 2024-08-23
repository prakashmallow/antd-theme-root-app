import themeConfig from "@/components/theme/themeConfig";
import { Spin } from "antd";

const { lazy } = require("react");

const AboutUsComponent = lazy(() => import('about/pages/index'), {
    ssr: false,
    loading: ({ error }) => {
        console.log({ error });
        return <Spin />;
    }
});

const AboutUs = () =>
    <AboutUsComponent theme={themeConfig} />;

export default AboutUs;