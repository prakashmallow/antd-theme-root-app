import { Spin } from "antd";

const { lazy } = require("react");

const AboutUsComponent = lazy(() => import('about/pages/index'), { ssr: false, loading: () => <Spin />});

const AboutUs = () => 
<AboutUsComponent />;

export default AboutUs;